import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { StaffService } from '../../../core/services/api/staff.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { isNullOrUndefined, isUndefined } from 'util';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss'],
})
export class ListStaffComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();

  types: any;
  textSearch = '';
  statusSearch = '';
  workingStatusSearch = '';
  position = '';
  fromDate = this._convertDateToNgbDate(new Date('2010-01-01'));
  toDate = this._convertDateToNgbDate(new Date());
  page = 1;
  pageSize = 10;
  totalSize = 0;
  typeSearch = '';
  selectedDevice = null;
  selectedStaff = null;
  staffs: any;

  constructor(
    private modalService: NgbModal,
    private staffService: StaffService,
    private router: Router
  ) {}

  ngOnInit() {
    this._fetchData();
    this._fetchFilter();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  private _fetchFilter() {
    const type$ = this.staffService.loadType().pipe(takeUntil(this.destroyed$));

    type$.subscribe((res: any) => {
      this.types = res.Data;
    });
  }
  onClickStaff(staff: any) {
    if (isNullOrUndefined(this.selectedStaff)) {
      this.selectedStaff = staff;
    } else {
      if (this.selectedStaff.sta_id !== staff.sta_id) {
        this.selectedStaff = staff;
      } else {
        this.selectedStaff = null;
      }
    }
  }

  onRouteDetail(staff?: any) {
    this.router.navigate(['/staff/list-staff-detail', staff ? staff.sta_id : '']);
  }

  openConfirmModal(staff?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa nhân sự đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeStaff(staff);
      }
    });
  }

  onPageChange(page: number): void {
    this.page = page;
    this._fetchData();
  }

  onChangeFilter() {
    this._fetchData(this.selectedStaff);
  }

  onChangeAddress(event) {
    var updated = this.selectedStaff;
    updated.list_undertaken_location = event;
    this._updateStaff(updated);
  }

  onChangeTraining(event) {
    var updated = this.selectedStaff;
    updated.list_training = event;
    this._updateStaff(updated);
  }

  onChangeBank(event) {
    var updated = this.selectedStaff;
    updated.list_bank = event;
    this._updateStaff(updated);
  }

  onChangeRelative(event) {
    var updated = this.selectedStaff;
    updated.list_relatives = event;
    this._updateStaff(updated);
  }

  onChangeBonus(event) {
    var updated = this.selectedStaff;
    updated.list_bonus = event;
    this._updateStaff(updated);
  }

  onChangeAttachment(event) {
    var updated = this.selectedStaff;
    updated.list_attachments = event;
    this._updateStaff(updated);
  }
  onChangeDevice(event) {
    var updated = this.selectedStaff;
    updated.list_devices = event;
    this._updateStaff(updated);
  }

  setFile(event) {
    let files = event.srcElement.files;
    if (!files) {
      return;
    }
    const import$ = this.staffService.importStaff(files[0]).pipe(takeUntil(this.destroyed$));
    import$.subscribe(
      (res: any) => {
        if (res && res.Data == 200) {
          this._notify(true, res.Message);
          this._fetchData();
        } else this._notify(false, res.Message);
      },
      (e) => this._notify(false, e.Message)
    );
  }

  exportStaff() {
    const export$ = this.staffService
      .exportStaff({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        name: this.textSearch,
        status: this.statusSearch,
        // position_id: this.typeSearch,
        sta_working_status: this.workingStatusSearch,
        start_date: this._convertNgbDateToDate(this.fromDate),
        end_date: this._convertNgbDateToDate(this.toDate),
      })
      .pipe(takeUntil(this.destroyed$));
    export$.subscribe((res: any) => {
      if (res && res.Data) {
        const link = 'http://27.72.88.15:83/' + res.Data;
        window.open(link);
      }
    });
  }

  exportTemplate() {
    const export$ = this.staffService.exportTemplate().pipe(takeUntil(this.destroyed$));
    export$.subscribe((res: any) => {
      if (res && res.Data) {
        const link = 'http://27.72.88.15:83/' + res.Data;
        window.open(link);
      }
    });
  }

  private _fetchData(selected?: any) {
    const staff$ = this.staffService
      .searchStaff({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        name: this.textSearch,
        status: this.statusSearch,
        sta_working_status: this.workingStatusSearch,
        position_id: this.typeSearch,
        start_date: this._convertNgbDateToDate(this.fromDate),
        end_date: this._convertNgbDateToDate(this.toDate),
      })
      .pipe(takeUntil(this.destroyed$));
    staff$.subscribe((res: any) => {
      if (res) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.staffs = res.Data.Results;
        if (selected) {
          this.selectedStaff = this.staffs.find((item) => item.sta_id === selected.sta_id);
        } else {
          this.selectedStaff = this.staffs[0];
        }
      }
    });
  }

  private _updateStaff(updated: any) {
    const updateStaff$ = this.staffService.updateStaff(updated).pipe(takeUntil(this.destroyed$));
    updateStaff$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this._fetchData(this.selectedStaff);
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      (e) => this._notify(false, e.Message)
    );
  }

  private _removeStaff(staff: any) {
    const removeStaff$ = this.staffService
      .removeStaff({ staffId: staff.sta_id })
      .pipe(takeUntil(this.destroyed$));
    removeStaff$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this._fetchData();
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      (e) => this._notify(false, e.Message)
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
    return moment(newDate).format('YYYY-MM-DD');
  }
}
