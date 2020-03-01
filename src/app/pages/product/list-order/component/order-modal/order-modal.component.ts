import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderService } from '../../../../../core/services/api/order.service';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() order: any;
  @Input() isView: boolean;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  submitted = false;
  listProduct = [];

  constructor(
    public formBuilder: FormBuilder,
    private modalService: NgbModal,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    if (this.order) {
      this._fetchOrderDetail(this.order.cuo_id);
      console.log(this.isView);
    }
  }

  onClickSubmit() {
    this.submitted = true;

    this.passEvent.emit({ event: true });
  }

  onClickCancel() {
    if (1) {
      const modalRef = this.modalService.open(ConfirmModalComponent, {
        centered: true
      });
      modalRef.componentInstance.title = 'Thông báo';
      modalRef.componentInstance.message =
        'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?';
      modalRef.componentInstance.passEvent.subscribe(res => {
        if (res) {
          this.passEvent.emit({ event: false });
        }
        modalRef.close();
      });
    } else {
      this.passEvent.emit({ event: false });
    }
  }

  openConfirmModal(product?: any) {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa khách hàng';
    modalRef.componentInstance.message = 'Bạn có chắc chắn muốn xóa sản phẩm đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        //this._removeCustomer(customer);
      }
      modalRef.close();
    });
  }

  onBackClick() {}
  onNextClick() {}
  onSubmitClick() {}
  onPrintClick() {}

  private _fetchOrderDetail(id: any) {
    const orderDetail$ = this.orderService.loadOrderById({ id }).pipe(takeUntil(this.destroyed$));

    orderDetail$.subscribe((res: any) => {
      this._fetchData(res.Data);
    });
  }

  private _fetchData(data: any) {
    console.log(data);
    const { list_product, customer, cuo_discount, cuo_ship_tax, cuo_total_price } = data;
    this.listProduct = list_product;
  }
}
