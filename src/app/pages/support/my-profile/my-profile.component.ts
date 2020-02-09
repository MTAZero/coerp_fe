import { Component, OnInit } from '@angular/core';
import { Inbox } from './my-profile.model';

import {
  projectData,
  widget,
  projectionBarChart,
  salesMixedChart,
  orderData
} from './data';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Projects table
  projectData: any;
  widget: any;
  projectionBarChart: any;
  salesMixedChart: any;
  orderData: any;
  page = 1;
  pageSize = 10;
  totalSize = 0;
  inboxData: Inbox[];
  constructor() {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Trang tin', path: '/' }
    ];
    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * fetches the profile value
   */
  private _fetchData() {
    this.projectData = projectData;
    this.widget = widget;
    this.projectionBarChart = projectionBarChart;
    this.salesMixedChart = salesMixedChart;
    this.orderData = orderData;
    this.totalSize = this.orderData.length;
  }
}
