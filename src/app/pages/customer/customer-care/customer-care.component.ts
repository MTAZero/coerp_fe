import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { CustomerCareModalComponent } from './component/customer-care-modal/customer-care-modal.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TransactionService } from '../../../core/services/api/transaction.service';

@Component({
  selector: 'app-customer-care',
  templateUrl: './customer-care.component.html',
  styleUrls: ['./customer-care.component.scss']
})
export class CustomerCareComponent implements OnInit {
  private destroyed$ = new Subject();
  breadCrumbItems: Array<{}>;

  submitted: boolean;

  textSearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  transactions: any[];

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder,
    private transactionService: TransactionService
  ) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Khách hàng', path: '/' },
      { label: 'Giao dịch khách hàng', path: '/', active: true }
    ];
    this._fetchData();
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
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa giao dịch khách hàng';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa giao dịch khách hàng đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this._removeTransaction(transaction);
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
    const transaction$ = this.transactionService
      .loadTransaction({
        pageNumber: this.page,
        pageSize: this.pageSize,
        search_name: this.textSearch
      })
      .pipe(takeUntil(this.destroyed$));
    transaction$.subscribe((res: any) => {
      if (res) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.transactions = res.Data.Results;
      }
    });
  }

  private _createTransaction(data: any) {
    const createTransacstion$ = this.transactionService
      .createTransaction(data)
      .pipe(takeUntil(this.destroyed$));
    createTransacstion$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _updateTransaction(updated: any) {
    const updateTransaction$ = this.transactionService
      .updateTransaction(updated)
      .pipe(takeUntil(this.destroyed$));
    updateTransaction$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _removeTransaction(transaction: any) {
    const removeTransaction$ = this.transactionService
      .removeTransaction({
        transactionId: transaction.tra_id
      })
      .pipe(takeUntil(this.destroyed$));
    removeTransaction$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }
}
