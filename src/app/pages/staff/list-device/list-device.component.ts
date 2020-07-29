import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TransactionService } from '../../../core/services/api/transaction.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { isNullOrUndefined, isUndefined } from 'util';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/api/course.service';
import { DeviceService } from 'src/app/core/services/api/device.service';

@Component({
  selector: 'app-list-device',
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.scss']
})
export class ListDeviceComponent implements OnInit {

  private destroyed$ = new Subject();

  submitted: boolean;
  sources: any;
  devices: any;
  trainings: any;
  groups: any;
  types: any;
  textSearch = '';
  fromDate = this._convertDateToNgbDate(new Date('2010-01-01'));
  toDate = this._convertDateToNgbDate(new Date());
  page = 1;
  pageSize = 10;
  totalSize = 0;
  selectedDevice= null;
  transactions: any[];
  selectedTraining = null;

  constructor(
    // private modalService: NgbModal,
    // private transactionService: TransactionService,
    private modalService: NgbModal,
    private courseService: CourseService,
    private deviceService: DeviceService,
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
    const sources$ = this.courseService.loadSource().pipe(takeUntil(this.destroyed$));

    sources$.subscribe((res: any) => {
      this.sources = res.Data;
    });

    const group$ = this.courseService.loadGroup().pipe(takeUntil(this.destroyed$));

    group$.subscribe((res: any) => {
      this.groups = res.Data;
    });

    const type$ = this.courseService.loadType().pipe(takeUntil(this.destroyed$));

    type$.subscribe((res: any) => {
      this.types = res.Data;
    });
  }

  // onClickOrder(transaction: any) {
  //   if (isNullOrUndefined(this.selectedTraining)) {
  //     this.selectedTraining = transaction;
  //   } else {
  //     if (this.selectedTraining.tra_id !== transaction.tra_id) {
  //       this.selectedTraining = transaction;
  //     } else {
  //       this.selectedTraining = null;
  //     }
  //   }
  // }
  onClickDevice(device: any) {
    if (isNullOrUndefined(this.selectedDevice)) {
      this.selectedDevice = device;
    } else {
      if (this.selectedDevice.dev_id !== device.dev_id) {
        this.selectedDevice = device;
      } else {
        this.selectedDevice = null;
      }
    }
  }
  // onRouteDetail(transaction?: any) {
  //   this.router.navigate([
  //     '/staff/course-staff-detail',
  //     transaction ? transaction.tra_id : '',
  //   ]);
  // }
  
  onRouteDetail(device?: any) {
    this.router.navigate([
      '/staff/list-device-detail',
      device ? device.dev_id : '',
    ]);
  }

  openConfirmModal(device?: any) {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xóa vật tư vừa chọn không?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeDevice(device);
      }
    });
  }

  onPageChange(page: number): void {
    this.page = page;
    this._fetchData();
  }

  onChangeFilter() {
    this._fetchData(this.selectedDevice);
  }

  // exportTraining() {
  //   const export$ = this.courseService
  //     .exportTraining({
  //       pageNumber: this.page - 1,
  //       pageSize: this.pageSize,
  //       search_name: this.textSearch,
  //       start_date: this._convertNgbDateToDate(this.fromDate),
  //       end_date: this._convertNgbDateToDate(this.toDate),
  //     })
  //     .pipe(takeUntil(this.destroyed$));
  //   export$.subscribe((res: any) => {
  //     if (res && res.Data) {
  //       const link = 'http://27.72.147.222:1230/' + res.Data;
  //       window.open(link);
  //     }
  //   });
  // }

  private _fetchData(selected?: any) {
    const device$ = this.deviceService
      .searchDevice({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch,
      
      })
      .pipe(takeUntil(this.destroyed$));
    device$.subscribe((res: any) => {
      if (res) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.devices = res.Data.Results;

        if (selected) {
          this.selectedDevice = this.devices.find(
            (item) => item.dev_id === selected.dev_id
          );
        } else {
          this.selectedDevice = this.devices[0];
        }
      }
    });
  }
  private _updateDevice(updated: any) {
    const updateDevice$ = this.deviceService
      .updateDevice(updated)
      .pipe(takeUntil(this.destroyed$));
    updateDevice$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this._fetchData(this.selectedDevice);
        } else this._notify(false, res.Message);
      },
      (e) => this._notify(false, e.Message)
    );
  }
 
  private _removeDevice(device: any) {
    const removeDevice$ = this.deviceService
      .removeDevice({
        dev_id: device.dev_id,
      })
      .pipe(takeUntil(this.destroyed$));
    removeDevice$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this._fetchData();
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      (e) => {
        this._notify(false, e.Message);
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
