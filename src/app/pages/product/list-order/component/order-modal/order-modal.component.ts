import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderService } from '../../../../../core/services/api/order.service';
import { CustomerService } from '../../../../../core/services/api/customer.service';
import { AddressService } from '../../../../../core/services/api/address.service';
import { ProductService } from '../../../../../core/services/api/product.service';
import { StaffService } from '../../../../../core/services/api/staff.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { isUndefined } from 'util';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss'],
})
export class OrderModalComponent implements OnInit {
  // global variable
  private destroyed$ = new Subject();
  @Input() order: any;
  @Input() isView: boolean;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  activeTabId = '1';
  submitted = false;
  createdDate = new Date();

  // variable in Customer tab
  selectedCustomer: any;
  listProduct = [];
  listAddress = [];
  customers: any;
  products = [];
  sources: any;
  groups: any;
  types: any;
  staffs: any;
  provinces: any;
  districts: any;
  wards: any;
  selectedAddress = null;
  readOnly = true;
  searchCustomer = '';

  //variable in Product Tab
  searchProduct = '';
  orderTotal = 0;

  filterCustomer = {
    pageNumber: 0,
    pageSize: 100,
    source_id: '',
    cu_type: '',
    customer_group_id: '',
    name: '',
    start_date: '2010-01-01',
    end_date: moment(new Date()).format('YYYY-MM-DD'),
  };

  filterProduct = {
    pageNumber: 0,
    pageSize: 100,
    search_name: '',
    category_id: '',
    start_date: '2010-01-01',
    end_date: moment(new Date()).format('YYYY-MM-DD'),
  };

  formOrder: FormGroup;
  formCustomer: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private orderService: OrderService,
    private customerService: CustomerService,
    private addressService: AddressService,
    private productService: ProductService,
    private staffService: StaffService
  ) {
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
      customer: {
        ...customerData,
        list_address: this.listAddress,
      },
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

  onPrintClick() {}

  onClickCancel() {
    if (this.formCustomer.dirty || this.formOrder.dirty) {
      Swal.fire({
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
    } else {
      this.passEvent.emit({ event: false });
    }
  }

  private initializeForm() {
    this.formOrder = this.formBuilder.group({
      cuo_discount: [0, null],
      cuo_ship_tax: [0, null],
    });

    this.formCustomer = this.formBuilder.group({
      cu_id: [null, null],
      cu_fullname: ['', [Validators.required]],
      cu_type: ['', [Validators.required]],
      cu_mobile: ['', [Validators.required]],
      cu_email: ['', [Validators.required]],
      cu_birthday: ['', null],
      customer_group_id: ['', [Validators.required]],
      source_id: ['', [Validators.required]],
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

  private _patchData(data: any) {
    const { list_product, customer, cuo_discount, cuo_ship_tax, cuo_address } = data;

    this.selectedAddress = cuo_address;
    this.selectedCustomer = customer;
    this._patchCustomer();
    // tab product
    this.listProduct = list_product;
    this.listProduct = this.listProduct.map((item) => {
      return {
        ...item,
        op_total_value: (item.op_quantity * item.pu_sale_price * (100 - item.op_discount)) / 100,
      };
    });

    this.formOrder.patchValue({
      cuo_discount: cuo_discount,
      cuo_ship_tax: cuo_ship_tax,
    });
    this.sumListProduct();
  }

  private _fetchFilter() {
    const sources$ = this.customerService.loadSource().pipe(takeUntil(this.destroyed$));
    sources$.subscribe((res: any) => {
      this.sources = res.Data;
    });

    const group$ = this.customerService.loadGroup().pipe(takeUntil(this.destroyed$));
    group$.subscribe((res: any) => {
      this.groups = res.Data;
    });

    const customer$ = this.customerService
      .searchCustomer(this.filterCustomer)
      .pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      this.customers = res.Data.Results;
      this.customers.push({ cu_fullname: 'Chọn khách hàng', cu_id: '' });
    });

    const product$ = this.productService
      .loadProduct(this.filterProduct)
      .pipe(takeUntil(this.destroyed$));
    product$.subscribe((res: any) => {
      this.products = res.Data.Results;
      this.products.push({ pu_name: 'Chọn sản phẩm', pu_id: '' });
    });

    const staff$ = this.staffService.loadAllStaff().pipe(takeUntil(this.destroyed$));
    staff$.subscribe((res: any) => {
      this.staffs = res.Data;
    });
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
    return moment(newDate).format();
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
    if (this.isView) return;
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
      const index = this.listAddress.findIndex(
        (item) => item.sha_id === this.selectedAddress.sha_id
      );
      this.listAddress[index] = {
        ...this.listAddress[index],
        sha_province: this.formCustomer.controls['cu_province'].value,
        sha_district: this.formCustomer.controls['cu_district'].value,
        sha_ward: this.formCustomer.controls['cu_ward'].value,
        sha_detail: this.formCustomer.controls['cu_address'].value,
      };
    } else {
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

  changeDatalistCustomer(e: any) {
    this.readOnly = true;
    if (!e || e.cu_id === '') {
      this.selectedCustomer = null;
    } else {
      this._fetchCustomer(e.cu_id);
    }
  }

  private _loadProvince() {
    const province$ = this.addressService.loadProvince().pipe(takeUntil(this.destroyed$));
    province$.subscribe((res: any) => {
      if (res && res.Data) {
        this.provinces = res.Data;

        if (this.selectedAddress) {
          this.formCustomer.patchValue({ cu_province: this.selectedAddress.sha_province });
          const provinceId = this.provinces.find(
            (item) => item.name === this.selectedAddress.sha_province
          ).id;
          this._loadDistrict(provinceId, true);
        } else {
          this.formCustomer.patchValue({ cu_province: res.Data[0].name });
          this._loadDistrict(res.Data[0].id);
        }
      }
    });
  }

  private _loadDistrict(provinceId: any, isFirst = false) {
    const district$ = this.addressService
      .loadDistrict({ province_id: provinceId })
      .pipe(takeUntil(this.destroyed$));
    district$.subscribe((res: any) => {
      if (res && res.Data) {
        this.districts = res.Data;

        if (this.selectedAddress && isFirst) {
          this.formCustomer.patchValue({ cu_district: this.selectedAddress.sha_district });
          const districtId = this.districts.find(
            (item) => item.name === this.selectedAddress.sha_district
          ).id;
          this._loadWard(districtId, true);
        } else {
          this.formCustomer.patchValue({ cu_district: res.Data[0].name });
          this._loadWard(res.Data[0].id);
        }
      }
    });
  }

  private _loadWard(districtId: any, isFirst = false) {
    const ward$ = this.addressService
      .loadWard({ district_id: districtId })
      .pipe(takeUntil(this.destroyed$));
    ward$.subscribe((res: any) => {
      if (res && res.Data) {
        this.wards = res.Data;

        if (this.selectedAddress && isFirst) {
          this.formCustomer.patchValue({ cu_ward: this.selectedAddress.sha_ward });
        } else {
          this.formCustomer.patchValue({ cu_ward: res.Data[0].name });
        }
      }
    });
  }

  private _fetchOrderDetail(id: any) {
    const orderDetail$ = this.orderService.loadOrderById({ id }).pipe(takeUntil(this.destroyed$));

    orderDetail$.subscribe((res: any) => {
      this._patchData(res.Data);
    });
  }

  private _fetchCustomer(cu_id: any) {
    const customer$ = this.customerService
      .loadCustomerInfo({ cu_id })
      .pipe(takeUntil(this.destroyed$));

    customer$.subscribe((res: any) => {
      this.selectedCustomer = res.Data;
      this._patchCustomer();
    });
  }

  private _patchCustomer() {
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
  changeDatalistProduct(e: any) {
    this._fetchProduct(e.pu_id);
  }

  onRemoveProduct(product) {
    this.listProduct = this.listProduct.filter((item) => item.op_id !== product.op_id);
    this.sumListProduct();
  }

  onChangeQuantity(event, product) {
    const puIndex = this.listProduct.findIndex((item) => item.op_id === product.op_id);

    this.listProduct[puIndex] = {
      ...this.listProduct[puIndex],
      op_quantity: event.target.value,
      op_total_value:
        (event.target.value *
          this.listProduct[puIndex].pu_sale_price *
          (100 - this.listProduct[puIndex].op_discount)) /
        100,
    };
    this.sumListProduct();
  }

  onChangeDiscount(event, product) {
    const puIndex = this.listProduct.findIndex((item) => item.op_id === product.op_id);

    this.listProduct[puIndex] = {
      ...this.listProduct[puIndex],
      op_discount: event.target.value,
      op_total_value:
        (this.listProduct[puIndex].op_quantity *
          this.listProduct[puIndex].pu_sale_price *
          (100 - event.target.value)) /
        100,
    };
    this.sumListProduct();
  }

  private _fetchProduct(pu_id: any) {
    const product$ = this.productService
      .loadProductById({ pu_id })
      .pipe(takeUntil(this.destroyed$));

    product$.subscribe((res: any) => {
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

  private sumListProduct() {
    this.orderTotal = 0;
    this.listProduct.map((item) => {
      this.orderTotal += item.op_total_value;
    });
    this.orderTotal =
      (this.orderTotal * (100 - this.formOrder.value['cuo_discount'])) / 100 +
      parseInt(this.formOrder.value['cuo_ship_tax']);
  }
  //#endregion
}
