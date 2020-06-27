import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mobile-modal',
  templateUrl: './mobile-modal.component.html',
  styleUrls: ['./mobile-modal.component.scss'],
})
export class MobileModalComponent implements OnInit {
  @Input() mobile: any;
  @Input() listMobile: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.mobile) {
      this.patchData(this.mobile);
    }
  }

  changePhoneType(event: any) {
    const type = event.target.value;
    this.form.patchValue({
      cp_type_name: type === '1' ? 'Số chính' : type === '2' ? 'Số nhà' : 'Số công ty',
    });
  }

  onClickSubmit() {
    this.submitted = true;

    let isConflict = false;
    this.listMobile.forEach((item) => {
      if (
        item.cp_phone_number.trim() === this.form.value.cp_phone_number.trim() &&
        item.cp_id !== this.mobile.cp_id
      )
        isConflict = true;
    });
    if (isConflict) this._notify(false, 'Số điện thoại đã tồn tại');

    if (this.form.valid && !isConflict) {
      const data = this.form.value;
      this.passEvent.emit({ event: true, data });
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
        cancelButtonColor: '#d33',
      }).then((result) => {
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
      cp_id: ['temp_0', null],
      cp_type: [1, [Validators.required]],
      cp_type_name: ['Số chính', null],
      cp_phone_number: ['', [Validators.required, Validators.pattern(/^(\d{10}|\d{11})$/g)]],
      cp_note: ['', null],
    });
  }

  private patchData(mobile: any) {
    this.form.patchValue({
      cp_id: mobile.cp_id,
      cp_type: mobile.cp_type,
      cp_type_name: mobile.cp_type_name,
      cp_phone_number: mobile.cp_phone_number,
      cp_note: mobile.cp_note,
    });
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
