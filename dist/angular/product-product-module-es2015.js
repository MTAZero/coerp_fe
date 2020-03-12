(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-order/component/confirm-modal/confirm-modal.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-order/component/confirm-modal/confirm-modal.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">{{ title }}</h4>\n  <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"onClickButton(false)\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\">\n  <div class=\"text-center\">\n    <div class=\"mb-3\">\n      {{ message }}\n    </div>\n    <div class=\"text-right\">\n      <button (click)=\"onClickButton(true)\" class=\"btn btn-success\">Có</button>\n      <button type=\"button\" class=\"btn btn-danger ml-1\" (click)=\"onClickButton(false)\">\n        Không\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-order/component/order-modal/order-modal.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-order/component/order-modal/order-modal.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">\n    {{ !order ? 'Thêm mới' : isView ? 'Xem' : 'Cập nhật' }} đơn hàng\n  </h4>\n  <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"onClickCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\">\n  <!-- #6658dd -->\n  <ngb-tabset justify=\"justified\" (tabChange)=\"onChangeTab($event)\" [activeId]=\"activeTabId\">\n    <ngb-tab title=\"1. Thông tin khách hàng\" id=\"1\">\n      <ng-template ngbTabContent>\n        <ng-template [ngTemplateOutlet]=\"Tab1\"></ng-template>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab title=\"2. Thông tin đơn hàng\" id=\"2\">\n      <ng-template ngbTabContent>\n        <ng-template [ngTemplateOutlet]=\"Tab2\"></ng-template>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab title=\"3. Hóa đơn\" id=\"3\">\n      <ng-template ngbTabContent>\n        <ng-template [ngTemplateOutlet]=\"Tab3\"></ng-template>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>\n\n<ng-template #Tab1>\n  <ngb-progressbar\n    type=\"success\"\n    [value]=\"33.33\"\n    [striped]=\"true\"\n    [animated]=\"true\"\n  ></ngb-progressbar>\n  <div class=\"row mt-2 mb-2\" *ngIf=\"!isView\">\n    <div class=\"col-lg-8\">\n      <form class=\"form-inline row\">\n        <div class=\"form-group col-sm-auto\">\n          <select\n            class=\"custom-select\"\n            name=\"searchCustomer\"\n            [(ngModel)]=\"searchCustomer\"\n            (change)=\"changeDatalistCustomer($event)\"\n          >\n            <option value=\"\">Chọn khách hàng</option>\n            <option *ngFor=\"let customer of customers\" [value]=\"customer.cu_id\">{{\n              customer.cu_fullname\n            }}</option>\n          </select>\n        </div>\n        <div class=\"form-group col-sm-auto\">\n          <label for=\"status-select\" class=\"mr-2\">Sắp xếp</label>\n          <select class=\"custom-select\">\n            <option selected=\"\">Tất cả</option>\n            <option value=\"1\">Khách quen</option>\n            <option value=\"2\">Khách VIP</option>\n            <option value=\"3\">Khách BNI</option>\n            <option value=\"4\">Khách khác</option>\n          </select>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"text-lg-right mt-3 mt-lg-0\">\n        <button type=\"button\" class=\"btn btn-success mr-1\">\n          <i class=\"mdi mdi-settings\"></i>\n        </button>\n        <a (click)=\"onClickCreateCustomer()\" class=\"btn btn-danger button-link\"\n          ><i class=\"mdi mdi-plus-circle mr-1\"></i> Thêm mới</a\n        >\n      </div>\n    </div>\n  </div>\n  <h5 class=\"mb-3 text-uppercase bg-light p-2\" *ngIf=\"selectedCustomer\">\n    <i class=\"mdi mdi-account-circle mr-1\"></i> Thông tin cá nhân\n  </h5>\n  <div [formGroup]=\"formCustomer\" *ngIf=\"selectedCustomer\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Họ và tên</label>\n          <input\n            [readonly]=\"readOnly\"\n            class=\"form-control\"\n            formControlName=\"cu_fullname\"\n            placeholder=\"Nhập họ và tên\"\n          />\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Số điện thoại</label>\n          <input\n            [readonly]=\"readOnly\"\n            class=\"form-control\"\n            formControlName=\"cu_mobile\"\n            placeholder=\"Nhập số điện thoại\"\n          />\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input\n            [readonly]=\"readOnly\"\n            class=\"form-control\"\n            formControlName=\"cu_email\"\n            placeholder=\"Nhập email\"\n          />\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Ngày sinh</label>\n          <div class=\"input-group clockpicker\">\n            <input\n              ngbDatepicker\n              [readonly]=\"readOnly\"\n              class=\"form-control\"\n              autoClose=\"false\"\n              placeholder=\"yyyy-mm-dd\"\n              #dateDob=\"ngbDatepicker\"\n              formControlName=\"cu_birthday\"\n            />\n            <div class=\"input-group-append\" (click)=\"!readOnly && dateDob.toggle()\">\n              <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Nhóm khách hàng</label>\n          <select class=\"custom-select\" formControlName=\"customer_group_id\">\n            <option [disabled]=\"readOnly\" *ngFor=\"let group of groups\" [value]=\"group.cg_id\">{{\n              group.cg_name\n            }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Nguồn khách hàng</label>\n          <select class=\"custom-select\" formControlName=\"source_id\">\n            <option [disabled]=\"readOnly\" *ngFor=\"let source of sources\" [value]=\"source.src_id\">{{\n              source.src_name\n            }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Loại khách hàng</label>\n          <select class=\"custom-select\" formControlName=\"cu_type\">\n            <option [disabled]=\"readOnly\" *ngFor=\"let type of types\" [value]=\"type.id\">{{\n              type.name\n            }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Người phụ trách</label>\n          <select class=\"custom-select\" formControlName=\"cu_curator_id\">\n            <option [disabled]=\"readOnly\" *ngFor=\"let staff of staffs\" [value]=\"staff.sta_id\">{{\n              staff.sta_fullname\n            }}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"!readOnly\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>Địa chỉ</label>\n          <input class=\"form-control\" formControlName=\"cu_address\" placeholder=\"Nhập địa chỉ\" />\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label>Tỉnh/Thành phố</label>\n          <select\n            class=\"custom-select\"\n            formControlName=\"cu_province\"\n            (change)=\"onChangeProvince($event)\"\n          >\n            <option *ngFor=\"let province of provinces\" [value]=\"province.name\">{{\n              province.name\n            }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label>Quận/Huyện</label>\n          <select\n            class=\"custom-select\"\n            formControlName=\"cu_district\"\n            (change)=\"onChangeDistrict($event)\"\n          >\n            <option *ngFor=\"let district of districts\" [value]=\"district.name\">{{\n              district.name\n            }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label>Xã/Phường</label>\n          <select class=\"custom-select\" formControlName=\"cu_ward\">\n            <option *ngFor=\"let ward of wards\" [value]=\"ward.name\">{{ ward.name }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <button\n          type=\"button\"\n          class=\"btn btn-danger\"\n          style=\"margin-top: 1.8rem;\"\n          (click)=\"onClickUpdateButton()\"\n        >\n          <i class=\"mdi mdi-plus-circle mr-1\"></i>{{ selectedAddress ? 'Cập nhật' : 'Thêm' }}\n        </button>\n      </div>\n    </div>\n    <div class=\"table-responsive border mb-2\">\n      <table class=\"table table-centered table-hover mb-0\">\n        <thead>\n          <tr>\n            <th>Địa chỉ chi tiết</th>\n            <th>Xã/Phường</th>\n            <th>Quận/Huyện</th>\n            <th>Tỉnh/Thành phố</th>\n            <th *ngIf=\"!readOnly\">Thao tác</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let address of listAddress\" (click)=\"onClickAddress(address)\">\n            <td>\n              <span\n                class=\"fe-check-circle icon mr-2\"\n                *ngIf=\"\n                  (address.sha_detail ? address.sha_detail + ', ' : '') +\n                    address.sha_ward +\n                    ', ' +\n                    address.sha_district +\n                    ', ' +\n                    address.sha_province ===\n                  selectedAddress\n                \"\n              ></span>\n              {{ address.sha_detail }}\n            </td>\n            <td>\n              {{ address.sha_ward }}\n            </td>\n            <td>\n              {{ address.sha_district }}\n            </td>\n            <td>\n              {{ address.sha_province }}\n            </td>\n            <td *ngIf=\"!readOnly\">\n              <a class=\"action-icon table-button-link\" (click)=\"onUpdateAddress(address)\">\n                <i class=\"mdi mdi-square-edit-outline\"></i\n              ></a>\n              <a class=\"action-icon table-button-link\" (click)=\"onRemoveAddress(address)\">\n                <i class=\"mdi mdi-delete\"></i\n              ></a>\n            </td>\n          </tr>\n          <tr *ngIf=\"listAddress?.length === 0\">\n            <td colspan=\"6\">Không có dữ liệu địa chỉ</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label>Ghi chú</label>\n          <textarea\n            rows=\"3\"\n            [readonly]=\"readOnly\"\n            formControlName=\"cu_note\"\n            class=\"form-control\"\n          ></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"d-flex justify-content-end\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onNextClick()\">\n      Tiếp theo\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #Tab2>\n  <ngb-progressbar\n    type=\"success\"\n    [value]=\"66.67\"\n    [striped]=\"true\"\n    [animated]=\"true\"\n  ></ngb-progressbar>\n  <div class=\"row mt-2\" *ngIf=\"!isView\">\n    <div class=\"col-md-8\">\n      <form class=\"form-inline\">\n        <div class=\"form-group\">\n          <select\n            class=\"custom-select\"\n            name=\"searchProduct\"\n            [(ngModel)]=\"searchProduct\"\n            (change)=\"changeDatalistProduct($event)\"\n          >\n            <option value=\"\">Chọn sản phẩm</option>\n            <option *ngFor=\"let product of products\" [value]=\"product.pu_id\">{{\n              product.pu_name\n            }}</option>\n          </select>\n        </div>\n      </form>\n    </div>\n  </div>\n  <h5 class=\"mb-3 text-uppercase bg-light p-2\">\n    <i class=\"mdi mdi-account-circle mr-1\"></i> Thông tin đơn hàng\n  </h5>\n  <div class=\"table-responsive border mb-2\" style=\"max-height: 250px;\">\n    <table class=\"table table-centered table-hover mb-0\">\n      <thead>\n        <tr>\n          <th>Tên sản phẩm</th>\n          <th>Số lượng</th>\n          <th>Đơn giá</th>\n          <th>Giảm giá (%)</th>\n          <th>Tổng</th>\n          <th *ngIf=\"!isView\">Thao tác</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let product of listProduct\">\n          <td>\n            {{ product.pu_name }}\n          </td>\n          <td>\n            <input\n              class=\"form-control\"\n              [readonly]=\"isView\"\n              style=\"max-width: 100px;\"\n              type=\"number\"\n              [max]=\"product.max_quantity\"\n              [value]=\"product.op_quantity\"\n              (change)=\"onChangeQuantity($event, product)\"\n            />\n          </td>\n          <td>\n            {{ product.pu_sale_price }}\n          </td>\n          <td>\n            <input\n              class=\"form-control\"\n              [readonly]=\"isView\"\n              style=\"max-width: 100px;\"\n              type=\"number\"\n              [max]=\"100\"\n              [value]=\"product.op_discount\"\n              (change)=\"onChangeDiscount($event, product)\"\n            />\n          </td>\n          <td>{{ product.op_total_value }}</td>\n          <td *ngIf=\"!isView\">\n            <a class=\"action-icon table-button-link\" (click)=\"onRemoveProduct(product)\">\n              <i class=\"mdi mdi-delete\"></i\n            ></a>\n          </td>\n        </tr>\n        <tr *ngIf=\"listProduct.length === 0\">\n          <td colspan=\"6\">Không có dữ liệu địa chỉ</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div [formGroup]=\"formOrder\">\n    <div class=\"row\">\n      <div class=\"col-md-6\"></div>\n      <div class=\"col-md-3 text-right\" style=\"line-height: 2.5;\">\n        Khuyến mãi (%)\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <input\n            type=\"number\"\n            max=\"100\"\n            [readonly]=\"isView\"\n            class=\"form-control\"\n            (change)=\"sumListProduct()\"\n            formControlName=\"cuo_discount\"\n            placeholder=\"Nhập khuyến mãi\"\n          />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\"></div>\n      <div class=\"col-md-3 text-right\" style=\"line-height: 2.5;\">\n        Phí vận chuyển\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <input\n            [readonly]=\"isView\"\n            class=\"form-control\"\n            (change)=\"sumListProduct()\"\n            formControlName=\"cuo_ship_tax\"\n            placeholder=\"Nhập phí vận chuyển\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-9\"></div>\n    <div class=\"col-md-3 text-right\" style=\"font-size: 1.2rem;\">\n      Tổng đơn hàng\n    </div>\n  </div>\n  <div class=\"row mb-1\">\n    <div class=\"col-md-9\"></div>\n    <div class=\"col-md-3 text-right\" style=\"font-size: 1.5rem; font-weight: 700;\">\n      {{ orderTotal | currency: 'VND' }}\n    </div>\n  </div>\n  <div class=\"d-flex justify-content-between\">\n    <button (click)=\"onBackClick()\" class=\"btn btn-primary\">\n      Quay lại\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onNextClick()\">\n      Tiếp theo\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #Tab3>\n  <ngb-progressbar\n    type=\"success\"\n    [value]=\"100\"\n    [striped]=\"true\"\n    [animated]=\"true\"\n  ></ngb-progressbar>\n  <!-- <div class=\"row mt-2\" style=\"font-size: 1.1rem;\">\n    <div class=\"col-md-8\"></div>\n    <div class=\"col-md-2 text-right\">Mã hóa đơn</div>\n    <div class=\"col-md-2 text-right\" style=\"font-weight: bold;\">\n      DH0814\n    </div>\n  </div> -->\n  <div class=\"row\" style=\"font-size: 1.1rem;\">\n    <div class=\"col-md-8\"></div>\n    <div class=\"col-md-2 text-right\">Ngày tạo</div>\n    <div class=\"col-md-2 text-right\" style=\"font-weight: bold;\">\n      {{ createdDate | date: 'dd/MM/yyyy' }}\n    </div>\n  </div>\n  <div class=\"row\" style=\"font-size: 1.1rem;\">\n    <div class=\"col-md-8\"></div>\n    <div class=\"col-md-2 text-right\">Trạng thái</div>\n    <div class=\"col-md-2 text-right\" style=\"font-weight: bold;\">\n      Chưa hoàn thành\n    </div>\n  </div>\n  <div class=\"text-right mt-2\" style=\"font-size: 1.1rem;\">\n    Địa chỉ giao hàng\n  </div>\n  <div class=\"text-right\">\n    {{ formCustomer.value['cu_fullname'] }}\n  </div>\n  <div class=\"text-right\">\n    {{ formCustomer.value['cu_mobile'] }} / {{ formCustomer.value['cu_email'] }}\n  </div>\n  <div class=\"text-right\">\n    {{ selectedAddress }}\n  </div>\n  <div class=\"text-right mt-2\" style=\"font-size: 1.1rem;\">\n    Chi tiết đơn hàng\n  </div>\n  <div class=\"table-responsive border mb-2\">\n    <table class=\"table table-centered table-hover mb-0\">\n      <thead>\n        <tr>\n          <th>Tên sản phẩm</th>\n          <th>Số lượng</th>\n          <th>Đơn giá</th>\n          <th>Giảm giá (%)</th>\n          <th>Tổng</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let product of listProduct\">\n          <td>\n            {{ product.pu_name }}\n          </td>\n          <td>\n            {{ product.op_quantity }}\n          </td>\n          <td>\n            {{ product.pu_sale_price }}\n          </td>\n          <td>\n            {{ product.op_discount }}\n          </td>\n          <td>{{ product.op_total_value }}</td>\n        </tr>\n        <tr *ngIf=\"listProduct.length === 0\">\n          <td colspan=\"6\">Không có dữ liệu địa chỉ</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"row\" style=\"font-size: 1.1rem;\">\n    <div class=\"col-md-8\"></div>\n    <div class=\"col-md-2 text-right\">Khuyến mãi</div>\n    <div class=\"col-md-2\" style=\"font-weight: bold;\">{{ formOrder.value['cuo_discount'] }}%</div>\n  </div>\n  <div class=\"row\" style=\"font-size: 1.1rem;\">\n    <div class=\"col-md-8\"></div>\n    <div class=\"col-md-2 text-right\">Phí vận chuyển</div>\n    <div class=\"col-md-2\" style=\"font-weight: bold;\">{{ formOrder.value['cuo_ship_tax'] }} VNĐ</div>\n  </div>\n  <div class=\"row mb-2\">\n    <div class=\"col-md-8\">\n      <div>Ghi chú</div>\n      <div>{{ formCustomer.value['cu_note'] }}</div>\n    </div>\n    <div class=\"col-md-2 text-right\" style=\"font-size: 1.1rem; color: inherit; font-weight: normal\">\n      Tổng đơn hàng\n    </div>\n    <div class=\"col-md-2\" style=\"font-weight: bold; font-size: 1.4rem; color: inherit;\">\n      {{ orderTotal | currency: 'VND' }}\n    </div>\n\n    <!-- <div class=\"col-md-6 text-right\" style=\"font-size: 1.4rem; font-weight: bold;\">\n      <span class=\"mr-2\" style=\"font-size: 1.1rem; color: inherit; font-weight: normal;\"\n        >Tổng đơn hàng</span\n      >{{ orderTotal | currency: 'VND' }}\n    </div> -->\n  </div>\n  <div class=\"d-flex justify-content-end\">\n    <button (click)=\"onPrintClick()\" class=\"btn btn-primary\" style=\"min-width: 80px;\">\n      <i class=\"mdi mdi-printer\"></i>\n      In\n    </button>\n    <button\n      [disabled]=\"isView\"\n      class=\"btn btn-success ml-2\"\n      (click)=\"onSubmitClick()\"\n      style=\"min-width: 80px;\"\n    >\n      Gửi\n    </button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-order/list-order.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-order/list-order.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-page-title title=\"Đặt hàng\" [breadcrumbItems]=\"breadCrumbItems\"></app-page-title>\n\n  <div class=\"row\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"row mb-2\">\n          <div class=\"col-md-7\">\n            <form class=\"form-inline\">\n              <div class=\"form-group mb-2\">\n                <input\n                  class=\"form-control\"\n                  name=\"textSearch\"\n                  placeholder=\"Tìm kiếm...\"\n                  [(ngModel)]=\"textSearch\"\n                  (input)=\"onChangeFilter()\"\n                />\n              </div>\n\n              <select\n                class=\"custom-select\"\n                name=\"category\"\n                [(ngModel)]=\"paymentMethodSearch\"\n                (change)=\"onChangeFilter()\"\n              >\n                <option value=\"\">Phương thức thanh toán</option>\n                <option *ngFor=\"let item of paymentMethods\" [value]=\"item.id\">{{\n                  item.name\n                }}</option>\n              </select>\n            </form>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"text-sm-right\">\n              <button type=\"button\" class=\"btn btn-info mb-2 mr-1\">\n                Xuất\n              </button>\n              <a class=\"btn btn-success mb-2 button-link\" (click)=\"openOrderModal()\"\n                ><i class=\"mdi mdi-plus-circle mr-1\"></i> Thêm đơn hàng</a\n              >\n            </div>\n          </div>\n          <!-- end col-->\n        </div>\n\n        <div class=\"table-responsive\">\n          <table class=\"table table-centered table-hover mb-0\">\n            <thead>\n              <tr>\n                <th>MĐH</th>\n                <th>Ngày đặt hàng</th>\n                <th>Trạng thái thanh toán</th>\n                <th>Tổng tiền</th>\n                <th>Phương thức thanh toán</th>\n                <th>Tình trạng đơn hàng</th>\n                <th style=\"width: 105px;\">Thao tác</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let order of orders\">\n                <td>\n                  {{ order.cuo_code }}\n                </td>\n                <td>\n                  {{ order.cuo_date | date: 'dd/MM/yyyy' }}\n                </td>\n                <td>\n                  {{ order.cuo_payment_status }}\n                </td>\n                <td>\n                  {{ order.cuo_total_price }}\n                </td>\n                <td>\n                  {{ order.cuo_payment_type }}\n                </td>\n                <td>\n                  <select\n                    class=\"custom-select\"\n                    [value]=\"order.cuo_status\"\n                    (change)=\"onChangeStatus($event, order)\"\n                  >\n                    <option value=\"null\">Trạng thái đơn hàng</option>\n                    <option *ngFor=\"let status of orderStatus\" [value]=\"status.id\">{{\n                      status.name\n                    }}</option>\n                  </select>\n                </td>\n                <td>\n                  <a class=\"action-icon table-button-link\" (click)=\"openOrderModal(order, true)\">\n                    <i class=\"mdi mdi-eye\"></i\n                  ></a>\n                  <a class=\"action-icon table-button-link\" (click)=\"openOrderModal(order)\">\n                    <i class=\"mdi mdi-square-edit-outline\"></i\n                  ></a>\n                  <a class=\"action-icon table-button-link\" (click)=\"openConfirmModal(order)\">\n                    <i class=\"mdi mdi-delete\"></i\n                  ></a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <ul class=\"pagination pagination-rounded justify-content-end my-2\">\n          <ngb-pagination\n            (pageChange)=\"onPageChange($event)\"\n            [pageSize]=\"pageSize\"\n            [(page)]=\"page\"\n            [collectionSize]=\"totalSize\"\n          ></ngb-pagination>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/confirm-modal/confirm-modal.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-product/component/confirm-modal/confirm-modal.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">{{ title }}</h4>\n  <button\n    type=\"button\"\n    class=\"close text-white\"\n    aria-label=\"Close\"\n    (click)=\"onClickButton(false)\"\n  >\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\">\n  <div class=\"text-center\">\n    <div class=\"mb-3\">\n      {{ message }}\n    </div>\n    <div class=\"text-right\">\n      <button (click)=\"onClickButton(true)\" class=\"btn btn-success\">Có</button>\n      <button\n        type=\"button\"\n        class=\"btn btn-danger ml-1\"\n        (click)=\"onClickButton(false)\"\n      >\n        Không\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/description-tab/description-tab.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-product/component/description-tab/description-tab.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{ product?.pu_short_description }}\n</p>\n<p>\n  {{ product?.pu_description }}\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/list-product-type-modal/list-product-type-modal.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-product/component/list-product-type-modal/list-product-type-modal.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">Loại sản phẩm</h4>\n  <button\n    type=\"button\"\n    class=\"close text-white\"\n    aria-label=\"Close\"\n    (click)=\"onClickCancel()\"\n  >\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\">\n      <thead>\n        <tr>\n          <th>STT</th>\n          <th>Loại sản phẩm</th>\n          <th>Mô tả</th>\n          <th>Trạng thái</th>\n          <th>Ngày tạo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor=\"let productType of productTypes; let i = index\"\n          (click)=\"onClickProductType(productType)\"\n          [ngClass]=\"{\n            'is-selected':\n              productType.product_type_id ===\n              selectedProductType?.product_type_id\n          }\"\n        >\n          <td>\n            {{ i + 1 }}\n          </td>\n          <td>\n            {{ productType.product_type_id }}\n          </td>\n          <td>\n            {{ productType.product_type_name }}\n          </td>\n          <td>\n            {{ productType.product_type_status }}\n          </td>\n          <td>\n            {{ productType.created_date }}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"text-right mt-3\">\n    <button\n      [disabled]=\"!selectedProductType\"\n      class=\"btn btn-primary\"\n      (click)=\"onClickChoose()\"\n    >\n      Chọn\n    </button>\n    <button class=\"btn btn-success ml-1\" (click)=\"openProductTypeModal()\">\n      Thêm\n    </button>\n    <button\n      [disabled]=\"!selectedProductType\"\n      class=\"btn btn-warning ml-1\"\n      (click)=\"openProductTypeModal(productType)\"\n    >\n      Sửa\n    </button>\n    <button\n      [disabled]=\"!selectedProductType\"\n      class=\"btn btn-danger ml-1\"\n      (click)=\"openConfirmModal()\"\n    >\n      Xóa\n    </button>\n    <button class=\"btn btn-danger ml-1\" (click)=\"onClickCancel()\">\n      Đóng\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/list-unit-modal/list-unit-modal.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-product/component/list-unit-modal/list-unit-modal.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">Đơn vị</h4>\n  <button\n    type=\"button\"\n    class=\"close text-white\"\n    aria-label=\"Close\"\n    (click)=\"onClickCancel()\"\n  >\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\">\n      <thead>\n        <tr>\n          <th>STT</th>\n          <th>Đơn vị</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor=\"let unit of units; let i = index\"\n          (click)=\"onClickUnit(unit)\"\n          [ngClass]=\"{\n            'is-selected': unit.unit_id === selectedUnit?.unit_id\n          }\"\n        >\n          <td>\n            {{ i + 1 }}\n          </td>\n          <td>\n            {{ unit.unit_name }}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"text-right mt-3\">\n    <button\n      [disabled]=\"!selectedUnit\"\n      class=\"btn btn-primary\"\n      (click)=\"onClickChoose()\"\n    >\n      Chọn\n    </button>\n    <button class=\"btn btn-success ml-1\" (click)=\"openUnitModal()\">\n      Thêm\n    </button>\n    <button\n      [disabled]=\"!selectedUnit\"\n      class=\"btn btn-warning ml-1\"\n      (click)=\"openUnitModal(unit)\"\n    >\n      Sửa\n    </button>\n    <button\n      [disabled]=\"!selectedUnit\"\n      class=\"btn btn-danger ml-1\"\n      (click)=\"openConfirmModal()\"\n    >\n      Xóa\n    </button>\n    <button class=\"btn btn-danger ml-1\" (click)=\"onClickCancel()\">\n      Đóng\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/product-modal/product-modal.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-product/component/product-modal/product-modal.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">\n    {{ !product ? 'Thêm mới' : 'Cập nhật' }} sản phẩm\n  </h4>\n  <button\n    type=\"button\"\n    class=\"close text-white\"\n    aria-label=\"Close\"\n    (click)=\"onClickCancel()\"\n  >\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\">\n  <div class=\"text-left\">\n    <form [formGroup]=\"form\" class=\"form-horizontal\" autocomplete=\"off\">\n      <div class=\"form-group\">\n        <label for=\"avatar\">Ảnh chân dung</label>\n        <img\n          class=\"d-flex mr-3 rounded-circle avatar-lg\"\n          src=\"assets/images/users/user-8.jpg\"\n          alt=\"Generic placeholder image\"\n        />\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group row mb-3\">\n          <label class=\"col-4 col-form-label\"\n            >Tên sản phẩm <span>(*)</span></label\n          >\n          <div class=\"col-8\">\n            <input\n              class=\"form-control\"\n              formControlName=\"pu_name\"\n              [ngClass]=\"{\n                'is-invalid': submitted && formUI.pu_name.errors\n              }\"\n            />\n            <div\n              *ngIf=\"submitted && formUI.pu_name.errors\"\n              class=\"invalid-feedback\"\n            >\n              <span *ngIf=\"formUI.pu_name.errors.required\"\n                >This value is required.</span\n              >\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row mb-3\">\n          <label class=\"col-4 col-form-label\">Đơn vị <span>(*)</span></label>\n          <div class=\"col-8\">\n            <select\n              class=\"custom-select\"\n              formControlName=\"pu_unit\"\n              class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && formUI.pu_unit.errors }\"\n            >\n              <option *ngFor=\"let unit of units\" [value]=\"unit.id\">{{\n                unit.name\n              }}</option>\n            </select>\n            <div\n              *ngIf=\"submitted && formUI.pu_unit.errors\"\n              class=\"invalid-feedback\"\n            >\n              <span *ngIf=\"formUI.pu_unit.errors.required\"\n                >This value is required.</span\n              >\n            </div>\n          </div>\n          <!-- <div class=\"col-2 pl-0\">\n            <a\n              class=\"btn btn-success button-link\"\n              style=\"width: inherit;\"\n              (click)=\"openUnitModal()\"\n              ><i class=\"mdi mdi mdi-menu\"></i\n            ></a>\n          </div> -->\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group row mb-3\">\n          <label class=\"col-4 col-form-label\">Số lượng <span>(*)</span></label>\n          <div class=\"col-8\">\n            <input\n              class=\"form-control\"\n              formControlName=\"pu_quantity\"\n              [ngClass]=\"{\n                'is-invalid': submitted && formUI.pu_quantity.errors\n              }\"\n            />\n            <div\n              *ngIf=\"submitted && formUI.pu_quantity.errors\"\n              class=\"invalid-feedback\"\n            >\n              <span *ngIf=\"formUI.pu_quantity.errors.required\"\n                >This value is required.</span\n              >\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row mb-3\">\n          <label class=\"col-4 col-form-label\"\n            >Loại sản phẩm <span>(*)</span></label\n          >\n          <div class=\"col-8\">\n            <select\n              class=\"custom-select\"\n              formControlName=\"product_category_id\"\n              class=\"form-control\"\n              [ngClass]=\"{\n                'is-invalid': submitted && formUI.product_category_id.errors\n              }\"\n            >\n              <option\n                *ngFor=\"let category of categories\"\n                [value]=\"category.id\"\n                >{{ category.name }}</option\n              >\n            </select>\n            <div\n              *ngIf=\"submitted && formUI.product_category_id.errors\"\n              class=\"invalid-feedback\"\n            >\n              <span *ngIf=\"formUI.product_category_id.errors.required\"\n                >This value is required.</span\n              >\n            </div>\n          </div>\n          <!-- <div class=\"col-2 pl-0\">\n            <a\n              class=\"btn btn-success button-link\"\n              style=\"width: inherit;\"\n              (click)=\"openProductTypeModal()\"\n              ><i class=\"mdi mdi mdi-menu\"></i\n            ></a>\n          </div> -->\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group row mb-3\">\n          <label class=\"col-4 col-form-label\">Giá nhập <span>(*)</span></label>\n          <div class=\"col-8\">\n            <input\n              class=\"form-control\"\n              formControlName=\"pu_buy_price\"\n              [ngClass]=\"{\n                'is-invalid': submitted && formUI.pu_buy_price.errors\n              }\"\n            />\n            <div\n              *ngIf=\"submitted && formUI.pu_buy_price.errors\"\n              class=\"invalid-feedback\"\n            >\n              <span *ngIf=\"formUI.pu_buy_price.errors.required\"\n                >This value is required.</span\n              >\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row mb-3\">\n          <label class=\"col-4 col-form-label\"\n            >Nhà cung cấp <span>(*)</span></label\n          >\n          <div class=\"col-8\">\n            <select\n              class=\"custom-select\"\n              formControlName=\"provider_id\"\n              class=\"form-control\"\n              [ngClass]=\"{\n                'is-invalid': submitted && formUI.provider_id.errors\n              }\"\n            >\n              <option\n                *ngFor=\"let supplier of suppliers\"\n                [value]=\"supplier.id\"\n                >{{ supplier.name }}</option\n              >\n            </select>\n            <div\n              *ngIf=\"submitted && formUI.provider_id.errors\"\n              class=\"invalid-feedback\"\n            >\n              <span *ngIf=\"formUI.provider_id.errors.required\"\n                >This value is required.</span\n              >\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group row mb-3\">\n          <label for=\"department\" class=\"col-4 col-form-label\"\n            >Giá bán <span>(*)</span></label\n          >\n          <div class=\"col-8\">\n            <input\n              class=\"form-control\"\n              formControlName=\"pu_sale_price\"\n              [ngClass]=\"{\n                'is-invalid': submitted && formUI.pu_sale_price.errors\n              }\"\n            />\n            <div\n              *ngIf=\"submitted && formUI.pu_sale_price.errors\"\n              class=\"invalid-feedback\"\n            >\n              <span *ngIf=\"formUI.pu_sale_price.errors.required\"\n                >This value is required.</span\n              >\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row mb-3\">\n          <label for=\"dob\" class=\"col-4 col-form-label\">Ngày hết hạn</label>\n          <div class=\"col-8\">\n            <div class=\"input-group clockpicker\">\n              <input\n                ngbDatepicker\n                class=\"form-control\"\n                autoClose=\"false\"\n                placeholder=\"yyyy-mm-dd\"\n                #date=\"ngbDatepicker\"\n                formControlName=\"pu_expired_date\"\n              />\n              <div class=\"input-group-append\" (click)=\"date.toggle()\">\n                <span class=\"input-group-text\"\n                  ><i class=\"mdi mdi-calendar\"></i\n                ></span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group row mb-3\">\n          <label for=\"department\" class=\"col-4 col-form-label\"\n            >Thuế <span>(*)</span></label\n          >\n          <div class=\"col-8\">\n            <input\n              class=\"form-control\"\n              formControlName=\"pu_tax\"\n              [ngClass]=\"{ 'is-invalid': submitted && formUI.pu_tax.errors }\"\n            />\n            <div\n              *ngIf=\"submitted && formUI.pu_tax.errors\"\n              class=\"invalid-feedback\"\n            >\n              <span *ngIf=\"formUI.pu_tax.errors.required\"\n                >This value is required.</span\n              >\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row mb-3\">\n          <label for=\"dob\" class=\"col-4 col-form-label\">Cân nặng</label>\n          <div class=\"col-8\">\n            <input\n              class=\"form-control\"\n              formControlName=\"pu_weight\"\n              [ngClass]=\"{ 'is-invalid': submitted && formUI.pu_weight.errors }\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group row mb-3\">\n          <label for=\"department\" class=\"col-4 col-form-label\"\n            >Khuyến mãi</label\n          >\n          <div class=\"col-8\">\n            <input\n              class=\"form-control\"\n              formControlName=\"pu_saleoff\"\n              [ngClass]=\"{\n                'is-invalid': submitted && formUI.pu_saleoff.errors\n              }\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row mb-3\"></div>\n      </div>\n      <div class=\"form-row\" style=\"font-weight: bold;\">\n        <div class=\"form-group\">\n          Mô tả về sản phẩm\n        </div>\n        <div class=\"form-group\"></div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group row mb-3\" style=\"width: 100%;\">\n          <label class=\"col-2 col-form-label\">Mô tả ngắn</label>\n          <div class=\"col-10\">\n            <input\n              class=\"form-control\"\n              formControlName=\"pu_short_description\"\n              [ngClass]=\"{\n                'is-invalid': submitted && formUI.pu_short_description.errors\n              }\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group row mb-3\" style=\"width: 100%;\">\n          <label class=\"col-2 col-form-label\">Mô tả chi tiết</label>\n          <div class=\"col-10\">\n            <input\n              class=\"form-control\"\n              formControlName=\"pu_description\"\n              [ngClass]=\"{\n                'is-invalid': submitted && formUI.pu_description.errors\n              }\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"text-right\">\n        <button (click)=\"onClickSubmit()\" class=\"btn btn-success\">\n          Lưu\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-danger ml-1\"\n          (click)=\"onClickCancel()\"\n        >\n          Hủy\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/product-type-modal/product-type-modal.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-product/component/product-type-modal/product-type-modal.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">Thêm loại sản phẩm</h4>\n  <button class=\"close text-white\" aria-label=\"Close\" (click)=\"onClickCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\" [formGroup]=\"form\">\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\"\n      >Tên loại sản phẩm <span>(*)</span></label\n    >\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"product_type_name\"\n        [ngClass]=\"{\n          'is-invalid': submitted && formUI.product_type_name.errors\n        }\"\n      />\n      <div\n        *ngIf=\"submitted && formUI.product_type_name.errors\"\n        class=\"invalid-feedback\"\n      >\n        <span *ngIf=\"formUI.product_type_name.errors.required\"\n          >This value is required.</span\n        >\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Trạng thái<span>(*)</span></label>\n    <div class=\"col-8\">\n      <select\n        class=\"custom-select\"\n        formControlName=\"product_type_status\"\n        class=\"form-control\"\n        [ngClass]=\"{\n          'is-invalid': submitted && formUI.product_type_status.errors\n        }\"\n      >\n        <option value=\"\"></option>\n        <option value=\"1\">Nguyễn Văn A</option>\n        <option value=\"2\">Nguyễn Văn B</option>\n        <option value=\"3\">Nguyễn Văn C</option>\n      </select>\n      <div\n        *ngIf=\"submitted && formUI.product_type_status.errors\"\n        class=\"invalid-feedback\"\n      >\n        <span *ngIf=\"formUI.product_type_status.errors.required\"\n          >This value is required.</span\n        >\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Mô tả</label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"product_type_description\"\n        [ngClass]=\"{\n          'is-invalid': submitted && formUI.product_type_description.errors\n        }\"\n      />\n    </div>\n  </div>\n  <div class=\"text-right mt-3\">\n    <button class=\"btn btn-success ml-1\" (click)=\"onClickSubmit()\">\n      Lưu\n    </button>\n    <button class=\"btn btn-danger ml-1\" (click)=\"onClickCancel()\">\n      Hủy\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/purchase-history-tab/purchase-history-tab.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-product/component/purchase-history-tab/purchase-history-tab.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table table-centered table-hover mb-0\">\n    <thead>\n      <tr>\n        <th>Thời gian</th>\n        <th>Số đơn hàng</th>\n        <th>Số lượng</th>\n        <th>Đơn vị</th>\n        <th>Khách hàng</th>\n        <th>Người tạo</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let ph of purchaseHistoryData\">\n        <td>\n          {{ ph.purchase_id }}\n        </td>\n        <td>\n          {{ ph.purchase_time }}\n        </td>\n        <td>\n          {{ ph.purchase_quantity }}\n        </td>\n        <td>\n          {{ ph.unit }}\n        </td>\n        <td>\n          {{ ph.unit }}\n        </td>\n        <td>\n          {{ ph.creator }}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/unit-modal/unit-modal.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-product/component/unit-modal/unit-modal.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">Thêm đơn vị</h4>\n  <button class=\"close text-white\" aria-label=\"Close\" (click)=\"onClickCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\" [formGroup]=\"form\">\n  <div class=\"form-group row mb-3\">\n    <label class=\"col-4 col-form-label\">Đơn vị <span>(*)</span></label>\n    <div class=\"col-8\">\n      <input\n        class=\"form-control\"\n        formControlName=\"unit_name\"\n        [ngClass]=\"{ 'is-invalid': submitted && formUI.unit_name.errors }\"\n      />\n      <div\n        *ngIf=\"submitted && formUI.unit_name.errors\"\n        class=\"invalid-feedback\"\n      >\n        <span *ngIf=\"formUI.unit_name.errors.required\"\n          >This value is required.</span\n        >\n      </div>\n    </div>\n  </div>\n  <div class=\"text-right mt-3\">\n    <button class=\"btn btn-success ml-1\" (click)=\"onClickSubmit()\">\n      Lưu\n    </button>\n    <button class=\"btn btn-danger ml-1\" (click)=\"onClickCancel()\">\n      Hủy\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/list-product.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-product/list-product.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-page-title title=\"Sản phẩm\" [breadcrumbItems]=\"breadCrumbItems\"></app-page-title>\n\n  <div class=\"row\">\n    <div [ngClass]=\"selectedProduct ? 'col-xl-8' : 'col-xl'\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row mb-2\">\n            <div class=\"col-sm-6\">\n              <form class=\"form-inline\">\n                <div class=\"form-group mb-2\">\n                  <input\n                    class=\"form-control\"\n                    name=\"textSearch\"\n                    placeholder=\"Tìm kiếm...\"\n                    [(ngModel)]=\"textSearch\"\n                    (input)=\"onChangeFilter()\"\n                  />\n                </div>\n                <select\n                  class=\"custom-select\"\n                  name=\"category\"\n                  [(ngModel)]=\"categorySearch\"\n                  (change)=\"onChangeFilter()\"\n                >\n                  <option value=\"\">Loại sản phẩm</option>\n                  <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{\n                    category.name\n                  }}</option>\n                </select>\n              </form>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"text-sm-right\">\n                <button type=\"button\" class=\"btn btn-info mb-2 mr-1\">\n                  Nhập\n                </button>\n                <button type=\"button\" class=\"btn btn-info mb-2 mr-1\">\n                  Xuất\n                </button>\n                <a class=\"btn btn-success mb-2 button-link\" (click)=\"openProductModal()\"\n                  ><i class=\"mdi mdi-plus-circle mr-1\"></i> Thêm mới</a\n                >\n              </div>\n            </div>\n            <!-- end col-->\n          </div>\n\n          <div class=\"table-responsive\">\n            <table class=\"table table-centered table-hover mb-0\">\n              <thead>\n                <tr>\n                  <th>MSP</th>\n                  <th>Tên sản phẩm</th>\n                  <th>Số lượng</th>\n                  <th>Giá nhập</th>\n                  <th>Giá bán</th>\n                  <th>Đơn vị</th>\n                  <th>Loại sản phẩm</th>\n                  <th>Nhà cung cấp</th>\n                  <th>Thuế</th>\n                  <th>Ngày hết hạn</th>\n                  <th>Cân nặng</th>\n                  <th>Ngày tạo</th>\n                  <th style=\"width: 82px;\">Thao tác</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr\n                  *ngFor=\"let product of products\"\n                  (click)=\"onClickProduct(product)\"\n                  [ngClass]=\"{\n                    'is-selected': product.pu_id === selectedProduct?.pu_id\n                  }\"\n                >\n                  <td>\n                    {{ product.pu_code }}\n                  </td>\n                  <td>\n                    {{ product.pu_name }}\n                  </td>\n                  <td>\n                    {{ product.pu_quantity }}\n                  </td>\n                  <td>\n                    {{ product.pu_buy_price }}\n                  </td>\n                  <td>\n                    {{ product.pu_sale_price }}\n                  </td>\n                  <td>\n                    {{ product.pu_unit_name }}\n                  </td>\n                  <td>\n                    {{ product.product_category_name }}\n                  </td>\n                  <td>\n                    {{ product.provider_name }}\n                  </td>\n                  <td>\n                    {{ product.pu_tax }}\n                  </td>\n                  <td>\n                    {{ product.pu_expired_date | date: 'dd/MM/yyyy' }}\n                  </td>\n                  <td>\n                    {{ product.pu_weight }}\n                  </td>\n                  <td>\n                    {{ product.pu_create_date | date: 'dd/MM/yyyy' }}\n                  </td>\n                  <td>\n                    <a class=\"action-icon table-button-link\" (click)=\"openProductModal(product)\">\n                      <i class=\"mdi mdi-square-edit-outline\"></i\n                    ></a>\n                    <a class=\"action-icon table-button-link\" (click)=\"openConfirmModal(product)\">\n                      <i class=\"mdi mdi-delete\"></i\n                    ></a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <ul class=\"pagination pagination-rounded justify-content-end my-2\">\n            <ngb-pagination\n              (pageChange)=\"onPageChange($event)\"\n              [pageSize]=\"pageSize\"\n              [(page)]=\"page\"\n              [collectionSize]=\"totalSize\"\n            ></ngb-pagination>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4\" *ngIf=\"selectedProduct\">\n      <div class=\"card-box\">\n        <div class=\"media mb-3\">\n          <img\n            class=\"d-flex mr-3 rounded-circle avatar-lg\"\n            [src]=\"'http://27.72.147.222:1230' + selectedProduct?.pu_thumbnail\"\n            alt=\"Generic placeholder image\"\n            (click)=\"file.click()\"\n            style=\"cursor: pointer;\"\n            useCache=\"false\"\n          />\n          <input\n            type=\"file\"\n            accept=\"image/*\"\n            #file\n            style=\"display:none\"\n            (change)=\"readURL($event)\"\n          />\n          <div class=\"media-body\">\n            <h4 class=\"mt-0 mb-1\">{{ selectedProduct?.pu_name }}</h4>\n            <p class=\"text-muted\">\n              Ngày cập nhật: {{ selectedProduct?.pu_create_date | date: 'dd/MM/yyyy' }}\n            </p>\n          </div>\n        </div>\n        <ngb-tabset>\n          <ngb-tab title=\"Mô tả\">\n            <ng-template ngbTabContent>\n              <app-description-tab [product]=\"selectedProduct\"></app-description-tab>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Lịch sử mua\">\n            <ng-template ngbTabContent>\n              <app-purchase-history-tab></app-purchase-history-tab>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n      <!-- end card-box-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/product-statistic/product-statistic.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/product-statistic/product-statistic.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-container>\n  <div top class=\"card-body\" style=\"height: 100%;\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <form class=\"form-inline\">\n          <div class=\"form-group mb-2\">\n            <input\n              class=\"form-control\"\n              name=\"textSearch\"\n              placeholder=\"Tìm kiếm...\"\n              [(ngModel)]=\"textSearch\"\n              (input)=\"onChangeFilter()\"\n            />\n          </div>\n          <select\n            class=\"custom-select\"\n            name=\"category\"\n            [(ngModel)]=\"categorySearch\"\n            (change)=\"onChangeFilter()\"\n          >\n            <option value=\"\">Loại sản phẩm</option>\n            <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{\n              category.name\n            }}</option>\n          </select>\n        </form>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"text-sm-right\">\n          <button type=\"button\" class=\"btn btn-info mb-2 mr-1\">\n            Nhập\n          </button>\n          <button type=\"button\" class=\"btn btn-info mb-2 mr-1\">\n            Xuất\n          </button>\n          <a class=\"btn btn-success mb-2 mr-1 button-link\" (click)=\"openProductModal()\"\n            ><i class=\"mdi mdi-plus-circle mr-1\"></i> Thêm mới</a\n          >\n          <a class=\"btn btn-primary mb-2 mr-1 button-link\" (click)=\"openProductModal()\"\n            ><i class=\"mdi mdi-square-edit-outline mr-1\"></i> Cập nhật</a\n          >\n          <a class=\"btn btn-danger mb-2 mr-1 button-link\" (click)=\"openProductModal()\"\n            ><i class=\"mdi mdi-delete mr-1\"></i> Xóa</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\">\n        <thead>\n          <tr>\n            <th>MSP</th>\n            <th>Tên sản phẩm</th>\n            <th>Số lượng</th>\n            <th>Giá nhập</th>\n            <th>Giá bán</th>\n            <th>Đơn vị</th>\n            <th>Loại sản phẩm</th>\n            <th>Nhà cung cấp</th>\n            <th>Thuế</th>\n            <th>Ngày hết hạn</th>\n            <th>Cân nặng</th>\n            <th>Ngày tạo</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let product of products\"\n            (click)=\"onClickProduct(product)\"\n            [ngClass]=\"{\n              'is-selected': product.pu_id === selectedProduct?.pu_id\n            }\"\n          >\n            <td>\n              {{ product.pu_code }}\n            </td>\n            <td>\n              {{ product.pu_name }}\n            </td>\n            <td>\n              {{ product.pu_quantity }}\n            </td>\n            <td>\n              {{ product.pu_buy_price }}\n            </td>\n            <td>\n              {{ product.pu_sale_price }}\n            </td>\n            <td>\n              {{ product.pu_unit_name }}\n            </td>\n            <td>\n              {{ product.product_category_name }}\n            </td>\n            <td>\n              {{ product.provider_name }}\n            </td>\n            <td>\n              {{ product.pu_tax }}\n            </td>\n            <td>\n              {{ product.pu_expired_date | date: 'dd/MM/yyyy' }}\n            </td>\n            <td>\n              {{ product.pu_weight }}\n            </td>\n            <td>\n              {{ product.pu_create_date | date: 'dd/MM/yyyy' }}\n            </td>\n          </tr>\n          <tr\n            *ngFor=\"let product of products\"\n            (click)=\"onClickProduct(product)\"\n            [ngClass]=\"{\n              'is-selected': product.pu_id === selectedProduct?.pu_id\n            }\"\n          >\n            <td>\n              {{ product.pu_code }}\n            </td>\n            <td>\n              {{ product.pu_name }}\n            </td>\n            <td>\n              {{ product.pu_quantity }}\n            </td>\n            <td>\n              {{ product.pu_buy_price }}\n            </td>\n            <td>\n              {{ product.pu_sale_price }}\n            </td>\n            <td>\n              {{ product.pu_unit_name }}\n            </td>\n            <td>\n              {{ product.product_category_name }}\n            </td>\n            <td>\n              {{ product.provider_name }}\n            </td>\n            <td>\n              {{ product.pu_tax }}\n            </td>\n            <td>\n              {{ product.pu_expired_date | date: 'dd/MM/yyyy' }}\n            </td>\n            <td>\n              {{ product.pu_weight }}\n            </td>\n            <td>\n              {{ product.pu_create_date | date: 'dd/MM/yyyy' }}\n            </td>\n          </tr>\n          <tr\n            *ngFor=\"let product of products\"\n            (click)=\"onClickProduct(product)\"\n            [ngClass]=\"{\n              'is-selected': product.pu_id === selectedProduct?.pu_id\n            }\"\n          >\n            <td>\n              {{ product.pu_code }}\n            </td>\n            <td>\n              {{ product.pu_name }}\n            </td>\n            <td>\n              {{ product.pu_quantity }}\n            </td>\n            <td>\n              {{ product.pu_buy_price }}\n            </td>\n            <td>\n              {{ product.pu_sale_price }}\n            </td>\n            <td>\n              {{ product.pu_unit_name }}\n            </td>\n            <td>\n              {{ product.product_category_name }}\n            </td>\n            <td>\n              {{ product.provider_name }}\n            </td>\n            <td>\n              {{ product.pu_tax }}\n            </td>\n            <td>\n              {{ product.pu_expired_date | date: 'dd/MM/yyyy' }}\n            </td>\n            <td>\n              {{ product.pu_weight }}\n            </td>\n            <td>\n              {{ product.pu_create_date | date: 'dd/MM/yyyy' }}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <ul class=\"pagination pagination-rounded justify-content-end my-3\">\n      <ngb-pagination\n        (pageChange)=\"onPageChange($event)\"\n        [pageSize]=\"pageSize\"\n        [(page)]=\"page\"\n        [collectionSize]=\"totalSize\"\n      ></ngb-pagination>\n    </ul>\n  </div>\n  <div bottom>\n    <ngb-tabset class=\"nav-bordered\">\n      <ngb-tab title=\"Mô tả\">\n        <ng-template ngbTabContent>\n          <app-description-tab [product]=\"selectedProduct\"></app-description-tab>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab title=\"Lịch sử mua\">\n        <ng-template ngbTabContent>\n          <app-purchase-history-tab></app-purchase-history-tab>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</app-main-container>\n"

/***/ }),

/***/ "./src/app/pages/product/list-order/component/confirm-modal/confirm-modal.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/product/list-order/component/confirm-modal/confirm-modal.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1vcmRlci9jb21wb25lbnQvY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/product/list-order/component/confirm-modal/confirm-modal.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/product/list-order/component/confirm-modal/confirm-modal.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfirmModalComponent = class ConfirmModalComponent {
    constructor() {
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    onClickButton(status) {
        this.passEvent.emit(status);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ConfirmModalComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ConfirmModalComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ConfirmModalComponent.prototype, "passEvent", void 0);
ConfirmModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-modal',
        template: __webpack_require__(/*! raw-loader!./confirm-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-order/component/confirm-modal/confirm-modal.component.html"),
        styles: [__webpack_require__(/*! ./confirm-modal.component.scss */ "./src/app/pages/product/list-order/component/confirm-modal/confirm-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ConfirmModalComponent);



/***/ }),

/***/ "./src/app/pages/product/list-order/component/order-modal/order-modal.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/product/list-order/component/order-modal/order-modal.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host span {\n  font-weight: bold;\n}\n:host .title-section {\n  color: red;\n  margin-bottom: 1.5em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1vcmRlci9jb21wb25lbnQvb3JkZXItbW9kYWwvb3JkZXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1vcmRlci9jb21wb25lbnQvb3JkZXItbW9kYWwvb3JkZXItbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9saXN0LW9yZGVyL2NvbXBvbmVudC9vcmRlci1tb2RhbC9vcmRlci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAudGl0bGUtc2VjdGlvbiB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuIiwiOmhvc3Qgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOmhvc3QgLnRpdGxlLXNlY3Rpb24ge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/product/list-order/component/order-modal/order-modal.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/product/list-order/component/order-modal/order-modal.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OrderModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModalComponent", function() { return OrderModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_api_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/api/order.service */ "./src/app/core/services/api/order.service.ts");
/* harmony import */ var _core_services_api_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/api/customer.service */ "./src/app/core/services/api/customer.service.ts");
/* harmony import */ var _core_services_api_address_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/api/address.service */ "./src/app/core/services/api/address.service.ts");
/* harmony import */ var _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/api/product.service */ "./src/app/core/services/api/product.service.ts");
/* harmony import */ var _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/api/staff.service */ "./src/app/core/services/api/staff.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);













let OrderModalComponent = class OrderModalComponent {
    constructor(formBuilder, orderService, customerService, addressService, productService, staffService) {
        this.formBuilder = formBuilder;
        this.orderService = orderService;
        this.customerService = customerService;
        this.addressService = addressService;
        this.productService = productService;
        this.staffService = staffService;
        // global variable
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeTabId = '1';
        this.submitted = false;
        this.createdDate = new Date();
        this.listProduct = [];
        this.listAddress = [];
        this.products = [];
        this.selectedAddress = null;
        this.readOnly = true;
        this.searchCustomer = '';
        //variable in Product Tab
        this.searchProduct = '';
        this.orderTotal = 0;
        this.filterCustomer = {
            pageNumber: 0,
            pageSize: 100,
            source_id: '',
            cu_type: '',
            customer_group_id: '',
            name: ''
        };
        this.filterProduct = {
            pageNumber: 0,
            pageSize: 100,
            search_name: '',
            category_id: ''
        };
        this.filterStaff = {
            pageNumber: 0,
            pageSize: 100,
            status: '',
            name: ''
        };
        this.initializeForm();
        this._fetchFilter();
        this._loadProvince();
    }
    ngOnInit() {
        if (this.order) {
            this._fetchOrderDetail(this.order.cuo_id);
        }
    }
    //#region Global
    onChangeTab(e) {
        this.activeTabId = e.nextId;
    }
    onBackClick() {
        const tabIndex = parseInt(this.activeTabId);
        this.activeTabId = `${tabIndex - 1}`;
    }
    onNextClick() {
        const tabIndex = parseInt(this.activeTabId);
        this.activeTabId = `${tabIndex + 1}`;
    }
    onSubmitClick() {
        this.submitted = true;
        const customerData = this.formCustomer.value;
        customerData.cu_birthday = this._convertNgbDateToDate(customerData.cu_birthday);
        const data = {
            list_product: this.listProduct,
            customer: Object.assign({}, customerData, { list_address: this.listAddress }),
            cuo_total_price: this.orderTotal,
            cuo_status: 1,
            cuo_discount: this.formOrder.value['cuo_discount'],
            cuo_address: this.selectedAddress,
            cuo_payment_type: 1,
            cuo_payment_status: 1,
            cuo_ship_tax: this.formOrder.value['cuo_ship_tax'],
            cuo_id: this.order ? this.order.cuo_id : null
        };
        this.passEvent.emit({ event: true, data });
    }
    onPrintClick() { }
    onClickCancel() {
        if (this.formCustomer.dirty || this.formOrder.dirty) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Có',
                cancelButtonText: 'Không',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
            }).then(result => {
                if (result.value) {
                    this.passEvent.emit({ event: false });
                }
            });
        }
        else {
            this.passEvent.emit({ event: false });
        }
    }
    initializeForm() {
        this.formOrder = this.formBuilder.group({
            cuo_discount: [0, null],
            cuo_ship_tax: [0, null]
        });
        this.formCustomer = this.formBuilder.group({
            cu_id: [null, null],
            cu_fullname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cu_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cu_mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cu_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cu_birthday: ['', null],
            customer_group_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            source_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cu_address: ['', null],
            cu_province: ['', null],
            cu_district: ['', null],
            cu_ward: ['', null],
            cu_note: ['', null],
            cu_code: [null, null],
            cu_geocoding: [null, null],
            cu_status: [null, null],
            cu_curator_id: [null, null]
        });
    }
    _patchData(data) {
        const { list_product, customer, cuo_discount, cuo_ship_tax, cuo_address } = data;
        this.selectedAddress = cuo_address;
        this.selectedCustomer = customer;
        this._patchCustomer();
        // tab product
        this.listProduct = list_product;
        this.listProduct = this.listProduct.map(item => {
            return Object.assign({}, item, { op_total_value: (item.op_quantity * item.pu_sale_price * (100 - item.op_discount)) / 100 });
        });
        this.formOrder.patchValue({
            cuo_discount: cuo_discount,
            cuo_ship_tax: cuo_ship_tax
        });
        this.sumListProduct();
    }
    _fetchFilter() {
        const sources$ = this.customerService.loadSourceFilter().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        sources$.subscribe((res) => {
            this.sources = res.Data;
        });
        const group$ = this.customerService.loadGroupFilter().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        group$.subscribe((res) => {
            this.groups = res.Data;
        });
        const type$ = this.customerService.loadTypeFilter().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        type$.subscribe((res) => {
            this.types = res.Data;
        });
        const customer$ = this.customerService
            .loadCustomer(this.filterCustomer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        customer$.subscribe((res) => {
            this.customers = res.Data.Results;
        });
        const product$ = this.productService
            .loadProduct(this.filterProduct)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        product$.subscribe((res) => {
            this.products = res.Data.Results;
        });
        const staff$ = this.staffService.searchStaff(this.filterStaff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        staff$.subscribe((res) => {
            this.staffs = res.Data.Results;
        });
    }
    _convertDateToNgbDate(date) {
        if (!date) {
            return null;
        }
        const year = moment__WEBPACK_IMPORTED_MODULE_12__(date).year();
        const month = moment__WEBPACK_IMPORTED_MODULE_12__(date).month() + 1;
        const day = moment__WEBPACK_IMPORTED_MODULE_12__(date).date();
        return new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"](year, month, day);
    }
    _convertNgbDateToDate(ngbDate) {
        if (!ngbDate) {
            return '';
        }
        const newDate = new Date(ngbDate.year, ngbDate.month, ngbDate.day);
        return moment__WEBPACK_IMPORTED_MODULE_12__(newDate).format();
    }
    //#endregion
    //#region Customer Tab
    onClickCreateCustomer() {
        this.selectedCustomer = {
            cu_id: null,
            cu_code: null,
            cu_fullname: '',
            cu_mobile: '',
            cu_email: '',
            cu_birthday: null,
            customer_group_id: 1,
            cu_type: 1,
            source_id: 1,
            cu_note: '',
            cu_address: null,
            cu_geocoding: null,
            cu_status: null,
            cu_curator_id: null
        };
        this.searchCustomer = '';
        this.readOnly = false;
        this._patchCustomer();
    }
    onChangeProvince(e) {
        const districtId = this.provinces.find(item => item.name === e.target.value).id;
        this._loadDistrict(districtId);
    }
    onChangeDistrict(e) {
        const wardId = this.districts.find(item => item.name === e.target.value).id;
        this._loadWard(wardId);
    }
    onRemoveAddress(address) {
        this.listAddress = this.listAddress.filter(item => item.sha_id !== address.sha_id);
    }
    onUpdateAddress(address) {
        this.selectedAddress = address;
        this.formCustomer.patchValue({
            cu_address: address.sha_detail
        });
        this._loadProvince();
    }
    onClickAddress(address) {
        if (this.isView)
            return;
        this.selectedAddress =
            (address.sha_detail ? `${address.sha_detail}, ` : '') +
                address.sha_ward +
                ', ' +
                address.sha_district +
                ', ' +
                address.sha_province;
    }
    onClickUpdateButton() {
        if (this.selectedAddress) {
            const index = this.listAddress.findIndex(item => item.sha_id === this.selectedAddress.sha_id);
            this.listAddress[index] = Object.assign({}, this.listAddress[index], { sha_province: this.formCustomer.controls['cu_province'].value, sha_district: this.formCustomer.controls['cu_district'].value, sha_ward: this.formCustomer.controls['cu_ward'].value, sha_detail: this.formCustomer.controls['cu_address'].value });
        }
        else {
            this.listAddress.push({
                sha_id: this.listAddress.length,
                sha_province: this.formCustomer.controls['cu_province'].value,
                sha_district: this.formCustomer.controls['cu_district'].value,
                sha_ward: this.formCustomer.controls['cu_ward'].value,
                sha_detail: this.formCustomer.controls['cu_address'].value
            });
        }
        this.selectedAddress = null;
        this._loadProvince();
        this.formCustomer.patchValue({
            cu_address: ''
        });
    }
    changeDatalistCustomer(e) {
        this.readOnly = true;
        if (e.target.value === '') {
            this.selectedCustomer = null;
        }
        else {
            this._fetchCustomer(e.target.value);
        }
    }
    _loadProvince() {
        const province$ = this.addressService.loadProvince().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        province$.subscribe((res) => {
            if (res && res.Data) {
                this.provinces = res.Data;
                if (this.selectedAddress) {
                    this.formCustomer.patchValue({ cu_province: this.selectedAddress.sha_province });
                    const provinceId = this.provinces.find(item => item.name === this.selectedAddress.sha_province).id;
                    this._loadDistrict(provinceId, true);
                }
                else {
                    this.formCustomer.patchValue({ cu_province: res.Data[0].name });
                    this._loadDistrict(res.Data[0].id);
                }
            }
        });
    }
    _loadDistrict(provinceId, isFirst = false) {
        const district$ = this.addressService
            .loadDistrict({ province_id: provinceId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        district$.subscribe((res) => {
            if (res && res.Data) {
                this.districts = res.Data;
                if (this.selectedAddress && isFirst) {
                    this.formCustomer.patchValue({ cu_district: this.selectedAddress.sha_district });
                    const districtId = this.districts.find(item => item.name === this.selectedAddress.sha_district).id;
                    this._loadWard(districtId, true);
                }
                else {
                    this.formCustomer.patchValue({ cu_district: res.Data[0].name });
                    this._loadWard(res.Data[0].id);
                }
            }
        });
    }
    _loadWard(districtId, isFirst = false) {
        const ward$ = this.addressService
            .loadWard({ district_id: districtId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        ward$.subscribe((res) => {
            if (res && res.Data) {
                this.wards = res.Data;
                if (this.selectedAddress && isFirst) {
                    this.formCustomer.patchValue({ cu_ward: this.selectedAddress.sha_ward });
                }
                else {
                    this.formCustomer.patchValue({ cu_ward: res.Data[0].name });
                }
            }
        });
    }
    _fetchOrderDetail(id) {
        const orderDetail$ = this.orderService.loadOrderById({ id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        orderDetail$.subscribe((res) => {
            this._patchData(res.Data);
        });
    }
    _fetchCustomer(cu_id) {
        const customer$ = this.customerService
            .loadCustomerById({ cu_id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        customer$.subscribe((res) => {
            this.selectedCustomer = res.Data;
            this._patchCustomer();
        });
    }
    _patchCustomer() {
        const customer = this.selectedCustomer;
        this.listAddress = customer.list_address ? customer.list_address : [];
        this.formCustomer.patchValue({
            cu_id: customer.cu_id,
            cu_fullname: customer.cu_fullname,
            cu_mobile: customer.cu_mobile,
            cu_email: customer.cu_email,
            cu_birthday: this._convertDateToNgbDate(customer.cu_birthday),
            cu_type: customer.cu_type,
            customer_group_id: customer.customer_group_id,
            source_id: customer.source_id,
            cu_note: customer.cu_note,
            cu_code: customer.cu_code,
            cu_address: customer.cu_address,
            cu_geocoding: customer.cu_geocoding,
            cu_status: customer.cu_status,
            cu_curator_id: customer.cu_curator_id
        });
    }
    //#endregion
    //#region Product Tab
    changeDatalistProduct(e) {
        this._fetchProduct(e.target.value);
    }
    onRemoveProduct(product) {
        this.listProduct = this.listProduct.filter(item => item.op_id !== product.op_id);
        this.sumListProduct();
    }
    onChangeQuantity(event, product) {
        const puIndex = this.listProduct.findIndex(item => item.op_id === product.op_id);
        this.listProduct[puIndex] = Object.assign({}, this.listProduct[puIndex], { op_quantity: event.target.value, op_total_value: (event.target.value *
                this.listProduct[puIndex].pu_sale_price *
                (100 - this.listProduct[puIndex].op_discount)) /
                100 });
        this.sumListProduct();
    }
    onChangeDiscount(event, product) {
        const puIndex = this.listProduct.findIndex(item => item.op_id === product.op_id);
        this.listProduct[puIndex] = Object.assign({}, this.listProduct[puIndex], { op_discount: event.target.value, op_total_value: (this.listProduct[puIndex].op_quantity *
                this.listProduct[puIndex].pu_sale_price *
                (100 - event.target.value)) /
                100 });
        this.sumListProduct();
    }
    _fetchProduct(pu_id) {
        const product$ = this.productService
            .loadProductById({ pu_id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        product$.subscribe((res) => {
            const product = res.Data.Results[0];
            this.listProduct.push({
                op_id: this.listProduct.length + 2,
                op_quantity: 1,
                pu_sale_price: product.pu_sale_price,
                product_id: product.pu_id,
                op_discount: 0,
                pu_name: product.pu_name,
                max_quantity: product.pu_quantity,
                op_total_value: product.pu_sale_price
            });
            this.searchProduct = '';
            this.sumListProduct();
        });
    }
    sumListProduct() {
        this.orderTotal = 0;
        this.listProduct.map(item => {
            this.orderTotal += item.op_total_value;
        });
        this.orderTotal =
            (this.orderTotal * (100 - this.formOrder.value['cuo_discount'])) / 100 +
                parseInt(this.formOrder.value['cuo_ship_tax']);
    }
};
OrderModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_services_api_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] },
    { type: _core_services_api_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"] },
    { type: _core_services_api_address_service__WEBPACK_IMPORTED_MODULE_8__["AddressService"] },
    { type: _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"] },
    { type: _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_10__["StaffService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], OrderModalComponent.prototype, "order", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], OrderModalComponent.prototype, "isView", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], OrderModalComponent.prototype, "passEvent", void 0);
OrderModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-modal',
        template: __webpack_require__(/*! raw-loader!./order-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-order/component/order-modal/order-modal.component.html"),
        styles: [__webpack_require__(/*! ./order-modal.component.scss */ "./src/app/pages/product/list-order/component/order-modal/order-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _core_services_api_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"],
        _core_services_api_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"],
        _core_services_api_address_service__WEBPACK_IMPORTED_MODULE_8__["AddressService"],
        _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"],
        _core_services_api_staff_service__WEBPACK_IMPORTED_MODULE_10__["StaffService"]])
], OrderModalComponent);



/***/ }),

/***/ "./src/app/pages/product/list-order/list-order.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/product/list-order/list-order.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .form-inline {\n  align-items: baseline;\n  flex-flow: row;\n}\n:host .card {\n  width: 100%;\n}\n::ng-deep .form-row {\n  justify-content: space-around;\n}\n::ng-deep .form-row .form-group {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1vcmRlci9saXN0LW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0L2xpc3Qtb3JkZXIvbGlzdC1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0FSO0FER0k7RUFDSSxXQUFBO0FDRFI7QURLQTtFQUNJLDZCQUFBO0FDRko7QURJSTtFQUNJLFVBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1vcmRlci9saXN0LW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5mb3JtLWlubGluZSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgfVxuXG4gICAgLmNhcmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbjo6bmctZGVlcCAuZm9ybS1yb3cge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbn0iLCI6aG9zdCAuZm9ybS1pbmxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGZsZXgtZmxvdzogcm93O1xufVxuOmhvc3QgLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5mb3JtLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuOjpuZy1kZWVwIC5mb3JtLXJvdyAuZm9ybS1ncm91cCB7XG4gIHdpZHRoOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/product/list-order/list-order.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/product/list-order/list-order.component.ts ***!
  \******************************************************************/
/*! exports provided: ListOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrderComponent", function() { return ListOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _component_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/order-modal/order-modal.component */ "./src/app/pages/product/list-order/component/order-modal/order-modal.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_api_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/api/order.service */ "./src/app/core/services/api/order.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let ListOrderComponent = class ListOrderComponent {
    constructor(modalService, formBuilder, orderService) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.orderService = orderService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.textSearch = '';
        this.paymentMethodSearch = '';
        this.page = 0;
        this.pageSize = 10;
        this.totalSize = 0;
    }
    ngOnInit() {
        this.breadCrumbItems = [
            { label: 'ERP', path: '/' },
            { label: 'Sản phẩm', path: '/' },
            { label: 'Đặt hàng', path: '/', active: true }
        ];
        this._fetchData();
        this._fetchFilter();
    }
    openOrderModal(order, isView = false) {
        const modalRef = this.modalService.open(_component_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_4__["OrderModalComponent"], {
            centered: true,
            size: 'xl'
        });
        if (order) {
            modalRef.componentInstance.order = order;
            modalRef.componentInstance.isView = isView;
        }
        modalRef.componentInstance.passEvent.subscribe(res => {
            if (res.event) {
                if (order) {
                    this._updateOrder(res.data);
                }
                else {
                    this._createOrder(res.data);
                }
            }
            modalRef.close();
        });
    }
    openConfirmModal(order) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Chắc chắn muốn xóa đơn hàng đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
        }).then(result => {
            if (result.value) {
                this._removeOrder(order);
            }
        });
    }
    onPageChange(page) {
        this.page = page - 1;
        this._fetchData();
    }
    onChangeFilter() {
        this.page--;
        this._fetchData();
    }
    onChangeStatus(event, order) {
        const changeStatus$ = this.orderService
            .updateOrderStatus({
            cuo_id: order.cuo_id,
            cuo_status: event.target.value
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        changeStatus$.subscribe((res) => {
            if (res.Code === 200) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Cập nhật trạng thái đơn hàng thành công',
                    showConfirmButton: false,
                    timer: 2000
                });
                this.page--;
                this._fetchData();
            }
        }, () => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                position: 'top-end',
                type: 'error',
                title: 'Cập nhật trạng thái đơn hàng thất bại',
                showConfirmButton: false,
                timer: 2000
            });
        });
    }
    _fetchData() {
        const order$ = this.orderService
            .loadOrder({
            pageNumber: this.page,
            pageSize: this.pageSize,
            payment_type_id: this.paymentMethodSearch,
            code: this.textSearch
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        order$.subscribe((res) => {
            if (res) {
                this.totalSize = res.Data.TotalNumberOfRecords;
                this.orders = res.Data.Results;
            }
        });
    }
    _fetchFilter() {
        const paymentMethod$ = this.orderService.loadPaymentMethod().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        paymentMethod$.subscribe((res) => {
            this.paymentMethods = res.Data;
        });
        const orderStatus$ = this.orderService.loadOrderStatus().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        orderStatus$.subscribe((res) => {
            this.orderStatus = res.Data;
        });
    }
    _createOrder(data) {
        const createOrder$ = this.orderService.createOrder(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        createOrder$.subscribe((res) => {
            if (res.Code === 200) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Thêm đơn hàng thành công',
                    showConfirmButton: false,
                    timer: 2000
                });
                this.page--;
                this._fetchData();
                this.modalService.dismissAll();
            }
        }, () => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                position: 'top-end',
                type: 'error',
                title: 'Thêm đơn hàng thất bại',
                showConfirmButton: false,
                timer: 2000
            });
            this.modalService.dismissAll();
        });
    }
    _updateOrder(updated) {
        const updateOrder$ = this.orderService.updateOrder(updated).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        updateOrder$.subscribe((res) => {
            if (res.Code === 200) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Cập nhật đơn hàng thành công',
                    showConfirmButton: false,
                    timer: 2000
                });
                this.page--;
                this._fetchData();
                this.modalService.dismissAll();
            }
        }, () => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                position: 'top-end',
                type: 'error',
                title: 'Cập nhật đơn hàng thất bại',
                showConfirmButton: false,
                timer: 2000
            });
            this.modalService.dismissAll();
        });
    }
    _removeOrder(order) {
        const removeOrder$ = this.orderService
            .removeOrder({ customer_orderId: order.cuo_id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        removeOrder$.subscribe((res) => {
            if (res.Code == 200) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Xóa đơn hàng thành công',
                    showConfirmButton: false,
                    timer: 2000
                });
                this.page--;
                this._fetchData();
                this.modalService.dismissAll();
            }
        }, () => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                position: 'top-end',
                type: 'error',
                title: 'Xóa đơn hàng thất bại',
                showConfirmButton: false,
                timer: 2000
            });
            this.modalService.dismissAll();
        });
    }
};
ListOrderComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_services_api_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"] }
];
ListOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-order',
        template: __webpack_require__(/*! raw-loader!./list-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-order/list-order.component.html"),
        styles: [__webpack_require__(/*! ./list-order.component.scss */ "./src/app/pages/product/list-order/list-order.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _core_services_api_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]])
], ListOrderComponent);



/***/ }),

/***/ "./src/app/pages/product/list-product/component/confirm-modal/confirm-modal.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/confirm-modal/confirm-modal.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9jb25maXJtLW1vZGFsL2NvbmZpcm0tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/product/list-product/component/confirm-modal/confirm-modal.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/confirm-modal/confirm-modal.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfirmModalComponent = class ConfirmModalComponent {
    constructor() {
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    onClickButton(status) {
        this.passEvent.emit(status);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ConfirmModalComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ConfirmModalComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ConfirmModalComponent.prototype, "passEvent", void 0);
ConfirmModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-modal',
        template: __webpack_require__(/*! raw-loader!./confirm-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/confirm-modal/confirm-modal.component.html"),
        styles: [__webpack_require__(/*! ./confirm-modal.component.scss */ "./src/app/pages/product/list-product/component/confirm-modal/confirm-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ConfirmModalComponent);



/***/ }),

/***/ "./src/app/pages/product/list-product/component/description-tab/description-tab.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/description-tab/description-tab.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9kZXNjcmlwdGlvbi10YWIvZGVzY3JpcHRpb24tdGFiLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/product/list-product/component/description-tab/description-tab.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/description-tab/description-tab.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DescriptionTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionTabComponent", function() { return DescriptionTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DescriptionTabComponent = class DescriptionTabComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DescriptionTabComponent.prototype, "product", void 0);
DescriptionTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-description-tab',
        template: __webpack_require__(/*! raw-loader!./description-tab.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/description-tab/description-tab.component.html"),
        styles: [__webpack_require__(/*! ./description-tab.component.scss */ "./src/app/pages/product/list-product/component/description-tab/description-tab.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DescriptionTabComponent);



/***/ }),

/***/ "./src/app/pages/product/list-product/component/list-product-type-modal/list-product-type-modal.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/list-product-type-modal/list-product-type-modal.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host tr {\n  cursor: pointer;\n}\n:host tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9saXN0LXByb2R1Y3QtdHlwZS1tb2RhbC9saXN0LXByb2R1Y3QtdHlwZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9saXN0LXByb2R1Y3QvY29tcG9uZW50L2xpc3QtcHJvZHVjdC10eXBlLW1vZGFsL2xpc3QtcHJvZHVjdC10eXBlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtBQ0FSO0FERVE7RUFDSSwyQkFBQTtBQ0FaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9saXN0LXByb2R1Y3QvY29tcG9uZW50L2xpc3QtcHJvZHVjdC10eXBlLW1vZGFsL2xpc3QtcHJvZHVjdC10eXBlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHRyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICB9XG4gICAgfVxufSIsIjpob3N0IHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgdHIuaXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/product/list-product/component/list-product-type-modal/list-product-type-modal.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/list-product-type-modal/list-product-type-modal.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ListProductTypeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductTypeModalComponent", function() { return ListProductTypeModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data */ "./src/app/pages/product/list-product/data.ts");
/* harmony import */ var _product_type_modal_product_type_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-type-modal/product-type-modal.component */ "./src/app/pages/product/list-product/component/product-type-modal/product-type-modal.component.ts");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirm-modal/confirm-modal.component */ "./src/app/pages/product/list-product/component/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);







let ListProductTypeModalComponent = class ListProductTypeModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.loadProductTypeData();
    }
    onClickCancel() {
        this.passEvent.emit({ event: false });
    }
    onClickChoose() {
        this.passEvent.emit({ event: false });
    }
    onClickProductType(productType) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(this.selectedProductType)) {
            this.selectedProductType = productType;
        }
        else {
            if (this.selectedProductType.product_type_id !== productType.product_type_id) {
                this.selectedProductType = productType;
            }
            else {
                this.selectedProductType = null;
            }
        }
    }
    openProductTypeModal() {
        const modalRef = this.modalService.open(_product_type_modal_product_type_modal_component__WEBPACK_IMPORTED_MODULE_4__["ProductTypeModalComponent"], {
            centered: true
        });
        if (this.selectedProductType) {
            modalRef.componentInstance.productType = this.selectedProductType;
        }
        modalRef.componentInstance.passEvent.subscribe(res => {
            if (res.event) {
                if (this.selectedProductType) {
                    this.updateProductType(this.selectedProductType, res.form);
                }
                else {
                    this.createProductType(res.form);
                }
            }
            modalRef.close();
        });
    }
    openConfirmModal() {
        const modalRef = this.modalService.open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalComponent"], {
            centered: true
        });
        modalRef.componentInstance.title = 'Xác nhận xóa loại sản phẩm';
        modalRef.componentInstance.message =
            'Bạn có chắc chắn muốn xóa loại sản phẩm đã chọn không?';
        modalRef.componentInstance.passEvent.subscribe(res => {
            if (res) {
                this.removeProductType(this.selectedProductType);
            }
            modalRef.close();
        });
    }
    loadProductTypeData() {
        this.productTypes = _data__WEBPACK_IMPORTED_MODULE_3__["productTypeData"];
    }
    createProductType(data) { }
    updateProductType(productTypeId, data) { }
    removeProductType(productType) { }
};
ListProductTypeModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ListProductTypeModalComponent.prototype, "passEvent", void 0);
ListProductTypeModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-product-type-modal',
        template: __webpack_require__(/*! raw-loader!./list-product-type-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/list-product-type-modal/list-product-type-modal.component.html"),
        styles: [__webpack_require__(/*! ./list-product-type-modal.component.scss */ "./src/app/pages/product/list-product/component/list-product-type-modal/list-product-type-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], ListProductTypeModalComponent);



/***/ }),

/***/ "./src/app/pages/product/list-product/component/list-unit-modal/list-unit-modal.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/list-unit-modal/list-unit-modal.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host tr {\n  cursor: pointer;\n}\n:host tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9saXN0LXVuaXQtbW9kYWwvbGlzdC11bml0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0L2xpc3QtcHJvZHVjdC9jb21wb25lbnQvbGlzdC11bml0LW1vZGFsL2xpc3QtdW5pdC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7QUNBUjtBREVRO0VBQ0ksMkJBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9saXN0LXVuaXQtbW9kYWwvbGlzdC11bml0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHRyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICB9XG4gICAgfVxufSIsIjpob3N0IHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgdHIuaXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/product/list-product/component/list-unit-modal/list-unit-modal.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/list-unit-modal/list-unit-modal.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ListUnitModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUnitModalComponent", function() { return ListUnitModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data */ "./src/app/pages/product/list-product/data.ts");
/* harmony import */ var _unit_modal_unit_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unit-modal/unit-modal.component */ "./src/app/pages/product/list-product/component/unit-modal/unit-modal.component.ts");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirm-modal/confirm-modal.component */ "./src/app/pages/product/list-product/component/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);







let ListUnitModalComponent = class ListUnitModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.loadUnitData();
    }
    onClickCancel() {
        this.passEvent.emit({ event: false });
    }
    onClickChoose() {
        this.passEvent.emit({ event: false });
    }
    onClickUnit(unit) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(this.selectedUnit)) {
            this.selectedUnit = unit;
        }
        else {
            if (this.selectedUnit.unit_id !== unit.unit_id) {
                this.selectedUnit = unit;
            }
            else {
                this.selectedUnit = null;
            }
        }
    }
    openUnitModal() {
        const modalRef = this.modalService.open(_unit_modal_unit_modal_component__WEBPACK_IMPORTED_MODULE_4__["UnitModalComponent"], {
            centered: true
        });
        if (this.selectedUnit) {
            modalRef.componentInstance.unit = this.selectedUnit;
        }
        modalRef.componentInstance.passEvent.subscribe(res => {
            if (res.event) {
                if (this.selectedUnit) {
                    this.updateUnit(this.selectedUnit, res.form);
                }
                else {
                    this.createUnit(res.form);
                }
            }
            modalRef.close();
        });
    }
    openConfirmModal() {
        const modalRef = this.modalService.open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalComponent"], {
            centered: true
        });
        modalRef.componentInstance.title = 'Xác nhận xóa đơn vị';
        modalRef.componentInstance.message =
            'Bạn có chắc chắn muốn xóa đơn vị đã chọn không?';
        modalRef.componentInstance.passEvent.subscribe(res => {
            if (res) {
                this.removeUnit(this.selectedUnit);
            }
            modalRef.close();
        });
    }
    loadUnitData() {
        this.units = _data__WEBPACK_IMPORTED_MODULE_3__["unitData"];
    }
    createUnit(data) { }
    updateUnit(unitId, data) { }
    removeUnit(unit) { }
};
ListUnitModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ListUnitModalComponent.prototype, "passEvent", void 0);
ListUnitModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-unit-modal',
        template: __webpack_require__(/*! raw-loader!./list-unit-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/list-unit-modal/list-unit-modal.component.html"),
        styles: [__webpack_require__(/*! ./list-unit-modal.component.scss */ "./src/app/pages/product/list-product/component/list-unit-modal/list-unit-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], ListUnitModalComponent);



/***/ }),

/***/ "./src/app/pages/product/list-product/component/product-modal/product-modal.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/product-modal/product-modal.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host span {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9wcm9kdWN0LW1vZGFsL3Byb2R1Y3QtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9wcm9kdWN0LW1vZGFsL3Byb2R1Y3QtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxVQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0L2xpc3QtcHJvZHVjdC9jb21wb25lbnQvcHJvZHVjdC1tb2RhbC9wcm9kdWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkXG4gICAgfVxufSIsIjpob3N0IHNwYW4ge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/product/list-product/component/product-modal/product-modal.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/product-modal/product-modal.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProductModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModalComponent", function() { return ProductModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _list_unit_modal_list_unit_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list-unit-modal/list-unit-modal.component */ "./src/app/pages/product/list-product/component/list-unit-modal/list-unit-modal.component.ts");
/* harmony import */ var _list_product_type_modal_list_product_type_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../list-product-type-modal/list-product-type-modal.component */ "./src/app/pages/product/list-product/component/list-product-type-modal/list-product-type-modal.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_core_services_api_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api/product.service */ "./src/app/core/services/api/product.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);











let ProductModalComponent = class ProductModalComponent {
    constructor(formBuilder, modalService, productService) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.productService = productService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
        this.initializeForm();
        this._fetchFilter();
    }
    ngOnInit() {
        if (this.product) {
            this.patchData(this.product);
        }
    }
    openUnitModal() {
        const modalRef = this.modalService.open(_list_unit_modal_list_unit_modal_component__WEBPACK_IMPORTED_MODULE_4__["ListUnitModalComponent"], {
            centered: true,
            size: 'lg'
        });
        modalRef.componentInstance.passEvent.subscribe(() => {
            modalRef.close();
        });
    }
    openProductTypeModal() {
        const modalRef = this.modalService.open(_list_product_type_modal_list_product_type_modal_component__WEBPACK_IMPORTED_MODULE_5__["ListProductTypeModalComponent"], {
            centered: true,
            size: 'lg'
        });
        modalRef.componentInstance.passEvent.subscribe(() => {
            modalRef.close();
        });
    }
    onClickSubmit() {
        this.submitted = true;
        if (this.form.valid) {
            const data = this.form.value;
            data.pu_expired_date = this._convertNgbDateToDate(data.pu_expired_date);
            this.passEvent.emit({ event: true, form: data });
        }
    }
    onClickCancel() {
        if (this.form.dirty) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Có',
                cancelButtonText: 'Không',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
            }).then(result => {
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
            pu_id: ['', null],
            pu_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pu_quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pu_buy_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pu_sale_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pu_saleoff: ['', null],
            pu_short_description: ['', null],
            pu_description: ['', null],
            pu_unit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            product_category_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            provider_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pu_tax: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pu_expired_date: [null, null],
            pu_weight: ['', null]
        });
    }
    patchData(product) {
        console.log(product);
        this.form.patchValue({
            pu_id: product.pu_id,
            pu_name: product.pu_name,
            pu_quantity: product.pu_quantity,
            pu_buy_price: product.pu_buy_price,
            pu_sale_price: product.pu_sale_price,
            pu_saleoff: product.pu_saleoff,
            pu_short_description: product.pu_short_description,
            pu_description: product.pu_description,
            pu_unit: product.pu_unit,
            product_category_id: product.product_category_id,
            provider_id: product.provider_id,
            pu_tax: product.pu_tax,
            pu_expired_date: this._convertDateToNgbDate(product.pu_expired_date),
            pu_weight: product.pu_weight
        });
    }
    _fetchFilter() {
        const category$ = this.productService.loadCategory().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        category$.subscribe((res) => {
            this.categories = res.Data;
        });
        const supplier$ = this.productService.loadSupplier().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        supplier$.subscribe((res) => {
            this.suppliers = res.Data;
        });
        const unit$ = this.productService.loadUnit().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        unit$.subscribe((res) => {
            this.units = res.Data;
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
        const newDate = new Date(ngbDate.year, ngbDate.month, ngbDate.day);
        return moment__WEBPACK_IMPORTED_MODULE_8__(newDate).format();
    }
};
ProductModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: src_app_core_services_api_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductModalComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ProductModalComponent.prototype, "passEvent", void 0);
ProductModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-modal',
        template: __webpack_require__(/*! raw-loader!./product-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/product-modal/product-modal.component.html"),
        styles: [__webpack_require__(/*! ./product-modal.component.scss */ "./src/app/pages/product/list-product/component/product-modal/product-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
        src_app_core_services_api_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]])
], ProductModalComponent);



/***/ }),

/***/ "./src/app/pages/product/list-product/component/product-type-modal/product-type-modal.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/product-type-modal/product-type-modal.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host span {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9wcm9kdWN0LXR5cGUtbW9kYWwvcHJvZHVjdC10eXBlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0L2xpc3QtcHJvZHVjdC9jb21wb25lbnQvcHJvZHVjdC10eXBlLW1vZGFsL3Byb2R1Y3QtdHlwZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFVBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9wcm9kdWN0LXR5cGUtbW9kYWwvcHJvZHVjdC10eXBlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkXG4gICAgfVxufSIsIjpob3N0IHNwYW4ge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/product/list-product/component/product-type-modal/product-type-modal.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/product-type-modal/product-type-modal.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProductTypeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTypeModalComponent", function() { return ProductTypeModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-modal/confirm-modal.component */ "./src/app/pages/product/list-product/component/confirm-modal/confirm-modal.component.ts");





let ProductTypeModalComponent = class ProductTypeModalComponent {
    constructor(formBuilder, modalService) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
        this.initializeForm();
    }
    ngOnInit() {
        if (this.productType) {
            this.patchData(this.productType);
        }
    }
    onClickSubmit() {
        this.submitted = true;
        if (this.form.valid) {
            this.passEvent.emit({ event: true, form: this.form.value });
        }
    }
    onClickCancel() {
        if (this.form.dirty) {
            const modalRef = this.modalService.open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], {
                centered: true
            });
            modalRef.componentInstance.title = 'Thông báo';
            modalRef.componentInstance.message =
                'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?';
            modalRef.componentInstance.passEvent.subscribe(res => {
                if (res) {
                    this.passEvent.emit({ event: false });
                }
                modalRef.close();
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
            product_type_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            product_type_status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            product_type_description: ['', null]
        });
    }
    patchData(productType) {
        this.form.patchValue({
            product_type_name: productType.product_type_name,
            product_type_status: productType.product_type_status,
            product_type_description: productType.product_type_description
        });
    }
};
ProductTypeModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductTypeModalComponent.prototype, "productType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ProductTypeModalComponent.prototype, "passEvent", void 0);
ProductTypeModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-type-modal',
        template: __webpack_require__(/*! raw-loader!./product-type-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/product-type-modal/product-type-modal.component.html"),
        styles: [__webpack_require__(/*! ./product-type-modal.component.scss */ "./src/app/pages/product/list-product/component/product-type-modal/product-type-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
], ProductTypeModalComponent);



/***/ }),

/***/ "./src/app/pages/product/list-product/component/purchase-history-tab/purchase-history-tab.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/purchase-history-tab/purchase-history-tab.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host th {\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9wdXJjaGFzZS1oaXN0b3J5LXRhYi9wdXJjaGFzZS1oaXN0b3J5LXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9saXN0LXByb2R1Y3QvY29tcG9uZW50L3B1cmNoYXNlLWhpc3RvcnktdGFiL3B1cmNoYXNlLWhpc3RvcnktdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9wdXJjaGFzZS1oaXN0b3J5LXRhYi9wdXJjaGFzZS1oaXN0b3J5LXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgdGgge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cbn1cbiIsIjpob3N0IHRoIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/product/list-product/component/purchase-history-tab/purchase-history-tab.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/purchase-history-tab/purchase-history-tab.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PurchaseHistoryTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseHistoryTabComponent", function() { return PurchaseHistoryTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PurchaseHistoryTabComponent = class PurchaseHistoryTabComponent {
    constructor() {
        this.purchaseHistoryData = [
            {
                purchase_id: 'PH01',
                purchase_time: '12/01/2020',
                purchase_quantity: 10,
                unit: 'kg',
                customer: 'Nguyen Van A',
                creator: 'Nguyen Van B'
            },
            {
                purchase_id: 'PH02',
                purchase_time: '12/01/2020',
                purchase_quantity: 100,
                unit: 'km',
                customer: 'Nguyen Van A',
                creator: 'Nguyen Van B'
            }
        ];
    }
    ngOnInit() { }
};
PurchaseHistoryTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-history-tab',
        template: __webpack_require__(/*! raw-loader!./purchase-history-tab.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/purchase-history-tab/purchase-history-tab.component.html"),
        styles: [__webpack_require__(/*! ./purchase-history-tab.component.scss */ "./src/app/pages/product/list-product/component/purchase-history-tab/purchase-history-tab.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PurchaseHistoryTabComponent);



/***/ }),

/***/ "./src/app/pages/product/list-product/component/unit-modal/unit-modal.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/unit-modal/unit-modal.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host span {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC91bml0LW1vZGFsL3VuaXQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC91bml0LW1vZGFsL3VuaXQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxVQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0L2xpc3QtcHJvZHVjdC9jb21wb25lbnQvdW5pdC1tb2RhbC91bml0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkXG4gICAgfVxufSIsIjpob3N0IHNwYW4ge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/product/list-product/component/unit-modal/unit-modal.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/unit-modal/unit-modal.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UnitModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitModalComponent", function() { return UnitModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-modal/confirm-modal.component */ "./src/app/pages/product/list-product/component/confirm-modal/confirm-modal.component.ts");





let UnitModalComponent = class UnitModalComponent {
    constructor(formBuilder, modalService) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.passEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
        this.initializeForm();
    }
    ngOnInit() {
        if (this.unit) {
            this.patchData(this.unit);
        }
    }
    onClickSubmit() {
        this.submitted = true;
        if (this.form.valid) {
            this.passEvent.emit({ event: true, form: this.form.value });
        }
    }
    onClickCancel() {
        if (this.form.dirty) {
            const modalRef = this.modalService.open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], {
                centered: true
            });
            modalRef.componentInstance.title = 'Thông báo';
            modalRef.componentInstance.message =
                'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?';
            modalRef.componentInstance.passEvent.subscribe(res => {
                if (res) {
                    this.passEvent.emit({ event: false });
                }
                modalRef.close();
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
            unit_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    patchData(unit) {
        this.form.patchValue({
            unit_name: unit.unit_name
        });
    }
};
UnitModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UnitModalComponent.prototype, "unit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], UnitModalComponent.prototype, "passEvent", void 0);
UnitModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unit-modal',
        template: __webpack_require__(/*! raw-loader!./unit-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/unit-modal/unit-modal.component.html"),
        styles: [__webpack_require__(/*! ./unit-modal.component.scss */ "./src/app/pages/product/list-product/component/unit-modal/unit-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
], UnitModalComponent);



/***/ }),

/***/ "./src/app/pages/product/list-product/data.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/product/list-product/data.ts ***!
  \****************************************************/
/*! exports provided: productData, unitData, productTypeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productData", function() { return productData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitData", function() { return unitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productTypeData", function() { return productTypeData; });
const productData = [
    {
        product_id: 'PRO01',
        product_name: 'Gạo nếp',
        quantity: 50,
        in_price: 15000,
        out_price: 20000,
        unit: 'kg',
        product_type: 'Lương thực',
        vendor: 'Company A',
        tax: '10%',
        expired_date: '01/01/2022',
        weight: 0,
        created_date: '01/01/2020',
        promotion: '',
        short_description: 'Gạo ngon',
        full_description: 'Loại gạo ngon nhất Việt Nam'
    },
    {
        product_id: 'PRO02',
        product_name: 'Gạo tẻ',
        quantity: 50,
        in_price: 15000,
        out_price: 20000,
        unit: 'kg',
        product_type: 'Lương thực',
        vendor: 'Company A',
        tax: '10%',
        expired_date: '01/01/2022',
        weight: 0,
        created_date: '01/01/2020',
        promotion: '',
        short_description: 'Gạo ngon',
        full_description: 'Loại gạo ngon nhì Việt Nam'
    },
    {
        product_id: 'PRO03',
        product_name: 'Gạo lứt',
        quantity: 50,
        in_price: 15000,
        out_price: 20000,
        unit: 'kg',
        product_type: 'Lương thực',
        vendor: 'Company A',
        tax: '10%',
        expired_date: '01/01/2022',
        weight: 0,
        created_date: '01/01/2020',
        promotion: '',
        short_description: 'Gạo ngon',
        full_description: 'Loại gạo ngon Top3 Việt Nam'
    }
];
const unitData = [
    {
        unit_id: 'UNI01',
        unit_name: 'kg'
    },
    {
        unit_id: 'UNI02',
        unit_name: 'km'
    }
];
const productTypeData = [
    {
        product_type_id: 'PT01',
        product_type_name: 'Lương thực',
        product_type_description: '',
        product_type_status: 'OK',
        created_date: '01/01/2020'
    },
    {
        product_type_id: 'PT02',
        product_type_name: 'Thực phẩm',
        product_type_description: '',
        product_type_status: 'Not OK',
        created_date: '01/01/2020'
    }
];



/***/ }),

/***/ "./src/app/pages/product/list-product/list-product.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/product/list-product/list-product.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .form-inline {\n  align-items: baseline;\n  flex-flow: row;\n}\n:host tr {\n  cursor: pointer;\n}\n:host tr.is-selected {\n  background-color: lightgray;\n}\n::ng-deep .form-row {\n  justify-content: space-around;\n}\n::ng-deep .form-row .form-group {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2xpc3QtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9saXN0LXByb2R1Y3QvbGlzdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDQVI7QURHSTtFQUNJLGVBQUE7QUNEUjtBREdRO0VBQ0ksMkJBQUE7QUNEWjtBRE1BO0VBQ0ksNkJBQUE7QUNISjtBREtJO0VBQ0ksVUFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9saXN0LXByb2R1Y3QvbGlzdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5mb3JtLWlubGluZSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgfVxuXG4gICAgdHIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJi5pcy1zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjo6bmctZGVlcCAuZm9ybS1yb3cge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbn0iLCI6aG9zdCAuZm9ybS1pbmxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGZsZXgtZmxvdzogcm93O1xufVxuOmhvc3QgdHIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCB0ci5pcy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuOjpuZy1kZWVwIC5mb3JtLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuOjpuZy1kZWVwIC5mb3JtLXJvdyAuZm9ybS1ncm91cCB7XG4gIHdpZHRoOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/product/list-product/list-product.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/product/list-product/list-product.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductComponent", function() { return ListProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _component_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/product-modal/product-modal.component */ "./src/app/pages/product/list-product/component/product-modal/product-modal.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/api/product.service */ "./src/app/core/services/api/product.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);










let ListProductComponent = class ListProductComponent {
    constructor(modalService, formBuilder, productService) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.textSearch = '';
        this.categorySearch = '';
        this.page = 0;
        this.pageSize = 10;
        this.totalSize = 0;
        this.selectedProduct = null;
    }
    ngOnInit() {
        this.breadCrumbItems = [
            { label: 'ERP', path: '/' },
            { label: 'Sản phẩm', path: '/' },
            { label: 'Thông tin sản phẩm', path: '/', active: true }
        ];
        this._fetchData();
        this._fetchFilter();
    }
    onClickProduct(product) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.selectedProduct)) {
            this.selectedProduct = product;
        }
        else {
            if (this.selectedProduct.pu_id !== product.pu_id) {
                this.selectedProduct = product;
            }
            else {
                this.selectedProduct = null;
            }
        }
    }
    openProductModal(product) {
        const modalRef = this.modalService.open(_component_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_4__["ProductModalComponent"], {
            centered: true,
            size: 'lg'
        });
        if (product) {
            this.onClickProduct(product);
            modalRef.componentInstance.product = product;
        }
        modalRef.componentInstance.passEvent.subscribe(res => {
            if (res.event) {
                if (product) {
                    this._updateProduct(res.form);
                }
                else {
                    this._createProduct(res.form);
                }
            }
            modalRef.close();
        });
    }
    openConfirmModal(product) {
        this.onClickProduct(product);
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: 'Chắc chắn muốn xóa sản phẩm đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
        }).then(result => {
            if (result.value) {
                this._removeProduct(product);
            }
        });
    }
    onPageChange(page) {
        this.page = page - 1;
        this._fetchData();
    }
    onChangeFilter() {
        this.page--;
        this._fetchData();
    }
    readURL(event) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const import$ = this.productService
                .updateImage(file, this.selectedProduct.pu_id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroyed$));
            import$.subscribe((res) => {
                if (res.Code === 200) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                        position: 'top-end',
                        type: 'success',
                        title: 'Cập nhật ảnh sản phẩm thành công',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    this.page--;
                    this._fetchData();
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                        position: 'top-end',
                        type: 'error',
                        title: 'Cập nhật ảnh sản phẩm thất bại',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            }, () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                    position: 'top-end',
                    type: 'error',
                    title: 'Cập nhật ảnh sản phẩm thất bại',
                    showConfirmButton: false,
                    timer: 2000
                });
            });
            // const reader = new FileReader();
            // reader.onload = e => (this.thumbnail = reader.result);
            // reader.readAsDataURL(file);
        }
    }
    _fetchData() {
        const product$ = this.productService
            .loadProduct({
            pageNumber: this.page,
            pageSize: this.pageSize,
            search_name: this.textSearch,
            category_id: this.categorySearch
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroyed$));
        product$.subscribe((res) => {
            if (res) {
                this.totalSize = res.Data.TotalNumberOfRecords;
                this.products = res.Data.Results;
            }
        });
    }
    _fetchFilter() {
        const category$ = this.productService.loadCategory().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroyed$));
        category$.subscribe((res) => {
            this.categories = res.Data;
        });
    }
    _createProduct(data) {
        const createProduct$ = this.productService.createProduct(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroyed$));
        createProduct$.subscribe((res) => {
            if (res.Code === 200) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Thêm sản phẩm thành công',
                    showConfirmButton: false,
                    timer: 2000
                });
                this.page--;
                this._fetchData();
                this.modalService.dismissAll();
            }
        }, () => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                position: 'top-end',
                type: 'error',
                title: 'Thêm sản phẩm thất bại',
                showConfirmButton: false,
                timer: 2000
            });
            this.modalService.dismissAll();
        });
    }
    _updateProduct(updated) {
        const updateProduct$ = this.productService
            .updateProduct(updated)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroyed$));
        updateProduct$.subscribe((res) => {
            if (res.Code === 200) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Cập nhật sản phẩm thành công',
                    showConfirmButton: false,
                    timer: 2000
                });
                this.page--;
                this._fetchData();
                this.modalService.dismissAll();
            }
        }, () => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                position: 'top-end',
                type: 'error',
                title: 'Cập nhật sản phẩm thất bại',
                showConfirmButton: false,
                timer: 2000
            });
            this.modalService.dismissAll();
        });
    }
    _removeProduct(product) {
        const removeProduct$ = this.productService
            .removeProduct({ productId: product.pu_id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroyed$));
        removeProduct$.subscribe((res) => {
            if (res.Code == 200) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Xóa sản phẩm thành công',
                    showConfirmButton: false,
                    timer: 2000
                });
                this.page--;
                this._fetchData();
                this.modalService.dismissAll();
            }
        }, () => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                position: 'top-end',
                type: 'error',
                title: 'Xóa sản phẩm thất bại',
                showConfirmButton: false,
                timer: 2000
            });
            this.modalService.dismissAll();
        });
    }
};
ListProductComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }
];
ListProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-product',
        template: __webpack_require__(/*! raw-loader!./list-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/list-product.component.html"),
        styles: [__webpack_require__(/*! ./list-product.component.scss */ "./src/app/pages/product/list-product/list-product.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]])
], ListProductComponent);



/***/ }),

/***/ "./src/app/pages/product/product-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/product/product-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-product/list-product.component */ "./src/app/pages/product/list-product/list-product.component.ts");
/* harmony import */ var _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-order/list-order.component */ "./src/app/pages/product/list-order/list-order.component.ts");
/* harmony import */ var _product_statistic_product_statistic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-statistic/product-statistic.component */ "./src/app/pages/product/product-statistic/product-statistic.component.ts");






const routes = [
    {
        path: 'list-product',
        component: _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_3__["ListProductComponent"]
    },
    {
        path: 'list-order',
        component: _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_4__["ListOrderComponent"]
    },
    {
        path: 'product-statistic',
        component: _product_statistic_product_statistic_component__WEBPACK_IMPORTED_MODULE_5__["ProductStatisticComponent"]
    }
];
let ProductRoutingModule = class ProductRoutingModule {
};
ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductRoutingModule);



/***/ }),

/***/ "./src/app/pages/product/product-statistic/product-statistic.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/product/product-statistic/product-statistic.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .form-inline {\n  align-items: baseline;\n  flex-flow: row;\n}\n:host .table-responsive {\n  overflow: auto;\n  height: calc(100% - 110px);\n}\n:host .table-responsive thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .table-responsive tr {\n  cursor: pointer;\n}\n:host .table-responsive tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbmQvUHJvamVjdC9Db0VSUC9mZS1jb2VycC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1zdGF0aXN0aWMvcHJvZHVjdC1zdGF0aXN0aWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1zdGF0aXN0aWMvcHJvZHVjdC1zdGF0aXN0aWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNBSjtBREdFO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0FDREo7QURJTTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDRlI7QURNSTtFQUNFLGVBQUE7QUNKTjtBRE1NO0VBQ0UsMkJBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1zdGF0aXN0aWMvcHJvZHVjdC1zdGF0aXN0aWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5mb3JtLWlubGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGZsZXgtZmxvdzogcm93O1xuICB9XG5cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTEwcHgpO1xuXG4gICAgdGhlYWQge1xuICAgICAgdGgge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJi5pcy1zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5mb3JtLWlubGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZmxleC1mbG93OiByb3c7XG59XG46aG9zdCAudGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExMHB4KTtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHRoZWFkIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUgdHIuaXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/product/product-statistic/product-statistic.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/product/product-statistic/product-statistic.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductStatisticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStatisticComponent", function() { return ProductStatisticComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/api/product.service */ "./src/app/core/services/api/product.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ProductStatisticComponent = class ProductStatisticComponent {
    constructor(element, formBuilder, productService) {
        this.element = element;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.height = 300;
        this.containerHeight = 0;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.textSearch = '';
        this.categorySearch = '';
        this.page = 0;
        this.pageSize = 10;
        this.totalSize = 0;
        this.selectedProduct = null;
        this.element.nativeElement;
    }
    ngOnInit() {
        var el = this.element.nativeElement;
        this.containerHeight = el.children[0].clientHeight;
        this._fetchData();
        this._fetchFilter();
    }
    onResizeEnd(event) {
        if (event) {
            if (event.rectangle.height != null && event.rectangle.height < 500) {
                this.height = event.rectangle.height;
            }
        }
    }
    onResize(e) {
        var el = this.element.nativeElement;
        this.containerHeight = el.children[0].clientHeight;
    }
    onClickTest() {
        if (this.height <= 10)
            this.height = 300;
        else
            this.height = 10;
    }
    onPageChange(page) {
        this.page = page - 1;
        this._fetchData();
    }
    onChangeFilter() {
        this.page--;
        this._fetchData();
    }
    _fetchData() {
        const product$ = this.productService
            .loadProduct({
            pageNumber: this.page,
            pageSize: this.pageSize,
            search_name: this.textSearch,
            category_id: this.categorySearch
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        product$.subscribe((res) => {
            if (res) {
                this.totalSize = res.Data.TotalNumberOfRecords;
                this.products = res.Data.Results;
                this.selectedProduct = this.products[0];
            }
        });
    }
    _fetchFilter() {
        const category$ = this.productService.loadCategory().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        category$.subscribe((res) => {
            this.categories = res.Data;
        });
    }
};
ProductStatisticComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
ProductStatisticComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-statistic',
        template: __webpack_require__(/*! raw-loader!./product-statistic.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/product-statistic/product-statistic.component.html"),
        host: {
            '(window:resize)': 'onResize($event)'
        },
        styles: [__webpack_require__(/*! ./product-statistic.component.scss */ "./src/app/pages/product/product-statistic/product-statistic.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], ProductStatisticComponent);



/***/ }),

/***/ "./src/app/pages/product/product.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.module.ts ***!
  \*************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm2015/angular-resizable-element.js");
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ui/ui.module */ "./src/app/shared/ui/ui.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-product/list-product.component */ "./src/app/pages/product/list-product/list-product.component.ts");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/pages/product/product-routing.module.ts");
/* harmony import */ var _list_product_component_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-product/component/product-modal/product-modal.component */ "./src/app/pages/product/list-product/component/product-modal/product-modal.component.ts");
/* harmony import */ var _list_product_component_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-product/component/confirm-modal/confirm-modal.component */ "./src/app/pages/product/list-product/component/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _list_product_component_list_unit_modal_list_unit_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-product/component/list-unit-modal/list-unit-modal.component */ "./src/app/pages/product/list-product/component/list-unit-modal/list-unit-modal.component.ts");
/* harmony import */ var _list_product_component_unit_modal_unit_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-product/component/unit-modal/unit-modal.component */ "./src/app/pages/product/list-product/component/unit-modal/unit-modal.component.ts");
/* harmony import */ var _list_product_component_list_product_type_modal_list_product_type_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list-product/component/list-product-type-modal/list-product-type-modal.component */ "./src/app/pages/product/list-product/component/list-product-type-modal/list-product-type-modal.component.ts");
/* harmony import */ var _list_product_component_product_type_modal_product_type_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./list-product/component/product-type-modal/product-type-modal.component */ "./src/app/pages/product/list-product/component/product-type-modal/product-type-modal.component.ts");
/* harmony import */ var _list_product_component_description_tab_description_tab_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./list-product/component/description-tab/description-tab.component */ "./src/app/pages/product/list-product/component/description-tab/description-tab.component.ts");
/* harmony import */ var _list_product_component_purchase_history_tab_purchase_history_tab_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./list-product/component/purchase-history-tab/purchase-history-tab.component */ "./src/app/pages/product/list-product/component/purchase-history-tab/purchase-history-tab.component.ts");
/* harmony import */ var _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./list-order/list-order.component */ "./src/app/pages/product/list-order/list-order.component.ts");
/* harmony import */ var _list_order_component_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./list-order/component/confirm-modal/confirm-modal.component */ "./src/app/pages/product/list-order/component/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _list_order_component_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./list-order/component/order-modal/order-modal.component */ "./src/app/pages/product/list-order/component/order-modal/order-modal.component.ts");
/* harmony import */ var _product_statistic_product_statistic_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./product-statistic/product-statistic.component */ "./src/app/pages/product/product-statistic/product-statistic.component.ts");























let ProductModule = class ProductModule {
};
ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_8__["ListProductComponent"],
            _list_product_component_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_10__["ProductModalComponent"],
            _list_product_component_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalComponent"],
            _list_product_component_list_unit_modal_list_unit_modal_component__WEBPACK_IMPORTED_MODULE_12__["ListUnitModalComponent"],
            _list_product_component_unit_modal_unit_modal_component__WEBPACK_IMPORTED_MODULE_13__["UnitModalComponent"],
            _list_product_component_list_product_type_modal_list_product_type_modal_component__WEBPACK_IMPORTED_MODULE_14__["ListProductTypeModalComponent"],
            _list_product_component_product_type_modal_product_type_modal_component__WEBPACK_IMPORTED_MODULE_15__["ProductTypeModalComponent"],
            _list_product_component_description_tab_description_tab_component__WEBPACK_IMPORTED_MODULE_16__["DescriptionTabComponent"],
            _list_product_component_purchase_history_tab_purchase_history_tab_component__WEBPACK_IMPORTED_MODULE_17__["PurchaseHistoryTabComponent"],
            _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_18__["ListOrderComponent"],
            _list_order_component_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmModalComponent"],
            _list_order_component_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_20__["OrderModalComponent"],
            _product_statistic_product_statistic_component__WEBPACK_IMPORTED_MODULE_21__["ProductStatisticComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UIModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabsetModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_9__["ProductRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbProgressbarModule"],
            angular_resizable_element__WEBPACK_IMPORTED_MODULE_5__["ResizableModule"]
        ],
        entryComponents: [
            _list_product_component_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_10__["ProductModalComponent"],
            _list_product_component_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalComponent"],
            _list_product_component_list_unit_modal_list_unit_modal_component__WEBPACK_IMPORTED_MODULE_12__["ListUnitModalComponent"],
            _list_product_component_unit_modal_unit_modal_component__WEBPACK_IMPORTED_MODULE_13__["UnitModalComponent"],
            _list_product_component_list_product_type_modal_list_product_type_modal_component__WEBPACK_IMPORTED_MODULE_14__["ListProductTypeModalComponent"],
            _list_product_component_product_type_modal_product_type_modal_component__WEBPACK_IMPORTED_MODULE_15__["ProductTypeModalComponent"],
            _list_order_component_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmModalComponent"],
            _list_order_component_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_20__["OrderModalComponent"]
        ]
    })
], ProductModule);



/***/ })

}]);
//# sourceMappingURL=product-product-module-es2015.js.map