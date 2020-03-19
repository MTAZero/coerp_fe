import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderModalComponent } from './component/order-modal/order-modal.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderService } from '../../../core/services/api/order.service';
import Swal from 'sweetalert2';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {
  private destroyed$ = new Subject();

  submitted: boolean;
  paymentMethods: any;
  orderStatus: any;

  textSearch = '';
  paymentMethodSearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  orders: any;
  selectedOrder = null;

  constructor(private modalService: NgbModal, private orderService: OrderService) {}
  ngOnInit() {
    this._fetchData();
    this._fetchFilter();
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

  openOrderModal(order?: any, isView = false) {
    const modalRef = this.modalService.open(OrderModalComponent, {
      centered: true,
      size: 'xl'
    });
    if (order) {
      modalRef.componentInstance.order = order;
      modalRef.componentInstance.isView = isView;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (order) {
          this._updateOrder(res.data);
        } else {
          this._createOrder(res.data);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(order?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa đơn hàng đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(result => {
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
        cuo_status: event.target.value
      })
      .pipe(takeUntil(this.destroyed$));

    changeStatus$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this._fetchData();
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      e => this._notify(false, e.Message)
    );
  }

  exportOrder() {
    const export$ = this.orderService
      .exportOrder({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        payment_type_id: this.paymentMethodSearch,
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
    const order$ = this.orderService
      .loadOrder({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        payment_type_id: this.paymentMethodSearch,
        code: this.textSearch
      })
      .pipe(takeUntil(this.destroyed$));
    order$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.orders = res.Data.Results;

        if (selected) {
          this.selectedOrder = this.orders.find(item => item.cuo_id === selected.cuo_id);
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

  private _createOrder(data: any) {
    const createOrder$ = this.orderService.createOrder(data).pipe(takeUntil(this.destroyed$));
    createOrder$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this._fetchData();
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      e => this._notify(false, e.Message)
    );
  }

  private _updateOrder(updated: any) {
    const updateOrder$ = this.orderService.updateOrder(updated).pipe(takeUntil(this.destroyed$));
    updateOrder$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this._fetchData();
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      e => this._notify(false, e.Message)
    );
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
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      e => this._notify(false, e.Message)
    );
  }

  private _notify(isSuccess: boolean, message: string) {
    return Swal.fire({
      toast: true,
      position: 'top-end',
      type: isSuccess ? 'success' : 'error',
      title: message,
      showConfirmButton: false,
      timer: 2000
    });
  }
}
