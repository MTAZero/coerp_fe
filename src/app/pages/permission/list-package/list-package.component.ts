import { Component, OnInit, OnDestroy } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PermissionService } from '../../../core/services/api/permission.service';

@Component({
  selector: 'app-list-package',
  templateUrl: './list-package.component.html',
  styleUrls: ['./list-package.component.scss'],
})
export class ListPackageComponent implements OnInit {
  private destroyed$ = new Subject();

  submitted: boolean;

  textSearch = '';
  page = 1;
  pageSize = 10;
  totalSize = 0;

  selectedPackagee = null;
  packagees: any;

  constructor(private router: Router, private permissionService: PermissionService) {}
  ngOnInit() {
    this._fetchData();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onClickPackagee(packagee: any) {
    if (isNullOrUndefined(this.selectedPackagee)) {
      this.selectedPackagee = packagee;
    } else {
      if (this.selectedPackagee.pac_id !== packagee.pac_id) {
        this.selectedPackagee = packagee;
      } else {
        this.selectedPackagee = null;
      }
    }
  }

  onRouteDetail(packagee?: any) {
    this.router.navigate(['/permission/list-package-detail', packagee ? packagee.pac_id : '']);
  }

  openConfirmModal(packagee?: any) {
    this.onClickPackagee(packagee);
    Swal.fire({
      title: 'Chắc chắn muốn xóa công ty đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removePackage(packagee);
      }
    });
  }

  onPageChange(page: number): void {
    this.page = page;
    this._fetchData();
  }

  onChangeFilter() {
    this._fetchData(this.selectedPackagee);
  }

  private _fetchData(selected?: any) {
    const packagee$ = this.permissionService
      .searchPackage({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch,
      })
      .pipe(takeUntil(this.destroyed$));
    packagee$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.packagees = res.Data.Results;
        if (selected) {
          this.selectedPackagee = this.packagees.find((item) => item.pac_id === selected.pac_id);
        } else {
          this.selectedPackagee = this.packagees[0];
        }
      }
    });
  }

  private _removePackage(packagee: any) {
    const removePackagee$ = this.permissionService
      .removePackage({ pac_id: packagee.pac_id })
      .pipe(takeUntil(this.destroyed$));
    removePackagee$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this._fetchData();
        } else this._notify(false, res.Message);
      },
      (e) => this._notify(false, e.Message)
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
