import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ExecutorModalComponent } from './component/executor-modal/executor-modal.component';
import { MobileModalComponent } from '../../customer/list-customer/component/mobile-modal/mobile-modal.component';
import { AddresModalComponent } from '../../customer/list-customer/component/addres-modal/addres-modal.component';
import { CustomerService } from './../../../core/services/api/customer.service';
import { AddressService } from './../../../core/services/api/address.service';
import { StaffService } from './../../../core/services/api/staff.service';
import { ServiceService } from './../../../core/services/api/service.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { timePeriod, menu, days } from './data';
import { isUndefined } from 'util';

@Component({
  selector: 'app-list-order-service-detail',
  templateUrl: './list-order-service-detail.component.html',
  styleUrls: ['./list-order-service-detail.component.scss'],
})
export class ListOrderServiceDetailComponent implements OnInit, OnDestroy {
  cuo_id = null;
  private destroyed$ = new Subject();
  menu: any[];
  selectedMenuItem = 0;
  submitted = false;
  errorField = null;

  sources: any;
  customerGroups: any;
  customers: any;
  types: any;
  services: any;
  staffs: any;

  listView = [true, true, true, true];
  isChange = false;

  province: any;
  district: any;
  ward: any;

  tempMobile = 0;
  tempAddress = 0;
  tempExecutor = 0;

  form: FormGroup;
  formCustomer: FormGroup;
  formRepeat: FormGroup;
  formMoney: FormGroup;
  listMobile = [];
  listAddress = [];
  listService = [];
  listExecutor = [];
  total_price;
  amount=0;
  discount=0;
  cuo_color_show = null;
  cuo_address = null;
  listFunction = [];
  days: any[];
  summary = '';
  timePeriod: any;
  selectedService: any;
  selectedCustomer: any;
  searchCustomer = '';
  searchService: any;

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

  filterService = {
    pageNumber: 0,
    pageSize: 100,
    search_name: '',
    start_date: '',
    end_date: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
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

    this.cuo_id = this.route.snapshot.paramMap.get('cuo_id');
    if (this.cuo_id === '') this.listView = [false, false, false, false];

    this._initializeForm();
    this._fetchFilter();

    if (this.cuo_id) {
      this._fetchOrderService(this.cuo_id);
    } else {
      this._loadProvince();
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngAfterViewInit() {
    this.formRepeat.valueChanges.subscribe((data) => this._updateSummary(data));
    // this.formMoney.valueChanges.subscribe((data) => this._updateNumber(data));
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
    if (this.formCustomer.dirty || this.formRepeat.dirty || this.formMoney.dirty || this.isChange) {
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
          this.router.navigate(['/service/list-order-service']);
        }
      });
    } else {
      this.router.navigate(['/service/list-order-service']);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.formCustomer.invalid || this.formRepeat.invalid || this.formMoney.invalid || !this._checkValidExecutor()) return;
    if (this.formCustomer.value.cu_fullname.trim() === '') {
      return this.formCustomer.controls['cu_fullname'].setErrors({ required: true });
    }
    if (this.formCustomer.value.sha_detail_now.trim() === '') {
      return this.formCustomer.controls['sha_detail_now'].setErrors({ required: true });
    }
    if (this.cuo_address === null || this.listAddress.length === 0)
      return this._notify(false, 'Chưa chọn địa chỉ nhận hàng');
    if (this.listMobile.length === 0) return this._notify(false, 'Chưa chọn số điện thoại');
    if (this.listService.length === 0) return this._notify(false, 'Chưa chọn dịch vụ');
    if (this.listExecutor.length === 0) return this._notify(false, 'Chưa chọn ngày làm việc');

    const customerData = this.formCustomer.value;
    customerData.cu_birthday = this._convertNgbDateToDate(customerData.cu_birthday);
    customerData.cu_email = customerData.cu_email
      ? customerData.cu_email.trim()
      : customerData.cu_email;

    const repeatData = this.formRepeat.value;
    
    repeatData.st_start_date = this._convertNgbDateToDate(repeatData.st_start_date);
    repeatData.st_end_date = this._convertNgbDateToDate(repeatData.st_end_date);
    repeatData.st_custom_start = this._convertNgbDateToDate(repeatData.st_custom_start);
    repeatData.st_custom_end = this._convertNgbDateToDate(repeatData.st_custom_end);
    repeatData.st_on_day_flag = repeatData.st_on_day_flag ? 1 : 0;
    repeatData.st_on_the_flag = repeatData.st_on_day_flag ? 0 : 1;

    const data = {
      cuo_color_show: this.cuo_color_show,
      ...repeatData,
      ...this.formMoney.value,
    
      customer: {
        ...customerData,
        list_customer_phone: this.listMobile,
        list_ship_address: this.listAddress,
      },
      list_service: this.listService,
      list_executor: this.listExecutor,
      cuo_infor_time: this.summary,
      cuo_address: this.cuo_address,
    };
    console.log(data);
    if (this.cuo_id)
      this._updateOrderService({
        ...data,
        cuo_id: this.cuo_id,
      });
    else this._createOrderService(data);
  }
  checkFunction(cuo_id: any) {
    let flag = false;
    this.listFunction.forEach((item) => {
      if (item.cuo_id === cuo_id) flag = true;
    });
    return flag;
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
      cu_birthday: '',
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
    this.isChange = true;
    if (!e || e.cu_id === '') {
      this.selectedCustomer = null;
    } else {
      this._fetchCustomer(e.cu_id);
    }
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

  //#region List Service
  changeDatalistService(e: any) {
    this.searchService = { se_id: '', se_name: 'Chọn dịch vụ', se_price: '' };
    if (e.se_id !== '') {
      this.selectedService = null;
      this.services = this.services.filter((item) => item.se_id !== e.se_id);
      this.listService.push(e);
      this.isChange = true;
    } else {
      this._fetchService(e.se_id);
    }
  }
  // changeDatalistCustomer(e: any) {
  //   this.isChange = true;
  //   if (!e || e.cu_id === '') {
  //     this.selectedCustomer = null;
  //   } else {
  //     this._fetchCustomer(e.cu_id);
  //   }
  // }
  onRemoveService(service: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa dịch vụ đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this.listService = this.listService.filter((item) => item.se_id !== service.se_id);
        this.services = this.services.concat(service);
        this.isChange = true;
      }
    });
  }
  //#endregion

  //#region Repeat
  onClickWeekDay(day: any) {
    if (day === 'T2')
      this.formRepeat.patchValue({
        st_mon_flag: this.formRepeat.value.st_mon_flag === 1 ? 0 : 1,
      });

    if (day === 'T3')
      this.formRepeat.patchValue({
        st_tue_flag: this.formRepeat.value.st_tue_flag === 1 ? 0 : 1,
      });

    if (day === 'T4')
      this.formRepeat.patchValue({
        st_wed_flag: this.formRepeat.value.st_wed_flag === 1 ? 0 : 1,
      });

    if (day === 'T5')
      this.formRepeat.patchValue({
        st_thu_flag: this.formRepeat.value.st_thu_flag === 1 ? 0 : 1,
      });

    if (day === 'T6')
      this.formRepeat.patchValue({
        st_fri_flag: this.formRepeat.value.st_fri_flag === 1 ? 0 : 1,
      });

    if (day === 'T7')
      this.formRepeat.patchValue({
        st_sat_flag: this.formRepeat.value.st_sat_flag === 1 ? 0 : 1,
      });

    if (day === 'CN')
      this.formRepeat.patchValue({
        st_sun_flag: this.formRepeat.value.st_sun_flag === 1 ? 0 : 1,
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
    if (event.target.value[0] === '2') this.onChangeDaySelection('T2');
    if (event.target.value[0] === '1') this.onChangeDaySelection('');
  }

  onChangeDaySelection(event: any) {
    const day = event.target ? event.target.value : event;
    this.formRepeat.patchValue({
      st_mon_flag: day === 'T2' ? 1 : 0,
      st_tue_flag: day === 'T3' ? 1 : 0,
      st_wed_flag: day === 'T4' ? 1 : 0,
      st_thu_flag: day === 'T5' ? 1 : 0,
      st_fri_flag: day === 'T6' ? 1 : 0,
      st_sat_flag: day === 'T7' ? 1 : 0,
      st_sun_flag: day === 'CN' ? 1 : 0,
    });
  }

  onChangeStartDate(event) {
    this.formRepeat.patchValue({
      st_custom_start: event,
      st_custom_end: event,
      st_end_date: event,
    });
  }

  onGenerateWorkTime() {
    let repeatData = this.formRepeat.value;
    repeatData.st_start_date = this._convertNgbDateToDate(repeatData.st_start_date);
    repeatData.st_end_date = this._convertNgbDateToDate(repeatData.st_end_date);
    repeatData.st_custom_start = this._convertNgbDateToDate(repeatData.st_custom_start);
    repeatData.st_custom_end = this._convertNgbDateToDate(repeatData.st_custom_end);
    repeatData.st_on_day_flag = repeatData.st_on_day_flag ? 1 : 0;
    repeatData.st_on_the_flag = repeatData.st_on_day_flag ? 0 : 1;

    const genTime$ = this.serviceService
      .genWorkTime({ pageNumber: 0, pageSize: 1000 }, repeatData)
      .pipe(takeUntil(this.destroyed$));
    genTime$.subscribe((res: any) => {
      if (res && res.Data) {
        this.listExecutor = res.Data.Results;
        this.listExecutor = this.listExecutor.map((item) => {
          this.tempExecutor++;
          return {
            ...item,
            exe_id: `temp_${this.tempExecutor}`,
            start_time: item.start_time.substr(0, 5),
            end_time: item.end_time.substr(0, 5),
            
          };
        });
      }
    });
  }

  onUpdateExe(exe?: any) {
    const modalRef = this.modalService.open(ExecutorModalComponent, {
      centered: true,
    });

    let listSameDay = [];
    this.listExecutor.forEach((item) => {
      if (
        item.work_time.substr(0, 10) === exe.work_time.substr(0, 10) &&
        item.start_time === exe.start_time &&
        item.end_time === exe.end_time
        //item.exe_id !== exe.exe_id
      )
        listSameDay.push(item);
    });

    modalRef.componentInstance.exe = exe;
    modalRef.componentInstance.listSameDay = listSameDay;
    modalRef.componentInstance.customerOrderId = this.cuo_id ? this.cuo_id : null;

    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        this.listExecutor = this.listExecutor.map((item) => {
          if (item.exe_id !== res.data.exe_id) return item;
          return res.data;
        });
        this.isChange = true;
      }
      modalRef.close();
    });
  }

  onDuplicateExe(exe?: any, index?: number) {
    this.tempExecutor++;
    const newItem = {
      exe_id: `temp_${this.tempExecutor}`,
      work_time: exe.work_time,
      start_time: exe.start_time,
      end_time: exe.end_time,
      exe_flag_overtime: exe.exe_flag_overtime,
      exe_time_overtime: exe.exe_time_overtime,
      exe_status: 2,
      exe_evaluate: '',
      exe_note: '',
    };
    this.listExecutor.splice(index + 1, 0, newItem);
    this.isChange = true;
  }

  onRemoveExe(exe?: any) {
    console.log(this.listExecutor);
    this.listExecutor = this.listExecutor.filter((item) => item.exe_id !== exe.exe_id);
    this.isChange = true;
  }

  private _checkValidExecutor() {
    let res = true;
    this.listExecutor.forEach((item) => {
      if (!item.staff_id || item.staff_id === '') res = false;
    });
    if (!res) this._notify(false, 'Chưa phân công cho một số thời gian làm việc');
    return res;
  }
  // private _updateNumber(data: any) {
  //   const {
  //     se_number
  //   } = data;
  // }
  private _updateSummary(data: any) {
    data.st_on_the_flag = data.st_on_day_flag === 1 ? 0 : 1;
    const {
      st_repeat_type,
      st_sun_flag,
      st_mon_flag,
      st_tue_flag,
      st_wed_flag,
      st_thu_flag,
      st_fri_flag,
      st_sat_flag,
      st_repeat_every,
      st_on_the,
      st_on_day_flag,
      st_on_day,
      st_on_the_flag,
      st_custom_start,
      st_custom_end,
      

    } = data;
    const type = st_repeat_type === 1 ? 'ngày' : st_repeat_type === 2 ? 'tuần' : 'tháng';
    const startCustom = moment(this._convertNgbDateToDate(st_custom_start)).format('DD/MM');
    const endCustom = st_custom_end
      ? ` cho đến ${moment(this._convertNgbDateToDate(st_custom_end)).format('DD/MM')}`
      : '';

    var dayWeek = ` vào${st_mon_flag ? ' Thứ Hai,' : ''}${st_tue_flag ? ' Thứ Ba,' : ''}${
      st_wed_flag ? ' Thứ Tư,' : ''
    }${st_thu_flag ? ' Thứ Năm,' : ''}${st_fri_flag ? ' Thứ Sáu,' : ''}${
      st_sat_flag ? ' Thứ Bảy,' : ''
    }${st_sun_flag ? ' Chủ Nhật,' : ''}`;

    if (st_repeat_type !== 2) dayWeek = '';

    var dayMonth = ` vào`;
    if (st_on_day_flag) {
      dayMonth += ` ngày ${st_on_day}`;
    }
    if (st_on_the_flag) {
      dayMonth += `${st_mon_flag ? ' Thứ Hai' : ''}${st_tue_flag ? ' Thứ Ba' : ''}${
        st_wed_flag ? ' Thứ Tư' : ''
      }${st_thu_flag ? ' Thứ Năm' : ''}${st_fri_flag ? ' Thứ Sáu' : ''}${
        st_sat_flag ? ' Thứ Bảy' : ''
      }${st_sun_flag ? ' Chủ Nhật' : ''} ${st_on_the === 1 ? 'đầu tiên' : ''}${
        st_on_the === 2 ? 'thứ hai' : ''
      }${st_on_the === 3 ? 'thứ ba' : ''}${st_on_the === 4 ? 'thứ tư' : ''}${
        st_on_the === 5 ? 'cuối cùng' : ''
      }`;
    }
    if (st_repeat_type !== 3) dayMonth = '';

    this.summary = `Xảy ra mỗi ${st_repeat_every} ${type}${dayWeek}${dayMonth} bắt đầu từ ${startCustom}${endCustom}`;
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

    this.formRepeat = this.formBuilder.group({
      st_start_date: [this._convertDateToNgbDate(new Date()), null],
      st_end_date: [this._convertDateToNgbDate(new Date()), null],
      st_start_time: ['08:30', null],
      st_end_time: ['11:00', null],
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

      cuo_discount: [1, null],
      cuo_total_price: [1, null],

      st_on_the: [1, null],
      st_on_day_flag: [1, null],
      st_on_day: [1, null],
      st_on_the_flag: [0, null],
      st_custom_start: [this._convertDateToNgbDate(new Date()), null],
      st_custom_end: [this._convertDateToNgbDate(new Date()), null],      

    });
    this.formMoney = this.formBuilder.group({
      se_number:  [1, null],
      start_time: ['', null],
      end_time: ['', null],
      exe_time_overtime: ['', null],
      // cuo_total_price: [1, [Validators.required]],
      // cuo_discount: [1, [Validators.required]],
      // se_name: ['', [Validators.required]],
      // se_description: ['', null],
      // service_category_id: ['', [Validators.required]],
      // se_price: [1, [Validators.required]],
      // se_saleoff: [1 , null],
      // se_type: ['', [Validators.required]],
      // se_unit: ['', [Validators.required]],
      
    });
   
  }
  // private _patchMoney(money: any) {
  //   this.formMoney.patchValue({
  //     cuo_total_price: money.cuo_total_price,
  //     cuo_discount: money.cuo_discount,
  //     se_price: money.se_price,
  //     se_saleoff: money.se_saleoff,
  
  //   });

  //   this.listFunction = money.list_function;
  //   this._updatePrice();
  // }
  // private _fetchMoney(cuo_id: any) {
  //   const info$ = this.permissionService
  //     .loadCompanyInfo({ co_id })
  //     .pipe(takeUntil(this.destroyed$));
  //   info$.subscribe((res: any) => {
  //     if (res && res.Data) {
  //       this._patchCompany(res.Data);
  //     }
  //   });
  // }
  private _fetchFilter() {
    const source$ = this.customerService.loadSource().pipe(takeUntil(this.destroyed$));
    source$.subscribe((res: any) => {
      this.sources = res.Data;
    });

    const type$ = this.customerService.loadType().pipe(takeUntil(this.destroyed$));
    type$.subscribe((res: any) => {
      this.types = res.Data;
    });

    const customerGroup$ = this.customerService.loadGroup().pipe(takeUntil(this.destroyed$));
    customerGroup$.subscribe((res: any) => {
      this.customerGroups = res.Data;
    });

    const customer$ = this.customerService
      .searchCustomer(this.filterCustomer)
      .pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      this.customers = res.Data.Results;
      this.customers.push({ cu_fullname: 'Chọn khách hàng', cu_id: '' });
    });

    const service$ = this.serviceService
      .searchService(this.filterService)
      .pipe(takeUntil(this.destroyed$));
    service$.subscribe((res: any) => {
      this.services = res.Data.Results;
      this.services.push({ se_name: 'Chọn dịch vụ', se_price: '', se_id: '' });
      this.services = this.services.reverse();

      if (this.listService) {
        this.listService.forEach((item) => {
          this.services = this.services.filter((e) => e.se_id !== item.se_id);
        });
      }
    });

    const staff$ = this.staffService.loadAllStaff().pipe(takeUntil(this.destroyed$));
    staff$.subscribe((res: any) => {
      this.staffs = res.Data;
    });
  }

  private _fetchOrderService(cuo_id: any) {
    const info$ = this.serviceService
      .loadOrderServiceInfo({ cuo_id })
      .pipe(takeUntil(this.destroyed$));
    info$.subscribe((res: any) => {
      if (res && res.Data) {
        this._patchOrderService(res.Data);
        // this._patchMoney(res.Data);
      }
    });
  }

  private _patchOrderService(orderService: any) {
    this.formCustomer.patchValue({
      cu_id: orderService.customer.cu_id,
      cu_fullname: orderService.customer.cu_fullname,
      source_id: orderService.customer.source_id,
      cu_type: orderService.customer.cu_type,
      cu_birthday: this._convertDateToNgbDate(orderService.customer.cu_birthday),
      customer_group_id: orderService.customer.customer_group_id,
      cu_email: orderService.customer.cu_email,
      cu_flag_order: orderService.customer.cu_flag_order,
      cu_flag_used: orderService.customer.cu_flag_used,
      cu_status: orderService.customer.cu_status,
      cu_note: orderService.customer.cu_note,
      sha_ward_now: orderService.customer.sha_ward_now,
      sha_district_now: orderService.customer.sha_district_now,
      sha_province_now: orderService.customer.sha_province_now,
      sha_detail_now: orderService.customer.sha_detail_now,
      
    });
    this.formMoney.patchValue({
     
      se_number: orderService.list_service.se_number,
    });
    this.formRepeat.patchValue({
      st_start_date: this._convertDateToNgbDate(orderService.st_start_date),
      st_end_date: this._convertDateToNgbDate(orderService.st_end_date),
      st_start_time: orderService.st_start_time ? orderService.st_start_time.substring(0, 5) : '',
      st_end_time: orderService.st_end_time ? orderService.st_end_time.substring(0, 5) : '',
      st_repeat_type: orderService.st_repeat_type,      

      st_sun_flag: orderService.st_sun_flag ? 1 : 0,
      st_mon_flag: orderService.st_mon_flag ? 1 : 0,
      st_tue_flag: orderService.st_tue_flag ? 1 : 0,
      st_wed_flag: orderService.st_wed_flag ? 1 : 0,
      st_thu_flag: orderService.st_thu_flag ? 1 : 0,
      st_fri_flag: orderService.st_fri_flag ? 1 : 0,
      st_sat_flag: orderService.st_sat_flag ? 1 : 0,
      st_repeat: orderService.st_repeat ? 1 : 0,

      st_repeat_every: orderService.st_repeat_every,

      cuo_total_price: orderService.cuo_total_price,
      cuo_discount: orderService.cuo_discount,

      st_on_the: orderService.st_on_the,
      st_on_day_flag: orderService.st_on_day_flag ? 1 : 0,
      st_on_day: orderService.st_on_day,
      st_on_the_flag: orderService.st_on_the_flag ? 1 : 0,
      st_custom_start: this._convertDateToNgbDate(orderService.st_custom_start),
      st_custom_end: this._convertDateToNgbDate(orderService.st_custom_end),
    });

    this._loadProvince();
    this.selectedService = orderService.list_service;
    this.selectedCustomer = orderService.customer;
    this.listMobile = orderService.customer.list_customer_phone;
    this.listAddress = orderService.customer.list_ship_address;
    this.listService = orderService.list_service;

    if (this.services) {
      this.listService.forEach((item) => {
        this.services = this.services.filter((e) => e.se_id !== item.se_id);
      });
    }

    this.cuo_color_show = orderService.cuo_color_show;
    this.cuo_address = orderService.cuo_address;
   
    this.listExecutor = orderService.list_executor;
    this.listExecutor = this.listExecutor.map((item) => {
      return {
        ...item,
        start_time: item.start_time.substr(0, 5),
        end_time: item.end_time.substr(0, 5),
      };
    });
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

  private _createOrderService(data: any) {
    const createOrderService$ = this.serviceService
      .createOrderService(data)
      .pipe(takeUntil(this.destroyed$));
    createOrderService$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/service/list-order-service']);
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

  private _updateOrderService(updated: any) {
    const updateOrderService$ = this.serviceService
      .updateOrderService(updated)
      .pipe(takeUntil(this.destroyed$));
    updateOrderService$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/service/list-order-service']);
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
  
  
  private _fetchService(se_id: any) {
    const info$ = this.serviceService.loadServiceInfo({se_id})
    .pipe(takeUntil(this.destroyed$));
    info$.subscribe((res: any) => {
      if (res && res.Data) {
        this.selectedService = res.Data;
        this._patchService();
      }
    });
  }
  private _patchService() {
    const service = this.selectedService;
    this.formMoney.patchValue({
      se_number: service.se_number,
      
    });
  }
  onChangeDiscount(data : any) {
    this._updatePrice(data)
  }

  onChangeNumber(data: any) {
    this._updatePrice(data);
  }
  _updatePrice(data) {
      this.total_price = (this.amount * data[0].se_price) * ((100 - this.discount)/100)
    
  
    // const { st_repeat_every, cuo_discount, cuo_total_price } = this.formRepeat.value;
   
    // const { se_price, se_saleoff, se_number, start_time, end_time, exe_time_overtime } = this.formMoney.value;
    
    // var a = moment(start_time, "HH:mm")
    // var b = moment(end_time, "HH:mm")

    // this.formRepeat.patchValue({

    //   cuo_total_price: ( ((se_price * se_number * (1 - (se_saleoff / 100)) * st_repeat_every 
    //     * ((b.diff(a, 'minutes') / 60))
    //     * exe_time_overtime) )
    //     * (1 - (cuo_discount / 100) ) ),
        
    // });
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

  isNumber(val): boolean {
    return typeof val === 'number';
  }
  //#endregion
}
