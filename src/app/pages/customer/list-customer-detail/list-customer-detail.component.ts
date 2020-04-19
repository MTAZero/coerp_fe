import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, from } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddressService } from '../../../core/services/api/address.service';
import { CustomerService } from '../../../core/services/api/customer.service';
import { MobileModalComponent } from '../list-customer/component/mobile-modal/mobile-modal.component';
import { AddresModalComponent } from '../list-customer/component/addres-modal/addres-modal.component';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { menu } from './data';

@Component({
  selector: 'app-list-customer-detail',
  templateUrl: './list-customer-detail.component.html',
  styleUrls: ['./list-customer-detail.component.scss'],
})
export class ListCustomerDetailComponent implements OnInit, OnDestroy {
  cu_id = null;
  private destroyed$ = new Subject();
  menu: any[];
  selectedMenuItem = 0;
  submitted = false;
  errorField = null;

  sources: any;
  customerGroups: any;

  listView = [true, true];

  province: any;
  district: any;
  ward: any;

  tempMobile = 0;
  tempAddress = 0;

  formProfile: FormGroup;
  formAddress: FormGroup;
  listMobile = [];
  listAddress = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private addressService: AddressService,
    private customerService: CustomerService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.cu_id = this.route.snapshot.paramMap.get('cu_id');
    if (this.cu_id === '') this.listView = [false, false];

    this.menu = menu;

    this._initializeForm();
    this._fetchFilter();

    if (this.cu_id) {
      this._fetchCustomer(this.cu_id);
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
    if (this.formProfile.dirty || this.formAddress.dirty) {
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
          this.router.navigate(['/customer/list-customer']);
        }
      });
    } else {
      this.router.navigate(['/customer/list-customer']);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.formProfile.invalid || this.formAddress.invalid) return;

    const profileForm = this.formProfile.value;
    profileForm.cu_birthday = this._convertNgbDateToDate(profileForm.cu_birthday);

    const data = {
      ...profileForm,
      ...this.formAddress.value,
      list_customer_phone: this.listMobile,
      list_ship_address: this.listAddress,
    };
    console.log(data);
    if (this.cu_id)
      this._updateCustomer({
        ...data,
        cu_id: this.cu_id,
      });
    else this._createCustomer(data);
  }

  //#region Profile
  //#endregion

  //#region  Address
  onChangeProvince(e) {
    const districtId = this.province.find((item) => item.name === e.target.value).id;
    this._loadDistrict(districtId);
  }

  onChangeDistrict(e) {
    const wardId = this.district.find((item) => item.name === e.target.value).id;
    this._loadWard(wardId);
  }
  //#endregion

  //#region List Mobile
  openMobileModal(mobile?: any) {
    const modalRef = this.modalService.open(MobileModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.customerId = this.cu_id;
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
        } else {
          this.listMobile.push({
            ...res.data,
            cp_id: `temp_${this.tempMobile}`,
          });
          this.tempMobile++;
        }
      }
      modalRef.close();
    });
  }

  openRemoveMobile(mobile) {
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
      }
    });
  }
  //#endregion

  //#region List Address
  openAddressModal(address?: any) {
    const modalRef = this.modalService.open(AddresModalComponent, {
      centered: true,
    });
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
        } else {
          this.listAddress.push({
            ...res.form,
            sha_id: `temp_${this.tempAddress}`,
          });
          this.tempAddress++;
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
      }
    });
  }
  //#endregion

  //#region Private
  private _initializeForm() {
    this.formProfile = this.formBuilder.group({
      cu_fullname: ['', [Validators.required]],
      source_id: ['', [Validators.required]],
      cu_type: [1, [Validators.required]],
      cu_birthday: [this._convertDateToNgbDate(new Date(1995, 0, 1)), [Validators.required]],
      customer_group_id: ['', [Validators.required]],
      cu_email: ['', [Validators.email]],
      cu_flag_order: [1, [Validators.required]],
      cu_flag_used: [1, [Validators.required]],
      cu_status: [1, [Validators.required]],
      cu_note: ['', null],
    });

    this.formAddress = this.formBuilder.group({
      sha_ward_now: [null, [Validators.required]],
      sha_district_now: [null, [Validators.required]],
      sha_province_now: [null, [Validators.required]],
      sha_detail_now: [null, [Validators.required]],
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
  }

  private _fetchCustomer(cu_id: any) {
    const info$ = this.customerService.loadCustomerInfo({ cu_id }).pipe(takeUntil(this.destroyed$));
    info$.subscribe((res: any) => {
      if (res && res.Data) {
        this._patchCustomer(res.Data);
      }
    });
  }

  private _patchCustomer(customer: any) {
    this.formProfile.patchValue({
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
    });

    this.formAddress.patchValue({
      sha_ward_now: customer.sha_ward_now,
      sha_district_now: customer.sha_district_now,
      sha_province_now: customer.sha_province_now,
      sha_detail_now: customer.sha_detail_now,
    });

    this._loadProvince();

    this.listMobile = customer.list_customer_phone;
    this.listAddress = customer.list_ship_address;
  }

  private _loadProvince() {
    const province$ = this.addressService.loadProvince().pipe(takeUntil(this.destroyed$));
    province$.subscribe((res: any) => {
      if (res && res.Data) {
        this.province = res.Data;

        if (this.formAddress.value.sha_province_now === null) {
          this.formAddress.patchValue({ sha_province_now: res.Data[0].name });
          this._loadDistrict(res.Data[0].id);
        } else {
          const provinceId = this.province.find(
            (item: any) => item.name === this.formAddress.value.sha_province_now
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

        if (this.formAddress.value.sha_district_now === null || !isFirst) {
          this.formAddress.patchValue({ sha_district_now: res.Data[0].name });
          this._loadWard(res.Data[0].id);
        } else {
          const districtId = this.district.find(
            (item: any) => item.name === this.formAddress.value.sha_district_now
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

        if (this.formAddress.value.sha_ward_now === null || !isFirst) {
          this.formAddress.patchValue({ sha_ward_now: res.Data[0].name });
        }
      }
    });
  }

  private _createCustomer(data: any) {
    const createCustomer$ = this.customerService
      .createCustomer(data)
      .pipe(takeUntil(this.destroyed$));
    createCustomer$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/customer/list-customer']);
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

  private _updateCustomer(updated: any) {
    const updateCustomer$ = this.customerService
      .updateCustomer(updated)
      .pipe(takeUntil(this.destroyed$));
    updateCustomer$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/customer/list-customer']);
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

  private _convertNgbDateToDate(ngbDate: any) {
    if (!ngbDate) {
      return '';
    }
    const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    return moment(newDate).format();
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
