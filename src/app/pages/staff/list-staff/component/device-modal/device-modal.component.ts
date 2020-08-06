import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { DeviceService } from 'src/app/core/services/api/device.service';
import { StaffService } from 'src/app/core/services/api/staff.service';
import { isUndefined } from 'util';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-device-modal',
  templateUrl: './device-modal.component.html',
  styleUrls: ['./device-modal.component.scss']
})
export class DeviceModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() device: any;
  @Input() listDevice: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  
  dev: any;
  devices: any;
  constructor(
    public formBuilder: FormBuilder,
    private staffService: StaffService,
    private deviceService: DeviceService) {
    this.initializeForm();
    this.loadAllDevice();
  }

  ngOnInit() {
    if (this.device) {
      this.patchData(this.device);
    }
  }

  onClickSubmit() {
    this.submitted = true;
    
    if (this.form.valid ) {
      const data = this.form.value;
      data.des_date = this._convertNgbDateToDate(data.des_date);
      this.passEvent.emit({ event: true, data });
    }
  }
  
  onClickCancel() {
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
          this.passEvent.emit({ event: false });
        }
      });
    } else {
      this.passEvent.emit({ event: false });
    }
  }
  // onChangeCategory(e) {
  //   const bankId = e.id;
  //   this._loadDevice(bankId);
  // }
  // onChangeDevice() {

  //   this._loadAllDevice();
  // }

  loadAllDevice(isFirst = false) {
    const device$ = this.deviceService
      .loadAllDevice()
      .pipe(takeUntil(this.destroyed$));
    device$.subscribe((res: any) => {
      if (res && res.Data) {
        this.devices = res.Data;

        if (this.device) {
          this.form.patchValue({ device_name: this.device.device_name });
        }
        if (this.device && isFirst) {
          // this.form.patchValue({ device_name: this.device.device_name });
        }else{
          this.form.patchValue({  device_name: res.Data[0].name });
        }
               
        
      }
    });
  }

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      dev_id: ['temp_0', null],
      device_id: [null, null],
      device_name: ['', [Validators.required]],
      des_quantity: ['', [Validators.required]],
      des_note: ['', null],
      // des_unit: ['', [Validators.required]],
      des_date: [this._convertDateToNgbDate(new Date()), [Validators.required]],
      // rels_address: ['', [Validators.required]],
    });
  }

  private patchData(device: any) {
    this.form.patchValue({
      dev_id: device.dev_id,
      device_id: device.device_id,
      device_name: device.device_name,
      des_quantity: device.des_quantity,
      des_note: device.des_note,
  
      des_date: this._convertDateToNgbDate(device.des_date),
      // rels_address: device.rels_address,
    });
  }
  private _convertDateToNgbDate(date: any) {
    if (!date) {
      return null;
    }
    const year = moment(date).year();
    const month = moment(date).month() + 1;
    const day = moment(date).date();
    return new NgbDate(year, month, day);
  }

  private _convertNgbDateToDate(ngbDate: any) {
    if (!ngbDate) {
      return '';
    }
    if (isUndefined(ngbDate.year)) return ngbDate;
    const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    return moment(newDate).format();
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
