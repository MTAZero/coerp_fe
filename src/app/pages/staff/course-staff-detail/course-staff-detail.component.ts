import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ServiceService } from '../../../core/services/api/service.service';
import Swal from 'sweetalert2';
import { CourseService } from 'src/app/core/services/api/course.service';
import { StaffService } from '../../../core/services/api/staff.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { timePeriod, menu, days } from './data';
@Component({
  selector: 'app-course-staff-detail',
  templateUrl: './course-staff-detail.component.html',
  styleUrls: ['./course-staff-detail.component.scss']
})
export class CourseStaffDetailComponent implements OnInit {
  listView = [true, true];
  se_id = null;
  tn_id = '';
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
    // if (this.tn_id === '')
    
    // this.timePeriod = timePeriod;
    // this.menu = menu;
    // this.days = days;
    this._initializeForm();
    // this._fetchFilter();

    // if (this.tn_id) this._fetchService(this.tn_id);
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
  onClickMenuItem(index: any) {
    this.selectedMenuItem = index;
    const el = document.getElementById(index);
    const content = document.getElementById('content');
    content.scroll({ top: el.offsetTop - 50, behavior: 'smooth' });
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

    const data = this.form.value;
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
      tn_content: ['', null],
      tn_start_date: ['', [Validators.required]],
      tn_end_date: ['', [Validators.required]],
      tn_purpose: ['', null],
     
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
      tn_start_date: training.tn_start_date,
      tn_end_date: training.tn_end_date,
      tn_purpose: training.tn_purpose,
     
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
