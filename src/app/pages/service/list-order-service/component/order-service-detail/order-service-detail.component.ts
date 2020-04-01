import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CustomerService } from '../../../../../core/services/api/customer.service';
import { AddressService } from '../../../../../core/services/api/address.service';
import { StaffService } from '../../../../../core/services/api/staff.service';
import { ServiceService } from '../../../../../core/services/api/service.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { timePeriod, menu, days } from './data';

@Component({
  selector: 'app-order-service-detail',
  templateUrl: './order-service-detail.component.html',
  styleUrls: ['./order-service-detail.component.scss']
})
export class OrderServiceDetailComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() type: any;
  @Input() orderService: any;
  @Output() onMain: EventEmitter<any> = new EventEmitter();
  timePeriod: any;
  menu: any[];
  days: any[];
  selectedMenuItem = 0;

  selectedCustomer: any;
  listService = [];
  listAddress = [];
  customers: any;
  services: any;
  sources: any;
  groups: any;
  types: any;
  staffs: any;
  provinces: any;
  districts: any;
  wards: any;
  selectedAddress = null;
  readOnly = true;
  isView = true;
  searchCustomer = '';
  selectedStaffs: any[];

  //variable in Product Tab
  searchService = '';
  orderTotal = 0;

  filterCustomer = {
    pageNumber: 0,
    pageSize: 100,
    source_id: '',
    cu_type: '',
    customer_group_id: '',
    name: '',
    start_date: '2010-01-01',
    end_date: moment(new Date()).format('YYYY-MM-DD')
  };

  filterService = {
    pageNumber: 0,
    pageSize: 100,
    search_name: ''
  };

  filterStaff = {
    pageNumber: 0,
    pageSize: 100,
    status: '',
    name: '',
    start_date: '2010-01-01',
    end_date: moment(new Date()).format('YYYY-MM-DD')
  };

  formCustomer: FormGroup;
  formRepeat: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private customerService: CustomerService,
    private addressService: AddressService,
    private staffService: StaffService,
    private serviceService: ServiceService
  ) {}

  ngOnInit() {
    this.timePeriod = timePeriod;
    this.menu = menu;
    this.days = days;

    this.isView = this.type === 'view';

    this.initializeForm();
    this._fetchFilter();
    this._loadProvince();

    if (this.orderService) {
      this._patchData(this.orderService);
    }

    console.log(this.type, this.orderService);
  }

  onClickMenuItem(index: any) {
    this.selectedMenuItem = index;
    const el = document.getElementById(index);
    const content = document.getElementById('content');
    content.scroll({ top: el.offsetTop - 100, behavior: 'smooth' });
  }

  onChangeToMain() {
    if (this.formCustomer.dirty) {
      Swal.fire({
        title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Có',
        cancelButtonText: 'Không',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
      }).then(result => {
        if (result.value) {
          this.onMain.emit(true);
        }
      });
    } else {
      this.onMain.emit(true);
    }
  }

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
    this.selectedAddress = null;
    this.readOnly = false;
    this._patchCustomer();
  }

  changeDatalistCustomer(e: any) {
    this.readOnly = true;
    if (!e || e.cu_id === '') {
      this.selectedCustomer = null;
    } else {
      this._fetchCustomer(e.cu_id);
    }
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

  onClickAddress(address: any) {
    if (this.isView) return;
    this.selectedAddress =
      (address.sha_detail ? `${address.sha_detail}, ` : '') +
      address.sha_ward +
      ', ' +
      address.sha_district +
      ', ' +
      address.sha_province;
  }

  onClickCreateButton() {
    this.listAddress.push({
      sha_id: this.listAddress.length,
      sha_province: this.formCustomer.controls['cu_province'].value,
      sha_district: this.formCustomer.controls['cu_district'].value,
      sha_ward: this.formCustomer.controls['cu_ward'].value,
      sha_detail: this.formCustomer.controls['cu_address'].value
    });

    const newItem = this.listAddress[this.listAddress.length - 1];
    this.selectedAddress =
      (newItem.sha_detail ? `${newItem.sha_detail}, ` : '') +
      newItem.sha_ward +
      ', ' +
      newItem.sha_district +
      ', ' +
      newItem.sha_province;
    this._loadProvince();
  }

  changeDatalistService(e: any) {
    if (e.se_id !== '') this.listService.push(e);
    this.searchService = '';
  }

  onRemoveService(service: any) {
    this.listService = this.listService.filter(item => item.se_id !== service.se_id);
  }

  onClickWeekDay(day: any) {
    if (day === 'T2')
      this.formRepeat.patchValue({
        st_mon_flag: this.formRepeat.value.st_mon_flag === 1 ? 0 : 1
      });

    if (day === 'T3')
      this.formRepeat.patchValue({
        st_tue_flag: this.formRepeat.value.st_tue_flag === 1 ? 0 : 1
      });

    if (day === 'T4')
      this.formRepeat.patchValue({
        st_wed_flag: this.formRepeat.value.st_wed_flag === 1 ? 0 : 1
      });

    if (day === 'T5')
      this.formRepeat.patchValue({
        st_thu_flag: this.formRepeat.value.st_thu_flag === 1 ? 0 : 1
      });

    if (day === 'T6')
      this.formRepeat.patchValue({
        st_fri_flag: this.formRepeat.value.st_fri_flag === 1 ? 0 : 1
      });

    if (day === 'T7')
      this.formRepeat.patchValue({
        st_sat_flag: this.formRepeat.value.st_sat_flag === 1 ? 0 : 1
      });

    if (day === 'CN')
      this.formRepeat.patchValue({
        st_sun_flag: this.formRepeat.value.st_sun_flag === 1 ? 0 : 1
      });
  }

  checkDay(day: any) {
    if (day === 'T2') return this.formRepeat.value.st_mon_flag;
    if (day === 'T3') return this.formRepeat.value.st_tue_flag;
    if (day === 'T4') return this.formRepeat.value.st_wed_flag;
    if (day === 'T5') return this.formRepeat.value.st_thu_flag;
    if (day === 'T6') return this.formRepeat.value.st_fri_flag;
    if (day === 'T7') return this.formRepeat.value.st_sat_flag;
    if (day === 'CN') return this.formRepeat.value.st_sun_flag;
  }

  onChangeRepeatType(event: any) {
    if (event.target.value === 3) this.onChangeDaySelection('T2');
    if (event.target.value === 2) this.onChangeDaySelection('');
  }

  onChangeDaySelection(day: any) {
    this.formRepeat.patchValue({
      st_mon_flag: day === 'T2' ? 1 : 0,
      st_tue_flag: day === 'T3' ? 1 : 0,
      st_wed_flag: day === 'T4' ? 1 : 0,
      st_thu_flag: day === 'T5' ? 1 : 0,
      st_fri_flag: day === 'T6' ? 1 : 0,
      st_sat_flag: day === 'T7' ? 1 : 0,
      st_sun_flag: day === 'CN' ? 1 : 0
    });
  }

  onSubmit() {
    console.log(
      this.selectedCustomer,
      this.selectedAddress,
      this.listService,
      this.formRepeat.value,
      this.selectedStaffs
    );
  }

  private initializeForm() {
    this.formCustomer = this.formBuilder.group({
      cu_id: [null, null],
      cu_fullname: ['', [Validators.required]],
      cu_type: ['', [Validators.required]],
      cu_mobile: ['', [Validators.required]],
      customer_group_id: ['', [Validators.required]],
      source_id: ['', [Validators.required]],
      cu_address: ['', null],
      cu_province: ['', null],
      cu_district: ['', null],
      cu_ward: ['', null],
      cu_note: ['', null]
    });

    this.formRepeat = this.formBuilder.group({
      st_start_date: [null, null],
      st_end_date: [null, null],
      st_start_time: ['07:00', null],
      st_end_time: ['07:00', null],
      st_repeat_type: [1, null],
      st_sun_flag: [0, null],
      st_mon_flag: [0, null],
      st_tue_flag: [0, null],
      st_wed_flag: [0, null],
      st_thu_flag: [0, null],
      st_fri_flag: [0, null],
      st_sat_flag: [0, null],
      st_repeat: [0, null],
      st_repeat_every: [1, null],
      st_on_the: [1, null],
      st_on_day_flag: [true, null],
      st_on_day: [1, null],
      st_on_the_flag: [false, null],
      st_custom_start: [null, null],
      st_custom_end: [null, null]
    });
  }

  private _patchData(data: any) {
    console.log(data);
    const { customer, cuo_address, list_service } = data;
    this.selectedAddress = cuo_address;
    this.listService = list_service;
    this.selectedCustomer = customer;

    this.formRepeat.patchValue({
      st_start_date: this._convertDateToNgbDate(data.st_start_date),
      st_end_date: this._convertDateToNgbDate(data.st_end_date),
      st_start_time: data.st_start_time,
      st_end_time: data.st_end_time,
      st_repeat_type: data.st_repeat_type,
      st_sun_flag: data.st_sun_flag,
      st_mon_flag: data.st_mon_flag,
      st_tue_flag: data.st_tue_flag,
      st_wed_flag: data.st_wed_flag,
      st_thu_flag: data.st_thu_flag,
      st_fri_flag: data.st_fri_flag,
      st_sat_flag: data.st_sat_flag,
      st_repeat: data.st_repeat,
      st_repeat_every: data.st_repeat_every,
      st_on_the: data.st_on_the,
      st_on_day_flag: data.st_on_day_flag,
      st_on_day: data.st_on_day,
      st_on_the_flag: data.st_on_the_flag,
      st_custom_start: this._convertDateToNgbDate(data.st_custom_start),
      st_custom_end: this._convertDateToNgbDate(data.st_custom_end)
    });
    this._patchCustomer();
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
      cu_id: customer.cu_id,
      cu_fullname: customer.cu_fullname,
      cu_mobile: customer.cu_mobile,
      cu_type: customer.cu_type,
      customer_group_id: customer.customer_group_id,
      source_id: customer.source_id,
      cu_note: customer.cu_note
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
      this.customers.push({ cu_fullname: 'Chọn khách hàng', cu_id: '' });
    });

    const service$ = this.serviceService
      .loadServices(this.filterService)
      .pipe(takeUntil(this.destroyed$));
    service$.subscribe((res: any) => {
      this.services = res.Data.Results;
      this.services.push({ se_name: 'Chọn dịch vụ', se_id: '' });
    });

    const staff$ = this.staffService.searchStaff(this.filterStaff).pipe(takeUntil(this.destroyed$));
    staff$.subscribe((res: any) => {
      this.staffs = res.Data.Results;
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
    const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    return moment(newDate).format();
  }
}
