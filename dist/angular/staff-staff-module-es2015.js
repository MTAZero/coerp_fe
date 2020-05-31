(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-staff-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/assign-work/assign-work.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/assign-work/assign-work.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-container [hasBottom]=\"false\">\n  <div top class=\"card-body\" style=\"height: 100%;\">\n    <div class=\"row mb-1\">\n      <div class=\"form-group col-xl-6\">\n        <ng-select\n          style=\"width: 100%;\"\n          placeholder=\"Nhân viên\"\n          name=\"staffs\"\n          [items]=\"staffs\"\n          [multiple]=\"true\"\n          bindLabel=\"sta_fullname\"\n          [closeOnSelect]=\"false\"\n          bindValue=\"sta_id\"\n          [(ngModel)]=\"selectedStaffs\"\n        >\n        </ng-select>\n      </div>\n      <div class=\"form-group col-xl-5\">\n        <select class=\"custom-select mr-1\" name=\"category\" [(ngModel)]=\"selectedCustomerGroup\">\n          <option value=\"\">Nhóm khách hàng</option>\n          <option *ngFor=\"let item of customerGroups\" [value]=\"item.cg_id\">{{\n            item.cg_name\n          }}</option>\n        </select>\n      </div>\n      <div class=\"text-sm-right\">\n        <a class=\"btn btn-success mr-1 button-link\" (click)=\"onClickExcute()\"> Thực hiện</a>\n      </div>\n    </div>\n    <div class=\"row mb-1\">\n      <div class=\"col-xl-6\">\n        <form class=\"form-inline\">\n          <div class=\"form-group mr-1\">\n            <input\n              class=\"form-control\"\n              name=\"textSearch\"\n              placeholder=\"Tìm kiếm...\"\n              [(ngModel)]=\"textSearch\"\n              (input)=\"onChangeFilter()\"\n            />\n          </div>\n\n          <select\n            class=\"custom-select mr-1\"\n            name=\"category\"\n            [(ngModel)]=\"staffSearch\"\n            (change)=\"onChangeFilter()\"\n          >\n            <option *ngFor=\"let item of staffs\" [value]=\"item.sta_id\">{{\n              item.sta_fullname\n            }}</option>\n          </select>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\">\n        <thead>\n          <tr>\n            <th>MKH</th>\n            <th>Tên khách hàng</th>\n            <th>Số điện thoại</th>\n            <th>Email</th>\n            <th>Loại khách hàng</th>\n            <th>Nhóm khách hàng</th>\n            <th>Địa chỉ</th>\n            <th>Ngày sinh</th>\n            <th>Nguồn</th>\n            <th>Thông tin lưu ý</th>\n            <th>Nhân viên phụ trách</th>\n            <th>Ngày tạo</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let customer of customers\">\n            <td>\n              {{ customer.cu_code }}\n            </td>\n            <td>\n              <span\n                ><img\n                  class=\"rounded-circle avatar-sm\"\n                  [src]=\"'http://27.72.147.222:1230' + customer.cu_thumbnail\"\n                  onerror=\"this.src='/assets/images/users/user-1.jpg';\"\n                  alt=\"Avatar\"\n              /></span>\n              {{ customer.cu_fullname }}\n            </td>\n            <td>\n              {{ customer.cu_mobile }}\n            </td>\n            <td>\n              {{ customer.cu_email }}\n            </td>\n            <td>\n              {{ customer.cu_type_name }}\n            </td>\n            <td>\n              <span class=\"badge badge-danger\">\n                {{ customer.customer_group_name }}\n              </span>\n            </td>\n            <td>\n              {{ customer.cu_address }}\n            </td>\n            <td>\n              {{ customer.cu_birthday | date: 'dd/MM/yyyy' }}\n            </td>\n            <td>\n              {{ customer.source_name }}\n            </td>\n            <td>\n              {{ customer.cu_note }}\n            </td>\n            <td>\n              {{ customer.cu_curator_name }}\n            </td>\n            <td>\n              {{ customer.cu_create_date | date: 'dd/MM/yyyy' }}\n            </td>\n          </tr>\n          <tr *ngIf=\"customers?.length === 0\">\n            <td colspan=\"12\">Không có dữ liệu khách hàng</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <ul class=\"pagination pagination-rounded justify-content-end my-3\">\n      <ngb-pagination\n        (pageChange)=\"onPageChange($event)\"\n        [pageSize]=\"pageSize\"\n        [(page)]=\"page\"\n        [collectionSize]=\"totalSize\"\n      ></ngb-pagination>\n    </ul>\n  </div>\n</app-main-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/assigned-work/assigned-work.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/assigned-work/assigned-work.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-container [hasBottom]=\"false\">\n  <div top class=\"card-body\" style=\"height: 100%;\">\n    <div class=\"row\">\n      <div class=\"col-xl-3\">\n        <app-portlet\n          title=\"Thống kê mức độ hài lòng\"\n          color=\"white\"\n          text=\"center\"\n          headerClass=\"title header-title border-0 my-1\"\n          (onContentRefresh)=\"contentRefresh()\"\n        >\n          <div class=\"card-body text-center pt-0\">\n            <apx-chart\n              [series]=\"ratePieChart.series\"\n              [chart]=\"ratePieChart\"\n              [labels]=\"ratePieChart.labels\"\n              [dataLabels]=\"ratePieChart.dataLabels\"\n              [legend]=\"ratePieChart.legend\"\n              [plotOptions]=\"ratePieChart.option\"\n            >\n            </apx-chart>\n          </div>\n        </app-portlet>\n      </div>\n\n      <div class=\"col-xl-3\">\n        <app-portlet\n          title=\"Thống kê nhóm khách hàng\"\n          color=\"white\"\n          text=\"center\"\n          headerClass=\"title header-title border-0 my-1\"\n          (onContentRefresh)=\"contentRefresh()\"\n        >\n          <div class=\"card-body text-center pt-0\">\n            <apx-chart\n              [series]=\"customerPieChart.series\"\n              [chart]=\"customerPieChart\"\n              [labels]=\"customerPieChart.labels\"\n              [dataLabels]=\"customerPieChart.dataLabels\"\n              [legend]=\"customerPieChart.legend\"\n              [plotOptions]=\"customerPieChart.option\"\n            >\n            </apx-chart>\n          </div>\n        </app-portlet>\n      </div>\n      <div class=\"col-xl-3\">\n        <app-portlet\n          title=\"Thống kê nguồn khách hàng\"\n          color=\"white\"\n          text=\"center\"\n          headerClass=\"title header-title border-0 my-1\"\n          (onContentRefresh)=\"contentRefresh()\"\n        >\n          <div class=\"card-body text-center pt-0\">\n            <apx-chart\n              [series]=\"customerPieChart.series\"\n              [chart]=\"customerPieChart\"\n              [labels]=\"customerPieChart.labels\"\n              [dataLabels]=\"customerPieChart.dataLabels\"\n              [legend]=\"customerPieChart.legend\"\n              [plotOptions]=\"customerPieChart.option\"\n            >\n            </apx-chart>\n          </div>\n        </app-portlet>\n      </div>\n      <div class=\"col-xl-3\">\n        <app-portlet\n          title=\"Tổng doanh thu\"\n          color=\"white\"\n          text=\"center\"\n          headerClass=\"title header-title border-0 my-1\"\n          (onContentRefresh)=\"contentRefresh()\"\n        >\n          <div class=\"card-body text-center pt-0\">\n            <apx-chart\n              class=\"apex-charts\"\n              [series]=\"basicColumChart.series\"\n              [chart]=\"basicColumChart.chart\"\n              [plotOptions]=\"basicColumChart.plotOptions\"\n              [yaxis]=\"basicColumChart.yaxis\"\n              [grid]=\"basicColumChart.grid\"\n              [tooltip]=\"basicColumChart.tooltip\"\n              [stroke]=\"basicColumChart.stroke\"\n              [dataLabels]=\"basicColumChart.dataLabels\"\n              [xaxis]=\"basicColumChart.xaxis\"\n              [legend]=\"basicColumChart.legend\"\n              [colors]=\"basicColumChart.colors\"\n              [fill]=\"basicColumChart.fill\"\n            >\n            </apx-chart>\n          </div>\n        </app-portlet>\n      </div>\n    </div>\n    <div class=\"row mb-1\">\n      <div class=\"col-xl-6\">\n        <form class=\"form-inline row\">\n          <div class=\"form-group mr-1\">\n            <input\n              class=\"form-control\"\n              name=\"textSearch\"\n              placeholder=\"Tìm kiếm...\"\n              [(ngModel)]=\"textSearch\"\n              (input)=\"onChangeFilter()\"\n            />\n          </div>\n          <div class=\"input-group clockpicker mr-1\">\n            <input\n              ngbDatepicker\n              readonly=\"true\"\n              class=\"form-control\"\n              placeholder=\"yyyy-mm-dd\"\n              #from=\"ngbDatepicker\"\n              name=\"from\"\n              [maxDate]=\"toDate\"\n              [(ngModel)]=\"fromDate\"\n              (dateSelect)=\"onChangeFilter()\"\n            />\n            <div class=\"input-group-append\" (click)=\"from.toggle()\">\n              <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n            </div>\n          </div>\n          <div class=\"input-group clockpicker\">\n            <input\n              ngbDatepicker\n              readonly=\"true\"\n              class=\"form-control\"\n              placeholder=\"yyyy-mm-dd\"\n              #to=\"ngbDatepicker\"\n              name=\"to\"\n              [minDate]=\"fromDate\"\n              [(ngModel)]=\"toDate\"\n              (dateSelect)=\"onChangeFilter()\"\n            />\n            <div class=\"input-group-append\" (click)=\"to.toggle()\">\n              <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-xl-6\">\n        <div class=\"text-sm-right\">\n          <button type=\"button\" class=\"btn btn-info mr-1\">\n            <span class=\"mdi mdi-cloud-upload\"></span>\n            Nhập\n          </button>\n          <button type=\"button\" class=\"btn btn-info mr-1\" (click)=\"exportTransaction()\">\n            <span class=\"mdi mdi-cloud-download\"></span>\n            Xuất\n          </button>\n          <a\n            [ngClass]=\"selectedOrder ? '' : 'disabled'\"\n            class=\"btn btn-secondary mr-1 button-link\"\n            (click)=\"openCustomerCareModal(selectedOrder, true)\"\n            ><i class=\"mdi mdi-eye mr-1\"></i> Chi tiết</a\n          >\n          <a class=\"btn btn-success mr-1 button-link\" (click)=\"openCustomerCareModal()\"\n            ><i class=\"mdi mdi-plus-circle mr-1\"></i> Thêm mới</a\n          >\n          <a\n            class=\"btn btn-primary mr-1 button-link\"\n            [ngClass]=\"selectedOrder ? '' : 'disabled'\"\n            (click)=\"openCustomerCareModal(selectedOrder)\"\n            ><i class=\"mdi mdi-square-edit-outline mr-1\"></i> Cập nhật</a\n          >\n          <a\n            class=\"btn btn-danger mr-1 button-link\"\n            [ngClass]=\"selectedOrder ? '' : 'disabled'\"\n            (click)=\"openConfirmModal(selectedOrder)\"\n            ><i class=\"mdi mdi-delete mr-1\"></i> Xóa</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\">\n        <thead>\n          <tr>\n            <th>STT</th>\n            <th>Tiêu đề</th>\n            <th>Nội dung</th>\n            <th>Đánh giá</th>\n            <th>Loại giao dịch</th>\n            <th>Kết quả</th>\n            <th>Mức độ ưu tiên</th>\n            <th>Phụ trách</th>\n            <th>Khách hàng</th>\n            <th>Trạng thái</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let transaction of transactions; let i = index\"\n            (click)=\"onClickOrder(transaction)\"\n            [ngClass]=\"{\n              'is-selected': transaction.tra_id === selectedOrder?.tra_id\n            }\"\n          >\n            <td>\n              {{ i + 1 }}\n            </td>\n            <td>\n              {{ transaction.tra_title }}\n            </td>\n            <td>\n              {{ transaction.tra_content }}\n            </td>\n            <td>\n              {{ transaction.tra_rate_name }}\n            </td>\n            <td>\n              {{ transaction.tra_type_name }}\n            </td>\n            <td>\n              {{ transaction.tra_result }}\n            </td>\n            <td>\n              {{ transaction.tra_priority_name }}\n            </td>\n            <td>\n              {{ transaction.staff_name }}\n            </td>\n            <td>\n              {{ transaction.customer_name }}\n            </td>\n            <td>\n              <span\n                class=\"badge\"\n                [ngClass]=\"\n                  transaction.tra_status === 1\n                    ? 'badge-danger'\n                    : transaction.tra_status === 2\n                    ? 'badge-warning'\n                    : 'badge-success'\n                \"\n                >{{ transaction.tra_status_name }}\n              </span>\n            </td>\n          </tr>\n          <tr *ngIf=\"transactions?.length === 0\">\n            <td colspan=\"10\">Không có dữ liệu đơn hàng</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <ul class=\"pagination pagination-rounded justify-content-end my-3\">\n      <ngb-pagination\n        (pageChange)=\"onPageChange($event)\"\n        [pageSize]=\"pageSize\"\n        [(page)]=\"page\"\n        [collectionSize]=\"totalSize\"\n      ></ngb-pagination>\n    </ul>\n  </div>\n</app-main-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff-detail/component/list-training-modal/list-training-modal.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff-detail/component/list-training-modal/list-training-modal.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">Chọn khóa đào tạo</h4>\n  <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"onClickCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\">\n      <thead>\n        <tr>\n          <th>\n            <div class=\"checkbox checkbox-primary checkbox-single\">\n              <input\n                type=\"checkbox\"\n                [checked]=\"selectedTraining?.length === trainings?.length\"\n                (change)=\"checkAll()\"\n              />\n              <label></label>\n            </div>\n          </th>\n          <th>Mã đào tạo</th>\n          <th>Tên CTĐT</th>\n          <th>Nội dung đào tạo</th>\n          <th>Thời gian bắt đầu</th>\n          <th>Thời gian kết thúc</th>\n          <th>Mục tiêu đào tạo</th>\n          <th>Thao tác</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let training of trainings; let i = index\" (click)=\"onClickTraining(training)\">\n          <td>\n            <div class=\"checkbox checkbox-primary checkbox-single\">\n              <input type=\"checkbox\" [checked]=\"isSelected(training)\" />\n              <label></label>\n            </div>\n          </td>\n          <td>{{ training.tn_code }}</td>\n          <td>\n            {{ training.tn_name }}\n          </td>\n          <td>\n            {{ training.tn_content }}\n          </td>\n          <td>\n            {{ training.tn_start_date | date: 'dd/MM/yyyy' }}\n          </td>\n          <td>\n            {{ training.tn_end_date | date: 'dd/MM/yyyy' }}\n          </td>\n          <td>\n            {{ training.tn_purpose }}\n          </td>\n          <td>\n            <a href=\"javascript:void(0);\" class=\"action-icon\" (click)=\"openTrainingModal(training)\">\n              <i class=\"mdi mdi-square-edit-outline\"></i\n            ></a>\n            <a\n              href=\"javascript:void(0);\"\n              class=\"action-icon\"\n              (click)=\"openRemoveTraining(training)\"\n            >\n              <i class=\"mdi mdi-delete\"></i\n            ></a>\n          </td>\n        </tr>\n        <tr *ngIf=\"!trainings || trainings.length === 0\">\n          <td colspan=\"6\">Không có dữ liệu khóa đào tạo</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"text-right mt-3\">\n    <button class=\"btn btn-danger ml-1\" (click)=\"onClickCancel()\">\n      Hủy\n    </button>\n    <button class=\"btn btn-success ml-1\" (click)=\"onClickSubmit()\">\n      Lưu\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff-detail/list-staff-detail.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff-detail/list-staff-detail.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-container [hasBottom]=\"false\">\n  <div top class=\"card-body pb-2\" style=\"height: 100%;\">\n    <div class=\"staff-detail\">\n      <div class=\"menu\">\n        <div\n          class=\"item\"\n          *ngFor=\"let item of menu; let i = index\"\n          [ngClass]=\"{\n            'is-selected': i === selectedMenuItem\n          }\"\n          (click)=\"onClickMenuItem(i)\"\n        >\n          {{ item }}\n        </div>\n      </div>\n      <div class=\"main\">\n        <div class=\"content mb-2\" id=\"content\">\n          <div id=\"0\" class=\"row title-section\">\n            <h5>{{ menu[0] }}</h5>\n            <i\n              [ngClass]=\"listView[0] ? 'fe-edit ml-2' : 'fe-save ml-2'\"\n              (click)=\"switchViewType(0)\"\n            ></i>\n          </div>\n          <div [formGroup]=\"formContractType\">\n            <div class=\"row justify-content-center mb-2\" *ngIf=\"listView[0]\">\n              <div class=\"radio radio-info form-check-inline mr-5\">\n                <input\n                  type=\"radio\"\n                  id=\"inlineRadio1\"\n                  [value]=\"0\"\n                  name=\"sta_type_contact\"\n                  formControlName=\"sta_type_contact\"\n                  disabled\n                />\n                <label for=\"inlineRadio1\"> Fulltime </label>\n              </div>\n              <div class=\"radio form-check-inline\">\n                <input\n                  type=\"radio\"\n                  id=\"inlineRadio2\"\n                  [value]=\"1\"\n                  name=\"sta_type_contact\"\n                  formControlName=\"sta_type_contact\"\n                  disabled\n                />\n                <label for=\"inlineRadio2\"> Parttime </label>\n              </div>\n            </div>\n            <div class=\"row justify-content-center mb-2\" *ngIf=\"!listView[0]\">\n              <div class=\"radio radio-info form-check-inline mr-5\">\n                <input\n                  type=\"radio\"\n                  id=\"inlineRadio1\"\n                  [value]=\"0\"\n                  name=\"sta_type_contact\"\n                  formControlName=\"sta_type_contact\"\n                />\n                <label for=\"inlineRadio1\"> Fulltime </label>\n              </div>\n              <div class=\"radio form-check-inline\">\n                <input\n                  type=\"radio\"\n                  id=\"inlineRadio2\"\n                  [value]=\"1\"\n                  name=\"sta_type_contact\"\n                  formControlName=\"sta_type_contact\"\n                />\n                <label for=\"inlineRadio2\"> Parttime </label>\n              </div>\n            </div>\n            <div class=\"row\" *ngIf=\"formContractType.value.sta_type_contact === 1\">\n              <div\n                *ngFor=\"let day of days; let i = index\"\n                class=\"col-6 d-flex\"\n                [ngClass]=\"i % 2 === 0 ? 'justify-content-end pr-4' : 'justify-content-start pl-4'\"\n              >\n                <div\n                  class=\"checkbox checkbox-success mb-2\"\n                  style=\"line-height: 2; width: 100px;\"\n                  [ngClass]=\"i % 2 === 0 && listWorkTime[i].length === 0 ? 'pr-300' : ''\"\n                >\n                  <input\n                    [id]=\"day\"\n                    type=\"checkbox\"\n                    (change)=\"onCheckDay(i)\"\n                    [disabled]=\"listView[0]\"\n                    [checked]=\"listWorkTime[i].length !== 0\"\n                  />\n                  <label [for]=\"day\">\n                    {{ day }}\n                  </label>\n                </div>\n                <div style=\"line-height: 2;\" *ngIf=\"listWorkTime[i].length !== 0\">\n                  Thời gian làm việc:\n                </div>\n                <div class=\"time-container\">\n                  <div\n                    class=\"form-inline mb-2 justify-content-center\"\n                    *ngFor=\"let time of listWorkTime[i]; let timeIndex = index\"\n                  >\n                    <select\n                      class=\"custom-select mr-2 ml-2\"\n                      [value]=\"time.sw_time_start\"\n                      (change)=\"onChangeStart(i, timeIndex, $event)\"\n                    >\n                      <option\n                        *ngFor=\"let time of timePeriod\"\n                        [disabled]=\"listView[0]\"\n                        [value]=\"time\"\n                        >{{ time }}</option\n                      >\n                    </select>\n                    <div>-</div>\n                    <select\n                      class=\"custom-select ml-2\"\n                      [value]=\"time.sw_time_end\"\n                      (change)=\"onChangeEnd(i, timeIndex, $event)\"\n                    >\n                      <option\n                        *ngFor=\"let time of timePeriod\"\n                        [disabled]=\"listView[0]\"\n                        [value]=\"time\"\n                        >{{ time }}</option\n                      >\n                    </select>\n                    <div class=\"ml-2\" *ngIf=\"!listView[0]\">\n                      <i\n                        class=\"fe-minus-circle\"\n                        style=\"font-size: large; cursor: pointer;\"\n                        (click)=\"onClickMinus(i, timeIndex)\"\n                      ></i>\n                    </div>\n                  </div>\n                  <div\n                    class=\"row justify-content-center mb-2\"\n                    *ngIf=\"!listView[0] && listWorkTime[i].length !== 0\"\n                  >\n                    <i\n                      class=\"fe-plus-circle\"\n                      style=\"font-size: large; cursor: pointer;\"\n                      (click)=\"onClickPlus(i)\"\n                    ></i>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div id=\"1\" class=\"row title-section\">\n            <h5>{{ menu[1] }}</h5>\n            <i\n              [ngClass]=\"listView[1] ? 'fe-edit ml-2' : 'fe-save ml-2'\"\n              (click)=\"switchViewType(1)\"\n            ></i>\n          </div>\n          <div [formGroup]=\"formProfile\">\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Họ và tên <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[1]\"\n                    formControlName=\"sta_fullname\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formProfile.controls.sta_fullname.errors\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"submitted && formProfile.controls.sta_fullname.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formProfile.controls.sta_fullname.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Tên đăng nhập <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"sta_id !== ''\"\n                    formControlName=\"sta_username\"\n                    [ngClass]=\"{\n                      'is-invalid':\n                        submitted &&\n                        (formProfile.controls.sta_username.errors || errorField === 'sta_username')\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"submitted && formProfile.controls.sta_username.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formProfile.controls.sta_username.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Nhóm quyền <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"group_role_id\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formProfile.controls.group_role_id.errors\n                    }\"\n                  >\n                    <option [disabled]=\"listView[1]\" *ngFor=\"let role of roles\" [value]=\"role.id\">{{\n                      role.name\n                    }}</option>\n                  </select>\n                  <div\n                    *ngIf=\"submitted && formProfile.controls.group_role_id.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formProfile.controls.group_role_id.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Chức vụ <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"position_id\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formProfile.controls.position_id.errors\n                    }\"\n                  >\n                    <option\n                      [disabled]=\"listView[1]\"\n                      *ngFor=\"let pos of positions\"\n                      [value]=\"pos.id\"\n                      >{{ pos.name }}</option\n                    >\n                  </select>\n                  <div\n                    *ngIf=\"submitted && formProfile.controls.position_id.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formProfile.controls.position_id.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Trạng thái <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"sta_status\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formProfile.controls.sta_status.errors\n                    }\"\n                  >\n                    <option [disabled]=\"listView[1]\" [value]=\"1\">Kích hoạt</option>\n                    <option [disabled]=\"listView[1]\" [value]=\"2\">Khóa</option>\n                  </select>\n                  <div\n                    *ngIf=\"submitted && submitted && formProfile.controls.sta_status.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span>Trường bắt buộc</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\"\n                  >Phòng ban\n                  <span *ngIf=\"formContractType.value.sta_type_contact === 0\">(*)</span></label\n                >\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"department_id\"\n                    [ngClass]=\"{\n                      'is-invalid':\n                        submitted &&\n                        formContractType.value.sta_type_contact === 0 &&\n                        formProfile.value.department_id === null\n                    }\"\n                  >\n                    <option\n                      [disabled]=\"listView[1]\"\n                      *ngFor=\"let dep of departments\"\n                      [value]=\"dep.id\"\n                      >{{ dep.name }}</option\n                    >\n                  </select>\n                  <div\n                    *ngIf=\"\n                      submitted &&\n                      formContractType.value.sta_type_contact === 0 &&\n                      formProfile.value.department_id === null\n                    \"\n                    class=\"invalid-feedback\"\n                  >\n                    <span>Trường bắt buộc</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Giới tính <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"sta_sex\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formProfile.controls.sta_sex.errors\n                    }\"\n                  >\n                    <option [disabled]=\"listView[1]\" [value]=\"1\">Nam</option>\n                    <option [disabled]=\"listView[1]\" [value]=\"2\">Nữ</option>\n                    <option [disabled]=\"listView[1]\" [value]=\"3\">Giới tính khác</option>\n                  </select>\n                  <div\n                    *ngIf=\"submitted && formProfile.controls.sta_sex.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span>Trường bắt buộc</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Phương tiện đi lại</label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[1]\"\n                    formControlName=\"sta_traffic\"\n                  />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Ngày bắt đầu làm việc</label>\n                <div class=\"col-6\">\n                  <div class=\"input-group clockpicker mb-2 mr-1\">\n                    <input\n                      ngbDatepicker\n                      readonly=\"true\"\n                      class=\"form-control\"\n                      placeholder=\"Chọn ngày\"\n                      #start_work=\"ngbDatepicker\"\n                      formControlName=\"sta_start_work_date\"\n                      [minDate]=\"formProfile.value.sta_birthday\"\n                      [maxDate]=\"formProfile.value.sta_end_work_date\"\n                      [disabled]=\"listView[1]\"\n                    />\n                    <div class=\"input-group-append\" (click)=\"start_work.toggle()\">\n                      <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Ngày sinh</label>\n                <div class=\"col-6\">\n                  <div class=\"input-group clockpicker mb-2 mr-1\">\n                    <input\n                      ngbDatepicker\n                      readonly=\"true\"\n                      class=\"form-control\"\n                      placeholder=\"Chọn ngày\"\n                      #dob=\"ngbDatepicker\"\n                      formControlName=\"sta_birthday\"\n                      [disabled]=\"listView[1]\"\n                      [maxDate]=\"formProfile.value.sta_start_work_date\"\n                    />\n                    <div class=\"input-group-append\" (click)=\"dob.toggle()\">\n                      <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Lương <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    id=\"example-number\"\n                    type=\"number\"\n                    [readonly]=\"listView[1]\"\n                    formControlName=\"sta_salary\"\n                    style=\"width: 100%;\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formProfile.controls.sta_salary.errors\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"submitted && formProfile.controls.sta_salary.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span>Trường bắt buộc</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Trạng thái làm việc <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"sta_working_status\"\n                    (change)=\"onChangeWorkStatus($event)\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formProfile.controls.sta_working_status.errors\n                    }\"\n                  >\n                    <option [disabled]=\"listView[1]\" [value]=\"1\">Đang làm việc</option>\n                    <option [disabled]=\"listView[1]\" [value]=\"2\">Nghỉ việc</option>\n                  </select>\n                  <div\n                    *ngIf=\"submitted && formProfile.controls.sta_working_status.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span>Trường bắt buộc</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\"\n                  >Ngày nghỉ việc\n                  <span *ngIf=\"formProfile.value.sta_working_status === '2'\">(*)</span></label\n                >\n                <div class=\"col-6\">\n                  <div class=\"input-group clockpicker mb-2 mr-1\">\n                    <input\n                      ngbDatepicker\n                      readonly=\"true\"\n                      class=\"form-control\"\n                      placeholder=\"Chọn ngày\"\n                      #end_work=\"ngbDatepicker\"\n                      formControlName=\"sta_end_work_date\"\n                      [minDate]=\"formProfile.value.sta_start_work_date\"\n                      [disabled]=\"listView[1]\"\n                      [ngClass]=\"{\n                        'is-invalid':\n                          submitted &&\n                          formProfile.value.sta_working_status === '2' &&\n                          formProfile.value.sta_end_work_date === null\n                      }\"\n                    />\n                    <div class=\"input-group-append\" (click)=\"end_work.toggle()\">\n                      <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n                    </div>\n                    <div\n                      *ngIf=\"\n                        submitted &&\n                        formProfile.value.sta_working_status === '2' &&\n                        formProfile.value.sta_end_work_date === null\n                      \"\n                      class=\"invalid-feedback\"\n                    >\n                      <span>Trường bắt buộc</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\"\n                  >Lí do nghỉ việc\n                  <span *ngIf=\"formProfile.value.sta_working_status === '2'\">(*)</span></label\n                >\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[1]\"\n                    formControlName=\"sta_reason_to_end_work\"\n                    [ngClass]=\"{\n                      'is-invalid':\n                        submitted &&\n                        formProfile.value.sta_working_status === '2' &&\n                        (!formProfile.value.sta_reason_to_end_work ||\n                          formProfile.value.sta_reason_to_end_work.trim() === '')\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"\n                      submitted &&\n                      formProfile.value.sta_working_status === '2' &&\n                      (!formProfile.value.sta_reason_to_end_work ||\n                        formProfile.value.sta_reason_to_end_work.trim() === '')\n                    \"\n                    class=\"invalid-feedback\"\n                  >\n                    <span>Trường bắt buộc</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Bảo hiểm y tế</label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[1]\"\n                    formControlName=\"sta_social_insurance\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Bảo hiểm xã hội</label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[1]\"\n                    formControlName=\"sta_health_card\"\n                  />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Mã số thuế</label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[1]\"\n                    formControlName=\"sta_tax_code\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Ghi chú</label>\n                <div class=\"col-6\">\n                  <input class=\"form-control\" [readonly]=\"listView[1]\" formControlName=\"sta_note\" />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Mã nhân viên <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[1]\"\n                    formControlName=\"sta_code\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formProfile.controls.sta_code.errors\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"submitted && formProfile.controls.sta_code.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formProfile.controls.sta_code.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\"></div>\n            </div>\n          </div>\n\n          <div id=\"2\" class=\"row title-section\">\n            <h5>{{ menu[2] }}</h5>\n            <i\n              [ngClass]=\"listView[2] ? 'fe-edit ml-2' : 'fe-save ml-2'\"\n              (click)=\"switchViewType(2)\"\n            ></i>\n          </div>\n          <div [formGroup]=\"formContact\">\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Số điện thoại <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[2]\"\n                    formControlName=\"sta_mobile\"\n                    [ngClass]=\"{\n                      'is-invalid':\n                        submitted &&\n                        (formContact.controls.sta_mobile.errors || errorField === 'sta_mobile')\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"submitted && formContact.controls.sta_mobile.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formContact.controls.sta_mobile.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                    <span *ngIf=\"formContact.controls.sta_mobile.errors.pattern\"\n                      >Số điện thoại chỉ được nhập số</span\n                    >\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\"\n                  >Email\n                  <span *ngIf=\"formContractType.value.sta_type_contact === 0\">(*)</span></label\n                >\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[2]\"\n                    formControlName=\"sta_email\"\n                    [ngClass]=\"{\n                      'is-invalid':\n                        submitted &&\n                        (formContact.controls.sta_email.errors ||\n                          errorField === 'sta_email' ||\n                          (formContractType.value.sta_type_contact === 0 &&\n                            formContact.value.sta_email === ''))\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"\n                      submitted &&\n                      (formContact.controls.sta_email.errors ||\n                        (formContractType.value.sta_type_contact === 0 &&\n                          formContact.value.sta_email === ''))\n                    \"\n                    class=\"invalid-feedback\"\n                  >\n                    <span\n                      *ngIf=\"\n                        formContractType.value.sta_type_contact === 0 &&\n                        formContact.value.sta_email === ''\n                      \"\n                      >Trường bắt buộc</span\n                    >\n                    <span\n                      *ngIf=\"\n                        formContact.value.sta_email !== '' &&\n                        formContact.controls.sta_email.errors.email\n                      \"\n                    >\n                      Email sai định dạng\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div id=\"3\" class=\"row title-section\">\n            <h5>{{ menu[3] }}</h5>\n            <i\n              [ngClass]=\"listView[3] ? 'fe-edit ml-2' : 'fe-save ml-2'\"\n              (click)=\"switchViewType(3)\"\n            ></i>\n          </div>\n          <div [formGroup]=\"formIdentityCard\">\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Số CMND/Thẻ căn cước</label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[3]\"\n                    formControlName=\"sta_identity_card\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formIdentityCard.controls.sta_identity_card.errors\n                    }\"\n                  />\n                  <!-- <div\n                    *ngIf=\"submitted && formIdentityCard.controls.sta_identity_card.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formIdentityCard.controls.sta_identity_card.errors.pattern\"\n                      >Chỉ chứa các chữ số</span\n                    >\n                  </div> -->\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Ngày cấp</label>\n                <div class=\"col-6\">\n                  <div class=\"input-group clockpicker mb-2 mr-1\">\n                    <input\n                      ngbDatepicker\n                      readonly=\"true\"\n                      class=\"form-control\"\n                      placeholder=\"Chọn ngày\"\n                      #icd=\"ngbDatepicker\"\n                      formControlName=\"sta_identity_card_date\"\n                      [disabled]=\"listView[3] || formIdentityCard.value.sta_identity_card === ''\"\n                    />\n                    <div class=\"input-group-append\" (click)=\"icd.toggle()\">\n                      <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Nơi cấp</label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[3] || formIdentityCard.value.sta_identity_card === ''\"\n                    formControlName=\"sta_identity_card_location\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Ngày hết hạn</label>\n                <div class=\"col-6\">\n                  <div class=\"input-group clockpicker mb-2 mr-1\">\n                    <input\n                      ngbDatepicker\n                      readonly=\"true\"\n                      class=\"form-control\"\n                      placeholder=\"Chọn ngày\"\n                      #icde=\"ngbDatepicker\"\n                      formControlName=\"sta_identity_card_date_end\"\n                      [disabled]=\"listView[3] || formIdentityCard.value.sta_identity_card === ''\"\n                    />\n                    <div class=\"input-group-append\" (click)=\"icde.toggle()\">\n                      <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div id=\"4\" class=\"row title-section\">\n            <h5>{{ menu[4] }}</h5>\n            <i\n              [ngClass]=\"listView[4] ? 'fe-edit ml-2' : 'fe-save ml-2'\"\n              (click)=\"switchViewType(4)\"\n            ></i>\n          </div>\n          <div [formGroup]=\"formPermanentAddress\">\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Tỉnh/Thành phố <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"unl_province_permanent\"\n                    class=\"form-control\"\n                    (change)=\"onChangeProvincePermanent($event)\"\n                  >\n                    <option\n                      *ngFor=\"let province of provincePermanent\"\n                      [disabled]=\"listView[4]\"\n                      [value]=\"province.name\"\n                      >{{ province.name }}</option\n                    >\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Quận/Huyện <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"unl_district_permanent\"\n                    class=\"form-control\"\n                    (change)=\"onChangeDistrictPermanent($event)\"\n                  >\n                    <option\n                      *ngFor=\"let district of districtPermanent\"\n                      [disabled]=\"listView[4]\"\n                      [value]=\"district.name\"\n                      >{{ district.name }}</option\n                    >\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Xã/Phường <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"unl_ward_permanent\"\n                    class=\"form-control\"\n                  >\n                    <option\n                      *ngFor=\"let ward of wardPermanent\"\n                      [disabled]=\"listView[4]\"\n                      [value]=\"ward.name\"\n                      >{{ ward.name }}</option\n                    >\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Địa chỉ <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[4]\"\n                    formControlName=\"unl_detail_permanent\"\n                    [ngClass]=\"{\n                      'is-invalid':\n                        submitted && formPermanentAddress.controls.unl_detail_permanent.errors\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"submitted && formPermanentAddress.controls.unl_detail_permanent.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formPermanentAddress.controls.unl_detail_permanent.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div id=\"5\" class=\"row title-section\">\n            <h5>{{ menu[5] }}</h5>\n            <div class=\"checkbox checkbox-success form-check-inline ml-3\" style=\"line-height: 2;\">\n              <input\n                type=\"checkbox\"\n                [disabled]=\"listView[5]\"\n                (change)=\"changeCheckSame($event)\"\n                [checked]=\"checkSameAddress()\"\n              />\n              <label> giống hộ khẩu thường trú </label>\n            </div>\n            <i\n              [ngClass]=\"listView[5] ? 'fe-edit ml-2' : 'fe-save ml-2'\"\n              (click)=\"switchViewType(5)\"\n            ></i>\n          </div>\n          <div [formGroup]=\"formNowAddress\">\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Tỉnh/Thành phố <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"unl_province_now\"\n                    class=\"form-control\"\n                    (change)=\"onChangeProvinceNow($event)\"\n                  >\n                    <option\n                      *ngFor=\"let province of provinceNow\"\n                      [disabled]=\"listView[5]\"\n                      [value]=\"province.name\"\n                      >{{ province.name }}</option\n                    >\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Quận/Huyện <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"unl_district_now\"\n                    class=\"form-control\"\n                    (change)=\"onChangeDistrictNow($event)\"\n                  >\n                    <option\n                      *ngFor=\"let district of districtNow\"\n                      [disabled]=\"listView[5]\"\n                      [value]=\"district.name\"\n                      >{{ district.name }}</option\n                    >\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Xã/Phường <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select class=\"custom-select\" formControlName=\"unl_ward_now\" class=\"form-control\">\n                    <option\n                      *ngFor=\"let ward of wardNow\"\n                      [disabled]=\"listView[5]\"\n                      [value]=\"ward.name\"\n                      >{{ ward.name }}</option\n                    >\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Địa chỉ <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[5]\"\n                    formControlName=\"unl_detail_now\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formNowAddress.controls.unl_detail_now.errors\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"submitted && formNowAddress.controls.unl_detail_now.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formNowAddress.controls.unl_detail_now.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div id=\"6\" class=\"row title-section\">\n            <h5>{{ menu[6] }}</h5>\n            <a class=\"btn btn-primary btn-xs ml-2 button-link\" (click)=\"onUpdateListTraining()\"\n              >Chọn</a\n            >\n            <a class=\"btn btn-success btn-xs ml-2 button-link\" (click)=\"openTrainingModal()\"\n              >Thêm mới</a\n            >\n            <i\n              [ngClass]=\"listView[6] ? 'fe-edit ml-2' : 'fe-save ml-2'\"\n              (click)=\"switchViewType(6)\"\n            ></i>\n          </div>\n          <div class=\"table-responsive border mb-2\">\n            <table class=\"table table-centered table-hover mb-0\">\n              <thead>\n                <tr>\n                  <th>Tên CTĐT</th>\n                  <th>Nội dung đào tạo</th>\n                  <th>Thời gian bắt đầu</th>\n                  <th>Thời gian kết thúc</th>\n                  <th>Mục đích đào tạo</th>\n                  <th>Đánh giá</th>\n                  <th>Thao tác</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let training of listTraining\">\n                  <td>{{ training.tn_name }}</td>\n                  <td>\n                    {{ training.tn_content }}\n                  </td>\n                  <td>{{ training.tn_start_date | date: 'dd/MM/yyyy' }}</td>\n                  <td>{{ training.tn_end_date | date: 'dd/MM/yyyy' }}</td>\n                  <td>{{ training.tn_purpose }}</td>\n                  <td>{{ training.ts_evaluate_name }}</td>\n                  <td>\n                    <a\n                      href=\"javascript:void(0);\"\n                      class=\"action-icon\"\n                      (click)=\"openTrainingModal(training)\"\n                    >\n                      <i class=\"mdi mdi-square-edit-outline\"></i\n                    ></a>\n                    <a\n                      href=\"javascript:void(0);\"\n                      class=\"action-icon\"\n                      (click)=\"openRemoveTraining(training)\"\n                    >\n                      <i class=\"mdi mdi-delete\"></i\n                    ></a>\n                  </td>\n                </tr>\n                <tr *ngFor=\"let training of listNewTraining\">\n                  <td>{{ training.tn_name }}</td>\n                  <td>\n                    {{ training.tn_content }}\n                  </td>\n                  <td>{{ training.tn_start_date | date: 'dd/MM/yyyy' }}</td>\n                  <td>{{ training.tn_end_date | date: 'dd/MM/yyyy' }}</td>\n                  <td>{{ training.tn_purpose }}</td>\n                  <td>{{ training.ts_evaluate_name }}</td>\n                  <td>\n                    <a\n                      href=\"javascript:void(0);\"\n                      class=\"action-icon\"\n                      (click)=\"openTrainingModal(training)\"\n                    >\n                      <i class=\"mdi mdi-square-edit-outline\"></i\n                    ></a>\n                    <a\n                      href=\"javascript:void(0);\"\n                      class=\"action-icon\"\n                      (click)=\"openRemoveTraining(training)\"\n                    >\n                      <i class=\"mdi mdi-delete\"></i\n                    ></a>\n                  </td>\n                </tr>\n                <tr\n                  *ngIf=\"\n                    (!listTraining && !listNewTraining) ||\n                    listTraining?.length + listNewTraining?.length === 0\n                  \"\n                >\n                  <td colspan=\"7\">Không có dữ liệu khóa đào tạo</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"form-row\" [formGroup]=\"formAchieve\">\n            <div class=\"form-group row mb-3\">\n              <label class=\"col-4 col-form-label\">Nhận xét</label>\n              <div class=\"col-6\">\n                <textarea\n                  class=\"form-control\"\n                  [readonly]=\"listView[6]\"\n                  formControlName=\"comment\"\n                ></textarea>\n              </div>\n            </div>\n            <div class=\"form-group row mb-3\">\n              <label class=\"col-4 col-form-label\">Trạng thái</label>\n              <div class=\"col-6\">\n                <select class=\"custom-select\" formControlName=\"achieved\" class=\"form-control\">\n                  <option [disabled]=\"listView[6]\" [value]=\"1\">Đạt</option>\n                  <option [disabled]=\"listView[6]\" [value]=\"2\">Không Đạt</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div id=\"7\" class=\"row title-section\">\n            <h5>{{ menu[7] }}</h5>\n            <a class=\"btn btn-primary btn-xs ml-2 button-link\" (click)=\"openAddressModal()\"\n              >Thêm mới</a\n            >\n          </div>\n          <div class=\"table-responsive border mb-2\">\n            <table class=\"table table-centered table-hover mb-0\">\n              <thead>\n                <tr>\n                  <th>Thành phố</th>\n                  <th>Quận/Huyện</th>\n                  <th>Phường/Xã</th>\n                  <th>Địa chỉ</th>\n                  <th>Ghi chú</th>\n                  <th>Thao tác</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let address of listAddress\">\n                  <td>\n                    {{ address.unl_province }}\n                  </td>\n                  <td>{{ address.unl_district }}</td>\n                  <td>\n                    {{ address.unl_ward }}\n                  </td>\n                  <td>{{ address.unl_detail }}</td>\n                  <td>{{ address.unl_note }}</td>\n                  <td>\n                    <a class=\"action-icon table-button-link\" (click)=\"openAddressModal(address)\">\n                      <i class=\"mdi mdi-square-edit-outline\"></i\n                    ></a>\n                    <a class=\"action-icon table-button-link\" (click)=\"onRemoveAddress(address)\">\n                      <i class=\"mdi mdi-delete\"></i\n                    ></a>\n                  </td>\n                </tr>\n                <tr *ngIf=\"!listAddress || listAddress.length === 0\">\n                  <td colspan=\"6\">Không có dữ liệu địa chỉ phụ trách</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n          <div id=\"8\" class=\"row title-section\">\n            <h5>{{ menu[8] }}</h5>\n            <a class=\"btn btn-primary btn-xs ml-2 button-link\" (click)=\"openRelativeModal()\"\n              >Thêm mới</a\n            >\n          </div>\n          <div class=\"table-responsive border mb-2\">\n            <table class=\"table table-centered table-hover mb-0\">\n              <thead>\n                <tr>\n                  <th>STT</th>\n                  <th>Họ tên</th>\n                  <th>Quan hệ</th>\n                  <th>Số điện thoại</th>\n                  <th>Địa chỉ</th>\n                  <th>Thao tác</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let relative of listRelative; let i = index\">\n                  <td>\n                    {{ i + 1 }}\n                  </td>\n                  <td>\n                    {{ relative.rels_fullname }}\n                  </td>\n                  <td>{{ relative.rels_relatives }}</td>\n                  <td>\n                    {{ relative.rels_phone }}\n                  </td>\n                  <td>{{ relative.rels_address }}</td>\n                  <td>\n                    <a class=\"action-icon table-button-link\" (click)=\"openRelativeModal(relative)\">\n                      <i class=\"mdi mdi-square-edit-outline\"></i\n                    ></a>\n                    <a class=\"action-icon table-button-link\" (click)=\"onRemoveRelative(relative)\">\n                      <i class=\"mdi mdi-delete\"></i\n                    ></a>\n                  </td>\n                </tr>\n                <tr *ngIf=\"!listRelative || listRelative.length === 0\">\n                  <td colspan=\"6\">Không có dữ liệu quan hệ gia đình</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n          <div id=\"9\" class=\"row title-section\">\n            <h5>{{ menu[9] }}</h5>\n            <a class=\"btn btn-primary btn-xs ml-2 button-link\" (click)=\"openAttachmentModal()\"\n              >Thêm mới</a\n            >\n          </div>\n          <div class=\"table-responsive border mb-2\">\n            <table class=\"table table-centered table-hover mb-0\">\n              <thead>\n                <tr>\n                  <th>STT</th>\n                  <th>Tên file</th>\n                  <th>File</th>\n                  <th>Mô tả</th>\n                  <th>Ghi chú</th>\n                  <th>Thao tác</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let attachment of listAttachment; let i = index\">\n                  <td>\n                    {{ i + 1 }}\n                  </td>\n                  <td>\n                    {{ attachment.ast_filename }}\n                  </td>\n                  <td>{{ attachment.ast_link }}</td>\n                  <td>\n                    {{ attachment.ast_description }}\n                  </td>\n                  <td>{{ attachment.ast_note }}</td>\n                  <td>\n                    <a\n                      class=\"action-icon table-button-link\"\n                      (click)=\"openAttachmentModal(attachment)\"\n                    >\n                      <i class=\"mdi mdi-square-edit-outline\"></i\n                    ></a>\n                    <a\n                      class=\"action-icon table-button-link\"\n                      (click)=\"onRemoveAttachment(attachment)\"\n                    >\n                      <i class=\"mdi mdi-delete\"></i\n                    ></a>\n                  </td>\n                </tr>\n                <tr *ngIf=\"!listAttachment || listAttachment.length === 0\">\n                  <td colspan=\"6\">Không có dữ liệu file đính kèm</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n          <div id=\"10\" class=\"row title-section\">\n            <h5>{{ menu[10] }}</h5>\n            <a class=\"btn btn-primary btn-xs ml-2 button-link\" (click)=\"openBankModal()\"\n              >Thêm mới</a\n            >\n          </div>\n          <div class=\"table-responsive border mb-2\">\n            <table class=\"table table-centered table-hover mb-0\">\n              <thead>\n                <tr>\n                  <th>STT</th>\n                  <th>Loại ngân hàng</th>\n                  <th>Tên ngân hàng</th>\n                  <th>Chi nhánh</th>\n                  <th>Số tài khoản</th>\n                  <th>Tên chủ tài khoản</th>\n                  <th>Ghi chú</th>\n                  <th>Thao tác</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let bank of listBank; let i = index\">\n                  <td>{{ i + 1 }}</td>\n                  <td>\n                    {{ bank.bank_category_name }}\n                  </td>\n                  <td>{{ bank.bank_name }}</td>\n                  <td>\n                    {{ bank.bank_branch_name }}\n                  </td>\n                  <td>{{ bank.stb_account }}</td>\n                  <td>{{ bank.stb_fullname }}</td>\n                  <td>{{ bank.stb_note }}</td>\n                  <td>\n                    <a class=\"action-icon table-button-link\" (click)=\"openBankModal(bank)\">\n                      <i class=\"mdi mdi-square-edit-outline\"></i\n                    ></a>\n                    <a class=\"action-icon table-button-link\" (click)=\"onRemoveBank(bank)\">\n                      <i class=\"mdi mdi-delete\"></i\n                    ></a>\n                  </td>\n                </tr>\n                <tr *ngIf=\"!listBank || listBank.length === 0\">\n                  <td colspan=\"8\">Không có dữ liệu tài khoản ngân hàng</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n          <div id=\"11\" class=\"row title-section\">\n            <h5>{{ menu[11] }}</h5>\n            <a class=\"btn btn-primary btn-xs ml-2 button-link\" (click)=\"openBonusModal()\"\n              >Thêm mới</a\n            >\n          </div>\n          <div class=\"table-responsive border mb-2\">\n            <table class=\"table table-centered table-hover mb-0\">\n              <thead>\n                <tr>\n                  <th>STT</th>\n                  <th>Tiêu đề</th>\n                  <th>Nội dung</th>\n                  <th>Kiểu</th>\n                  <th>Mức</th>\n                  <th>Thời gian</th>\n                  <th>Lý do</th>\n                  <th>Ghi chú</th>\n                  <th>Thao tác</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let bonus of listBonus; let i = index\">\n                  <td>{{ i + 1 }}</td>\n                  <td>\n                    {{ bonus.bos_title }}\n                  </td>\n                  <td>{{ bonus.bos_content }}</td>\n                  <td>\n                    {{ bonus.bos_type === 1 ? 'Khen thưởng' : 'Kỉ luật' }}\n                  </td>\n                  <td>\n                    {{ bonus.bos_value }}\n                  </td>\n                  <td>{{ bonus.bos_time | date: 'dd/MM/yyyy' }}</td>\n                  <td>{{ bonus.bos_reason }}</td>\n                  <td>{{ bonus.bos_note }}</td>\n                  <td>\n                    <a class=\"action-icon table-button-link\" (click)=\"openBonusModal(bonus)\">\n                      <i class=\"mdi mdi-square-edit-outline\"></i\n                    ></a>\n                    <a class=\"action-icon table-button-link\" (click)=\"onRemoveBonus(bonus)\">\n                      <i class=\"mdi mdi-delete\"></i\n                    ></a>\n                  </td>\n                </tr>\n                <tr *ngIf=\"!listBonus || listBonus.length === 0\">\n                  <td colspan=\"9\">Không có dữ liệu khen thưởng/kỉ luật</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"row justify-content-end mr-2\">\n          <div class=\"text-sm-right\">\n            <button\n              class=\"btn btn-success mb-2 mr-1 button-link\"\n              [disabled]=\"\n                !formContractType.dirty &&\n                !formProfile.dirty &&\n                !formContact.dirty &&\n                !formIdentityCard.dirty &&\n                !formPermanentAddress.dirty &&\n                !formNowAddress.dirty &&\n                !formAchieve.dirty &&\n                !isChange\n              \"\n              (click)=\"onSubmit()\"\n            >\n              Lưu lại\n            </button>\n            <a class=\"btn btn-danger mb-2 mr-1 button-link\" (click)=\"onChangeToMain()\">\n              Quay lại\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-main-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/address-modal/address-modal.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/address-modal/address-modal.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">{{ address ? 'Sửa' : 'Thêm' }} địa chỉ</h4>\n  <button class=\"close text-white\" aria-label=\"Close\" (click)=\"onClickCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\" [formGroup]=\"form\">\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Tỉnh/Thành phố <span>(*)</span></label>\n    <div class=\"col-8\">\n      <select\n        class=\"custom-select\"\n        formControlName=\"unl_province\"\n        class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': submitted && formUI.unl_province.errors }\"\n        (change)=\"onChangeProvince($event)\"\n      >\n        <option *ngFor=\"let province of provinces\" [value]=\"province.name\">{{\n          province.name\n        }}</option>\n      </select>\n      <div *ngIf=\"submitted && formUI.unl_province.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"formUI.unl_province.errors.required\">This value is required.</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Quận/Huyện <span>(*)</span></label>\n    <div class=\"col-8\">\n      <select\n        class=\"custom-select\"\n        formControlName=\"unl_district\"\n        class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': submitted && formUI.unl_district.errors }\"\n        (change)=\"onChangeDistrict($event)\"\n      >\n        <option *ngFor=\"let district of districts\" [value]=\"district.name\">{{\n          district.name\n        }}</option>\n      </select>\n      <div *ngIf=\"submitted && formUI.unl_district.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"formUI.unl_district.errors.required\">This value is required.</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Xã/Phường <span>(*)</span></label>\n    <div class=\"col-8\">\n      <select\n        class=\"custom-select\"\n        formControlName=\"unl_ward\"\n        class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': submitted && formUI.unl_ward.errors }\"\n      >\n        <option *ngFor=\"let ward of wards\" [value]=\"ward.name\">{{ ward.name }}</option>\n      </select>\n      <div *ngIf=\"submitted && formUI.unl_ward.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"formUI.unl_ward.errors.required\">This value is required.</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Chi tiết</label>\n    <div class=\"col-8\">\n      <input class=\"form-control\" formControlName=\"unl_detail\" />\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Ghi chú</label>\n    <div class=\"col-8\">\n      <input class=\"form-control\" formControlName=\"unl_note\" />\n    </div>\n  </div>\n  <div class=\"text-right mt-3\">\n    <button class=\"btn btn-success ml-1\" (click)=\"onClickSubmit()\">\n      Lưu\n    </button>\n    <button class=\"btn btn-danger ml-1\" (click)=\"onClickCancel()\">\n      Hủy\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/address-now-tab/address-now-tab.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/address-now-tab/address-now-tab.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-row p-2\">\n  <div class=\"form-group row\">\n    <label class=\"col-2 col-form-label\">Tỉnh/Thành phố: </label>\n    <div class=\"col-4\">\n      <input class=\"form-control\" [value]=\"now_province\" readonly />\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-2 ol-form-label\">Quận/Huyện: </label>\n    <div class=\"col-4\">\n      <input class=\"form-control\" [value]=\"now_district\" readonly />\n    </div>\n  </div>\n</div>\n<div class=\"form-row p-2\">\n  <div class=\"form-group row\">\n    <label class=\"col-2 col-form-label\">Xã/Phường: </label>\n    <div class=\"col-4\">\n      <input class=\"form-control\" [value]=\"now_ward\" readonly />\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-2 col-form-label\">Địa chỉ: </label>\n    <div class=\"col-4\">\n      <input class=\"form-control\" [value]=\"now_detail\" readonly />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/address-permanent-tab/address-permanent-tab.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/address-permanent-tab/address-permanent-tab.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-row p-2\">\n  <div class=\"form-group row\">\n    <label class=\"col-2 col-form-label\">Tỉnh/Thành phố: </label>\n    <div class=\"col-4\">\n      <input class=\"form-control\" [value]=\"permanent_province\" readonly />\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-2 ol-form-label\">Quận/Huyện: </label>\n    <div class=\"col-4\">\n      <input class=\"form-control\" [value]=\"permanent_district\" readonly />\n    </div>\n  </div>\n</div>\n<div class=\"form-row p-2\">\n  <div class=\"form-group row\">\n    <label class=\"col-2 col-form-label\">Xã/Phường: </label>\n    <div class=\"col-4\">\n      <input class=\"form-control\" [value]=\"permanent_ward\" readonly />\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-2 col-form-label\">Địa chỉ: </label>\n    <div class=\"col-4\">\n      <input class=\"form-control\" [value]=\"permanent_detail\" readonly />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/attachment-modal/attachment-modal.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/attachment-modal/attachment-modal.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">{{ attachment ? 'Sửa' : 'Thêm' }} file đính kèm</h4>\n  <button class=\"close text-white\" aria-label=\"Close\" (click)=\"onClickCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\" [formGroup]=\"form\">\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Tên file <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"ast_filename\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.ast_filename.errors\n        }\"\n      />\n      <div *ngIf=\"submitted && form.controls.ast_filename.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.ast_filename.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Mô tả</label>\n    <div class=\"col-8\">\n      <input class=\"form-control\" formControlName=\"ast_description\" />\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">File <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input type=\"file\" (change)=\"setFile($event)\" />\n      <div class=\"mt-1 link-file\">{{ file_link }}</div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Ghi chú</label>\n    <div class=\"col-8\">\n      <input class=\"form-control\" formControlName=\"ast_note\" />\n    </div>\n  </div>\n  <div class=\"text-right mt-3\">\n    <button class=\"btn btn-success ml-1\" (click)=\"onClickSubmit()\">\n      Lưu\n    </button>\n    <button class=\"btn btn-danger ml-1\" (click)=\"onClickCancel()\">\n      Hủy\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/attachment-tab/attachment-tab.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/attachment-tab/attachment-tab.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-end\">\n  <a\n    class=\"btn btn-success mb-1 mr-1 button-link\"\n    [ngClass]=\"staffId ? '' : 'disabled'\"\n    (click)=\"openAttachmentModal()\"\n  >\n    Thêm mới</a\n  >\n  <a\n    class=\"btn btn-primary mb-1 mr-1 button-link\"\n    [ngClass]=\"selectedAttachment ? '' : 'disabled'\"\n    (click)=\"openAttachmentModal(selectedAttachment)\"\n    >Cập nhật</a\n  >\n  <a\n    class=\"btn btn-danger mb-1 button-link\"\n    [ngClass]=\"selectedAttachment ? '' : 'disabled'\"\n    (click)=\"openConfirmModal(selectedAttachment)\"\n  >\n    Xóa</a\n  >\n</div>\n<div class=\"table-responsive\">\n  <table class=\"table table-centered table-hover mb-0\">\n    <thead>\n      <tr>\n        <th>STT</th>\n        <th>Tên file</th>\n        <th>File</th>\n        <th>Mô tả</th>\n        <th>Ghi chú</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr\n        *ngFor=\"let attachment of listAttachment; let i = index\"\n        (click)=\"onClickAttachment(attachment)\"\n        [ngClass]=\"{\n          'is-selected': attachment.ast_id === selectedAttachment?.ast_id\n        }\"\n      >\n        <td>\n          {{ i + 1 }}\n        </td>\n        <td>\n          {{ attachment.ast_filename }}\n        </td>\n        <td>\n          <a (click)=\"onClickLink(attachment)\">Link</a>\n        </td>\n        <td>\n          {{ attachment.ast_description }}\n        </td>\n        <td>\n          {{ attachment.ast_note }}\n        </td>\n      </tr>\n      <tr *ngIf=\"!listAttachment || listAttachment.length === 0\">\n        <td colspan=\"5\">Không có dữ liệu file đính kèm</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/bank-modal/bank-modal.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/bank-modal/bank-modal.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">{{ bank ? 'Sửa' : 'Thêm' }} tài khoản ngân hàng</h4>\n  <button class=\"close text-white\" aria-label=\"Close\" (click)=\"onClickCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\" [formGroup]=\"form\">\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Loại ngân hàng <span>(*)</span></label>\n    <div class=\"col-8\">\n      <select\n        class=\"custom-select\"\n        formControlName=\"bank_category_id\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.bank_category_id.errors\n        }\"\n        (change)=\"onChangeCategory($event)\"\n      >\n        <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{\n          category.name\n        }}</option>\n      </select>\n      <div *ngIf=\"submitted && form.controls.bank_category_id.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.bank_category_id.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Tên ngân hàng <span>(*)</span></label>\n    <div class=\"col-8\">\n      <select\n        class=\"custom-select\"\n        formControlName=\"bank_id\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.bank_id.errors\n        }\"\n        (change)=\"onChangeBank($event)\"\n      >\n        <option *ngFor=\"let bank of banks\" [value]=\"bank.id\">{{ bank.name }}</option>\n      </select>\n      <div *ngIf=\"submitted && form.controls.bank_id.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.bank_id.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Chi nhánh <span>(*)</span></label>\n    <div class=\"col-8\">\n      <select\n        class=\"custom-select\"\n        formControlName=\"bank_branch_id\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.bank_branch_id.errors\n        }\"\n      >\n        <option *ngFor=\"let branch of branchs\" [value]=\"branch.id\">{{ branch.name }}</option>\n      </select>\n      <div *ngIf=\"submitted && form.controls.bank_branch_id.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.bank_branch_id.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Số tài khoản <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"stb_account\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.stb_account.errors\n        }\"\n      />\n      <div *ngIf=\"submitted && form.controls.stb_account.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.stb_account.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Tên chủ tài khoản <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"stb_fullname\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.stb_fullname.errors\n        }\"\n      />\n      <div *ngIf=\"submitted && form.controls.stb_fullname.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.stb_fullname.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Ghi chú</label>\n    <div class=\"col-8\">\n      <input class=\"form-control\" formControlName=\"stb_note\" />\n    </div>\n  </div>\n  <div class=\"text-right mt-3\">\n    <button class=\"btn btn-success ml-1\" (click)=\"onClickSubmit()\">\n      Lưu\n    </button>\n    <button class=\"btn btn-danger ml-1\" (click)=\"onClickCancel()\">\n      Hủy\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/bank-tab/bank-tab.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/bank-tab/bank-tab.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-end\">\n  <a\n    class=\"btn btn-success mb-1 mr-1 button-link\"\n    [ngClass]=\"staffId ? '' : 'disabled'\"\n    (click)=\"openBankModal()\"\n  >\n    Thêm mới</a\n  >\n  <a\n    class=\"btn btn-primary mb-1 mr-1 button-link\"\n    [ngClass]=\"selectedBank ? '' : 'disabled'\"\n    (click)=\"openBankModal(selectedBank)\"\n    >Cập nhật</a\n  >\n  <a\n    class=\"btn btn-danger mb-1 button-link\"\n    [ngClass]=\"selectedBank ? '' : 'disabled'\"\n    (click)=\"openConfirmModal(selectedBank)\"\n  >\n    Xóa</a\n  >\n</div>\n<div class=\"table-responsive\">\n  <table class=\"table table-centered table-hover mb-0\">\n    <thead>\n      <tr>\n        <th>STT</th>\n        <th>Loại ngân hàng</th>\n        <th>Tên ngân hàng</th>\n        <th>Chi nhánh</th>\n        <th>Số tài khoản</th>\n        <th>Tên chủ tài khoản</th>\n        <th>Ghi chú</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr\n        *ngFor=\"let bank of listBank; let i = index\"\n        (click)=\"onClickBank(bank)\"\n        [ngClass]=\"{\n          'is-selected': bank.stb_id === selectedBank?.stb_id\n        }\"\n      >\n        <td>\n          {{ i + 1 }}\n        </td>\n        <td>\n          {{ bank.bank_category_name }}\n        </td>\n        <td>\n          {{ bank.bank_name }}\n        </td>\n        <td>\n          {{ bank.bank_branch_name }}\n        </td>\n        <td>\n          {{ bank.stb_account }}\n        </td>\n        <td>\n          {{ bank.stb_fullname }}\n        </td>\n        <td>\n          {{ bank.stb_note }}\n        </td>\n      </tr>\n      <tr *ngIf=\"!listBank || listBank.length === 0\">\n        <td colspan=\"7\">Không có dữ liệu tài khoản ngân hàng</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/bonus-modal/bonus-modal.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/bonus-modal/bonus-modal.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">{{ training ? 'Sửa' : 'Thêm' }} khen thưởng/kỉ luật</h4>\n  <button class=\"close text-white\" aria-label=\"Close\" (click)=\"onClickCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\" [formGroup]=\"form\">\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Tiêu đề <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"bos_title\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.bos_title.errors\n        }\"\n      />\n      <div *ngIf=\"submitted && form.controls.bos_title.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.bos_title.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Kiểu <span>(*)</span></label>\n    <div class=\"col-8\">\n      <select\n        class=\"custom-select\"\n        formControlName=\"bos_type\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.bos_type.errors\n        }\"\n      >\n        <option [value]=\"1\">Khen thưởng</option>\n        <option [value]=\"2\">Kỉ luật</option>\n      </select>\n      <div *ngIf=\"submitted && form.controls.bos_type.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.bos_type.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Nội dung <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"bos_content\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.bos_content.errors\n        }\"\n      />\n      <div *ngIf=\"submitted && form.controls.bos_content.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.bos_content.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Mức <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"bos_value\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.bos_value.errors\n        }\"\n      />\n      <div *ngIf=\"submitted && form.controls.bos_value.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.bos_value.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Thời gian <span>(*)</span></label>\n    <div class=\"col-8\">\n      <div class=\"input-group clockpicker mb-2 mr-1\">\n        <input\n          ngbDatepicker\n          readonly=\"true\"\n          class=\"form-control\"\n          placeholder=\"yyyy-mm-dd\"\n          #from=\"ngbDatepicker\"\n          name=\"from\"\n          formControlName=\"bos_time\"\n          [ngClass]=\"{\n            'is-invalid': submitted && form.controls.bos_time.errors\n          }\"\n        />\n        <div class=\"input-group-append\" (click)=\"from.toggle()\">\n          <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n        </div>\n        <div *ngIf=\"submitted && form.controls.bos_time.errors\" class=\"invalid-feedback\">\n          <span *ngIf=\"form.controls.bos_time.errors.required\">Trường bắt buộc</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Lý do <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"bos_reason\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.bos_reason.errors\n        }\"\n      />\n      <div *ngIf=\"submitted && form.controls.bos_reason.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.bos_reason.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Ghi chú</label>\n    <div class=\"col-8\">\n      <input class=\"form-control\" formControlName=\"bos_note\" />\n    </div>\n  </div>\n\n  <div class=\"text-right mt-3\">\n    <button class=\"btn btn-success ml-1\" (click)=\"onClickSubmit()\">\n      Lưu\n    </button>\n    <button class=\"btn btn-danger ml-1\" (click)=\"onClickCancel()\">\n      Hủy\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/bonus-tab/bonus-tab.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/bonus-tab/bonus-tab.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-end\">\n  <a\n    class=\"btn btn-success mb-1 mr-1 button-link\"\n    [ngClass]=\"staffId ? '' : 'disabled'\"\n    (click)=\"openBonusModal()\"\n  >\n    Thêm mới</a\n  >\n  <a\n    class=\"btn btn-primary mb-1 mr-1 button-link\"\n    [ngClass]=\"selectedBonus ? '' : 'disabled'\"\n    (click)=\"openBonusModal(selectedBonus)\"\n    >Cập nhật</a\n  >\n  <a\n    class=\"btn btn-danger mb-1 button-link\"\n    [ngClass]=\"selectedBonus ? '' : 'disabled'\"\n    (click)=\"openConfirmModal(selectedBonus)\"\n  >\n    Xóa</a\n  >\n</div>\n<div class=\"table-responsive\">\n  <table class=\"table table-centered table-hover mb-0\">\n    <thead>\n      <tr>\n        <th>STT</th>\n        <th>Tiêu đề</th>\n        <th>Nội dung</th>\n        <th>Kiểu</th>\n        <th>Mức</th>\n        <th>Thời gian</th>\n        <th>Lý do</th>\n        <th>Ghi chú</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr\n        *ngFor=\"let bonus of listBonus; let i = index\"\n        (click)=\"onClickBonus(bonus)\"\n        [ngClass]=\"{\n          'is-selected': bonus.bos_id === selectedBonus?.bos_id\n        }\"\n      >\n        <td>\n          {{ i + 1 }}\n        </td>\n        <td>\n          {{ bonus.bos_title }}\n        </td>\n        <td>\n          {{ bonus.bos_content }}\n        </td>\n        <td>\n          {{ bonus.bos_type_name }}\n        </td>\n        <td>\n          {{ bonus.bos_value }}\n        </td>\n        <td>\n          {{ bonus.bos_time | date: 'dd/MM/yyyy' }}\n        </td>\n        <td>\n          {{ bonus.bos_reason }}\n        </td>\n        <td>\n          {{ bonus.bos_note }}\n        </td>\n      </tr>\n      <tr *ngIf=\"!listBonus || listBonus.length === 0\">\n        <td colspan=\"8\">Không có dữ liệu khen thưởng/kỉ luật</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/identity-card-tab/identity-card-tab.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/identity-card-tab/identity-card-tab.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-row p-2\">\n  <div class=\"form-group row\">\n    <label class=\"col-3 col-form-label\">Số CMND/Thẻ căn cước: </label>\n    <div class=\"col-4\">\n      <input class=\"form-control\" [value]=\"identity_card\" readonly />\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-2 ol-form-label\">Ngày cấp: </label>\n    <div class=\"col-4\">\n      <input class=\"form-control\" [value]=\"identity_card_date | date: 'dd/MM/yyyy'\" readonly />\n    </div>\n  </div>\n</div>\n<div class=\"form-row p-2\">\n  <div class=\"form-group row\">\n    <label class=\"col-3 col-form-label\">Nơi cấp: </label>\n    <div class=\"col-4\">\n      <input class=\"form-control\" [value]=\"identity_card_location\" readonly />\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-2 col-form-label\">Ngày hết hạn: </label>\n    <div class=\"col-4\">\n      <input class=\"form-control\" [value]=\"identity_card_date_end | date: 'dd/MM/yyyy'\" readonly />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/relative-modal/relative-modal.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/relative-modal/relative-modal.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">{{ relative ? 'Sửa' : 'Thêm' }} quan hệ gia đình</h4>\n  <button class=\"close text-white\" aria-label=\"Close\" (click)=\"onClickCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\" [formGroup]=\"form\">\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Họ và tên <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"rels_fullname\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.rels_fullname.errors\n        }\"\n      />\n      <div *ngIf=\"submitted && form.controls.rels_fullname.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.rels_fullname.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Quan hệ <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"rels_relatives\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.rels_relatives.errors\n        }\"\n      />\n      <div *ngIf=\"submitted && form.controls.rels_relatives.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.rels_relatives.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Số điện thoại <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"rels_phone\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.rels_phone.errors\n        }\"\n      />\n      <div *ngIf=\"submitted && form.controls.rels_phone.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.rels_phone.errors.required\">Trường bắt buộc</span>\n        <span *ngIf=\"form.controls.rels_phone.errors.pattern\">Số điện thoại chỉ chứa số</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Địa chỉ <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"rels_address\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.rels_address.errors\n        }\"\n      />\n      <div *ngIf=\"submitted && form.controls.rels_address.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.rels_address.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-right mt-3\">\n    <button class=\"btn btn-success ml-1\" (click)=\"onClickSubmit()\">\n      Lưu\n    </button>\n    <button class=\"btn btn-danger ml-1\" (click)=\"onClickCancel()\">\n      Hủy\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/relative-tab/relative-tab.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/relative-tab/relative-tab.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-end\">\n  <a\n    class=\"btn btn-success mb-1 mr-1 button-link\"\n    [ngClass]=\"staffId ? '' : 'disabled'\"\n    (click)=\"openRelativeModal()\"\n  >\n    Thêm mới</a\n  >\n  <a\n    class=\"btn btn-primary mb-1 mr-1 button-link\"\n    [ngClass]=\"selectedRelative ? '' : 'disabled'\"\n    (click)=\"openRelativeModal(selectedRelative)\"\n    >Cập nhật</a\n  >\n  <a\n    class=\"btn btn-danger mb-1 button-link\"\n    [ngClass]=\"selectedRelative ? '' : 'disabled'\"\n    (click)=\"openConfirmModal(selectedRelative)\"\n  >\n    Xóa</a\n  >\n</div>\n<div class=\"table-responsive\">\n  <table class=\"table table-centered table-hover mb-0\">\n    <thead>\n      <tr>\n        <th>STT</th>\n        <th>Họ tên</th>\n        <th>Quan hệ</th>\n        <th>Số điện thoại</th>\n        <th>Địa chỉ</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr\n        *ngFor=\"let relative of listRelative; let i = index\"\n        (click)=\"onClickRelative(relative)\"\n        [ngClass]=\"{\n          'is-selected': relative.rels_id === selectedRelative?.rels_id\n        }\"\n      >\n        <td>\n          {{ i + 1 }}\n        </td>\n        <td>\n          {{ relative.rels_fullname }}\n        </td>\n        <td>\n          {{ relative.rels_relatives }}\n        </td>\n        <td>\n          {{ relative.rels_phone }}\n        </td>\n        <td>\n          {{ relative.rels_address }}\n        </td>\n      </tr>\n      <tr *ngIf=\"!listRelative || listRelative.length === 0\">\n        <td colspan=\"5\">Không có dữ liệu gia đình</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/training-modal/training-modal.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/training-modal/training-modal.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">{{ training ? 'Sửa' : 'Thêm' }} khóa học</h4>\n  <button class=\"close text-white\" aria-label=\"Close\" (click)=\"onClickCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\" [formGroup]=\"form\">\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Tên khóa học <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"tn_name\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.tn_name.errors\n        }\"\n      />\n      <div *ngIf=\"submitted && form.controls.tn_name.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.tn_name.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Nội dung khóa học <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"tn_content\"\n        [ngClass]=\"{\n          'is-invalid': submitted && form.controls.tn_content.errors\n        }\"\n      />\n      <div *ngIf=\"submitted && form.controls.tn_content.errors\" class=\"invalid-feedback\">\n        <span *ngIf=\"form.controls.tn_content.errors.required\">Trường bắt buộc</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Từ ngày <span>(*)</span></label>\n    <div class=\"col-8\">\n      <div class=\"input-group clockpicker mb-2 mr-1\">\n        <input\n          ngbDatepicker\n          readonly=\"true\"\n          class=\"form-control\"\n          placeholder=\"yyyy-mm-dd\"\n          #from=\"ngbDatepicker\"\n          name=\"from\"\n          [maxDate]=\"form.value.tn_end_date\"\n          formControlName=\"tn_start_date\"\n          [ngClass]=\"{\n            'is-invalid': submitted && form.controls.tn_start_date.errors\n          }\"\n        />\n        <div class=\"input-group-append\" (click)=\"from.toggle()\">\n          <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n        </div>\n        <div *ngIf=\"submitted && form.controls.tn_start_date.errors\" class=\"invalid-feedback\">\n          <span *ngIf=\"form.controls.tn_start_date.errors.required\">Trường bắt buộc</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Đến ngày <span>(*)</span></label>\n    <div class=\"col-8\">\n      <div class=\"input-group clockpicker mb-2\">\n        <input\n          ngbDatepicker\n          readonly=\"true\"\n          class=\"form-control\"\n          placeholder=\"yyyy-mm-dd\"\n          #to=\"ngbDatepicker\"\n          name=\"to\"\n          [minDate]=\"form.value.tn_start_date\"\n          formControlName=\"tn_end_date\"\n          [ngClass]=\"{\n            'is-invalid': submitted && form.controls.tn_end_date.errors\n          }\"\n        />\n        <div class=\"input-group-append\" (click)=\"to.toggle()\">\n          <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n        </div>\n        <div *ngIf=\"submitted && form.controls.tn_end_date.errors\" class=\"invalid-feedback\">\n          <span *ngIf=\"form.controls.tn_end_date.errors.required\">Trường bắt buộc</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Mục đích khóa học</label>\n    <div class=\"col-8\">\n      <input class=\"form-control\" formControlName=\"tn_purpose\" />\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\" *ngIf=\"!fromList\">\n    <label class=\"col-4 col-form-label\">Đánh giá khóa học</label>\n    <div class=\"col-8\">\n      <select\n        class=\"custom-select\"\n        formControlName=\"ts_evaluate\"\n        (change)=\"onChangeEvaluate($event)\"\n      >\n        <option [value]=\"1\">Tốt</option>\n        <option [value]=\"2\">Khá</option>\n        <option [value]=\"3\">Trung bình</option>\n        <option [value]=\"4\">Yếu</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"text-right mt-3\">\n    <button class=\"btn btn-success ml-1\" (click)=\"onClickSubmit()\">\n      Lưu\n    </button>\n    <button class=\"btn btn-danger ml-1\" (click)=\"onClickCancel()\">\n      Hủy\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/training-tab/training-tab.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/training-tab/training-tab.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-end\">\n  <a\n    class=\"btn btn-success mb-1 mr-1 button-link\"\n    [ngClass]=\"staffId ? '' : 'disabled'\"\n    (click)=\"openTrainingModal()\"\n  >\n    Thêm mới</a\n  >\n  <a\n    class=\"btn btn-primary mb-1 mr-1 button-link\"\n    [ngClass]=\"selectedTraining ? '' : 'disabled'\"\n    (click)=\"openTrainingModal(selectedTraining)\"\n    >Cập nhật</a\n  >\n  <a\n    class=\"btn btn-danger mb-1 button-link\"\n    [ngClass]=\"selectedTraining ? '' : 'disabled'\"\n    (click)=\"openConfirmModal(selectedTraining)\"\n  >\n    Xóa</a\n  >\n</div>\n<div class=\"table-responsive\">\n  <table class=\"table table-centered table-hover mb-0\">\n    <thead>\n      <tr>\n        <th>Mã đào tạo</th>\n        <th>Tên CTĐT</th>\n        <th>Nội dung đào tạo</th>\n        <th>Thời gian bắt đầu</th>\n        <th>Thời gian kết thúc</th>\n        <th>Mục đích đào tạo</th>\n        <th>Đánh giá</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr\n        *ngFor=\"let training of listTraining\"\n        (click)=\"onClickTraining(training)\"\n        [ngClass]=\"{\n          'is-selected': training.tn_id === selectedTraining?.tn_id\n        }\"\n      >\n        <td>\n          {{ training.tn_code }}\n        </td>\n        <td>\n          {{ training.tn_name }}\n        </td>\n        <td>\n          {{ training.tn_content }}\n        </td>\n        <td>\n          {{ training.tn_start_date | date: 'dd/MM/yyyy' }}\n        </td>\n        <td>\n          {{ training.tn_end_date | date: 'dd/MM/yyyy' }}\n        </td>\n        <td>\n          {{ training.tn_purpose }}\n        </td>\n        <td>\n          {{ training.ts_evaluate_name }}\n        </td>\n      </tr>\n      <tr *ngIf=\"!listTraining || listTraining.length === 0\">\n        <td colspan=\"6\">Không có dữ liệu khóa đào tạo</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/undertaken-location-tab/undertaken-location-tab.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/component/undertaken-location-tab/undertaken-location-tab.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-end\">\n  <a\n    class=\"btn btn-success mb-1 mr-1 button-link\"\n    [ngClass]=\"staffId ? '' : 'disabled'\"\n    (click)=\"openAddressModal()\"\n  >\n    Thêm mới</a\n  >\n  <a\n    class=\"btn btn-primary mb-1 mr-1 button-link\"\n    [ngClass]=\"selectedAddress ? '' : 'disabled'\"\n    (click)=\"openAddressModal(selectedAddress)\"\n  >\n    Cập nhật</a\n  >\n  <a\n    class=\"btn btn-danger mb-1 button-link\"\n    [ngClass]=\"selectedAddress ? '' : 'disabled'\"\n    (click)=\"openConfirmModal(selectedAddress)\"\n  >\n    Xóa</a\n  >\n</div>\n<div class=\"table-responsive\">\n  <table class=\"table table-centered table-hover mb-0\">\n    <thead>\n      <tr>\n        <th>Thành phố</th>\n        <th>Quận/Huyện</th>\n        <th>Phường/Xã</th>\n        <th>Chi tiết</th>\n        <th>Ghi chú</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr\n        *ngFor=\"let address of listAddress\"\n        (click)=\"onClickAddress(address)\"\n        [ngClass]=\"{\n          'is-selected': address.unl_id === selectedAddress?.unl_id\n        }\"\n      >\n        <td>\n          {{ address.unl_province }}\n        </td>\n        <td>\n          {{ address.unl_district }}\n        </td>\n        <td>\n          {{ address.unl_ward }}\n        </td>\n        <td>\n          {{ address.unl_detail }}\n        </td>\n        <td>\n          {{ address.unl_note }}\n        </td>\n      </tr>\n      <tr *ngIf=\"!listAddress || listAddress.length === 0\">\n        <td colspan=\"6\">Không có dữ liệu địa chỉ</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/list-staff.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/staff/list-staff/list-staff.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-container>\n  <div top class=\"card-body\" style=\"height: 100%;\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <form class=\"form-inline\">\n          <div class=\"form-group ml-1 mr-1 mb-2\">\n            <input\n              class=\"form-control\"\n              name=\"textSearch\"\n              placeholder=\"Tìm kiếm...\"\n              [(ngModel)]=\"textSearch\"\n              (input)=\"onChangeFilter()\"\n            />\n          </div>\n          <select\n            class=\"custom-select mr-1 mb-2\"\n            name=\"select\"\n            [(ngModel)]=\"statusSearch\"\n            (change)=\"onChangeFilter()\"\n          >\n            <option value=\"\">Trạng thái</option>\n            <option value=\"1\">Kích hoạt</option>\n            <option value=\"0\">Khóa</option>\n          </select>\n          <select\n            class=\"custom-select mr-1 mb-2\"\n            name=\"select\"\n            [(ngModel)]=\"workingStatusSearch\"\n            (change)=\"onChangeFilter()\"\n          >\n            <option value=\"\">Trạng thái làm việc</option>\n            <option value=\"1\">Đang làm việc</option>\n            <option value=\"2\">Nghỉ việc</option>\n          </select>\n          <div class=\"input-group clockpicker mb-2 mr-1\">\n            <input\n              ngbDatepicker\n              readonly=\"true\"\n              class=\"form-control\"\n              placeholder=\"yyyy-mm-dd\"\n              #from=\"ngbDatepicker\"\n              name=\"from\"\n              [maxDate]=\"toDate\"\n              [(ngModel)]=\"fromDate\"\n              (dateSelect)=\"onChangeFilter()\"\n            />\n            <div class=\"input-group-append\" (click)=\"from.toggle()\">\n              <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n            </div>\n          </div>\n          <div class=\"input-group clockpicker mb-2\">\n            <input\n              ngbDatepicker\n              readonly=\"true\"\n              class=\"form-control\"\n              placeholder=\"yyyy-mm-dd\"\n              #to=\"ngbDatepicker\"\n              name=\"to\"\n              [minDate]=\"fromDate\"\n              [(ngModel)]=\"toDate\"\n              (dateSelect)=\"onChangeFilter()\"\n            />\n            <div class=\"input-group-append\" (click)=\"to.toggle()\">\n              <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"text-sm-right\">\n          <label class=\"btn btn-info mb-2 mr-1\">\n            <input type=\"file\" (change)=\"setFile($event)\" style=\"display: none;\" />\n            <a mat-raised-button color=\"primary\">\n              Nhập\n            </a>\n          </label>\n          <button type=\"button\" class=\"btn btn-info mb-2 mr-1\" (click)=\"exportStaff()\">\n            Xuất\n          </button>\n          <button type=\"button\" class=\"btn btn-info mb-2 mr-1\" (click)=\"exportTemplate()\">\n            Xuất mẫu\n          </button>\n          <a class=\"btn btn-success mb-2 mr-1 button-link\" (click)=\"onRouteDetail()\"> Thêm mới</a>\n          <a\n            class=\"btn btn-primary mb-2 mr-1 button-link\"\n            [ngClass]=\"selectedStaff ? '' : 'disabled'\"\n            (click)=\"onRouteDetail(selectedStaff)\"\n          >\n            Xem & Sửa</a\n          >\n          <a\n            class=\"btn btn-danger mb-2 mr-1 button-link\"\n            [ngClass]=\"selectedStaff ? '' : 'disabled'\"\n            (click)=\"openConfirmModal(selectedStaff)\"\n          >\n            Xóa</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\">\n        <thead>\n          <tr>\n            <th>STT</th>\n            <th>Mã nhân viên</th>\n            <th>Họ và tên</th>\n            <th>Tài khoản</th>\n            <th>Giới tính</th>\n            <th>Ngày sinh</th>\n            <th>Số điện thoại</th>\n            <th>Email</th>\n            <th>Loại hợp đồng</th>\n            <th>Số CMND/Thẻ căn cước</th>\n            <th>Mã số thuế</th>\n            <th>Trạng thái làm việc</th>\n            <th>Trạng thái</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let staff of staffs; let i = index\"\n            (click)=\"onClickStaff(staff)\"\n            [ngClass]=\"{\n              'is-selected': staff.sta_id === selectedStaff?.sta_id\n            }\"\n          >\n            <td>\n              {{ i + 1 }}\n            </td>\n            <td>\n              {{ staff.sta_code }}\n            </td>\n            <td>\n              <span\n                ><img\n                  [src]=\"'http://27.72.147.222:1230' + staff.sta_thumbnai\"\n                  onerror=\"this.src='/assets/images/users/user-1.jpg';\"\n                  alt=\"user-image\"\n                  class=\"rounded-circle avatar-sm\"\n              /></span>\n              {{ staff.sta_fullname }}\n            </td>\n            <td>\n              {{ staff.sta_username }}\n            </td>\n            <td>\n              <span\n                [ngClass]=\"\n                  staff.sta_sex === 1\n                    ? 'badge badge-success'\n                    : staff.sta_sex === 2\n                    ? 'badge badge-primary'\n                    : 'badge badge-secondary'\n                \"\n                >{{ staff.sta_sex === 1 ? 'Nam' : staff.sta_sex === 2 ? 'Nữ' : 'Giới tính khác' }}\n              </span>\n            </td>\n            <td>\n              {{ staff.sta_birthday | date: 'dd/MM/yyyy' }}\n            </td>\n            <td>\n              {{ staff.sta_mobile }}\n            </td>\n            <td>\n              {{ staff.sta_email }}\n            </td>\n            <td>\n              <span\n                [ngClass]=\"\n                  staff.sta_type_contact === 1 ? 'badge badge-success' : 'badge badge-danger'\n                \"\n                >{{ staff.sta_type_contact === 1 ? 'Parttime' : 'Fulltime' }}\n              </span>\n            </td>\n            <td>{{ staff.sta_identity_card }}</td>\n            <td>\n              {{ staff.sta_tax_code }}\n            </td>\n            <td>\n              <span\n                [ngClass]=\"\n                  staff.sta_working_status === 1 ? 'badge badge-success' : 'badge badge-danger'\n                \"\n                >{{ staff.sta_working_status === 1 ? 'Đang làm việc' : 'Nghỉ việc' }}\n              </span>\n            </td>\n            <td>\n              <span\n                [ngClass]=\"staff.sta_status === 1 ? 'badge badge-success' : 'badge badge-danger'\"\n                >{{ staff.sta_status === 1 ? 'Kích hoạt' : 'Khóa' }}\n              </span>\n            </td>\n          </tr>\n          <tr *ngIf=\"staffs?.length === 0\">\n            <td colspan=\"13\">Không có dữ liệu nhân viên</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <ul class=\"pagination pagination-rounded justify-content-end my-3\">\n      <ngb-pagination\n        (pageChange)=\"onPageChange($event)\"\n        [pageSize]=\"pageSize\"\n        [(page)]=\"page\"\n        [collectionSize]=\"totalSize\"\n      ></ngb-pagination>\n    </ul>\n  </div>\n  <div bottom style=\"height: 100%;\">\n    <ngb-tabset class=\"nav-bordered\">\n      <ngb-tab title=\"1. Hộ khẩu thường trú\">\n        <ng-template ngbTabContent>\n          <app-address-permanent-tab\n            [permanent_ward]=\"selectedStaff?.unl_ward_permanent\"\n            [permanent_district]=\"selectedStaff?.unl_district_permanent\"\n            [permanent_province]=\"selectedStaff?.unl_province_permanent\"\n            [permanent_detail]=\"selectedStaff?.unl_detail_permanent\"\n          ></app-address-permanent-tab>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"2. Chỗ ở hiện tại\">\n        <ng-template ngbTabContent>\n          <app-address-now-tab\n            [now_ward]=\"selectedStaff?.unl_ward_now\"\n            [now_district]=\"selectedStaff?.unl_district_now\"\n            [now_province]=\"selectedStaff?.unl_province_now\"\n            [now_detail]=\"selectedStaff?.unl_detail_now\"\n          ></app-address-now-tab>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"3. Thông tin đào tạo\">\n        <ng-template ngbTabContent>\n          <app-training-tab\n            [listTraining]=\"selectedStaff?.list_training\"\n            [staffId]=\"selectedStaff?.sta_id\"\n            (formSubmit)=\"onChangeTraining($event)\"\n          ></app-training-tab>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"4. Địa chỉ phụ trách\">\n        <ng-template ngbTabContent>\n          <app-undertaken-location-tab\n            [listAddress]=\"selectedStaff?.list_undertaken_location\"\n            [staffId]=\"selectedStaff?.sta_id\"\n            (formSubmit)=\"onChangeAddress($event)\"\n          ></app-undertaken-location-tab>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"5. Số CMND/Thẻ căn cước\">\n        <ng-template ngbTabContent>\n          <app-identity-card-tab\n            [identity_card]=\"selectedStaff?.sta_identity_card\"\n            [identity_card_date]=\"selectedStaff?.sta_identity_card_date\"\n            [identity_card_date_end]=\"selectedStaff?.sta_identity_card_date_end\"\n            [identity_card_location]=\"selectedStaff?.sta_identity_card_location\"\n          ></app-identity-card-tab>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"6. Thông tin tài khoản ngân hàng\">\n        <ng-template ngbTabContent>\n          <app-bank-tab\n            [listBank]=\"selectedStaff?.list_bank\"\n            [staffId]=\"selectedStaff?.sta_id\"\n            (formSubmit)=\"onChangeBank($event)\"\n          ></app-bank-tab>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"7. Thông tin gia đình\">\n        <ng-template ngbTabContent>\n          <app-relative-tab\n            [listRelative]=\"selectedStaff?.list_relatives\"\n            [staffId]=\"selectedStaff?.sta_id\"\n            (formSubmit)=\"onChangeRelative($event)\"\n          ></app-relative-tab>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"8. Khen thưởng/Kỉ luật\">\n        <ng-template ngbTabContent>\n          <app-bonus-tab\n            [listBonus]=\"selectedStaff?.list_bonus\"\n            [staffId]=\"selectedStaff?.sta_id\"\n            (formSubmit)=\"onChangeBonus($event)\"\n          ></app-bonus-tab>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"9. File đính kèm\">\n        <ng-template ngbTabContent>\n          <app-attachment-tab\n            [listAttachment]=\"selectedStaff?.list_attachments\"\n            [staffId]=\"selectedStaff?.sta_id\"\n            (formSubmit)=\"onChangeAttachment($event)\"\n          ></app-attachment-tab>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</app-main-container>\n"

/***/ }),

/***/ "./src/app/pages/staff/assign-work/assign-work.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/staff/assign-work/assign-work.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .form-inline {\n  align-items: baseline;\n  flex-flow: row;\n}\n:host a.diabled {\n  cursor: default;\n  pointer-events: none;\n}\n:host .table-responsive {\n  overflow: auto;\n  max-height: calc(100% - 150px);\n}\n:host .table-responsive table {\n  min-width: 1400px;\n  border-spacing: 0;\n  border-collapse: separate;\n}\n:host .table-responsive thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .table-responsive tr {\n  cursor: pointer;\n}\n:host .table-responsive tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2Fzc2lnbi13b3JrL2Fzc2lnbi13b3JrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdGFmZi9hc3NpZ24td29yay9hc3NpZ24td29yay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0FKO0FESUk7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUNGTjtBRE1FO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0FDSko7QURNSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0pOO0FEUU07RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ05SO0FEVUk7RUFDRSxlQUFBO0FDUk47QURVTTtFQUNFLDJCQUFBO0FDUlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGFmZi9hc3NpZ24td29yay9hc3NpZ24td29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmZvcm0taW5saW5lIHtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgZmxleC1mbG93OiByb3c7XG4gIH1cblxuICBhIHtcbiAgICAmLmRpYWJsZWQge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDE1MHB4KTtcblxuICAgIHRhYmxlIHtcbiAgICAgIG1pbi13aWR0aDogMTQwMHB4O1xuICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgIH1cblxuICAgIHRoZWFkIHtcbiAgICAgIHRoIHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0ciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCAuZm9ybS1pbmxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGZsZXgtZmxvdzogcm93O1xufVxuOmhvc3QgYS5kaWFibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHtcbiAgbWluLXdpZHRoOiAxNDAwcHg7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUgdGhlYWQgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUgdHIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAudGFibGUtcmVzcG9uc2l2ZSB0ci5pcy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/staff/assign-work/assign-work.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/staff/assign-work/assign-work.component.ts ***!
  \******************************************************************/
/*! exports provided: AssignWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignWorkComponent", function() { return AssignWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/api/staff.service */ "./src/app/core/services/api/staff.service.ts");
/* harmony import */ var _core_services_api_customer_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/api/customer-group.service */ "./src/app/core/services/api/customer-group.service.ts");
/* harmony import */ var _core_services_api_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/api/customer.service */ "./src/app/core/services/api/customer.service.ts");








let AssignWorkComponent = class AssignWorkComponent {
    constructor(staffService, customerService, customerGroupService) {
        this.staffService = staffService;
        this.customerService = customerService;
        this.customerGroupService = customerGroupService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.textSearch = '';
        this.staffSearch = '';
        this.page = 0;
        this.pageSize = 10;
        this.totalSize = 0;
        this.selectedStaffs = [];
        this.selectedCustomerGroup = '';
    }
    ngOnInit() {
        this._fetchFilter();
    }
    onPageChange(page) {
        this.page = page;
        this._fetchData();
    }
    onChangeFilter() {
        this._fetchData();
    }
    onClickExcute() {
        if (this.selectedStaffs.length === 0)
            return this._notify(false, 'Chưa chọn nhân viên để giao việc');
        if (this.selectedCustomerGroup === '')
            return this._notify(false, 'Chưa chọn đối tượng khách hàng');
        const data = {
            list_staff_id: this.selectedStaffs,
            customer_group_id: this.selectedCustomerGroup,
        };
        const updateCurator$ = this.staffService.updateCurator(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        updateCurator$.subscribe((res) => {
            if (res && res.Code === 200) {
                this._notify(true, res.Message);
                this.selectedStaffs = [];
                this.selectedCustomerGroup = '';
            }
            else
                this._notify(false, res.Message);
        }, (e) => this._notify(false, e.Message));
    }
    _fetchData() {
        const customer$ = this.customerService
            .loadCustomerByCurator({
            pageNumber: this.page - 1,
            pageSize: this.pageSize,
            search_name: this.textSearch,
            cu_curator_id: this.staffSearch,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        customer$.subscribe((res) => {
            if (res && res.Data) {
                this.totalSize = res.Data.TotalNumberOfRecords;
                this.customers = res.Data.Results;
            }
        });
    }
    _fetchFilter() {
        const staff$ = this.staffService.loadAllStaff().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        staff$.subscribe((res) => {
            this.staffs = res.Data;
            if (res.Data) {
                this.staffSearch = res.Data[0].sta_id;
                this._fetchData();
            }
        });
        const customerGroup$ = this.customerGroupService
            .loadAllCustomerGroup()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        customerGroup$.subscribe((res) => {
            this.customerGroups = res.Data;
            this.customerGroups.push({
                cg_id: 0,
                cg_name: 'Ngẫu nhiên',
            });
        });
    }
    _notify(isSuccess, message) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            toast: true,
            position: 'top-end',
            type: isSuccess ? 'success' : 'error',
            title: message,
            showConfirmButton: false,
            timer: 2000,
        });
    }
};
AssignWorkComponent.ctorParameters = () => [
    { type: _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"] },
    { type: _core_services_api_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"] },
    { type: _core_services_api_customer_group_service__WEBPACK_IMPORTED_MODULE_6__["CustomerGroupService"] }
];
AssignWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assign-work',
        template: __webpack_require__(/*! raw-loader!./assign-work.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/assign-work/assign-work.component.html"),
        styles: [__webpack_require__(/*! ./assign-work.component.scss */ "./src/app/pages/staff/assign-work/assign-work.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"],
        _core_services_api_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"],
        _core_services_api_customer_group_service__WEBPACK_IMPORTED_MODULE_6__["CustomerGroupService"]])
], AssignWorkComponent);



/***/ }),

/***/ "./src/app/pages/staff/assigned-work/assigned-work.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/staff/assigned-work/assigned-work.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .form-inline {\n  align-items: baseline;\n  flex-flow: row;\n}\n:host .card-body {\n  overflow: auto;\n}\n:host .card {\n  margin-bottom: 0 !important;\n}\n:host a.diabled {\n  cursor: default;\n  pointer-events: none;\n}\n:host .table-responsive {\n  overflow: auto;\n  max-height: calc(100% - 150px);\n}\n:host .table-responsive table {\n  min-width: 1400px;\n  border-spacing: 0;\n  border-collapse: separate;\n}\n:host .table-responsive thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .table-responsive tr {\n  cursor: pointer;\n}\n:host .table-responsive tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2Fzc2lnbmVkLXdvcmsvYXNzaWduZWQtd29yay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RhZmYvYXNzaWduZWQtd29yay9hc3NpZ25lZC13b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQUo7QURHRTtFQUNFLGNBQUE7QUNESjtBRElFO0VBQ0UsMkJBQUE7QUNGSjtBRE1JO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FDSk47QURRRTtFQUNFLGNBQUE7RUFDQSw4QkFBQTtBQ05KO0FEUUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNOTjtBRFVNO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUNSUjtBRFlJO0VBQ0UsZUFBQTtBQ1ZOO0FEWU07RUFDRSwyQkFBQTtBQ1ZSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RhZmYvYXNzaWduZWQtd29yay9hc3NpZ25lZC13b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuZm9ybS1pbmxpbmUge1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgfVxuXG4gIC5jYXJkLWJvZHkge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIGEge1xuICAgICYuZGlhYmxlZCB7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIH1cblxuICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTUwcHgpO1xuXG4gICAgdGFibGUge1xuICAgICAgbWluLXdpZHRoOiAxNDAwcHg7XG4gICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgfVxuXG4gICAgdGhlYWQge1xuICAgICAgdGgge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJi5pcy1zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5mb3JtLWlubGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZmxleC1mbG93OiByb3c7XG59XG46aG9zdCAuY2FyZC1ib2R5IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG46aG9zdCAuY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbjpob3N0IGEuZGlhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG46aG9zdCAudGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNTBweCk7XG59XG46aG9zdCAudGFibGUtcmVzcG9uc2l2ZSB0YWJsZSB7XG4gIG1pbi13aWR0aDogMTQwMHB4O1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHRoZWFkIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUgdHIuaXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/staff/assigned-work/assigned-work.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/staff/assigned-work/assigned-work.component.ts ***!
  \**********************************************************************/
/*! exports provided: AssignedWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedWorkComponent", function() { return AssignedWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_api_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/api/transaction.service */ "./src/app/core/services/api/transaction.service.ts");
/* harmony import */ var _core_services_api_statistic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/api/statistic.service */ "./src/app/core/services/api/statistic.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data */ "./src/app/pages/staff/assigned-work/data.ts");











let AssignedWorkComponent = class AssignedWorkComponent {
    constructor(modalService, transactionService, statisticService) {
        this.modalService = modalService;
        this.transactionService = transactionService;
        this.statisticService = statisticService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.textSearch = '';
        this.fromDate = this._convertDateToNgbDate(new Date('2010-01-01'));
        this.toDate = this._convertDateToNgbDate(new Date());
        this.page = 0;
        this.pageSize = 10;
        this.totalSize = 0;
        this.selectedOrder = null;
    }
    ngOnInit() {
        this._fetchData();
        this._fetchCustomer();
        this._fetchRate();
        this.customerPieChart = _data__WEBPACK_IMPORTED_MODULE_10__["customerPieChart"];
        this.ratePieChart = _data__WEBPACK_IMPORTED_MODULE_10__["ratePieChart"];
        this.basicColumChart = _data__WEBPACK_IMPORTED_MODULE_10__["basicColumChart"];
    }
    onClickOrder(transaction) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.selectedOrder)) {
            this.selectedOrder = transaction;
        }
        else {
            if (this.selectedOrder.tra_id !== transaction.tra_id) {
                this.selectedOrder = transaction;
            }
            else {
                this.selectedOrder = null;
            }
        }
    }
    openCustomerCareModal() {
        // const modalRef = this.modalService.open(CustomerCareModalComponent, {
        //   centered: true,
        //   size: 'xl'
        // });
        // if (transaction) {
        //   modalRef.componentInstance.transaction = transaction;
        //   modalRef.componentInstance.isView = isView;
        // }
        // modalRef.componentInstance.passEvent.subscribe(res => {
        //   if (res.event) {
        //     if (transaction) {
        //       this._updateTransaction(res.data);
        //     } else {
        //       this._createTransaction(res.data);
        //     }
        //   }
        //   modalRef.close();
        // });
    }
    openConfirmModal(transaction) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Chắc chắn muốn xóa giao dịch khách hàng đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this._removeTransaction(transaction);
            }
        });
    }
    onPageChange(page) {
        this.page = page;
        this._fetchData();
    }
    onChangeFilter() {
        this._fetchData(this.selectedOrder);
    }
    exportTransaction() {
        const export$ = this.transactionService
            .exportTransaction({
            pageNumber: this.page - 1,
            pageSize: this.pageSize,
            search_name: this.textSearch,
            start_date: this._convertNgbDateToDate(this.fromDate),
            end_date: this._convertNgbDateToDate(this.toDate),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        export$.subscribe((res) => {
            if (res && res.Data) {
                const link = 'http://27.72.147.222:1230/' + res.Data;
                window.open(link);
            }
        });
    }
    _fetchData(selected) {
        const transaction$ = this.transactionService
            .searchTransaction({
            pageNumber: this.page - 1,
            pageSize: this.pageSize,
            search_name: this.textSearch,
            start_date: this._convertNgbDateToDate(this.fromDate),
            end_date: this._convertNgbDateToDate(this.toDate),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        transaction$.subscribe((res) => {
            if (res && res.Data) {
                this.totalSize = res.Data.TotalNumberOfRecords;
                this.transactions = res.Data.Results;
                if (selected) {
                    this.selectedOrder = this.transactions.find((item) => item.tra_id === selected.tra_id);
                }
                else {
                    this.selectedOrder = this.transactions[0];
                }
            }
        });
    }
    _fetchCustomer() {
        const customer$ = this.statisticService.loadCustomer().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        customer$.subscribe((res) => {
            if (res && res.Data) {
                res.Data.map((item) => {
                    this.customerPieChart.series.push(item.total_revenue);
                    this.customerPieChart.labels.push(item.cg_name);
                });
            }
        });
    }
    _fetchRate() {
        const rate$ = this.statisticService.loadRate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        rate$.subscribe((res) => {
            if (res && res.Data) {
                res.Data.map((item) => {
                    this.ratePieChart.series.push(item.number);
                    this.ratePieChart.labels.push(item.cg_name);
                });
            }
        });
    }
    _removeTransaction(transaction) {
        const removeTransaction$ = this.transactionService
            .removeTransaction({
            transactionId: transaction.tra_id,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        removeTransaction$.subscribe((res) => {
            if (res && res.Code === 200) {
                this._notify(true, res.Message);
                this._fetchData();
                this.modalService.dismissAll();
            }
            else
                this._notify(false, res.Message);
        }, (e) => {
            this._notify(false, e.Message);
        });
    }
    _notify(isSuccess, message) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            toast: true,
            position: 'top-end',
            type: isSuccess ? 'success' : 'error',
            title: message,
            showConfirmButton: false,
            timer: 2000,
        });
    }
    _convertDateToNgbDate(date) {
        if (!date) {
            return null;
        }
        const year = moment__WEBPACK_IMPORTED_MODULE_8__(date).year();
        const month = moment__WEBPACK_IMPORTED_MODULE_8__(date).month() + 1;
        const day = moment__WEBPACK_IMPORTED_MODULE_8__(date).date();
        return new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"](year, month, day);
    }
    _convertNgbDateToDate(ngbDate) {
        if (!ngbDate) {
            return '';
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(ngbDate.year))
            return ngbDate;
        const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
        return moment__WEBPACK_IMPORTED_MODULE_8__(newDate).format('YYYY-MM-DD');
    }
};
AssignedWorkComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _core_services_api_transaction_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"] },
    { type: _core_services_api_statistic_service__WEBPACK_IMPORTED_MODULE_6__["StatisticService"] }
];
AssignedWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assigned-work',
        template: __webpack_require__(/*! raw-loader!./assigned-work.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/assigned-work/assigned-work.component.html"),
        styles: [__webpack_require__(/*! ./assigned-work.component.scss */ "./src/app/pages/staff/assigned-work/assigned-work.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
        _core_services_api_transaction_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"],
        _core_services_api_statistic_service__WEBPACK_IMPORTED_MODULE_6__["StatisticService"]])
], AssignedWorkComponent);



/***/ }),

/***/ "./src/app/pages/staff/assigned-work/data.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/staff/assigned-work/data.ts ***!
  \***************************************************/
/*! exports provided: customerPieChart, ratePieChart, basicColumChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerPieChart", function() { return customerPieChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratePieChart", function() { return ratePieChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicColumChart", function() { return basicColumChart; });
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



/***/ }),

/***/ "./src/app/pages/staff/list-staff-detail/component/list-training-modal/list-training-modal.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff-detail/component/list-training-modal/list-training-modal.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host tr {\n  cursor: pointer;\n}\n:host .table-responsive {\n  overflow: auto;\n  max-height: calc(100vh - 250px);\n}\n:host .table-responsive table {\n  min-width: 1300px;\n  border-spacing: 0;\n  border-collapse: separate;\n}\n:host .table-responsive thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .table-responsive tr {\n  cursor: pointer;\n}\n:host .table-responsive tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYtZGV0YWlsL2NvbXBvbmVudC9saXN0LXRyYWluaW5nLW1vZGFsL2xpc3QtdHJhaW5pbmctbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYtZGV0YWlsL2NvbXBvbmVudC9saXN0LXRyYWluaW5nLW1vZGFsL2xpc3QtdHJhaW5pbmctbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FDQUo7QURHRTtFQUNFLGNBQUE7RUFDQSwrQkFBQTtBQ0RKO0FER0k7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNETjtBREtNO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUNIUjtBRE9JO0VBQ0UsZUFBQTtBQ0xOO0FET007RUFDRSwyQkFBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RhZmYvbGlzdC1zdGFmZi1kZXRhaWwvY29tcG9uZW50L2xpc3QtdHJhaW5pbmctbW9kYWwvbGlzdC10cmFpbmluZy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgdHIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjUwcHgpO1xuXG4gICAgdGFibGUge1xuICAgICAgbWluLXdpZHRoOiAxMzAwcHg7XG4gICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgfVxuXG4gICAgdGhlYWQge1xuICAgICAgdGgge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJi5pcy1zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI1MHB4KTtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHtcbiAgbWluLXdpZHRoOiAxMzAwcHg7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUgdGhlYWQgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUgdHIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAudGFibGUtcmVzcG9uc2l2ZSB0ci5pcy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff-detail/component/list-training-modal/list-training-modal.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff-detail/component/list-training-modal/list-training-modal.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ListTrainingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTrainingModalComponent", function() { return ListTrainingModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/services/api/staff.service */ "./src/app/core/services/api/staff.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _list_staff_component_training_modal_training_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../list-staff/component/training-modal/training-modal.component */ "./src/app/pages/staff/list-staff/component/training-modal/training-modal.component.ts");








let ListTrainingModalComponent = class ListTrainingModalComponent {
    constructor(staffService, modalService) {
        this.staffService = staffService;
        this.modalService = modalService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedTraining = [];
    }
    ngOnInit() {
        this._fetchData();
        if (this.listTraining) {
            this.selectedTraining = this.listTraining.map((e) => {
                return e;
            });
        }
    }
    onClickTraining(training) {
        const index = this.selectedTraining.findIndex((item) => item.tn_id === training.tn_id);
        if (index === -1)
            this.selectedTraining.push(training);
        else
            this.selectedTraining = this.selectedTraining.filter((item) => item.tn_id !== training.tn_id);
    }
    onClickSubmit() {
        this.passEvent.emit({ event: true, data: this.selectedTraining });
    }
    onClickCancel() {
        this.passEvent.emit({ event: false });
    }
    isSelected(training) {
        const index = this.selectedTraining.findIndex((item) => item.tn_id === training.tn_id);
        if (index === -1)
            return false;
        return true;
    }
    checkAll() {
        if (this.selectedTraining.length === this.trainings.length)
            this.selectedTraining = [];
        else
            this.selectedTraining = this.trainings;
    }
    openTrainingModal(training) {
        this.onClickTraining(training);
        const modalRef = this.modalService.open(_list_staff_component_training_modal_training_modal_component__WEBPACK_IMPORTED_MODULE_7__["TrainingModalComponent"], {
            centered: true,
        });
        if (training) {
            modalRef.componentInstance.training = training;
            modalRef.componentInstance.fromList = true;
        }
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                if (training) {
                    this._updateTraing(res.data);
                }
            }
            modalRef.close();
        });
    }
    openRemoveTraining(training) {
        this.onClickTraining(training);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Chắc chắn muốn xóa khóa đào tạo đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this._removeTraining(training);
            }
        });
    }
    _fetchData(update = false) {
        const trainings$ = this.staffService
            .searchTraining({
            pageNumber: 0,
            pageSize: 100,
            search_name: '',
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        trainings$.subscribe((res) => {
            if (res && res.Data) {
                this.trainings = res.Data.Results;
                if (update) {
                    this.selectedTraining.forEach((item, i) => {
                        const index = this.trainings.findIndex((e) => e.tn_id === item.tn_id);
                        if (index === -1)
                            this.selectedTraining.splice(i, 1);
                        else
                            this.selectedTraining[i] = this.trainings[index];
                    });
                }
            }
        });
    }
    _updateTraing(updated) {
        const updateTraining$ = this.staffService
            .updateTraining(updated)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        updateTraining$.subscribe((res) => {
            if (res && res.Code === 200) {
                this._fetchData(true);
                this._notify(true, res.Message);
            }
            else
                this._notify(false, res.Message);
        }, (e) => this._notify(false, e.Message));
    }
    _removeTraining(training) {
        const removeTraining$ = this.staffService
            .removeTraining({ tn_id: training.tn_id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        removeTraining$.subscribe((res) => {
            if (res && res.Code == 200) {
                this._fetchData(true);
                this._notify(true, res.Message);
            }
            else
                this._notify(false, res.Message);
        }, (e) => this._notify(false, e.Message));
    }
    _notify(isSuccess, message) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            toast: true,
            position: 'top-end',
            type: isSuccess ? 'success' : 'error',
            title: message,
            showConfirmButton: false,
            timer: 2000,
        });
    }
};
ListTrainingModalComponent.ctorParameters = () => [
    { type: _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ListTrainingModalComponent.prototype, "listTraining", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ListTrainingModalComponent.prototype, "passEvent", void 0);
ListTrainingModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-training-modal',
        template: __webpack_require__(/*! raw-loader!./list-training-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff-detail/component/list-training-modal/list-training-modal.component.html"),
        styles: [__webpack_require__(/*! ./list-training-modal.component.scss */ "./src/app/pages/staff/list-staff-detail/component/list-training-modal/list-training-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
], ListTrainingModalComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff-detail/data.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/staff/list-staff-detail/data.ts ***!
  \*******************************************************/
/*! exports provided: timePeriod, menu, days */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timePeriod", function() { return timePeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return days; });
const timePeriod = [
    '00:00',
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30',
];
const menu = [
    'Loại hợp đồng',
    'Thông tin chung',
    'Thông tin liên hệ',
    'Số CMND/Thẻ căn cước',
    'Hộ khẩu thường trú',
    'Chỗ ở hiện tại',
    'Thông tin đào tạo',
    'Địa chỉ phụ trách',
    'Thông tin gia đình',
    'File đính kèm',
    'Thông tin ngân hàng',
    'Khen thưởng/Kỷ luật',
];
const days = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];



/***/ }),

/***/ "./src/app/pages/staff/list-staff-detail/list-staff-detail.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff-detail/list-staff-detail.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .card-body {\n  padding: 0;\n}\n:host .staff-detail {\n  display: flex;\n  height: 100%;\n}\n:host .staff-detail .menu {\n  width: 200px;\n  border-right: 2px solid lightgray;\n}\n:host .staff-detail .menu .item {\n  font-size: small;\n  cursor: pointer;\n  padding: 10px;\n}\n:host .staff-detail .menu .item:hover {\n  background-color: lightgrey;\n  font-weight: 700;\n}\n:host .staff-detail .menu .item.is-selected {\n  background-color: lightgray;\n}\n:host .staff-detail .main {\n  width: 100%;\n  max-height: 100%;\n}\n:host .staff-detail .content {\n  height: calc(100% - 40px);\n  overflow: auto;\n  padding-left: 20px;\n}\n:host .staff-detail .content .row {\n  margin: 0;\n}\n:host .staff-detail .content .form-row {\n  margin: 0;\n}\n:host .staff-detail .content span {\n  color: red;\n}\n:host .staff-detail .content .title-section {\n  padding: 5px 0px;\n  align-items: center;\n}\n:host .staff-detail .content .title-section i {\n  font-size: medium;\n  cursor: pointer;\n}\n:host .staff-detail .content .form-inline {\n  align-items: baseline;\n  flex-flow: row;\n}\n:host .staff-detail .pr-300 {\n  margin-right: 333px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYtZGV0YWlsL2xpc3Qtc3RhZmYtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdGFmZi9saXN0LXN0YWZmLWRldGFpbC9saXN0LXN0YWZmLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNESjtBREdJO0VBQ0UsWUFBQTtFQUNBLGlDQUFBO0FDRE47QURHTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNEUjtBREdRO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQ0RWO0FESVE7RUFDRSwyQkFBQTtBQ0ZWO0FET0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNMTjtBRFFJO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNOTjtBRFFNO0VBQ0UsU0FBQTtBQ05SO0FEU007RUFDRSxTQUFBO0FDUFI7QURVTTtFQUNFLFVBQUE7QUNSUjtBRFdNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ1RSO0FEV1E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNUVjtBRGFNO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDWFI7QURlSTtFQUNFLG1CQUFBO0FDYk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGFmZi9saXN0LXN0YWZmLWRldGFpbC9saXN0LXN0YWZmLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5zdGFmZi1kZXRhaWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLm1lbnUge1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmF5O1xuXG4gICAgICAuaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5tYWluIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICAgIC5yb3cge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLXJvdyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpIHtcbiAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmZvcm0taW5saW5lIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHItMzAwIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMzMzcHg7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IC5zdGFmZi1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuc3RhZmYtZGV0YWlsIC5tZW51IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyYXk7XG59XG46aG9zdCAuc3RhZmYtZGV0YWlsIC5tZW51IC5pdGVtIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuOmhvc3QgLnN0YWZmLWRldGFpbCAubWVudSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbjpob3N0IC5zdGFmZi1kZXRhaWwgLm1lbnUgLml0ZW0uaXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG46aG9zdCAuc3RhZmYtZGV0YWlsIC5tYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuc3RhZmYtZGV0YWlsIC5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbjpob3N0IC5zdGFmZi1kZXRhaWwgLmNvbnRlbnQgLnJvdyB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5zdGFmZi1kZXRhaWwgLmNvbnRlbnQgLmZvcm0tcm93IHtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLnN0YWZmLWRldGFpbCAuY29udGVudCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cbjpob3N0IC5zdGFmZi1kZXRhaWwgLmNvbnRlbnQgLnRpdGxlLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLnN0YWZmLWRldGFpbCAuY29udGVudCAudGl0bGUtc2VjdGlvbiBpIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5zdGFmZi1kZXRhaWwgLmNvbnRlbnQgLmZvcm0taW5saW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBmbGV4LWZsb3c6IHJvdztcbn1cbjpob3N0IC5zdGFmZi1kZXRhaWwgLnByLTMwMCB7XG4gIG1hcmdpbi1yaWdodDogMzMzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff-detail/list-staff-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff-detail/list-staff-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListStaffDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStaffDetailComponent", function() { return ListStaffDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _list_staff_detail_component_list_training_modal_list_training_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../list-staff-detail/component/list-training-modal/list-training-modal.component */ "./src/app/pages/staff/list-staff-detail/component/list-training-modal/list-training-modal.component.ts");
/* harmony import */ var _list_staff_component_training_modal_training_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../list-staff/component/training-modal/training-modal.component */ "./src/app/pages/staff/list-staff/component/training-modal/training-modal.component.ts");
/* harmony import */ var _list_staff_component_address_modal_address_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../list-staff/component/address-modal/address-modal.component */ "./src/app/pages/staff/list-staff/component/address-modal/address-modal.component.ts");
/* harmony import */ var _list_staff_component_relative_modal_relative_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../list-staff/component/relative-modal/relative-modal.component */ "./src/app/pages/staff/list-staff/component/relative-modal/relative-modal.component.ts");
/* harmony import */ var _list_staff_component_attachment_modal_attachment_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../list-staff/component/attachment-modal/attachment-modal.component */ "./src/app/pages/staff/list-staff/component/attachment-modal/attachment-modal.component.ts");
/* harmony import */ var _list_staff_component_bank_modal_bank_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../list-staff/component/bank-modal/bank-modal.component */ "./src/app/pages/staff/list-staff/component/bank-modal/bank-modal.component.ts");
/* harmony import */ var _list_staff_component_bonus_modal_bonus_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../list-staff/component/bonus-modal/bonus-modal.component */ "./src/app/pages/staff/list-staff/component/bonus-modal/bonus-modal.component.ts");
/* harmony import */ var _core_services_api_address_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/services/api/address.service */ "./src/app/core/services/api/address.service.ts");
/* harmony import */ var _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/services/api/staff.service */ "./src/app/core/services/api/staff.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data */ "./src/app/pages/staff/list-staff-detail/data.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_19__);




















let ListStaffDetailComponent = class ListStaffDetailComponent {
    constructor(route, router, formBuilder, addressService, staffService, modalService) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.addressService = addressService;
        this.staffService = staffService;
        this.modalService = modalService;
        this.sta_id = null;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.selectedMenuItem = 0;
        this.submitted = false;
        this.errorField = null;
        this.listView = [true, true, true, true, true, true, true, true, true, true, true, true];
        this.tempTraining = 0;
        this.tempAddress = 0;
        this.tempWorkTime = 0;
        this.tempRelative = 0;
        this.tempAttachment = 0;
        this.tempBank = 0;
        this.tempBonus = 0;
        this.isChange = false;
        this.listTraining = [];
        this.listAddress = [];
        this.listRelative = [];
        this.listAttachment = [];
        this.listBank = [];
        this.listBonus = [];
        this.listNewTraining = [];
        this.listWorkTime = [[], [], [], [], [], [], []];
    }
    ngOnInit() {
        this.sta_id = this.route.snapshot.paramMap.get('sta_id');
        if (this.sta_id === '')
            this.listView = [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ];
        this.timePeriod = _data__WEBPACK_IMPORTED_MODULE_18__["timePeriod"];
        this.menu = _data__WEBPACK_IMPORTED_MODULE_18__["menu"];
        this.days = _data__WEBPACK_IMPORTED_MODULE_18__["days"];
        this._initializeForm();
        this._fetchFilter();
        if (this.sta_id) {
            this._fetchStaff(this.sta_id);
        }
        else {
            this._loadProvincePermanent();
            this._loadProvinceNow();
        }
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    onClickMenuItem(index) {
        this.selectedMenuItem = index;
        const el = document.getElementById(index);
        const content = document.getElementById('content');
        content.scroll({ top: el.offsetTop - 50, behavior: 'smooth' });
    }
    switchViewType(index) {
        this.listView[index] = !this.listView[index];
    }
    onChangeToMain() {
        if (this.formContractType.dirty ||
            this.formProfile.dirty ||
            this.formContact.dirty ||
            this.formPermanentAddress.dirty ||
            this.formNowAddress.dirty ||
            this.formIdentityCard.dirty) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
                title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Có',
                cancelButtonText: 'Không',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            }).then((result) => {
                if (result.value) {
                    this.router.navigate(['/staff/list-staff']);
                }
            });
        }
        else {
            this.router.navigate(['/staff/list-staff']);
        }
    }
    onSubmit() {
        this.submitted = true;
        if (this.formContractType.invalid ||
            this.formProfile.invalid ||
            this.formContact.invalid ||
            this.formPermanentAddress.invalid ||
            this.formNowAddress.invalid ||
            this.formIdentityCard.invalid ||
            (this.formContractType.value.sta_type_contact === 0 &&
                this.formContact.value.sta_email === '') ||
            (this.formContractType.value.sta_type_contact === 0 &&
                this.formProfile.value.department_id === null) ||
            (this.formProfile.value.sta_working_status === '2' &&
                this.formProfile.value.sta_end_work_date === null) ||
            (this.formProfile.value.sta_working_status === '2' &&
                (!this.formProfile.value.sta_reason_to_end_work ||
                    this.formProfile.value.sta_reason_to_end_work.trim() === '')))
            return;
        const list_staff_work_time = this.transformData();
        if (this.formContractType.value.sta_type_contact === 1 && list_staff_work_time.length === 0)
            return this._notify(false, 'Chưa chọn ngày làm việc');
        if (!/^\d+$/.test(this.formIdentityCard.value.sta_identity_card.trim()))
            return this._notify(false, 'Số CMND/Thẻ căn cước chỉ chứa chữ số');
        const identityForm = this.formIdentityCard.value;
        identityForm.sta_identity_card = identityForm.sta_identity_card.trim();
        identityForm.sta_identity_card_date = this._convertNgbDateToDate(identityForm.sta_identity_card_date);
        identityForm.sta_identity_card_date_end = this._convertNgbDateToDate(identityForm.sta_identity_card_date_end);
        const profileForm = this.formProfile.value;
        profileForm.sta_health_card = profileForm.sta_health_card.trim();
        profileForm.sta_social_insurance = profileForm.sta_social_insurance.trim();
        profileForm.sta_birthday = this._convertNgbDateToDate(profileForm.sta_birthday);
        profileForm.sta_start_work_date = this._convertNgbDateToDate(profileForm.sta_start_work_date);
        profileForm.sta_end_work_date = this._convertNgbDateToDate(profileForm.sta_end_work_date);
        profileForm.sta_username = profileForm.sta_username.trim().toLowerCase();
        const data = Object.assign({}, this.formContractType.value, profileForm, this.formContact.value, identityForm, this.formPermanentAddress.value, this.formNowAddress.value, this.formAchieve.value, { list_training: this.listTraining.concat(this.listNewTraining), list_undertaken_location: this.listAddress, list_bank: this.listBank, list_relatives: this.listRelative, list_bonus: this.listBonus, list_attachments: this.listAttachment, list_staff_work_time });
        console.log(data);
        if (this.sta_id)
            this._updateStaff(Object.assign({}, data, { sta_id: this.sta_id }));
        else
            this._createStaff(data);
    }
    //#region Contract Type
    transformWorkTime(list_staff_work_time) {
        if (!list_staff_work_time)
            return;
        list_staff_work_time.forEach((item) => {
            const { sw_day_flag, sw_time_start, sw_time_end } = item;
            const index = parseInt(sw_day_flag[2]) - 2;
            this.listWorkTime[index].push(Object.assign({}, item, { sw_time_start: sw_time_start.substr(0, 5), sw_time_end: sw_time_end.substr(0, 5) }));
        });
    }
    transformData() {
        var data = [];
        this.listWorkTime.forEach((item, index) => {
            if (item.length === 0)
                return;
            item.forEach((time) => {
                data.push(Object.assign({}, time, { sw_day_flag: `TH${index + 2}` }));
            });
        });
        return data;
    }
    onClickPlus(index) {
        this.isChange = true;
        this.listWorkTime[index].push({
            sw_id: `sw_${this.tempWorkTime}`,
            sw_time_start: '08:30',
            sw_time_end: '16:00',
        });
        this.tempWorkTime++;
    }
    onClickMinus(index, timeIndex) {
        this.isChange = true;
        this.listWorkTime[index].splice(timeIndex, 1);
    }
    onChangeStart(index, timeIndex, event) {
        this.isChange = true;
        this.listWorkTime[index][timeIndex] = Object.assign({}, this.listWorkTime[index][timeIndex], { sw_time_start: event.target.value });
    }
    onChangeEnd(index, timeIndex, event) {
        this.isChange = true;
        this.listWorkTime[index][timeIndex] = Object.assign({}, this.listWorkTime[index][timeIndex], { sw_time_end: event.target.value });
    }
    onCheckDay(index) {
        this.isChange = true;
        if (this.listWorkTime[index].length !== 0)
            this.listWorkTime[index] = [];
        else {
            this.listWorkTime[index].push({
                sw_id: `sw_${this.tempWorkTime}`,
                sw_time_start: '08:30',
                sw_time_end: '16:00',
            });
            this.tempWorkTime++;
        }
    }
    //#endregion
    //#region Profile
    onChangeWorkStatus(event) {
        if (event.target.value === '1')
            this.formProfile.patchValue({
                sta_end_work_date: null,
                sta_reason_to_end_work: '',
            });
    }
    //#endregion
    //#region Permanent Address
    onChangeProvincePermanent(e) {
        const districtId = this.provincePermanent.find((item) => item.name === e.target.value).id;
        this._loadDistrictPermanent(districtId);
    }
    onChangeDistrictPermanent(e) {
        const wardId = this.districtPermanent.find((item) => item.name === e.target.value).id;
        this._loadWardPermanent(wardId);
    }
    //#endregion
    //#region Now Address
    onChangeProvinceNow(e) {
        const districtId = this.provinceNow.find((item) => item.name === e.target.value).id;
        this._loadDistrictNow(districtId);
    }
    onChangeDistrictNow(e) {
        const wardId = this.districtNow.find((item) => item.name === e.target.value).id;
        this._loadWardNow(wardId);
    }
    checkSameAddress() {
        const { unl_detail_permanent, unl_province_permanent, unl_district_permanent, unl_ward_permanent, } = this.formPermanentAddress.value;
        const { unl_detail_now, unl_province_now, unl_district_now, unl_ward_now, } = this.formNowAddress.value;
        return (unl_detail_permanent === unl_detail_now &&
            unl_province_permanent === unl_province_now &&
            unl_district_permanent === unl_district_now &&
            unl_ward_permanent === unl_ward_now);
    }
    changeCheckSame(event) {
        if (event.target.checked) {
            const { unl_detail_permanent, unl_province_permanent, unl_district_permanent, unl_ward_permanent, } = this.formPermanentAddress.value;
            this.provinceNow = this.provincePermanent;
            this.districtNow = this.districtPermanent;
            this.wardNow = this.wardPermanent;
            this.formNowAddress.patchValue({
                unl_ward_now: unl_ward_permanent,
                unl_district_now: unl_district_permanent,
                unl_province_now: unl_province_permanent,
                unl_detail_now: unl_detail_permanent,
            });
        }
    }
    //#endregion
    //#region List Training
    onUpdateListTraining() {
        const modalRef = this.modalService.open(_list_staff_detail_component_list_training_modal_list_training_modal_component__WEBPACK_IMPORTED_MODULE_7__["ListTrainingModalComponent"], {
            centered: true,
            size: 'xl',
        });
        modalRef.componentInstance.listTraining = this.listTraining;
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                this.listTraining = res.data;
                this.isChange = true;
            }
            modalRef.close();
        });
    }
    openTrainingModal(training) {
        const modalRef = this.modalService.open(_list_staff_component_training_modal_training_modal_component__WEBPACK_IMPORTED_MODULE_8__["TrainingModalComponent"], {
            centered: true,
        });
        modalRef.componentInstance.staffId = this.sta_id;
        if (training) {
            modalRef.componentInstance.training = training;
        }
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                if (training) {
                    this.listTraining = this.listTraining.map((item) => {
                        if (item.tn_id !== res.data.tn_id)
                            return item;
                        return res.data;
                    });
                    this.isChange = true;
                }
                else {
                    this.listNewTraining.push(Object.assign({}, res.data, { tn_id: `temp_${this.tempTraining}` }));
                    this.tempTraining++;
                    this.isChange = true;
                }
            }
            modalRef.close();
        });
    }
    openRemoveTraining(training) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
            title: 'Chắc chắn muốn xóa khóa đào tạo đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this.listNewTraining = this.listNewTraining.filter((item) => item.tn_id !== training.tn_id);
                this.listTraining = this.listTraining.filter((item) => item.tn_id !== training.tn_id);
                this.isChange = true;
            }
        });
    }
    //#endregion
    //#region List Address
    openAddressModal(address) {
        const modalRef = this.modalService.open(_list_staff_component_address_modal_address_modal_component__WEBPACK_IMPORTED_MODULE_9__["AddressModalComponent"], {
            centered: true,
        });
        modalRef.componentInstance.listAddress = this.listAddress;
        if (address) {
            modalRef.componentInstance.address = address;
        }
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                if (address) {
                    this.listAddress = this.listAddress.map((item) => {
                        if (item.unl_id !== res.form.unl_id)
                            return item;
                        return res.form;
                    });
                    this.isChange = true;
                }
                else {
                    this.listAddress.push(Object.assign({}, res.form, { unl_id: `temp_${this.tempAddress}` }));
                    this.tempAddress++;
                    this.isChange = true;
                }
            }
            modalRef.close();
        });
    }
    onRemoveAddress(address) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
            title: 'Chắc chắn muốn xóa địa chỉ đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this.listAddress = this.listAddress.filter((item) => item.unl_id !== address.unl_id);
                this.isChange = true;
            }
        });
    }
    //#endregion
    //#region List Relative
    openRelativeModal(relative) {
        const modalRef = this.modalService.open(_list_staff_component_relative_modal_relative_modal_component__WEBPACK_IMPORTED_MODULE_10__["RelativeModalComponent"], {
            centered: true,
        });
        modalRef.componentInstance.listRelative = this.listRelative;
        if (relative) {
            modalRef.componentInstance.relative = relative;
        }
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                if (relative) {
                    this.listRelative = this.listRelative.map((item) => {
                        if (item.rels_id !== res.data.rels_id)
                            return item;
                        return res.data;
                    });
                    this.isChange = true;
                }
                else {
                    this.listRelative.push(Object.assign({}, res.data, { rels_id: `temp_${this.tempRelative}` }));
                    this.tempRelative++;
                    this.isChange = true;
                }
            }
            modalRef.close();
        });
    }
    onRemoveRelative(relative) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
            title: 'Chắc chắn muốn xóa quan hệ gia đình đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this.listRelative = this.listRelative.filter((item) => item.rels_id !== relative.rels_id);
                this.isChange = true;
            }
        });
    }
    //#endregion
    //#region List Attachment
    openAttachmentModal(attachment) {
        const modalRef = this.modalService.open(_list_staff_component_attachment_modal_attachment_modal_component__WEBPACK_IMPORTED_MODULE_11__["AttachmentModalComponent"], {
            centered: true,
        });
        modalRef.componentInstance.listAttachment = this.listAttachment;
        if (attachment) {
            modalRef.componentInstance.attachment = attachment;
        }
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                if (attachment) {
                    this.listAttachment = this.listAttachment.map((item) => {
                        if (item.ast_id !== res.data.ast_id)
                            return item;
                        return res.data;
                    });
                    this.isChange = true;
                }
                else {
                    this.listAttachment.push(Object.assign({}, res.data, { ast_id: `temp_${this.tempAttachment}` }));
                    this.tempAttachment++;
                    this.isChange = true;
                }
            }
            modalRef.close();
        });
    }
    onRemoveAttachment(attachment) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
            title: 'Chắc chắn muốn xóa file đính kèm đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this.listAttachment = this.listAttachment.filter((item) => item.ast_id !== attachment.ast_id);
                this.isChange = true;
            }
        });
    }
    //#endregion
    //#region List Bank
    openBankModal(bank) {
        const modalRef = this.modalService.open(_list_staff_component_bank_modal_bank_modal_component__WEBPACK_IMPORTED_MODULE_12__["BankModalComponent"], {
            centered: true,
        });
        modalRef.componentInstance.listBank = this.listBank;
        if (bank) {
            modalRef.componentInstance.bank = bank;
        }
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                if (bank) {
                    this.listBank = this.listBank.map((item) => {
                        if (item.stb_id !== res.data.stb_id)
                            return item;
                        return res.data;
                    });
                    this.isChange = true;
                }
                else {
                    this.listBank.push(Object.assign({}, res.data, { stb_id: `temp_${this.tempBank}` }));
                    this.tempBank++;
                    this.isChange = true;
                }
            }
            modalRef.close();
        });
    }
    onRemoveBank(bank) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
            title: 'Chắc chắn muốn xóa tài khoản ngân hàng đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this.listBank = this.listBank.filter((item) => item.stb_id !== bank.stb_id);
                this.isChange = true;
            }
        });
    }
    //#endregion
    //#region List Bonus
    openBonusModal(bonus) {
        const modalRef = this.modalService.open(_list_staff_component_bonus_modal_bonus_modal_component__WEBPACK_IMPORTED_MODULE_13__["BonusModalComponent"], {
            centered: true,
        });
        modalRef.componentInstance.listBonus = this.listBonus;
        if (bonus) {
            modalRef.componentInstance.bonus = bonus;
        }
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                if (bonus) {
                    this.listBonus = this.listBonus.map((item) => {
                        if (item.bos_id !== res.data.bos_id)
                            return item;
                        return res.data;
                    });
                    this.isChange = true;
                }
                else {
                    this.listBonus.push(Object.assign({}, res.data, { bos_id: `temp_${this.tempBonus}` }));
                    this.tempBonus++;
                    this.isChange = true;
                }
            }
            modalRef.close();
        });
    }
    onRemoveBonus(bonus) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
            title: 'Chắc chắn muốn xóa khen thưởng/kỉ luật đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this.listBonus = this.listBonus.filter((item) => item.bos_id !== bonus.bos_id);
                this.isChange = true;
            }
        });
    }
    //#endregion
    //#region Private
    _initializeForm() {
        this.formContractType = this.formBuilder.group({
            sta_type_contact: [0, null],
        });
        this.formProfile = this.formBuilder.group({
            sta_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            sta_fullname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            sta_username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            group_role_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            position_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            sta_status: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            department_id: ['', null],
            sta_sex: [1, null],
            sta_traffic: ['', null],
            sta_start_work_date: [this._convertDateToNgbDate(new Date(2020, 0, 1)), null],
            sta_birthday: [this._convertDateToNgbDate(new Date(1995, 0, 1)), null],
            sta_salary: [30, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            sta_working_status: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            sta_tax_code: ['', null],
            sta_end_work_date: [null, null],
            sta_reason_to_end_work: [null, null],
            sta_note: ['', null],
            sta_social_insurance: ['', null],
            sta_health_card: ['', null],
        });
        this.formContact = this.formBuilder.group({
            sta_mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\d+$/)]],
            sta_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
        });
        this.formIdentityCard = this.formBuilder.group({
            sta_identity_card: ['', null],
            sta_identity_card_date: [null, null],
            sta_identity_card_date_end: [null, null],
            sta_identity_card_location: ['', null],
        });
        this.formPermanentAddress = this.formBuilder.group({
            unl_ward_permanent: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            unl_district_permanent: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            unl_province_permanent: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            unl_detail_permanent: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.formNowAddress = this.formBuilder.group({
            unl_ward_now: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            unl_district_now: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            unl_province_now: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            unl_detail_now: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.formAchieve = this.formBuilder.group({
            achieved: ['', null],
            comment: ['', null],
        });
    }
    _fetchFilter() {
        const roles$ = this.staffService.loadGroupRole().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        roles$.subscribe((res) => {
            this.roles = res.Data;
        });
        const positions$ = this.staffService.loadPosition().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        positions$.subscribe((res) => {
            this.positions = res.Data;
        });
        const departments$ = this.staffService.loadDepartment().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        departments$.subscribe((res) => {
            this.departments = res.Data;
        });
    }
    _fetchStaff(sta_id) {
        const info$ = this.staffService.loadStaffInfo({ id: sta_id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        info$.subscribe((res) => {
            if (res && res.Data) {
                this._patchStaff(res.Data);
            }
        });
    }
    _patchStaff(staff) {
        this.formContractType.patchValue({
            sta_type_contact: staff.sta_type_contact,
        });
        this.formProfile.patchValue({
            sta_code: staff.sta_code,
            sta_fullname: staff.sta_fullname,
            sta_username: staff.sta_username,
            group_role_id: staff.group_role_id,
            position_id: staff.position_id,
            sta_status: staff.sta_status,
            department_id: staff.department_id,
            sta_sex: staff.sta_sex,
            sta_traffic: staff.sta_traffic,
            sta_start_work_date: this._convertDateToNgbDate(staff.sta_start_work_date),
            sta_birthday: this._convertDateToNgbDate(staff.sta_birthday),
            sta_salary: staff.sta_salary,
            sta_working_status: staff.sta_working_status.toString(),
            sta_tax_code: staff.sta_tax_code,
            sta_end_work_date: this._convertDateToNgbDate(staff.sta_end_work_date),
            sta_reason_to_end_work: staff.sta_reason_to_end_work,
            sta_note: staff.sta_note,
            sta_health_card: staff.sta_health_card,
            sta_social_insurance: staff.sta_social_insurance,
        });
        this.formContact.patchValue({
            sta_mobile: staff.sta_mobile,
            sta_email: staff.sta_email,
        });
        this.formIdentityCard.patchValue({
            sta_identity_card: staff.sta_identity_card,
            sta_identity_card_date: this._convertDateToNgbDate(staff.sta_identity_card_date),
            sta_identity_card_date_end: this._convertDateToNgbDate(staff.sta_identity_card_date_end),
            sta_identity_card_location: staff.sta_identity_card_location,
        });
        this.formPermanentAddress.patchValue({
            unl_ward_permanent: staff.unl_ward_permanent,
            unl_district_permanent: staff.unl_district_permanent,
            unl_province_permanent: staff.unl_province_permanent,
            unl_detail_permanent: staff.unl_detail_permanent,
        });
        this.formNowAddress.patchValue({
            unl_ward_now: staff.unl_ward_now,
            unl_district_now: staff.unl_district_now,
            unl_province_now: staff.unl_province_now,
            unl_detail_now: staff.unl_detail_now,
        });
        this.formAchieve.patchValue({
            achieved: staff.achieved,
            comment: staff.comment,
        });
        this._loadProvincePermanent();
        this._loadProvinceNow();
        this.listTraining = staff.list_training;
        this.listAddress = staff.list_undertaken_location;
        this.listRelative = staff.list_relatives;
        this.listBank = staff.list_bank;
        this.listBonus = staff.list_bonus;
        this.listAttachment = staff.list_attachments;
        this.transformWorkTime(staff.list_staff_work_time);
    }
    _loadProvinceNow() {
        const provinceNow$ = this.addressService.loadProvince().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        provinceNow$.subscribe((res) => {
            if (res && res.Data) {
                this.provinceNow = res.Data;
                if (this.formNowAddress.value.unl_province_now === null) {
                    this.formNowAddress.patchValue({ unl_province_now: res.Data[0].name });
                    this._loadDistrictNow(res.Data[0].id);
                }
                else {
                    const provinceId = this.provinceNow.find((item) => item.name === this.formNowAddress.value.unl_province_now).id;
                    this._loadDistrictNow(provinceId, true);
                }
            }
        });
    }
    _loadDistrictNow(provinceId, isFirst = false) {
        const districtNow$ = this.addressService
            .loadDistrict({ province_id: provinceId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        districtNow$.subscribe((res) => {
            if (res && res.Data) {
                this.districtNow = res.Data;
                if (this.formNowAddress.value.unl_district_now === null || !isFirst) {
                    this.formNowAddress.patchValue({ unl_district_now: res.Data[0].name });
                    this._loadWardNow(res.Data[0].id);
                }
                else {
                    const districtId = this.districtNow.find((item) => item.name === this.formNowAddress.value.unl_district_now).id;
                    this._loadWardNow(districtId, true);
                }
            }
        });
    }
    _loadWardNow(districtId, isFirst = false) {
        const wardNow$ = this.addressService
            .loadWard({ district_id: districtId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        wardNow$.subscribe((res) => {
            if (res && res.Data) {
                this.wardNow = res.Data;
                if (this.formNowAddress.value.unl_ward_now === null || !isFirst) {
                    this.formNowAddress.patchValue({ unl_ward_now: res.Data[0].name });
                }
            }
        });
    }
    _loadProvincePermanent() {
        const provincePermanent$ = this.addressService.loadProvince().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        provincePermanent$.subscribe((res) => {
            if (res && res.Data) {
                this.provincePermanent = res.Data;
                if (this.formPermanentAddress.value.unl_province_permanent === null) {
                    this.formPermanentAddress.patchValue({ unl_province_permanent: res.Data[0].name });
                    this._loadDistrictPermanent(res.Data[0].id);
                }
                else {
                    const provinceId = this.provincePermanent.find((item) => item.name === this.formPermanentAddress.value.unl_province_permanent).id;
                    this._loadDistrictPermanent(provinceId, true);
                }
            }
        });
    }
    _loadDistrictPermanent(provinceId, isFirst = false) {
        const districtPermanent$ = this.addressService
            .loadDistrict({ province_id: provinceId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        districtPermanent$.subscribe((res) => {
            if (res && res.Data) {
                this.districtPermanent = res.Data;
                if (this.formPermanentAddress.value.unl_district_permanent === null || !isFirst) {
                    this.formPermanentAddress.patchValue({ unl_district_permanent: res.Data[0].name });
                    this._loadWardPermanent(res.Data[0].id);
                }
                else {
                    const districtId = this.districtPermanent.find((item) => item.name === this.formPermanentAddress.value.unl_district_permanent).id;
                    this._loadWardPermanent(districtId, true);
                }
            }
        });
    }
    _loadWardPermanent(districtId, isFirst = false) {
        const wardPermanent$ = this.addressService
            .loadWard({ district_id: districtId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        wardPermanent$.subscribe((res) => {
            if (res && res.Data) {
                this.wardPermanent = res.Data;
                if (this.formPermanentAddress.value.unl_ward_permanent === null || !isFirst) {
                    this.formPermanentAddress.patchValue({ unl_ward_permanent: res.Data[0].name });
                }
            }
        });
    }
    _createStaff(data) {
        const createStaff$ = this.staffService.createStaff(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        createStaff$.subscribe((res) => {
            if (res && res.Code === 200) {
                this._notify(true, res.Message);
                this.router.navigate(['/staff/list-staff']);
                this.staffService
                    .sendMailCreate({
                    sta_username: data.sta_username,
                    sta_email: data.sta_email,
                })
                    .subscribe((res) => {
                    console.log(res);
                });
            }
            else {
                this._notify(false, res.Message);
                this.errorField = res.Error;
            }
        }, (e) => {
            this._notify(false, e.Message);
            this.errorField = e.Error;
        });
    }
    _updateStaff(updated) {
        const updateStaff$ = this.staffService.updateStaff(updated).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        updateStaff$.subscribe((res) => {
            if (res && res.Code === 200) {
                this._notify(true, res.Message);
                this.router.navigate(['/staff/list-staff']);
            }
            else {
                this._notify(false, res.Message);
                this.errorField = res.Error;
            }
        }, (e) => {
            this._notify(false, e.Message);
            this.errorField = e.Error;
        });
    }
    _convertNgbDateToDate(ngbDate) {
        if (!ngbDate) {
            return '';
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_19__["isUndefined"])(ngbDate.year))
            return ngbDate;
        const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
        return moment__WEBPACK_IMPORTED_MODULE_17__(newDate).format();
    }
    _convertDateToNgbDate(date) {
        if (!date) {
            return null;
        }
        const year = moment__WEBPACK_IMPORTED_MODULE_17__(date).year();
        const month = moment__WEBPACK_IMPORTED_MODULE_17__(date).month() + 1;
        const day = moment__WEBPACK_IMPORTED_MODULE_17__(date).date();
        return new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDate"](year, month, day);
    }
    _notify(isSuccess, message) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a.fire({
            toast: true,
            position: 'top-end',
            type: isSuccess ? 'success' : 'error',
            title: message,
            showConfirmButton: false,
            timer: 2000,
        });
    }
};
ListStaffDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _core_services_api_address_service__WEBPACK_IMPORTED_MODULE_14__["AddressService"] },
    { type: _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_15__["StaffService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
ListStaffDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-list-staff-detail',
        template: __webpack_require__(/*! raw-loader!./list-staff-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff-detail/list-staff-detail.component.html"),
        styles: [__webpack_require__(/*! ./list-staff-detail.component.scss */ "./src/app/pages/staff/list-staff-detail/list-staff-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _core_services_api_address_service__WEBPACK_IMPORTED_MODULE_14__["AddressService"],
        _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_15__["StaffService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], ListStaffDetailComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/address-modal/address-modal.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/address-modal/address-modal.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host span {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L2FkZHJlc3MtbW9kYWwvYWRkcmVzcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RhZmYvbGlzdC1zdGFmZi9jb21wb25lbnQvYWRkcmVzcy1tb2RhbC9hZGRyZXNzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsVUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RhZmYvbGlzdC1zdGFmZi9jb21wb25lbnQvYWRkcmVzcy1tb2RhbC9hZGRyZXNzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBzcGFuIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG59XG4iLCI6aG9zdCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/address-modal/address-modal.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/address-modal/address-modal.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddressModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModalComponent", function() { return AddressModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_api_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/api/address.service */ "./src/app/core/services/api/address.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let AddressModalComponent = class AddressModalComponent {
    constructor(formBuilder, addressService) {
        this.formBuilder = formBuilder;
        this.addressService = addressService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
        this.initializeForm();
        this._loadProvince();
    }
    ngOnInit() {
        if (this.address) {
            this.patchData(this.address);
        }
    }
    onClickSubmit() {
        this.submitted = true;
        let isConflict = false;
        this.listAddress.forEach((item) => {
            if (item.unl_province === this.form.value.unl_province &&
                item.unl_district === this.form.value.unl_district &&
                item.unl_ward === this.form.value.unl_ward &&
                item.unl_detail.trim() === this.form.value.unl_detail.trim())
                isConflict = true;
        });
        if (isConflict)
            this._notify(false, 'Địa chỉ phụ trách đã tồn tại');
        if (this.form.valid && !isConflict) {
            this.passEvent.emit({ event: true, form: this.form.value });
        }
    }
    onClickCancel() {
        if (this.form.dirty) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Có',
                cancelButtonText: 'Không',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            }).then((result) => {
                if (result.value) {
                    this.passEvent.emit({ event: false });
                }
            });
        }
        else {
            this.passEvent.emit({ event: false });
        }
    }
    onChangeProvince(e) {
        const districtId = this.provinces.find((item) => item.name === e.target.value).id;
        this._loadDistrict(districtId);
    }
    onChangeDistrict(e) {
        const wardId = this.districts.find((item) => item.name === e.target.value).id;
        this._loadWard(wardId);
    }
    get formUI() {
        return this.form.controls;
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            unl_id: ['temp_0', null],
            unl_province: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            unl_district: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            unl_ward: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            unl_detail: ['', null],
            unl_note: ['', null],
        });
    }
    patchData(address) {
        this.form.patchValue({
            unl_id: address.unl_id,
            unl_province: address.unl_province,
            unl_district: address.unl_district,
            unl_ward: address.unl_ward,
            unl_detail: address.unl_detail,
            unl_note: address.unl_note,
        });
    }
    _loadProvince() {
        const province$ = this.addressService.loadProvince().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        province$.subscribe((res) => {
            if (res && res.Data) {
                this.provinces = res.Data;
                if (this.address) {
                    this.form.patchValue({ unl_province: this.address.unl_province });
                    const provinceId = this.provinces.find((item) => item.name === this.address.unl_province)
                        .id;
                    this._loadDistrict(provinceId, true);
                }
                else {
                    this.form.patchValue({ unl_province: res.Data[0].name });
                    this._loadDistrict(res.Data[0].id);
                }
            }
        });
    }
    _loadDistrict(provinceId, isFirst = false) {
        const district$ = this.addressService
            .loadDistrict({ province_id: provinceId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        district$.subscribe((res) => {
            if (res && res.Data) {
                this.districts = res.Data;
                if (this.address && isFirst) {
                    this.form.patchValue({ unl_district: this.address.unl_district });
                    const districtId = this.districts.find((item) => item.name === this.address.unl_district)
                        .id;
                    this._loadWard(districtId, true);
                }
                else {
                    this.form.patchValue({ unl_district: res.Data[0].name });
                    this._loadWard(res.Data[0].id);
                }
            }
        });
    }
    _loadWard(districtId, isFirst = false) {
        const ward$ = this.addressService
            .loadWard({ district_id: districtId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        ward$.subscribe((res) => {
            if (res && res.Data) {
                this.wards = res.Data;
                if (this.address && isFirst) {
                    this.form.patchValue({ unl_ward: this.address.unl_ward });
                }
                else {
                    this.form.patchValue({ unl_ward: res.Data[0].name });
                }
            }
        });
    }
    _notify(isSuccess, message) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            toast: true,
            position: 'top-end',
            type: isSuccess ? 'success' : 'error',
            title: message,
            showConfirmButton: false,
            timer: 2000,
        });
    }
};
AddressModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_services_api_address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddressModalComponent.prototype, "address", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddressModalComponent.prototype, "listAddress", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AddressModalComponent.prototype, "passEvent", void 0);
AddressModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address-modal',
        template: __webpack_require__(/*! raw-loader!./address-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/address-modal/address-modal.component.html"),
        styles: [__webpack_require__(/*! ./address-modal.component.scss */ "./src/app/pages/staff/list-staff/component/address-modal/address-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_services_api_address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"]])
], AddressModalComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/address-now-tab/address-now-tab.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/address-now-tab/address-now-tab.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L2FkZHJlc3Mtbm93LXRhYi9hZGRyZXNzLW5vdy10YWIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/address-now-tab/address-now-tab.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/address-now-tab/address-now-tab.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddressNowTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressNowTabComponent", function() { return AddressNowTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddressNowTabComponent = class AddressNowTabComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddressNowTabComponent.prototype, "now_ward", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddressNowTabComponent.prototype, "now_district", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddressNowTabComponent.prototype, "now_province", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddressNowTabComponent.prototype, "now_detail", void 0);
AddressNowTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address-now-tab',
        template: __webpack_require__(/*! raw-loader!./address-now-tab.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/address-now-tab/address-now-tab.component.html"),
        styles: [__webpack_require__(/*! ./address-now-tab.component.scss */ "./src/app/pages/staff/list-staff/component/address-now-tab/address-now-tab.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddressNowTabComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/address-permanent-tab/address-permanent-tab.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/address-permanent-tab/address-permanent-tab.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L2FkZHJlc3MtcGVybWFuZW50LXRhYi9hZGRyZXNzLXBlcm1hbmVudC10YWIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/address-permanent-tab/address-permanent-tab.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/address-permanent-tab/address-permanent-tab.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AddressPermanentTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPermanentTabComponent", function() { return AddressPermanentTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddressPermanentTabComponent = class AddressPermanentTabComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddressPermanentTabComponent.prototype, "permanent_ward", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddressPermanentTabComponent.prototype, "permanent_district", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddressPermanentTabComponent.prototype, "permanent_province", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddressPermanentTabComponent.prototype, "permanent_detail", void 0);
AddressPermanentTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address-permanent-tab',
        template: __webpack_require__(/*! raw-loader!./address-permanent-tab.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/address-permanent-tab/address-permanent-tab.component.html"),
        styles: [__webpack_require__(/*! ./address-permanent-tab.component.scss */ "./src/app/pages/staff/list-staff/component/address-permanent-tab/address-permanent-tab.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddressPermanentTabComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/attachment-modal/attachment-modal.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/attachment-modal/attachment-modal.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host span {\n  color: red;\n}\n:host .link-file {\n  overflow-wrap: break-word;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L2F0dGFjaG1lbnQtbW9kYWwvYXR0YWNobWVudC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RhZmYvbGlzdC1zdGFmZi9jb21wb25lbnQvYXR0YWNobWVudC1tb2RhbC9hdHRhY2htZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsVUFBQTtBQ0FKO0FER0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGFmZi9saXN0LXN0YWZmL2NvbXBvbmVudC9hdHRhY2htZW50LW1vZGFsL2F0dGFjaG1lbnQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHNwYW4ge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICAubGluay1maWxlIHtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxufVxuIiwiOmhvc3Qgc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG59XG46aG9zdCAubGluay1maWxlIHtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/attachment-modal/attachment-modal.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/attachment-modal/attachment-modal.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AttachmentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentModalComponent", function() { return AttachmentModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/api/staff.service */ "./src/app/core/services/api/staff.service.ts");







let AttachmentModalComponent = class AttachmentModalComponent {
    constructor(formBuilder, staffService) {
        this.formBuilder = formBuilder;
        this.staffService = staffService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
        this.files = null;
        this.file_link = '';
        this.initializeForm();
    }
    ngOnInit() {
        if (this.attachment) {
            this.patchData(this.attachment);
        }
    }
    onClickSubmit() {
        this.submitted = true;
        if (this.form.value.ast_filename.trim() === '')
            return this.form.controls['ast_filename'].setErrors({ required: true });
        if (this.files === null)
            return this._notify(false, 'Chưa chọn file đính kèm');
        if (this.form.valid) {
            const upload$ = this.staffService
                .uploadAttachment(this.files[0])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
            upload$.subscribe((res) => {
                if (res && res.Code == 200) {
                    const data = this.form.value;
                    data.ast_link = res.Data;
                    this.passEvent.emit({ event: true, data });
                }
                else
                    this._notify(false, res.Message);
            }, (e) => this._notify(false, e.Message));
        }
    }
    onClickCancel() {
        if (this.form.dirty) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Có',
                cancelButtonText: 'Không',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            }).then((result) => {
                if (result.value) {
                    this.passEvent.emit({ event: false });
                }
            });
        }
        else {
            this.passEvent.emit({ event: false });
        }
    }
    setFile(event) {
        let files = event.srcElement.files;
        if (!files) {
            return;
        }
        this.files = files;
    }
    get formUI() {
        return this.form.controls;
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            ast_id: ['temp_0', null],
            ast_filename: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ast_description: ['', null],
            ast_note: ['', null],
        });
    }
    patchData(attachment) {
        this.form.patchValue({
            ast_id: attachment.ast_id,
            ast_filename: attachment.ast_filename,
            ast_description: attachment.ast_description,
            ast_note: attachment.ast_note,
        });
        console.log(attachment.ast_link);
        this.file_link = attachment.ast_link;
    }
    _notify(isSuccess, message) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            toast: true,
            position: 'top-end',
            type: isSuccess ? 'success' : 'error',
            title: message,
            showConfirmButton: false,
            timer: 2000,
        });
    }
};
AttachmentModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_6__["StaffService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AttachmentModalComponent.prototype, "attachment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AttachmentModalComponent.prototype, "passEvent", void 0);
AttachmentModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-attachment-modal',
        template: __webpack_require__(/*! raw-loader!./attachment-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/attachment-modal/attachment-modal.component.html"),
        styles: [__webpack_require__(/*! ./attachment-modal.component.scss */ "./src/app/pages/staff/list-staff/component/attachment-modal/attachment-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_6__["StaffService"]])
], AttachmentModalComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/attachment-tab/attachment-tab.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/attachment-tab/attachment-tab.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host a.diabled {\n  cursor: default;\n  pointer-events: none;\n}\n:host .row {\n  margin-right: 0;\n}\n:host .table-responsive {\n  overflow: auto;\n  max-height: calc(100% - 85px);\n}\n:host .table {\n  border-spacing: 0;\n  border-collapse: separate;\n}\n:host .table thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .table tr {\n  cursor: pointer;\n}\n:host .table tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L2F0dGFjaG1lbnQtdGFiL2F0dGFjaG1lbnQtdGFiLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdGFmZi9saXN0LXN0YWZmL2NvbXBvbmVudC9hdHRhY2htZW50LXRhYi9hdHRhY2htZW50LXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0ROO0FES0U7RUFDRSxlQUFBO0FDSEo7QURNRTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQ0pKO0FET0U7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDTEo7QURRTTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDTlI7QURTSTtFQUNFLGVBQUE7QUNQTjtBRFNNO0VBQ0UsMkJBQUE7QUNQUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L2F0dGFjaG1lbnQtdGFiL2F0dGFjaG1lbnQtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBhIHtcbiAgICAmLmRpYWJsZWQge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLnJvdyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xuICB9XG5cbiAgLnRhYmxlIHtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuXG4gICAgdGhlYWQge1xuICAgICAgdGgge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgICB0ciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCBhLmRpYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuOmhvc3QgLnJvdyB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xufVxuOmhvc3QgLnRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG59XG46aG9zdCAudGFibGUgdGhlYWQgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLnRhYmxlIHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLnRhYmxlIHRyLmlzLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/attachment-tab/attachment-tab.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/attachment-tab/attachment-tab.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AttachmentTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentTabComponent", function() { return AttachmentTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _attachment_modal_attachment_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../attachment-modal/attachment-modal.component */ "./src/app/pages/staff/list-staff/component/attachment-modal/attachment-modal.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let AttachmentTabComponent = class AttachmentTabComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedAttachment = null;
    }
    ngOnInit() { }
    ngOnChanges() {
        if (!this.staffId)
            this.selectedAttachment = null;
        if (this.selectedAttachment)
            this.selectedAttachment = this.listAttachment.filter((item) => item.ast_id === this.selectedAttachment.ast_id)[0];
    }
    onClickAttachment(attachment) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.selectedAttachment)) {
            this.selectedAttachment = attachment;
        }
        else {
            if (this.selectedAttachment.ast_id !== attachment.ast_id) {
                this.selectedAttachment = attachment;
            }
            else {
                this.selectedAttachment = null;
            }
        }
    }
    onClickLink(attachment) {
        this.onClickAttachment(attachment);
        window.open('http://27.72.147.222:1230/' + attachment.ast_link);
    }
    openAttachmentModal(attachment) {
        const modalRef = this.modalService.open(_attachment_modal_attachment_modal_component__WEBPACK_IMPORTED_MODULE_3__["AttachmentModalComponent"], {
            centered: true,
        });
        modalRef.componentInstance.staffId = this.staffId;
        if (attachment) {
            modalRef.componentInstance.attachment = attachment;
        }
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                if (attachment) {
                    this._updateAttachment(res.data);
                }
                else {
                    this._createAttachment(res.data);
                }
            }
            modalRef.close();
        });
    }
    openConfirmModal(attachment) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Chắc chắn muốn xóa khóa file đính kèm đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this._removeAttachment(attachment);
            }
        });
    }
    _createAttachment(data) {
        const updatedList = this.listAttachment.concat(data);
        this.formSubmit.emit(updatedList);
    }
    _updateAttachment(updated) {
        const updatedList = this.listAttachment.map((item) => {
            if (item.ast_id !== updated.ast_id)
                return item;
            return updated;
        });
        this.formSubmit.emit(updatedList);
    }
    _removeAttachment(attachment) {
        const updatedList = this.listAttachment.filter((item) => item.ast_id !== attachment.ast_id);
        this.formSubmit.emit(updatedList);
    }
};
AttachmentTabComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], AttachmentTabComponent.prototype, "listAttachment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AttachmentTabComponent.prototype, "staffId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AttachmentTabComponent.prototype, "formSubmit", void 0);
AttachmentTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-attachment-tab',
        template: __webpack_require__(/*! raw-loader!./attachment-tab.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/attachment-tab/attachment-tab.component.html"),
        styles: [__webpack_require__(/*! ./attachment-tab.component.scss */ "./src/app/pages/staff/list-staff/component/attachment-tab/attachment-tab.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], AttachmentTabComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/bank-modal/bank-modal.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/bank-modal/bank-modal.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host span {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L2JhbmstbW9kYWwvYmFuay1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RhZmYvbGlzdC1zdGFmZi9jb21wb25lbnQvYmFuay1tb2RhbC9iYW5rLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsVUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RhZmYvbGlzdC1zdGFmZi9jb21wb25lbnQvYmFuay1tb2RhbC9iYW5rLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBzcGFuIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG59XG4iLCI6aG9zdCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/bank-modal/bank-modal.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/bank-modal/bank-modal.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BankModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankModalComponent", function() { return BankModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/api/staff.service */ "./src/app/core/services/api/staff.service.ts");







let BankModalComponent = class BankModalComponent {
    constructor(formBuilder, staffService) {
        this.formBuilder = formBuilder;
        this.staffService = staffService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
        this.initializeForm();
        this._loadCategory();
    }
    ngOnInit() {
        if (this.bank) {
            this.patchData(this.bank);
        }
    }
    onClickSubmit() {
        this.submitted = true;
        if (this.form.value.stb_fullname.trim() === '')
            return this.form.controls['stb_fullname'].setErrors({ required: true });
        if (this.form.value.stb_account.trim() === '')
            return this.form.controls['stb_account'].setErrors({ required: true });
        let isConflict = false;
        this.listBank.forEach((item) => {
            if (item.stb_account.trim() === this.form.value.stb_account.trim())
                isConflict = true;
        });
        if (isConflict)
            this._notify(false, 'Số tài khoản đã có trong hệ thống');
        if (this.form.valid && !isConflict) {
            const data = this.form.value;
            this.passEvent.emit({ event: true, data });
        }
    }
    onClickCancel() {
        if (this.form.dirty) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Có',
                cancelButtonText: 'Không',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            }).then((result) => {
                if (result.value) {
                    this.passEvent.emit({ event: false });
                }
            });
        }
        else {
            this.passEvent.emit({ event: false });
        }
    }
    onChangeCategory(e) {
        const bankId = e.target.value;
        this._loadBank(bankId);
    }
    onChangeBank(e) {
        const branchId = e.target.value;
        this._loadBranch(branchId);
    }
    get formUI() {
        return this.form.controls;
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            stb_id: ['temp_0', null],
            bank_category_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            bank_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            bank_branch_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            stb_account: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            stb_fullname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            stb_note: ['', null],
            bank_category_name: ['', null],
            bank_name: ['', null],
            bank_branch_name: ['', null],
        });
    }
    patchData(bank) {
        this.form.patchValue({
            stb_id: bank.stb_id,
            bank_category_id: bank.bank_category_id,
            bank_id: bank.bank_id,
            bank_branch_id: bank.bank_branch_id,
            stb_account: bank.stb_account,
            stb_fullname: bank.stb_fullname,
            stb_note: bank.stb_note,
            bank_category_name: bank.bank_category_name,
            bank_name: bank.bank_name,
            bank_branch_name: bank.bank_branch_name,
        });
    }
    _loadCategory() {
        const category$ = this.staffService.loadBankCategory().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        category$.subscribe((res) => {
            if (res && res.Data) {
                this.categories = res.Data;
                if (this.bank) {
                    this._loadBank(this.bank.bank_category_id, true);
                }
                else {
                    this.form.patchValue({
                        bank_category_id: res.Data[0].id,
                        bank_category_name: res.Data[0].name,
                    });
                    this._loadBank(res.Data[0].id);
                }
            }
        });
    }
    _loadBank(categoryId, isFirst = false) {
        const bank$ = this.staffService
            .loadBank({ bank_category_id: categoryId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        bank$.subscribe((res) => {
            if (res && res.Data) {
                this.banks = res.Data;
                if (this.bank && isFirst) {
                    this._loadBranch(this.bank.bank_id, true);
                }
                else {
                    this.form.patchValue({ bank_id: res.Data[0].id, bank_name: res.Data[0].name });
                    this._loadBranch(res.Data[0].id);
                }
            }
        });
    }
    _loadBranch(bankId, isFirst = false) {
        const branch$ = this.staffService
            .loadBankBranch({ bank_id: bankId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        branch$.subscribe((res) => {
            if (res && res.Data) {
                this.branchs = res.Data;
                if (this.bank && isFirst) {
                }
                else {
                    this.form.patchValue({
                        bank_branch_id: res.Data[0].id,
                        bank_branch_name: res.Data[0].name,
                    });
                }
            }
        });
    }
    _notify(isSuccess, message) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            toast: true,
            position: 'top-end',
            type: isSuccess ? 'success' : 'error',
            title: message,
            showConfirmButton: false,
            timer: 2000,
        });
    }
};
BankModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_6__["StaffService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BankModalComponent.prototype, "bank", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BankModalComponent.prototype, "listBank", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], BankModalComponent.prototype, "passEvent", void 0);
BankModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bank-modal',
        template: __webpack_require__(/*! raw-loader!./bank-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/bank-modal/bank-modal.component.html"),
        styles: [__webpack_require__(/*! ./bank-modal.component.scss */ "./src/app/pages/staff/list-staff/component/bank-modal/bank-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_6__["StaffService"]])
], BankModalComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/bank-tab/bank-tab.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/bank-tab/bank-tab.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host a.diabled {\n  cursor: default;\n  pointer-events: none;\n}\n:host .row {\n  margin-right: 0;\n}\n:host .table-responsive {\n  overflow: auto;\n  max-height: calc(100% - 85px);\n}\n:host .table {\n  border-spacing: 0;\n  border-collapse: separate;\n}\n:host .table thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .table tr {\n  cursor: pointer;\n}\n:host .table tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L2JhbmstdGFiL2JhbmstdGFiLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdGFmZi9saXN0LXN0YWZmL2NvbXBvbmVudC9iYW5rLXRhYi9iYW5rLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0ROO0FES0U7RUFDRSxlQUFBO0FDSEo7QURNRTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQ0pKO0FET0U7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDTEo7QURRTTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDTlI7QURVSTtFQUNFLGVBQUE7QUNSTjtBRFVNO0VBQ0UsMkJBQUE7QUNSUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L2JhbmstdGFiL2JhbmstdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBhIHtcbiAgICAmLmRpYWJsZWQge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLnJvdyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xuICB9XG5cbiAgLnRhYmxlIHtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuXG4gICAgdGhlYWQge1xuICAgICAgdGgge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJi5pcy1zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IGEuZGlhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG46aG9zdCAucm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gODVweCk7XG59XG46aG9zdCAudGFibGUge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cbjpob3N0IC50YWJsZSB0aGVhZCB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG46aG9zdCAudGFibGUgdHIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAudGFibGUgdHIuaXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/bank-tab/bank-tab.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/bank-tab/bank-tab.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BankTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankTabComponent", function() { return BankTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _bank_modal_bank_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bank-modal/bank-modal.component */ "./src/app/pages/staff/list-staff/component/bank-modal/bank-modal.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let BankTabComponent = class BankTabComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedBank = null;
    }
    ngOnInit() { }
    ngOnChanges() {
        if (!this.staffId)
            this.selectedBank = null;
        if (this.selectedBank)
            this.selectedBank = this.listBank.filter((item) => item.stb_id === this.selectedBank.stb_id)[0];
    }
    onClickBank(bank) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.selectedBank)) {
            this.selectedBank = bank;
        }
        else {
            if (this.selectedBank.stb_id !== bank.stb_id) {
                this.selectedBank = bank;
            }
            else {
                this.selectedBank = null;
            }
        }
    }
    openBankModal(bank) {
        const modalRef = this.modalService.open(_bank_modal_bank_modal_component__WEBPACK_IMPORTED_MODULE_3__["BankModalComponent"], {
            centered: true,
        });
        modalRef.componentInstance.staffId = this.staffId;
        modalRef.componentInstance.listBank = this.listBank;
        if (bank) {
            modalRef.componentInstance.bank = bank;
        }
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                if (bank) {
                    this._updateBank(res.data);
                }
                else {
                    this._createBank(res.data);
                }
            }
            modalRef.close();
        });
    }
    openConfirmModal(bank) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Chắc chắn muốn xóa khóa tài khoản ngân hàng đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this._removeBank(bank);
            }
        });
    }
    _createBank(data) {
        const updatedList = this.listBank.concat(data);
        this.formSubmit.emit(updatedList);
    }
    _updateBank(updated) {
        const updatedList = this.listBank.map((item) => {
            if (item.stb_id !== updated.stb_id)
                return item;
            return updated;
        });
        this.formSubmit.emit(updatedList);
    }
    _removeBank(bank) {
        const updatedList = this.listBank.filter((item) => item.stb_id !== bank.stb_id);
        this.formSubmit.emit(updatedList);
    }
};
BankTabComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], BankTabComponent.prototype, "listBank", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BankTabComponent.prototype, "staffId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], BankTabComponent.prototype, "formSubmit", void 0);
BankTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bank-tab',
        template: __webpack_require__(/*! raw-loader!./bank-tab.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/bank-tab/bank-tab.component.html"),
        styles: [__webpack_require__(/*! ./bank-tab.component.scss */ "./src/app/pages/staff/list-staff/component/bank-tab/bank-tab.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], BankTabComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/bonus-modal/bonus-modal.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/bonus-modal/bonus-modal.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host span {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L2JvbnVzLW1vZGFsL2JvbnVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdGFmZi9saXN0LXN0YWZmL2NvbXBvbmVudC9ib251cy1tb2RhbC9ib251cy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L2JvbnVzLW1vZGFsL2JvbnVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBzcGFuIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG59XG4iLCI6aG9zdCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/bonus-modal/bonus-modal.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/bonus-modal/bonus-modal.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BonusModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusModalComponent", function() { return BonusModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);







let BonusModalComponent = class BonusModalComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
        this.initializeForm();
    }
    ngOnInit() {
        if (this.bonus) {
            this.patchData(this.bonus);
        }
    }
    onClickSubmit() {
        this.submitted = true;
        if (this.form.value.bos_title.trim() === '')
            return this.form.controls['bos_title'].setErrors({ required: true });
        if (this.form.value.bos_content.trim() === '')
            return this.form.controls['bos_content'].setErrors({ required: true });
        if (this.form.value.bos_value.trim() === '')
            return this.form.controls['bos_value'].setErrors({ required: true });
        if (this.form.value.bos_reason.trim() === '')
            return this.form.controls['bos_reason'].setErrors({ required: true });
        if (this.form.valid) {
            const data = this.form.value;
            data.bos_time = this._convertNgbDateToDate(data.bos_time);
            this.passEvent.emit({ event: true, data });
        }
    }
    onClickCancel() {
        if (this.form.dirty) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Có',
                cancelButtonText: 'Không',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            }).then((result) => {
                if (result.value) {
                    this.passEvent.emit({ event: false });
                }
            });
        }
        else {
            this.passEvent.emit({ event: false });
        }
    }
    get formUI() {
        return this.form.controls;
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            bos_id: ['temp_0', null],
            bos_content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            bos_title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            bos_note: ['', null],
            bos_type: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            bos_value: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            bos_time: [this._convertDateToNgbDate(new Date()), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            bos_reason: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    patchData(bonus) {
        this.form.patchValue({
            bos_id: bonus.bos_id,
            bos_content: bonus.bos_content,
            bos_title: bonus.bos_title,
            bos_note: bonus.bos_note,
            bos_type: bonus.bos_type,
            bos_value: bonus.bos_value,
            bos_time: this._convertDateToNgbDate(bonus.bos_time),
            bos_reason: bonus.bos_reason,
        });
    }
    _convertDateToNgbDate(date) {
        if (!date) {
            return null;
        }
        const year = moment__WEBPACK_IMPORTED_MODULE_4__(date).year();
        const month = moment__WEBPACK_IMPORTED_MODULE_4__(date).month() + 1;
        const day = moment__WEBPACK_IMPORTED_MODULE_4__(date).date();
        return new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDate"](year, month, day);
    }
    _convertNgbDateToDate(ngbDate) {
        if (!ngbDate) {
            return '';
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(ngbDate.year))
            return ngbDate;
        const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
        return moment__WEBPACK_IMPORTED_MODULE_4__(newDate).format();
    }
};
BonusModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BonusModalComponent.prototype, "bonus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], BonusModalComponent.prototype, "passEvent", void 0);
BonusModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bonus-modal',
        template: __webpack_require__(/*! raw-loader!./bonus-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/bonus-modal/bonus-modal.component.html"),
        styles: [__webpack_require__(/*! ./bonus-modal.component.scss */ "./src/app/pages/staff/list-staff/component/bonus-modal/bonus-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], BonusModalComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/bonus-tab/bonus-tab.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/bonus-tab/bonus-tab.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host a.diabled {\n  cursor: default;\n  pointer-events: none;\n}\n:host .row {\n  margin-right: 0;\n}\n:host .table-responsive {\n  overflow: auto;\n  max-height: calc(100% - 85px);\n}\n:host .table {\n  border-spacing: 0;\n  border-collapse: separate;\n}\n:host .table thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .table tr {\n  cursor: pointer;\n}\n:host .table tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L2JvbnVzLXRhYi9ib251cy10YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L2JvbnVzLXRhYi9ib251cy10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUNETjtBREtFO0VBQ0UsZUFBQTtBQ0hKO0FETUU7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUNKSjtBRE9FO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ0xKO0FEUU07RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ05SO0FEU0k7RUFDRSxlQUFBO0FDUE47QURTTTtFQUNFLDJCQUFBO0FDUFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGFmZi9saXN0LXN0YWZmL2NvbXBvbmVudC9ib251cy10YWIvYm9udXMtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBhIHtcbiAgICAmLmRpYWJsZWQge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLnJvdyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xuICB9XG5cbiAgLnRhYmxlIHtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuXG4gICAgdGhlYWQge1xuICAgICAgdGgge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgICB0ciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCBhLmRpYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuOmhvc3QgLnJvdyB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xufVxuOmhvc3QgLnRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG59XG46aG9zdCAudGFibGUgdGhlYWQgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLnRhYmxlIHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLnRhYmxlIHRyLmlzLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/bonus-tab/bonus-tab.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/bonus-tab/bonus-tab.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BonusTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusTabComponent", function() { return BonusTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _bonus_modal_bonus_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bonus-modal/bonus-modal.component */ "./src/app/pages/staff/list-staff/component/bonus-modal/bonus-modal.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let BonusTabComponent = class BonusTabComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedBonus = null;
    }
    ngOnInit() { }
    ngOnChanges() {
        if (!this.staffId)
            this.selectedBonus = null;
        if (this.selectedBonus)
            this.selectedBonus = this.listBonus.filter((item) => item.bos_id === this.selectedBonus.bos_id)[0];
    }
    onClickBonus(bonus) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.selectedBonus)) {
            this.selectedBonus = bonus;
        }
        else {
            if (this.selectedBonus.bos_id !== bonus.bos_id) {
                this.selectedBonus = bonus;
            }
            else {
                this.selectedBonus = null;
            }
        }
    }
    openBonusModal(bonus) {
        const modalRef = this.modalService.open(_bonus_modal_bonus_modal_component__WEBPACK_IMPORTED_MODULE_3__["BonusModalComponent"], {
            centered: true,
        });
        modalRef.componentInstance.staffId = this.staffId;
        if (bonus) {
            modalRef.componentInstance.bonus = bonus;
        }
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                if (bonus) {
                    this._updateBonus(res.data);
                }
                else {
                    this._createBonus(res.data);
                }
            }
            modalRef.close();
        });
    }
    openConfirmModal(bonus) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Chắc chắn muốn xóa đối tượng đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this._removeBonus(bonus);
            }
        });
    }
    _createBonus(data) {
        const updatedList = this.listBonus.concat(data);
        this.formSubmit.emit(updatedList);
    }
    _updateBonus(updated) {
        const updatedList = this.listBonus.map((item) => {
            if (item.bos_id !== updated.bos_id)
                return item;
            return updated;
        });
        this.formSubmit.emit(updatedList);
    }
    _removeBonus(bonus) {
        const updatedList = this.listBonus.filter((item) => item.bos_id !== bonus.bos_id);
        this.formSubmit.emit(updatedList);
    }
};
BonusTabComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], BonusTabComponent.prototype, "listBonus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BonusTabComponent.prototype, "staffId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], BonusTabComponent.prototype, "formSubmit", void 0);
BonusTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bonus-tab',
        template: __webpack_require__(/*! raw-loader!./bonus-tab.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/bonus-tab/bonus-tab.component.html"),
        styles: [__webpack_require__(/*! ./bonus-tab.component.scss */ "./src/app/pages/staff/list-staff/component/bonus-tab/bonus-tab.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], BonusTabComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/identity-card-tab/identity-card-tab.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/identity-card-tab/identity-card-tab.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L2lkZW50aXR5LWNhcmQtdGFiL2lkZW50aXR5LWNhcmQtdGFiLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/identity-card-tab/identity-card-tab.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/identity-card-tab/identity-card-tab.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: IdentityCardTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityCardTabComponent", function() { return IdentityCardTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IdentityCardTabComponent = class IdentityCardTabComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IdentityCardTabComponent.prototype, "identity_card", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IdentityCardTabComponent.prototype, "identity_card_date", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IdentityCardTabComponent.prototype, "identity_card_date_end", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IdentityCardTabComponent.prototype, "identity_card_location", void 0);
IdentityCardTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-identity-card-tab',
        template: __webpack_require__(/*! raw-loader!./identity-card-tab.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/identity-card-tab/identity-card-tab.component.html"),
        styles: [__webpack_require__(/*! ./identity-card-tab.component.scss */ "./src/app/pages/staff/list-staff/component/identity-card-tab/identity-card-tab.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IdentityCardTabComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/relative-modal/relative-modal.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/relative-modal/relative-modal.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host span {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L3JlbGF0aXZlLW1vZGFsL3JlbGF0aXZlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdGFmZi9saXN0LXN0YWZmL2NvbXBvbmVudC9yZWxhdGl2ZS1tb2RhbC9yZWxhdGl2ZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L3JlbGF0aXZlLW1vZGFsL3JlbGF0aXZlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBzcGFuIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG59XG4iLCI6aG9zdCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/relative-modal/relative-modal.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/relative-modal/relative-modal.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RelativeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeModalComponent", function() { return RelativeModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let RelativeModalComponent = class RelativeModalComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
        this.initializeForm();
    }
    ngOnInit() {
        if (this.relative) {
            this.patchData(this.relative);
        }
    }
    onClickSubmit() {
        this.submitted = true;
        if (this.form.value.rels_fullname.trim() === '')
            return this.form.controls['rels_fullname'].setErrors({ required: true });
        if (this.form.value.rels_relatives.trim() === '')
            return this.form.controls['rels_relatives'].setErrors({ required: true });
        if (this.form.value.rels_phone.trim() === '')
            return this.form.controls['rels_phone'].setErrors({ required: true });
        if (this.form.value.rels_address.trim() === '')
            return this.form.controls['rels_address'].setErrors({ required: true });
        let isConflict = false;
        this.listRelative.forEach((item) => {
            if (item.rels_phone.trim() === this.form.value.rels_phone.trim())
                isConflict = true;
        });
        if (isConflict)
            this._notify(false, 'Số điện thoại đã tồn tại');
        if (this.form.valid && !isConflict) {
            const data = this.form.value;
            this.passEvent.emit({ event: true, data });
        }
    }
    onClickCancel() {
        if (this.form.dirty) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Có',
                cancelButtonText: 'Không',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            }).then((result) => {
                if (result.value) {
                    this.passEvent.emit({ event: false });
                }
            });
        }
        else {
            this.passEvent.emit({ event: false });
        }
    }
    get formUI() {
        return this.form.controls;
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            rels_id: ['temp_0', null],
            rels_fullname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rels_relatives: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rels_phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d+$/)]],
            rels_address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    patchData(relative) {
        this.form.patchValue({
            rels_id: relative.rels_id,
            rels_fullname: relative.rels_fullname,
            rels_relatives: relative.rels_relatives,
            rels_phone: relative.rels_phone,
            rels_address: relative.rels_address,
        });
    }
    _notify(isSuccess, message) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            toast: true,
            position: 'top-end',
            type: isSuccess ? 'success' : 'error',
            title: message,
            showConfirmButton: false,
            timer: 2000,
        });
    }
};
RelativeModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RelativeModalComponent.prototype, "relative", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RelativeModalComponent.prototype, "listRelative", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], RelativeModalComponent.prototype, "passEvent", void 0);
RelativeModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-relative-modal',
        template: __webpack_require__(/*! raw-loader!./relative-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/relative-modal/relative-modal.component.html"),
        styles: [__webpack_require__(/*! ./relative-modal.component.scss */ "./src/app/pages/staff/list-staff/component/relative-modal/relative-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], RelativeModalComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/relative-tab/relative-tab.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/relative-tab/relative-tab.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host a.diabled {\n  cursor: default;\n  pointer-events: none;\n}\n:host .row {\n  margin-right: 0;\n}\n:host .table-responsive {\n  overflow: auto;\n  max-height: calc(100% - 85px);\n}\n:host .table {\n  border-spacing: 0;\n  border-collapse: separate;\n}\n:host .table thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .table tr {\n  cursor: pointer;\n}\n:host .table tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L3JlbGF0aXZlLXRhYi9yZWxhdGl2ZS10YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L3JlbGF0aXZlLXRhYi9yZWxhdGl2ZS10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUNETjtBREtFO0VBQ0UsZUFBQTtBQ0hKO0FETUU7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUNKSjtBRE9FO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ0xKO0FEUU07RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ05SO0FEU0k7RUFDRSxlQUFBO0FDUE47QURTTTtFQUNFLDJCQUFBO0FDUFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGFmZi9saXN0LXN0YWZmL2NvbXBvbmVudC9yZWxhdGl2ZS10YWIvcmVsYXRpdmUtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBhIHtcbiAgICAmLmRpYWJsZWQge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLnJvdyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xuICB9XG5cbiAgLnRhYmxlIHtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuXG4gICAgdGhlYWQge1xuICAgICAgdGgge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgICB0ciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCBhLmRpYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuOmhvc3QgLnJvdyB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xufVxuOmhvc3QgLnRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG59XG46aG9zdCAudGFibGUgdGhlYWQgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLnRhYmxlIHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLnRhYmxlIHRyLmlzLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/relative-tab/relative-tab.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/relative-tab/relative-tab.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RelativeTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeTabComponent", function() { return RelativeTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _relative_modal_relative_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../relative-modal/relative-modal.component */ "./src/app/pages/staff/list-staff/component/relative-modal/relative-modal.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let RelativeTabComponent = class RelativeTabComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedRelative = null;
    }
    ngOnInit() { }
    ngOnChanges() {
        if (!this.staffId)
            this.selectedRelative = null;
        if (this.selectedRelative)
            this.selectedRelative = this.listRelative.filter((item) => item.rels_id === this.selectedRelative.rels_id)[0];
    }
    onClickRelative(relative) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.selectedRelative)) {
            this.selectedRelative = relative;
        }
        else {
            if (this.selectedRelative.rels_id !== relative.rels_id) {
                this.selectedRelative = relative;
            }
            else {
                this.selectedRelative = null;
            }
        }
    }
    openRelativeModal(relative) {
        const modalRef = this.modalService.open(_relative_modal_relative_modal_component__WEBPACK_IMPORTED_MODULE_3__["RelativeModalComponent"], {
            centered: true,
        });
        modalRef.componentInstance.staffId = this.staffId;
        modalRef.componentInstance.listRelative = this.listRelative;
        if (relative) {
            modalRef.componentInstance.relative = relative;
        }
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                if (relative) {
                    this._updateRelative(res.data);
                }
                else {
                    this._createRelative(res.data);
                }
            }
            modalRef.close();
        });
    }
    openConfirmModal(relative) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Chắc chắn muốn xóa quan hệ gia đình đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this._removeRelative(relative);
            }
        });
    }
    _createRelative(data) {
        const updatedList = this.listRelative.concat(data);
        this.formSubmit.emit(updatedList);
    }
    _updateRelative(updated) {
        const updatedList = this.listRelative.map((item) => {
            if (item.rels_id !== updated.rels_id)
                return item;
            return updated;
        });
        this.formSubmit.emit(updatedList);
    }
    _removeRelative(relative) {
        const updatedList = this.listRelative.filter((item) => item.rels_id !== relative.rels_id);
        this.formSubmit.emit(updatedList);
    }
};
RelativeTabComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], RelativeTabComponent.prototype, "listRelative", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RelativeTabComponent.prototype, "staffId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], RelativeTabComponent.prototype, "formSubmit", void 0);
RelativeTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-relative-tab',
        template: __webpack_require__(/*! raw-loader!./relative-tab.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/relative-tab/relative-tab.component.html"),
        styles: [__webpack_require__(/*! ./relative-tab.component.scss */ "./src/app/pages/staff/list-staff/component/relative-tab/relative-tab.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], RelativeTabComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/training-modal/training-modal.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/training-modal/training-modal.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host span {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L3RyYWluaW5nLW1vZGFsL3RyYWluaW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdGFmZi9saXN0LXN0YWZmL2NvbXBvbmVudC90cmFpbmluZy1tb2RhbC90cmFpbmluZy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L3RyYWluaW5nLW1vZGFsL3RyYWluaW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBzcGFuIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG59XG4iLCI6aG9zdCBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/training-modal/training-modal.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/training-modal/training-modal.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TrainingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingModalComponent", function() { return TrainingModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);







let TrainingModalComponent = class TrainingModalComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
        this.initializeForm();
    }
    ngOnInit() {
        if (this.training) {
            this.patchData(this.training);
        }
    }
    onClickSubmit() {
        this.submitted = true;
        if (this.form.value.tn_name.trim() === '')
            return this.form.controls['tn_name'].setErrors({ required: true });
        if (this.form.value.tn_content.trim() === '')
            return this.form.controls['tn_content'].setErrors({ required: true });
        if (this.form.valid) {
            const data = this.form.value;
            console.log(data);
            data.tn_start_date = this._convertNgbDateToDate(data.tn_start_date);
            data.tn_end_date = this._convertNgbDateToDate(data.tn_end_date);
            this.passEvent.emit({ event: true, data });
        }
    }
    onChangeEvaluate(event) {
        console.log(event.target.value);
        const evaluate = event.target.value;
        if (evaluate === 1 || evaluate === '1')
            this.form.patchValue({
                ts_evaluate_name: 'Tốt',
            });
        if (evaluate === 2 || evaluate === '2')
            this.form.patchValue({
                ts_evaluate_name: 'Khá',
            });
        if (evaluate === 3 || evaluate === '3')
            this.form.patchValue({
                ts_evaluate_name: 'Trung bình',
            });
        if (evaluate === 4 || evaluate === '4')
            this.form.patchValue({
                ts_evaluate_name: 'Yếu',
            });
    }
    onClickCancel() {
        if (this.form.dirty) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Có',
                cancelButtonText: 'Không',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            }).then((result) => {
                if (result.value) {
                    this.passEvent.emit({ event: false });
                }
            });
        }
        else {
            this.passEvent.emit({ event: false });
        }
    }
    get formUI() {
        return this.form.controls;
    }
    initializeForm() {
        this.form = this.formBuilder.group({
            tn_id: ['temp_0', null],
            tn_code: [null, null],
            tn_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tn_content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tn_start_date: [this._convertDateToNgbDate(new Date()), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tn_end_date: [this._convertDateToNgbDate(new Date()), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tn_purpose: ['', null],
            ts_evaluate: ['', null],
            ts_evaluate_name: ['', null],
        });
    }
    patchData(training) {
        this.form.patchValue({
            tn_id: training.tn_id,
            tn_code: training.tn_code,
            tn_name: training.tn_name,
            tn_content: training.tn_content,
            tn_start_date: this._convertDateToNgbDate(training.tn_start_date),
            tn_end_date: this._convertDateToNgbDate(training.tn_end_date),
            tn_purpose: training.tn_purpose,
            ts_evaluate: training.ts_evaluate,
            ts_evaluate_name: training.ts_evaluate_name,
        });
    }
    _convertDateToNgbDate(date) {
        if (!date) {
            return null;
        }
        const year = moment__WEBPACK_IMPORTED_MODULE_4__(date).year();
        const month = moment__WEBPACK_IMPORTED_MODULE_4__(date).month() + 1;
        const day = moment__WEBPACK_IMPORTED_MODULE_4__(date).date();
        return new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDate"](year, month, day);
    }
    _convertNgbDateToDate(ngbDate) {
        if (!ngbDate) {
            return '';
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(ngbDate.year))
            return ngbDate;
        const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
        return moment__WEBPACK_IMPORTED_MODULE_4__(newDate).format();
    }
};
TrainingModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TrainingModalComponent.prototype, "training", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TrainingModalComponent.prototype, "fromList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TrainingModalComponent.prototype, "passEvent", void 0);
TrainingModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-training-modal',
        template: __webpack_require__(/*! raw-loader!./training-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/training-modal/training-modal.component.html"),
        styles: [__webpack_require__(/*! ./training-modal.component.scss */ "./src/app/pages/staff/list-staff/component/training-modal/training-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], TrainingModalComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/training-tab/training-tab.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/training-tab/training-tab.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host a.diabled {\n  cursor: default;\n  pointer-events: none;\n}\n:host .row {\n  margin-right: 0;\n}\n:host .table-responsive {\n  overflow: auto;\n  max-height: calc(100% - 85px);\n}\n:host .table {\n  border-spacing: 0;\n  border-collapse: separate;\n}\n:host .table thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .table tr {\n  cursor: pointer;\n}\n:host .table tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L3RyYWluaW5nLXRhYi90cmFpbmluZy10YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L3RyYWluaW5nLXRhYi90cmFpbmluZy10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUNETjtBREtFO0VBQ0UsZUFBQTtBQ0hKO0FETUU7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUNKSjtBRE9FO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ0xKO0FEUU07RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ05SO0FEU0k7RUFDRSxlQUFBO0FDUE47QURTTTtFQUNFLDJCQUFBO0FDUFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGFmZi9saXN0LXN0YWZmL2NvbXBvbmVudC90cmFpbmluZy10YWIvdHJhaW5pbmctdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBhIHtcbiAgICAmLmRpYWJsZWQge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLnJvdyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xuICB9XG5cbiAgLnRhYmxlIHtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuXG4gICAgdGhlYWQge1xuICAgICAgdGgge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgICB0ciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCBhLmRpYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuOmhvc3QgLnJvdyB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xufVxuOmhvc3QgLnRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG59XG46aG9zdCAudGFibGUgdGhlYWQgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLnRhYmxlIHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLnRhYmxlIHRyLmlzLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/training-tab/training-tab.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/training-tab/training-tab.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TrainingTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingTabComponent", function() { return TrainingTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _training_modal_training_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../training-modal/training-modal.component */ "./src/app/pages/staff/list-staff/component/training-modal/training-modal.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let TrainingTabComponent = class TrainingTabComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedTraining = null;
    }
    ngOnInit() { }
    ngOnChanges() {
        if (!this.staffId)
            this.selectedTraining = null;
        if (this.selectedTraining)
            this.selectedTraining = this.listTraining.filter((item) => item.tn_id === this.selectedTraining.tn_id)[0];
    }
    onClickTraining(training) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.selectedTraining)) {
            this.selectedTraining = training;
        }
        else {
            if (this.selectedTraining.tn_id !== training.tn_id) {
                this.selectedTraining = training;
            }
            else {
                this.selectedTraining = null;
            }
        }
    }
    openTrainingModal(training) {
        const modalRef = this.modalService.open(_training_modal_training_modal_component__WEBPACK_IMPORTED_MODULE_3__["TrainingModalComponent"], {
            centered: true,
        });
        modalRef.componentInstance.staffId = this.staffId;
        if (training) {
            modalRef.componentInstance.training = training;
        }
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                if (training) {
                    this._updateTraining(res.data);
                }
                else {
                    this._createTraining(res.data);
                }
            }
            modalRef.close();
        });
    }
    openConfirmModal(training) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Chắc chắn muốn xóa khóa đào tạo đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this._removeTraining(training);
            }
        });
    }
    _createTraining(data) {
        const updatedList = this.listTraining.concat(data);
        this.formSubmit.emit(updatedList);
    }
    _updateTraining(updated) {
        const updatedList = this.listTraining.map((item) => {
            if (item.tn_id !== updated.tn_id)
                return item;
            return updated;
        });
        this.formSubmit.emit(updatedList);
    }
    _removeTraining(training) {
        const updatedList = this.listTraining.filter((item) => item.tn_id !== training.tn_id);
        this.formSubmit.emit(updatedList);
    }
};
TrainingTabComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TrainingTabComponent.prototype, "listTraining", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TrainingTabComponent.prototype, "staffId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TrainingTabComponent.prototype, "formSubmit", void 0);
TrainingTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-training-tab',
        template: __webpack_require__(/*! raw-loader!./training-tab.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/training-tab/training-tab.component.html"),
        styles: [__webpack_require__(/*! ./training-tab.component.scss */ "./src/app/pages/staff/list-staff/component/training-tab/training-tab.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], TrainingTabComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/undertaken-location-tab/undertaken-location-tab.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/undertaken-location-tab/undertaken-location-tab.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host a.diabled {\n  cursor: default;\n  pointer-events: none;\n}\n:host .row {\n  margin-right: 0;\n}\n:host .table-responsive {\n  overflow: auto;\n  max-height: calc(100% - 85px);\n}\n:host .table {\n  border-collapse: separate;\n  border-spacing: 0;\n}\n:host .table thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .table tr {\n  cursor: pointer;\n}\n:host .table tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L3VuZGVydGFrZW4tbG9jYXRpb24tdGFiL3VuZGVydGFrZW4tbG9jYXRpb24tdGFiLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdGFmZi9saXN0LXN0YWZmL2NvbXBvbmVudC91bmRlcnRha2VuLWxvY2F0aW9uLXRhYi91bmRlcnRha2VuLWxvY2F0aW9uLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0ROO0FES0U7RUFDRSxlQUFBO0FDSEo7QURNRTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQ0pKO0FET0U7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDTEo7QURPTTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDTFI7QURRSTtFQUNFLGVBQUE7QUNOTjtBRFFNO0VBQ0UsMkJBQUE7QUNOUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvY29tcG9uZW50L3VuZGVydGFrZW4tbG9jYXRpb24tdGFiL3VuZGVydGFrZW4tbG9jYXRpb24tdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBhIHtcbiAgICAmLmRpYWJsZWQge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLnJvdyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xuICB9XG5cbiAgLnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIHRoZWFkIHtcbiAgICAgIHRoIHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdHIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmLmlzLXNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgYS5kaWFibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbjpob3N0IC5yb3cge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG46aG9zdCAudGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA4NXB4KTtcbn1cbjpob3N0IC50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuOmhvc3QgLnRhYmxlIHRoZWFkIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IC50YWJsZSB0ciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC50YWJsZSB0ci5pcy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/component/undertaken-location-tab/undertaken-location-tab.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/component/undertaken-location-tab/undertaken-location-tab.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: UndertakenLocationTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndertakenLocationTabComponent", function() { return UndertakenLocationTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _address_modal_address_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../address-modal/address-modal.component */ "./src/app/pages/staff/list-staff/component/address-modal/address-modal.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let UndertakenLocationTabComponent = class UndertakenLocationTabComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedAddress = null;
    }
    ngOnInit() { }
    ngOnChanges() {
        if (this.staffId)
            this.selectedAddress = null;
        if (this.selectedAddress)
            this.selectedAddress = this.listAddress.filter((item) => item.unl_id === this.selectedAddress.unl_id)[0];
    }
    onClickAddress(address) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.selectedAddress)) {
            this.selectedAddress = address;
        }
        else {
            if (this.selectedAddress.unl_id !== address.unl_id) {
                this.selectedAddress = address;
            }
            else {
                this.selectedAddress = null;
            }
        }
    }
    openAddressModal(address) {
        const modalRef = this.modalService.open(_address_modal_address_modal_component__WEBPACK_IMPORTED_MODULE_3__["AddressModalComponent"], {
            centered: true,
        });
        modalRef.componentInstance.listAddress = this.listAddress;
        if (address) {
            modalRef.componentInstance.address = address;
        }
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                if (address) {
                    this._updateAddress(res.form);
                }
                else {
                    this._createAddress(res.form);
                }
            }
            modalRef.close();
        });
    }
    openConfirmModal(address) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Chắc chắn muốn xóa địa chỉ đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this._removeAddress(address);
            }
        });
    }
    _createAddress(data) {
        const updatedList = this.listAddress.concat(data);
        this.formSubmit.emit(updatedList);
    }
    _updateAddress(updated) {
        const updatedList = this.listAddress.map((item) => {
            if (item.unl_id !== updated.unl_id)
                return item;
            return updated;
        });
        this.formSubmit.emit(updatedList);
    }
    _removeAddress(address) {
        const updatedList = this.listAddress.filter((item) => item.unl_id !== address.unl_id);
        this.formSubmit.emit(updatedList);
    }
};
UndertakenLocationTabComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], UndertakenLocationTabComponent.prototype, "listAddress", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UndertakenLocationTabComponent.prototype, "staffId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], UndertakenLocationTabComponent.prototype, "formSubmit", void 0);
UndertakenLocationTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-undertaken-location-tab',
        template: __webpack_require__(/*! raw-loader!./undertaken-location-tab.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/component/undertaken-location-tab/undertaken-location-tab.component.html"),
        styles: [__webpack_require__(/*! ./undertaken-location-tab.component.scss */ "./src/app/pages/staff/list-staff/component/undertaken-location-tab/undertaken-location-tab.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], UndertakenLocationTabComponent);



/***/ }),

/***/ "./src/app/pages/staff/list-staff/list-staff.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/list-staff.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .card-body {\n  padding: 0;\n  padding-top: 10px;\n}\n:host .form-inline {\n  align-items: baseline;\n}\n:host a.diabled {\n  cursor: default;\n  pointer-events: none;\n}\n:host .table-responsive {\n  overflow: auto;\n  max-height: calc(100% - 150px);\n}\n:host .table-responsive table {\n  min-width: 1300px;\n  border-spacing: 0;\n  border-collapse: separate;\n}\n:host .table-responsive thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .table-responsive tr {\n  cursor: pointer;\n}\n:host .table-responsive tr.is-selected {\n  background-color: lightgray;\n}\n:host ::ng-deep .tab-content {\n  height: calc(100% - 30px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvbGlzdC1zdGFmZi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RhZmYvbGlzdC1zdGFmZi9saXN0LXN0YWZmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDQUo7QURHRTtFQUNFLHFCQUFBO0FDREo7QURLSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0hOO0FET0U7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7QUNMSjtBRE9JO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDTE47QURTTTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDUFI7QURXSTtFQUNFLGVBQUE7QUNUTjtBRFdNO0VBQ0UsMkJBQUE7QUNUUjtBRGNFO0VBQ0UseUJBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YWZmL2xpc3Qtc3RhZmYvbGlzdC1zdGFmZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuXG4gIC5mb3JtLWlubGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICB9XG5cbiAgYSB7XG4gICAgJi5kaWFibGVkIHtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNTBweCk7XG5cbiAgICB0YWJsZSB7XG4gICAgICBtaW4td2lkdGg6IDEzMDBweDtcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICB9XG5cbiAgICB0aGVhZCB7XG4gICAgICB0aCB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmLmlzLXNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIDo6bmctZGVlcCAudGFiLWNvbnRlbnQge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XG4gIH1cbn1cbiIsIjpob3N0IC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbjpob3N0IC5mb3JtLWlubGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbjpob3N0IGEuZGlhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG46aG9zdCAudGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNTBweCk7XG59XG46aG9zdCAudGFibGUtcmVzcG9uc2l2ZSB0YWJsZSB7XG4gIG1pbi13aWR0aDogMTMwMHB4O1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHRoZWFkIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUgdHIuaXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRhYi1jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/staff/list-staff/list-staff.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/staff/list-staff/list-staff.component.ts ***!
  \****************************************************************/
/*! exports provided: ListStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStaffComponent", function() { return ListStaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/api/staff.service */ "./src/app/core/services/api/staff.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);










let ListStaffComponent = class ListStaffComponent {
    constructor(modalService, staffService, router) {
        this.modalService = modalService;
        this.staffService = staffService;
        this.router = router;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.textSearch = '';
        this.statusSearch = '';
        this.workingStatusSearch = '';
        this.fromDate = this._convertDateToNgbDate(new Date('2010-01-01'));
        this.toDate = this._convertDateToNgbDate(new Date());
        this.page = 1;
        this.pageSize = 10;
        this.totalSize = 0;
        this.selectedStaff = null;
    }
    ngOnInit() {
        this._fetchData();
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    onClickStaff(staff) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(this.selectedStaff)) {
            this.selectedStaff = staff;
        }
        else {
            if (this.selectedStaff.sta_id !== staff.sta_id) {
                this.selectedStaff = staff;
            }
            else {
                this.selectedStaff = null;
            }
        }
    }
    onRouteDetail(staff) {
        this.router.navigate(['/staff/list-staff-detail', staff ? staff.sta_id : '']);
    }
    openConfirmModal(staff) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: 'Chắc chắn muốn xóa nhân sự đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this._removeStaff(staff);
            }
        });
    }
    onPageChange(page) {
        this.page = page;
        this._fetchData();
    }
    onChangeFilter() {
        this._fetchData(this.selectedStaff);
    }
    onChangeAddress(event) {
        var updated = this.selectedStaff;
        updated.list_undertaken_location = event;
        this._updateStaff(updated);
    }
    onChangeTraining(event) {
        var updated = this.selectedStaff;
        updated.list_training = event;
        this._updateStaff(updated);
    }
    onChangeBank(event) {
        var updated = this.selectedStaff;
        updated.list_bank = event;
        this._updateStaff(updated);
    }
    onChangeRelative(event) {
        var updated = this.selectedStaff;
        updated.list_relatives = event;
        this._updateStaff(updated);
    }
    onChangeBonus(event) {
        var updated = this.selectedStaff;
        updated.list_bonus = event;
        this._updateStaff(updated);
    }
    onChangeAttachment(event) {
        var updated = this.selectedStaff;
        updated.list_attachments = event;
        this._updateStaff(updated);
    }
    setFile(event) {
        let files = event.srcElement.files;
        if (!files) {
            return;
        }
        const import$ = this.staffService.importStaff(files[0]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        import$.subscribe((res) => {
            if (res && res.Code == 200) {
                this._notify(true, res.Message);
                this._fetchData();
            }
            else
                this._notify(false, res.Message);
        }, (e) => this._notify(false, e.Message));
    }
    exportStaff() {
        const export$ = this.staffService
            .exportStaff({
            pageNumber: this.page - 1,
            pageSize: this.pageSize,
            name: this.textSearch,
            status: this.statusSearch,
            sta_working_status: this.workingStatusSearch,
            start_date: this._convertNgbDateToDate(this.fromDate),
            end_date: this._convertNgbDateToDate(this.toDate),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        export$.subscribe((res) => {
            if (res && res.Data) {
                const link = 'http://27.72.147.222:1230/' + res.Data;
                window.open(link);
            }
        });
    }
    exportTemplate() {
        const export$ = this.staffService.exportTemplate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        export$.subscribe((res) => {
            if (res && res.Data) {
                const link = 'http://27.72.147.222:1230/' + res.Data;
                window.open(link);
            }
        });
    }
    _fetchData(selected) {
        const staff$ = this.staffService
            .searchStaff({
            pageNumber: this.page - 1,
            pageSize: this.pageSize,
            name: this.textSearch,
            status: this.statusSearch,
            sta_working_status: this.workingStatusSearch,
            start_date: this._convertNgbDateToDate(this.fromDate),
            end_date: this._convertNgbDateToDate(this.toDate),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        staff$.subscribe((res) => {
            if (res) {
                this.totalSize = res.Data.TotalNumberOfRecords;
                this.staffs = res.Data.Results;
                if (selected) {
                    this.selectedStaff = this.staffs.find((item) => item.sta_id === selected.sta_id);
                }
                else {
                    this.selectedStaff = this.staffs[0];
                }
            }
        });
    }
    _updateStaff(updated) {
        const updateStaff$ = this.staffService.updateStaff(updated).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        updateStaff$.subscribe((res) => {
            if (res && res.Code === 200) {
                this._notify(true, res.Message);
                this._fetchData(this.selectedStaff);
                this.modalService.dismissAll();
            }
            else
                this._notify(false, res.Message);
        }, (e) => this._notify(false, e.Message));
    }
    _removeStaff(staff) {
        const removeStaff$ = this.staffService
            .removeStaff({ staffId: staff.sta_id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        removeStaff$.subscribe((res) => {
            if (res && res.Code == 200) {
                this._notify(true, res.Message);
                this._fetchData();
                this.modalService.dismissAll();
            }
            else
                this._notify(false, res.Message);
        }, (e) => this._notify(false, e.Message));
    }
    _notify(isSuccess, message) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            toast: true,
            position: 'top-end',
            type: isSuccess ? 'success' : 'error',
            title: message,
            showConfirmButton: false,
            timer: 2000,
        });
    }
    _convertDateToNgbDate(date) {
        if (!date) {
            return null;
        }
        const year = moment__WEBPACK_IMPORTED_MODULE_8__(date).year();
        const month = moment__WEBPACK_IMPORTED_MODULE_8__(date).month() + 1;
        const day = moment__WEBPACK_IMPORTED_MODULE_8__(date).date();
        return new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"](year, month, day);
    }
    _convertNgbDateToDate(ngbDate) {
        if (!ngbDate) {
            return '';
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_7__["isUndefined"])(ngbDate.year))
            return ngbDate;
        const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
        return moment__WEBPACK_IMPORTED_MODULE_8__(newDate).format('YYYY-MM-DD');
    }
};
ListStaffComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_4__["StaffService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ListStaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-staff',
        template: __webpack_require__(/*! raw-loader!./list-staff.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/staff/list-staff/list-staff.component.html"),
        styles: [__webpack_require__(/*! ./list-staff.component.scss */ "./src/app/pages/staff/list-staff/list-staff.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
        _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_4__["StaffService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ListStaffComponent);



/***/ }),

/***/ "./src/app/pages/staff/staff-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/staff/staff-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StaffRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffRoutingModule", function() { return StaffRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_staff_list_staff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-staff/list-staff.component */ "./src/app/pages/staff/list-staff/list-staff.component.ts");
/* harmony import */ var _list_staff_detail_list_staff_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-staff-detail/list-staff-detail.component */ "./src/app/pages/staff/list-staff-detail/list-staff-detail.component.ts");
/* harmony import */ var _assigned_work_assigned_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assigned-work/assigned-work.component */ "./src/app/pages/staff/assigned-work/assigned-work.component.ts");
/* harmony import */ var _assign_work_assign_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assign-work/assign-work.component */ "./src/app/pages/staff/assign-work/assign-work.component.ts");







const routes = [
    {
        path: 'list-staff',
        component: _list_staff_list_staff_component__WEBPACK_IMPORTED_MODULE_3__["ListStaffComponent"],
    },
    {
        path: 'list-staff-detail/:sta_id',
        component: _list_staff_detail_list_staff_detail_component__WEBPACK_IMPORTED_MODULE_4__["ListStaffDetailComponent"],
    },
    {
        path: 'assigned-work',
        component: _assigned_work_assigned_work_component__WEBPACK_IMPORTED_MODULE_5__["AssignedWorkComponent"],
    },
    {
        path: 'assign-work',
        component: _assign_work_assign_work_component__WEBPACK_IMPORTED_MODULE_6__["AssignWorkComponent"],
    },
];
let StaffRoutingModule = class StaffRoutingModule {
};
StaffRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StaffRoutingModule);



/***/ }),

/***/ "./src/app/pages/staff/staff.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/staff/staff.module.ts ***!
  \*********************************************/
/*! exports provided: StaffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffModule", function() { return StaffModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/ui/ui.module */ "./src/app/shared/ui/ui.module.ts");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm2015/ng-apexcharts.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _staff_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./staff-routing.module */ "./src/app/pages/staff/staff-routing.module.ts");
/* harmony import */ var _core_services_api_api_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/services/api/api.module */ "./src/app/core/services/api/api.module.ts");
/* harmony import */ var _list_staff_list_staff_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-staff/list-staff.component */ "./src/app/pages/staff/list-staff/list-staff.component.ts");
/* harmony import */ var _list_staff_component_address_modal_address_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-staff/component/address-modal/address-modal.component */ "./src/app/pages/staff/list-staff/component/address-modal/address-modal.component.ts");
/* harmony import */ var _assigned_work_assigned_work_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assigned-work/assigned-work.component */ "./src/app/pages/staff/assigned-work/assigned-work.component.ts");
/* harmony import */ var _assign_work_assign_work_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assign-work/assign-work.component */ "./src/app/pages/staff/assign-work/assign-work.component.ts");
/* harmony import */ var _list_staff_component_address_permanent_tab_address_permanent_tab_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list-staff/component/address-permanent-tab/address-permanent-tab.component */ "./src/app/pages/staff/list-staff/component/address-permanent-tab/address-permanent-tab.component.ts");
/* harmony import */ var _list_staff_component_address_now_tab_address_now_tab_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./list-staff/component/address-now-tab/address-now-tab.component */ "./src/app/pages/staff/list-staff/component/address-now-tab/address-now-tab.component.ts");
/* harmony import */ var _list_staff_component_undertaken_location_tab_undertaken_location_tab_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./list-staff/component/undertaken-location-tab/undertaken-location-tab.component */ "./src/app/pages/staff/list-staff/component/undertaken-location-tab/undertaken-location-tab.component.ts");
/* harmony import */ var _list_staff_component_training_tab_training_tab_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./list-staff/component/training-tab/training-tab.component */ "./src/app/pages/staff/list-staff/component/training-tab/training-tab.component.ts");
/* harmony import */ var _list_staff_component_identity_card_tab_identity_card_tab_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./list-staff/component/identity-card-tab/identity-card-tab.component */ "./src/app/pages/staff/list-staff/component/identity-card-tab/identity-card-tab.component.ts");
/* harmony import */ var _list_staff_component_training_modal_training_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./list-staff/component/training-modal/training-modal.component */ "./src/app/pages/staff/list-staff/component/training-modal/training-modal.component.ts");
/* harmony import */ var _list_staff_detail_list_staff_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./list-staff-detail/list-staff-detail.component */ "./src/app/pages/staff/list-staff-detail/list-staff-detail.component.ts");
/* harmony import */ var _list_staff_detail_component_list_training_modal_list_training_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./list-staff-detail/component/list-training-modal/list-training-modal.component */ "./src/app/pages/staff/list-staff-detail/component/list-training-modal/list-training-modal.component.ts");
/* harmony import */ var _list_staff_component_bank_tab_bank_tab_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./list-staff/component/bank-tab/bank-tab.component */ "./src/app/pages/staff/list-staff/component/bank-tab/bank-tab.component.ts");
/* harmony import */ var _list_staff_component_bank_modal_bank_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./list-staff/component/bank-modal/bank-modal.component */ "./src/app/pages/staff/list-staff/component/bank-modal/bank-modal.component.ts");
/* harmony import */ var _list_staff_component_relative_tab_relative_tab_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./list-staff/component/relative-tab/relative-tab.component */ "./src/app/pages/staff/list-staff/component/relative-tab/relative-tab.component.ts");
/* harmony import */ var _list_staff_component_relative_modal_relative_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./list-staff/component/relative-modal/relative-modal.component */ "./src/app/pages/staff/list-staff/component/relative-modal/relative-modal.component.ts");
/* harmony import */ var _list_staff_component_bonus_modal_bonus_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./list-staff/component/bonus-modal/bonus-modal.component */ "./src/app/pages/staff/list-staff/component/bonus-modal/bonus-modal.component.ts");
/* harmony import */ var _list_staff_component_bonus_tab_bonus_tab_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./list-staff/component/bonus-tab/bonus-tab.component */ "./src/app/pages/staff/list-staff/component/bonus-tab/bonus-tab.component.ts");
/* harmony import */ var _list_staff_component_attachment_modal_attachment_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./list-staff/component/attachment-modal/attachment-modal.component */ "./src/app/pages/staff/list-staff/component/attachment-modal/attachment-modal.component.ts");
/* harmony import */ var _list_staff_component_attachment_tab_attachment_tab_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./list-staff/component/attachment-tab/attachment-tab.component */ "./src/app/pages/staff/list-staff/component/attachment-tab/attachment-tab.component.ts");































let StaffModule = class StaffModule {
};
StaffModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_staff_list_staff_component__WEBPACK_IMPORTED_MODULE_10__["ListStaffComponent"],
            _list_staff_component_address_modal_address_modal_component__WEBPACK_IMPORTED_MODULE_11__["AddressModalComponent"],
            _assigned_work_assigned_work_component__WEBPACK_IMPORTED_MODULE_12__["AssignedWorkComponent"],
            _assign_work_assign_work_component__WEBPACK_IMPORTED_MODULE_13__["AssignWorkComponent"],
            _list_staff_component_address_permanent_tab_address_permanent_tab_component__WEBPACK_IMPORTED_MODULE_14__["AddressPermanentTabComponent"],
            _list_staff_component_address_now_tab_address_now_tab_component__WEBPACK_IMPORTED_MODULE_15__["AddressNowTabComponent"],
            _list_staff_component_undertaken_location_tab_undertaken_location_tab_component__WEBPACK_IMPORTED_MODULE_16__["UndertakenLocationTabComponent"],
            _list_staff_component_training_tab_training_tab_component__WEBPACK_IMPORTED_MODULE_17__["TrainingTabComponent"],
            _list_staff_component_identity_card_tab_identity_card_tab_component__WEBPACK_IMPORTED_MODULE_18__["IdentityCardTabComponent"],
            _list_staff_component_training_modal_training_modal_component__WEBPACK_IMPORTED_MODULE_19__["TrainingModalComponent"],
            _list_staff_detail_list_staff_detail_component__WEBPACK_IMPORTED_MODULE_20__["ListStaffDetailComponent"],
            _list_staff_detail_component_list_training_modal_list_training_modal_component__WEBPACK_IMPORTED_MODULE_21__["ListTrainingModalComponent"],
            _list_staff_component_bank_tab_bank_tab_component__WEBPACK_IMPORTED_MODULE_22__["BankTabComponent"],
            _list_staff_component_bank_modal_bank_modal_component__WEBPACK_IMPORTED_MODULE_23__["BankModalComponent"],
            _list_staff_component_relative_tab_relative_tab_component__WEBPACK_IMPORTED_MODULE_24__["RelativeTabComponent"],
            _list_staff_component_relative_modal_relative_modal_component__WEBPACK_IMPORTED_MODULE_25__["RelativeModalComponent"],
            _list_staff_component_bonus_modal_bonus_modal_component__WEBPACK_IMPORTED_MODULE_26__["BonusModalComponent"],
            _list_staff_component_bonus_tab_bonus_tab_component__WEBPACK_IMPORTED_MODULE_27__["BonusTabComponent"],
            _list_staff_component_attachment_modal_attachment_modal_component__WEBPACK_IMPORTED_MODULE_28__["AttachmentModalComponent"],
            _list_staff_component_attachment_tab_attachment_tab_component__WEBPACK_IMPORTED_MODULE_29__["AttachmentTabComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UIModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabsetModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"],
            _staff_routing_module__WEBPACK_IMPORTED_MODULE_8__["StaffRoutingModule"],
            _core_services_api_api_module__WEBPACK_IMPORTED_MODULE_9__["ApiModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__["NgApexchartsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
        ],
        entryComponents: [
            _list_staff_component_address_modal_address_modal_component__WEBPACK_IMPORTED_MODULE_11__["AddressModalComponent"],
            _list_staff_component_training_modal_training_modal_component__WEBPACK_IMPORTED_MODULE_19__["TrainingModalComponent"],
            _list_staff_detail_component_list_training_modal_list_training_modal_component__WEBPACK_IMPORTED_MODULE_21__["ListTrainingModalComponent"],
            _list_staff_component_bank_modal_bank_modal_component__WEBPACK_IMPORTED_MODULE_23__["BankModalComponent"],
            _list_staff_component_relative_modal_relative_modal_component__WEBPACK_IMPORTED_MODULE_25__["RelativeModalComponent"],
            _list_staff_component_bonus_modal_bonus_modal_component__WEBPACK_IMPORTED_MODULE_26__["BonusModalComponent"],
            _list_staff_component_attachment_modal_attachment_modal_component__WEBPACK_IMPORTED_MODULE_28__["AttachmentModalComponent"],
        ],
    })
], StaffModule);



/***/ })

}]);
//# sourceMappingURL=staff-staff-module-es2015.js.map