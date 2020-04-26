import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CustomerGroupService } from '../../../core/services/api/customer-group.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-group-detail',
  templateUrl: './customer-group-detail.component.html',
  styleUrls: ['./customer-group-detail.component.scss'],
})
export class CustomerGroupDetailComponent implements OnInit, OnDestroy {
  cg_id = null;
  private destroyed$ = new Subject();
  submitted = false;
  errorField = null;

  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private cgService: CustomerGroupService
  ) {}

  ngOnInit() {
    this.cg_id = this.route.snapshot.paramMap.get('cg_id');

    this._initializeForm();

    if (this.cg_id) this._fetchCustomerGroup(this.cg_id);
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
          this.router.navigate(['/customer/customer-group']);
        }
      });
    } else {
      this.router.navigate(['/customer/customer-group']);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;
    if (this.form.value.cg_name.trim() === '') {
      return this.form.controls['cg_name'].setErrors({ required: true });
    }

    if (this.form.value.cg_description.trim() === '') {
      return this.form.controls['cg_description'].setErrors({ required: true });
    }

    const data = this.form.value;
    if (this.cg_id)
      this._updateService({
        ...data,
        cg_id: this.cg_id,
      });
    else this._createService(data);
  }

  //#region Private
  private _initializeForm() {
    this.form = this.formBuilder.group({
      cg_name: ['', [Validators.required]],
      cg_description: ['', [Validators.required]],
    });
  }

  private _fetchCustomerGroup(cg_id: any) {
    const info$ = this.cgService.loadCustomerGroupInfo({ cg_id }).pipe(takeUntil(this.destroyed$));
    info$.subscribe((res: any) => {
      if (res && res.Data) {
        this._patchService(res.Data);
      }
    });
  }

  private _patchService(service: any) {
    this.form.patchValue({
      cg_name: service.cg_name,
      cg_description: service.cg_description,
    });
  }

  private _createService(data: any) {
    const createService$ = this.cgService
      .createCustomerGroup(data)
      .pipe(takeUntil(this.destroyed$));
    createService$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/customer/customer-group']);
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
    const updateService$ = this.cgService
      .updateCustomerGroup(updated)
      .pipe(takeUntil(this.destroyed$));
    updateService$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/customer/customer-group']);
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
