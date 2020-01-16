import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { serviceCategoryData } from '../../data';
import { ServiceCategory } from '../../list-service.model';
import { ServiceCategoryModalComponent } from '../service-category-modal/service-category-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-service-category-modal',
  templateUrl: './list-service-category-modal.component.html',
  styleUrls: ['./list-service-category-modal.component.scss']
})
export class ListServiceCategoryModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  serviceCategories: ServiceCategory[];
  selectedServiceCategory: ServiceCategory;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.loadServiceCategoryData();
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }

  onClickChoose() {
    this.passEvent.emit({ event: false });
  }

  onClickServiceCategory(serviceCategory: ServiceCategory) {
    if (isNullOrUndefined(this.selectedServiceCategory)) {
      this.selectedServiceCategory = serviceCategory;
    } else {
      if (
        this.selectedServiceCategory.service_category_id !==
        serviceCategory.service_category_id
      ) {
        this.selectedServiceCategory = serviceCategory;
      } else {
        this.selectedServiceCategory = null;
      }
    }
  }

  openServiceCategoryModal() {
    const modalRef = this.modalService.open(ServiceCategoryModalComponent, {
      centered: true
    });
    if (this.selectedServiceCategory) {
      modalRef.componentInstance.serviceCategory = this.selectedServiceCategory;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (this.selectedServiceCategory) {
          this.updateServiceCategory(this.selectedServiceCategory, res.form);
        } else {
          this.createServiceCategory(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa danh mục dịch vụ';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa danh mục dịch vụ đã chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeServiceCategory(this.selectedServiceCategory);
      }
      modalRef.close();
    });
  }

  private loadServiceCategoryData() {
    this.serviceCategories = serviceCategoryData;
  }

  private createServiceCategory(data: any) {}

  private updateServiceCategory(serviceCategoryId: any, data: any) {}

  private removeServiceCategory(serviceCategory: ServiceCategory) {}
}
