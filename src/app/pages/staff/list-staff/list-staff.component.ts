import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Staff } from './list-staff.model';
import { contactData } from './data';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { StaffModalComponent } from './component/staff-modal/staff-modal.component';
import { StaffService } from '../../../core/services/api/staff.service';
import { takeUntil, catchError } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';

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
  page = 1;
  pageSize = 10;

  // start and end index
  startIndex = 1;
  endIndex = 10;
  totalSize = 0;

  paginatedStaffData: Array<Staff>;
  selectStaff: Staff;
  staffs: Array<Staff>;

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

    const test$ = this.staffService
      .loadStaffPaged({
        pagenumber: 0,
        pagesize: 10
      })
      .pipe(takeUntil(this.destroyed$));
    test$.subscribe(res => {
      console.log(res);
    });
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
          this.createStaff(res.form);
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

  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    this.paginatedStaffData = this.staffs.slice(this.startIndex, this.endIndex);
  }

  private _fetchData() {
    this.staffs = contactData;
    // apply pagination
    this.startIndex = 0;
    this.endIndex = this.pageSize;

    this.paginatedStaffData = this.staffs.slice(this.startIndex, this.endIndex);
    this.totalSize = this.staffs.length;
  }

  private createStaff(data: any) {
    this.submitted = true;
    this.totalSize = this.staffs.length + 1;
    this.paginatedStaffData = this.staffs.slice(this.startIndex, this.endIndex);
  }

  private updateStaff(staff: any, data: any) {}

  private removeStaff() {}
}
