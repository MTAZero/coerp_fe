import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { isUndefined } from 'util';
@Component({
  selector: 'app-bonus-modal',
  templateUrl: './bonus-modal.component.html',
  styleUrls: ['./bonus-modal.component.scss'],
})
export class BonusModalComponent implements OnInit {
  @Input() bonus: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.bonus) {
      this.patchData(this.bonus);
    }
  }

  onClickSubmit() {
    this.submitted = true;
    if (this.form.value.bos_title.trim() === '')
      return this.form.controls['bos_title'].setErrors({ required: true });

    if (this.form.value.bos_content.trim() === '')
      return this.form.controls['bos_content'].setErrors({ required: true });

    if (this.form.value.bos_value.trim() === '')
      return this.form.controls['bos_value'].setErrors({ required: true });

    if (this.form.value.bos_reason.trim() === '')
      return this.form.controls['bos_reason'].setErrors({ required: true });

    if (this.form.valid) {
      const data = this.form.value;
      data.bos_time = this._convertNgbDateToDate(data.bos_time);
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
      bos_id: ['temp_0', null],
      bos_content: ['', [Validators.required]],
      bos_title: ['', [Validators.required]],
      bos_note: ['', null],
      bos_type: [1, [Validators.required]],
      bos_value: ['', [Validators.required]],
      bos_time: [null, [Validators.required]],
      bos_reason: ['', [Validators.required]],
    });
  }

  private patchData(bonus: any) {
    this.form.patchValue({
      bos_id: bonus.bos_id,
      bos_content: bonus.bos_content,
      bos_title: bonus.bos_title,
      bos_note: bonus.bos_note,
      bos_type: bonus.bos_type,
      bos_value: bonus.bos_value,
      bos_time: this._convertDateToNgbDate(bonus.bos_time),
      bos_reason: bonus.bos_reason,
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
    if (isUndefined(ngbDate.year)) return ngbDate;
    const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    return moment(newDate).format();
  }
}
