import { Component, OnInit } from '@angular/core';

import { Widget, Sellingproduct, ChartType } from './dashboard2.model';

import {
  widget,
  basicColumChart,
  totalUsersPieChart,
  salesMixedChart,
  productData,
  orderData,
  order
} from './data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  page = 1;
  pageSize = 10;
  totalSize = 0;

  widget: Widget[];
  productData: Sellingproduct[];
  salesMixedChart: ChartType;
  totalUsersPieChart: ChartType;
  basicColumChart: ChartType;
  paginatedOrderData: any;
  orders: any;

  constructor() {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Bảng tin', path: '/', active: true }
    ];

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * content refresh
   */
  contentRefresh() {
    console.log('Data refresh requested');
  }

  onPageChange(): void {}

  /**
   * fetches the dashboard-2 data
   */
  private _fetchData() {
    this.widget = widget;

    this.totalUsersPieChart = totalUsersPieChart;
    this.basicColumChart = basicColumChart;
    this.salesMixedChart = salesMixedChart;
    this.productData = productData;

    this.paginatedOrderData = orderData;
    this.totalSize = this.paginatedOrderData.length;

    this.orders = order;
  }
}
