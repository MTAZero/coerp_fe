import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderService } from '../../../../../core/services/api/order.service';
import { CustomerService } from '../../../../../core/services/api/customer.service';
import { AddressService } from '../../../../../core/services/api/address.service';
import { ProductService } from '../../../../../core/services/api/product.service';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {
  // global variable
  private destroyed$ = new Subject();
  @Input() order: any;
  @Input() isView: boolean;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  activeTabId = '1';
  submitted = false;

  // variable in Customer tab
  selectedCustomer: any;
  listProduct = [];
  listAddress = [];
  customers: any;
  products: any;
  sources: any;
  groups: any;
  types: any;
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
    pageSize: 10,
    source_id: '',
    cu_type: '',
    customer_group_id: '',
    name: ''
  };

  filterProduct = {
    pageNumber: 0,
    pageSize: 100,
    search_name: '',
    category_id: ''
  };

  formOrder: FormGroup;
  formCustomer: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private modalService: NgbModal,
    private orderService: OrderService,
    private customerService: CustomerService,
    private addressService: AddressService,
    private productService: ProductService
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
  onClickSubmit() {
    this.submitted = true;

    this.passEvent.emit({ event: true });
  }

  onClickCancel() {
    if (1) {
      const modalRef = this.modalService.open(ConfirmModalComponent, {
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
    } else {
      this.passEvent.emit({ event: false });
    }
  }

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
  onSubmitClick() {}
  onPrintClick() {}
  //#endregion

  //#region Customer Tab
  onClickCreateCustomer() {
    this.selectedCustomer = {
      cu_fullname: '',
      cu_mobile: '',
      cu_email: '',
      cu_birthday: '',
      customer_group_id: '',
      source_id: '',
      cu_note: ''
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

  onClickUpdateButton() {
    if (this.selectedAddress) {
      const index = this.listAddress.findIndex(item => item.sha_id === this.selectedAddress.sha_id);
      this.listAddress[index] = {
        ...this.listAddress[index],
        sha_province: this.formCustomer.controls['cu_province'].value,
        sha_district: this.formCustomer.controls['cu_district'].value,
        sha_ward: this.formCustomer.controls['cu_ward'].value,
        sha_detail: this.formCustomer.controls['cu_address'].value
      };
    } else {
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

  changeDatalistCustomer(e: any) {
    this.readOnly = true;
    if (e.target.value === '') {
      this.selectedCustomer = null;
    } else {
      this._fetchCustomer(e.target.value);
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
            item => item.name === this.selectedAddress.sha_province
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
            item => item.name === this.selectedAddress.sha_district
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
      .loadCustomerById({ cu_id })
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
      cu_fullname: customer.cu_fullname,
      cu_mobile: customer.cu_mobile,
      cu_email: customer.cu_email,
      cu_birthday: customer.cu_birthday,
      cu_type: customer.cu_type,
      customer_group_id: customer.customer_group_id,
      source_id: customer.source_id,
      cu_note: customer.cu_note
    });
  }
  //#endregion

  //#region Product Tab
  changeDatalistProduct(e: any) {
    this._fetchProduct(e.target.value);
  }

  onRemoveProduct(product) {
    this.listProduct = this.listProduct.filter(item => item.op_id !== product.op_id);
    this.sumListProduct();
  }

  onChangeQuantity(event, product) {
    const puIndex = this.listProduct.findIndex(item => item.op_id === product.op_id);

    this.listProduct[puIndex] = {
      ...this.listProduct[puIndex],
      op_quantity: event.target.value,
      op_total:
        (event.target.value *
          this.listProduct[puIndex].pu_buy_price *
          (100 - this.listProduct[puIndex].op_discount)) /
        100
    };
    this.sumListProduct();
  }

  onChangeDiscount(event, product) {
    const puIndex = this.listProduct.findIndex(item => item.op_id === product.op_id);

    this.listProduct[puIndex] = {
      ...this.listProduct[puIndex],
      op_discount: event.target.value,
      op_total:
        (this.listProduct[puIndex].op_quantity *
          this.listProduct[puIndex].pu_buy_price *
          (100 - event.target.value)) /
        100
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
        op_id: this.listProduct.length,
        op_quantity: 1,
        pu_buy_price: product.pu_sale_price,
        op_discount: 0,
        pu_name: product.pu_name,
        max_quantity: product.pu_quantity,
        op_total: product.pu_sale_price
      });
      this.searchProduct = '';
      this.sumListProduct();
    });
  }

  private sumListProduct() {
    this.listProduct.map(item => {
      this.orderTotal += item.op_total;
    });
  }
  //#endregion

  //#region Common
  openConfirmModal(product?: any) {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa khách hàng';
    modalRef.componentInstance.message = 'Bạn có chắc chắn muốn xóa sản phẩm đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        //this._removeCustomer(customer);
      }
      modalRef.close();
    });
  }

  private initializeForm() {
    this.formOrder = this.formBuilder.group({
      cuo_discount: ['', null],
      cuo_ship_tax: ['', null]
    });

    this.formCustomer = this.formBuilder.group({
      cu_fullname: ['', [Validators.required]],
      cu_type: ['', [Validators.required]],
      cu_mobile: ['', [Validators.required]],
      cu_email: ['', [Validators.required]],
      cu_birthday: ['', null],
      customer_group_id: ['', [Validators.required]],
      source_id: ['', [Validators.required]],
      staff_id: ['', null],
      cu_address: ['', null],
      cu_province: ['', null],
      cu_district: ['', null],
      cu_ward: ['', null],
      cu_note: ['', null]
    });
  }

  private _patchData(data: any) {
    const { list_product, customer, cuo_discount, cuo_ship_tax, cuo_total_price } = data;

    this.selectedCustomer = customer;
    this._patchCustomer();
    // tab product
    this.listProduct = list_product;
    this.formOrder.patchValue({
      cuo_discount: cuo_discount,
      cuo_ship_tax: cuo_ship_tax
    });
  }

  private _fetchFilter() {
    const sources$ = this.customerService.loadSourceFilter().pipe(takeUntil(this.destroyed$));
    sources$.subscribe((res: any) => {
      this.sources = res.Data;
    });

    const group$ = this.customerService.loadGroupFilter().pipe(takeUntil(this.destroyed$));
    group$.subscribe((res: any) => {
      this.groups = res.Data;
    });

    const type$ = this.customerService.loadTypeFilter().pipe(takeUntil(this.destroyed$));
    type$.subscribe((res: any) => {
      this.types = res.Data;
    });

    const customer$ = this.customerService
      .loadCustomer(this.filterCustomer)
      .pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      this.customers = res.Data.Results;
    });

    const product$ = this.productService
      .loadProduct(this.filterProduct)
      .pipe(takeUntil(this.destroyed$));
    product$.subscribe((res: any) => {
      this.products = res.Data.Results;
    });
  }
  //#endregion
}
