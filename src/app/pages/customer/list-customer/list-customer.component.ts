import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerModalComponent } from './component/customer-modal/customer-modal.component';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { isNullOrUndefined } from 'util';
import { CustomerService } from '../../../core/services/api/customer.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  private destroyed$ = new Subject();
  breadCrumbItems: Array<{}>;

  submitted: boolean;
  sources: any;
  types: any;
  groups: any;

  textSearch = '';
  sourceSearch = '';
  typeSearch = '';
  groupSearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  selectedCustomer = null;
  customers: any;

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Khách hàng', path: '/' },
      { label: 'Danh sách khách hàng', path: '/', active: true }
    ];
    this._fetchData();
    this._fetchFilter();
  }

  onClickCustomer(customer: any) {
    if (isNullOrUndefined(this.selectedCustomer)) {
      this.selectedCustomer = customer;
    } else {
      if (this.selectedCustomer.cu_id !== customer.cu_id) {
        this.selectedCustomer = customer;
      } else {
        this.selectedCustomer = null;
      }
    }
  }

  openCustomerModal(customer?: any) {
    const modalRef = this.modalService.open(CustomerModalComponent, {
      centered: true,
      size: 'lg'
    });
    if (customer) {
      modalRef.componentInstance.customer = customer;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (customer) {
          this._updateCustomer(res.form);
        } else {
          this._createCustomer(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(customer?: any) {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa khách hàng';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa khách hàng đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this._removeCustomer(customer);
      }
      modalRef.close();
    });
  }

  onPageChange(page: number): void {
    this.page = page - 1;
    this._fetchData();
  }

  onChangeFilter() {
    this.page--;
    this._fetchData();
  }

  private _fetchData() {
    const customer$ = this.customerService
      .loadCustomer({
        pageNumber: this.page,
        pageSize: this.pageSize,
        source_id: this.sourceSearch,
        cu_type: this.typeSearch,
        customer_group_id: this.groupSearch,
        name: this.textSearch
      })
      .pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      if (res) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.customers = res.Data.Results;
      }
    });
  }

  private _fetchFilter() {
    const sources$ = this.customerService
      .loadSourceFilter()
      .pipe(takeUntil(this.destroyed$));

    sources$.subscribe((res: any) => {
      this.sources = res.Data;
    });

    const type$ = this.customerService
      .loadTypeFilter()
      .pipe(takeUntil(this.destroyed$));

    type$.subscribe((res: any) => {
      this.types = res.Data.Results;
    });

    const group$ = this.customerService
      .loadGroupFilter()
      .pipe(takeUntil(this.destroyed$));

    group$.subscribe((res: any) => {
      this.groups = res.Data;
    });
  }

  private _createCustomer(data: any) {
    const createCustomer$ = this.customerService
      .createCustomer(data)
      .pipe(takeUntil(this.destroyed$));
    createCustomer$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _updateCustomer(updated: any) {
    const updateCustomer$ = this.customerService
      .updateCustomer(updated)
      .pipe(takeUntil(this.destroyed$));
    updateCustomer$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _removeCustomer(customer: any) {
    const removeCustomer$ = this.customerService
      .removeCustomer({ customerId: customer.cu_id })
      .pipe(takeUntil(this.destroyed$));
    removeCustomer$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }
}
