import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderModalComponent } from './component/order-modal/order-modal.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderService } from '../../../core/services/api/order.service';
import Swal from 'sweetalert2';

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
  orderStatus: any;

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
    this.page = page - 1;
    this._fetchData();
  }

  onChangeFilter() {
    this.page--;
    this._fetchData();
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
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Cập nhật trạng thái đơn hàng thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this.page--;
          this._fetchData();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Cập nhật trạng thái đơn hàng thất bại',
          showConfirmButton: false,
          timer: 2000
        });
      }
    );
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

    const orderStatus$ = this.orderService.loadOrderStatus().pipe(takeUntil(this.destroyed$));

    orderStatus$.subscribe((res: any) => {
      this.orderStatus = res.Data;
    });
  }

  private _createOrder(data: any) {
    const createOrder$ = this.orderService.createOrder(data).pipe(takeUntil(this.destroyed$));
    createOrder$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Thêm đơn hàng thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this.page--;
          this._fetchData();
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Thêm đơn hàng thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }

  private _updateOrder(updated: any) {
    const updateOrder$ = this.orderService.updateOrder(updated).pipe(takeUntil(this.destroyed$));
    updateOrder$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Cập nhật đơn hàng thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this.page--;
          this._fetchData();
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Cập nhật đơn hàng thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }

  private _removeOrder(order: any) {
    const removeOrder$ = this.orderService
      .removeOrder({ customer_orderId: order.cuo_id })
      .pipe(takeUntil(this.destroyed$));
    removeOrder$.subscribe(
      (res: any) => {
        if (res.Code == 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Xóa đơn hàng thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this.page--;
          this._fetchData();
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Xóa đơn hàng thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }
}
