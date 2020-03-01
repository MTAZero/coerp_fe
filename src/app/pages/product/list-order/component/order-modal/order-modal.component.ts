import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderService } from '../../../../../core/services/api/order.service';
import { CustomerService } from '../../../../../core/services/api/customer.service';
import { AddressService } from '../../../../../core/services/api/address.service';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {
  private destroyed$ = new Subject();

  @Input() order: any;
  @Input() isView: boolean;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();

  submitted = false;
  listProduct = [];
  listAddress = [];
  sources: any;
  groups: any;
  provinces: any;
  districts: any;
  wards: any;

  formOrder: FormGroup;
  formCustomer: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private modalService: NgbModal,
    private orderService: OrderService,
    private customerService: CustomerService,
    private addressService: AddressService
  ) {
    this.initializeForm();
    this._fetchFilter();
    this._loadProvince();
  }

  ngOnInit() {
    if (this.order) {
      this._fetchOrderDetail(this.order.cuo_id);
      console.log(this.isView);
    }
  }

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

  onBackClick() {}
  onNextClick() {}
  onSubmitClick() {}
  onPrintClick() {}

  onChangeProvince(e) {
    const districtId = this.provinces.find(item => item.name === e.target.value).id;
    this._loadDistrict(districtId);
  }

  onChangeDistrict(e) {
    const wardId = this.districts.find(item => item.name === e.target.value).id;
    this._loadWard(wardId);
  }

  private initializeForm() {
    this.formOrder = this.formBuilder.group({
      cuo_discount: ['', null],
      cuo_ship_tax: ['', null]
    });

    this.formCustomer = this.formBuilder.group({
      cu_fullname: ['', null],
      cu_mobile: ['', null],
      cu_email: ['', null],
      cu_birthday: ['', null],
      customer_group_id: ['', null],
      source_id: ['', null],
      staff_id: ['', null],
      cu_address: ['', null],
      cu_province: ['', null],
      cu_district: ['', null],
      cu_ward: ['', null],
      cu_note: ['', null]
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
  }

  private _loadProvince() {
    const province$ = this.addressService.loadProvince().pipe(takeUntil(this.destroyed$));
    province$.subscribe((res: any) => {
      if (res && res.Data) {
        this.provinces = res.Data;

        this.formCustomer.patchValue({ cu_province: res.Data[0].name });
        this._loadDistrict(res.Data[0].id);
      }
    });
  }

  private _loadDistrict(provinceId: any) {
    const district$ = this.addressService
      .loadDistrict({ province_id: provinceId })
      .pipe(takeUntil(this.destroyed$));
    district$.subscribe((res: any) => {
      if (res && res.Data) {
        this.districts = res.Data;

        this.formCustomer.patchValue({ cu_district: res.Data[0].name });
        this._loadWard(res.Data[0].id);
      }
    });
  }

  private _loadWard(districtId: any) {
    const ward$ = this.addressService
      .loadWard({ district_id: districtId })
      .pipe(takeUntil(this.destroyed$));
    ward$.subscribe((res: any) => {
      if (res && res.Data) {
        this.wards = res.Data;

        this.formCustomer.patchValue({ cu_ward: res.Data[0].name });
      }
    });
  }

  private _fetchOrderDetail(id: any) {
    const orderDetail$ = this.orderService.loadOrderById({ id }).pipe(takeUntil(this.destroyed$));

    orderDetail$.subscribe((res: any) => {
      this._fetchData(res.Data);
    });
  }

  private _fetchData(data: any) {
    console.log(data);
    const { list_product, customer, cuo_discount, cuo_ship_tax, cuo_total_price } = data;

    // tab product
    this.listProduct = list_product;
    this.formOrder.patchValue({
      cuo_discount: cuo_discount,
      cuo_ship_tax: cuo_ship_tax
    });

    // tab customer
    this.listAddress = customer.list_address;
    this.formCustomer.patchValue({
      cu_fullname: customer.cu_fullname,
      cu_mobile: customer.cu_mobile,
      cu_email: customer.cu_email,
      cu_birthday: customer.cu_birthday,
      customer_group_id: customer.customer_group_id,
      source_id: customer.source_id,
      cu_note: customer.cu_note
    });
  }
}
