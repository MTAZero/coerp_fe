import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StaffModalComponent } from './component/staff-modal/staff-modal.component';
import { StaffService } from '../../../core/services/api/staff.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss']
})
export class ListStaffComponent implements OnInit {
  private destroyed$ = new Subject();

  textSearch = '';
  statusSearch = '';
  page = 1;
  pageSize = 10;
  totalSize = 0;

  selectedStaff = null;
  staffs: any;

  constructor(private modalService: NgbModal, private staffService: StaffService) {}

  ngOnInit() {
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
    Swal.fire({
      title: 'Chắc chắn muốn xóa nhân sự đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(result => {
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
    if (event.reload) {
      this._fetchData(this.selectedStaff);
    }
  }

  setFile(event) {
    let files = event.srcElement.files;
    if (!files) {
      return;
    }

    const import$ = this.staffService.importStaff(files[0]).pipe(takeUntil(this.destroyed$));
    import$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Nhập nhân sự thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this._fetchData();
        } else {
          Swal.fire({
            position: 'top-end',
            type: 'error',
            title: 'Nhập nhân sự thất bại',
            showConfirmButton: false,
            timer: 2000
          });
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Nhập nhân sự thất bại',
          showConfirmButton: false,
          timer: 2000
        });
      }
    );
  }

  exportStaff() {
    const export$ = this.staffService
      .exportStaff({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        name: this.textSearch,
        status: this.statusSearch
      })
      .pipe(takeUntil(this.destroyed$));
    export$.subscribe((res: any) => {
      if (res && res.Data) {
        const link = 'http://27.72.147.222:1230/' + res.Data;
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
        status: this.statusSearch
      })
      .pipe(takeUntil(this.destroyed$));
    staff$.subscribe((res: any) => {
      if (res) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.staffs = res.Data.Results;
        if (selected) {
          this.selectedStaff = this.staffs.find(item => item.sta_id === selected.sta_id);
        } else {
          this.selectedStaff = this.staffs[0];
        }
      }
    });
  }

  private _createStaff(data: any) {
    const createStaff$ = this.staffService.createStaff(data).pipe(takeUntil(this.destroyed$));
    createStaff$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this._fetchData();
          this.modalService.dismissAll();

          this.staffService
            .sendMailCreate({
              sta_username: data.sta_username,
              sta_email: data.sta_email
            })
            .subscribe(res => {
              console.log(res);
            });
        } else {
          this._notify(false, res.Message);
        }
      },
      e => {
        this._notify(false, e.Message);
      }
    );
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
      e => {
        this._notify(false, e.Message);
      }
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
      e => {
        this._notify(false, e.Message);
      }
    );
  }

  private _notify(isSuccess: boolean, message: string) {
    return Swal.fire({
      position: 'top-end',
      type: isSuccess ? 'success' : 'error',
      title: message,
      showConfirmButton: false,
      timer: 2000
    });
  }
}
