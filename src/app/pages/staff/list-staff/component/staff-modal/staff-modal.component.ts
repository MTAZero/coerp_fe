import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Staff } from '../../list-staff.model';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-staff-modal',
  templateUrl: './staff-modal.component.html',
  styleUrls: ['./staff-modal.component.scss']
})
export class StaffModalComponent implements OnInit {
  @Input() staff: Staff;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  summitted = false;
  constructor(public formBuilder: FormBuilder, private modalService: NgbModal) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.staff) {
      this.patchData(this.staff);
    }
  }

  onClickSubmit() {
    this.summitted = true;
    console.log(this.form.invalid);
    console.log(this.formBuilder);
    // this.passEvent.emit({ event: true, form: this.form.value });
  }

  onClickCancel() {
    if (!this.form.touched) {
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

  private initializeForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      user_name: ['', [Validators.required]],
      status: ['', [Validators.required]],
      password: ['', [Validators.required]],
      gender: ['', null],
      department: ['', [Validators.required]],
      dob: ['', null],
      phone: ['', [Validators.required]],
      CMND: ['', null],
      email: [
        '',
        [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]
      ],
      doi: ['', null], // date of issue of certification
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
