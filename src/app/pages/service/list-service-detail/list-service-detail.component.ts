import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ServiceService } from '../../../core/services/api/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-service-detail',
  templateUrl: './list-service-detail.component.html',
  styleUrls: ['./list-service-detail.component.scss'],
})
export class ListServiceDetailComponent implements OnInit, OnDestroy {
  se_id = null;
  private destroyed$ = new Subject();
  submitted = false;
  errorField = null;

  types: any;
  categories: any;
  units: any;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private serviceService: ServiceService
  ) {}

  ngOnInit() {
    this.se_id = this.route.snapshot.paramMap.get('se_id');

    this._initializeForm();
    this._fetchFilter();

    if (this.se_id) this._fetchService(this.se_id);
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
          this.router.navigate(['/service/list-service']);
        }
      });
    } else {
      this.router.navigate(['/service/list-service']);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;
    if (this.form.value.se_name.trim() === '') {
      return this.form.controls['se_name'].setErrors({ required: true });
    }

    const data = this.form.value;
    if (this.se_id)
      this._updateService({
        ...data,
        se_id: this.se_id,
      });
    else this._createService(data);
  }

  //#region Private
  private _initializeForm() {
    this.form = this.formBuilder.group({
      se_name: ['', [Validators.required]],
      se_description: ['', null],
      service_category_id: ['', [Validators.required]],
      se_price: ['', [Validators.required]],
      se_saleoff: ['', null],
      se_type: ['', [Validators.required]],
      se_unit: ['', [Validators.required]],
    });
  }

  private _fetchFilter() {
    const type$ = this.serviceService.getType().pipe(takeUntil(this.destroyed$));
    type$.subscribe((res: any) => {
      this.types = res.Data;
    });

    const category$ = this.serviceService.getCategory().pipe(takeUntil(this.destroyed$));
    category$.subscribe((res: any) => {
      this.categories = res.Data;
    });
    const unit$ = this.serviceService.getUnit().pipe(takeUntil(this.destroyed$));
    unit$.subscribe((res: any) => {
      this.units = res.Data;
    });
  }

  private _fetchService(se_id: any) {
    const info$ = this.serviceService.loadServiceInfo({ se_id }).pipe(takeUntil(this.destroyed$));
    info$.subscribe((res: any) => {
      if (res && res.Data) {
        this._patchService(res.Data);
      }
    });
  }

  private _patchService(service: any) {
    this.form.patchValue({
      se_name: service.se_name,
      se_description: service.se_description,
      service_category_id: service.service_category_id,
      se_price: service.se_price,
      se_saleoff: service.se_saleoff,
      se_type: service.se_type,
      se_unit: service.se_unit,
    });
  }

  private _createService(data: any) {
    const createService$ = this.serviceService.
    createService(data).pipe(takeUntil(this.destroyed$));
    createService$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/service/list-service']);
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

  private _updateService(updated: any) {
    const updateService$ = this.serviceService
      .updateService(updated)
      .pipe(takeUntil(this.destroyed$));
    updateService$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/service/list-service']);
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
  //#endregion
}
