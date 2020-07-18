(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-order-detail/list-order-detail.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-order-detail/list-order-detail.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-container [hasBottom]=\"false\">\n  <div top class=\"card-body pb-2\" style=\"height: 100%;\">\n    <div class=\"service-detail\">\n      <div class=\"menu\">\n        <div\n          class=\"item\"\n          *ngFor=\"let item of menu; let i = index\"\n          [ngClass]=\"{\n            'is-selected': i === selectedMenuItem\n          }\"\n          (click)=\"onClickMenuItem(i)\"\n        >\n          {{ item }}\n        </div>\n      </div>\n      <div class=\"main\">\n        <div class=\"content mb-2\" id=\"content\">\n          <div id=\"0\" class=\"row title-section justify-content-between mb-2\">\n            <div class=\"d-flex align-items-center\">\n              <h5>{{ menu[0] }}</h5>\n              <i\n                [ngClass]=\"listView[0] ? 'fe-edit ml-2' : 'fe-save ml-2'\"\n                (click)=\"switchViewType(0)\"\n              ></i>\n            </div>\n            <div class=\"row align-items-center\" *ngIf=\"!listView[0]\">\n              <ng-select\n                placeholder=\"Chọn khách hàng\"\n                [ngModelOptions]=\"{ standalone: true }\"\n                style=\"width: 180px;\"\n                [items]=\"customers\"\n                bindLabel=\"cu_fullname\"\n                bindValue=\"cu_id\"\n                name=\"searchCustomer\"\n                [(ngModel)]=\"searchCustomer\"\n                (change)=\"changeDatalistCustomer($event)\"\n              >\n              </ng-select>\n              <a class=\"btn btn-success button-link ml-1 mr-2\" (click)=\"onClickCreateCustomer()\"\n                >Thêm mới</a\n              >\n            </div>\n          </div>\n          <div [formGroup]=\"formCustomer\" *ngIf=\"selectedCustomer\">\n            <h6>Thông tin chung</h6>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Họ và tên <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[0]\"\n                    formControlName=\"cu_fullname\"\n                    [ngClass]=\"{\n                      'is-invalid':\n                        submitted &&\n                        (formCustomer.controls.cu_fullname.errors || errorField === 'cu_fullname')\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"\n                      submitted &&\n                      (formCustomer.controls.cu_fullname.errors || errorField === 'cu_fullname')\n                    \"\n                    class=\"invalid-feedback\"\n                  >\n                    <span>Trường bắt buộc</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Nguồn <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"source_id\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formCustomer.controls.source_id.errors\n                    }\"\n                  >\n                    <option\n                      [disabled]=\"listView[0]\"\n                      *ngFor=\"let source of sources\"\n                      [value]=\"source.id\"\n                      >{{ source.name }}</option\n                    >\n                  </select>\n                  <div\n                    *ngIf=\"submitted && formCustomer.controls.source_id.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formCustomer.controls.source_id.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Loại khách hàng <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"cu_type\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formCustomer.controls.cu_type.errors\n                    }\"\n                  >\n                    <option [disabled]=\"listView[0]\" *ngFor=\"let type of types\" [value]=\"type.id\"\n                      >{{ type.name }}\n                    </option>\n                  </select>\n                  <div\n                    *ngIf=\"submitted && formCustomer.controls.cu_type.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formCustomer.controls.cu_type.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Ngày sinh</label>\n                <div class=\"col-6\">\n                  <div class=\"input-group clockpicker mb-2 mr-1\">\n                    <input\n                      ngbDatepicker\n                      readonly=\"true\"\n                      class=\"form-control\"\n                      placeholder=\"Chọn ngày\"\n                      #dob=\"ngbDatepicker\"\n                      formControlName=\"cu_birthday\"\n                      [disabled]=\"listView[0]\"\n                    />\n                    <div class=\"input-group-append\" (click)=\"dob.toggle()\">\n                      <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Nhóm khách hàng <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"customer_group_id\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formCustomer.controls.customer_group_id.errors\n                    }\"\n                  >\n                    <option\n                      [disabled]=\"listView[0]\"\n                      *ngFor=\"let group of customerGroups\"\n                      [value]=\"group.id\"\n                      >{{ group.name }}\n                    </option>\n                  </select>\n                  <div\n                    *ngIf=\"submitted && formCustomer.controls.customer_group_id.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formCustomer.controls.customer_group_id.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Email </label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[0]\"\n                    formControlName=\"cu_email\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && errorField === 'cu_email'\n                    }\"\n                  />\n                  <div *ngIf=\"submitted && errorField === 'cu_email'\" class=\"invalid-feedback\">\n                    <span>\n                      Email sai định dạng\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Đặt dịch vụ <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select class=\"custom-select\" formControlName=\"cu_flag_order\">\n                    <option [disabled]=\"listView[0]\" [value]=\"1\">Cần đặt</option>\n                    <option [disabled]=\"listView[0]\" [value]=\"2\">Đã đặt</option>\n                    <option [disabled]=\"listView[0]\" [value]=\"3\">Chưa đặt</option>\n                  </select>\n                  <div\n                    *ngIf=\"submitted && formCustomer.controls.cu_flag_order.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formCustomer.controls.cu_flag_order.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Sử dụng dịch vụ <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select class=\"custom-select\" formControlName=\"cu_flag_used\">\n                    <option [disabled]=\"listView[0]\" [value]=\"1\">Cần sử dụng</option>\n                    <option [disabled]=\"listView[0]\" [value]=\"2\">Chưa sử dụng</option>\n                  </select>\n                  <div\n                    *ngIf=\"submitted && formCustomer.controls.cu_flag_used.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formCustomer.controls.cu_flag_used.errors.required\">\n                      Trường bắt buộc\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Trạng thái <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"cu_status\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formCustomer.controls.cu_status.errors\n                    }\"\n                  >\n                    <option [disabled]=\"listView[0]\" [value]=\"1\">Kích hoạt</option>\n                    <option [disabled]=\"listView[0]\" [value]=\"2\">Khóa</option>\n                  </select>\n                  <div\n                    *ngIf=\"submitted && formCustomer.controls.cu_status.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formCustomer.controls.cu_status.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Ghi chú </label>\n                <div class=\"col-6\">\n                  <input class=\"form-control\" [readonly]=\"listView[0]\" formControlName=\"cu_note\" />\n                </div>\n              </div>\n            </div>\n            <h6>Địa chỉ</h6>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Tỉnh/Thành phố <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"sha_province_now\"\n                    class=\"form-control\"\n                    (change)=\"onChangeProvince($event)\"\n                  >\n                    <option\n                      *ngFor=\"let province of province\"\n                      [disabled]=\"listView[0]\"\n                      [value]=\"province.name\"\n                      >{{ province.name }}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Quận/Huyện <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"sha_district_now\"\n                    class=\"form-control\"\n                    (change)=\"onChangeDistrict($event)\"\n                  >\n                    <option\n                      *ngFor=\"let district of district\"\n                      [disabled]=\"listView[0]\"\n                      [value]=\"district.name\"\n                      >{{ district.name }}\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Xã/Phường <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select class=\"custom-select\" formControlName=\"sha_ward_now\" class=\"form-control\">\n                    <option *ngFor=\"let ward of ward\" [disabled]=\"listView[0]\" [value]=\"ward.name\">\n                      {{ ward.name }}</option\n                    >\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Địa chỉ <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[0]\"\n                    formControlName=\"sha_detail_now\"\n                    [ngClass]=\"{\n                      'is-invalid':\n                        submitted &&\n                        (formCustomer.controls.sha_detail_now.errors ||\n                          errorField === 'sha_detail_now')\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"\n                      submitted &&\n                      (formCustomer.controls.sha_detail_now.errors ||\n                        errorField === 'sha_detail_now')\n                    \"\n                    class=\"invalid-feedback\"\n                  >\n                    <span>Trường bắt buộc</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"selectedCustomer\">\n            <h6>\n              Số điện thoại\n              <a class=\"btn btn-success btn-xs ml-2 button-link\" (click)=\"openMobileModal()\"\n                >Thêm mới</a\n              >\n            </h6>\n            <div class=\"table-responsive border mb-2\">\n              <table class=\"table table-centered table-hover mb-0\">\n                <thead>\n                  <tr>\n                    <th>Loại số điện thoại</th>\n                    <th>Số điện thoại</th>\n                    <th>Ghi chú</th>\n                    <th>Thao tác</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let mobile of listMobile\">\n                    <td>\n                      {{ mobile.cp_type_name }}\n                    </td>\n                    <td>{{ mobile.cp_phone_number }}</td>\n                    <td>\n                      {{ mobile.cp_note }}\n                    </td>\n                    <td>\n                      <a class=\"action-icon table-button-link\" (click)=\"openMobileModal(mobile)\">\n                        <i class=\"mdi mdi-square-edit-outline\"></i\n                      ></a>\n                      <a class=\"action-icon table-button-link\" (click)=\"onRemoveMobile(mobile)\">\n                        <i class=\"mdi mdi-delete\"></i\n                      ></a>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"!listMobile || listMobile.length === 0\">\n                    <td colspan=\"4\">Không có dữ liệu số điện thoại</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n          <div id=\"1\" class=\"row title-section\">\n            <h5>{{ menu[1] }}</h5>\n            <a class=\"btn btn-primary btn-xs ml-2 button-link\" (click)=\"openAddressModal()\"\n              >Thêm mới</a\n            >\n          </div>\n          <div class=\"table-responsive border mb-2\">\n            <table class=\"table table-centered table-hover mb-0\">\n              <thead>\n                <tr>\n                  <th></th>\n                  <th>Thành phố</th>\n                  <th>Quận/Huyện</th>\n                  <th>Phường/Xã</th>\n                  <th>Địa chỉ</th>\n                  <th>Ghi chú</th>\n                  <th>Thao tác</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let address of listAddress\" (click)=\"onClickAddress(address)\">\n                  <td>\n                    <span\n                      class=\"fe-check-circle icon mr-2\"\n                      *ngIf=\"\n                        (address.sha_detail ? address.sha_detail + ', ' : '') +\n                          address.sha_ward +\n                          ', ' +\n                          address.sha_district +\n                          ', ' +\n                          address.sha_province ===\n                        cuo_address\n                      \"\n                    ></span>\n                  </td>\n                  <td>\n                    {{ address.sha_province }}\n                  </td>\n                  <td>{{ address.sha_district }}</td>\n                  <td>\n                    {{ address.sha_ward }}\n                  </td>\n                  <td>{{ address.sha_detail }}</td>\n                  <td>{{ address.sha_note }}</td>\n                  <td>\n                    <a class=\"action-icon table-button-link\" (click)=\"openAddressModal(address)\">\n                      <i class=\"mdi mdi-square-edit-outline\"></i\n                    ></a>\n                    <a class=\"action-icon table-button-link\" (click)=\"onRemoveAddress(address)\">\n                      <i class=\"mdi mdi-delete\"></i\n                    ></a>\n                  </td>\n                </tr>\n                <tr *ngIf=\"!listAddress || listAddress.length === 0\">\n                  <td colspan=\"6\">Không có dữ liệu địa chỉ nhân hàng</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n          <div id=\"2\" class=\"row title-section justify-content-between mb-2\">\n            <div class=\"d-flex align-items-center\">\n              <h5>{{ menu[2] }}</h5>\n              <i\n                [ngClass]=\"listView[2] ? 'fe-edit ml-2' : 'fe-save ml-2'\"\n                (click)=\"switchViewType(2)\"\n              ></i>\n            </div>\n            <div class=\"row align-items-center\" *ngIf=\"!listView[2]\">\n              <ng-select\n                placeholder=\"Chọn sản phẩm\"\n                style=\"width: 300px;\"\n                [items]=\"products\"\n                bindLabel=\"pu_name\"\n                bindValue=\"pu_id\"\n                name=\"searchProduct\"\n                [(ngModel)]=\"searchProduct\"\n                [clearable]=\"false\"\n                (change)=\"changeDatalistProduct($event)\"\n              >\n              </ng-select>\n            </div>\n          </div>\n          <div class=\"table-responsive border mb-2\">\n            <table class=\"table table-centered table-hover mb-0\">\n              <thead>\n                <tr>\n                  <th>STT</th>\n                  <th>Tên sản phẩm</th>\n                  <th>Số lượng</th>\n                  <th>Đơn giá</th>\n                  <th>Giảm giá (%)</th>\n                  <th>Tổng tiền</th>\n                  <th>Thao tác</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let product of listProduct; let i = index\">\n                  <td>\n                    {{ i + 1 }}\n                  </td>\n                  <td>\n                    {{ product.pu_name }}\n                  </td>\n                  <td>\n                    <input\n                      class=\"form-control\"\n                      [readonly]=\"listView[2]\"\n                      style=\"max-width: 100px;\"\n                      type=\"number\"\n                      [min]=\"1\"\n                      [max]=\"product.max_quantity\"\n                      [value]=\"product.op_quantity\"\n                      (change)=\"onChangeQuantity($event, i)\"\n                    />\n                  </td>\n                  <td>\n                    {{ product.pu_sale_price }}\n                  </td>\n                  <td>\n                    <input\n                      class=\"form-control\"\n                      [readonly]=\"listView[2]\"\n                      style=\"max-width: 100px;\"\n                      type=\"number\"\n                      [max]=\"100\"\n                      [value]=\"product.op_discount\"\n                      (change)=\"onChangeDiscount($event, i)\"\n                    />\n                  </td>\n                  <td>{{ product.op_total_value }}</td>\n                  <td>\n                    <a class=\"action-icon table-button-link\" (click)=\"onRemoveProduct(product)\">\n                      <i class=\"mdi mdi-delete\"></i\n                    ></a>\n                  </td>\n                </tr>\n                <tr *ngIf=\"listProduct.length === 0\">\n                  <td colspan=\"7\">Không có dữ liệu sản phẩm</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div [formGroup]=\"formOrder\">\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-1\"></div>\n              <div class=\"form-group row mb-1\">\n                <label class=\"col-4 col-form-label\">Khuyến mãi (%): </label>\n                <div class=\"col-6\">\n                  <input\n                    type=\"number\"\n                    max=\"100\"\n                    [readonly]=\"listView[2]\"\n                    class=\"form-control\"\n                    (change)=\"sumListProduct()\"\n                    formControlName=\"cuo_discount\"\n                    placeholder=\"Nhập khuyến mãi\"\n                  />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-1\"></div>\n              <div class=\"form-group row mb-1\">\n                <label class=\"col-4 col-form-label\">Phí vận chuyển: </label>\n                <div class=\"col-6\">\n                  <input\n                    [readonly]=\"listView[2]\"\n                    class=\"form-control\"\n                    (change)=\"sumListProduct()\"\n                    formControlName=\"cuo_ship_tax\"\n                    placeholder=\"Nhập phí vận chuyển\"\n                  />\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-6 text-right\">\n              TỔNG ĐƠN HÀNG\n            </div>\n          </div>\n          <div class=\"row mb-1\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-6 text-right\" style=\"font-weight: 700;\">\n              {{ orderTotal | currency: 'VND' }}\n            </div>\n          </div>\n\n          <div id=\"3\" class=\"row title-section mb-2\">\n            <h5>{{ menu[3] }}</h5>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-8\"></div>\n            <div class=\"col-md-2 text-right\">Ngày tạo</div>\n            <div class=\"col-md-2 text-right\" style=\"font-weight: bold;\">\n              {{ createdDate | date: 'dd/MM/yyyy' }}\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-8\"></div>\n            <div class=\"col-md-2 text-right\">Trạng thái</div>\n            <div class=\"col-md-2 text-right\" style=\"font-weight: bold;\">\n              Chưa hoàn thành\n            </div>\n          </div>\n          <div class=\"text-right mt-2\">\n            Địa chỉ giao hàng\n          </div>\n          <div class=\"text-right\">\n            {{ formCustomer.value['cu_fullname'] }}\n          </div>\n          <div class=\"text-right\">\n            {{ cuo_address }}\n          </div>\n          <div class=\"text-right mt-2\">\n            Chi tiết đơn hàng\n          </div>\n          <div class=\"table-responsive border mb-2\">\n            <table class=\"table table-centered table-hover mb-0\">\n              <thead>\n                <tr>\n                  <th>Tên sản phẩm</th>\n                  <th>Số lượng</th>\n                  <th>Đơn giá</th>\n                  <th>Giảm giá (%)</th>\n                  <th>Tổng</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let product of listProduct\">\n                  <td>\n                    {{ product.pu_name }}\n                  </td>\n                  <td>\n                    {{ product.op_quantity }}\n                  </td>\n                  <td>\n                    {{ product.pu_sale_price }}\n                  </td>\n                  <td>\n                    {{ product.op_discount }}\n                  </td>\n                  <td>{{ product.op_total_value }}</td>\n                </tr>\n                <tr *ngIf=\"listProduct.length === 0\">\n                  <td colspan=\"6\">Không có dữ liệu địa chỉ</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-8\"></div>\n            <div class=\"col-md-2 text-right\">Khuyến mãi</div>\n            <div class=\"col-md-2\" style=\"font-weight: bold;\">\n              {{ formOrder.value['cuo_discount'] }}%\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-8\"></div>\n            <div class=\"col-md-2 text-right\">Phí vận chuyển</div>\n            <div class=\"col-md-2\" style=\"font-weight: bold;\">\n              {{ formOrder.value['cuo_ship_tax'] }} VNĐ\n            </div>\n          </div>\n          <div class=\"row mb-2\">\n            <div class=\"col-md-8\">\n              <div>Ghi chú</div>\n              <div>{{ formCustomer.value['cu_note'] }}</div>\n            </div>\n            <div class=\"col-md-2 text-right\" style=\"color: inherit; font-weight: normal;\">\n              Tổng đơn hàng\n            </div>\n            <div class=\"col-md-2\" style=\"font-weight: bold; color: inherit;\">\n              {{ orderTotal | currency: 'VND' }}\n            </div>\n          </div>\n        </div>\n        <div class=\"row justify-content-end mr-2\">\n          <div class=\"text-sm-right\">\n            <button\n              class=\"btn btn-success mb-2 mr-1 button-link\"\n              [disabled]=\"!isChange && !formCustomer.dirty && !formOrder.dirty\"\n              (click)=\"onSubmit()\"\n            >\n              Lưu lại\n            </button>\n            <a class=\"btn btn-danger mb-2 mr-1 button-link\" (click)=\"onChangeToMain()\">Quay lại </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-main-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-order/component/order-modal/order-modal.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-order/component/order-modal/order-modal.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">\n    {{ !order ? 'Thêm mới' : isView ? 'Xem' : 'Cập nhật' }} đơn hàng\n  </h4>\n  <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"onClickCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\">\n  <!-- #6658dd -->\n  <ngb-tabset justify=\"justified\" (tabChange)=\"onChangeTab($event)\" [activeId]=\"activeTabId\">\n    <ngb-tab title=\"1. Thông tin khách hàng\" id=\"1\">\n      <ng-template ngbTabContent>\n        <ng-template [ngTemplateOutlet]=\"Tab1\"></ng-template>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab title=\"2. Thông tin đơn hàng\" id=\"2\">\n      <ng-template ngbTabContent>\n        <ng-template [ngTemplateOutlet]=\"Tab2\"></ng-template>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab title=\"3. Hóa đơn\" id=\"3\">\n      <ng-template ngbTabContent>\n        <ng-template [ngTemplateOutlet]=\"Tab3\"></ng-template>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>\n\n<ng-template #Tab1>\n  <ngb-progressbar\n    type=\"success\"\n    [value]=\"33.33\"\n    [striped]=\"true\"\n    [animated]=\"true\"\n  ></ngb-progressbar>\n  <div class=\"row mt-2 mb-2\" *ngIf=\"!isView\">\n    <div class=\"col-lg-8\">\n      <form class=\"form-inline row\">\n        <div class=\"form-group col-sm-auto\">\n          <ng-select\n            placeholder=\"Chọn khách hàng\"\n            style=\"width: 300px;\"\n            [items]=\"customers\"\n            bindLabel=\"cu_fullname\"\n            bindValue=\"cu_id\"\n            name=\"searchCustomer\"\n            [(ngModel)]=\"searchCustomer\"\n            (change)=\"changeDatalistCustomer($event)\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-sm-auto\">\n          <label for=\"status-select\" class=\"mr-2\">Sắp xếp</label>\n          <select class=\"custom-select\">\n            <option selected=\"\">Tất cả</option>\n            <option value=\"1\">Khách quen</option>\n            <option value=\"2\">Khách VIP</option>\n            <option value=\"3\">Khách BNI</option>\n            <option value=\"4\">Khách khác</option>\n          </select>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"text-lg-right mt-3 mt-lg-0\">\n        <button type=\"button\" class=\"btn btn-success mr-1\">\n          <i class=\"mdi mdi-settings\"></i>\n        </button>\n        <a (click)=\"onClickCreateCustomer()\" class=\"btn btn-danger button-link\"\n          ><i class=\"mdi mdi-plus-circle mr-1\"></i> Thêm mới</a\n        >\n      </div>\n    </div>\n  </div>\n  <h5 class=\"mb-3 text-uppercase bg-light p-2\" *ngIf=\"selectedCustomer\">\n    <i class=\"mdi mdi-account-circle mr-1\"></i> Thông tin cá nhân\n  </h5>\n  <div [formGroup]=\"formCustomer\" *ngIf=\"selectedCustomer\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Họ và tên</label>\n          <input\n            [readonly]=\"readOnly\"\n            class=\"form-control\"\n            formControlName=\"cu_fullname\"\n            placeholder=\"Nhập họ và tên\"\n          />\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Số điện thoại</label>\n          <input\n            [readonly]=\"readOnly\"\n            class=\"form-control\"\n            formControlName=\"cu_mobile\"\n            placeholder=\"Nhập số điện thoại\"\n          />\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input\n            [readonly]=\"readOnly\"\n            class=\"form-control\"\n            formControlName=\"cu_email\"\n            placeholder=\"Nhập email\"\n          />\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Ngày sinh</label>\n          <div class=\"input-group clockpicker\">\n            <input\n              ngbDatepicker\n              [readonly]=\"readOnly\"\n              class=\"form-control\"\n              autoClose=\"false\"\n              placeholder=\"yyyy-mm-dd\"\n              #dateDob=\"ngbDatepicker\"\n              formControlName=\"cu_birthday\"\n            />\n            <div class=\"input-group-append\" (click)=\"!readOnly && dateDob.toggle()\">\n              <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Nhóm khách hàng</label>\n          <select class=\"custom-select\" formControlName=\"customer_group_id\">\n            <option [disabled]=\"readOnly\" *ngFor=\"let group of groups\" [value]=\"group.cg_id\">{{\n              group.cg_name\n            }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Nguồn khách hàng</label>\n          <select class=\"custom-select\" formControlName=\"source_id\">\n            <option [disabled]=\"readOnly\" *ngFor=\"let source of sources\" [value]=\"source.src_id\">{{\n              source.src_name\n            }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Loại khách hàng</label>\n          <select class=\"custom-select\" formControlName=\"cu_type\">\n            <option [disabled]=\"readOnly\" *ngFor=\"let type of types\" [value]=\"type.id\">{{\n              type.name\n            }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Người phụ trách</label>\n          <select class=\"custom-select\" formControlName=\"cu_curator_id\">\n            <option [disabled]=\"readOnly\" *ngFor=\"let staff of staffs\" [value]=\"staff.sta_id\">{{\n              staff.sta_fullname\n            }}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>Địa chỉ</label>\n          <input class=\"form-control\" formControlName=\"cu_address\" placeholder=\"Nhập địa chỉ\" />\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label>Tỉnh/Thành phố</label>\n          <select\n            class=\"custom-select\"\n            formControlName=\"cu_province\"\n            (change)=\"onChangeProvince($event)\"\n          >\n            <option *ngFor=\"let province of provinces\" [value]=\"province.name\">{{\n              province.name\n            }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label>Quận/Huyện</label>\n          <select\n            class=\"custom-select\"\n            formControlName=\"cu_district\"\n            (change)=\"onChangeDistrict($event)\"\n          >\n            <option *ngFor=\"let district of districts\" [value]=\"district.name\">{{\n              district.name\n            }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label>Xã/Phường</label>\n          <select class=\"custom-select\" formControlName=\"cu_ward\">\n            <option *ngFor=\"let ward of wards\" [value]=\"ward.name\">{{ ward.name }}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <button\n          type=\"button\"\n          class=\"btn btn-danger\"\n          style=\"margin-top: 1.8rem;\"\n          (click)=\"onClickUpdateButton()\"\n        >\n          <i class=\"mdi mdi-plus-circle mr-1\"></i>{{ selectedAddress ? 'Cập nhật' : 'Thêm' }}\n        </button>\n      </div>\n    </div>\n    <div class=\"table-responsive border mb-2\">\n      <table class=\"table table-centered table-hover mb-0\">\n        <thead>\n          <tr>\n            <th>Địa chỉ chi tiết</th>\n            <th>Xã/Phường</th>\n            <th>Quận/Huyện</th>\n            <th>Tỉnh/Thành phố</th>\n            <th *ngIf=\"!readOnly\">Thao tác</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let address of listAddress\" (click)=\"onClickAddress(address)\">\n            <td>\n              <span\n                class=\"fe-check-circle icon mr-2\"\n                *ngIf=\"\n                  (address.sha_detail ? address.sha_detail + ', ' : '') +\n                    address.sha_ward +\n                    ', ' +\n                    address.sha_district +\n                    ', ' +\n                    address.sha_province ===\n                  selectedAddress\n                \"\n              ></span>\n              {{ address.sha_detail }}\n            </td>\n            <td>\n              {{ address.sha_ward }}\n            </td>\n            <td>\n              {{ address.sha_district }}\n            </td>\n            <td>\n              {{ address.sha_province }}\n            </td>\n            <td *ngIf=\"!readOnly\">\n              <a class=\"action-icon table-button-link\" (click)=\"onUpdateAddress(address)\">\n                <i class=\"mdi mdi-square-edit-outline\"></i\n              ></a>\n              <a class=\"action-icon table-button-link\" (click)=\"onRemoveAddress(address)\">\n                <i class=\"mdi mdi-delete\"></i\n              ></a>\n            </td>\n          </tr>\n          <tr *ngIf=\"listAddress?.length === 0\">\n            <td colspan=\"6\">Không có dữ liệu địa chỉ</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label>Ghi chú</label>\n          <textarea\n            rows=\"3\"\n            [readonly]=\"readOnly\"\n            formControlName=\"cu_note\"\n            class=\"form-control\"\n          ></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"d-flex justify-content-end\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onNextClick()\">\n      Tiếp theo\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #Tab2>\n  <ngb-progressbar\n    type=\"success\"\n    [value]=\"66.67\"\n    [striped]=\"true\"\n    [animated]=\"true\"\n  ></ngb-progressbar>\n  <div class=\"row mt-2\" *ngIf=\"!isView\">\n    <div class=\"col-md-8\">\n      <form class=\"form-inline\">\n        <div class=\"form-group\">\n          <ng-select\n            placeholder=\"Chọn sản phẩm\"\n            style=\"width: 500px;\"\n            [items]=\"products\"\n            bindLabel=\"pu_name\"\n            bindValue=\"pu_id\"\n            name=\"searchProduct\"\n            [(ngModel)]=\"searchProduct\"\n            [clearable]=\"false\"\n            (change)=\"changeDatalistProduct($event)\"\n          >\n          </ng-select>\n        </div>\n      </form>\n    </div>\n  </div>\n  <h5 class=\"mb-3 text-uppercase bg-light p-2\">\n    <i class=\"mdi mdi-account-circle mr-1\"></i> Thông tin đơn hàng\n  </h5>\n  <div class=\"table-responsive border mb-2\" style=\"max-height: 250px;\">\n    <table class=\"table table-centered table-hover mb-0\">\n      <thead>\n        <tr>\n          <th>Tên sản phẩm</th>\n          <th>Số lượng</th>\n          <th>Đơn giá</th>\n          <th>Giảm giá (%)</th>\n          <th>Tổng</th>\n          <th *ngIf=\"!isView\">Thao tác</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let product of listProduct\">\n          <td>\n            {{ product.pu_name }}\n          </td>\n          <td>\n            <input\n              class=\"form-control\"\n              [readonly]=\"isView\"\n              style=\"max-width: 100px;\"\n              type=\"number\"\n              [max]=\"product.max_quantity\"\n              [value]=\"product.op_quantity\"\n              (change)=\"onChangeQuantity($event, product)\"\n            />\n          </td>\n          <td>\n            {{ product.pu_sale_price }}\n          </td>\n          <td>\n            <input\n              class=\"form-control\"\n              [readonly]=\"isView\"\n              style=\"max-width: 100px;\"\n              type=\"number\"\n              [max]=\"100\"\n              [value]=\"product.op_discount\"\n              (change)=\"onChangeDiscount($event, product)\"\n            />\n          </td>\n          <td>{{ product.op_total_value }}</td>\n          <td *ngIf=\"!isView\">\n            <a class=\"action-icon table-button-link\" (click)=\"onRemoveProduct(product)\">\n              <i class=\"mdi mdi-delete\"></i\n            ></a>\n          </td>\n        </tr>\n        <tr *ngIf=\"listProduct.length === 0\">\n          <td colspan=\"6\">Không có dữ liệu địa chỉ</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div [formGroup]=\"formOrder\">\n    <div class=\"row\">\n      <div class=\"col-md-6\"></div>\n      <div class=\"col-md-3 text-right\" style=\"line-height: 2.5;\">\n        Khuyến mãi (%)\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <input\n            type=\"number\"\n            max=\"100\"\n            [readonly]=\"isView\"\n            class=\"form-control\"\n            (change)=\"sumListProduct()\"\n            formControlName=\"cuo_discount\"\n            placeholder=\"Nhập khuyến mãi\"\n          />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\"></div>\n      <div class=\"col-md-3 text-right\" style=\"line-height: 2.5;\">\n        Phí vận chuyển\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <input\n            [readonly]=\"isView\"\n            class=\"form-control\"\n            (change)=\"sumListProduct()\"\n            formControlName=\"cuo_ship_tax\"\n            placeholder=\"Nhập phí vận chuyển\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-9\"></div>\n    <div class=\"col-md-3 text-right\" style=\"font-size: 1.2rem;\">\n      Tổng đơn hàng\n    </div>\n  </div>\n  <div class=\"row mb-1\">\n    <div class=\"col-md-9\"></div>\n    <div class=\"col-md-3 text-right\" style=\"font-size: 1.5rem; font-weight: 700;\">\n      {{ orderTotal | currency: 'VND' }}\n    </div>\n  </div>\n  <div class=\"d-flex justify-content-between\">\n    <button (click)=\"onBackClick()\" class=\"btn btn-primary\">\n      Quay lại\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onNextClick()\">\n      Tiếp theo\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #Tab3>\n  <ngb-progressbar\n    type=\"success\"\n    [value]=\"100\"\n    [striped]=\"true\"\n    [animated]=\"true\"\n  ></ngb-progressbar>\n  <!-- <div class=\"row mt-2\" style=\"font-size: 1.1rem;\">\n    <div class=\"col-md-8\"></div>\n    <div class=\"col-md-2 text-right\">Mã hóa đơn</div>\n    <div class=\"col-md-2 text-right\" style=\"font-weight: bold;\">\n      DH0814\n    </div>\n  </div> -->\n  <div class=\"row\" style=\"font-size: 1.1rem;\">\n    <div class=\"col-md-8\"></div>\n    <div class=\"col-md-2 text-right\">Ngày tạo</div>\n    <div class=\"col-md-2 text-right\" style=\"font-weight: bold;\">\n      {{ createdDate | date: 'dd/MM/yyyy' }}\n    </div>\n  </div>\n  <div class=\"row\" style=\"font-size: 1.1rem;\">\n    <div class=\"col-md-8\"></div>\n    <div class=\"col-md-2 text-right\">Trạng thái</div>\n    <div class=\"col-md-2 text-right\" style=\"font-weight: bold;\">\n      Chưa hoàn thành\n    </div>\n  </div>\n  <div class=\"text-right mt-2\" style=\"font-size: 1.1rem;\">\n    Địa chỉ giao hàng\n  </div>\n  <div class=\"text-right\">\n    {{ formCustomer.value['cu_fullname'] }}\n  </div>\n  <div class=\"text-right\">\n    {{ formCustomer.value['cu_mobile'] }} / {{ formCustomer.value['cu_email'] }}\n  </div>\n  <div class=\"text-right\">\n    {{ selectedAddress }}\n  </div>\n  <div class=\"text-right mt-2\" style=\"font-size: 1.1rem;\">\n    Chi tiết đơn hàng\n  </div>\n  <div class=\"table-responsive border mb-2\">\n    <table class=\"table table-centered table-hover mb-0\">\n      <thead>\n        <tr>\n          <th>Tên sản phẩm</th>\n          <th>Số lượng</th>\n          <th>Đơn giá</th>\n          <th>Giảm giá (%)</th>\n          <th>Tổng</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let product of listProduct\">\n          <td>\n            {{ product.pu_name }}\n          </td>\n          <td>\n            {{ product.op_quantity }}\n          </td>\n          <td>\n            {{ product.pu_sale_price }}\n          </td>\n          <td>\n            {{ product.op_discount }}\n          </td>\n          <td>{{ product.op_total_value }}</td>\n        </tr>\n        <tr *ngIf=\"listProduct.length === 0\">\n          <td colspan=\"6\">Không có dữ liệu địa chỉ</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"row\" style=\"font-size: 1.1rem;\">\n    <div class=\"col-md-8\"></div>\n    <div class=\"col-md-2 text-right\">Khuyến mãi</div>\n    <div class=\"col-md-2\" style=\"font-weight: bold;\">{{ formOrder.value['cuo_discount'] }}%</div>\n  </div>\n  <div class=\"row\" style=\"font-size: 1.1rem;\">\n    <div class=\"col-md-8\"></div>\n    <div class=\"col-md-2 text-right\">Phí vận chuyển</div>\n    <div class=\"col-md-2\" style=\"font-weight: bold;\">{{ formOrder.value['cuo_ship_tax'] }} VNĐ</div>\n  </div>\n  <div class=\"row mb-2\">\n    <div class=\"col-md-8\">\n      <div>Ghi chú</div>\n      <div>{{ formCustomer.value['cu_note'] }}</div>\n    </div>\n    <div class=\"col-md-2 text-right\" style=\"font-size: 1.1rem; color: inherit; font-weight: normal\">\n      Tổng đơn hàng\n    </div>\n    <div class=\"col-md-2\" style=\"font-weight: bold; font-size: 1.4rem; color: inherit;\">\n      {{ orderTotal | currency: 'VND' }}\n    </div>\n\n    <!-- <div class=\"col-md-6 text-right\" style=\"font-size: 1.4rem; font-weight: bold;\">\n      <span class=\"mr-2\" style=\"font-size: 1.1rem; color: inherit; font-weight: normal;\"\n        >Tổng đơn hàng</span\n      >{{ orderTotal | currency: 'VND' }}\n    </div> -->\n  </div>\n  <div class=\"d-flex justify-content-end\">\n    <button (click)=\"onPrintClick()\" class=\"btn btn-primary\" style=\"min-width: 80px;\">\n      <i class=\"mdi mdi-printer\"></i>\n      In\n    </button>\n    <button\n      [disabled]=\"isView\"\n      class=\"btn btn-success ml-2\"\n      (click)=\"onSubmitClick()\"\n      style=\"min-width: 80px;\"\n    >\n      Gửi\n    </button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-order/list-order.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-order/list-order.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-container [hasBottom]=\"false\">\n  <div top class=\"card-body\" style=\"height: 100%;\">\n    <div class=\"row mb-1\">\n      <div class=\"col-xl-7\">\n        <form class=\"form-inline\">\n          <div class=\"form-group mr-1 ml-1\">\n            <input\n              class=\"form-control\"\n              name=\"textSearch\"\n              placeholder=\"Tìm kiếm...\"\n              [(ngModel)]=\"textSearch\"\n              (input)=\"onChangeFilter()\"\n            />\n          </div>\n\n          <select\n            class=\"custom-select mr-1\"\n            name=\"category\"\n            [(ngModel)]=\"paymentMethodSearch\"\n            (change)=\"onChangeFilter()\"\n          >\n            <option value=\"\">Phương thức thanh toán</option>\n            <option *ngFor=\"let item of paymentMethods\" [value]=\"item.id\">{{ item.name }}</option>\n          </select>\n          <select\n            class=\"custom-select mr-1\"\n            name=\"type\"\n            [(ngModel)]=\"statusSearch\"\n            (change)=\"onChangeFilter()\"\n          >\n            <option value=\"\">Trạng thái</option>\n            <option [value]=\"1\">Đã báo kho</option>\n            <option [value]=\"2\">Đang vận chuyển</option>\n            <option [value]=\"3\">Đã thanh toán</option>\n          </select>\n          <div class=\"input-group clockpicker mr-1\">\n            <input\n              ngbDatepicker\n              readonly=\"true\"\n              class=\"form-control\"\n              placeholder=\"yyyy-mm-dd\"\n              #from=\"ngbDatepicker\"\n              name=\"from\"\n              [maxDate]=\"toDate\"\n              [(ngModel)]=\"fromDate\"\n              (dateSelect)=\"onChangeFilter()\"\n            />\n            <div class=\"input-group-append\" (click)=\"from.toggle()\">\n              <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n            </div>\n          </div>\n          <div class=\"input-group clockpicker\">\n            <input\n              ngbDatepicker\n              readonly=\"true\"\n              class=\"form-control\"\n              placeholder=\"yyyy-mm-dd\"\n              #to=\"ngbDatepicker\"\n              name=\"to\"\n              [minDate]=\"fromDate\"\n              [(ngModel)]=\"toDate\"\n              (dateSelect)=\"onChangeFilter()\"\n            />\n            <div class=\"input-group-append\" (click)=\"to.toggle()\">\n              <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-xl-5\">\n        <div class=\"text-sm-right\">\n          <label class=\"btn btn-info mb-0 mr-1\">\n            <input type=\"file\" (change)=\"setFile($event)\" style=\"display: none;\" />\n            <a mat-raised-button color=\"primary\">\n              Nhập\n            </a>\n          </label>\n          <button type=\"button\" class=\"btn btn-info mr-1\" (click)=\"exportOrderProduct()\">\n            Xuất\n          </button>\n          <button type=\"button\" class=\"btn btn-info mr-1\" (click)=\"exportTemplate()\">\n            Xuất mẫu\n          </button>\n          <a class=\"btn btn-success mr-1 button-link\" (click)=\"onRouteDetail()\"> Thêm mới</a>\n          <a\n            class=\"btn btn-primary mr-1 button-link\"\n            [ngClass]=\"selectedOrder ? '' : 'disabled'\"\n            (click)=\"onRouteDetail(selectedOrder)\"\n          >\n            Xem & Sửa</a\n          >\n          <a\n            class=\"btn btn-danger mr-1 button-link\"\n            [ngClass]=\"selectedOrder ? '' : 'disabled'\"\n            (click)=\"openConfirmModal(selectedOrder)\"\n          >\n            Xóa</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\">\n        <thead>\n          <tr>\n            <th>MĐH</th>\n            <th>Ngày đặt hàng</th>\n            <th>Trạng thái thanh toán</th>\n            <th>Tổng tiền</th>\n            <th>Phương thức thanh toán</th>\n            <th>Tình trạng đơn hàng</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let order of orders\"\n            (click)=\"onClickOrder(order)\"\n            [ngClass]=\"{\n              'is-selected': order.cuo_id === selectedOrder?.cuo_id\n            }\"\n          >\n            <td>\n              {{ order.cuo_code }}\n            </td>\n            <td>\n              {{ order.cuo_date | date: 'dd/MM/yyyy' }}\n            </td>\n            <td>\n              {{ order.cuo_payment_status }}\n            </td>\n            <td>\n              {{ order.cuo_total_price }}\n            </td>\n            <td>\n              {{ order.cuo_payment_type }}\n            </td>\n            <td>\n              <select\n                class=\"custom-select\"\n                [(ngModel)]=\"order.cuo_status\"\n                (change)=\"onChangeStatus($event, order)\"\n              >\n                <option *ngFor=\"let status of orderStatus\" [value]=\"status.id\">{{\n                  status.name\n                }}</option>\n              </select>\n            </td>\n          </tr>\n          <tr *ngIf=\"orders?.length === 0\">\n            <td colspan=\"6\">Không có dữ liệu đơn hàng</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <ul class=\"pagination pagination-rounded justify-content-end my-3\">\n      <ngb-pagination\n        (pageChange)=\"onPageChange($event)\"\n        [maxSize]=\"8\"\n        [pageSize]=\"pageSize\"\n        [(page)]=\"page\"\n        [collectionSize]=\"totalSize\"\n      ></ngb-pagination>\n    </ul>\n  </div>\n</app-main-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product-detail/list-product-detail.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-product-detail/list-product-detail.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-container [hasBottom]=\"false\">\n  <div top class=\"card-body pb-2\" style=\"height: 100%;\">\n    <div class=\"product-detail\">\n      <div class=\"menu\">\n        <div\n          class=\"item\"\n          *ngFor=\"let item of menu; let i = index\"\n          [ngClass]=\"{\n            'is-selected': i === selectedMenuItem\n          }\"\n          (click)=\"onClickMenuItem(i)\"\n        >\n          {{ item }}\n        </div>\n      </div>\n      <div class=\"main\">\n        <div class=\"content mb-2\" id=\"content\">\n          <div id=\"0\" class=\"row title-section\">\n            <h5>{{ menu[0] }}</h5>\n            <i\n              [ngClass]=\"listView[0] ? 'fe-edit ml-2' : 'fe-save ml-2'\"\n              (click)=\"switchViewType(0)\"\n            ></i>\n          </div>\n          <div [formGroup]=\"formProduct\">\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Tên sản phẩm <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[0]\"\n                    formControlName=\"pu_name\"\n                    [ngClass]=\"{\n                      'is-invalid':\n                        submitted &&\n                        (formProduct.controls.pu_name.errors || errorField === 'pu_name')\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"\n                      submitted && (formProduct.controls.pu_name.errors || errorField === 'pu_name')\n                    \"\n                    class=\"invalid-feedback\"\n                  >\n                    <span>Trường bắt buộc</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Đơn vị <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"pu_unit\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formProduct.controls.pu_unit.errors\n                    }\"\n                  >\n                    <option [disabled]=\"listView[0]\" *ngFor=\"let unit of units\" [value]=\"unit.id\">{{\n                      unit.name\n                    }}</option>\n                  </select>\n                  <div\n                    *ngIf=\"submitted && formProduct.controls.pu_unit.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formProduct.controls.pu_unit.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Số lượng <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <input\n                    class=\"form-control\"\n                    [readonly]=\"listView[0]\"\n                    type=\"number\"\n                    formControlName=\"pu_quantity\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formProduct.controls.pu_quantity.errors\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"submitted && formProduct.controls.pu_quantity.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formProduct.controls.pu_quantity.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Loại sản phẩm <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"product_category_id\"\n                    class=\"form-control\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formProduct.controls.product_category_id.errors\n                    }\"\n                  >\n                    <option\n                      *ngFor=\"let category of categories\"\n                      [disabled]=\"listView[0]\"\n                      [value]=\"category.id\"\n                      >{{ category.name }}</option\n                    >\n                  </select>\n                  <div\n                    *ngIf=\"submitted && formProduct.controls.product_category_id.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formProduct.controls.product_category_id.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Giá nhập <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <input\n                    [readonly]=\"listView[0]\"\n                    type=\"number\"\n                    class=\"form-control\"\n                    formControlName=\"pu_buy_price\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formProduct.controls.pu_buy_price.errors\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"submitted && formProduct.controls.pu_buy_price.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formProduct.controls.pu_buy_price.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Nhà cung cấp <span>(*)</span> </label>\n                <div class=\"col-6\">\n                  <select\n                    class=\"custom-select\"\n                    formControlName=\"provider_id\"\n                    class=\"form-control\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formProduct.controls.provider_id.errors\n                    }\"\n                  >\n                    <option\n                      *ngFor=\"let supplier of suppliers\"\n                      [disabled]=\"listView[0]\"\n                      [value]=\"supplier.id\"\n                      >{{ supplier.name }}</option\n                    >\n                  </select>\n                  <div\n                    *ngIf=\"submitted && formProduct.controls.provider_id.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formProduct.controls.provider_id.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Giá bán <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <input\n                    [readonly]=\"listView[0]\"\n                    type=\"number\"\n                    class=\"form-control\"\n                    formControlName=\"pu_sale_price\"\n                    [ngClass]=\"{\n                      'is-invalid': submitted && formProduct.controls.pu_sale_price.errors\n                    }\"\n                  />\n                  <div\n                    *ngIf=\"submitted && formProduct.controls.pu_sale_price.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formProduct.controls.pu_sale_price.errors.required\"\n                      >Trường bắt buộc</span\n                    >\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3 align-items-baseline\">\n                <label class=\"col-4 col-form-label\">Ngày hết hạn</label>\n                <div class=\"col-6\">\n                  <div class=\"input-group clockpicker\">\n                    <input\n                      ngbDatepicker\n                      class=\"form-control\"\n                      readonly=\"true\"\n                      placeholder=\"Chọn ngày\"\n                      #date=\"ngbDatepicker\"\n                      formControlName=\"pu_expired_date\"\n                      [disabled]=\"listView[0]\"\n                    />\n                    <div class=\"input-group-append\" (click)=\"date.toggle()\">\n                      <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n                    </div>\n                  </div>\n                </div>\n                <i class=\"fe-delete\" *ngIf=\"!listView[0]\" (click)=\"onClearDate()\"></i>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Thuế <span>(*)</span></label>\n                <div class=\"col-6\">\n                  <input\n                    [readonly]=\"listView[0]\"\n                    type=\"number\"\n                    class=\"form-control\"\n                    formControlName=\"pu_tax\"\n                    [ngClass]=\"{ 'is-invalid': submitted && formProduct.controls.pu_tax.errors }\"\n                  />\n                  <div\n                    *ngIf=\"submitted && formProduct.controls.pu_tax.errors\"\n                    class=\"invalid-feedback\"\n                  >\n                    <span *ngIf=\"formProduct.controls.pu_tax.errors.required\">Trường bắt buộc</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Khối lượng </label>\n                <div class=\"col-6\">\n                  <input\n                    [readonly]=\"listView[0]\"\n                    type=\"number\"\n                    class=\"form-control\"\n                    formControlName=\"pu_weight\"\n                    [ngClass]=\"{ 'is-invalid': submitted && formProduct.controls.pu_weight.errors }\"\n                  />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\">\n                <label class=\"col-4 col-form-label\">Khuyến mãi(%)</label>\n                <div class=\"col-6\">\n                  <input\n                    [readonly]=\"listView[0]\"\n                    type=\"number\"\n                    class=\"form-control\"\n                    formControlName=\"pu_saleoff\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group row mb-3\"></div>\n            </div>\n          </div>\n\n          <div id=\"1\" class=\"row title-section\">\n            <h5>{{ menu[1] }}</h5>\n            <i\n              [ngClass]=\"listView[1] ? 'fe-edit ml-2' : 'fe-save ml-2'\"\n              (click)=\"switchViewType(1)\"\n            ></i>\n          </div>\n          <div [formGroup]=\"formDes\">\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\" style=\"width: 100%;\">\n                <label class=\"col-2 col-form-label\">Mô tả ngắn</label>\n                <div class=\"col-10\">\n                  <input\n                    [readonly]=\"listView[1]\"\n                    class=\"form-control\"\n                    formControlName=\"pu_short_description\"\n                  />\n                </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group row mb-3\" style=\"width: 100%;\">\n                <label class=\"col-2 col-form-label\">Mô tả chi tiết</label>\n                <div class=\"col-10\">\n                  <input\n                    [readonly]=\"listView[2]\"\n                    class=\"form-control\"\n                    formControlName=\"pu_description\"\n                  />\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row justify-content-end mr-2\">\n          <div class=\"text-sm-right\">\n            <button\n              class=\"btn btn-success mb-2 mr-1 button-link\"\n              [disabled]=\"!formProduct.dirty && !formDes.dirty && !isChange\"\n              (click)=\"onSubmit()\"\n            >\n              Lưu lại\n            </button>\n            <a class=\"btn btn-danger mb-2 mr-1 button-link\" (click)=\"onChangeToMain()\">Quay lại </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-main-container>\n"

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

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">Loại sản phẩm</h4>\n  <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"onClickCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\">\n      <thead>\n        <tr>\n          <th>STT</th>\n          <th>Loại sản phẩm</th>\n          <th>Mô tả</th>\n          <th>Trạng thái</th>\n          <th>Ngày tạo</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor=\"let productType of productTypes; let i = index\"\n          (click)=\"onClickProductType(productType)\"\n          [ngClass]=\"{\n            'is-selected': productType.product_type_id === selectedProductType?.product_type_id\n          }\"\n        >\n          <td>\n            {{ i + 1 }}\n          </td>\n          <td>\n            {{ productType.product_type_id }}\n          </td>\n          <td>\n            {{ productType.product_type_name }}\n          </td>\n          <td>\n            {{ productType.product_type_status }}\n          </td>\n          <td>\n            {{ productType.created_date }}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"text-right mt-3\">\n    <button [disabled]=\"!selectedProductType\" class=\"btn btn-primary\" (click)=\"onClickChoose()\">\n      Chọn\n    </button>\n    <button class=\"btn btn-success ml-1\" (click)=\"openProductTypeModal()\">\n      Thêm\n    </button>\n    <button\n      [disabled]=\"!selectedProductType\"\n      class=\"btn btn-warning ml-1\"\n      (click)=\"openProductTypeModal()\"\n    >\n      Sửa\n    </button>\n    <button\n      [disabled]=\"!selectedProductType\"\n      class=\"btn btn-danger ml-1\"\n      (click)=\"openConfirmModal()\"\n    >\n      Xóa\n    </button>\n    <button class=\"btn btn-danger ml-1\" (click)=\"onClickCancel()\">\n      Đóng\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/component/list-unit-modal/list-unit-modal.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/list-product/component/list-unit-modal/list-unit-modal.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-dark\">\n  <h4 class=\"modal-title text-white\">Đơn vị</h4>\n  <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"onClickCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-3\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-centered table-hover mb-0\">\n      <thead>\n        <tr>\n          <th>STT</th>\n          <th>Đơn vị</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor=\"let unit of units; let i = index\"\n          (click)=\"onClickUnit(unit)\"\n          [ngClass]=\"{\n            'is-selected': unit.unit_id === selectedUnit?.unit_id\n          }\"\n        >\n          <td>\n            {{ i + 1 }}\n          </td>\n          <td>\n            {{ unit.unit_name }}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"text-right mt-3\">\n    <button [disabled]=\"!selectedUnit\" class=\"btn btn-primary\" (click)=\"onClickChoose()\">\n      Chọn\n    </button>\n    <button class=\"btn btn-success ml-1\" (click)=\"openUnitModal()\">\n      Thêm\n    </button>\n    <button [disabled]=\"!selectedUnit\" class=\"btn btn-warning ml-1\" (click)=\"openUnitModal()\">\n      Sửa\n    </button>\n    <button [disabled]=\"!selectedUnit\" class=\"btn btn-danger ml-1\" (click)=\"openConfirmModal()\">\n      Xóa\n    </button>\n    <button class=\"btn btn-danger ml-1\" (click)=\"onClickCancel()\">\n      Đóng\n    </button>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table table-centered table-hover mb-0\">\n    <thead>\n      <tr>\n        <th>Thời gian</th>\n        <th>Số đơn hàng</th>\n        <th>Số lượng</th>\n        <th>Đơn vị</th>\n        <th>Khách hàng</th>\n        <th>Người tạo</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let ph of purchaseHistory\">\n        <td>\n          {{ ph.cuo_date | date: 'dd/MM/yyyy' }}\n        </td>\n        <td>\n          {{ ph.cuo_code }}\n        </td>\n        <td>\n          {{ ph.op_quantity }}\n        </td>\n        <td>\n          {{ ph.pu_unit_name }}\n        </td>\n        <td>\n          {{ ph.cu_fullname }}\n        </td>\n        <td>\n          {{ ph.sta_fullname }}\n        </td>\n      </tr>\n      <tr *ngIf=\"!purchaseHistory || purchaseHistory?.length === 0\">\n        <td colspan=\"4\">Không có dữ liệu giao dịch</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

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

module.exports = "<app-main-container>\n  <div top class=\"card-body\" style=\"height: 100%;\">\n    <div class=\"row\">\n      <div class=\"col-xl-6 mb-1\">\n        <form class=\"form-inline\">\n          <div class=\"form-group mr-1 ml-1\">\n            <input\n              class=\"form-control\"\n              name=\"textSearch\"\n              placeholder=\"Tìm kiếm...\"\n              [(ngModel)]=\"textSearch\"\n              (input)=\"onChangeFilter()\"\n            />\n          </div>\n          <select\n            class=\"custom-select mr-1\"\n            name=\"category\"\n            [(ngModel)]=\"categorySearch\"\n            (change)=\"onChangeFilter()\"\n          >\n            <option value=\"\">Loại sản phẩm</option>\n            <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{\n              category.name\n            }}</option>\n          </select>\n          <div class=\"input-group clockpicker mr-1\">\n            <input\n              ngbDatepicker\n              readonly=\"true\"\n              class=\"form-control\"\n              placeholder=\"yyyy-mm-dd\"\n              #from=\"ngbDatepicker\"\n              name=\"from\"\n              [maxDate]=\"toDate\"\n              [(ngModel)]=\"fromDate\"\n              (dateSelect)=\"onChangeFilter()\"\n            />\n            <div class=\"input-group-append\" (click)=\"from.toggle()\">\n              <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n            </div>\n          </div>\n          <div class=\"input-group clockpicker\">\n            <input\n              ngbDatepicker\n              readonly=\"true\"\n              class=\"form-control\"\n              placeholder=\"yyyy-mm-dd\"\n              #to=\"ngbDatepicker\"\n              name=\"to\"\n              [minDate]=\"fromDate\"\n              [(ngModel)]=\"toDate\"\n              (dateSelect)=\"onChangeFilter()\"\n            />\n            <div class=\"input-group-append\" (click)=\"to.toggle()\">\n              <span class=\"input-group-text\"><i class=\"mdi mdi-calendar\"></i></span>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-xl-6\">\n        <div class=\"text-sm-right\">\n          <label class=\"btn btn-info mr-1 mb-0\">\n            <input type=\"file\" (change)=\"setFile($event)\" style=\"display: none;\" />\n            <a mat-raised-button color=\"primary\">\n              Nhập\n            </a>\n          </label>\n          <button type=\"button\" class=\"btn btn-info mr-1\" (click)=\"exportProduct()\">\n            Xuất\n          </button>\n          <button type=\"button\" class=\"btn btn-info mr-1\" (click)=\"exportTemplate()\">\n            Xuất mẫu\n          </button>\n          <a class=\"btn btn-success mr-1 button-link\" (click)=\"onRouteDetail()\"> Thêm mới</a>\n          <a\n            class=\"btn btn-primary mr-1 button-link\"\n            [ngClass]=\"selectedProduct ? '' : 'disabled'\"\n            (click)=\"onRouteDetail(selectedProduct)\"\n          >\n            Xem & Sửa</a\n          >\n          <a\n            class=\"btn btn-danger mr-1 button-link\"\n            [ngClass]=\"selectedProduct ? '' : 'disabled'\"\n            (click)=\"openConfirmModal(selectedProduct)\"\n          >\n            Xóa</a\n          >\n        </div>\n      </div>\n    </div>\n\n    <div class=\"table-responsive\">\n      <table class=\"table table-centered table-hover mb-0\">\n        <thead>\n          <tr>\n            <th>STT</th>\n            <th>Mã sản phẩm</th>\n            <th>Tên sản phẩm</th>\n            <th>Số lượng</th>\n            <th>Giá nhập</th>\n            <th>Giá bán</th>\n            <th>Đơn vị</th>\n            <th>Loại sản phẩm</th>\n            <th>Nhà cung cấp</th>\n            <th>Thuế</th>\n            <th>Ngày hết hạn</th>\n            <th>Khối lượng</th>\n            <th>Ngày tạo</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let product of products; let i = index\"\n            (click)=\"onClickProduct(product)\"\n            [ngClass]=\"{\n              'is-selected': product.pu_id === selectedProduct?.pu_id\n            }\"\n          >\n            <td>{{ i + 1 }}</td>\n            <td>\n              {{ product.pu_code }}\n            </td>\n            <td>\n              <span\n                ><img\n                  class=\"rounded-circle avatar-sm\"\n                  [src]=\"'http://27.72.147.222:1230' + product.pu_thumbnail\"\n                  onerror=\"this.src='/assets/images/users/user-1.jpg';\"\n                  alt=\"Avatar\"\n                  (click)=\"selectedProduct = product; file.click()\"\n                  style=\"cursor: pointer;\" />\n                <input\n                  type=\"file\"\n                  accept=\"image/*\"\n                  #file\n                  style=\"display: none;\"\n                  (change)=\"readURL($event)\"\n              /></span>\n              {{ product.pu_name }}\n            </td>\n            <td>\n              {{ product.pu_quantity }}\n            </td>\n            <td>\n              {{ product.pu_buy_price }}\n            </td>\n            <td>\n              {{ product.pu_sale_price }}\n            </td>\n            <td>\n              {{ product.pu_unit_name }}\n            </td>\n            <td>\n              {{ product.product_category_name }}\n            </td>\n            <td>\n              {{ product.provider_name }}\n            </td>\n            <td>\n              {{ product.pu_tax }}\n            </td>\n            <td>\n              {{ product.pu_expired_date | date: 'dd/MM/yyyy' }}\n            </td>\n            <td>\n              {{ product.pu_weight }}\n            </td>\n            <td>\n              {{ product.pu_create_date | date: 'dd/MM/yyyy' }}\n            </td>\n          </tr>\n          <tr *ngIf=\"products?.length === 0\">\n            <td colspan=\"13\">Không có dữ liệu sản phẩm</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <ul class=\"pagination pagination-rounded justify-content-end my-3\">\n      <ngb-pagination\n        (pageChange)=\"onPageChange($event)\"\n        [maxSize]=\"8\"\n        [pageSize]=\"pageSize\"\n        [(page)]=\"page\"\n        [collectionSize]=\"totalSize\"\n      ></ngb-pagination>\n    </ul>\n  </div>\n  <div bottom style=\"height: 100%;\">\n    <ngb-tabset class=\"nav-bordered\">\n      <ngb-tab title=\"Lịch sử mua\">\n        <ng-template ngbTabContent>\n          <app-purchase-history-tab\n            [purchaseHistory]=\"selectedProduct?.list_orp_history\"\n          ></app-purchase-history-tab>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</app-main-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product/product-statistic/product-statistic.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product/product-statistic/product-statistic.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\" style=\"height: 100%; display: flex;\">\n  <div>\n    <button>Test 1</button>\n    <button (click)=\"scroll(test2)\">Test 2</button>\n    <button (click)=\"scroll(test3)\">Test 3</button>\n  </div>\n  <div>\n    <div #test1 style=\"min-height: 1000px;\">Test 1 content</div>\n    <div #test2 style=\"min-height: 1000px;\">Test 2 content</div>\n    <div #test3>Test 3 content</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/product/list-order-detail/data.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/product/list-order-detail/data.ts ***!
  \*********************************************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
const menu = ['Thông tin khách hàng', 'Địa chỉ nhận hàng', 'Thông tin đơn hàng', 'Hóa đơn'];



/***/ }),

/***/ "./src/app/pages/product/list-order-detail/list-order-detail.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/product/list-order-detail/list-order-detail.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .card-body {\n  padding: 0;\n}\n:host .service-detail {\n  display: flex;\n  height: 100%;\n}\n:host .service-detail .menu {\n  width: 200px;\n  border-right: 2px solid lightgray;\n}\n:host .service-detail .menu .item {\n  font-size: small;\n  cursor: pointer;\n  padding: 10px;\n}\n:host .service-detail .menu .item:hover {\n  background-color: lightgrey;\n  font-weight: 700;\n}\n:host .service-detail .menu .item.is-selected {\n  background-color: lightgray;\n}\n:host .service-detail .main {\n  width: 100%;\n  max-height: 100%;\n}\n:host .service-detail .content {\n  height: calc(100% - 40px);\n  overflow: auto;\n  padding-left: 20px;\n}\n:host .service-detail .content .row {\n  margin: 0;\n}\n:host .service-detail .content .form-row {\n  margin: 0;\n}\n:host .service-detail .content span {\n  color: red;\n}\n:host .service-detail .content span i {\n  color: initial;\n}\n:host .service-detail .content .title-section {\n  padding: 5px 0px;\n  align-items: center;\n}\n:host .service-detail .content .title-section input {\n  width: 250px;\n}\n:host .service-detail .content .title-section i {\n  font-size: medium;\n  cursor: pointer;\n}\n:host .service-detail .content .form-inline {\n  align-items: baseline;\n  flex-flow: row;\n}\n:host .service-detail .content .icon {\n  font-weight: bold;\n  font-size: 20px;\n}\n:host .service-detail .content .week-day {\n  padding: 10px;\n  background-color: #f1f5f7;\n  border-radius: 50%;\n  margin: 10px;\n  border: none;\n}\n:host .service-detail .content .week-day:hover {\n  background-color: lightgrey;\n}\n:host .service-detail .content .week-day.is-selected {\n  background-color: lightgrey;\n}\n:host .service-detail .content .repeat-setting input.small {\n  max-width: 50px;\n}\n:host .service-detail .table-responsive {\n  overflow: auto;\n  max-height: 250px;\n}\n:host .service-detail .table-responsive table {\n  border-spacing: 0;\n  border-collapse: separate;\n}\n:host .service-detail .table-responsive thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .service-detail .table-responsive tr {\n  cursor: pointer;\n}\n:host .service-detail .table-responsive tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Xb3Jrc3BhY2UvUHJvamVjdC9jb2VycC1mZS9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1vcmRlci1kZXRhaWwvbGlzdC1vcmRlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1vcmRlci1kZXRhaWwvbGlzdC1vcmRlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxVQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDREo7QURHSTtFQUNFLFlBQUE7RUFDQSxpQ0FBQTtBQ0ROO0FER007RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRFI7QURHUTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUNEVjtBRElRO0VBQ0UsMkJBQUE7QUNGVjtBRE9JO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDTE47QURRSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDTk47QURRTTtFQUNFLFNBQUE7QUNOUjtBRFNNO0VBQ0UsU0FBQTtBQ1BSO0FEVU07RUFDRSxVQUFBO0FDUlI7QURVUTtFQUNFLGNBQUE7QUNSVjtBRFlNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ1ZSO0FEWVE7RUFDRSxZQUFBO0FDVlY7QURhUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ1hWO0FEZU07RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNiUjtBRGdCTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ2RSO0FEaUJNO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ2ZSO0FEaUJRO0VBQ0UsMkJBQUE7QUNmVjtBRGtCUTtFQUNFLDJCQUFBO0FDaEJWO0FEc0JVO0VBQ0UsZUFBQTtBQ3BCWjtBRDBCSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ3hCTjtBRDBCTTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUN4QlI7QUQ0QlE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQzFCVjtBRDhCTTtFQUNFLGVBQUE7QUM1QlI7QUQ4QlE7RUFDRSwyQkFBQTtBQzVCViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1vcmRlci1kZXRhaWwvbGlzdC1vcmRlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuc2VydmljZS1kZXRhaWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLm1lbnUge1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmF5O1xuXG4gICAgICAuaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5tYWluIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICAgIC5yb3cge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLXJvdyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgY29sb3I6IGluaXRpYWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpIHtcbiAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmZvcm0taW5saW5lIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgIH1cblxuICAgICAgLmljb24ge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAud2Vlay1kYXkge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucmVwZWF0LXNldHRpbmcge1xuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgJi5zbWFsbCB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcblxuICAgICAgdGFibGUge1xuICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAgIH1cblxuICAgICAgdGhlYWQge1xuICAgICAgICB0aCB7XG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0ciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmLmlzLXNlbGVjdGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgLnNlcnZpY2UtZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLnNlcnZpY2UtZGV0YWlsIC5tZW51IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyYXk7XG59XG46aG9zdCAuc2VydmljZS1kZXRhaWwgLm1lbnUgLml0ZW0ge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG46aG9zdCAuc2VydmljZS1kZXRhaWwgLm1lbnUgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG46aG9zdCAuc2VydmljZS1kZXRhaWwgLm1lbnUgLml0ZW0uaXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG46aG9zdCAuc2VydmljZS1kZXRhaWwgLm1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5zZXJ2aWNlLWRldGFpbCAuY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG46aG9zdCAuc2VydmljZS1kZXRhaWwgLmNvbnRlbnQgLnJvdyB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5zZXJ2aWNlLWRldGFpbCAuY29udGVudCAuZm9ybS1yb3cge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuc2VydmljZS1kZXRhaWwgLmNvbnRlbnQgc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG59XG46aG9zdCAuc2VydmljZS1kZXRhaWwgLmNvbnRlbnQgc3BhbiBpIHtcbiAgY29sb3I6IGluaXRpYWw7XG59XG46aG9zdCAuc2VydmljZS1kZXRhaWwgLmNvbnRlbnQgLnRpdGxlLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLnNlcnZpY2UtZGV0YWlsIC5jb250ZW50IC50aXRsZS1zZWN0aW9uIGlucHV0IHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuOmhvc3QgLnNlcnZpY2UtZGV0YWlsIC5jb250ZW50IC50aXRsZS1zZWN0aW9uIGkge1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLnNlcnZpY2UtZGV0YWlsIC5jb250ZW50IC5mb3JtLWlubGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZmxleC1mbG93OiByb3c7XG59XG46aG9zdCAuc2VydmljZS1kZXRhaWwgLmNvbnRlbnQgLmljb24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuOmhvc3QgLnNlcnZpY2UtZGV0YWlsIC5jb250ZW50IC53ZWVrLWRheSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG46aG9zdCAuc2VydmljZS1kZXRhaWwgLmNvbnRlbnQgLndlZWstZGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufVxuOmhvc3QgLnNlcnZpY2UtZGV0YWlsIC5jb250ZW50IC53ZWVrLWRheS5pcy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cbjpob3N0IC5zZXJ2aWNlLWRldGFpbCAuY29udGVudCAucmVwZWF0LXNldHRpbmcgaW5wdXQuc21hbGwge1xuICBtYXgtd2lkdGg6IDUwcHg7XG59XG46aG9zdCAuc2VydmljZS1kZXRhaWwgLnRhYmxlLXJlc3BvbnNpdmUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogMjUwcHg7XG59XG46aG9zdCAuc2VydmljZS1kZXRhaWwgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cbjpob3N0IC5zZXJ2aWNlLWRldGFpbCAudGFibGUtcmVzcG9uc2l2ZSB0aGVhZCB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG46aG9zdCAuc2VydmljZS1kZXRhaWwgLnRhYmxlLXJlc3BvbnNpdmUgdHIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAuc2VydmljZS1kZXRhaWwgLnRhYmxlLXJlc3BvbnNpdmUgdHIuaXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/product/list-order-detail/list-order-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/product/list-order-detail/list-order-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListOrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrderDetailComponent", function() { return ListOrderDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _customer_list_customer_component_mobile_modal_mobile_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../customer/list-customer/component/mobile-modal/mobile-modal.component */ "./src/app/pages/customer/list-customer/component/mobile-modal/mobile-modal.component.ts");
/* harmony import */ var _customer_list_customer_component_addres_modal_addres_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../customer/list-customer/component/addres-modal/addres-modal.component */ "./src/app/pages/customer/list-customer/component/addres-modal/addres-modal.component.ts");
/* harmony import */ var _core_services_api_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../core/services/api/customer.service */ "./src/app/core/services/api/customer.service.ts");
/* harmony import */ var _core_services_api_address_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../core/services/api/address.service */ "./src/app/core/services/api/address.service.ts");
/* harmony import */ var _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../core/services/api/product.service */ "./src/app/core/services/api/product.service.ts");
/* harmony import */ var _core_services_api_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../core/services/api/order.service */ "./src/app/core/services/api/order.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data */ "./src/app/pages/product/list-order-detail/data.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_16__);

















let ListOrderDetailComponent = class ListOrderDetailComponent {
    constructor(route, router, modalService, formBuilder, customerService, addressService, orderService, productService) {
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.customerService = customerService;
        this.addressService = addressService;
        this.orderService = orderService;
        this.productService = productService;
        this.cuo_id = null;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.selectedMenuItem = 0;
        this.submitted = false;
        this.errorField = null;
        this.listView = [true, true, true, true];
        this.isChange = false;
        this.tempMobile = 0;
        this.tempAddress = 0;
        this.orderTotal = 0;
        this.createdDate = new Date();
        this.listMobile = [];
        this.listAddress = [];
        this.listProduct = [];
        this.cuo_address = null;
        this.searchCustomer = '';
        this.filterCustomer = {
            pageNumber: 0,
            pageSize: 100,
            source_id: '',
            cu_type: '',
            customer_group_id: '',
            name: '',
            start_date: '2010-01-01',
            end_date: moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('YYYY-MM-DD'),
        };
        this.filterProduct = {
            pageNumber: 0,
            pageSize: 100,
            search_name: '',
            category_id: '',
            start_date: '2010-01-01',
            end_date: moment__WEBPACK_IMPORTED_MODULE_14__(new Date()).format('YYYY-MM-DD'),
        };
    }
    ngOnInit() {
        this.menu = _data__WEBPACK_IMPORTED_MODULE_15__["menu"];
        this.cuo_id = this.route.snapshot.paramMap.get('cuo_id');
        if (this.cuo_id === '')
            this.listView = [false, false, false, false];
        this._initializeForm();
        this._fetchFilter();
        if (this.cuo_id) {
            this._fetchOrder(this.cuo_id);
        }
        else {
            this._loadProvince();
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
        if (this.formCustomer.dirty || this.formOrder.dirty || this.isChange) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
                title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Có',
                cancelButtonText: 'Không',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            }).then((result) => {
                if (result.value) {
                    this.router.navigate(['/product/list-order']);
                }
            });
        }
        else {
            this.router.navigate(['/product/list-order']);
        }
    }
    onSubmit() {
        this.submitted = true;
        if (this.formCustomer.invalid || this.formOrder.invalid)
            return;
        if (this.cuo_address === null)
            return this._notify(false, 'Chưa chọn địa chỉ nhận hàng');
        if (!this.listMobile || this.listMobile.length === 0)
            return this._notify(false, 'Chưa chọn số điện thoại');
        if (!this.listProduct || this.listProduct.length === 0)
            return this._notify(false, 'Chưa chọn sản phẩm cho đơn hàng');
        const customerData = this.formCustomer.value;
        customerData.cu_birthday = this._convertNgbDateToDate(customerData.cu_birthday);
        customerData.cu_email = customerData.cu_email
            ? customerData.cu_email.trim()
            : customerData.cu_email;
        const data = {
            list_product: this.listProduct,
            customer: Object.assign({}, customerData, { list_customer_phone: this.listMobile, list_ship_address: this.listAddress }),
            cuo_total_price: this.orderTotal,
            cuo_status: 1,
            cuo_discount: this.formOrder.value['cuo_discount'],
            cuo_address: this.cuo_address,
            cuo_payment_type: 1,
            cuo_payment_status: 1,
            cuo_ship_tax: this.formOrder.value['cuo_ship_tax'],
        };
        console.log(data);
        if (this.cuo_id)
            this._updateOrder(Object.assign({}, data, { cuo_id: this.cuo_id }));
        else
            this._createOrder(data);
    }
    //#region Customer
    onChangeProvince(e) {
        const districtId = this.province.find((item) => item.name === e.target.value).id;
        this._loadDistrict(districtId);
    }
    onChangeDistrict(e) {
        const wardId = this.district.find((item) => item.name === e.target.value).id;
        this._loadWard(wardId);
    }
    onClickCreateCustomer() {
        this.selectedCustomer = {
            cu_id: null,
            cu_fullname: '',
            source_id: '',
            cu_type: 1,
            cu_birthday: this._convertDateToNgbDate(new Date(1995, 0, 1)),
            customer_group_id: '',
            cu_email: '',
            cu_flag_order: 1,
            cu_flag_used: 1,
            cu_status: 1,
            cu_note: '',
            sha_ward_now: null,
            sha_district_now: null,
            sha_province_now: null,
            sha_detail_now: null,
        };
        this.searchCustomer = '';
        this.cuo_address = null;
        this._patchCustomer();
    }
    changeDatalistCustomer(e) {
        if (!e || e.cu_id === '') {
            this.selectedCustomer = null;
        }
        else {
            this._fetchCustomer(e.cu_id);
        }
        this.isChange = true;
    }
    openMobileModal(mobile) {
        const modalRef = this.modalService.open(_customer_list_customer_component_mobile_modal_mobile_modal_component__WEBPACK_IMPORTED_MODULE_7__["MobileModalComponent"], {
            centered: true,
        });
        modalRef.componentInstance.listMobile = this.listMobile;
        if (mobile) {
            modalRef.componentInstance.mobile = mobile;
        }
        modalRef.componentInstance.passEvent.subscribe((res) => {
            if (res.event) {
                if (mobile) {
                    this.listMobile = this.listMobile.map((item) => {
                        if (item.cp_id !== res.data.cp_id)
                            return item;
                        return res.data;
                    });
                    this.isChange = true;
                }
                else {
                    this.listMobile.push(Object.assign({}, res.data, { cp_id: `temp_${this.tempMobile}` }));
                    this.tempMobile++;
                    this.isChange = true;
                }
            }
            modalRef.close();
        });
    }
    onRemoveMobile(mobile) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
            title: 'Chắc chắn muốn xóa số điện thoại đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this.listMobile = this.listMobile.filter((item) => item.cp_id !== mobile.cp_id);
                this.isChange = true;
            }
        });
    }
    //#endregion
    //#region List Address
    onClickAddress(address) {
        if ((address.sha_detail ? address.sha_detail + ', ' : '') +
            address.sha_ward +
            ', ' +
            address.sha_district +
            ', ' +
            address.sha_province ===
            this.cuo_address)
            return;
        this.cuo_address =
            (address.sha_detail ? `${address.sha_detail}, ` : '') +
                address.sha_ward +
                ', ' +
                address.sha_district +
                ', ' +
                address.sha_province;
        this.isChange = true;
    }
    openAddressModal(address) {
        const modalRef = this.modalService.open(_customer_list_customer_component_addres_modal_addres_modal_component__WEBPACK_IMPORTED_MODULE_8__["AddresModalComponent"], {
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
                        if (item.sha_id !== res.form.sha_id)
                            return item;
                        return res.form;
                    });
                    this.isChange = true;
                }
                else {
                    this.listAddress.push(Object.assign({}, res.form, { sha_id: `temp_${this.tempAddress}` }));
                    this.tempAddress++;
                    this.isChange = true;
                }
            }
            modalRef.close();
        });
    }
    onRemoveAddress(address) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
            title: 'Chắc chắn muốn xóa địa chỉ đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this.listAddress = this.listAddress.filter((item) => item.sha_id !== address.sha_id);
                this.isChange = true;
            }
        });
    }
    //#endregion
    //#region List Product
    changeDatalistProduct(e) {
        this.searchProduct = { pu_id: '', pu_name: 'Chọn sản phẩm' };
        if (e.pu_id !== '') {
            this.products = this.products.filter((item) => item.pu_id !== e.pu_id);
            this.listProduct.push({
                op_quantity: 1,
                pu_sale_price: e.pu_sale_price,
                pu_id: e.pu_id,
                op_discount: 0,
                pu_name: e.pu_name,
                max_quantity: e.pu_quantity,
                op_total_value: e.pu_sale_price,
            });
            this.isChange = true;
            this.sumListProduct();
        }
    }
    onRemoveProduct(product) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
            title: 'Chắc chắn muốn xóa sản phẩm đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this.listProduct = this.listProduct.filter((item) => item.pu_id !== product.pu_id);
                this.products = this.products.concat(product);
                this.isChange = true;
                this.sumListProduct();
            }
        });
    }
    onChangeQuantity(event, puIndex) {
        this.listProduct[puIndex] = Object.assign({}, this.listProduct[puIndex], { op_quantity: event.target.value, op_total_value: (event.target.value *
                this.listProduct[puIndex].pu_sale_price *
                (100 - this.listProduct[puIndex].op_discount)) /
                100 });
        this.isChange = true;
        this.sumListProduct();
    }
    onChangeDiscount(event, puIndex) {
        this.listProduct[puIndex] = Object.assign({}, this.listProduct[puIndex], { op_discount: event.target.value, op_total_value: (this.listProduct[puIndex].op_quantity *
                this.listProduct[puIndex].pu_sale_price *
                (100 - event.target.value)) /
                100 });
        this.isChange = true;
        this.sumListProduct();
    }
    normalizeListProduct() {
        if (!this.listProduct ||
            this.listProduct.length === 0 ||
            !this.products ||
            this.products.length === 0)
            return;
        this.listProduct.forEach((existed) => {
            this.products = this.products.filter((item) => item.pu_id !== existed.pu_id);
        });
    }
    sumListProduct() {
        this.orderTotal = 0;
        this.listProduct.forEach((item) => {
            this.orderTotal += item.op_total_value;
        });
        this.orderTotal =
            (this.orderTotal * (100 - this.formOrder.value['cuo_discount'])) / 100 +
                parseInt(this.formOrder.value['cuo_ship_tax']);
    }
    //#endregion
    //#region Private
    _initializeForm() {
        this.formCustomer = this.formBuilder.group({
            cu_id: [null, null],
            cu_fullname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            source_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cu_type: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cu_birthday: [this._convertDateToNgbDate(new Date(1995, 0, 1)), null],
            customer_group_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cu_email: ['', null],
            cu_flag_order: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cu_flag_used: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cu_status: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cu_note: ['', null],
            sha_ward_now: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sha_district_now: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sha_province_now: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sha_detail_now: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.formOrder = this.formBuilder.group({
            cuo_discount: [0, null],
            cuo_ship_tax: [0, null],
        });
    }
    _fetchFilter() {
        const source$ = this.customerService.loadSource().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        source$.subscribe((res) => {
            this.sources = res.Data;
        });
        const customerGroup$ = this.customerService.loadGroup().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        customerGroup$.subscribe((res) => {
            this.customerGroups = res.Data;
        });
        const type$ = this.customerService.loadType().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        type$.subscribe((res) => {
            this.types = res.Data;
        });
        const customer$ = this.customerService
            .searchCustomer(this.filterCustomer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        customer$.subscribe((res) => {
            this.customers = res.Data.Results;
            this.customers.push({ cu_fullname: 'Chọn khách hàng', cu_id: '' });
        });
        const product$ = this.productService
            .searchProduct(this.filterProduct)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        product$.subscribe((res) => {
            this.products = res.Data.Results;
            this.products.push({ pu_name: 'Chọn sản phẩm', pu_id: '' });
            this.products = this.products.reverse();
            this.normalizeListProduct();
        });
    }
    _fetchOrder(cuo_id) {
        const info$ = this.orderService.loadOrderById({ id: cuo_id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        info$.subscribe((res) => {
            if (res && res.Data) {
                this._patchOrder(res.Data);
            }
        });
    }
    _patchOrder(order) {
        this.formCustomer.patchValue({
            cu_id: order.customer.cu_id,
            cu_fullname: order.customer.cu_fullname,
            source_id: order.customer.source_id,
            cu_type: order.customer.cu_type,
            cu_birthday: this._convertDateToNgbDate(order.customer.cu_birthday),
            customer_group_id: order.customer.customer_group_id,
            cu_email: order.customer.cu_email,
            cu_flag_order: order.customer.cu_flag_order,
            cu_flag_used: order.customer.cu_flag_used,
            cu_status: order.customer.cu_status,
            cu_note: order.customer.cu_note,
            sha_ward_now: order.customer.sha_ward_now,
            sha_district_now: order.customer.sha_district_now,
            sha_province_now: order.customer.sha_province_now,
            sha_detail_now: order.customer.sha_detail_now,
        });
        this.formOrder.patchValue({
            cuo_discount: order.cuo_discount,
            cuo_ship_tax: order.cuo_ship_tax,
        });
        this._loadProvince();
        this.selectedCustomer = order.customer;
        this.listMobile = order.customer.list_customer_phone;
        this.listAddress = order.customer.list_ship_address;
        this.cuo_address = order.cuo_address;
        this.listProduct = order.list_product;
        this.listProduct = this.listProduct.map((item) => {
            return Object.assign({}, item, { op_total_value: (item.op_quantity * item.pu_sale_price * (100 - item.op_discount)) / 100 });
        });
        this.sumListProduct();
        this.normalizeListProduct();
    }
    _loadProvince() {
        const province$ = this.addressService.loadProvince().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        province$.subscribe((res) => {
            if (res && res.Data) {
                this.province = res.Data;
                if (this.formCustomer.value.sha_province_now === null) {
                    this.formCustomer.patchValue({ sha_province_now: res.Data[0].name });
                    this._loadDistrict(res.Data[0].id);
                }
                else {
                    const provinceId = this.province.find((item) => item.name === this.formCustomer.value.sha_province_now).id;
                    this._loadDistrict(provinceId, true);
                }
            }
        });
    }
    _loadDistrict(provinceId, isFirst = false) {
        const district$ = this.addressService
            .loadDistrict({ province_id: provinceId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        district$.subscribe((res) => {
            if (res && res.Data) {
                this.district = res.Data;
                if (this.formCustomer.value.sha_district_now === null || !isFirst) {
                    this.formCustomer.patchValue({ sha_district_now: res.Data[0].name });
                    this._loadWard(res.Data[0].id);
                }
                else {
                    const districtId = this.district.find((item) => item.name === this.formCustomer.value.sha_district_now).id;
                    this._loadWard(districtId, true);
                }
            }
        });
    }
    _loadWard(districtId, isFirst = false) {
        const ward$ = this.addressService
            .loadWard({ district_id: districtId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        ward$.subscribe((res) => {
            if (res && res.Data) {
                this.ward = res.Data;
                if (this.formCustomer.value.sha_ward_now === null || !isFirst) {
                    this.formCustomer.patchValue({ sha_ward_now: res.Data[0].name });
                }
            }
        });
    }
    _createOrder(data) {
        const createOrder$ = this.orderService.createOrder(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        createOrder$.subscribe((res) => {
            if (res && res.Code == 200) {
                this._notify(true, res.Message);
                this.router.navigate(['/product/list-order']);
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
    _updateOrder(updated) {
        const updateOrder$ = this.orderService.updateOrder(updated).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        updateOrder$.subscribe((res) => {
            if (res && res.Code == 200) {
                this._notify(true, res.Message);
                this.router.navigate(['/product/list-order']);
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
    _fetchCustomer(cu_id) {
        const customer$ = this.customerService
            .loadCustomerInfo({ cu_id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        customer$.subscribe((res) => {
            this.selectedCustomer = res.Data;
            this._patchCustomer();
        });
    }
    _patchCustomer() {
        const customer = this.selectedCustomer;
        this._loadProvince();
        this.listAddress = customer.list_ship_address ? customer.list_ship_address : [];
        this.listMobile = customer.list_customer_phone ? customer.list_customer_phone : [];
        this.formCustomer.patchValue({
            cu_id: customer.cu_id,
            cu_fullname: customer.cu_fullname,
            source_id: customer.source_id,
            cu_type: customer.cu_type,
            cu_birthday: this._convertDateToNgbDate(customer.cu_birthday),
            customer_group_id: customer.customer_group_id,
            cu_email: customer.cu_email,
            cu_flag_order: customer.cu_flag_order,
            cu_flag_used: customer.cu_flag_used,
            cu_status: customer.cu_status,
            cu_note: customer.cu_note,
            sha_ward_now: customer.sha_ward_now,
            sha_district_now: customer.sha_district_now,
            sha_province_now: customer.sha_province_now,
            sha_detail_now: customer.sha_detail_now,
        });
    }
    _convertDateToNgbDate(date) {
        if (!date) {
            return null;
        }
        const year = moment__WEBPACK_IMPORTED_MODULE_14__(date).year();
        const month = moment__WEBPACK_IMPORTED_MODULE_14__(date).month() + 1;
        const day = moment__WEBPACK_IMPORTED_MODULE_14__(date).date();
        return new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDate"](year, month, day);
    }
    _convertNgbDateToDate(ngbDate) {
        if (!ngbDate) {
            return '';
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_16__["isUndefined"])(ngbDate.year))
            return ngbDate;
        const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
        return moment__WEBPACK_IMPORTED_MODULE_14__(newDate).format();
    }
    _notify(isSuccess, message) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_13___default.a.fire({
            toast: true,
            position: 'top-end',
            type: isSuccess ? 'success' : 'error',
            title: message,
            showConfirmButton: false,
            timer: 2000,
        });
    }
};
ListOrderDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_services_api_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"] },
    { type: _core_services_api_address_service__WEBPACK_IMPORTED_MODULE_10__["AddressService"] },
    { type: _core_services_api_order_service__WEBPACK_IMPORTED_MODULE_12__["OrderService"] },
    { type: _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"] }
];
ListOrderDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-order-detail',
        template: __webpack_require__(/*! raw-loader!./list-order-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-order-detail/list-order-detail.component.html"),
        styles: [__webpack_require__(/*! ./list-order-detail.component.scss */ "./src/app/pages/product/list-order-detail/list-order-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _core_services_api_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"],
        _core_services_api_address_service__WEBPACK_IMPORTED_MODULE_10__["AddressService"],
        _core_services_api_order_service__WEBPACK_IMPORTED_MODULE_12__["OrderService"],
        _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"]])
], ListOrderDetailComponent);



/***/ }),

/***/ "./src/app/pages/product/list-order/component/order-modal/order-modal.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/product/list-order/component/order-modal/order-modal.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host span {\n  font-weight: bold;\n}\n:host .title-section {\n  color: red;\n  margin-bottom: 1.5em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Xb3Jrc3BhY2UvUHJvamVjdC9jb2VycC1mZS9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1vcmRlci9jb21wb25lbnQvb3JkZXItbW9kYWwvb3JkZXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1vcmRlci9jb21wb25lbnQvb3JkZXItbW9kYWwvb3JkZXItbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9saXN0LW9yZGVyL2NvbXBvbmVudC9vcmRlci1tb2RhbC9vcmRlci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAudGl0bGUtc2VjdGlvbiB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuIiwiOmhvc3Qgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOmhvc3QgLnRpdGxlLXNlY3Rpb24ge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

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
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_13__);














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
            name: '',
            start_date: '2010-01-01',
            end_date: moment__WEBPACK_IMPORTED_MODULE_12__(new Date()).format('YYYY-MM-DD'),
        };
        this.filterProduct = {
            pageNumber: 0,
            pageSize: 100,
            search_name: '',
            category_id: '',
            start_date: '2010-01-01',
            end_date: moment__WEBPACK_IMPORTED_MODULE_12__(new Date()).format('YYYY-MM-DD'),
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
            cuo_id: this.order ? this.order.cuo_id : null,
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
    initializeForm() {
        this.formOrder = this.formBuilder.group({
            cuo_discount: [0, null],
            cuo_ship_tax: [0, null],
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
            cu_curator_id: [null, null],
        });
    }
    _patchData(data) {
        const { list_product, customer, cuo_discount, cuo_ship_tax, cuo_address } = data;
        this.selectedAddress = cuo_address;
        this.selectedCustomer = customer;
        this._patchCustomer();
        // tab product
        this.listProduct = list_product;
        this.listProduct = this.listProduct.map((item) => {
            return Object.assign({}, item, { op_total_value: (item.op_quantity * item.pu_sale_price * (100 - item.op_discount)) / 100 });
        });
        this.formOrder.patchValue({
            cuo_discount: cuo_discount,
            cuo_ship_tax: cuo_ship_tax,
        });
        this.sumListProduct();
    }
    _fetchFilter() {
        const sources$ = this.customerService.loadSource().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        sources$.subscribe((res) => {
            this.sources = res.Data;
        });
        const group$ = this.customerService.loadGroup().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        group$.subscribe((res) => {
            this.groups = res.Data;
        });
        const customer$ = this.customerService
            .searchCustomer(this.filterCustomer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        customer$.subscribe((res) => {
            this.customers = res.Data.Results;
            this.customers.push({ cu_fullname: 'Chọn khách hàng', cu_id: '' });
        });
        const product$ = this.productService
            .searchProduct(this.filterProduct)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        product$.subscribe((res) => {
            this.products = res.Data.Results;
            this.products.push({ pu_name: 'Chọn sản phẩm', pu_id: '' });
        });
        const staff$ = this.staffService.loadAllStaff().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        staff$.subscribe((res) => {
            this.staffs = res.Data;
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
        if (Object(util__WEBPACK_IMPORTED_MODULE_13__["isUndefined"])(ngbDate.year))
            return ngbDate;
        const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
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
            cu_curator_id: null,
        };
        this.searchCustomer = '';
        this.readOnly = false;
        this._patchCustomer();
    }
    onChangeProvince(e) {
        const districtId = this.provinces.find((item) => item.name === e.target.value).id;
        this._loadDistrict(districtId);
    }
    onChangeDistrict(e) {
        const wardId = this.districts.find((item) => item.name === e.target.value).id;
        this._loadWard(wardId);
    }
    onRemoveAddress(address) {
        this.listAddress = this.listAddress.filter((item) => item.sha_id !== address.sha_id);
    }
    onUpdateAddress(address) {
        this.selectedAddress = address;
        this.formCustomer.patchValue({
            cu_address: address.sha_detail,
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
            const index = this.listAddress.findIndex((item) => item.sha_id === this.selectedAddress.sha_id);
            this.listAddress[index] = Object.assign({}, this.listAddress[index], { sha_province: this.formCustomer.controls['cu_province'].value, sha_district: this.formCustomer.controls['cu_district'].value, sha_ward: this.formCustomer.controls['cu_ward'].value, sha_detail: this.formCustomer.controls['cu_address'].value });
        }
        else {
            this.listAddress.push({
                sha_id: this.listAddress.length,
                sha_province: this.formCustomer.controls['cu_province'].value,
                sha_district: this.formCustomer.controls['cu_district'].value,
                sha_ward: this.formCustomer.controls['cu_ward'].value,
                sha_detail: this.formCustomer.controls['cu_address'].value,
            });
        }
        this.selectedAddress = null;
        this._loadProvince();
        this.formCustomer.patchValue({
            cu_address: '',
        });
    }
    changeDatalistCustomer(e) {
        this.readOnly = true;
        if (!e || e.cu_id === '') {
            this.selectedCustomer = null;
        }
        else {
            this._fetchCustomer(e.cu_id);
        }
    }
    _loadProvince() {
        const province$ = this.addressService.loadProvince().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed$));
        province$.subscribe((res) => {
            if (res && res.Data) {
                this.provinces = res.Data;
                if (this.selectedAddress) {
                    this.formCustomer.patchValue({ cu_province: this.selectedAddress.sha_province });
                    const provinceId = this.provinces.find((item) => item.name === this.selectedAddress.sha_province).id;
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
                    const districtId = this.districts.find((item) => item.name === this.selectedAddress.sha_district).id;
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
            .loadCustomerInfo({ cu_id })
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
            cu_curator_id: customer.cu_curator_id,
        });
    }
    //#endregion
    //#region Product Tab
    changeDatalistProduct(e) {
        this._fetchProduct(e.pu_id);
    }
    onRemoveProduct(product) {
        this.listProduct = this.listProduct.filter((item) => item.op_id !== product.op_id);
        this.sumListProduct();
    }
    onChangeQuantity(event, product) {
        const puIndex = this.listProduct.findIndex((item) => item.op_id === product.op_id);
        this.listProduct[puIndex] = Object.assign({}, this.listProduct[puIndex], { op_quantity: event.target.value, op_total_value: (event.target.value *
                this.listProduct[puIndex].pu_sale_price *
                (100 - this.listProduct[puIndex].op_discount)) /
                100 });
        this.sumListProduct();
    }
    onChangeDiscount(event, product) {
        const puIndex = this.listProduct.findIndex((item) => item.op_id === product.op_id);
        this.listProduct[puIndex] = Object.assign({}, this.listProduct[puIndex], { op_discount: event.target.value, op_total_value: (this.listProduct[puIndex].op_quantity *
                this.listProduct[puIndex].pu_sale_price *
                (100 - event.target.value)) /
                100 });
        this.sumListProduct();
    }
    _fetchProduct(pu_id) {
        const product$ = this.productService
            .loadProductInfo({ pu_id })
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
                op_total_value: product.pu_sale_price,
            });
            this.searchProduct = '';
            this.sumListProduct();
        });
    }
    sumListProduct() {
        this.orderTotal = 0;
        this.listProduct.map((item) => {
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

module.exports = ":host .card-body {\n  padding: 0;\n  padding-top: 10px;\n}\n:host .form-inline {\n  align-items: baseline;\n}\n:host a.diabled {\n  cursor: default;\n  pointer-events: none;\n}\n:host .table-responsive {\n  overflow: auto;\n  max-height: calc(100% - 100px);\n}\n:host .table-responsive table {\n  min-width: 1400px;\n  border-spacing: 0;\n  border-collapse: separate;\n}\n:host .table-responsive thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .table-responsive tr {\n  cursor: pointer;\n}\n:host .table-responsive tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Xb3Jrc3BhY2UvUHJvamVjdC9jb2VycC1mZS9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1vcmRlci9saXN0LW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0L2xpc3Qtb3JkZXIvbGlzdC1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtBQ0RKO0FES0k7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUNITjtBRE9FO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0FDTEo7QURPSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0xOO0FEU007RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ1BSO0FEV0k7RUFDRSxlQUFBO0FDVE47QURXTTtFQUNFLDJCQUFBO0FDVFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0L2xpc3Qtb3JkZXIvbGlzdC1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuXG4gIC5mb3JtLWlubGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICB9XG5cbiAgYSB7XG4gICAgJi5kaWFibGVkIHtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG5cbiAgICB0YWJsZSB7XG4gICAgICBtaW4td2lkdGg6IDE0MDBweDtcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICB9XG5cbiAgICB0aGVhZCB7XG4gICAgICB0aCB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmLmlzLXNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuOmhvc3QgLmZvcm0taW5saW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuOmhvc3QgYS5kaWFibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHtcbiAgbWluLXdpZHRoOiAxNDAwcHg7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUgdGhlYWQgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUgdHIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAudGFibGUtcmVzcG9uc2l2ZSB0ci5pcy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn0iXX0= */"

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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_api_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/api/order.service */ "./src/app/core/services/api/order.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let ListOrderComponent = class ListOrderComponent {
    constructor(orderService, router) {
        this.orderService = orderService;
        this.router = router;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.textSearch = '';
        this.paymentMethodSearch = '';
        this.fromDate = this._convertDateToNgbDate(new Date('2010-01-01'));
        this.toDate = this._convertDateToNgbDate(new Date());
        this.statusSearch = '';
        this.page = 1;
        this.pageSize = 10;
        this.totalSize = 0;
        this.selectedOrder = null;
    }
    ngOnInit() {
        this._fetchData();
        this._fetchFilter();
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    onClickOrder(order) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(this.selectedOrder)) {
            this.selectedOrder = order;
        }
        else {
            if (this.selectedOrder.cuo_id !== order.cuo_id) {
                this.selectedOrder = order;
            }
            else {
                this.selectedOrder = null;
            }
        }
    }
    onRouteDetail(order) {
        this.router.navigate(['/product/list-order-detail', order ? order.cuo_id : '']);
    }
    openConfirmModal(order) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Chắc chắn muốn xóa đơn hàng đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this._removeOrder(order);
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
    onChangeStatus(event, order) {
        const changeStatus$ = this.orderService
            .updateOrderStatus({
            cuo_id: order.cuo_id,
            cuo_status: event.target.value,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        changeStatus$.subscribe((res) => {
            if (res && res.Code == 200) {
                this._notify(true, res.Message);
                this._fetchData();
            }
            else
                this._notify(false, res.Message);
        }, (e) => this._notify(false, e.Message));
    }
    setFile(event) {
        let files = event.srcElement.files;
        if (!files) {
            return;
        }
        const import$ = this.orderService.importOrderProduct(files[0]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        import$.subscribe((res) => {
            if (res && res.Code == 200) {
                this._notify(true, res.Message);
                this._fetchData();
            }
            else
                this._notify(false, res.Message);
        }, (e) => this._notify(false, e.Message));
    }
    exportOrderProduct() {
        const export$ = this.orderService
            .exportOrderProduct({
            pageNumber: this.page - 1,
            pageSize: this.pageSize,
            payment_type_id: this.paymentMethodSearch,
            name: this.textSearch,
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
    exportTemplate() {
        const export$ = this.orderService.exportTemplateProduct().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        export$.subscribe((res) => {
            if (res && res.Data) {
                const link = 'http://27.72.147.222:1230/' + res.Data;
                window.open(link);
            }
        });
    }
    _fetchData(selected) {
        const order$ = this.orderService
            .loadOrder({
            pageNumber: this.page - 1,
            pageSize: this.pageSize,
            payment_type_id: this.paymentMethodSearch,
            code: this.textSearch,
            cuo_status: this.statusSearch,
            start_date: this._convertNgbDateToDate(this.fromDate),
            end_date: this._convertNgbDateToDate(this.toDate),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        order$.subscribe((res) => {
            if (res && res.Data) {
                this.totalSize = res.Data.TotalNumberOfRecords;
                this.orders = res.Data.Results;
                if (selected) {
                    this.selectedOrder = this.orders.find((item) => item.cuo_id === selected.cuo_id);
                }
                else {
                    this.selectedOrder = this.orders[0];
                }
            }
        });
    }
    _fetchFilter() {
        const paymentMethod$ = this.orderService.loadPaymentMethod().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        paymentMethod$.subscribe((res) => {
            this.paymentMethods = res.Data;
        });
        const orderStatus$ = this.orderService.loadOrderStatus().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        orderStatus$.subscribe((res) => {
            this.orderStatus = res.Data;
        });
    }
    _removeOrder(order) {
        const removeOrder$ = this.orderService
            .removeOrder({ customer_orderId: order.cuo_id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        removeOrder$.subscribe((res) => {
            if (res && res.Code == 200) {
                this._notify(true, res.Message);
                this._fetchData();
            }
            else
                this._notify(false, res.Message);
        }, (e) => this._notify(false, e.Message));
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
    _convertDateToNgbDate(date) {
        if (!date) {
            return null;
        }
        const year = moment__WEBPACK_IMPORTED_MODULE_7__(date).year();
        const month = moment__WEBPACK_IMPORTED_MODULE_7__(date).month() + 1;
        const day = moment__WEBPACK_IMPORTED_MODULE_7__(date).date();
        return new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"](year, month, day);
    }
    _convertNgbDateToDate(ngbDate) {
        if (!ngbDate) {
            return '';
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(ngbDate.year))
            return ngbDate;
        const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
        return moment__WEBPACK_IMPORTED_MODULE_7__(newDate).format('YYYY-MM-DD');
    }
};
ListOrderComponent.ctorParameters = () => [
    { type: _core_services_api_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
ListOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-order',
        template: __webpack_require__(/*! raw-loader!./list-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-order/list-order.component.html"),
        styles: [__webpack_require__(/*! ./list-order.component.scss */ "./src/app/pages/product/list-order/list-order.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
], ListOrderComponent);



/***/ }),

/***/ "./src/app/pages/product/list-product-detail/data.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/product/list-product-detail/data.ts ***!
  \***********************************************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
const menu = ['Thông tin sản phẩm', 'Mô tả sản phẩm'];



/***/ }),

/***/ "./src/app/pages/product/list-product-detail/list-product-detail.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/product/list-product-detail/list-product-detail.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .card-body {\n  padding: 0;\n}\n:host .product-detail {\n  display: flex;\n  height: 100%;\n}\n:host .product-detail .menu {\n  width: 200px;\n  border-right: 2px solid lightgray;\n}\n:host .product-detail .menu .item {\n  font-size: small;\n  cursor: pointer;\n  padding: 10px;\n}\n:host .product-detail .menu .item:hover {\n  background-color: lightgrey;\n  font-weight: 700;\n}\n:host .product-detail .menu .item.is-selected {\n  background-color: lightgray;\n}\n:host .product-detail .main {\n  width: 100%;\n  max-height: 100%;\n}\n:host .product-detail .content {\n  height: calc(100% - 40px);\n  overflow: auto;\n  padding-left: 20px;\n}\n:host .product-detail .content .row {\n  margin: 0;\n}\n:host .product-detail .content .form-row {\n  margin: 0;\n}\n:host .product-detail .content span {\n  color: red;\n}\n:host .product-detail .content .title-section {\n  padding: 5px 0px;\n  align-items: center;\n}\n:host .product-detail .content i {\n  cursor: pointer;\n}\n:host .product-detail .content .form-inline {\n  align-items: baseline;\n  flex-flow: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Xb3Jrc3BhY2UvUHJvamVjdC9jb2VycC1mZS9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0LWRldGFpbC9saXN0LXByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0L2xpc3QtcHJvZHVjdC1kZXRhaWwvbGlzdC1wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNESjtBREdJO0VBQ0UsWUFBQTtFQUNBLGlDQUFBO0FDRE47QURHTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNEUjtBREdRO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQ0RWO0FESVE7RUFDRSwyQkFBQTtBQ0ZWO0FET0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNMTjtBRFFJO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNOTjtBRFFNO0VBQ0UsU0FBQTtBQ05SO0FEU007RUFDRSxTQUFBO0FDUFI7QURVTTtFQUNFLFVBQUE7QUNSUjtBRFdNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ1RSO0FEWU07RUFDRSxlQUFBO0FDVlI7QURhTTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ1hSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9saXN0LXByb2R1Y3QtZGV0YWlsL2xpc3QtcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAucHJvZHVjdC1kZXRhaWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLm1lbnUge1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmF5O1xuXG4gICAgICAuaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5tYWluIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICAgIC5yb3cge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLXJvdyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgaSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmZvcm0taW5saW5lIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgLnByb2R1Y3QtZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLnByb2R1Y3QtZGV0YWlsIC5tZW51IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyYXk7XG59XG46aG9zdCAucHJvZHVjdC1kZXRhaWwgLm1lbnUgLml0ZW0ge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG46aG9zdCAucHJvZHVjdC1kZXRhaWwgLm1lbnUgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG46aG9zdCAucHJvZHVjdC1kZXRhaWwgLm1lbnUgLml0ZW0uaXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG46aG9zdCAucHJvZHVjdC1kZXRhaWwgLm1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5wcm9kdWN0LWRldGFpbCAuY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG46aG9zdCAucHJvZHVjdC1kZXRhaWwgLmNvbnRlbnQgLnJvdyB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5wcm9kdWN0LWRldGFpbCAuY29udGVudCAuZm9ybS1yb3cge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAucHJvZHVjdC1kZXRhaWwgLmNvbnRlbnQgc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG59XG46aG9zdCAucHJvZHVjdC1kZXRhaWwgLmNvbnRlbnQgLnRpdGxlLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLnByb2R1Y3QtZGV0YWlsIC5jb250ZW50IGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAucHJvZHVjdC1kZXRhaWwgLmNvbnRlbnQgLmZvcm0taW5saW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBmbGV4LWZsb3c6IHJvdztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/product/list-product-detail/list-product-detail.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/product/list-product-detail/list-product-detail.component.ts ***!
  \************************************************************************************/
/*! exports provided: ListProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductDetailComponent", function() { return ListProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/api/product.service */ "./src/app/core/services/api/product.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data */ "./src/app/pages/product/list-product-detail/data.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_11__);












let ListProductDetailComponent = class ListProductDetailComponent {
    constructor(route, router, formBuilder, productService) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.pu_id = null;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.selectedMenuItem = 0;
        this.submitted = false;
        this.errorField = null;
        this.isChange = false;
        this.listView = [true, true];
    }
    ngOnInit() {
        this.pu_id = this.route.snapshot.paramMap.get('pu_id');
        if (this.pu_id === '')
            this.listView = [false, false];
        this.menu = _data__WEBPACK_IMPORTED_MODULE_10__["menu"];
        this._initializeForm();
        this._fetchFilter();
        if (this.pu_id) {
            this._fetchProduct(this.pu_id);
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
    onClearDate() {
        this.formProduct.patchValue({
            pu_expired_date: null,
        });
        this.isChange = true;
    }
    switchViewType(index) {
        this.listView[index] = !this.listView[index];
    }
    onChangeToMain() {
        if (this.formProduct.dirty || this.formDes.dirty) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Có',
                cancelButtonText: 'Không',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            }).then((result) => {
                if (result.value) {
                    this.router.navigate(['/product/list-product']);
                }
            });
        }
        else {
            this.router.navigate(['/product/list-product']);
        }
    }
    onSubmit() {
        this.submitted = true;
        if (this.formProduct.invalid || this.formDes.invalid)
            return;
        if (this.formProduct.value.pu_name.trim() === '') {
            return this.formProduct.controls['pu_name'].setErrors({ required: true });
        }
        const productForm = this.formProduct.value;
        productForm.pu_expired_date = this._convertNgbDateToDate(productForm.pu_expired_date);
        const data = Object.assign({}, productForm, this.formDes.value);
        console.log(data);
        if (this.pu_id)
            this._updateProduct(Object.assign({}, data, { pu_id: this.pu_id }));
        else
            this._createProduct(data);
    }
    //#region Private
    _initializeForm() {
        this.formProduct = this.formBuilder.group({
            pu_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pu_unit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pu_quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            product_category_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pu_buy_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            provider_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pu_sale_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pu_expired_date: [null, null],
            pu_tax: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pu_weight: ['', null],
            pu_saleoff: ['', null],
        });
        this.formDes = this.formBuilder.group({
            pu_short_description: ['', null],
            pu_description: ['', null],
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
    _fetchProduct(pu_id) {
        const info$ = this.productService.loadProductInfo({ pu_id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        info$.subscribe((res) => {
            if (res && res.Data) {
                this._patchProduct(res.Data);
            }
        });
    }
    _patchProduct(product) {
        this.formProduct.patchValue({
            pu_name: product.pu_name,
            pu_quantity: product.pu_quantity,
            pu_buy_price: product.pu_buy_price,
            pu_sale_price: product.pu_sale_price,
            pu_saleoff: product.pu_saleoff,
            pu_unit: product.pu_unit,
            product_category_id: product.product_category_id,
            provider_id: product.provider_id,
            pu_tax: product.pu_tax,
            pu_expired_date: this._convertDateToNgbDate(product.pu_expired_date),
            pu_weight: product.pu_weight,
        });
        this.formDes.patchValue({
            pu_short_description: product.pu_short_description,
            pu_description: product.pu_description,
        });
    }
    _createProduct(data) {
        const createProduct$ = this.productService.createProduct(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        createProduct$.subscribe((res) => {
            if (res && res.Code === 200) {
                this._notify(true, res.Message);
                this.router.navigate(['/product/list-product']);
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
    _updateProduct(updated) {
        const updateProduct$ = this.productService
            .updateProduct(updated)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        updateProduct$.subscribe((res) => {
            if (res && res.Code === 200) {
                this._notify(true, res.Message);
                this.router.navigate(['/product/list-product']);
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
        if (Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(ngbDate.year))
            return ngbDate;
        const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
        return moment__WEBPACK_IMPORTED_MODULE_9__(newDate).format();
    }
    _convertDateToNgbDate(date) {
        if (!date) {
            return null;
        }
        const year = moment__WEBPACK_IMPORTED_MODULE_9__(date).year();
        const month = moment__WEBPACK_IMPORTED_MODULE_9__(date).month() + 1;
        const day = moment__WEBPACK_IMPORTED_MODULE_9__(date).date();
        return new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDate"](year, month, day);
    }
    _notify(isSuccess, message) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            toast: true,
            position: 'top-end',
            type: isSuccess ? 'success' : 'error',
            title: message,
            showConfirmButton: false,
            timer: 2000,
        });
    }
};
ListProductDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] }
];
ListProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-list-product-detail',
        template: __webpack_require__(/*! raw-loader!./list-product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product-detail/list-product-detail.component.html"),
        styles: [__webpack_require__(/*! ./list-product-detail.component.scss */ "./src/app/pages/product/list-product-detail/list-product-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]])
], ListProductDetailComponent);



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

module.exports = ":host tr {\n  cursor: pointer;\n}\n:host tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Xb3Jrc3BhY2UvUHJvamVjdC9jb2VycC1mZS9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9saXN0LXByb2R1Y3QtdHlwZS1tb2RhbC9saXN0LXByb2R1Y3QtdHlwZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9saXN0LXByb2R1Y3QvY29tcG9uZW50L2xpc3QtcHJvZHVjdC10eXBlLW1vZGFsL2xpc3QtcHJvZHVjdC10eXBlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtBQ0FSO0FERVE7RUFDSSwyQkFBQTtBQ0FaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9saXN0LXByb2R1Y3QvY29tcG9uZW50L2xpc3QtcHJvZHVjdC10eXBlLW1vZGFsL2xpc3QtcHJvZHVjdC10eXBlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHRyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICB9XG4gICAgfVxufSIsIjpob3N0IHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgdHIuaXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59Il19 */"

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
/* harmony import */ var _product_type_modal_product_type_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-type-modal/product-type-modal.component */ "./src/app/pages/product/list-product/component/product-type-modal/product-type-modal.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);





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
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.selectedProductType)) {
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
        const modalRef = this.modalService.open(_product_type_modal_product_type_modal_component__WEBPACK_IMPORTED_MODULE_3__["ProductTypeModalComponent"], {
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
    openConfirmModal() { }
    loadProductTypeData() {
        this.productTypes = [];
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

module.exports = ":host tr {\n  cursor: pointer;\n}\n:host tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Xb3Jrc3BhY2UvUHJvamVjdC9jb2VycC1mZS9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9saXN0LXVuaXQtbW9kYWwvbGlzdC11bml0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0L2xpc3QtcHJvZHVjdC9jb21wb25lbnQvbGlzdC11bml0LW1vZGFsL2xpc3QtdW5pdC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7QUNBUjtBREVRO0VBQ0ksMkJBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9saXN0LXVuaXQtbW9kYWwvbGlzdC11bml0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHRyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICB9XG4gICAgfVxufSIsIjpob3N0IHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgdHIuaXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59Il19 */"

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
/* harmony import */ var _unit_modal_unit_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unit-modal/unit-modal.component */ "./src/app/pages/product/list-product/component/unit-modal/unit-modal.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);





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
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.selectedUnit)) {
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
        const modalRef = this.modalService.open(_unit_modal_unit_modal_component__WEBPACK_IMPORTED_MODULE_3__["UnitModalComponent"], {
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
    openConfirmModal() { }
    loadUnitData() {
        this.units = [];
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

module.exports = ":host span {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Xb3Jrc3BhY2UvUHJvamVjdC9jb2VycC1mZS9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9wcm9kdWN0LW1vZGFsL3Byb2R1Y3QtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9wcm9kdWN0LW1vZGFsL3Byb2R1Y3QtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxVQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0L2xpc3QtcHJvZHVjdC9jb21wb25lbnQvcHJvZHVjdC1tb2RhbC9wcm9kdWN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkXG4gICAgfVxufSIsIjpob3N0IHNwYW4ge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

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
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_11__);












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
            size: 'lg',
        });
        modalRef.componentInstance.passEvent.subscribe(() => {
            modalRef.close();
        });
    }
    openProductTypeModal() {
        const modalRef = this.modalService.open(_list_product_type_modal_list_product_type_modal_component__WEBPACK_IMPORTED_MODULE_5__["ListProductTypeModalComponent"], {
            centered: true,
            size: 'lg',
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
            pu_weight: ['', null],
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
            pu_weight: product.pu_weight,
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
        if (Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(ngbDate.year))
            return ngbDate;
        const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
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

module.exports = ":host span {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Xb3Jrc3BhY2UvUHJvamVjdC9jb2VycC1mZS9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9wcm9kdWN0LXR5cGUtbW9kYWwvcHJvZHVjdC10eXBlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0L2xpc3QtcHJvZHVjdC9jb21wb25lbnQvcHJvZHVjdC10eXBlLW1vZGFsL3Byb2R1Y3QtdHlwZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFVBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9wcm9kdWN0LXR5cGUtbW9kYWwvcHJvZHVjdC10eXBlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkXG4gICAgfVxufSIsIjpob3N0IHNwYW4ge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

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



let ProductTypeModalComponent = class ProductTypeModalComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
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
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], ProductTypeModalComponent);



/***/ }),

/***/ "./src/app/pages/product/list-product/component/purchase-history-tab/purchase-history-tab.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/product/list-product/component/purchase-history-tab/purchase-history-tab.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .table-responsive {\n  overflow: auto;\n  max-height: calc(100% - 85px);\n}\n:host .table {\n  border-spacing: 0;\n  border-collapse: separate;\n}\n:host .table thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Xb3Jrc3BhY2UvUHJvamVjdC9jb2VycC1mZS9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9wdXJjaGFzZS1oaXN0b3J5LXRhYi9wdXJjaGFzZS1oaXN0b3J5LXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9saXN0LXByb2R1Y3QvY29tcG9uZW50L3B1cmNoYXNlLWhpc3RvcnktdGFiL3B1cmNoYXNlLWhpc3RvcnktdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0FDQUo7QURHRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNESjtBRElNO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC9wdXJjaGFzZS1oaXN0b3J5LXRhYi9wdXJjaGFzZS1oaXN0b3J5LXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDg1cHgpO1xuICB9XG5cbiAgLnRhYmxlIHtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuXG4gICAgdGhlYWQge1xuICAgICAgdGgge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gODVweCk7XG59XG46aG9zdCAudGFibGUge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cbjpob3N0IC50YWJsZSB0aGVhZCB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"

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
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], PurchaseHistoryTabComponent.prototype, "purchaseHistory", void 0);
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

module.exports = ":host span {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Xb3Jrc3BhY2UvUHJvamVjdC9jb2VycC1mZS9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC91bml0LW1vZGFsL3VuaXQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2NvbXBvbmVudC91bml0LW1vZGFsL3VuaXQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxVQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0L2xpc3QtcHJvZHVjdC9jb21wb25lbnQvdW5pdC1tb2RhbC91bml0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmVkXG4gICAgfVxufSIsIjpob3N0IHNwYW4ge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

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



let UnitModalComponent = class UnitModalComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
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
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], UnitModalComponent);



/***/ }),

/***/ "./src/app/pages/product/list-product/list-product.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/product/list-product/list-product.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .card-body {\n  padding: 0;\n  padding-top: 10px;\n}\n:host .form-inline {\n  align-items: baseline;\n  flex-flow: row;\n}\n:host a.diabled {\n  cursor: default;\n  pointer-events: none;\n}\n:host .table-responsive {\n  overflow: auto;\n  max-height: calc(100% - 150px);\n}\n:host .table-responsive table {\n  min-width: 1300px;\n  border-spacing: 0;\n  border-collapse: separate;\n}\n:host .table-responsive thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .table-responsive tr {\n  cursor: pointer;\n}\n:host .table-responsive tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Xb3Jrc3BhY2UvUHJvamVjdC9jb2VycC1mZS9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2xpc3QtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9saXN0LXByb2R1Y3QvbGlzdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDQUo7QURHRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FES0k7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUNITjtBRE9FO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0FDTEo7QURPSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0xOO0FEU007RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ1BSO0FEV0k7RUFDRSxlQUFBO0FDVE47QURXTTtFQUNFLDJCQUFBO0FDVFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0L2xpc3QtcHJvZHVjdC9saXN0LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cblxuICAuZm9ybS1pbmxpbmUge1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgfVxuXG4gIGEge1xuICAgICYuZGlhYmxlZCB7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIH1cblxuICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTUwcHgpO1xuXG4gICAgdGFibGUge1xuICAgICAgbWluLXdpZHRoOiAxMzAwcHg7XG4gICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgfVxuXG4gICAgdGhlYWQge1xuICAgICAgdGgge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJi5pcy1zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbjpob3N0IC5mb3JtLWlubGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZmxleC1mbG93OiByb3c7XG59XG46aG9zdCBhLmRpYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTUwcHgpO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUge1xuICBtaW4td2lkdGg6IDEzMDBweDtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG59XG46aG9zdCAudGFibGUtcmVzcG9uc2l2ZSB0aGVhZCB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG46aG9zdCAudGFibGUtcmVzcG9uc2l2ZSB0ciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC50YWJsZS1yZXNwb25zaXZlIHRyLmlzLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufSJdfQ== */"

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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/api/product.service */ "./src/app/core/services/api/product.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let ListProductComponent = class ListProductComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.textSearch = '';
        this.categorySearch = '';
        this.fromDate = this._convertDateToNgbDate(new Date('2010-01-01'));
        this.toDate = this._convertDateToNgbDate(new Date());
        this.page = 1;
        this.pageSize = 10;
        this.totalSize = 0;
        this.selectedProduct = null;
    }
    ngOnInit() {
        this._fetchData();
        this._fetchFilter();
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    onClickProduct(product) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(this.selectedProduct)) {
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
    onRouteDetail(product) {
        this.router.navigate(['/product/list-product-detail', product ? product.pu_id : '']);
    }
    openConfirmModal(product) {
        this.onClickProduct(product);
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Chắc chắn muốn xóa sản phẩm đang chọn?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if (result.value) {
                this._removeProduct(product);
            }
        });
    }
    onPageChange(page) {
        this.page = page;
        this._fetchData();
    }
    onChangeFilter() {
        this._fetchData(this.selectedProduct);
    }
    readURL(event) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const import$ = this.productService
                .updateImage(file, this.selectedProduct.pu_id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
            import$.subscribe((res) => {
                if (res && res.Code == 200) {
                    this._notify(true, res.Message);
                    this._fetchData();
                }
                else
                    this._notify(false, res.Message);
            }, (e) => this._notify(false, e.Message));
            // const reader = new FileReader();
            // reader.onload = e => (this.thumbnail = reader.result);
            // reader.readAsDataURL(file);
        }
    }
    setFile(event) {
        let files = event.srcElement.files;
        if (!files) {
            return;
        }
        const import$ = this.productService.importProduct(files[0]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        import$.subscribe((res) => {
            if (res && res.Code == 200) {
                this._notify(true, res.Message);
                this._fetchData();
            }
            else
                this._notify(false, res.Message);
        }, (e) => this._notify(false, e.Message));
    }
    exportProduct() {
        const export$ = this.productService
            .exportProduct({
            pageNumber: this.page - 1,
            pageSize: this.pageSize,
            search_name: this.textSearch,
            category_id: this.categorySearch,
            start_date: this._convertNgbDateToDate(this.fromDate),
            end_date: this._convertNgbDateToDate(this.toDate),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        export$.subscribe((res) => {
            if (res && res.Data) {
                const link = 'http://27.72.147.222:1230/' + res.Data;
                window.open(link);
            }
        });
    }
    exportTemplate() {
        const export$ = this.productService.exportTemplate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        export$.subscribe((res) => {
            if (res && res.Data) {
                const link = 'http://27.72.147.222:1230/' + res.Data;
                window.open(link);
            }
        });
    }
    _fetchData(selected) {
        const product$ = this.productService
            .searchProduct({
            pageNumber: this.page - 1,
            pageSize: this.pageSize,
            search_name: this.textSearch,
            category_id: this.categorySearch,
            start_date: this._convertNgbDateToDate(this.fromDate),
            end_date: this._convertNgbDateToDate(this.toDate),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        product$.subscribe((res) => {
            if (res && res.Data) {
                this.totalSize = res.Data.TotalNumberOfRecords;
                this.products = res.Data.Results;
                if (selected) {
                    this.selectedProduct = this.products.find((item) => item.pu_id === selected.pu_id);
                }
                else {
                    this.selectedProduct = this.products[0];
                }
            }
        });
    }
    _fetchFilter() {
        const category$ = this.productService.loadCategory().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        category$.subscribe((res) => {
            this.categories = res.Data;
        });
    }
    _removeProduct(product) {
        const removeProduct$ = this.productService
            .removeProduct({ productId: product.pu_id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        removeProduct$.subscribe((res) => {
            if (res && res.Code == 200) {
                this._notify(true, res.Message);
                this._fetchData();
            }
            else
                this._notify(false, res.Message);
        }, (e) => this._notify(false, e.Message));
    }
    _notify(isSuccess, message) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
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
        const year = moment__WEBPACK_IMPORTED_MODULE_7__(date).year();
        const month = moment__WEBPACK_IMPORTED_MODULE_7__(date).month() + 1;
        const day = moment__WEBPACK_IMPORTED_MODULE_7__(date).date();
        return new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDate"](year, month, day);
    }
    _convertNgbDateToDate(ngbDate) {
        if (!ngbDate) {
            return '';
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(ngbDate.year))
            return ngbDate;
        const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
        return moment__WEBPACK_IMPORTED_MODULE_7__(newDate).format('YYYY-MM-DD');
    }
};
ListProductComponent.ctorParameters = () => [
    { type: _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
ListProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-product',
        template: __webpack_require__(/*! raw-loader!./list-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/list-product/list-product.component.html"),
        styles: [__webpack_require__(/*! ./list-product.component.scss */ "./src/app/pages/product/list-product/list-product.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
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
/* harmony import */ var _core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/guards/admin.guard */ "./src/app/core/guards/admin.guard.ts");
/* harmony import */ var _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-product/list-product.component */ "./src/app/pages/product/list-product/list-product.component.ts");
/* harmony import */ var _list_product_detail_list_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-product-detail/list-product-detail.component */ "./src/app/pages/product/list-product-detail/list-product-detail.component.ts");
/* harmony import */ var _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-order/list-order.component */ "./src/app/pages/product/list-order/list-order.component.ts");
/* harmony import */ var _list_order_detail_list_order_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-order-detail/list-order-detail.component */ "./src/app/pages/product/list-order-detail/list-order-detail.component.ts");
/* harmony import */ var _product_statistic_product_statistic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-statistic/product-statistic.component */ "./src/app/pages/product/product-statistic/product-statistic.component.ts");









const routes = [
    {
        path: 'list-product',
        component: _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_4__["ListProductComponent"],
        canActivate: [_core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]],
    },
    {
        path: 'list-product-detail/:pu_id',
        component: _list_product_detail_list_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ListProductDetailComponent"],
        canActivate: [_core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]],
    },
    {
        path: 'list-order',
        component: _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_6__["ListOrderComponent"],
    },
    {
        path: 'list-order-detail/:cuo_id',
        component: _list_order_detail_list_order_detail_component__WEBPACK_IMPORTED_MODULE_7__["ListOrderDetailComponent"],
    },
    {
        path: 'product-statistic',
        component: _product_statistic_product_statistic_component__WEBPACK_IMPORTED_MODULE_8__["ProductStatisticComponent"],
        canActivate: [_core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]],
    },
];
let ProductRoutingModule = class ProductRoutingModule {
};
ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductRoutingModule);



/***/ }),

/***/ "./src/app/pages/product/product-statistic/product-statistic.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/product/product-statistic/product-statistic.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .form-inline {\n  align-items: baseline;\n  flex-flow: row;\n}\n:host .table-responsive {\n  overflow: auto;\n  max-height: calc(100% - 110px);\n}\n:host .table-responsive thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background-color: white;\n}\n:host .table-responsive tr {\n  cursor: pointer;\n}\n:host .table-responsive tr.is-selected {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9Xb3Jrc3BhY2UvUHJvamVjdC9jb2VycC1mZS9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1zdGF0aXN0aWMvcHJvZHVjdC1zdGF0aXN0aWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1zdGF0aXN0aWMvcHJvZHVjdC1zdGF0aXN0aWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNBSjtBREdFO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0FDREo7QURJTTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDRlI7QURNSTtFQUNFLGVBQUE7QUNKTjtBRE1NO0VBQ0UsMkJBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1zdGF0aXN0aWMvcHJvZHVjdC1zdGF0aXN0aWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5mb3JtLWlubGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGZsZXgtZmxvdzogcm93O1xuICB9XG5cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDExMHB4KTtcblxuICAgIHRoZWFkIHtcbiAgICAgIHRoIHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0ciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICYuaXMtc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCAuZm9ybS1pbmxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGZsZXgtZmxvdzogcm93O1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTEwcHgpO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUgdGhlYWQgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLnRhYmxlLXJlc3BvbnNpdmUgdHIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAudGFibGUtcmVzcG9uc2l2ZSB0ci5pcy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn0iXX0= */"

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
/* harmony import */ var _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/api/product.service */ "./src/app/core/services/api/product.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let ProductStatisticComponent = class ProductStatisticComponent {
    constructor(element, productService) {
        this.element = element;
        this.productService = productService;
        this.height = 300;
        this.containerHeight = 0;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
    onResize() {
        var el = this.element.nativeElement;
        this.containerHeight = el.children[0].clientHeight;
    }
    scroll(el) {
        window.scroll({ top: el.getBoundingClientRect().top - 100, behavior: 'smooth' });
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
            .searchProduct({
            pageNumber: this.page,
            pageSize: this.pageSize,
            search_name: this.textSearch,
            category_id: this.categorySearch,
            start_date: '2010-01-01',
            end_date: moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).format('YYYY-MM-DD'),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        product$.subscribe((res) => {
            if (res) {
                this.totalSize = res.Data.TotalNumberOfRecords;
                this.products = res.Data.Results;
                this.selectedProduct = this.products[0];
            }
        });
    }
    _fetchFilter() {
        const category$ = this.productService.loadCategory().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        category$.subscribe((res) => {
            this.categories = res.Data;
        });
    }
};
ProductStatisticComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
ProductStatisticComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-statistic',
        template: __webpack_require__(/*! raw-loader!./product-statistic.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product/product-statistic/product-statistic.component.html"),
        host: {
            '(window:resize)': 'onResize($event)',
        },
        styles: [__webpack_require__(/*! ./product-statistic.component.scss */ "./src/app/pages/product/product-statistic/product-statistic.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _core_services_api_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
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
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-product/list-product.component */ "./src/app/pages/product/list-product/list-product.component.ts");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/pages/product/product-routing.module.ts");
/* harmony import */ var _list_product_component_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-product/component/product-modal/product-modal.component */ "./src/app/pages/product/list-product/component/product-modal/product-modal.component.ts");
/* harmony import */ var _list_product_component_list_unit_modal_list_unit_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-product/component/list-unit-modal/list-unit-modal.component */ "./src/app/pages/product/list-product/component/list-unit-modal/list-unit-modal.component.ts");
/* harmony import */ var _list_product_component_unit_modal_unit_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-product/component/unit-modal/unit-modal.component */ "./src/app/pages/product/list-product/component/unit-modal/unit-modal.component.ts");
/* harmony import */ var _list_product_component_list_product_type_modal_list_product_type_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list-product/component/list-product-type-modal/list-product-type-modal.component */ "./src/app/pages/product/list-product/component/list-product-type-modal/list-product-type-modal.component.ts");
/* harmony import */ var _list_product_component_product_type_modal_product_type_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./list-product/component/product-type-modal/product-type-modal.component */ "./src/app/pages/product/list-product/component/product-type-modal/product-type-modal.component.ts");
/* harmony import */ var _list_product_component_description_tab_description_tab_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./list-product/component/description-tab/description-tab.component */ "./src/app/pages/product/list-product/component/description-tab/description-tab.component.ts");
/* harmony import */ var _list_product_component_purchase_history_tab_purchase_history_tab_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./list-product/component/purchase-history-tab/purchase-history-tab.component */ "./src/app/pages/product/list-product/component/purchase-history-tab/purchase-history-tab.component.ts");
/* harmony import */ var _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./list-order/list-order.component */ "./src/app/pages/product/list-order/list-order.component.ts");
/* harmony import */ var _list_order_component_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./list-order/component/order-modal/order-modal.component */ "./src/app/pages/product/list-order/component/order-modal/order-modal.component.ts");
/* harmony import */ var _product_statistic_product_statistic_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./product-statistic/product-statistic.component */ "./src/app/pages/product/product-statistic/product-statistic.component.ts");
/* harmony import */ var _list_product_detail_list_product_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./list-product-detail/list-product-detail.component */ "./src/app/pages/product/list-product-detail/list-product-detail.component.ts");
/* harmony import */ var _list_order_detail_list_order_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./list-order-detail/list-order-detail.component */ "./src/app/pages/product/list-order-detail/list-order-detail.component.ts");
/* harmony import */ var _customer_customer_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../customer/customer.module */ "./src/app/pages/customer/customer.module.ts");

























let ProductModule = class ProductModule {
};
ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_9__["ListProductComponent"],
            _list_product_component_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_11__["ProductModalComponent"],
            _list_product_component_list_unit_modal_list_unit_modal_component__WEBPACK_IMPORTED_MODULE_12__["ListUnitModalComponent"],
            _list_product_component_unit_modal_unit_modal_component__WEBPACK_IMPORTED_MODULE_13__["UnitModalComponent"],
            _list_product_component_list_product_type_modal_list_product_type_modal_component__WEBPACK_IMPORTED_MODULE_14__["ListProductTypeModalComponent"],
            _list_product_component_product_type_modal_product_type_modal_component__WEBPACK_IMPORTED_MODULE_15__["ProductTypeModalComponent"],
            _list_product_component_description_tab_description_tab_component__WEBPACK_IMPORTED_MODULE_16__["DescriptionTabComponent"],
            _list_product_component_purchase_history_tab_purchase_history_tab_component__WEBPACK_IMPORTED_MODULE_17__["PurchaseHistoryTabComponent"],
            _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_18__["ListOrderComponent"],
            _list_order_component_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_19__["OrderModalComponent"],
            _product_statistic_product_statistic_component__WEBPACK_IMPORTED_MODULE_20__["ProductStatisticComponent"],
            _list_product_detail_list_product_detail_component__WEBPACK_IMPORTED_MODULE_21__["ListProductDetailComponent"],
            _list_order_detail_list_order_detail_component__WEBPACK_IMPORTED_MODULE_22__["ListOrderDetailComponent"],
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
            _product_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProductRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbProgressbarModule"],
            angular_resizable_element__WEBPACK_IMPORTED_MODULE_5__["ResizableModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _customer_customer_module__WEBPACK_IMPORTED_MODULE_23__["CustomerModule"],
        ],
        entryComponents: [
            _list_product_component_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_11__["ProductModalComponent"],
            _list_product_component_list_unit_modal_list_unit_modal_component__WEBPACK_IMPORTED_MODULE_12__["ListUnitModalComponent"],
            _list_product_component_unit_modal_unit_modal_component__WEBPACK_IMPORTED_MODULE_13__["UnitModalComponent"],
            _list_product_component_list_product_type_modal_list_product_type_modal_component__WEBPACK_IMPORTED_MODULE_14__["ListProductTypeModalComponent"],
            _list_product_component_product_type_modal_product_type_modal_component__WEBPACK_IMPORTED_MODULE_15__["ProductTypeModalComponent"],
            _list_order_component_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_19__["OrderModalComponent"],
        ],
    })
], ProductModule);



/***/ })

}]);
//# sourceMappingURL=product-product-module-es2015.js.map