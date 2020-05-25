import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bank-modal',
  templateUrl: './bank-modal.component.html',
  styleUrls: ['./bank-modal.component.scss'],
})
export class BankModalComponent implements OnInit {
  @Input() bank: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.bank) {
      this.patchData(this.bank);
    }
  }

  onClickSubmit() {
    this.submitted = true;
    if (this.form.value.bank_name.trim() === '')
      return this.form.controls['bank_name'].setErrors({ required: true });

    if (this.form.value.stb_account.trim() === '')
      return this.form.controls['stb_account'].setErrors({ required: true });

    if (this.form.valid) {
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
      stb_id: ['temp_0', null],
      bank_category_id: ['', [Validators.required]],
      bank_id: ['', [Validators.required]],
      bank_branch_id: ['', [Validators.required]],
      stb_account: ['', [Validators.required]],
      stb_fullname: ['', [Validators.required]],
      stb_note: ['', null],
    });
  }

  private patchData(bank: any) {
    this.form.patchValue({
      stb_id: bank.stb_id,
      bank_category_id: bank.bank_category_id,
      bank_id: bank.bank_id,
      bank_branch_id: bank.bank_branch_id,
      stb_account: bank.stb_account,
      stb_fullname: bank.stb_fullname,
      stb_note: bank.stb_note,
    });
  }
}
