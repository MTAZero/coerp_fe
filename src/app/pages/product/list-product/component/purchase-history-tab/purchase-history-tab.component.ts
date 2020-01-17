import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-history-tab',
  templateUrl: './purchase-history-tab.component.html',
  styleUrls: ['./purchase-history-tab.component.scss']
})
export class PurchaseHistoryTabComponent implements OnInit {
  purchaseHistoryData = [
    {
      purchase_id: 'PH01',
      purchase_time: '12/01/2020',
      purchase_quantity: 10,
      unit: 'kg',
      customer: 'Nguyen Van A',
      creator: 'Nguyen Van B'
    },
    {
      purchase_id: 'PH02',
      purchase_time: '12/01/2020',
      purchase_quantity: 100,
      unit: 'km',
      customer: 'Nguyen Van A',
      creator: 'Nguyen Van B'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
