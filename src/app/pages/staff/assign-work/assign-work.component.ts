import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { StaffService } from '../../../core/services/api/staff.service';
import { CustomerService } from '../../../core/services/api/customer.service';

@Component({
  selector: 'app-assign-work',
  templateUrl: './assign-work.component.html',
  styleUrls: ['./assign-work.component.scss'],
})
export class AssignWorkComponent implements OnInit {
  private destroyed$ = new Subject();

  submitted: boolean;

  textSearch = '';
  staffSearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  customerGroups: any;
  customerTypes: any;
  staffs: any;
  selectedStaffs = [];
  selectedCustomerGroup = '';
  selectedCustomerType = '';
  customers: any;

  constructor(private staffService: StaffService, private customerService: CustomerService) {}
  ngOnInit() {
    this._fetchFilter();
  }

  onPageChange(page: number): void {
    this.page = page;
    this._fetchData();
  }

  onChangeFilter() {
    this._fetchData();
  }

  onClickExcute() {
    if (this.selectedStaffs.length === 0)
      return this._notify(false, 'Chưa chọn nhân viên để giao việc');

    if (this.selectedCustomerGroup === '')
      return this._notify(false, 'Chưa chọn đối tượng khách hàng');

    const data = {
      list_staff_id: this.selectedStaffs,
      customer_group_id: this.selectedCustomerGroup,
    };

    const updateCurator$ = this.staffService.updateCurator(data).pipe(takeUntil(this.destroyed$));
    updateCurator$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.selectedStaffs = [];
          this.selectedCustomerGroup = '';
        } else this._notify(false, res.Message);
      },
      (e) => this._notify(false, e.Message)
    );
  }

  private _fetchData() {
    const customer$ = this.customerService
      .loadCustomerByCurator({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch,
        cu_curator_id: this.staffSearch,
      })
      .pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.customers = res.Data.Results;
      }
    });
  }

  private _fetchFilter() {
    const staff$ = this.staffService.loadAllStaff().pipe(takeUntil(this.destroyed$));
    staff$.subscribe((res: any) => {
      this.staffs = res.Data;
      if (res.Data && res.Data.length > 0) {
        this.staffSearch = res.Data[0].id;
        this._fetchData();
      }
    });

    const customerGroup$ = this.customerService.loadGroup().pipe(takeUntil(this.destroyed$));
    customerGroup$.subscribe((res: any) => {
      this.customerGroups = res.Data;
      this.customerGroups.push({
        id: 0,
        name: 'Ngẫu nhiên',
      });
    });

    const customerType$ = this.customerService.loadType().pipe(takeUntil(this.destroyed$));
    customerType$.subscribe((res: any) => {
      this.customerTypes = res.Data;
    });
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
