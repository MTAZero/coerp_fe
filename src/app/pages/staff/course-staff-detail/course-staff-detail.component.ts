import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ServiceService } from '../../../core/services/api/service.service';
import Swal from 'sweetalert2';
import { CourseService } from 'src/app/core/services/api/course.service';
import { StaffService } from '../../../core/services/api/staff.service';
import { timePeriod, menu, days } from './data';

import { NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressService } from '../../../core/services/api/address.service';


import * as moment from 'moment';

import { isUndefined } from 'util';
@Component({
  selector: 'app-course-staff-detail',
  templateUrl: './course-staff-detail.component.html',
  styleUrls: ['./course-staff-detail.component.scss']
})
export class CourseStaffDetailComponent implements OnInit, OnDestroy {
  listView = [true];
  se_id = null;
  tn_id = '';
  isView = true;
  menu: any[];
  days: any[];
  private destroyed$ = new Subject();
  submitted = false;
  errorField = null;

  types: any;
  categories: any;
  selectedMenuItem = 0;
  form: FormGroup;
  formProfile: FormGroup;
  formAddress: FormGroup;
  timePeriod: any;
  formIdentityCard: FormGroup;
  formContractType: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private courseService: CourseService,
    // private staffService: StaffService,
    // private modalService: NgbModal,
    // private serviceService: ServiceService
  ) {}

  ngOnInit() {
    this.tn_id = this.route.snapshot.paramMap.get('tn_id');
    this._initializeForm();

    if (this.tn_id === '') this.listView = [false];
    if (this.tn_id) {
      this._fetchTraining(this.tn_id);
    }
  }
  
  switchViewType(index: number) {
    this.listView[index] = !this.listView[index];
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
 
  onChangeToMain() {
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
          this.router.navigate(['/staff/course-staff']);
        }
      });
    } else {
      this.router.navigate(['/staff/course-staff']);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;
    if (this.form.value.tn_name.trim() === '') {
      return this.form.controls['tn_name'].setErrors({ required: true });
    }
    if (this.form.value.tn_content.trim() === '') {
      return this.form.controls['tn_content'].setErrors({ required: true });
    }
    if (this.form.value.tn_purpose.trim() === '') {
      return this.form.controls['tn_purpose'].setErrors({ required: true });
    }

    const data = this.form.value;
    data.tn_start_date = this._convertNgbDateToDate(data.tn_start_date);
    data.tn_end_date = this._convertNgbDateToDate(data.tn_end_date);
    if (this.tn_id)
      this._updateTraining({
        ...data,
        tn_id: this.tn_id,
      });
    else this._createTraining(data);
  }

  //#region Private
  private _initializeForm() {
    this.form = this.formBuilder.group({
      tn_name: ['', [Validators.required]],
      tn_content: ['', [Validators.required]],
      tn_purpose: ['', [Validators.required]],
      tn_start_date: [this._convertDateToNgbDate(new Date(2020, 0, 1)), null],
      tn_end_date: [null, null],
      
     
    });
  }

  // private _fetchFilter() {
  //   const type$ = this.courseService.getType().pipe(takeUntil(this.destroyed$));
  //   type$.subscribe((res: any) => {
  //     this.types = res.Data;
  //   });

  //   const category$ = this.serviceService.getCategory().pipe(takeUntil(this.destroyed$));
  //   category$.subscribe((res: any) => {
  //     this.categories = res.Data;
  //   });
  // }

  private _fetchTraining(tn_id: any) {
    const info$ = this.courseService.loadTrainingInfo({ tn_id }).pipe(takeUntil(this.destroyed$));
    info$.subscribe((res: any) => {
      if (res && res.Data) {
        this._patchTraining(res.Data);
      }
    });
  }

  private _patchTraining(training: any) {
    this.form.patchValue({
      tn_name: training.tn_name,
      tn_content: training.tn_content,
      tn_start_date: this._convertDateToNgbDate(training.tn_start_date),
      tn_end_date: this._convertDateToNgbDate(training.tn_end_date),
      tn_purpose: training.tn_purpose
    });
  }

  private _createTraining(data: any) {
    const createTraining$ = this.courseService.
      createTraining(data).
      pipe(takeUntil(this.destroyed$));
    createTraining$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/staff/course-staff']);
        } else {
          this._notify(false, res.Message);
          this.errorField = res.Error;
        }
      },
      (e) => {
        this._notify(false, e.Message);
        this.errorField = e.Error;
      }
    );
  }

  private _updateTraining(updated: any) {
    const updateTraining$ = this.courseService
      .updateTraining(updated)
      .pipe(takeUntil(this.destroyed$));
    updateTraining$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/staff/course-staff']);
        } else {
          this._notify(false, res.Message);
          this.errorField = res.Error;
        }
      },
      (e) => {
        this._notify(false, e.Message);
        this.errorField = e.Error;
      }
    );
  }
  private _convertNgbDateToDate(ngbDate: any) {
    if (!ngbDate) {
      return '';
    }
    if (isUndefined(ngbDate.year)) return ngbDate;
    const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    return moment(newDate).format();
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
  //#endregion
}
