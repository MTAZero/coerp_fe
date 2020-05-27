import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PermissionService } from '../../../core/services/api/permission.service';
import Swal from 'sweetalert2';
import { menu } from './data';

@Component({
  selector: 'app-list-company-detail',
  templateUrl: './list-company-detail.component.html',
  styleUrls: ['./list-company-detail.component.scss'],
})
export class ListCompanyDetailComponent implements OnInit, OnDestroy {
  co_id = null;
  private destroyed$ = new Subject();
  menu: any[];
  selectedMenuItem = 0;
  submitted = false;
  errorField = null;
  isChange = false;

  listView = [true, true];
  listPackage: any;

  formCompany: FormGroup;
  listFunction = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private permissionService: PermissionService
  ) {}

  ngOnInit() {
    this.co_id = this.route.snapshot.paramMap.get('co_id');
    if (this.co_id === '') this.listView = [false, false];

    this.menu = menu;

    this._initializeForm();
    this._fetchPackage();

    if (this.co_id) {
      this._fetchCompany(this.co_id);
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onClickMenuItem(index: any) {
    this.selectedMenuItem = index;
    const el = document.getElementById(index);
    const content = document.getElementById('content');
    content.scroll({ top: el.offsetTop - 50, behavior: 'smooth' });
  }

  switchViewType(index: number) {
    this.listView[index] = !this.listView[index];
  }

  onChangeToMain() {
    if (this.formCompany.dirty || this.isChange) {
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
          this.router.navigate(['/permission/list-company']);
        }
      });
    } else {
      this.router.navigate(['/permission/list-company']);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.formCompany.invalid) return;
    if (this.formCompany.value.co_name.trim() === '') {
      return this.formCompany.controls['co_name'].setErrors({ required: true });
    }

    const data = {
      ...this.formCompany.value,
      list_function: this.listFunction,
    };
    console.log(data);
    if (this.co_id)
      this._updateCompany({
        ...data,
        co_id: this.co_id,
      });
    else this._createCompany(data);
  }

  checkFunction(fun_id: any) {
    let flag = false;
    this.listFunction.forEach((item) => {
      if (item.fun_id === fun_id) flag = true;
    });
    return flag;
  }

  checkPackage(pac: any) {
    let cnt = 0;
    this.listFunction.forEach((item) => {
      if (item.pac_id === pac.pac_id || item.package_id === pac.pac_id) cnt++;
    });
    if (pac.list_function.length !== 0 && pac.list_function.length === cnt) return true;
    return false;
  }

  onChangeFunc(event: any, func: any) {
    if (event.target.checked) {
      this.listFunction.push(func);
    } else {
      this.listFunction = this.listFunction.filter((item) => item.fun_id !== func.fun_id);
    }
  }

  onChangePackage(event: any, pk: any) {
    if (event.target.checked) {
      this.listFunction = this.listFunction.filter(
        (item) =>
          (item.pac_id !== pk.pac_id && item.pac_id) ||
          (item.package_id && item.package_id !== pk.pac_id)
      );
      pk.list_function.forEach((item) => {
        this.listFunction.push(item);
      });
    } else {
      this.listFunction = this.listFunction.filter(
        (item) =>
          (item.pac_id !== pk.pac_id && item.pac_id) ||
          (item.package_id && item.package_id !== pk.pac_id)
      );
    }
  }

  //#region Private
  private _initializeForm() {
    this.formCompany = this.formBuilder.group({
      co_name: ['', [Validators.required]],
      co_logo: [null, null],
      co_vision: ['', [Validators.required]],
      co_address: [null, [Validators.required]],
      co_mission: ['', [Validators.required]],
      co_target: ['', [Validators.required]],
      co_revenue: [0, [Validators.required]],
      sta_name: ['', null],
      co_duration: [1, [Validators.required]],
      co_price: [1, [Validators.required]],
      co_description: ['', null],
    });
  }

  private _fetchCompany(co_id: any) {
    const info$ = this.permissionService
      .loadCompanyInfo({ co_id })
      .pipe(takeUntil(this.destroyed$));
    info$.subscribe((res: any) => {
      if (res && res.Data) {
        this._patchCompany(res.Data);
      }
    });
  }

  private _fetchPackage() {
    const pk$ = this.permissionService.loadAllPackage().pipe(takeUntil(this.destroyed$));
    pk$.subscribe((res: any) => {
      if (res && res.Data) {
        this.listPackage = res.Data;
      }
    });
  }

  private _patchCompany(company: any) {
    this.formCompany.patchValue({
      co_name: company.co_name,
      co_logo: company.co_logo,
      co_vision: company.co_vision,
      co_address: company.co_address,
      co_mission: company.co_mission,
      co_target: company.co_target,
      co_revenue: company.co_revenue,
      sta_name: company.sta_name,
      co_duration: company.co_duration,
      co_price: company.co_price,
      co_description: company.co_description,
    });

    this.listFunction = company.list_function;
  }

  private _createCompany(data: any) {
    const createCompany$ = this.permissionService
      .createCompany(data)
      .pipe(takeUntil(this.destroyed$));
    createCompany$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/permission/list-company']);
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

  private _updateCompany(updated: any) {
    const updateCompany$ = this.permissionService
      .updateCompany(updated)
      .pipe(takeUntil(this.destroyed$));
    updateCompany$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/permission/list-company']);
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
