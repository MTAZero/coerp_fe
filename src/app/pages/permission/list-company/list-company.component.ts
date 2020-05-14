import { Component, OnInit, OnDestroy } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PermissionService } from '../../../core/services/api/permission.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss'],
})
export class ListCompanyComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();

  submitted: boolean;

  textSearch = '';
  page = 1;
  pageSize = 10;
  totalSize = 0;

  selectedCompany = null;
  companies: any;

  constructor(private router: Router, private permissionService: PermissionService) {}
  ngOnInit() {
    this._fetchData();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onClickCompany(company: any) {
    if (isNullOrUndefined(this.selectedCompany)) {
      this.selectedCompany = company;
    } else {
      if (this.selectedCompany.co_id !== company.co_id) {
        this.selectedCompany = company;
      } else {
        this.selectedCompany = null;
      }
    }
  }

  onRouteDetail(company?: any) {
    this.router.navigate(['/permission/list-company-detail', company ? company.co_id : '']);
  }

  openConfirmModal(company?: any) {
    this.onClickCompany(company);
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
        this._removeCompany(company);
      }
    });
  }

  onPageChange(page: number): void {
    this.page = page;
    this._fetchData();
  }

  onChangeFilter() {
    this._fetchData(this.selectedCompany);
  }

  private _fetchData(selected?: any) {
    const company$ = this.permissionService
      .searchCompany({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch,
      })
      .pipe(takeUntil(this.destroyed$));
    company$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.companies = res.Data.Results;
        if (selected) {
          this.selectedCompany = this.companies.find((item) => item.co_id === selected.co_id);
        } else {
          this.selectedCompany = this.companies[0];
        }
      }
    });
  }

  private _removeCompany(company: any) {
    const removeCompany$ = this.permissionService
      .removeCompany({ co_id: company.co_id })
      .pipe(takeUntil(this.destroyed$));
    removeCompany$.subscribe(
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
