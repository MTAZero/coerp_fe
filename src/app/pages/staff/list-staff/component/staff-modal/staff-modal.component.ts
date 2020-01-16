import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Staff } from '../../list-staff.model';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ListPositionModalComponent } from '../list-position-modal/list-position-modal.component';
import { ListDepartmentModalComponent } from '../list-department-modal/list-department-modal.component';

@Component({
  selector: 'app-staff-modal',
  templateUrl: './staff-modal.component.html',
  styleUrls: ['./staff-modal.component.scss']
})
export class StaffModalComponent implements OnInit {
  @Input() staff: Staff;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder, private modalService: NgbModal) {
    this.initializeForm();
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
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  openDepartmentModal() {
    const modalRef = this.modalService.open(ListDepartmentModalComponent, {
      centered: true
    });
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  onClickSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      this.passEvent.emit({ event: true, form: this.form.value });
    }
  }

  onClickCancel() {
    if (this.form.dirty) {
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

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      user_name: ['', [Validators.required]],
      status: ['', [Validators.required]],
      password: ['', [Validators.required]],
      gender: ['', null],
      department: ['', [Validators.required]],
      dob: [null, null],
      phone: ['', [Validators.required]],
      CMND: ['', null],
      email: [
        '',
        [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]
      ],
      doi: [null, null], // date of issue of certification
      address: ['', null]
    });
  }

  private patchData(staff: Staff) {
    this.form.patchValue({
      name: staff.name,
      user_name: staff.user_name,
      phone: staff.phone,
      email: staff.email,
      position: staff.position,
      CMND: staff.CMND,
      doi: staff.doi,
      status: staff.status,
      password: staff.password,
      department: staff.department,
      gender: staff.gender,
      dob: staff.dob,
      address: staff.address
    });
  }
}
