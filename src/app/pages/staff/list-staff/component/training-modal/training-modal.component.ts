import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { isUndefined } from 'util';

@Component({
  selector: 'app-training-modal',
  templateUrl: './training-modal.component.html',
  styleUrls: ['./training-modal.component.scss'],
})
export class TrainingModalComponent implements OnInit {
  @Input() training: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.training) {
      this.patchData(this.training);
    }
  }

  onClickSubmit() {
    this.submitted = true;
    if (this.form.value.tn_name.trim() === '')
      return this.form.controls['tn_name'].setErrors({ required: true });

    if (this.form.value.tn_content.trim() === '')
      return this.form.controls['tn_content'].setErrors({ required: true });

    if (this.form.valid) {
      const data = this.form.value;
      data.tn_start_date = this._convertNgbDateToDate(data.tn_start_date);
      data.tn_end_date = this._convertNgbDateToDate(data.tn_end_date);
      this.passEvent.emit({ event: true, data });
    }
  }

  onChangeEvaluate(event) {
    console.log(event.target.value);
    const evaluate = event.target.value;

    if (evaluate === 1)
      this.form.patchValue({
        ts_evaluate_name: 'Tốt',
      });

    if (evaluate === 2)
      this.form.patchValue({
        ts_evaluate_name: 'Khá',
      });

    if (evaluate === 3)
      this.form.patchValue({
        ts_evaluate_name: 'Trung bình',
      });

    if (evaluate === 4)
      this.form.patchValue({
        ts_evaluate_name: 'Yếu',
      });
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
      tn_id: ['temp_0', null],
      tn_code: [null, null],
      tn_name: [null, [Validators.required]],
      tn_content: ['', [Validators.required]],
      tn_start_date: [null, [Validators.required]],
      tn_end_date: [null, [Validators.required]],
      tn_purpose: ['', null],
      ts_evaluate: ['', null],
      ts_evaluate_name: ['', null],
    });
  }

  private patchData(training: any) {
    this.form.patchValue({
      tn_id: training.tn_id,
      tn_code: training.tn_code,
      tn_name: training.tn_name,
      tn_content: training.tn_content,
      tn_start_date: this._convertDateToNgbDate(training.tn_start_date),
      tn_end_date: this._convertDateToNgbDate(training.tn_end_date),
      tn_purpose: training.tn_purpose,
      ts_evaluate: training.ts_evaluate,
      ts_evaluate_name: training.ts_evaluate_name,
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
