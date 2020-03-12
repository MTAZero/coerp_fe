import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerModalComponent } from './component/customer-modal/customer-modal.component';
import { isNullOrUndefined } from 'util';
import { CustomerService } from '../../../core/services/api/customer.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  private destroyed$ = new Subject();

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
    Swal.fire({
      title: 'Chắc chắn muốn xóa khách hàng đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(result => {
      if (result.value) {
        this._removeCustomer(customer);
      }
    });
  }

  onPageChange(page: number): void {
    this.page = page;
    this._fetchData();
  }

  onChangeFilter() {
    this._fetchData(this.selectedCustomer);
  }

  onChange(event) {
    if (event.reload) {
      this._fetchData(this.selectedCustomer);
    }
  }

  setFile(event) {
    let files = event.srcElement.files;
    if (!files) {
      return;
    }

    const import$ = this.customerService.importCustomer(files[0]).pipe(takeUntil(this.destroyed$));
    import$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Nhập khách hàng thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this._fetchData();
        } else {
          Swal.fire({
            position: 'top-end',
            type: 'error',
            title: 'Nhập khách hàng thất bại',
            showConfirmButton: false,
            timer: 2000
          });
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Nhập khách hàng thất bại',
          showConfirmButton: false,
          timer: 2000
        });
      }
    );
  }

  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const import$ = this.customerService
        .updateAvatar(file, this.selectedCustomer.cu_id)
        .pipe(takeUntil(this.destroyed$));
      import$.subscribe(
        (res: any) => {
          if (res.Code === 200) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Cập nhật ảnh khách hàng thành công',
              showConfirmButton: false,
              timer: 2000
            });
            this._fetchData(this.selectedCustomer);
          } else {
            Swal.fire({
              position: 'top-end',
              type: 'error',
              title: 'Cập nhật ảnh khách hàng thất bại',
              showConfirmButton: false,
              timer: 2000
            });
          }
        },
        () => {
          Swal.fire({
            position: 'top-end',
            type: 'error',
            title: 'Cập nhật ảnh khách hàng thất bại',
            showConfirmButton: false,
            timer: 2000
          });
        }
      );
      // const reader = new FileReader();
      // reader.onload = e => (this.thumbnail = reader.result);
      // reader.readAsDataURL(file);
    }
  }

  exportCustomer() {
    const export$ = this.customerService
      .exportCustomer({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        source_id: this.sourceSearch,
        cu_type: this.typeSearch,
        customer_group_id: this.groupSearch,
        name: this.textSearch
      })
      .pipe(takeUntil(this.destroyed$));
    export$.subscribe((res: any) => {
      if (res && res.Data) {
        const link = 'http://27.72.147.222:1230/' + res.Data;
        window.open(link);
      }
    });
  }

  private _fetchData(selected?: any) {
    const customer$ = this.customerService
      .loadCustomer({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        source_id: this.sourceSearch,
        cu_type: this.typeSearch,
        customer_group_id: this.groupSearch,
        name: this.textSearch
      })
      .pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.customers = res.Data.Results;

        if (selected) {
          this.selectedCustomer = this.customers.find(item => item.cu_id === selected.cu_id);
        } else {
          this.selectedCustomer = this.customers[0];
        }
      }
    });
  }

  private _fetchFilter() {
    const sources$ = this.customerService.loadSourceFilter().pipe(takeUntil(this.destroyed$));

    sources$.subscribe((res: any) => {
      this.sources = res.Data;
    });

    const type$ = this.customerService.loadTypeFilter().pipe(takeUntil(this.destroyed$));

    type$.subscribe((res: any) => {
      this.types = res.Data;
    });

    const group$ = this.customerService.loadGroupFilter().pipe(takeUntil(this.destroyed$));

    group$.subscribe((res: any) => {
      this.groups = res.Data;
    });
  }

  private _createCustomer(data: any) {
    const createCustomer$ = this.customerService
      .createCustomer(data)
      .pipe(takeUntil(this.destroyed$));
    createCustomer$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Thêm khách hàng thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this._fetchData();
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Thêm khách hàng thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }

  private _updateCustomer(updated: any) {
    const updateCustomer$ = this.customerService
      .updateCustomer(updated)
      .pipe(takeUntil(this.destroyed$));
    updateCustomer$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Cập nhật khách hàng thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this._fetchData(this.selectedCustomer);
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Cập nhật khách hàng thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }

  private _removeCustomer(customer: any) {
    const removeCustomer$ = this.customerService
      .removeCustomer({ customerId: customer.cu_id })
      .pipe(takeUntil(this.destroyed$));
    removeCustomer$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Xóa khách hàng thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this._fetchData();
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Xóa khách hàng thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }
}
