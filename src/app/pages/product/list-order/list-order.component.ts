import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from './list-order.model';
import { orderData } from './data';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { OrderModalComponent } from './component/order-modal/order-modal.component';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  submitted: boolean;
  term: any;
  page = 1;
  pageSize = 10;

  // start and end index
  startIndex = 1;
  endIndex = 10;
  totalSize = 0;

  paginatedOrderData: Array<Order>;
  selectOrder: Order;
  orders: Array<Order>;

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Sản phẩm', path: '/' },
      { label: 'Đặt hàng', path: '/', active: true }
    ];
    this._fetchData();
  }

  openOrderModal(order?: Order) {
    const modalRef = this.modalService.open(OrderModalComponent, {
      centered: true,
      size: 'xl'
    });
    if (order) {
      modalRef.componentInstance.order = order;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (order) {
          this.updateOrder(order, res.form);
        } else {
          this.createOrder(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa nhà đơn hàng';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa đơn hàng đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeOrder();
      }
      modalRef.close();
    });
  }

  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    this.paginatedOrderData = this.orders.slice(this.startIndex, this.endIndex);
  }

  private _fetchData() {
    this.orders = orderData;
    // apply pagination
    this.startIndex = 0;
    this.endIndex = this.pageSize;

    this.paginatedOrderData = this.orders.slice(this.startIndex, this.endIndex);
    this.totalSize = this.orders.length;
  }

  private createOrder(data: any) {
    this.submitted = true;
    this.totalSize = this.orders.length + 1;
    this.paginatedOrderData = this.orders.slice(this.startIndex, this.endIndex);
  }

  private updateOrder(order: any, data: any) {}

  private removeOrder() {}
}
