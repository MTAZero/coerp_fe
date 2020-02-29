import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
export class ListStaffComponent implements OnInit {
  private destroyed$ = new Subject();
  breadCrumbItems: Array<{}>;

  textSearch = '';
  statusSearch = '';
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

  openStaffModal(staff?: any) {
    const modalRef = this.modalService.open(StaffModalComponent, {
      centered: true,
      size: 'lg'
    });

    if (staff) {
      this.onClickStaff(staff);
      modalRef.componentInstance.staff = staff;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (staff) {
          this._updateStaff(res.form);
        } else {
          this._createStaff(res.form);
        }
      } else {
        modalRef.close();
      }
    });
  }

  openConfirmModal(staff?: any) {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    this.onClickStaff(staff);
    modalRef.componentInstance.title = 'Xác nhận xóa nhân sự';
    modalRef.componentInstance.message = 'Bạn có chắc chắn muốn xóa nhân sự đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this._removeStaff(staff);
      } else {
        modalRef.close();
      }
    });
  }

  onPageChange(page: number): void {
    this.page = page - 1;
    this._fetchData();
  }

  onChangeFilter() {
    this.page--;
    this._fetchData();
  }

  onChangeAddress(event) {
    if (event.reload) {
      this.page--;
      this._fetchData(this.selectedStaff);
    }
  }

  private _fetchData(selected?: any) {
    const staff$ = this.staffService
      .searchStaff({
        pageNumber: this.page,
        pageSize: this.pageSize,
        name: this.textSearch,
        status: this.statusSearch
      })
      .pipe(takeUntil(this.destroyed$));
    staff$.subscribe((res: any) => {
      if (res) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.staffs = res.Data.Results;

        if (selected) {
          this.selectedStaff = this.staffs.find(item => item.sta_id === selected.sta_id);
        }
      }
    });
  }

  private _createStaff(data: any) {
    const createStaff$ = this.staffService.createStaff(data).pipe(takeUntil(this.destroyed$));
    createStaff$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _updateStaff(updated: any) {
    const updateStaff$ = this.staffService.updateStaff(updated).pipe(takeUntil(this.destroyed$));
    updateStaff$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _removeStaff(staff: any) {
    const removeStaff$ = this.staffService
      .removeStaff({ staffId: staff.sta_id })
      .pipe(takeUntil(this.destroyed$));
    removeStaff$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }
}
