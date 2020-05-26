import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ListTrainingModalComponent } from '../list-staff-detail/component/list-training-modal/list-training-modal.component';
import { TrainingModalComponent } from '../list-staff/component/training-modal/training-modal.component';
import { AddressModalComponent } from '../list-staff/component/address-modal/address-modal.component';
import { RelativeModalComponent } from '../list-staff/component/relative-modal/relative-modal.component';
import { AttachmentModalComponent } from '../list-staff/component/attachment-modal/attachment-modal.component';
import { BankModalComponent } from '../list-staff/component/bank-modal/bank-modal.component';
import { BonusModalComponent } from '../list-staff/component/bonus-modal/bonus-modal.component';
import { AddressService } from '../../../core/services/api/address.service';
import { StaffService } from '../../../core/services/api/staff.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { timePeriod, menu, days } from './data';
import { isUndefined } from 'util';

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
  submitted = false;
  errorField = null;

  roles: any;
  positions: any;
  departments: any;

  listView = [true, true, true, true, true, true, true, true, true, true, true, true];

  provincePermanent: any;
  districtPermanent: any;
  wardPermanent: any;
  provinceNow: any;
  districtNow: any;
  wardNow: any;

  tempTraining = 0;
  tempAddress = 0;
  tempWorkTime = 0;
  tempRelative = 0;
  tempAttachment = 0;
  tempBank = 0;
  tempBonus = 0;
  isChange = false;

  formContractType: FormGroup;
  formProfile: FormGroup;
  formContact: FormGroup;
  formIdentityCard: FormGroup;
  formPermanentAddress: FormGroup;
  formNowAddress: FormGroup;
  listTraining = [];
  listAddress = [];
  listRelative = [];
  listAttachment = [];
  listBank = [];
  listBonus = [];
  listNewTraining = [];
  listWorkTime = [[], [], [], [], [], [], []];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private addressService: AddressService,
    private staffService: StaffService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.sta_id = this.route.snapshot.paramMap.get('sta_id');
    if (this.sta_id === '')
      this.listView = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ];

    this.timePeriod = timePeriod;
    this.menu = menu;
    this.days = days;

    this._initializeForm();
    this._fetchFilter();

    if (this.sta_id) {
      this._fetchStaff(this.sta_id);
    } else {
      this._loadProvincePermanent();
      this._loadProvinceNow();
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
    if (
      this.formContractType.dirty ||
      this.formProfile.dirty ||
      this.formContact.dirty ||
      this.formPermanentAddress.dirty ||
      this.formNowAddress.dirty ||
      this.formIdentityCard.dirty
    ) {
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
          this.router.navigate(['/staff/list-staff']);
        }
      });
    } else {
      this.router.navigate(['/staff/list-staff']);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (
      this.formContractType.invalid ||
      this.formProfile.invalid ||
      this.formContact.invalid ||
      this.formPermanentAddress.invalid ||
      this.formNowAddress.invalid ||
      this.formIdentityCard.invalid ||
      (this.formContractType.value.sta_type_contact === 0 &&
        this.formContact.value.sta_email === '') ||
      (this.formContractType.value.sta_type_contact === 0 &&
        this.formProfile.value.department_id === null) ||
      (this.formProfile.value.sta_working_status === '2' &&
        this.formProfile.value.sta_end_work_date === null) ||
      (this.formProfile.value.sta_working_status === '2' &&
        (!this.formProfile.value.sta_reason_to_end_work ||
          this.formProfile.value.sta_reason_to_end_work.trim() === ''))
    )
      return;

    const list_staff_work_time = this.transformData();
    if (this.formContractType.value.sta_type_contact === 1 && list_staff_work_time.length === 0)
      return this._notify(false, 'Chưa chọn ngày làm việc');

    const identityForm = this.formIdentityCard.value;
    identityForm.sta_identity_card_date = this._convertNgbDateToDate(
      identityForm.sta_identity_card_date
    );
    identityForm.sta_identity_card_date_end = this._convertNgbDateToDate(
      identityForm.sta_identity_card_date_end
    );

    const profileForm = this.formProfile.value;
    profileForm.sta_birthday = this._convertNgbDateToDate(profileForm.sta_birthday);
    profileForm.sta_start_work_date = this._convertNgbDateToDate(profileForm.sta_start_work_date);
    profileForm.sta_end_work_date = this._convertNgbDateToDate(profileForm.sta_end_work_date);
    profileForm.sta_username = profileForm.sta_username.trim().toLowerCase();

    const data = {
      ...this.formContractType.value,
      ...profileForm,
      ...this.formContact.value,
      ...identityForm,
      ...this.formPermanentAddress.value,
      ...this.formNowAddress.value,
      list_training: this.listTraining.concat(this.listNewTraining),
      list_undertaken_location: this.listAddress,
      list_bank: this.listBank,
      list_relatives: this.listRelative,
      list_bonus: this.listBonus,
      list_attachments: this.listAttachment,
      list_staff_work_time,
    };
    console.log(data);
    if (this.sta_id)
      this._updateStaff({
        ...data,
        sta_id: this.sta_id,
      });
    else this._createStaff(data);
  }

  //#region Contract Type

  transformWorkTime(list_staff_work_time: any) {
    if (!list_staff_work_time) return;
    list_staff_work_time.forEach((item) => {
      const { sw_day_flag, sw_time_start, sw_time_end } = item;
      const index = parseInt(sw_day_flag[2]) - 2;
      this.listWorkTime[index].push({
        ...item,
        sw_time_start: sw_time_start.substr(0, 5),
        sw_time_end: sw_time_end.substr(0, 5),
      });
    });
  }

  transformData() {
    var data = [];
    this.listWorkTime.forEach((item, index) => {
      if (item.length === 0) return;
      item.forEach((time) => {
        data.push({
          ...time,
          sw_day_flag: `TH${index + 2}`,
        });
      });
    });
    return data;
  }

  onClickPlus(index: number) {
    this.isChange = true;
    this.listWorkTime[index].push({
      sw_id: `sw_${this.tempWorkTime}`,
      sw_time_start: '08:30',
      sw_time_end: '16:00',
    });
    this.tempWorkTime++;
  }

  onClickMinus(index: number, timeIndex: number) {
    this.isChange = true;
    this.listWorkTime[index].splice(timeIndex, 1);
  }

  onChangeStart(index, timeIndex, event) {
    this.isChange = true;
    this.listWorkTime[index][timeIndex] = {
      ...this.listWorkTime[index][timeIndex],
      sw_time_start: event.target.value,
    };
  }

  onChangeEnd(index, timeIndex, event) {
    this.isChange = true;
    this.listWorkTime[index][timeIndex] = {
      ...this.listWorkTime[index][timeIndex],
      sw_time_end: event.target.value,
    };
  }

  onCheckDay(index: any) {
    this.isChange = true;
    if (this.listWorkTime[index].length !== 0) this.listWorkTime[index] = [];
    else {
      this.listWorkTime[index].push({
        sw_id: `sw_${this.tempWorkTime}`,
        sw_time_start: '08:30',
        sw_time_end: '16:00',
      });
      this.tempWorkTime++;
    }
  }

  //#endregion

  //#region Profile
  onChangeWorkStatus(event) {
    if (event.target.value === '1')
      this.formProfile.patchValue({
        sta_end_work_date: null,
        sta_reason_to_end_work: '',
      });
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

  //#region Now Address
  onChangeProvinceNow(e) {
    const districtId = this.provinceNow.find((item) => item.name === e.target.value).id;
    this._loadDistrictNow(districtId);
  }

  onChangeDistrictNow(e) {
    const wardId = this.districtNow.find((item) => item.name === e.target.value).id;
    this._loadWardNow(wardId);
  }

  checkSameAddress() {
    const {
      unl_detail_permanent,
      unl_province_permanent,
      unl_district_permanent,
      unl_ward_permanent,
    } = this.formPermanentAddress.value;

    const {
      unl_detail_now,
      unl_province_now,
      unl_district_now,
      unl_ward_now,
    } = this.formNowAddress.value;

    return (
      unl_detail_permanent === unl_detail_now &&
      unl_province_permanent === unl_province_now &&
      unl_district_permanent === unl_district_now &&
      unl_ward_permanent === unl_ward_now
    );
  }

  changeCheckSame(event: any) {
    if (event.target.checked) {
      const {
        unl_detail_permanent,
        unl_province_permanent,
        unl_district_permanent,
        unl_ward_permanent,
      } = this.formPermanentAddress.value;

      this.provinceNow = this.provincePermanent;
      this.districtNow = this.districtPermanent;
      this.wardNow = this.wardPermanent;

      this.formNowAddress.patchValue({
        unl_ward_now: unl_ward_permanent,
        unl_district_now: unl_district_permanent,
        unl_province_now: unl_province_permanent,
        unl_detail_now: unl_detail_permanent,
      });
    }
  }
  //#endregion

  //#region List Training
  onUpdateListTraining() {
    const modalRef = this.modalService.open(ListTrainingModalComponent, {
      centered: true,
      size: 'lg',
    });
    modalRef.componentInstance.listTraining = this.listTraining;
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        this.listTraining = res.data;
      }
      modalRef.close();
    });
  }

  openTrainingModal(training?: any) {
    const modalRef = this.modalService.open(TrainingModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.staffId = this.sta_id;
    if (training) {
      modalRef.componentInstance.training = training;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (training) {
          this.listNewTraining = this.listNewTraining.map((item) => {
            if (item.tn_id !== res.data.tn_id) return item;
            return res.data;
          });
          this.listTraining = this.listTraining.map((item) => {
            if (item.tn_id !== res.data.tn_id) return item;
            return res.data;
          });
          this.isChange = true;
        } else {
          this.listNewTraining.push({
            ...res.data,
            tn_id: `temp_${this.tempTraining}`,
          });
          this.tempTraining++;
          this.isChange = true;
        }
      }
      modalRef.close();
    });
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
        this.isChange = true;
      }
    });
  }
  //#endregion

  //#region List Address
  openAddressModal(address?: any) {
    const modalRef = this.modalService.open(AddressModalComponent, {
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
            if (item.unl_id !== res.form.unl_id) return item;
            return res.form;
          });
          this.isChange = true;
        } else {
          this.listAddress.push({
            ...res.form,
            unl_id: `temp_${this.tempAddress}`,
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
        this.listAddress = this.listAddress.filter((item) => item.unl_id !== address.unl_id);
        this.isChange = true;
      }
    });
  }
  //#endregion

  //#region List Relative
  openRelativeModal(relative?: any) {
    const modalRef = this.modalService.open(RelativeModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.listRelative = this.listRelative;
    if (relative) {
      modalRef.componentInstance.relative = relative;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (relative) {
          this.listRelative = this.listRelative.map((item) => {
            if (item.rels_id !== res.data.rels_id) return item;
            return res.data;
          });
          this.isChange = true;
        } else {
          this.listRelative.push({
            ...res.data,
            rels_id: `temp_${this.tempRelative}`,
          });
          this.tempRelative++;
          this.isChange = true;
        }
      }
      modalRef.close();
    });
  }

  onRemoveRelative(relative: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa quan hệ gia đình đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this.listRelative = this.listRelative.filter((item) => item.rels_id !== relative.rels_id);
        this.isChange = true;
      }
    });
  }
  //#endregion

  //#region List Attachment
  openAttachmentModal(attachment?: any) {
    const modalRef = this.modalService.open(AttachmentModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.listAttachment = this.listAttachment;
    if (attachment) {
      modalRef.componentInstance.attachment = attachment;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (attachment) {
          this.listAttachment = this.listAttachment.map((item) => {
            if (item.ast_id !== res.data.ast_id) return item;
            return res.data;
          });
          this.isChange = true;
        } else {
          this.listAttachment.push({
            ...res.data,
            ast_id: `temp_${this.tempAttachment}`,
          });
          this.tempAttachment++;
          this.isChange = true;
        }
      }
      modalRef.close();
    });
  }

  onRemoveAttachment(attachment: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa file đính kèm đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this.listAttachment = this.listAttachment.filter(
          (item) => item.ast_id !== attachment.ast_id
        );
        this.isChange = true;
      }
    });
  }
  //#endregion

  //#region List Bank
  openBankModal(bank?: any) {
    const modalRef = this.modalService.open(BankModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.listBank = this.listBank;
    if (bank) {
      modalRef.componentInstance.bank = bank;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (bank) {
          this.listBank = this.listBank.map((item) => {
            if (item.stb_id !== res.data.stb_id) return item;
            return res.data;
          });
          this.isChange = true;
        } else {
          this.listBank.push({
            ...res.data,
            stb_id: `temp_${this.tempBank}`,
          });
          this.tempBank++;
          this.isChange = true;
        }
      }
      modalRef.close();
    });
  }

  onRemoveBank(bank: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa tài khoản ngân hàng đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this.listBank = this.listBank.filter((item) => item.stb_id !== bank.stb_id);
        this.isChange = true;
      }
    });
  }
  //#endregion

  //#region List Bonus
  openBonusModal(bonus?: any) {
    const modalRef = this.modalService.open(BonusModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.listBonus = this.listBonus;
    if (bonus) {
      modalRef.componentInstance.bonus = bonus;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (bonus) {
          this.listBonus = this.listBonus.map((item) => {
            if (item.bos_id !== res.data.bos_id) return item;
            return res.data;
          });
          this.isChange = true;
        } else {
          this.listBonus.push({
            ...res.data,
            bos_id: `temp_${this.tempBonus}`,
          });
          this.tempBonus++;
          this.isChange = true;
        }
      }
      modalRef.close();
    });
  }

  onRemoveBonus(bonus: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa khen thưởng/kỉ luật đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this.listBonus = this.listBonus.filter((item) => item.bos_id !== bonus.bos_id);
        this.isChange = true;
      }
    });
  }
  //#endregion

  //#region Private
  private _initializeForm() {
    this.formContractType = this.formBuilder.group({
      sta_type_contact: [0, null],
    });

    this.formProfile = this.formBuilder.group({
      sta_fullname: ['', [Validators.required]],
      sta_username: ['', [Validators.required]],
      group_role_id: ['', [Validators.required]],
      position_id: [null, [Validators.required]],
      sta_status: [1, [Validators.required]],
      department_id: ['', null],
      sta_sex: [1, null],
      sta_traffic: ['', null],
      sta_start_work_date: [this._convertDateToNgbDate(new Date(2020, 0, 1)), null],
      sta_birthday: [this._convertDateToNgbDate(new Date(1995, 0, 1)), null],
      sta_salary: [30, [Validators.required]],
      sta_working_status: [1, [Validators.required]],
      sta_tax_code: ['', null],
      sta_end_work_date: [null, null],
      sta_reason_to_end_work: [null, null],
      sta_note: ['', null],
      sta_social_insurance: ['', null],
      sta_health_card: ['', null],
    });

    this.formContact = this.formBuilder.group({
      sta_mobile: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      sta_email: ['', [Validators.email]],
    });

    this.formIdentityCard = this.formBuilder.group({
      sta_identity_card: ['', [Validators.pattern(/^\d+$/)]],
      sta_identity_card_date: [null, null],
      sta_identity_card_date_end: [null, null],
      sta_identity_card_location: ['', null],
    });

    this.formPermanentAddress = this.formBuilder.group({
      unl_ward_permanent: [null, [Validators.required]],
      unl_district_permanent: [null, [Validators.required]],
      unl_province_permanent: [null, [Validators.required]],
      unl_detail_permanent: [null, [Validators.required]],
    });

    this.formNowAddress = this.formBuilder.group({
      unl_ward_now: [null, [Validators.required]],
      unl_district_now: [null, [Validators.required]],
      unl_province_now: [null, [Validators.required]],
      unl_detail_now: [null, [Validators.required]],
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
      sta_salary: staff.sta_salary,
      sta_working_status: staff.sta_working_status.toString(),
      sta_tax_code: staff.sta_tax_code,
      sta_end_work_date: this._convertDateToNgbDate(staff.sta_end_work_date),
      sta_reason_to_end_work: staff.sta_reason_to_end_work,
      sta_note: staff.sta_note,
      sta_health_card: staff.sta_health_card,
      sta_social_insurance: staff.sta_social_insurance,
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

    this.listTraining = staff.list_training;
    this.listAddress = staff.list_undertaken_location;
    this.listRelative = staff.list_relatives;
    this.listBank = staff.list_bank;
    this.listBonus = staff.list_bonus;
    this.listAttachment = staff.list_attachments;
    this.transformWorkTime(staff.list_staff_work_time);
  }

  private _loadProvinceNow() {
    const provinceNow$ = this.addressService.loadProvince().pipe(takeUntil(this.destroyed$));
    provinceNow$.subscribe((res: any) => {
      if (res && res.Data) {
        this.provinceNow = res.Data;

        if (this.formNowAddress.value.unl_province_now === null) {
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

        if (this.formNowAddress.value.unl_district_now === null || !isFirst) {
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
    const wardNow$ = this.addressService
      .loadWard({ district_id: districtId })
      .pipe(takeUntil(this.destroyed$));
    wardNow$.subscribe((res: any) => {
      if (res && res.Data) {
        this.wardNow = res.Data;

        if (this.formNowAddress.value.unl_ward_now === null || !isFirst) {
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
        if (this.formPermanentAddress.value.unl_province_permanent === null) {
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

        if (this.formPermanentAddress.value.unl_district_permanent === null || !isFirst) {
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
    const wardPermanent$ = this.addressService
      .loadWard({ district_id: districtId })
      .pipe(takeUntil(this.destroyed$));
    wardPermanent$.subscribe((res: any) => {
      if (res && res.Data) {
        this.wardPermanent = res.Data;

        if (this.formPermanentAddress.value.unl_ward_permanent === null || !isFirst) {
          this.formPermanentAddress.patchValue({ unl_ward_permanent: res.Data[0].name });
        }
      }
    });
  }

  private _createStaff(data: any) {
    const createStaff$ = this.staffService.createStaff(data).pipe(takeUntil(this.destroyed$));
    createStaff$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/staff/list-staff']);

          this.staffService
            .sendMailCreate({
              sta_username: data.sta_username,
              sta_email: data.sta_email,
            })
            .subscribe((res) => {
              console.log(res);
            });
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

  private _updateStaff(updated: any) {
    const updateStaff$ = this.staffService.updateStaff(updated).pipe(takeUntil(this.destroyed$));
    updateStaff$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/staff/list-staff']);
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
    if (isUndefined(ngbDate.year)) return ngbDate;
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
