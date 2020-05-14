import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PermissionService } from '../../../core/services/api/permission.service';
import Swal from 'sweetalert2';
import { menu } from './data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FunctionModalComponent } from './component/function-modal/function-modal.component';

@Component({
  selector: 'app-list-package-detail',
  templateUrl: './list-package-detail.component.html',
  styleUrls: ['./list-package-detail.component.scss'],
})
export class ListPackageDetailComponent implements OnInit, OnDestroy {
  pac_id = null;
  private destroyed$ = new Subject();
  menu: any[];
  selectedMenuItem = 0;
  submitted = false;
  errorField = null;
  isChange = false;
  tempFunction = 0;

  listView = [true, true];

  formPackage: FormGroup;
  listFunction = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private permissionService: PermissionService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.pac_id = this.route.snapshot.paramMap.get('pac_id');
    if (this.pac_id === '') this.listView = [false, false];

    this.menu = menu;

    this._initializeForm();

    if (this.pac_id) {
      this._fetchPackage(this.pac_id);
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
    if (this.formPackage.dirty || this.isChange) {
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
          this.router.navigate(['/permission/list-package']);
        }
      });
    } else {
      this.router.navigate(['/permission/list-package']);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.formPackage.invalid) return;
    if (this.formPackage.value.pac_name.trim() === '') {
      return this.formPackage.controls['pac_name'].setErrors({ required: true });
    }

    const data = {
      ...this.formPackage.value,
      list_function: this.listFunction,
    };
    console.log(data);
    if (this.pac_id)
      this._updatePackage({
        ...data,
        pac_id: this.pac_id,
      });
    else this._createPackage(data);
  }

  //#region List Function
  openFunctionModal(func?: any) {
    const modalRef = this.modalService.open(FunctionModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.listFunction = this.listFunction;
    if (func) {
      modalRef.componentInstance.func = func;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (func) {
          this.listFunction = this.listFunction.map((item) => {
            if (item.fun_id !== res.form.fun_id) return item;
            return res.form;
          });
          this.isChange = true;
        } else {
          this.listFunction.push({
            ...res.form,
            fun_id: `temp_${this.tempFunction}`,
          });
          this.tempFunction++;
          this.isChange = true;
        }
      }
      modalRef.close();
    });
  }

  onRemoveFunction(func: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa chức năng đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this.listFunction = this.listFunction.filter((item) => item.fun_id !== func.fun_id);
        this.isChange = true;
      }
    });
  }
  //#endregion

  //#region Private
  private _initializeForm() {
    this.formPackage = this.formBuilder.group({
      pac_name: ['', [Validators.required]],
      pac_icon: [null, null],
      pac_status: [1, [Validators.required]],
      pac_price: [0, [Validators.required]],
    });
  }

  private _fetchPackage(pac_id: any) {
    const info$ = this.permissionService
      .loadPackageInfo({ pac_id })
      .pipe(takeUntil(this.destroyed$));
    info$.subscribe((res: any) => {
      if (res && res.Data) {
        this._patchPackage(res.Data);
      }
    });
  }

  private _patchPackage(packagee: any) {
    this.formPackage.patchValue({
      pac_name: packagee.pac_name,
      pac_icon: packagee.pac_icon,
      pac_status: packagee.pac_status,
      pac_price: packagee.pac_price,
    });

    this.listFunction = packagee.list_function;
  }

  private _createPackage(data: any) {
    const createPackage$ = this.permissionService
      .createPackage(data)
      .pipe(takeUntil(this.destroyed$));
    createPackage$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/permission/list-package']);
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

  private _updatePackage(updated: any) {
    const updatePackage$ = this.permissionService
      .updatePackage(updated)
      .pipe(takeUntil(this.destroyed$));
    updatePackage$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/permission/list-package']);
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
