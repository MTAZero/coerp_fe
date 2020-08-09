import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { isUndefined } from 'util';
import { CourseService } from 'src/app/core/services/api/course.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-training-modal',
  templateUrl: './training-modal.component.html',
  styleUrls: ['./training-modal.component.scss'],
})
export class TrainingModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() training: any;
  @Input() fromList: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  trainings: any;
  searchTraining = '';
  selectedTraining: any;

  filterTraining = {
    pageNumber: 0,
    pageSize: 100,
    search_name: '',
    start_date: '2010-01-01',
    end_date: moment(new Date()).format('YYYY-MM-DD'),
  };
  constructor(
    public formBuilder: FormBuilder,
    public courseService: CourseService) {
    this.initializeForm();
    this._fetchFilter();
    // this._loadTraining(null);
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

    if (this.form.valid) {
      const data = this.form.value;
      console.log(data);
      data.tn_start_date = this._convertNgbDateToDate(data.tn_start_date);
      data.tn_end_date = this._convertNgbDateToDate(data.tn_end_date);
      this.passEvent.emit({ event: true, data });
    }
  }
  private _fetchFilter() {
    const training$ = this.courseService
      .searchTraining(this.filterTraining)
      .pipe(takeUntil(this.destroyed$));
      
      training$.subscribe((res: any) => {
      this.trainings = res.Data.Results
    });

    
  }
  onChangeTraining(e) {
    // this.isChange = true;
    
      this._loadTraining(e.tn_id);
    
  }
  private _loadTraining(tn_id: any) {
    const training$ = this.courseService
      .loadTrainingInfo({tn_id})
      .pipe(takeUntil(this.destroyed$));

    training$.subscribe((res: any) => {
      this.selectedTraining = res.Data;
      this.patchData(res.Data);
      if (res && res.Data) {
        this.trainings = res.Data;

        if (this.training) {
          this.form.patchValue({  tn_name: this.training.tn_name });
          // // this._loadBranch(this.bank.bank_id, true);
          // this.form.patchValue({ tn_name: this.training.tn_name });
        }
        else {
          this.form.patchValue({
            tn_name: res.Data[0].name
            
          });
          // this._loadBranch(res.Data[0].id);
        }
      }
    });
  }
 
  onChangeEvaluate(event) {
    console.log(event.target.value);
    const evaluate = event.target.value;

    if (evaluate === 1 || evaluate === '1')
      this.form.patchValue({
        ts_evaluate_name: 'Tốt',
      });

    if (evaluate === 2 || evaluate === '2')
      this.form.patchValue({
        ts_evaluate_name: 'Khá',
      });

    if (evaluate === 3 || evaluate === '3')
      this.form.patchValue({
        ts_evaluate_name: 'Trung bình',
      });

    if (evaluate === 4 || evaluate === '4')
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
      tn_content: ['', null],
      tn_start_date: [this._convertDateToNgbDate(new Date()), [Validators.required]],
      tn_end_date: [this._convertDateToNgbDate(new Date()), [Validators.required]],
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
  // private _updateContent() {
   
  //   const { co_discount, co_duration } = this.form.value;
  //   this.formCompany.patchValue({
  //     co_price: (p * co_duration * (100 - co_discount)) / 100,
  //   });
  // }
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
