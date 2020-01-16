import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-history-tab',
  templateUrl: './purchase-history-tab.component.html',
  styleUrls: ['./purchase-history-tab.component.scss']
})
export class PurchaseHistoryTabComponent implements OnInit {
  purchaseHistory = [
    {
      purchase_id: 'PUR01',
      purchase_time: '12/01/2020',
      order_id: 'DH01',
      created_by: 'Nguyen Van A'
    },
    {
      purchase_id: 'PUR02',
      purchase_time: '15/01/2020',
      order_id: 'DH02',
      created_by: 'Nguyen Van B'
    },
    {
      purchase_id: 'PUR03',
      purchase_time: '20/01/2020',
      order_id: 'DH03',
      created_by: 'Nguyen Van CS'
    }
  ];

  purchaseDetail = [
    {
      product_id: 'PRO01',
      product_name: 'Chivas',
      product_quantity: 20,
      price: 1000000,
      discout: 10,
      total: 10000000,
      note: ''
    },
    {
      product_id: 'PRO02',
      product_name: 'Chivas',
      product_quantity: 20,
      price: 1000000,
      discout: 10,
      total: 10000000,
      note: ''
    },
    {
      product_id: 'PRO03',
      product_name: 'Chivas',
      product_quantity: 20,
      price: 1000000,
      discout: 10,
      total: 10000000,
      note: ''
    }
  ];
  selectedPurchase = null;
  constructor() {}

  ngOnInit() {}

  onClickPurchase(purchase: any) {
    this.selectedPurchase = purchase;
  }

  onClickBack() {
    this.selectedPurchase = null;
  }
}
