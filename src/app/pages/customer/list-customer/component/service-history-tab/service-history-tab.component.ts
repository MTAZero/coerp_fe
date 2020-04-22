import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-history-tab',
  templateUrl: './service-history-tab.component.html',
  styleUrls: ['./service-history-tab.component.scss'],
})
export class ServiceHistoryTabComponent implements OnInit {
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
