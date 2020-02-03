import { Component, OnInit } from '@angular/core';

import { Widget, Sellingproduct, ChartType } from './dashboard2.model';

import {
  widget,
  lifetimeSalesAreaChart,
  incomeAmountsLineChart,
  totalUsersPieChart,
  productData
} from './data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  widget: Widget[];
  productData: Sellingproduct[];

  lifetimeSalesAreaChart: ChartType;
  incomeAmountsLineChart: ChartType;
  totalUsersPieChart: ChartType;

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

  /**
   * fetches the dashboard-2 data
   */
  private _fetchData() {
    this.widget = widget;

    this.lifetimeSalesAreaChart = lifetimeSalesAreaChart;
    this.incomeAmountsLineChart = incomeAmountsLineChart;
    this.totalUsersPieChart = totalUsersPieChart;
    this.productData = productData;
  }
}
