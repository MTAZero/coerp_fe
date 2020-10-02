import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TransactionService } from '../../../core/services/api/transaction.service';
import { StatisticService } from '../../../core/services/api/statistic.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { isNullOrUndefined, isUndefined } from 'util';
import { basicColumChart, customerPieChart, ratePieChart } from './data';

@Component({
  selector: 'app-assigned-work',
  templateUrl: './assigned-work.component.html',
  styleUrls: ['./assigned-work.component.scss'],
})
export class AssignedWorkComponent implements OnInit {
  private destroyed$ = new Subject();

  submitted: boolean;

  textSearch = '';
  fromDate = this._convertDateToNgbDate(new Date('2010-01-01'));
  toDate = this._convertDateToNgbDate(new Date());
  page = 0;
  pageSize = 10;
  totalSize = 0;

  transactions: any[];
  selectedOrder = null;

  customerPieChart: any;
  ratePieChart: any;
  basicColumChart: any;

  constructor(
    private modalService: NgbModal,
    private transactionService: TransactionService,
    private statisticService: StatisticService
  ) {}
  ngOnInit() {
    this._fetchData();
    this._fetchCustomer();
    this._fetchRate();

    this.customerPieChart = customerPieChart;
    this.ratePieChart = ratePieChart;
    this.basicColumChart = basicColumChart;
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

  openCustomerCareModal() {
    // const modalRef = this.modalService.open(CustomerCareModalComponent, {
    //   centered: true,
    //   size: 'xl'
    // });
    // if (transaction) {
    //   modalRef.componentInstance.transaction = transaction;
    //   modalRef.componentInstance.isView = isView;
    // }
    // modalRef.componentInstance.passEvent.subscribe(res => {
    //   if (res.event) {
    //     if (transaction) {
    //       this._updateTransaction(res.data);
    //     } else {
    //       this._createTransaction(res.data);
    //     }
    //   }
    //   modalRef.close();
    // });
  }

  openConfirmModal(transaction?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa giao dịch khách hàng đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
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

  exportTransaction() {
    const export$ = this.transactionService
      .exportTransaction({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch,
        start_date: this._convertNgbDateToDate(this.fromDate),
        end_date: this._convertNgbDateToDate(this.toDate),
      })
      .pipe(takeUntil(this.destroyed$));
    export$.subscribe((res: any) => {
      if (res && res.Data) {
        const link = 'http://27.72.88.15:83/' + res.Data;
        window.open(link);
      }
    });
  }

  private _fetchData(selected?: any) {
    const transaction$ = this.transactionService
      .searchTransaction({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch,
        start_date: this._convertNgbDateToDate(this.fromDate),
        end_date: this._convertNgbDateToDate(this.toDate),
        tra_rate: 1
      })
      .pipe(takeUntil(this.destroyed$));
    transaction$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.transactions = res.Data.Results;

        if (selected) {
          this.selectedOrder = this.transactions.find((item) => item.tra_id === selected.tra_id);
        } else {
          this.selectedOrder = this.transactions[0];
        }
      }
    });
  }

  private _fetchCustomer() {
    const customer$ = this.statisticService.loadCustomer().pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      if (res && res.Data) {
        res.Data.map((item) => {
          this.customerPieChart.series.push(item.total_revenue);
          this.customerPieChart.labels.push(item.cg_name);
        });
      }
    });
  }

  private _fetchRate() {
    const rate$ = this.statisticService.loadRate().pipe(takeUntil(this.destroyed$));
    rate$.subscribe((res: any) => {
      if (res && res.Data) {
        res.Data.map((item) => {
          this.ratePieChart.series.push(item.number);
          this.ratePieChart.labels.push(item.cg_name);
        });
      }
    });
  }

  private _removeTransaction(transaction: any) {
    const removeTransaction$ = this.transactionService
      .removeTransaction({
        transactionId: transaction.tra_id,
      })
      .pipe(takeUntil(this.destroyed$));
    removeTransaction$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this._fetchData();
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      (e) => {
        this._notify(false, e.Message);
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

  private _convertDateToNgbDate(date: any) {
    if (!date) {
      return null;
    }
    const year = moment(date).year();
    const month = moment(date).month() + 1;
    const day = moment(date).date();
    return new NgbDate(year, month, day);
  }

  private _convertNgbDateToDate(ngbDate: any) {
    if (!ngbDate) {
      return '';
    }
    if (isUndefined(ngbDate.year)) return ngbDate;
    const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    return moment(newDate).format('YYYY-MM-DD');
  }
}
