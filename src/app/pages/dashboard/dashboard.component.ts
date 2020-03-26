import { Component, OnInit } from '@angular/core';
import { StatisticService } from '../../core/services/api/statistic.service';
import { Widget, ChartType } from './dashboard2.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { widget, basicColumChart, customerPieChart, ratePieChart, orderData } from './data';

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
  customerPieChart: ChartType;
  ratePieChart: ChartType;
  rateLoading = true;
  customerLoading = true;

  basicColumChart: ChartType;
  paginatedOrderData: any;

  constructor(private statisticService: StatisticService) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Bảng tin', path: '/', active: true }
    ];

    this.customerPieChart = customerPieChart;
    this.ratePieChart = ratePieChart;

    this._fetchCustomer();
    this._fetchRate();

    this._fetchData();
    this._fetchOrder();
  }

  contentRefresh(type) {
    if (type === 'customer') this._fetchCustomer();
    else this._fetchRate();
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
    this.basicColumChart = basicColumChart;

    this.paginatedOrderData = orderData;
    this.totalSize = this.paginatedOrderData.length;

    const revenue$ = this.statisticService.loadRevenue().pipe(takeUntil(this.destroyed$));
    revenue$.subscribe((res: any) => {
      if (res && res.Data) {
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
      if (res && res.Data) {
        this.totalSizeOrder = res.Data.TotalNumberOfRecords;
        this.orders = res.Data.Results;
      }
    });
  }

  private _fetchCustomer() {
    const customer$ = this.statisticService.loadCustomer().pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      if (res && res.Data) {
        this.customerPieChart.series = [];
        this.customerPieChart.labels = [];
        res.Data.map(item => {
          this.customerPieChart.series.push(item.total_revenue);
          this.customerPieChart.labels.push(item.cg_name);
        });
      }

      this.customerLoading = false;
    });
  }

  private _fetchRate() {
    const rate$ = this.statisticService.loadRate().pipe(takeUntil(this.destroyed$));
    rate$.subscribe((res: any) => {
      if (res && res.Data) {
        this.ratePieChart.series = [];
        this.ratePieChart.labels = [];
        res.Data.map(item => {
          this.ratePieChart.series.push(item.number);
          this.ratePieChart.labels.push(item.cg_name);
        });
      }

      this.rateLoading = false;
    });
  }
}
