import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CustomerService } from '../../../core/services/api/customer.service';
import { AddressService } from '../../../core/services/api/address.service';
import { StaffService } from '../../../core/services/api/staff.service';
import { ServiceService } from '../../../core/services/api/service.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { timePeriod, menu, days } from './data';

@Component({
  selector: 'app-list-staff-detail',
  templateUrl: './list-staff-detail.component.html',
  styleUrls: ['./list-staff-detail.component.scss'],
})
export class ListStaffDetailComponent implements OnInit, OnDestroy {
  sta_id = null;
  private destroyed$ = new Subject();
  timePeriod: any;
  menu: any[];
  days: any[];
  selectedMenuItem = 0;

  roles: any;
  positions: any;
  departments: any;
  provinces: any;
  districts: any;
  wards: any;

  readOnly = true;
  isView = true;

  formCustomer: FormGroup;
  formRepeat: FormGroup;

  formContractType: FormGroup;
  formProfile: FormGroup;

  constructor(
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private addressService: AddressService,
    private staffService: StaffService
  ) {}

  ngOnInit() {
    //this.sta_id = this.route.snapshot.paramMap.get('sta_id');
    //console.log(this.sta_id);
    this.isView = false;

    this.timePeriod = timePeriod;
    this.menu = menu;
    this.days = days;

    this.readOnly = this.isView;

    this.initializeForm();
    this._fetchFilter();
    this._loadProvince();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onClickMenuItem(index: any) {
    this.selectedMenuItem = index;
    const el = document.getElementById(index);
    const content = document.getElementById('content');
    content.scroll({ top: el.offsetTop - 80, behavior: 'smooth' });
  }

  onChangeToMain() {
    if (this.formCustomer.dirty || this.formRepeat.dirty) {
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
        }
      });
    } else {
    }
  }

  //#region Contract Type

  onCheckDay(day: any) {
    if (this.isView) return;

    if (day === 'Thứ 2')
      this.formContractType.patchValue({
        st_mon_flag: this.formContractType.value.st_mon_flag === 1 ? 0 : 1,
      });

    if (day === 'Thứ 3')
      this.formContractType.patchValue({
        st_tue_flag: this.formContractType.value.st_tue_flag === 1 ? 0 : 1,
      });

    if (day === 'Thứ 4')
      this.formContractType.patchValue({
        st_wed_flag: this.formContractType.value.st_wed_flag === 1 ? 0 : 1,
      });

    if (day === 'Thứ 5')
      this.formContractType.patchValue({
        st_thu_flag: this.formContractType.value.st_thu_flag === 1 ? 0 : 1,
      });

    if (day === 'Thứ 6')
      this.formContractType.patchValue({
        st_fri_flag: this.formContractType.value.st_fri_flag === 1 ? 0 : 1,
      });

    if (day === 'Thứ 7')
      this.formContractType.patchValue({
        st_sat_flag: this.formContractType.value.st_sat_flag === 1 ? 0 : 1,
      });

    if (day === 'Chủ nhật')
      this.formContractType.patchValue({
        st_sun_flag: this.formContractType.value.st_sun_flag === 1 ? 0 : 1,
      });
  }

  checkDay(day: any) {
    if (day === 'Thứ 2') return this.formContractType.value.st_mon_flag;
    if (day === 'Thứ 3') return this.formContractType.value.st_tue_flag;
    if (day === 'Thứ 4') return this.formContractType.value.st_wed_flag;
    if (day === 'Thứ 5') return this.formContractType.value.st_thu_flag;
    if (day === 'Thứ 6') return this.formContractType.value.st_fri_flag;
    if (day === 'Thứ 7') return this.formContractType.value.st_sat_flag;
    if (day === 'Chủ nhật') return this.formContractType.value.st_sun_flag;
  }

  //#endregion

  onChangeProvince(e) {
    const districtId = this.provinces.find((item) => item.name === e.target.value).id;
    this._loadDistrict(districtId);
  }

  onChangeDistrict(e) {
    const wardId = this.districts.find((item) => item.name === e.target.value).id;
    this._loadWard(wardId);
  }

  onSubmit() {
    console.log(this.formContractType.value);
  }

  private initializeForm() {
    this.formContractType = this.formBuilder.group({
      sta_type_contact: [0, null],
      sw_time_start: ['08:30', null],
      sw_time_end: ['17:00', null],
      st_sun_flag: 0,
      st_mon_flag: 1,
      st_tue_flag: 1,
      st_wed_flag: 1,
      st_thu_flag: 1,
      st_fri_flag: 1,
      st_sat_flag: 0,
    });

    this.formProfile = this.formBuilder.group({
      sta_fullname: ['', [Validators.required]],
      sta_username: ['', [Validators.required]],
      group_role_id: ['', [Validators.required]],
      position_id: ['', [Validators.required]],
      sta_status: ['', [Validators.required]],
      department_id: ['', null],
      sta_sex: [1, null],
      sta_traffic: ['', null],
      sta_start_work_date: [null, null],
      sta_birthday: [null, null],
      sta_salary_to: [0, [Validators.required]],
      sta_salary_end: [20, [Validators.required]],
      sta_working_status: [1, [Validators.required]],
      sta_tax_code: ['', null],
      sta_end_work_date: [null, null],
      sta_reason_to_end_work: ['', null],
      sta_note: ['', null],
    });
  }

  private _fetchFilter() {
    const roles$ = this.staffService.loadGroupRole().pipe(takeUntil(this.destroyed$));
    roles$.subscribe((res: any) => {
      this.roles = res.Data;
    });

    const positions$ = this.staffService.loadPosition().pipe(takeUntil(this.destroyed$));
    positions$.subscribe((res: any) => {
      this.positions = res.Data;
    });

    const departments$ = this.staffService.loadDepartment().pipe(takeUntil(this.destroyed$));
    departments$.subscribe((res: any) => {
      this.departments = res.Data;
    });
  }

  private _loadProvince() {
    const province$ = this.addressService.loadProvince().pipe(takeUntil(this.destroyed$));
    province$.subscribe((res: any) => {
      if (res && res.Data) {
        this.provinces = res.Data;

        //this.formCustomer.patchValue({ cu_province: res.Data[0].name });
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
}
