import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ServiceService } from '../../../core/services/api/service.service';
import Swal from 'sweetalert2';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { NgbModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { isUndefined } from 'util';
@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss'],
})
export class ListServiceComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  submitted: boolean;
  textSearch = '';
  page = 1;
  pageSize = 10;
  totalSize = 0;
  fromDate = this._convertDateToNgbDate(new Date('2010-01-01'));
  toDate = this._convertDateToNgbDate(new Date());
  selectedService = null;
  services: any[];

  constructor(
    private serviceService: ServiceService, 
    private router: Router,
    private modalService: NgbModal) {}
  ngOnInit() {
    this._fetchData();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onClickService(service: any) {
    if (isNullOrUndefined(this.selectedService)) {
      this.selectedService = service;
    } else {
      if (this.selectedService.se_id !== service.se_id) {
        this.selectedService = service;
      } else {
        this.selectedService = null;
      }
    }
  }

  onRouteDetail(service?: any) {
    this.router.navigate([
      '/service/list-service-detail', service ? service.se_id : '']);
  }
  
  openConfirmModal(service?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa dịch vụ đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeService(service);
      }
    });
  }

  onPageChange(page: number): void {
    this.page = page;
    this._fetchData();
  }

  onChangeFilter() {
    this._fetchData(this.selectedService);
  }

  // readURL(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //     // const file = event.target.files[0];
  //     // const import$ = this.customerService
  //     //   .updateAvatar(file, this.selectedCustomer.cu_id)
  //     //   .pipe(takeUntil(this.destroyed$));
  //     // import$.subscribe(
  //     //   (res: any) => {
  //     //     if (res && res.Code === 200) {
  //     //       this._notify(true, res.Message);
  //     //       this._fetchData(this.selectedCustomer);
  //     //     } else this._notify(false, res.Message);
  //     //   },
  //     //   e => this._notify(false, e.Message)
  //     // );
  //     // const reader = new FileReader();
  //     // reader.onload = e => (this.thumbnail = reader.result);
  //     // reader.readAsDataURL(file);
  //   }
  // }

  private _fetchData(selected?: any) {
    const service$ = this.serviceService
      .searchService({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch,
      
      })
      .pipe(takeUntil(this.destroyed$));
    service$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.services = res.Data.Results;

        if (selected) {
          this.selectedService = this.services.find(
            (item) => item.se_id === selected.se_id);
        } else {
          this.selectedService = this.services[0];
        }
      }
    });
  }
  private _updateService(updated: any) {
    const updateTraining$ = this.serviceService
      .updateService(updated)
      .pipe(takeUntil(this.destroyed$));
    updateTraining$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this._fetchData(this.selectedService);
        } else this._notify(false, res.Message);
      },
      (e) => this._notify(false, e.Message)
    );
  }
  private _removeService(service: any) {
    const removeService$ = this.serviceService
      .removeService({
        serviceId: service.se_id,
      })
      .pipe(takeUntil(this.destroyed$));
    removeService$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this._fetchData();
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
