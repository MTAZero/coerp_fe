import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceModalComponent } from './component/service-modal/service-modal.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ServiceService } from '../../../core/services/api/service.service';
import Swal from 'sweetalert2';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent implements OnInit {
  private destroyed$ = new Subject();

  submitted: boolean;

  textSearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  selectedService = null;
  services: any[];

  constructor(private modalService: NgbModal, private serviceService: ServiceService) {}
  ngOnInit() {
    this._fetchData();
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

  openServiceModal(service?: any) {
    const modalRef = this.modalService.open(ServiceModalComponent, {
      centered: true,
      size: 'lg'
    });
    if (service) {
      this.onClickService(service);
      modalRef.componentInstance.service = service;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (service) {
          this._updateService(res.form);
        } else {
          this._createService(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(service?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa dịch vụ đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(result => {
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

  private _fetchData(selected?: any) {
    const service$ = this.serviceService
      .loadServices({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch
      })
      .pipe(takeUntil(this.destroyed$));
    service$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.services = res.Data.Results;

        if (selected) {
          this.selectedService = this.services.find(item => item.se_id === selected.se_id);
        } else {
          this.selectedService = this.services[0];
        }
      }
    });
  }

  private _createService(data: any) {
    const createTransacstion$ = this.serviceService
      .createService(data)
      .pipe(takeUntil(this.destroyed$));
    createTransacstion$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
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

  private _updateService(updated: any) {
    const updateService$ = this.serviceService
      .updateService(updated)
      .pipe(takeUntil(this.destroyed$));
    updateService$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this._fetchData(this.selectedService);
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      e => {
        this._notify(false, e.Message);
      }
    );
  }

  private _removeService(service: any) {
    const removeService$ = this.serviceService
      .removeService({
        serviceId: service.tra_id
      })
      .pipe(takeUntil(this.destroyed$));
    removeService$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
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
