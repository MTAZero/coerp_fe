import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Service } from './list-service.model';
import { serviceData } from './data';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { ServiceModalComponent } from './component/service-modal/service-modal.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent implements OnInit {
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

  paginatedServiceData: Array<Service>;
  selectedService: Service;
  services: Array<Service>;

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Dịch vụ', path: '/' },
      { label: 'Danh sách dịch vụ', path: '/', active: true }
    ];
    this._fetchData();
  }

  onClickService(service: any) {
    if (isNullOrUndefined(this.selectedService)) {
      this.selectedService = service;
    } else {
      if (this.selectedService.service_id !== service.service_id) {
        this.selectedService = service;
      } else {
        this.selectedService = null;
      }
    }
  }

  openServiceModal(service?: Service) {
    const modalRef = this.modalService.open(ServiceModalComponent, {
      centered: true,
      size: 'lg'
    });
    if (service) {
      modalRef.componentInstance.service = service;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (service) {
          this.updateService(service, res.form);
        } else {
          this.createService(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa dịch vụ';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa dịch vụ đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeService();
      }
      modalRef.close();
    });
  }

  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    this.paginatedServiceData = this.services.slice(
      this.startIndex,
      this.endIndex
    );
  }

  private _fetchData() {
    this.services = serviceData;
    // apply pagination
    this.startIndex = 0;
    this.endIndex = this.pageSize;

    this.paginatedServiceData = this.services.slice(
      this.startIndex,
      this.endIndex
    );
    this.totalSize = this.services.length;
  }

  private createService(data: any) {
    this.submitted = true;
    this.totalSize = this.services.length + 1;
    this.paginatedServiceData = this.services.slice(
      this.startIndex,
      this.endIndex
    );
  }

  private updateService(service: any, data: any) {}

  private removeService() {}
}
