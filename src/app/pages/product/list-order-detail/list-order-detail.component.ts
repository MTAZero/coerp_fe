import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MobileModalComponent } from '../../customer/list-customer/component/mobile-modal/mobile-modal.component';
import { AddresModalComponent } from '../../customer/list-customer/component/addres-modal/addres-modal.component';
import { CustomerService } from './../../../core/services/api/customer.service';
import { AddressService } from './../../../core/services/api/address.service';
import { ProductService } from './../../../core/services/api/product.service';
import { OrderService } from './../../../core/services/api/order.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { menu } from './data';
import { isUndefined } from 'util';

@Component({
  selector: 'app-list-order-detail',
  templateUrl: './list-order-detail.component.html',
  styleUrls: ['./list-order-detail.component.scss'],
})
export class ListOrderDetailComponent implements OnInit, OnDestroy {
  cuo_id = null;
  private destroyed$ = new Subject();
  menu: any[];
  selectedMenuItem = 0;
  submitted = false;
  errorField = null;

  sources: any;
  customerGroups: any;
  customers: any;
  products: any;
  types: any;

  listView = [true, true, true, true];
  isChange = false;

  province: any;
  district: any;
  ward: any;

  tempMobile = 0;
  tempAddress = 0;
  orderTotal = 0;
  createdDate = new Date();

  formCustomer: FormGroup;
  formOrder: FormGroup;
  listMobile = [];
  listAddress = [];
  listProduct = [];

  cuo_address = null;

  selectedCustomer: any;
  searchCustomer = '';
  searchProduct: any;

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    public formBuilder: FormBuilder,
    private customerService: CustomerService,
    private addressService: AddressService,
    private orderService: OrderService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.menu = menu;

    this.cuo_id = this.route.snapshot.paramMap.get('cuo_id');
    if (this.cuo_id === '') this.listView = [false, false, false, false];

    this._initializeForm();
    this._fetchFilter();

    if (this.cuo_id) {
      this._fetchOrder(this.cuo_id);
    } else {
      this._loadProvince();
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onClickMenuItem(index: any) {
    this.selectedMenuItem = index;
    const el = document.getElementById(index);
    const content = document.getElementById('content');
    content.scroll({ top: el.offsetTop - 50, behavior: 'smooth' });
  }

  switchViewType(index: number) {
    this.listView[index] = !this.listView[index];
  }

  onChangeToMain() {
    if (this.formCustomer.dirty || this.formOrder.dirty || this.isChange) {
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
          this.router.navigate(['/product/list-order']);
        }
      });
    } else {
      this.router.navigate(['/product/list-order']);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.formCustomer.invalid || this.formOrder.invalid) return;
    if (this.cuo_address === null) return this._notify(false, 'Chưa chọn địa chỉ nhận hàng');
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
      customer: {
        ...customerData,
        list_customer_phone: this.listMobile,
        list_ship_address: this.listAddress,
      },
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
      this._updateOrder({
        ...data,
        cuo_id: this.cuo_id,
      });
    else this._createOrder(data);
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

  changeDatalistCustomer(e: any) {
    if (!e || e.cu_id === '') {
      this.selectedCustomer = null;
    } else {
      this._fetchCustomer(e.cu_id);
    }
    this.isChange = true;
  }

  openMobileModal(mobile?: any) {
    const modalRef = this.modalService.open(MobileModalComponent, {
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
            if (item.cp_id !== res.data.cp_id) return item;
            return res.data;
          });
          this.isChange = true;
        } else {
          this.listMobile.push({
            ...res.data,
            cp_id: `temp_${this.tempMobile}`,
          });
          this.tempMobile++;
          this.isChange = true;
        }
      }
      modalRef.close();
    });
  }

  onRemoveMobile(mobile) {
    Swal.fire({
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
  onClickAddress(address: any) {
    if (
      (address.sha_detail ? address.sha_detail + ', ' : '') +
        address.sha_ward +
        ', ' +
        address.sha_district +
        ', ' +
        address.sha_province ===
      this.cuo_address
    )
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

  openAddressModal(address?: any) {
    const modalRef = this.modalService.open(AddresModalComponent, {
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
            if (item.sha_id !== res.form.sha_id) return item;
            return res.form;
          });
          this.isChange = true;
        } else {
          this.listAddress.push({
            ...res.form,
            sha_id: `temp_${this.tempAddress}`,
          });
          this.tempAddress++;
          this.isChange = true;
        }
      }
      modalRef.close();
    });
  }

  onRemoveAddress(address: any) {
    Swal.fire({
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
  changeDatalistProduct(e: any) {
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

  onRemoveProduct(product: any) {
    Swal.fire({
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
    this.listProduct[puIndex] = {
      ...this.listProduct[puIndex],
      op_quantity: event.target.value,
      op_total_value:
        (event.target.value *
          this.listProduct[puIndex].pu_sale_price *
          (100 - this.listProduct[puIndex].op_discount)) /
        100,
    };
    this.isChange = true;
    this.sumListProduct();
  }

  onChangeDiscount(event, puIndex) {
    this.listProduct[puIndex] = {
      ...this.listProduct[puIndex],
      op_discount: event.target.value,
      op_total_value:
        (this.listProduct[puIndex].op_quantity *
          this.listProduct[puIndex].pu_sale_price *
          (100 - event.target.value)) /
        100,
    };
    this.isChange = true;
    this.sumListProduct();
  }

  private normalizeListProduct() {
    if (
      !this.listProduct ||
      this.listProduct.length === 0 ||
      !this.products ||
      this.products.length === 0
    )
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
  private _initializeForm() {
    this.formCustomer = this.formBuilder.group({
      cu_id: [null, null],
      cu_fullname: ['', [Validators.required]],
      source_id: ['', [Validators.required]],
      cu_type: [1, [Validators.required]],
      cu_birthday: [this._convertDateToNgbDate(new Date(1995, 0, 1)), null],
      customer_group_id: ['', [Validators.required]],
      cu_email: ['', null],
      cu_flag_order: [1, [Validators.required]],
      cu_flag_used: [1, [Validators.required]],
      cu_status: [1, [Validators.required]],
      cu_note: ['', null],
      sha_ward_now: [null, [Validators.required]],
      sha_district_now: [null, [Validators.required]],
      sha_province_now: [null, [Validators.required]],
      sha_detail_now: [null, [Validators.required]],
    });

    this.formOrder = this.formBuilder.group({
      cuo_discount: [0, null],
      cuo_ship_tax: [0, null],
    });
  }

  private _fetchFilter() {
    const source$ = this.customerService.loadSource().pipe(takeUntil(this.destroyed$));
    source$.subscribe((res: any) => {
      this.sources = res.Data;
    });

    const customerGroup$ = this.customerService.loadGroup().pipe(takeUntil(this.destroyed$));
    customerGroup$.subscribe((res: any) => {
      this.customerGroups = res.Data;
    });

    const type$ = this.customerService.loadType().pipe(takeUntil(this.destroyed$));
    type$.subscribe((res: any) => {
      this.types = res.Data;
    });

    const customer$ = this.customerService
      .searchCustomer(this.filterCustomer)
      .pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      this.customers = res.Data.Results;
      this.customers.push({ cu_fullname: 'Chọn khách hàng', cu_id: '' });
    });

    const product$ = this.productService
      .searchProduct(this.filterProduct)
      .pipe(takeUntil(this.destroyed$));
    product$.subscribe((res: any) => {
      this.products = res.Data.Results;
      this.products.push({ pu_name: 'Chọn sản phẩm', pu_id: '' });
      this.products = this.products.reverse();
      this.normalizeListProduct();
    });
  }

  private _fetchOrder(cuo_id: any) {
    const info$ = this.orderService.loadOrderById({ id: cuo_id }).pipe(takeUntil(this.destroyed$));
    info$.subscribe((res: any) => {
      if (res && res.Data) {
        this._patchOrder(res.Data);
      }
    });
  }

  private _patchOrder(order: any) {
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
      return {
        ...item,
        op_total_value: (item.op_quantity * item.pu_sale_price * (100 - item.op_discount)) / 100,
      };
    });

    this.sumListProduct();
    this.normalizeListProduct();
  }

  private _loadProvince() {
    const province$ = this.addressService.loadProvince().pipe(takeUntil(this.destroyed$));
    province$.subscribe((res: any) => {
      if (res && res.Data) {
        this.province = res.Data;

        if (this.formCustomer.value.sha_province_now === null) {
          this.formCustomer.patchValue({ sha_province_now: res.Data[0].name });
          this._loadDistrict(res.Data[0].id);
        } else {
          const provinceId = this.province.find(
            (item: any) => item.name === this.formCustomer.value.sha_province_now
          ).id;
          this._loadDistrict(provinceId, true);
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
        this.district = res.Data;

        if (this.formCustomer.value.sha_district_now === null || !isFirst) {
          this.formCustomer.patchValue({ sha_district_now: res.Data[0].name });
          this._loadWard(res.Data[0].id);
        } else {
          const districtId = this.district.find(
            (item: any) => item.name === this.formCustomer.value.sha_district_now
          ).id;
          this._loadWard(districtId, true);
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
        this.ward = res.Data;

        if (this.formCustomer.value.sha_ward_now === null || !isFirst) {
          this.formCustomer.patchValue({ sha_ward_now: res.Data[0].name });
        }
      }
    });
  }

  private _createOrder(data: any) {
    const createOrder$ = this.orderService.createOrder(data).pipe(takeUntil(this.destroyed$));
    createOrder$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/product/list-order']);
        } else {
          this._notify(false, res.Message);
          this.errorField = res.Error;
        }
      },
      (e) => {
        this._notify(false, e.Message);
        this.errorField = e.Error;
      }
    );
  }

  private _updateOrder(updated: any) {
    const updateOrder$ = this.orderService.updateOrder(updated).pipe(takeUntil(this.destroyed$));
    updateOrder$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/product/list-order']);
        } else {
          this._notify(false, res.Message);
          this.errorField = res.Error;
        }
      },
      (e) => {
        this._notify(false, e.Message);
        this.errorField = e.Error;
      }
    );
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
  //#endregion
}
