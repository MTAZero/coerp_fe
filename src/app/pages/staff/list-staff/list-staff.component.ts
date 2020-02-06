import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Staff } from './list-staff.model';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { StaffModalComponent } from './component/staff-modal/staff-modal.component';
import { StaffService } from '../../../core/services/api/staff.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss']
})

/**
 * Staffs component
 */
export class ListStaffComponent implements OnInit {
  private destroyed$ = new Subject();
  // bread crumb items
  breadCrumbItems: Array<{}>;

  submitted: boolean;
  term: any;

  page = 0;
  pageSize = 10;
  totalSize = 0;

  selectedStaff = null;
  staffs: any;

  constructor(
    private modalService: NgbModal,
    private staffService: StaffService,
    public formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Nhân sự', path: '/' },
      { label: 'Danh sách nhân sự', path: '/', active: true }
    ];
    this._fetchData();
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

  openStaffModal(staff?: Staff) {
    const modalRef = this.modalService.open(StaffModalComponent, {
      centered: true,
      size: 'lg'
    });
    if (staff) {
      modalRef.componentInstance.staff = staff;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (staff) {
          this.updateStaff(staff, res.form);
        } else {
          this.createStaff();
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa nhân sự';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa nhân sự đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeStaff();
      }
      modalRef.close();
    });
  }

  onPageChange(): void {
    // console.log(page);
  }

  private _fetchData() {
    const staff$ = this.staffService
      .loadStaffPaged({
        pagenumber: this.page,
        pagesize: this.pageSize
      })
      .pipe(takeUntil(this.destroyed$));
    staff$.subscribe((res: any) => {
      if (res) {
        this.totalSize = res.Data.TotalNumberOfPages;
        this.staffs = res.Data.Results;
      }
    });
  }

  private createStaff() {}

  private updateStaff(current: any, updated: any) {
    console.log(current, updated);

    const updateStaff$ = this.staffService
      .updateStaff({ sta_id: current.sta_id }, updated)
      .pipe(takeUntil(this.destroyed$));
    updateStaff$.subscribe((res: any) => {
      if (res) {
        console.log(res);
      }
    });
  }

  private removeStaff() {}
}
