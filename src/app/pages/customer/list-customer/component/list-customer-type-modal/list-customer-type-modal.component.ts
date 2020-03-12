import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerTypeModalComponent } from '../customer-type-modal/customer-type-modal.component';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-customer-type-modal',
  templateUrl: './list-customer-type-modal.component.html',
  styleUrls: ['./list-customer-type-modal.component.scss']
})
export class ListCustomerTypeModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  customerTypes: any[];
  selectedCustomerType: any;
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

  onClickCustomerType(customerType: any) {
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

  private loadCustomerTypeData() {
    this.customerTypes = [];
  }

  private createCustomerType(data: any) {}

  private updateCustomerType(customerTypeId: any, data: any) {}

  private removeCustomerType(customerType: any) {}
}
