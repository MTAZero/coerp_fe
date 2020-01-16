import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { customerGroupData } from '../../data';
import { CustomerGroup } from '../../list-customer.model';
import { CustomerGroupModalComponent } from '../customer-group-modal/customer-group-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-customer-group-modal',
  templateUrl: './list-customer-group-modal.component.html',
  styleUrls: ['./list-customer-group-modal.component.scss']
})
export class ListCustomerGroupModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  customerGroups: CustomerGroup[];
  selectedCustomerGroup: CustomerGroup;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.loadCustomerGroupData();
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }

  onClickChoose() {
    this.passEvent.emit({ event: false });
  }

  onClickCustomerGroup(customerGroup: CustomerGroup) {
    if (isNullOrUndefined(this.selectedCustomerGroup)) {
      this.selectedCustomerGroup = customerGroup;
    } else {
      if (this.selectedCustomerGroup.group_id !== customerGroup.group_id) {
        this.selectedCustomerGroup = customerGroup;
      } else {
        this.selectedCustomerGroup = null;
      }
    }
  }

  openCustomerGroupModal() {
    const modalRef = this.modalService.open(CustomerGroupModalComponent, {
      centered: true
    });
    if (this.selectedCustomerGroup) {
      modalRef.componentInstance.customerGroup = this.selectedCustomerGroup;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (this.selectedCustomerGroup) {
          this.updateCustomerGroup(this.selectedCustomerGroup, res.form);
        } else {
          this.createCustomerGroup(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa nhóm khách hàng';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa nhóm khách hàng đã chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeCustomerGroup(this.selectedCustomerGroup);
      }
      modalRef.close();
    });
  }

  private loadCustomerGroupData() {
    this.customerGroups = customerGroupData;
  }

  private createCustomerGroup(data: any) {}

  private updateCustomerGroup(customerGroupId: any, data: any) {}

  private removeCustomerGroup(customerGroup: CustomerGroup) {}
}
