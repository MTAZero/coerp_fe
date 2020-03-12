(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor-vendor-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/list-vendor/list-vendor.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendor/list-vendor/list-vendor.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-page-title\n    title=\"Nhà cung cấp\"\n    [breadcrumbItems]=\"breadCrumbItems\"\n  ></app-page-title>\n\n  <div class=\"row\">\n    <div class=\"col-xl-8 order-xl-1 order-2\">\n      <div class=\"card mb-2\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-8\">\n              <form class=\"form-inline row\">\n                <div class=\"form-group col-sm-auto\">\n                  <input\n                    type=\"search\"\n                    class=\"form-control\"\n                    placeholder=\"Tìm kiếm...\"\n                    name=\"search\"\n                    [(ngModel)]=\"term\"\n                  />\n                </div>\n                <div class=\"form-group col-sm-auto\">\n                  <label for=\"status-select\" class=\"mr-2\">Sắp xếp</label>\n                  <select class=\"custom-select\" id=\"status-select\">\n                    <option selected=\"\">Tất cả</option>\n                    <option value=\"1\">Khách quen</option>\n                    <option value=\"2\">Khách VIP</option>\n                    <option value=\"3\">Khách BNI</option>\n                    <option value=\"4\">Khách khác</option>\n                  </select>\n                </div>\n              </form>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"text-lg-right mt-3 mt-lg-0\">\n                <button type=\"button\" class=\"btn btn-success mr-1\">\n                  <i class=\"mdi mdi-settings\"></i>\n                </button>\n                <a\n                  href=\"javascript: void(0);\"\n                  class=\"btn btn-danger\"\n                  (click)=\"openModal(content)\"\n                  ><i class=\"mdi mdi-plus-circle mr-1\"></i> Thêm mới</a\n                >\n              </div>\n            </div>\n            <!-- end col-->\n          </div>\n          <!-- end row -->\n        </div>\n        <!-- end card-body-->\n      </div>\n      <!-- end card-->\n\n      <div\n        class=\"card-box mb-2\"\n        *ngFor=\"let opportunity of opportunityData | filter: term\"\n      >\n        <div class=\"row align-items-center\">\n          <div class=\"col-sm-4\">\n            <div class=\"media\">\n              <img\n                class=\"d-flex align-self-center mr-3 rounded-circle\"\n                src=\"{{ opportunity.company }}\"\n                alt=\"Generic placeholder image\"\n                height=\"64\"\n              />\n              <div class=\"media-body\">\n                <h4 class=\"mt-0 mb-2 font-16\">{{ opportunity.name }}</h4>\n                <p class=\"mb-1\"><b>Địa chỉ:</b> {{ opportunity.location }}</p>\n                <p class=\"mb-0\"><b>Lĩnh vực:</b> {{ opportunity.category }}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <p class=\"mb-1 mt-3 mt-sm-0\">\n              <i class=\"mdi mdi-email mr-1\"></i> {{ opportunity.email }}\n            </p>\n            <p class=\"mb-0\">\n              <i class=\"mdi mdi-phone-classic mr-1\"></i> {{ opportunity.phone }}\n            </p>\n          </div>\n          <div class=\"col-sm-2\">\n            <div class=\"text-center mt-3 mt-sm-0\">\n              <div\n                class=\"badge font-14 p-1\"\n                [ngClass]=\"{\n                  'bg-soft-info text-info': opportunity.status === 'Amazon',\n                  'bg-soft-primary text-primary':\n                    opportunity.status === 'Apple',\n                  'bg-soft-warning text-warning':\n                    opportunity.status === 'Google',\n                  'bg-soft-danger text-danger': opportunity.status === 'Airbnb',\n                  'bg-soft-success text-success': opportunity.status === 'Cisco'\n                }\"\n              >\n                {{ opportunity.status }}\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-2\">\n            <div class=\"text-sm-right\">\n              <a href=\"javascript:void(0);\" class=\"action-icon\">\n                <i class=\"mdi mdi-square-edit-outline\"></i\n              ></a>\n              <a href=\"javascript:void(0);\" class=\"action-icon\">\n                <i class=\"mdi mdi-delete\"></i\n              ></a>\n            </div>\n          </div>\n          <!-- end col-->\n        </div>\n        <!-- end row -->\n      </div>\n      <!-- end card-box-->\n      <div class=\"text-center my-4\">\n        <a href=\"javascript:void(0);\" class=\"text-danger\"\n          ><i class=\"mdi mdi-spin mdi-loading mr-1\"></i> Tải thêm\n        </a>\n      </div>\n    </div>\n    <div class=\"col-xl-4 order-xl-2 order-1\">\n      <div class=\"card-box\" dir=\"ltr\">\n        <h4 class=\"header-title mb-3 text-center\">\n          Biểu đồ tỉ lệ sản phẩm cung cấp\n        </h4>\n\n        <div class=\"text-center\">\n          <apx-chart\n            [series]=\"simplePieChart.series\"\n            [chart]=\"simplePieChart.chart\"\n            [labels]=\"simplePieChart.labels\"\n            [dataLabels]=\"simplePieChart.dataLabels\"\n            [legend]=\"simplePieChart.legend\"\n            [colors]=\"simplePieChart.colors\"\n            [responsive]=\"simplePieChart.responsive\"\n          >\n          </apx-chart>\n          <p class=\"text-muted font-15 font-family-secondary mb-0 mt-3\">\n            <span class=\"mx-2\"\n              ><i class=\"mdi mdi-checkbox-blank-circle text-success\"></i>\n              Amazon</span\n            >\n            <span class=\"mx-2\"\n              ><i class=\"mdi mdi-checkbox-blank-circle text-info\"></i>\n              Apple</span\n            >\n            <span class=\"mx-2\"\n              ><i class=\"mdi mdi-checkbox-blank-circle text-primary\"></i>\n              Google</span\n            >\n            <span class=\"mx-2\"\n              ><i class=\"mdi mdi-checkbox-blank-circle text-warning\"></i>\n              AirBnb</span\n            >\n            <span class=\"mx-2\"\n              ><i class=\"mdi mdi-checkbox-blank-circle text-danger\"></i>\n              Cisco</span\n            >\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Opportunities model -->\n<ng-template #content role=\"document\" let-modal=\"close\">\n  <div class=\"modal-header bg-dark\">\n    <h4 class=\"modal-title text-white\">Add New Opportunities</h4>\n    <button\n      type=\"button\"\n      class=\"close text-white\"\n      aria-label=\"Close\"\n      (click)=\"modal('Cross click')\"\n    >\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body p-3\">\n    <div class=\"text-left\">\n      <form (ngSubmit)=\"saveData()\" [formGroup]=\"validationform\">\n        <div class=\"form-group\">\n          <label for=\"name\">Company Name</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"name\"\n            placeholder=\"Enter company name\"\n            formControlName=\"name\"\n            [ngClass]=\"{ 'is-invalid': submitted && form.name.errors }\"\n          />\n          <div *ngIf=\"submitted && form.name.errors\" class=\"invalid-feedback\">\n            <span *ngIf=\"form.name.errors.required\"\n              >This value is required.</span\n            >\n            <span *ngIf=\"form.name.errors.pattern\"\n              >This value should be a valid name.</span\n            >\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input\n            class=\"form-control\"\n            id=\"email\"\n            placeholder=\"Enter email\"\n            formControlName=\"email\"\n            [ngClass]=\"{ 'is-invalid': submitted && form.email.errors }\"\n          />\n          <div *ngIf=\"submitted && form.email.errors\" class=\"invalid-feedback\">\n            <span *ngIf=\"form.email.errors.required\"\n              >This value is required.</span\n            >\n            <span *ngIf=\"form.email.errors.pattern\"\n              >Please enter valid email.</span\n            >\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Phone </label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Enter phone number\"\n            formControlName=\"phone\"\n            [ngClass]=\"{ 'is-invalid': submitted && form.phone.errors }\"\n            minlength=\"10\"\n          />\n          <div *ngIf=\"submitted && form.phone.errors\" class=\"invalid-feedback\">\n            <span *ngIf=\"form.phone.errors.required\"\n              >This value is required.</span\n            >\n            <span *ngIf=\"form.phone.errors.minlength\"\n              >Phone number must be 10 characters.</span\n            >\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Category </label>\n          <input\n            class=\"form-control\"\n            placeholder=\"Enter category\"\n            formControlName=\"category\"\n            [ngClass]=\"{ 'is-invalid': submitted && form.category.errors }\"\n          />\n          <div\n            *ngIf=\"submitted && form.category.errors\"\n            class=\"invalid-feedback\"\n          >\n            <span *ngIf=\"form.category.errors.required\"\n              >This value is required.</span\n            >\n          </div>\n        </div>\n\n        <div class=\"text-right\">\n          <button type=\"submit\" class=\"btn btn-success\">Save</button>\n          <button\n            type=\"button\"\n            class=\"btn btn-danger ml-1\"\n            (click)=\"modal('close click')\"\n          >\n            Cancel\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/vendor/list-vendor/data.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/vendor/list-vendor/data.ts ***!
  \**************************************************/
/*! exports provided: opportunityData, simplePieChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opportunityData", function() { return opportunityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplePieChart", function() { return simplePieChart; });
const opportunityData = [
    {
        company: 'assets/images/companies/amazon.png',
        name: 'Amazon Inc.',
        location: 'Seattle, Washington',
        category: 'Ecommerce',
        email: 'collier@jourrapide.com',
        phone: '828-216-2190',
        status: 'Amazon'
    },
    {
        company: 'assets/images/companies/apple.png',
        name: 'Apple Inc.',
        location: 'Cupertino, California',
        category: 'Ecommerce',
        email: 'deanes@dayrep.com',
        phone: '077 6157 4248',
        status: 'Apple'
    },
    {
        company: 'assets/images/companies/google.png',
        name: 'Google LLC',
        location: 'Menlo Park, California',
        category: 'Search engine',
        email: 'nnac@hotmai.us',
        phone: '(216) 76 298 896',
        status: 'Google'
    },
    {
        company: 'assets/images/companies/airbnb.png',
        name: 'Airbnb Inc.',
        location: 'San Francisco, California',
        category: 'Real Estate',
        email: 'austin@dayrep.com',
        phone: '(02) 75 150 655',
        status: 'Airbnb'
    },
    {
        company: 'assets/images/companies/cisco.png',
        name: 'Cisco Systems',
        location: 'San Jose, California',
        category: 'Operating Systems',
        email: 'annette@email.net',
        phone: '(+15) 73 483 758',
        status: 'Cisco'
    }
];
/*---------------------Chart ------------------------- */
const simplePieChart = {
    chart: {
        height: 270,
        type: 'pie'
    },
    series: [20, 40, 30, 10, 28],
    labels: ['Amazon', 'Apple', 'Google', 'Airbnb', 'Cisco'],
    colors: ['#4fc6e1', '#6658dd', '#f7b84b', '#f1556c', '#1abc9c'],
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    responsive: [
        {
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: false
                }
            }
        }
    ]
};



/***/ }),

/***/ "./src/app/pages/vendor/list-vendor/list-vendor.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/vendor/list-vendor/list-vendor.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvci9saXN0LXZlbmRvci9saXN0LXZlbmRvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/vendor/list-vendor/list-vendor.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/vendor/list-vendor/list-vendor.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVendorComponent", function() { return ListVendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/app/pages/vendor/list-vendor/data.ts");





let ListVendorComponent = class ListVendorComponent {
    constructor(modalService, formBuilder) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        // tslint:disable-next-line: max-line-length
        this.breadCrumbItems = [
            { label: 'ERP', path: '/' },
            { label: 'Nhà cung cấp', path: '/' },
            { label: 'Thông tin nhà cung cấp', path: '/', active: true }
        ];
        /**
         * form validation
         */
        this.validationform = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
                ]
            ]
        });
        /**
         * fetches data
         */
        this._fetchData();
    }
    /**
     * Returns form
     */
    get form() {
        return this.validationform.controls;
    }
    /**
     * Modal Open
     * @param content modal content
     */
    openModal(content) {
        this.modalService.open(content, { centered: true });
    }
    /**
     * save the Opportunities data
     */
    saveData() {
        const name = this.validationform.get('name').value;
        const phone = this.validationform.get('phone').value;
        const category = this.validationform.get('category').value;
        const email = this.validationform.get('email').value;
        if (this.validationform.valid) {
            this.opportunityData.push({
                company: 'assets/images/companies/amazon.png',
                name,
                phone,
                location: 'California',
                category,
                email,
                status: 'Won'
            });
            this.validationform = this.formBuilder.group({
                name: '',
                phone: '',
                location: '',
                email: ''
            });
            this.modalService.dismissAll();
        }
        this.submitted = true;
    }
    /**
     * fetches the opportunities value
     */
    _fetchData() {
        this.opportunityData = _data__WEBPACK_IMPORTED_MODULE_4__["opportunityData"];
        this.simplePieChart = _data__WEBPACK_IMPORTED_MODULE_4__["simplePieChart"];
    }
};
ListVendorComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ListVendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-vendor',
        template: __webpack_require__(/*! raw-loader!./list-vendor.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendor/list-vendor/list-vendor.component.html"),
        styles: [__webpack_require__(/*! ./list-vendor.component.scss */ "./src/app/pages/vendor/list-vendor/list-vendor.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], ListVendorComponent);



/***/ }),

/***/ "./src/app/pages/vendor/vendor-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/vendor/vendor-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: VendorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorRoutingModule", function() { return VendorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_vendor_list_vendor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-vendor/list-vendor.component */ "./src/app/pages/vendor/list-vendor/list-vendor.component.ts");




const routes = [
    {
        path: 'list-vendor',
        component: _list_vendor_list_vendor_component__WEBPACK_IMPORTED_MODULE_3__["ListVendorComponent"]
    }
];
let VendorRoutingModule = class VendorRoutingModule {
};
VendorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VendorRoutingModule);



/***/ }),

/***/ "./src/app/pages/vendor/vendor.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/vendor/vendor.module.ts ***!
  \***********************************************/
/*! exports provided: VendorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorModule", function() { return VendorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/ui/ui.module */ "./src/app/shared/ui/ui.module.ts");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm2015/ng-apexcharts.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _list_vendor_list_vendor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-vendor/list-vendor.component */ "./src/app/pages/vendor/list-vendor/list-vendor.component.ts");
/* harmony import */ var _vendor_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendor-routing.module */ "./src/app/pages/vendor/vendor-routing.module.ts");










let VendorModule = class VendorModule {
};
VendorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_vendor_list_vendor_component__WEBPACK_IMPORTED_MODULE_8__["ListVendorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _vendor_routing_module__WEBPACK_IMPORTED_MODULE_9__["VendorRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UIModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__["NgApexchartsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"]
        ]
    })
], VendorModule);



/***/ })

}]);
//# sourceMappingURL=vendor-vendor-module-es2015.js.map