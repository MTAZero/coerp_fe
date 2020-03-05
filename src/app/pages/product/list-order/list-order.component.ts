import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { OrderModalComponent } from './component/order-modal/order-modal.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderService } from '../../../core/services/api/order.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {
  private destroyed$ = new Subject();
  breadCrumbItems: Array<{}>;

  submitted: boolean;
  paymentMethods: any;

  textSearch = '';
  paymentMethodSearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  orders: any;

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder,
    private orderService: OrderService
  ) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Sản phẩm', path: '/' },
      { label: 'Đặt hàng', path: '/', active: true }
    ];
    this._fetchData();
    this._fetchFilter();
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
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa nhà đơn hàng';
    modalRef.componentInstance.message = 'Bạn có chắc chắn muốn xóa đơn hàng đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this._removeOrder(order);
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
    const order$ = this.orderService
      .loadOrder({
        pageNumber: this.page,
        pageSize: this.pageSize,
        payment_type_id: this.paymentMethodSearch,
        code: this.textSearch
      })
      .pipe(takeUntil(this.destroyed$));
    order$.subscribe((res: any) => {
      if (res) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.orders = res.Data.Results;
      }
    });
  }

  private _fetchFilter() {
    const paymentMethod$ = this.orderService.loadPaymentMethod().pipe(takeUntil(this.destroyed$));

    paymentMethod$.subscribe((res: any) => {
      this.paymentMethods = res.Data;
    });
  }

  private _createOrder(data: any) {
    const createOrder$ = this.orderService.createOrder(data).pipe(takeUntil(this.destroyed$));
    createOrder$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _updateOrder(updated: any) {
    const updateOrder$ = this.orderService.updateOrder(updated).pipe(takeUntil(this.destroyed$));
    updateOrder$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _removeOrder(order: any) {
    const removeOrder$ = this.orderService
      .removeOrder({ customer_orderId: order.cuo_id })
      .pipe(takeUntil(this.destroyed$));
    removeOrder$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }
}
