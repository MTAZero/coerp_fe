import { Component, OnInit } from '@angular/core';
import { StatisticService } from '../../core/services/api/statistic.service';
import { Widget, Sellingproduct, ChartType } from './dashboard2.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
  private destroyed$ = new Subject();
  breadCrumbItems: Array<{}>;

  page = 1;
  pageSize = 10;
  totalSize = 0;

  textSearchOrder = '';
  pageOrder = 0;
  pageSizeOrder = 4;
  totalSizeOrder = 0;
  orders: any;
  orderMode = 'month';

  revenues: any;
  widget: Widget[];
  productData: Sellingproduct[];
  salesMixedChart: ChartType;
  totalUsersPieChart: ChartType;
  basicColumChart: ChartType;
  paginatedOrderData: any;

  constructor(private statisticService: StatisticService) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Bảng tin', path: '/', active: true }
    ];

    this._fetchData();
    this._fetchOrder();
  }

  contentRefresh() {
    console.log('Data refresh requested');
  }

  onPageOrderChange(page: number): void {
    this.pageOrder = page;
    this._fetchOrder();
  }

  onChangeOrderFilter() {
    this._fetchOrder();
  }

  private _fetchData() {
    this.widget = widget;

    this.totalUsersPieChart = totalUsersPieChart;
    this.basicColumChart = basicColumChart;
    this.salesMixedChart = salesMixedChart;
    this.productData = productData;

    this.paginatedOrderData = orderData;
    this.totalSize = this.paginatedOrderData.length;

    this.orders = order;

    const revenue$ = this.statisticService.loadRevenue().pipe(takeUntil(this.destroyed$));
    revenue$.subscribe((res: any) => {
      if (res) {
        this.revenues = res.Data;
        this.widget[0].value = this.revenues.totalRevenue ? this.revenues.totalRevenue : 0;
        this.widget[1].value = this.revenues.totalRevenueByMonth
          ? this.revenues.totalRevenueByMonth
          : 0;
        this.widget[2].value = this.revenues.totalRevenueByWeek
          ? this.revenues.totalRevenueByWeek
          : 0;
        this.widget[3].value = this.revenues.totalRevenueByDay
          ? this.revenues.totalRevenueByDay
          : 0;
      }
    });
  }

  private _fetchOrder() {
    const order$ = this.statisticService
      .loadOrder({
        pageNumber: this.pageOrder - 1,
        pageSize: this.pageSizeOrder,
        month: this.orderMode === 'month',
        week: this.orderMode === 'week',
        day: this.orderMode === 'day',
        search_name: this.textSearchOrder
      })
      .pipe(takeUntil(this.destroyed$));
    order$.subscribe((res: any) => {
      if (res) {
        this.totalSizeOrder = res.Data.TotalNumberOfRecords;
        this.orders = res.Data.Results;
      }
    });
  }
}
