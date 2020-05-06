import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderService } from '../../../core/services/api/order.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { isNullOrUndefined, isUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss'],
})
export class ListOrderComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();

  submitted: boolean;
  paymentMethods: any;
  orderStatus: any;

  textSearch = '';
  paymentMethodSearch = '';
  fromDate = this._convertDateToNgbDate(new Date('2010-01-01'));
  toDate = this._convertDateToNgbDate(new Date());
  page = 1;
  pageSize = 10;
  totalSize = 0;

  orders: any;
  selectedOrder = null;

  constructor(private orderService: OrderService, private router: Router) {}
  ngOnInit() {
    this._fetchData();
    this._fetchFilter();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onClickOrder(order: any) {
    if (isNullOrUndefined(this.selectedOrder)) {
      this.selectedOrder = order;
    } else {
      if (this.selectedOrder.cuo_id !== order.cuo_id) {
        this.selectedOrder = order;
      } else {
        this.selectedOrder = null;
      }
    }
  }

  onRouteDetail(order?: any) {
    this.router.navigate(['/product/list-order-detail', order ? order.cuo_id : '']);
  }

  openConfirmModal(order?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa đơn hàng đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeOrder(order);
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

  onChangeStatus(event, order) {
    const changeStatus$ = this.orderService
      .updateOrderStatus({
        cuo_id: order.cuo_id,
        cuo_status: event.target.value,
      })
      .pipe(takeUntil(this.destroyed$));

    changeStatus$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this._fetchData();
        } else this._notify(false, res.Message);
      },
      (e) => this._notify(false, e.Message)
    );
  }

  setFile(event) {
    let files = event.srcElement.files;
    if (!files) {
      return;
    }

    const import$ = this.orderService.importOrderProduct(files[0]).pipe(takeUntil(this.destroyed$));
    import$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this._fetchData();
        } else this._notify(false, res.Message);
      },
      (e) => this._notify(false, e.Message)
    );
  }

  exportOrderProduct() {
    const export$ = this.orderService
      .exportOrderProduct({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        payment_type_id: this.paymentMethodSearch,
        name: this.textSearch,
        start_date: this._convertNgbDateToDate(this.fromDate),
        end_date: this._convertNgbDateToDate(this.toDate),
      })
      .pipe(takeUntil(this.destroyed$));
    export$.subscribe((res: any) => {
      if (res && res.Data) {
        const link = 'http://27.72.147.222:1230/' + res.Data;
        window.open(link);
      }
    });
  }

  exportTemplate() {
    const export$ = this.orderService.exportTemplateProduct().pipe(takeUntil(this.destroyed$));
    export$.subscribe((res: any) => {
      if (res && res.Data) {
        const link = 'http://27.72.147.222:1230/' + res.Data;
        window.open(link);
      }
    });
  }

  private _fetchData(selected?: any) {
    const order$ = this.orderService
      .loadOrder({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        payment_type_id: this.paymentMethodSearch,
        code: this.textSearch,
        start_date: this._convertNgbDateToDate(this.fromDate),
        end_date: this._convertNgbDateToDate(this.toDate),
      })
      .pipe(takeUntil(this.destroyed$));
    order$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.orders = res.Data.Results;

        if (selected) {
          this.selectedOrder = this.orders.find((item) => item.cuo_id === selected.cuo_id);
        } else {
          this.selectedOrder = this.orders[0];
        }
      }
    });
  }

  private _fetchFilter() {
    const paymentMethod$ = this.orderService.loadPaymentMethod().pipe(takeUntil(this.destroyed$));
    paymentMethod$.subscribe((res: any) => {
      this.paymentMethods = res.Data;
    });

    const orderStatus$ = this.orderService.loadOrderStatus().pipe(takeUntil(this.destroyed$));
    orderStatus$.subscribe((res: any) => {
      this.orderStatus = res.Data;
    });
  }

  private _removeOrder(order: any) {
    const removeOrder$ = this.orderService
      .removeOrder({ customer_orderId: order.cuo_id })
      .pipe(takeUntil(this.destroyed$));
    removeOrder$.subscribe(
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
