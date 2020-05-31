(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row pt-1\">\n    <!-- widget -->\n    <ng-template\n      [ngTemplateOutlet]=\"WidgetData\"\n      [ngTemplateOutletContext]=\"{ widget: widget }\"\n      *ngFor=\"let widget of widget\"\n    ></ng-template>\n    <!-- end widget -->\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-xl-4\">\n      <app-portlet\n        title=\"Tổng doanh thu\"\n        color=\"white\"\n        text=\"center\"\n        headerClass=\"title header-title border-0 my-1\"\n        (onContentRefresh)=\"contentRefresh()\"\n      >\n        <div class=\"card-body text-center pt-0\">\n          <apx-chart\n            class=\"apex-charts\"\n            [series]=\"basicColumChart.series\"\n            [chart]=\"basicColumChart.chart\"\n            [plotOptions]=\"basicColumChart.plotOptions\"\n            [yaxis]=\"basicColumChart.yaxis\"\n            [grid]=\"basicColumChart.grid\"\n            [tooltip]=\"basicColumChart.tooltip\"\n            [stroke]=\"basicColumChart.stroke\"\n            [dataLabels]=\"basicColumChart.dataLabels\"\n            [xaxis]=\"basicColumChart.xaxis\"\n            [legend]=\"basicColumChart.legend\"\n            [colors]=\"basicColumChart.colors\"\n            [fill]=\"basicColumChart.fill\"\n          >\n          </apx-chart>\n        </div>\n      </app-portlet>\n    </div>\n\n    <div class=\"col-xl-4\">\n      <app-portlet\n        title=\"Thống kê mức độ hài lòng\"\n        color=\"white\"\n        text=\"center\"\n        [isLoading]=\"rateLoading\"\n        headerClass=\"title header-title border-0 my-1\"\n        (onContentRefresh)=\"contentRefresh('rate')\"\n      >\n        <div class=\"card-body text-center pt-0\" *ngIf=\"!rateLoading\">\n          <apx-chart\n            [series]=\"ratePieChart.series\"\n            [chart]=\"ratePieChart\"\n            [labels]=\"ratePieChart.labels\"\n            [dataLabels]=\"ratePieChart.dataLabels\"\n            [legend]=\"ratePieChart.legend\"\n            [plotOptions]=\"ratePieChart.option\"\n          >\n          </apx-chart>\n        </div>\n      </app-portlet>\n    </div>\n\n    <div class=\"col-xl-4\">\n      <app-portlet\n        title=\"Thống kê khách hàng\"\n        color=\"white\"\n        text=\"center\"\n        headerClass=\"title header-title border-0 my-1\"\n        [isLoading]=\"customerLoading\"\n        (onContentRefresh)=\"contentRefresh('customer')\"\n      >\n        <div class=\"card-body text-center pt-0\" *ngIf=\"!customerLoading\">\n          <apx-chart\n            [series]=\"customerPieChart.series\"\n            [chart]=\"customerPieChart\"\n            [labels]=\"customerPieChart.labels\"\n            [dataLabels]=\"customerPieChart.dataLabels\"\n            [legend]=\"customerPieChart.legend\"\n            [plotOptions]=\"customerPieChart.option\"\n          >\n          </apx-chart>\n        </div>\n      </app-portlet>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-xl-6\">\n      <app-portlet\n        title=\"Phê duyệt\"\n        color=\"white\"\n        headerClass=\"title header-title border-0\"\n        (onContentRefresh)=\"contentRefresh()\"\n      >\n        <div class=\"card-body pt-0\" style=\"height: 450px;\">\n          <div class=\"row mb-2\">\n            <div class=\"col-sm-4\">\n              <form class=\"form-inline\">\n                <div class=\"form-group mb-2\">\n                  <input class=\"form-control\" placeholder=\"Tìm kiếm\" />\n                </div>\n              </form>\n            </div>\n            <div class=\"col-sm-8\">\n              <div class=\"text-sm-right\">\n                <button type=\"button\" class=\"btn btn-xs btn-secondary\">\n                  Tháng\n                </button>\n                <button type=\"button\" class=\"btn btn-xs btn-light\">\n                  Tuần\n                </button>\n                <button type=\"button\" class=\"btn btn-xs btn-light\">Ngày</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"table table-centered table-hover mb-0\">\n              <thead>\n                <tr>\n                  <th>MĐ</th>\n                  <th>Nội dung phê duyệt</th>\n                  <th>Người gửi</th>\n                  <th>Người nhận</th>\n                  <th>Ghi chú</th>\n                  <th>Thời gian</th>\n                  <th style=\"width: 85px;\">Thao tác</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let order of paginatedOrderData\">\n                  <td>\n                    {{ order.order_id }}\n                  </td>\n                  <td>\n                    {{ order.order_date }}\n                  </td>\n                  <td>\n                    {{ order.payment_status }}\n                  </td>\n                  <td>\n                    {{ order.order_total }}\n                  </td>\n                  <td>\n                    {{ order.payment_method }}\n                  </td>\n                  <td>\n                    {{ order.order_status }}\n                  </td>\n                  <td>\n                    <a class=\"action-icon table-button-link\" (click)=\"openOrderModal(order)\">\n                      <i class=\"mdi mdi-square-edit-outline\"></i\n                    ></a>\n                    <a class=\"action-icon table-button-link\" (click)=\"openConfirmModal()\">\n                      <i class=\"mdi mdi-delete\"></i\n                    ></a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <ul class=\"pagination pagination-rounded justify-content-end my-2\">\n            <ngb-pagination\n              (pageChange)=\"onPageChange($event)\"\n              [pageSize]=\"pageSize\"\n              [(page)]=\"page\"\n              [collectionSize]=\"totalSize\"\n            ></ngb-pagination>\n          </ul>\n        </div>\n      </app-portlet>\n    </div>\n\n    <div class=\"col-xl-6\">\n      <app-portlet\n        title=\"Đơn hàng\"\n        color=\"white\"\n        headerClass=\"title header-title border-0\"\n        (onContentRefresh)=\"contentRefresh()\"\n      >\n        <div class=\"card-body pt-0\" style=\"height: 450px;\">\n          <div class=\"row mb-2\">\n            <div class=\"col-sm-4\">\n              <form class=\"form-inline\">\n                <div class=\"form-group mb-2\">\n                  <input\n                    class=\"form-control\"\n                    name=\"textSearchOrder\"\n                    placeholder=\"Tìm kiếm...\"\n                    [(ngModel)]=\"textSearchOrder\"\n                    (input)=\"onChangeOrderFilter()\"\n                  />\n                </div>\n              </form>\n            </div>\n            <div class=\"col-sm-8\">\n              <div class=\"text-sm-right\">\n                <button type=\"button\" class=\"btn btn-xs btn-primary mr-1\">\n                  Xuất bản\n                </button>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-xs\"\n                  [ngClass]=\"orderMode === 'month' ? 'btn-secondary' : 'btn-light'\"\n                  (click)=\"orderMode = 'month'; onChangeOrderFilter()\"\n                >\n                  Tháng\n                </button>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-xs\"\n                  [ngClass]=\"orderMode === 'week' ? 'btn-secondary' : 'btn-light'\"\n                  (click)=\"orderMode = 'week'; onChangeOrderFilter()\"\n                >\n                  Tuần\n                </button>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-xs\"\n                  [ngClass]=\"orderMode === 'day' ? 'btn-secondary' : 'btn-light'\"\n                  (click)=\"orderMode = 'day'; onChangeOrderFilter()\"\n                >\n                  Ngày\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"table table-centered table-hover mb-0\">\n              <thead>\n                <tr>\n                  <th>MĐH</th>\n                  <th>Sản phẩm</th>\n                  <th>Tổng tiền</th>\n                  <th>Trạng thái</th>\n                  <th>Ngày bán</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let order of orders\">\n                  <td>\n                    {{ order.cuo_code }}\n                  </td>\n                  <td>\n                    {{ order.pu_name }}\n                  </td>\n                  <td>\n                    {{ order.op_total_value }}\n                  </td>\n                  <td>\n                    <span class=\"badge badge-secondary badge-success\">\n                      {{ order.cuo_status_name }}</span\n                    >\n                  </td>\n                  <td>\n                    {{ order.cuo_date | date: 'dd/MM/yyyy' }}\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <ul class=\"pagination pagination-rounded justify-content-end my-2\">\n            <ngb-pagination\n              (pageChange)=\"onPageOrderChange($event)\"\n              [pageSize]=\"pageSizeOrder\"\n              [(page)]=\"pageOrder\"\n              [collectionSize]=\"totalSizeOrder\"\n            ></ngb-pagination>\n          </ul>\n        </div>\n      </app-portlet>\n    </div>\n  </div>\n</div>\n\n<ng-template #WidgetData let-widget=\"widget\">\n  <div class=\"col-md-6 col-xl-3\">\n    <div class=\"card-box\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div class=\"avatar-sm bg-{{ widget.color }} rounded\">\n            <i class=\"{{ widget.icon }} avatar-title font-22 text-white\"></i>\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"text-right\">\n            <h3 class=\"text-dark my-1\">\n              <span [CountTo]=\"widget.value\" [from]=\"0\" [duration]=\"0.005\">{{ widget.value }}</span>\n            </h3>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"text-right\">\n            <p class=\"text-muted mb-1 text-truncate\" [title]=\"widget.text\">{{ widget.text }}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"mt-3\">\n        <h6 class=\"text-uppercase\">\n          Mục tiêu <span class=\"float-right\">{{ widget.progressValue }}%</span>\n        </h6>\n        <ngb-progressbar\n          [type]=\"widget.color\"\n          [value]=\"widget.progressValue\"\n          height=\"5px\"\n          class=\"m-0\"\n        >\n        </ngb-progressbar>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");




const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .table-responsive {\n  max-height: 310px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG1heC1oZWlnaHQ6IDMxMHB4O1xuICB9XG59XG4iLCI6aG9zdCAudGFibGUtcmVzcG9uc2l2ZSB7XG4gIG1heC1oZWlnaHQ6IDMxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_api_statistic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/api/statistic.service */ "./src/app/core/services/api/statistic.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/app/pages/dashboard/data.ts");






let DashboardComponent = class DashboardComponent {
    constructor(statisticService) {
        this.statisticService = statisticService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.page = 1;
        this.pageSize = 10;
        this.totalSize = 0;
        this.textSearchOrder = '';
        this.pageOrder = 0;
        this.pageSizeOrder = 4;
        this.totalSizeOrder = 0;
        this.orderMode = 'month';
        this.rateLoading = true;
        this.customerLoading = true;
    }
    ngOnInit() {
        this.customerPieChart = _data__WEBPACK_IMPORTED_MODULE_5__["customerPieChart"];
        this.ratePieChart = _data__WEBPACK_IMPORTED_MODULE_5__["ratePieChart"];
        this._fetchCustomer();
        this._fetchRate();
        this._fetchData();
        this._fetchOrder();
    }
    contentRefresh(type) {
        if (type === 'customer')
            this._fetchCustomer();
        else
            this._fetchRate();
    }
    onPageOrderChange(page) {
        this.pageOrder = page;
        this._fetchOrder();
    }
    onChangeOrderFilter() {
        this._fetchOrder();
    }
    _fetchData() {
        this.widget = _data__WEBPACK_IMPORTED_MODULE_5__["widget"];
        this.basicColumChart = _data__WEBPACK_IMPORTED_MODULE_5__["basicColumChart"];
        this.paginatedOrderData = _data__WEBPACK_IMPORTED_MODULE_5__["orderData"];
        this.totalSize = this.paginatedOrderData.length;
        const revenue$ = this.statisticService.loadRevenue().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        revenue$.subscribe((res) => {
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
    _fetchOrder() {
        const order$ = this.statisticService
            .loadOrder({
            pageNumber: this.pageOrder - 1,
            pageSize: this.pageSizeOrder,
            month: this.orderMode === 'month',
            week: this.orderMode === 'week',
            day: this.orderMode === 'day',
            search_name: this.textSearchOrder,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        order$.subscribe((res) => {
            if (res && res.Data) {
                this.totalSizeOrder = res.Data.TotalNumberOfRecords;
                this.orders = res.Data.Results;
            }
        });
    }
    _fetchCustomer() {
        const customer$ = this.statisticService.loadCustomer().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        customer$.subscribe((res) => {
            if (res && res.Data) {
                this.customerPieChart.series = [];
                this.customerPieChart.labels = [];
                res.Data.map((item) => {
                    this.customerPieChart.series.push(item.total_revenue ? item.total_revenue : 0);
                    this.customerPieChart.labels.push(item.cg_name);
                });
            }
            this.customerLoading = false;
        });
    }
    _fetchRate() {
        const rate$ = this.statisticService.loadRate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        rate$.subscribe((res) => {
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
};
DashboardComponent.ctorParameters = () => [
    { type: _core_services_api_statistic_service__WEBPACK_IMPORTED_MODULE_2__["StatisticService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_statistic_service__WEBPACK_IMPORTED_MODULE_2__["StatisticService"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ui/ui.module */ "./src/app/shared/ui/ui.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm2015/ng-apexcharts.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");









let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__["DashboardRoutingModule"],
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbProgressbarModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__["NgApexchartsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPaginationModule"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/pages/dashboard/data.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/dashboard/data.ts ***!
  \*****************************************/
/*! exports provided: widget, customerPieChart, ratePieChart, basicColumChart, orderData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widget", function() { return widget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerPieChart", function() { return customerPieChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratePieChart", function() { return ratePieChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicColumChart", function() { return basicColumChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderData", function() { return orderData; });
const widget = [
    {
        icon: 'fe-aperture',
        value: '12145',
        text: 'Tổng doanh thu',
        color: 'blue',
        progressValue: 60
    },
    {
        icon: 'fe-shopping-cart',
        value: '1576',
        text: 'Tổng doanh thu tháng',
        color: 'success',
        progressValue: 49
    },
    {
        icon: 'fe-bar-chart-2',
        value: '8947',
        text: 'Tổng doanh thu tuần',
        color: 'warning',
        progressValue: 18
    },
    {
        icon: 'fe-cpu',
        value: '178',
        text: 'Tổng doanh thu ngày',
        color: 'info',
        progressValue: 74
    }
];
const basicColumChart = {
    chart: {
        height: 380,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '55%'
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    colors: ['#3bafda', '#1abc9c', '#CED4DC'],
    series: [
        {
            name: 'Lợi nhuận ròng',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
            name: 'Doanh thu',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }
    ],
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
    },
    legend: {
        offsetY: -10
    },
    yaxis: {
        title: {
            text: '$ (nghìn)'
        }
    },
    fill: {
        opacity: 1
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'],
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    },
    tooltip: {
        y: {
            formatter(val) {
                return '$ ' + val + ' nghìn';
            }
        }
    }
};
const customerPieChart = {
    type: 'pie',
    series: [],
    labels: [],
    option: {
        pie: {
            expandOnClick: false
        }
    },
    height: 420,
    dataLabels: {
        enabled: true
    },
    legend: {
        show: true,
        position: 'bottom'
    }
};
const ratePieChart = {
    type: 'pie',
    series: [],
    labels: [],
    option: {
        pie: {
            expandOnClick: false
        }
    },
    height: 420,
    dataLabels: {
        enabled: true
    },
    legend: {
        show: true,
        position: 'bottom'
    }
};
const orderData = [
    {
        order_id: 'OR01',
        order_date: 'Hút bụi chung cư',
        payment_status: 'Trần Văn Nam',
        order_total: 'Nguyễn Tiến Độ',
        payment_method: 'Đã xác nhận với khách hàng',
        order_status: '01-02-2020'
    },
    {
        order_id: 'OR02',
        order_date: 'Hút bụi chung cư',
        payment_status: 'Trần Văn Nam',
        order_total: 'Nguyễn Tiến Độ',
        payment_method: 'Đã xác nhận với khách hàng',
        order_status: '01-02-2020'
    },
    {
        order_id: 'OR03',
        order_date: 'Hút bụi chung cư',
        payment_status: 'Trần Văn Nam',
        order_total: 'Nguyễn Tiến Độ',
        payment_method: 'Đã xác nhận với khách hàng',
        order_status: '01-02-2020'
    }
];



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map