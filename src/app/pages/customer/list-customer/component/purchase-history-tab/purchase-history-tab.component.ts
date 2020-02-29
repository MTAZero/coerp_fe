import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../../../../../core/services/api/order.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-purchase-history-tab',
  templateUrl: './purchase-history-tab.component.html',
  styleUrls: ['./purchase-history-tab.component.scss']
})
export class PurchaseHistoryTabComponent implements OnInit {
  @Input() listCustomerOrder: any;
  private destroyed$ = new Subject();

  orderDetail: any;
  selectedOrder = null;
  constructor(private orderService: OrderService) {}

  ngOnInit() {}

  onClickOrder(order: any) {
    this.selectedOrder = order;
    this._loadOrderDetail(order.cuo_id);
  }

  onClickBack() {
    this.selectedOrder = null;
    this.orderDetail = null;
  }

  private _loadOrderDetail(id: any) {
    const orderDetail$ = this.orderService.loadOrderById({ id }).pipe(takeUntil(this.destroyed$));
    orderDetail$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.orderDetail = res.Data;
      }
    });
  }
}
