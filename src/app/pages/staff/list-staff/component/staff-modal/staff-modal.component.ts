import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ListPositionModalComponent } from '../list-position-modal/list-position-modal.component';
import { ListDepartmentModalComponent } from '../list-department-modal/list-department-modal.component';
import { PositionService } from '../../../../../core/services/api/position.service';
import { DepartmentService } from '../../../../../core/services/api/department.service';
import { StaffService } from '../../../../../core/services/api/staff.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff-modal',
  templateUrl: './staff-modal.component.html',
  styleUrls: ['./staff-modal.component.scss']
})
export class StaffModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() staff: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  positions: any;
  departments: any;
  roles: any;

  constructor(
    public formBuilder: FormBuilder,
    private modalService: NgbModal,
    private departmentService: DepartmentService,
    private positionService: PositionService,
    private staffService: StaffService
  ) {
    this.initializeForm();
    this._fetchData();
  }

  ngOnInit() {
    if (this.staff) {
      this.patchData(this.staff);
    }
  }

  openPositionModal() {
    const modalRef = this.modalService.open(ListPositionModalComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.passEvent.subscribe(() => {
      modalRef.close();
    });
  }

  openDepartmentModal() {
    const modalRef = this.modalService.open(ListDepartmentModalComponent, {
      centered: true
    });
    modalRef.componentInstance.passEvent.subscribe(() => {
      modalRef.close();
    });
  }

  onClickSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      const data = this.form.value;
      data.sta_birthday = this._convertNgbDateToDate(data.sta_birthday);
      data.sta_identity_card_date = this._convertNgbDateToDate(data.sta_identity_card_date);
      this.passEvent.emit({ event: true, form: data });
    }
  }

  onClickCancel() {
    if (this.form.dirty) {
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
          this.passEvent.emit({ event: false });
        }
      });
    } else {
      this.passEvent.emit({ event: false });
    }
  }

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      sta_id: ['', null],
      sta_fullname: ['', [Validators.required]],
      position_id: ['', [Validators.required]],
      sta_username: ['', [Validators.required]],
      sta_status: ['', [Validators.required]],
      group_role_id: ['', [Validators.required]],
      sta_sex: ['', null],
      department_id: ['', [Validators.required]],
      sta_birthday: [null, null],
      sta_mobile: ['', [Validators.required]],
      sta_identity_card: ['', null],
      sta_email: [
        '',
        [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'), Validators.required]
      ],
      sta_identity_card_date: [null, null], // date of issue of certification
      sta_address: ['', null]
    });
  }

  private patchData(staff: any) {
    this.form.patchValue({
      sta_id: staff.sta_id,
      sta_fullname: staff.sta_fullname,
      sta_username: staff.sta_username,
      sta_mobile: staff.sta_mobile,
      sta_email: staff.sta_email,
      position_id: staff.position_id,
      sta_identity_card: staff.sta_identity_card,
      sta_identity_card_date: this._convertDateToNgbDate(staff.sta_identity_card_date),
      sta_status: staff.sta_status,
      department_id: staff.department_id,
      sta_sex: staff.sta_sex,
      sta_birthday: this._convertDateToNgbDate(staff.sta_birthday),
      sta_address: staff.sta_address,
      group_role_id: staff.group_role_id
    });
  }

  private _fetchData() {
    const positions$ = this.positionService.loadAllPosition().pipe(takeUntil(this.destroyed$));
    positions$.subscribe((res: any) => {
      if (res && res.Data) {
        this.positions = res.Data;
      }
    });

    const department$ = this.departmentService.loadAllDepartment().pipe(takeUntil(this.destroyed$));
    department$.subscribe((res: any) => {
      if (res && res.Data) {
        this.departments = res.Data;
      }
    });

    const role$ = this.staffService.loadGroupRole().pipe(takeUntil(this.destroyed$));
    role$.subscribe((res: any) => {
      if (res && res.Data) {
        this.roles = res.Data;
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
