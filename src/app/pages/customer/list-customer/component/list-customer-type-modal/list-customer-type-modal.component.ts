import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { customerTypeData } from '../../data';
import { CustomerType } from '../../list-customer.model';
import { CustomerTypeModalComponent } from '../customer-type-modal/customer-type-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-customer-type-modal',
  templateUrl: './list-customer-type-modal.component.html',
  styleUrls: ['./list-customer-type-modal.component.scss']
})
export class ListCustomerTypeModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  customerTypes: CustomerType[];
  selectedCustomerType: CustomerType;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.loadCustomerTypeData();
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }

  onClickChoose() {
    this.passEvent.emit({ event: false });
  }

  onClickCustomerType(customerType: CustomerType) {
    if (isNullOrUndefined(this.selectedCustomerType)) {
      this.selectedCustomerType = customerType;
    } else {
      if (this.selectedCustomerType.type_id !== customerType.type_id) {
        this.selectedCustomerType = customerType;
      } else {
        this.selectedCustomerType = null;
      }
    }
  }

  openCustomerTypeModal() {
    const modalRef = this.modalService.open(CustomerTypeModalComponent, {
      centered: true
    });
    if (this.selectedCustomerType) {
      modalRef.componentInstance.customerType = this.selectedCustomerType;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (this.selectedCustomerType) {
          this.updateCustomerType(this.selectedCustomerType, res.form);
        } else {
          this.createCustomerType(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa loại khách hàng';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa loại khách hàng đã chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeCustomerType(this.selectedCustomerType);
      }
      modalRef.close();
    });
  }

  private loadCustomerTypeData() {
    this.customerTypes = customerTypeData;
  }

  private createCustomerType(data: any) {}

  private updateCustomerType(customerTypeId: any, data: any) {}

  private removeCustomerType(customerType: CustomerType) {}
}
