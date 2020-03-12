import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerGroupModalComponent } from '../customer-group-modal/customer-group-modal.component';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-customer-group-modal',
  templateUrl: './list-customer-group-modal.component.html',
  styleUrls: ['./list-customer-group-modal.component.scss']
})
export class ListCustomerGroupModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  customerGroups: any[];
  selectedCustomerGroup: any;
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

  onClickCustomerGroup(customerGroup: any) {
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
    Swal.fire({
      title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Có',
      cancelButtonText: 'Không',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(result => {
      if (result.value) {
        this.passEvent.emit({ event: false });
      }
    });
  }

  private loadCustomerGroupData() {
    this.customerGroups = [];
  }

  private createCustomerGroup(data: any) {}

  private updateCustomerGroup(customerGroupId: any, data: any) {}

  private removeCustomerGroup(customerGroup: any) {}
}
