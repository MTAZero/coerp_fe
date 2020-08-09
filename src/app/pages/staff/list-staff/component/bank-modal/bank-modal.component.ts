import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { StaffService } from '../../../../../core/services/api/staff.service';

@Component({
  selector: 'app-bank-modal',
  templateUrl: './bank-modal.component.html',
  styleUrls: ['./bank-modal.component.scss'],
})
export class BankModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() bank: any;
  @Input() listBank: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  categories: any;
  banks: any;
  branchs: any;

  constructor(
    public formBuilder: FormBuilder, 
    private staffService: StaffService) {
    this.initializeForm();
    this._loadCategory();
  }

  ngOnInit() {
    if (this.bank) {
      this.patchData(this.bank);
    }
  }

  onClickSubmit() {
    this.submitted = true;
    if (this.form.value.stb_fullname.trim() === '')
      return this.form.controls['stb_fullname'].setErrors({ required: true });

    if (this.form.value.stb_account.trim() === '')
      return this.form.controls['stb_account'].setErrors({ required: true });

    let isConflict = false;
    this.listBank.forEach((item) => {
      if (
        item.stb_account.trim() === this.form.value.stb_account.trim() &&
        (!this.bank || (this.bank && item.stb_id !== this.bank.stb_id))
      )
        isConflict = true;
    });
    if (isConflict) this._notify(false, 'Số tài khoản đã có trong hệ thống');

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

  onChangeCategory(e) {
    const bankId = e.id;
    this._loadBank(bankId);
  }

  onChangeBank(e) {
    const branchId = e.id;
    this._loadBranch(branchId);
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
      stb_account: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      stb_fullname: ['', [Validators.required]],
      stb_note: ['', null],
      bank_category_name: ['', null],
      bank_name: ['', null],
      bank_branch_name: ['', null],
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
      bank_category_name: bank.bank_category_name,
      bank_name: bank.bank_name,
      bank_branch_name: bank.bank_branch_name,
    });
  }

  private _loadCategory() {
    const category$ = this.staffService
      .loadBankCategory({ name: '', search: '' })
      .pipe(takeUntil(this.destroyed$));
    category$.subscribe((res: any) => {
      if (res && res.Data) {
        this.categories = res.Data;

        if (this.bank) {
          this._loadBank(this.bank.bank_category_id, true);
        } else {
          this.form.patchValue({
            bank_category_id: res.Data[0].id,
            bank_category_name: res.Data[0].name,
          });
          this._loadBank(res.Data[0].id);
        }
      }
    });
  }

  private _loadBank(categoryId: any, isFirst = false) {
    const bank$ = this.staffService
      .loadBank({ bank_category_id: categoryId, search: '', name: '' })
      .pipe(takeUntil(this.destroyed$));
    bank$.subscribe((res: any) => {
      if (res && res.Data) {
        this.banks = res.Data;

        if (this.bank && isFirst) {
          this._loadBranch(this.bank.bank_id, true);
        } else {
          this.form.patchValue({ bank_id: res.Data[0].id, bank_name: res.Data[0].name });
          this._loadBranch(res.Data[0].id);
        }
      }
    });
  }

  private _loadBranch(bankId: any, isFirst = false) {
    const branch$ = this.staffService
      .loadBankBranch({ bank_id: bankId, name: '', search: '' })
      .pipe(takeUntil(this.destroyed$));
    branch$.subscribe((res: any) => {
      if (res && res.Data) {
        this.branchs = res.Data;

        if (this.bank && isFirst) {
        } else {
          console.log(res.Data);
          this.form.patchValue({
            bank_branch_id: res.Data[0].id,
            bank_branch_name: res.Data[0].name,
          });
        }
      }
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
