import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { isNullOrUndefined, isUndefined } from 'util';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { basicColumChart, customerPieChart, ratePieChart } from '../../data';
import { ServiceService } from '../../../../../core/services/api/service.service';
import { OrderService } from '../../../../../core/services/api/order.service';
import { StatisticService } from '../../../../../core/services/api/statistic.service';

@Component({
  selector: 'app-order-service-main',
  templateUrl: './order-service-main.component.html',
  styleUrls: ['./order-service-main.component.scss'],
})
export class OrderServiceMainComponent implements OnInit {
  @Output() onDetail: EventEmitter<any> = new EventEmitter();
  private destroyed$ = new Subject();

  textSearch = '';
  fromDate = this._convertDateToNgbDate(new Date('2010-01-01'));
  toDate = this._convertDateToNgbDate(new Date());
  page = 0;
  pageSize = 10;
  totalSize = 0;

  selectedOrderService = null;

  orderServices: any[];

  customerPieChart: any;
  ratePieChart: any;
  basicColumChart: any;
  rateLoading = true;
  customerLoading = true;

  constructor(
    private serviceService: ServiceService,
    private statisticService: StatisticService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.customerPieChart = customerPieChart;
    this.ratePieChart = ratePieChart;
    this._fetchCustomer();
    this._fetchRate();
    this._fetchData();
    this.basicColumChart = basicColumChart;
  }

  contentRefresh(type: any) {
    if (type === 'customer') this._fetchCustomer();
    else this._fetchRate();
  }

  onChangeToDetail(type: string) {
    this.onDetail.emit({
      type,
      data: type === 'create' ? null : this.selectedOrderService,
    });
  }

  openConfirmModal(orderService?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa lịch đặt dịch vụ đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeOrder(orderService);
      }
    });
  }

  onPageChange(page: number): void {
    this.page = page;
    this._fetchData();
  }

  onChangeFilter() {
    this._fetchData(this.selectedOrderService);
  }

  private _fetchData(selected?: any) {
    const orderService$ = this.serviceService
      .searchOrderService({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch,
        start_date: this._convertNgbDateToDate(this.fromDate),
        end_date: this._convertNgbDateToDate(this.toDate),
      })
      .pipe(takeUntil(this.destroyed$));
    orderService$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.orderServices = res.Data.Results;

        if (selected) {
          this.selectedOrderService = this.orderServices.find(
            (item) => item.cuo_id === selected.cuo_id
          );
        } else {
          this.selectedOrderService = this.orderServices[0];
        }
      }
    });
  }

  private _fetchCustomer() {
    const customer$ = this.statisticService.loadCustomer().pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      if (res && res.Data) {
        this.customerPieChart.series = [];
        this.customerPieChart.labels = [];
        res.Data.map((item) => {
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
        res.Data.map((item) => {
          this.ratePieChart.series.push(item.number);
          this.ratePieChart.labels.push(item.cg_name);
        });
      }
      this.rateLoading = false;
    });
  }

  private _notify(isSuccess: boolean, message: string) {
    return Swal.fire({
      toast: true,
      position: 'top-end',
      type: isSuccess ? 'success' : 'error',
      title: message,
      showConfirmButton: false,
      timer: 2000,
    });
  }

  onClickOrderService(orderService: any) {
    if (isNullOrUndefined(this.selectedOrderService)) {
      this.selectedOrderService = orderService;
    } else {
      if (this.selectedOrderService.cuo_id !== orderService.cuo_id) {
        this.selectedOrderService = orderService;
      } else {
        this.selectedOrderService = null;
      }
    }
  }

  private _removeOrder(order: any) {
    const removeOrder$ = this.orderService
      .removeOrder({ customer_orderId: order.cuo_id })
      .pipe(takeUntil(this.destroyed$));
    removeOrder$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this._fetchData();
        } else this._notify(false, res.Message);
      },
      (e) => this._notify(false, e.Message)
    );
  }

  private _convertDateToNgbDate(date: any) {
    if (!date) {
      return null;
    }
    const year = moment(date).year();
    const month = moment(date).month() + 1;
    const day = moment(date).date();
    return new NgbDate(year, month, day);
  }

  private _convertNgbDateToDate(ngbDate: any) {
    if (!ngbDate) {
      return '';
    }
    if (isUndefined(ngbDate.year)) return ngbDate;
    const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    return moment(newDate).format('YYYY-MM-DD');
  }
}
