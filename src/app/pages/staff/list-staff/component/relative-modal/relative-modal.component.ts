import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-relative-modal',
  templateUrl: './relative-modal.component.html',
  styleUrls: ['./relative-modal.component.scss'],
})
export class RelativeModalComponent implements OnInit {
  @Input() relative: any;
  @Input() listRelative: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.relative) {
      this.patchData(this.relative);
    }
  }

  onClickSubmit() {
    this.submitted = true;
    if (this.form.value.rels_fullname.trim() === '')
      return this.form.controls['rels_fullname'].setErrors({ required: true });

    if (this.form.value.rels_relatives.trim() === '')
      return this.form.controls['rels_relatives'].setErrors({ required: true });

    if (this.form.value.rels_phone.trim() === '')
      return this.form.controls['rels_phone'].setErrors({ required: true });

    if (this.form.value.rels_address.trim() === '')
      return this.form.controls['rels_address'].setErrors({ required: true });

    let isConflict = false;
    this.listRelative.forEach((item) => {
      if (item.rels_phone.trim() === this.form.value.rels_phone.trim()) isConflict = true;
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
      rels_id: ['temp_0', null],
      rels_fullname: ['', [Validators.required]],
      rels_relatives: ['', [Validators.required]],
      rels_phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      rels_address: ['', [Validators.required]],
    });
  }

  private patchData(relative: any) {
    this.form.patchValue({
      rels_id: relative.rels_id,
      rels_fullname: relative.rels_fullname,
      rels_relatives: relative.rels_relatives,
      rels_phone: relative.rels_phone,
      rels_address: relative.rels_address,
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
