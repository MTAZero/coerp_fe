(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enterprise-enterprise-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/enterprise/project/project.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/enterprise/project/project.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-page-title\n    title=\"Dự án\"\n    [breadcrumbItems]=\"breadCrumbItems\"\n  ></app-page-title>\n\n  <div class=\"row mb-2\">\n    <div class=\"col-sm-4\">\n      <button type=\"button\" class=\"btn btn-danger btn-rounded mb-3\">\n        <i class=\"mdi mdi-plus\"></i> Create Project\n      </button>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"text-sm-right\">\n        <div class=\"btn-group mb-3\">\n          <button type=\"button\" class=\"btn btn-primary\">All</button>\n        </div>\n        <div class=\"btn-group mb-3 ml-1\">\n          <button type=\"button\" class=\"btn btn-light\">Ongoing</button>\n          <button type=\"button\" class=\"btn btn-light\">Finished</button>\n        </div>\n        <div class=\"btn-group mb-3 ml-2 d-none d-sm-inline-block\">\n          <button type=\"button\" class=\"btn btn-dark\">\n            <i class=\"mdi mdi-apps\"></i>\n          </button>\n        </div>\n        <div class=\"btn-group mb-3 d-none d-sm-inline-block\">\n          <button type=\"button\" class=\"btn btn-link text-dark\">\n            <i class=\"mdi mdi-format-list-bulleted-type\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n    <!-- end col-->\n  </div>\n  <!-- end row-->\n\n  <div class=\"row\">\n    <div class=\"col-xl-4\" *ngFor=\"let project of projectData\">\n      <div class=\"card-box project-box\">\n        <ng-template [ngTemplateOutlet]=\"CardActions\"></ng-template>\n        <!-- Title-->\n        <h4 class=\"mt-0\">\n          <a href=\"javascript: void(0);\" class=\"text-dark\">{{\n            project.name\n          }}</a>\n        </h4>\n        <p class=\"text-muted text-uppercase\">\n          <i class=\"mdi mdi-account-circle\"></i>\n          <small>{{ project.company }}</small>\n        </p>\n        <div\n          class=\"badge bg-soft-success text-success mb-3\"\n          [ngClass]=\"{ 'bg-soft-dark text-dark': project.status === 'Ongoing' }\"\n        >\n          {{ project.status }}\n        </div>\n        <!-- Desc-->\n        <p class=\"text-muted font-13 mb-3 sp-line-2\">\n          {{ project.text\n          }}<a href=\"javascript:void(0);\" class=\"font-weight-bold text-muted\"\n            >view more</a\n          >\n        </p>\n        <!-- Task info-->\n        <p class=\"mb-1\">\n          <span class=\"pr-2 text-nowrap mb-2 d-inline-block\">\n            <i class=\"mdi mdi-format-list-bulleted-type text-muted\"></i>\n            <b>{{ project.tasks }}</b> Tasks\n          </span>\n          <span class=\"text-nowrap mb-2 d-inline-block\">\n            <i class=\"mdi mdi-comment-multiple-outline text-muted\"></i>\n            <b>{{ project.comments }}</b> Comments\n          </span>\n        </p>\n        <!-- Team-->\n        <div class=\"avatar-group mb-3\">\n          <a href=\"javascript: void(0);\" class=\"avatar-group-item\">\n            <img\n              src=\"{{ project.member[0] }}\"\n              class=\"rounded-circle avatar-sm\"\n              alt=\"friend\"\n            />\n          </a>\n\n          <a href=\"javascript: void(0);\" class=\"avatar-group-item\">\n            <img\n              src=\"{{ project.member[1] }}\"\n              class=\"rounded-circle avatar-sm\"\n              alt=\"friend\"\n            />\n          </a>\n\n          <a href=\"javascript: void(0);\" class=\"avatar-group-item\">\n            <img\n              src=\"{{ project.member[2] }}\"\n              class=\"rounded-circle avatar-sm\"\n              alt=\"friend\"\n            />\n          </a>\n\n          <a\n            href=\"javascript: void(0);\"\n            class=\"avatar-group-item\"\n            *ngIf=\"project.member[3]\"\n          >\n            <img\n              src=\"{{ project.member[3] }}\"\n              class=\"rounded-circle avatar-sm\"\n              alt=\"friend\"\n            />\n          </a>\n\n          <a\n            href=\"javascript: void(0);\"\n            class=\"avatar-group-item\"\n            *ngIf=\"project.member[4]\"\n          >\n            <img\n              src=\"{{ project.member[4] }}\"\n              class=\"rounded-circle avatar-sm\"\n              alt=\"friend\"\n            />\n          </a>\n        </div>\n        <!-- Progress-->\n        <p class=\"mb-2 font-weight-bold\">\n          Task completed:\n          <span class=\"float-right\"\n            >{{ project.progressValue }}/{{ project.tasks }}</span\n          >\n        </p>\n        <ngb-progressbar\n          [value]=\"project.progressValue\"\n          [max]=\"project.tasks\"\n          height=\"7px\"\n        >\n        </ngb-progressbar>\n      </div>\n      <!-- end card box-->\n    </div>\n    <!-- end col-->\n  </div>\n</div>\n\n<ng-template #CardActions>\n  <div class=\"dropdown float-right\" ngbDropdown>\n    <a\n      href=\"javascript: void(0);\"\n      class=\"dropdown-toggle card-drop arrow-none\"\n      ngbDropdownToggle\n      aria-expanded=\"false\"\n    >\n      <i class=\"mdi mdi-dots-horizontal m-0 text-muted h3\"></i>\n    </a>\n    <div class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu>\n      <a class=\"dropdown-item\" href=\"javascript: void(0);\">Edit</a>\n      <a class=\"dropdown-item\" href=\"javascript: void(0);\">Delete</a>\n      <a class=\"dropdown-item\" href=\"javascript: void(0);\">Add Members</a>\n      <a class=\"dropdown-item\" href=\"javascript: void(0);\">Add Due Date</a>\n    </div>\n  </div>\n  <!-- end dropdown -->\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/enterprise/enterprise-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/enterprise/enterprise-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EnterpriseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseRoutingModule", function() { return EnterpriseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project.component */ "./src/app/pages/enterprise/project/project.component.ts");




const routes = [
    {
        path: 'project',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]
    }
];
let EnterpriseRoutingModule = class EnterpriseRoutingModule {
};
EnterpriseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EnterpriseRoutingModule);



/***/ }),

/***/ "./src/app/pages/enterprise/enterprise.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/enterprise/enterprise.module.ts ***!
  \*******************************************************/
/*! exports provided: EnterpriseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseModule", function() { return EnterpriseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ui/ui.module */ "./src/app/shared/ui/ui.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/project.component */ "./src/app/pages/enterprise/project/project.component.ts");
/* harmony import */ var _enterprise_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enterprise-routing.module */ "./src/app/pages/enterprise/enterprise-routing.module.ts");







let EnterpriseModule = class EnterpriseModule {
};
EnterpriseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _enterprise_routing_module__WEBPACK_IMPORTED_MODULE_6__["EnterpriseRoutingModule"],
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UIModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbProgressbarModule"]
        ]
    })
], EnterpriseModule);



/***/ }),

/***/ "./src/app/pages/enterprise/project/data.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/enterprise/project/data.ts ***!
  \**************************************************/
/*! exports provided: projectData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectData", function() { return projectData; });
const projectData = [
    {
        name: 'New Admin Design',
        company: 'Orange Limited',
        status: 'Finished',
        text: 'With supporting text below as a natural lead-in to additional contenposuere erat a ante...',
        tasks: 78,
        comments: 214,
        member: [
            'assets/images/users/user-1.jpg',
            'assets/images/users/user-2.jpg',
            'assets/images/users/user-3.jpg',
            'assets/images/users/user-4.jpg',
            'assets/images/users/user-5.jpg'
        ],
        progressValue: 28
    },
    {
        name: 'App Design and Development',
        company: 'Moondust Softwares',
        status: 'Ongoing',
        text: 'A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable...',
        tasks: 81,
        comments: 103,
        member: [
            'assets/images/users/user-6.jpg',
            'assets/images/users/user-7.jpg',
            'assets/images/users/user-8.jpg'
        ],
        progressValue: 55
    },
    {
        name: 'Landing page Design',
        company: 'Rose Technologies',
        status: 'Finished',
        text: "You need to be sure there isn't anything embarrassing hidden in the middle of text...",
        tasks: 42,
        comments: 65,
        member: [
            'assets/images/users/user-9.jpg',
            'assets/images/users/user-10.jpg',
            'assets/images/users/user-1.jpg',
            'assets/images/users/user-3.jpg'
        ],
        progressValue: 21
    },
    {
        name: 'Custom Software Development',
        company: 'Apple Navigations',
        status: 'Ongoing',
        text: "You need to be sure there isn't anything embarrassing hidden in the middle of text...",
        tasks: 95,
        comments: 97,
        member: [
            'assets/images/users/user-5.jpg',
            'assets/images/users/user-8.jpg',
            'assets/images/users/user-9.jpg'
        ],
        progressValue: 70
    },
    {
        name: 'Website Redesign',
        company: 'Enigma Navigations',
        status: 'Ongoing',
        text: 'There are many variations of passages of Lorem Ipsum available natural lead-in to additional...',
        tasks: 36,
        comments: 78,
        member: [
            'assets/images/users/user-3.jpg',
            'assets/images/users/user-4.jpg',
            'assets/images/users/user-5.jpg',
            'assets/images/users/user-1.jpg'
        ],
        progressValue: 12
    },
    {
        name: 'Multipurpose Landing Template',
        company: 'Pride Softwares',
        status: 'Finished',
        text: 'With supporting text below as a natural lead-in to additional contenposuere erat a ante...',
        tasks: 30,
        comments: 148,
        member: [
            'assets/images/users/user-6.jpg',
            'assets/images/users/user-7.jpg',
            'assets/images/users/user-8.jpg'
        ],
        progressValue: 28
    }
];



/***/ }),

/***/ "./src/app/pages/enterprise/project/project.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/enterprise/project/project.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VudGVycHJpc2UvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/enterprise/project/project.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/enterprise/project/project.component.ts ***!
  \***************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/pages/enterprise/project/data.ts");



let ProjectComponent = class ProjectComponent {
    constructor() { }
    ngOnInit() {
        // tslint:disable-next-line: max-line-length
        this.breadCrumbItems = [
            { label: 'ERP', path: '/' },
            { label: 'Doanh nghiệp', path: '/' },
            { label: 'Dự án', path: '/', active: true }
        ];
        /**
         * fetches data
         */
        this._fetchData();
    }
    /**
     * fetches project value
     */
    _fetchData() {
        this.projectData = _data__WEBPACK_IMPORTED_MODULE_2__["projectData"];
    }
};
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/enterprise/project/project.component.html"),
        styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/pages/enterprise/project/project.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProjectComponent);



/***/ })

}]);
//# sourceMappingURL=enterprise-enterprise-module-es2015.js.map