import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddressService } from '../../../core/services/api/address.service';
import { StaffService } from '../../../core/services/api/staff.service';
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

  provincePermanent: any;
  districtPermanent: any;
  wardPermanent: any;
  provinceNow: any;
  districtNow: any;
  wardNow: any;

  isView = true;

  formContractType: FormGroup;
  formProfile: FormGroup;
  formContact: FormGroup;
  formIdentityCard: FormGroup;
  formPermanentAddress: FormGroup;
  formNowAddress: FormGroup;
  listTraining: any[];
  listAddress: any[];

  constructor(
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private addressService: AddressService,
    private staffService: StaffService
  ) {}

  ngOnInit() {
    this.sta_id = this.route.snapshot.paramMap.get('sta_id');
    console.log(this.sta_id);
    this.isView = false;

    this.timePeriod = timePeriod;
    this.menu = menu;
    this.days = days;

    this._initializeForm();
    this._fetchFilter();

    if (this.sta_id) {
      this._fetchStaff(this.sta_id);
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
    content.scroll({ top: el.offsetTop - 60, behavior: 'smooth' });
  }

  onChangeToMain() {
    if (1) {
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

  //#region Permanent Address
  onChangeProvincePermanent(e) {
    const districtId = this.provincePermanent.find((item) => item.name === e.target.value).id;
    this._loadDistrictPermanent(districtId);
  }

  onChangeDistrictPermanent(e) {
    const wardId = this.districtPermanent.find((item) => item.name === e.target.value).id;
    this._loadWardPermanent(wardId);
  }
  //#endregion

  //#region Permanent Address
  onChangeProvinceNow(e) {
    const districtId = this.provinceNow.find((item) => item.name === e.target.value).id;
    this._loadDistrictNow(districtId);
  }

  onChangeDistrictNow(e) {
    const wardId = this.districtNow.find((item) => item.name === e.target.value).id;
    this._loadWardNow(wardId);
  }
  //#endregion

  onSubmit() {
    console.log(this.formContractType.value);
    console.log(this.formProfile.value);
    console.log(this.formContact.value);
    console.log(this.formIdentityCard.value);
    console.log(this.formPermanentAddress.value);
    console.log(this.formNowAddress.value);
  }

  private _initializeForm() {
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
      sta_start_work_date: [this._convertDateToNgbDate(new Date(2020, 0, 1)), null],
      sta_birthday: [this._convertDateToNgbDate(new Date(1995, 0, 1)), null],
      sta_salary_to: [0, [Validators.required]],
      sta_salary_end: [20, [Validators.required]],
      sta_working_status: [1, [Validators.required]],
      sta_tax_code: ['', null],
      sta_end_work_date: [null, null],
      sta_reason_to_end_work: ['', null],
      sta_note: ['', null],
    });

    this.formContact = this.formBuilder.group({
      sta_mobile: ['', [Validators.required]],
      sta_email: ['', [Validators.required]],
    });

    this.formIdentityCard = this.formBuilder.group({
      sta_identity_card: ['', null],
      sta_identity_card_date: [null, null],
      sta_identity_card_date_end: [null, null],
      sta_identity_card_location: ['', null],
    });

    this.formPermanentAddress = this.formBuilder.group({
      unl_ward_permanent: ['', [Validators.required]],
      unl_district_permanent: ['', [Validators.required]],
      unl_province_permanent: ['', [Validators.required]],
      unl_detail_permanent: ['', [Validators.required]],
    });

    this.formNowAddress = this.formBuilder.group({
      unl_ward_now: ['', [Validators.required]],
      unl_district_now: ['', [Validators.required]],
      unl_province_now: ['', [Validators.required]],
      unl_detail_now: ['', [Validators.required]],
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

  private _fetchStaff(sta_id: any) {
    const info$ = this.staffService.loadStaffInfo({ id: sta_id }).pipe(takeUntil(this.destroyed$));
    info$.subscribe((res: any) => {
      if (res && res.Data) {
        this._patchStaff(res.Data);
      }
    });
  }

  private _patchStaff(staff: any) {
    this.formContractType.patchValue({
      sta_type_contact: staff.sta_type_contact,
      sw_time_start: staff.sw_time_start,
      sw_time_end: staff.sw_time_end ? 1 : 0,
      st_sun_flag: staff.st_sun_flag ? 1 : 0,
      st_mon_flag: staff.st_mon_flag ? 1 : 0,
      st_tue_flag: staff.st_tue_flag ? 1 : 0,
      st_wed_flag: staff.st_wed_flag ? 1 : 0,
      st_thu_flag: staff.st_thu_flag ? 1 : 0,
      st_fri_flag: staff.st_fri_flag ? 1 : 0,
      st_sat_flag: staff.st_sat_flag ? 1 : 0,
    });

    this.formProfile.patchValue({
      sta_fullname: staff.sta_fullname,
      sta_username: staff.sta_username,
      group_role_id: staff.group_role_id,
      position_id: staff.position_id,
      sta_status: staff.sta_status,
      department_id: staff.department_id,
      sta_sex: staff.sta_sex,
      sta_traffic: staff.sta_traffic,
      sta_start_work_date: this._convertDateToNgbDate(staff.sta_start_work_date),
      sta_birthday: this._convertDateToNgbDate(staff.sta_birthday),
      sta_salary_to: staff.sta_salary_to,
      sta_salary_end: staff.sta_salary_end,
      sta_working_status: staff.sta_working_status,
      sta_tax_code: staff.sta_tax_code,
      sta_end_work_date: this._convertDateToNgbDate(staff.sta_end_work_date),
      sta_reason_to_end_work: staff.sta_reason_to_end_work,
      sta_note: staff.sta_note,
    });

    this.formContact.patchValue({
      sta_mobile: staff.sta_mobile,
      sta_email: staff.sta_email,
    });

    this.formIdentityCard.patchValue({
      sta_identity_card: staff.sta_identity_card,
      sta_identity_card_date: this._convertDateToNgbDate(staff.sta_identity_card_date),
      sta_identity_card_date_end: this._convertDateToNgbDate(staff.sta_identity_card_date_end),
      sta_identity_card_location: staff.sta_identity_card_location,
    });

    this.formPermanentAddress.patchValue({
      unl_ward_permanent: staff.unl_ward_permanent,
      unl_district_permanent: staff.unl_district_permanent,
      unl_province_permanent: staff.unl_province_permanent,
      unl_detail_permanent: staff.unl_detail_permanent,
    });

    this.formNowAddress.patchValue({
      unl_ward_now: staff.unl_ward_now,
      unl_district_now: staff.unl_district_now,
      unl_province_now: staff.unl_province_now,
      unl_detail_now: staff.unl_detail_now,
    });

    this._loadProvincePermanent();
    this._loadProvinceNow();
  }

  private _loadProvinceNow() {
    const provinceNow$ = this.addressService.loadProvince().pipe(takeUntil(this.destroyed$));
    provinceNow$.subscribe((res: any) => {
      if (res && res.Data) {
        this.provinceNow = res.Data;

        if (this.formNowAddress.value.unl_province_now === '') {
          this.formNowAddress.patchValue({ unl_province_now: res.Data[0].name });
          this._loadDistrictNow(res.Data[0].id);
        } else {
          const provinceId = this.provinceNow.find(
            (item: any) => item.name === this.formNowAddress.value.unl_province_now
          ).id;
          this._loadDistrictNow(provinceId, true);
        }
      }
    });
  }

  private _loadDistrictNow(provinceId: any, isFirst = false) {
    const districtNow$ = this.addressService
      .loadDistrict({ province_id: provinceId })
      .pipe(takeUntil(this.destroyed$));
    districtNow$.subscribe((res: any) => {
      if (res && res.Data) {
        this.districtNow = res.Data;

        if (this.formNowAddress.value.unl_district_now === '' || !isFirst) {
          this.formNowAddress.patchValue({ unl_district_now: res.Data[0].name });
          this._loadWardNow(res.Data[0].id);
        } else {
          const districtId = this.districtNow.find(
            (item: any) => item.name === this.formNowAddress.value.unl_district_now
          ).id;
          this._loadWardNow(districtId, true);
        }
      }
    });
  }

  private _loadWardNow(districtId: any, isFirst = false) {
    console.log('now', districtId);
    const wardNow$ = this.addressService
      .loadWard({ district_id: districtId })
      .pipe(takeUntil(this.destroyed$));
    wardNow$.subscribe((res: any) => {
      if (res && res.Data) {
        this.wardNow = res.Data;

        if (this.formNowAddress.value.unl_ward_now === '' || !isFirst) {
          this.formNowAddress.patchValue({ unl_ward_now: res.Data[0].name });
        }
      }
    });
  }

  private _loadProvincePermanent() {
    const provincePermanent$ = this.addressService.loadProvince().pipe(takeUntil(this.destroyed$));
    provincePermanent$.subscribe((res: any) => {
      if (res && res.Data) {
        this.provincePermanent = res.Data;

        if (this.formPermanentAddress.value.unl_province_permanent === '') {
          this.formPermanentAddress.patchValue({ unl_province_permanent: res.Data[0].name });
          this._loadDistrictPermanent(res.Data[0].id);
        } else {
          const provinceId = this.provincePermanent.find(
            (item: any) => item.name === this.formPermanentAddress.value.unl_province_permanent
          ).id;
          this._loadDistrictPermanent(provinceId, true);
        }
      }
    });
  }

  private _loadDistrictPermanent(provinceId: any, isFirst = false) {
    const districtPermanent$ = this.addressService
      .loadDistrict({ province_id: provinceId })
      .pipe(takeUntil(this.destroyed$));
    districtPermanent$.subscribe((res: any) => {
      if (res && res.Data) {
        this.districtPermanent = res.Data;

        if (this.formPermanentAddress.value.unl_district_permanent === '' || !isFirst) {
          this.formPermanentAddress.patchValue({ unl_district_permanent: res.Data[0].name });
          this._loadWardPermanent(res.Data[0].id);
        } else {
          const districtId = this.districtPermanent.find(
            (item: any) => item.name === this.formPermanentAddress.value.unl_district_permanent
          ).id;
          this._loadWardPermanent(districtId, true);
        }
      }
    });
  }

  private _loadWardPermanent(districtId: any, isFirst = false) {
    console.log('per', districtId);
    const wardPermanent$ = this.addressService
      .loadWard({ district_id: districtId })
      .pipe(takeUntil(this.destroyed$));
    wardPermanent$.subscribe((res: any) => {
      if (res && res.Data) {
        this.wardPermanent = res.Data;

        if (this.formPermanentAddress.value.unl_ward_permanent === '' || !isFirst) {
          this.formPermanentAddress.patchValue({ unl_ward_permanent: res.Data[0].name });
        }
      }
    });
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
}
