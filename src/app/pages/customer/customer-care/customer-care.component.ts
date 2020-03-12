import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerCareModalComponent } from './component/customer-care-modal/customer-care-modal.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TransactionService } from '../../../core/services/api/transaction.service';
import Swal from 'sweetalert2';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-customer-care',
  templateUrl: './customer-care.component.html',
  styleUrls: ['./customer-care.component.scss']
})
export class CustomerCareComponent implements OnInit {
  private destroyed$ = new Subject();

  submitted: boolean;

  textSearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  transactions: any[];
  selectedOrder = null;

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder,
    private transactionService: TransactionService
  ) {}
  ngOnInit() {
    this._fetchData();
  }

  onClickOrder(transaction: any) {
    if (isNullOrUndefined(this.selectedOrder)) {
      this.selectedOrder = transaction;
    } else {
      if (this.selectedOrder.tra_id !== transaction.tra_id) {
        this.selectedOrder = transaction;
      } else {
        this.selectedOrder = null;
      }
    }
  }

  openCustomerCareModal(transaction?: any, isView = false) {
    const modalRef = this.modalService.open(CustomerCareModalComponent, {
      centered: true,
      size: 'xl'
    });
    if (transaction) {
      modalRef.componentInstance.transaction = transaction;
      modalRef.componentInstance.isView = isView;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (transaction) {
          this._updateTransaction(res.form);
        } else {
          this._createTransaction(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(transaction?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa giao dịch khách hàng đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(result => {
      if (result.value) {
        this._removeTransaction(transaction);
      }
    });
  }

  onPageChange(page: number): void {
    this.page = page;
    this._fetchData();
  }

  onChangeFilter() {
    this._fetchData(this.selectedOrder);
  }

  private _fetchData(selected?: any) {
    const transaction$ = this.transactionService
      .loadTransaction({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch
      })
      .pipe(takeUntil(this.destroyed$));
    transaction$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.transactions = res.Data.Results;

        if (selected) {
          this.selectedOrder = this.transactions.find(item => item.tra_id === selected.tra_id);
        } else {
          this.selectedOrder = this.transactions[0];
        }
      }
    });
  }

  private _createTransaction(data: any) {
    const createTransacstion$ = this.transactionService
      .createTransaction(data)
      .pipe(takeUntil(this.destroyed$));
    createTransacstion$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Thêm giao dịch khách hàng thành công',
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
          title: 'Thêm giao dịch khách hàng thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }

  private _updateTransaction(updated: any) {
    const updateTransaction$ = this.transactionService
      .updateTransaction(updated)
      .pipe(takeUntil(this.destroyed$));
    updateTransaction$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Cập nhật giao dịch khách hàng thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this._fetchData(this.selectedOrder);
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Cập nhật giao dịch khách hàng thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }

  private _removeTransaction(transaction: any) {
    const removeTransaction$ = this.transactionService
      .removeTransaction({
        transactionId: transaction.tra_id
      })
      .pipe(takeUntil(this.destroyed$));
    removeTransaction$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Xóa giao dịch khách hàng thành công',
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
          title: 'Xóa giao dịch khách hàng thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }
}
