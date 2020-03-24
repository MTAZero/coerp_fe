(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'dashboard',
        loadChildren: function () {
            return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~customer-customer-module~dashboard-dashboard-module~support-support-module~vendor-vendor-mod~449f3bff"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; });
        }
    },
    {
        path: 'staff',
        loadChildren: function () { return Promise.all(/*! import() | staff-staff-module */[__webpack_require__.e("default~customer-customer-module~marketing-marketing-module~product-product-module~staff-staff-modul~1eb06ba2"), __webpack_require__.e("default~customer-customer-module~product-product-module~staff-staff-module~support-support-module"), __webpack_require__.e("default~customer-customer-module~product-product-module~service-service-module~staff-staff-module"), __webpack_require__.e("staff-staff-module")]).then(__webpack_require__.bind(null, /*! ./staff/staff.module */ "./src/app/pages/staff/staff.module.ts")).then(function (m) { return m.StaffModule; }); }
    },
    {
        path: 'customer',
        loadChildren: function () {
            return Promise.all(/*! import() | customer-customer-module */[__webpack_require__.e("default~customer-customer-module~marketing-marketing-module~product-product-module~staff-staff-modul~1eb06ba2"), __webpack_require__.e("default~customer-customer-module~product-product-module~staff-staff-module~support-support-module"), __webpack_require__.e("default~customer-customer-module~dashboard-dashboard-module~support-support-module~vendor-vendor-mod~449f3bff"), __webpack_require__.e("default~customer-customer-module~product-product-module~service-service-module~staff-staff-module"), __webpack_require__.e("common"), __webpack_require__.e("customer-customer-module")]).then(__webpack_require__.bind(null, /*! ./customer/customer.module */ "./src/app/pages/customer/customer.module.ts")).then(function (m) { return m.CustomerModule; });
        }
    },
    {
        path: 'marketing',
        loadChildren: function () {
            return Promise.all(/*! import() | marketing-marketing-module */[__webpack_require__.e("default~customer-customer-module~marketing-marketing-module~product-product-module~staff-staff-modul~1eb06ba2"), __webpack_require__.e("default~mail-mail-module~marketing-marketing-module"), __webpack_require__.e("marketing-marketing-module")]).then(__webpack_require__.bind(null, /*! ./marketing/marketing.module */ "./src/app/pages/marketing/marketing.module.ts")).then(function (m) { return m.MarketingModule; });
        }
    },
    {
        path: 'vendor',
        loadChildren: function () {
            return Promise.all(/*! import() | vendor-vendor-module */[__webpack_require__.e("default~customer-customer-module~dashboard-dashboard-module~support-support-module~vendor-vendor-mod~449f3bff"), __webpack_require__.e("common"), __webpack_require__.e("vendor-vendor-module")]).then(__webpack_require__.bind(null, /*! ./vendor/vendor.module */ "./src/app/pages/vendor/vendor.module.ts")).then(function (m) { return m.VendorModule; });
        }
    },
    {
        path: 'service',
        loadChildren: function () {
            return Promise.all(/*! import() | service-service-module */[__webpack_require__.e("default~customer-customer-module~product-product-module~service-service-module~staff-staff-module"), __webpack_require__.e("common"), __webpack_require__.e("service-service-module")]).then(__webpack_require__.bind(null, /*! ./service/service.module */ "./src/app/pages/service/service.module.ts")).then(function (m) { return m.ServiceModule; });
        }
    },
    {
        path: 'mail',
        loadChildren: function () { return Promise.all(/*! import() | mail-mail-module */[__webpack_require__.e("default~mail-mail-module~marketing-marketing-module"), __webpack_require__.e("mail-mail-module")]).then(__webpack_require__.bind(null, /*! ./mail/mail.module */ "./src/app/pages/mail/mail.module.ts")).then(function (m) { return m.MailModule; }); }
    },
    {
        path: 'product',
        loadChildren: function () {
            return Promise.all(/*! import() | product-product-module */[__webpack_require__.e("default~customer-customer-module~marketing-marketing-module~product-product-module~staff-staff-modul~1eb06ba2"), __webpack_require__.e("default~customer-customer-module~product-product-module~staff-staff-module~support-support-module"), __webpack_require__.e("default~customer-customer-module~product-product-module~service-service-module~staff-staff-module"), __webpack_require__.e("common"), __webpack_require__.e("product-product-module")]).then(__webpack_require__.bind(null, /*! ./product/product.module */ "./src/app/pages/product/product.module.ts")).then(function (m) { return m.ProductModule; });
        }
    },
    {
        path: 'support',
        loadChildren: function () {
            return Promise.all(/*! import() | support-support-module */[__webpack_require__.e("default~customer-customer-module~marketing-marketing-module~product-product-module~staff-staff-modul~1eb06ba2"), __webpack_require__.e("default~customer-customer-module~product-product-module~staff-staff-module~support-support-module"), __webpack_require__.e("default~customer-customer-module~dashboard-dashboard-module~support-support-module~vendor-vendor-mod~449f3bff"), __webpack_require__.e("support-support-module")]).then(__webpack_require__.bind(null, /*! ./support/support.module */ "./src/app/pages/support/support.module.ts")).then(function (m) { return m.SupportModule; });
        }
    },
    {
        path: 'enterprise',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | enterprise-enterprise-module */ "enterprise-enterprise-module").then(__webpack_require__.bind(null, /*! ./enterprise/enterprise.module */ "./src/app/pages/enterprise/enterprise.module.ts")).then(function (m) { return m.EnterpriseModule; });
        }
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");





var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["PagesRoutingModule"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module-es5.js.map