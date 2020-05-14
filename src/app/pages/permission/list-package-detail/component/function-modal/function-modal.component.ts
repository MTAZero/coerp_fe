import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-function-modal',
  templateUrl: './function-modal.component.html',
  styleUrls: ['./function-modal.component.scss'],
})
export class FunctionModalComponent implements OnInit {
  @Input() func: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.func) {
      this.patchData(this.func);
    }
  }

  onClickSubmit() {
    this.submitted = true;
    if (this.form.value.fun_name.trim() === '')
      return this.form.controls['fun_name'].setErrors({ required: true });

    if (this.form.value.fun_code.trim() === '')
      return this.form.controls['fun_code'].setErrors({ required: true });

    if (this.form.valid) {
      const data = this.form.value;
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
      fun_id: ['temp_0', null],
      fun_code: ['', [Validators.required]],
      fun_name: ['', [Validators.required]],
    });
  }

  private patchData(func: any) {
    this.form.patchValue({
      fun_id: func.fun_id,
      fun_code: func.fun_code,
      fun_name: func.fun_name,
    });
  }
}
