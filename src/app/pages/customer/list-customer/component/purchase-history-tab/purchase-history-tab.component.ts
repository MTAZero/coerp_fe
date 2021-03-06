import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purchase-history-tab',
  templateUrl: './purchase-history-tab.component.html',
  styleUrls: ['./purchase-history-tab.component.scss'],
})
export class PurchaseHistoryTabComponent implements OnInit {
  @Input() listCustomerOrder: any;

  selectedOrder = null;
  constructor() {}

  ngOnInit() {}

  onClickOrder(order: any) {
    this.selectedOrder = order;
  }

  onClickBack() {
    this.selectedOrder = null;
  }
}
