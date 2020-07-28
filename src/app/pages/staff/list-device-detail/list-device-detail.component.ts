import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from 'src/app/core/services/api/device.service';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-device-detail',
  templateUrl: './list-device-detail.component.html',
  styleUrls: ['./list-device-detail.component.scss']
})
export class ListDeviceDetailComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  dev_id = null;
  errorField = null;
  units: any;
  isView = true;
  selectedDevice = null;
  listView = [true];
  private destroyed$ = new Subject();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private deviceService: DeviceService,
  ) { }

  ngOnInit() {
    this.dev_id = this.route.snapshot.paramMap.get('dev_id');
    if (this.dev_id === '') this.listView = [false];
    this._initializeForm();
    this._fetchFilter();
    if (this.dev_id) this._fetchDevice(this.dev_id)
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  onChangeToMain() {
    if (this.form.dirty) {
      Swal.fire({
        title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Có',
        cancelButtonText: 'Không',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['/staff/list-device']);
        }
      });
    } else {
      this.router.navigate(['/staff/list-device']);
    }
  }
  private _initializeForm() {
    this.form = this.formBuilder.group({
      dev_name: ['', [Validators.required]],
      dev_number: [10, null],
      dev_unit: [1, [Validators.required]],
      dev_note: ['', null],
    });
  }
  private _fetchFilter() {
    const unit$ = this.deviceService.loadUnit().pipe(takeUntil(this.destroyed$));
    unit$.subscribe((res: any) => {
      this.units = res.Data;
    });
  }
  private _fetchDevice(dev_id: any) {
    const info$ = this.deviceService.loadDevice({ dev_id }).pipe(takeUntil(this.destroyed$));
    info$.subscribe((res: any) => {
      if (res && res.Data) {
        this._patchDevice(res.Data);
      }
    });
  }
  private _patchDevice(device: any) {
    this.form.patchValue({
      dev_name: device.dev_name,
      dev_number: device.dev_number,
      dev_unit: device.dev_unit,
      dev_note: device.dev_note,
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;
    if (this.form.value.dev_name.trim() === '') {
      return this.form.controls['dev_name'].setErrors({ required: true });
    }

    // if (this.form.value.dev_number.trim() === '') {
    //   // return this.form.controls['dev_number'].setErrors({ required: true });
    // }
    if (this.form.value.dev_unit.trim() === '') {
      return this.form.controls['dev_unit'].setErrors({ required: true });
    }
    // if (this.form.value.dev_note.trim() === '') {
    //   // return this.form.controls['dev_note'].setErrors({ required: true });
    // }

    const data = {
      device: this.selectedDevice,
      ...this.form.value,
    };
    if (this.dev_id)
      this._updateDevice({
        ...data,
        dev_id: this.dev_id,
      });
    else this._createDevice(data);
  }
  private _createDevice(data: any) {
    const createDevice$ = this.deviceService
      .createDevice(data)
      .pipe(takeUntil(this.destroyed$));
    createDevice$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/staff/list-device']);
        } else {
          this._notify(false, res.Message);
          this.errorField = res.Error;
        }
      },
      (e) => {
        this._notify(false, e.Message);
        this.errorField = e.Error;
      }
    );
  }
  private _updateDevice(updated: any) {
    const updateDevice$ = this.deviceService
      .updateDevice(updated)
      .pipe(takeUntil(this.destroyed$));
    updateDevice$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/staff/list-device']);
        } else {
          this._notify(false, res.Message);
          this.errorField = res.Error;
        }
      },
      (e) => {
        this._notify(false, e.Message);
        this.errorField = e.Error;
      }
    );
  }
  private _notify(isSuccess: boolean, message: string) {
      return Swal.fire({
        toast: true,
        position: 'top-end',
        type: isSuccess ? 'success' : 'error',
        title: message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  
}
