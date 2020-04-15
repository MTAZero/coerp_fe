import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddressService } from '../../../core/services/api/address.service';
import { CustomerService } from '../../../core/services/api/customer.service';
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
  customerTypes: any;
  customerGroups: any;

  listView = [true, true];

  province: any;
  district: any;
  ward: any;

  tempTraining = 0;
  tempAddress = 0;

  formProfile: FormGroup;
  formAddress: FormGroup;
  listTraining = [];
  listAddress = [];
  listNewTraining = [];

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

  //#region List Training
  onUpdateListTraining() {
    // const modalRef = this.modalService.open(ListTrainingModalComponent, {
    //   centered: true,
    //   size: 'lg',
    // });
    // modalRef.componentInstance.listTraining = this.listTraining;
    // modalRef.componentInstance.passEvent.subscribe((res) => {
    //   if (res.event) {
    //     this.listTraining = res.data;
    //   }
    //   modalRef.close();
    // });
  }

  openTrainingModal(training?: any) {
    // const modalRef = this.modalService.open(TrainingModalComponent, {
    //   centered: true,
    // });
    // modalRef.componentInstance.customerId = this.sta_id;
    // if (training) {
    //   modalRef.componentInstance.training = training;
    // }
    // modalRef.componentInstance.passEvent.subscribe((res) => {
    //   if (res.event) {
    //     if (training) {
    //       this.listNewTraining = this.listNewTraining.map((item) => {
    //         if (item.tn_id !== res.data.tn_id) return item;
    //         return res.data;
    //       });
    //     } else {
    //       this.listNewTraining.push({
    //         ...res.data,
    //         tn_id: `temp_${this.tempTraining}`,
    //       });
    //       this.tempTraining++;
    //     }
    //   }
    //   modalRef.close();
    // });
  }

  openRemoveTraining(training) {
    Swal.fire({
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
      }
    });
  }
  //#endregion

  //#region List Address
  openAddressModal(address?: any) {
    // const modalRef = this.modalService.open(AddressModalComponent, {
    //   centered: true,
    // });
    // if (address) {
    //   modalRef.componentInstance.address = address;
    // }
    // modalRef.componentInstance.passEvent.subscribe((res) => {
    //   if (res.event) {
    //     if (address) {
    //       this.listAddress = this.listAddress.map((item) => {
    //         if (item.unl_id !== res.form.unl_id) return item;
    //         return res.form;
    //       });
    //     } else {
    //       this.listAddress.push({
    //         ...res.form,
    //         unl_id: `temp_${this.tempAddress}`,
    //       });
    //       this.tempAddress++;
    //     }
    //   }
    //   modalRef.close();
    // });
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
        this.listAddress = this.listAddress.filter((item) => item.unl_id !== address.unl_id);
      }
    });
  }
  //#endregion

  //#region Private
  private _initializeForm() {
    this.formProfile = this.formBuilder.group({
      cu_fullname: ['', [Validators.required]],
      cu_source_id: ['', [Validators.required]],
      cu_type: ['', [Validators.required]],
      cu_birthday: [null, [Validators.required]],
      customer_group_id: ['', [Validators.required]],
      cu_email: ['', [Validators.email]],
      cu_flag_order: ['', [Validators.required]],
      cu_flag_used: ['', [Validators.required]],
      cu_status: [1, [Validators.required]],
      cu_note: ['', null],
    });

    this.formAddress = this.formBuilder.group({
      unl_ward: ['', [Validators.required]],
      unl_district: ['', [Validators.required]],
      unl_province: ['', [Validators.required]],
      unl_detail: ['', [Validators.required]],
    });
  }

  private _fetchFilter() {
    const source$ = this.customerService.loadSourceFilter().pipe(takeUntil(this.destroyed$));
    source$.subscribe((res: any) => {
      this.sources = res.Data;
    });

    const customerGroup$ = this.customerService.loadGroupFilter().pipe(takeUntil(this.destroyed$));
    customerGroup$.subscribe((res: any) => {
      this.customerGroups = res.Data;
    });

    const customerType$ = this.customerService.loadTypeFilter().pipe(takeUntil(this.destroyed$));
    customerType$.subscribe((res: any) => {
      this.customerTypes = res.Data;
    });
  }

  private _fetchCustomer(cu_id: any) {
    const info$ = this.customerService.loadCustomerById({ cu_id }).pipe(takeUntil(this.destroyed$));
    info$.subscribe((res: any) => {
      if (res && res.Data) {
        this._patchCustomer(res.Data);
      }
    });
  }

  private _patchCustomer(customer: any) {
    this.formProfile.patchValue({
      cu_fullname: customer.cu_fullname,
      cu_source_id: customer.cu_source_id,
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
      unl_ward: customer.unl_ward,
      unl_district: customer.unl_district,
      unl_province: customer.unl_province,
      unl_detail: customer.unl_detail,
    });

    this._loadProvince();
  }

  private _loadProvince() {
    const province$ = this.addressService.loadProvince().pipe(takeUntil(this.destroyed$));
    province$.subscribe((res: any) => {
      if (res && res.Data) {
        this.province = res.Data;

        if (this.formAddress.value.unl_province === '') {
          this.formAddress.patchValue({ unl_province: res.Data[0].name });
          this._loadDistrict(res.Data[0].id);
        } else {
          const provinceId = this.province.find(
            (item: any) => item.name === this.formAddress.value.unl_province
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

        if (this.formAddress.value.unl_district === '' || !isFirst) {
          this.formAddress.patchValue({ unl_district: res.Data[0].name });
          this._loadWard(res.Data[0].id);
        } else {
          const districtId = this.district.find(
            (item: any) => item.name === this.formAddress.value.unl_district
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

        if (this.formAddress.value.unl_ward === '' || !isFirst) {
          this.formAddress.patchValue({ unl_ward: res.Data[0].name });
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
