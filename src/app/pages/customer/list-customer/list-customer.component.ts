import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from './list-customer.model';
import { customerData } from './data';
import { CustomerModalComponent } from './component/customer-modal/customer-modal.component';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
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

  paginatedCustomerData: Array<Customer>;
  selectCustomer: Customer;
  customers: Array<Customer>;

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Khách hàng', path: '/' },
      { label: 'Danh sách khách hàng', path: '/', active: true }
    ];
    this._fetchData();
  }

  openCustomerModal(customer?: Customer) {
    const modalRef = this.modalService.open(CustomerModalComponent, {
      centered: true,
      size: 'lg'
    });
    if (customer) {
      modalRef.componentInstance.customer = customer;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (customer) {
          this.updateCustomer(customer, res.form);
        } else {
          this.createCustomer(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa khách hàng';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa khách hàng đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeCustomer();
      }
      modalRef.close();
    });
  }

  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    this.paginatedCustomerData = this.customers.slice(
      this.startIndex,
      this.endIndex
    );
  }

  private _fetchData() {
    this.customers = customerData;
    // apply pagination
    this.startIndex = 0;
    this.endIndex = this.pageSize;

    this.paginatedCustomerData = this.customers.slice(
      this.startIndex,
      this.endIndex
    );
    this.totalSize = this.customers.length;
  }

  private createCustomer(data: any) {
    this.submitted = true;
    this.totalSize = this.customers.length + 1;
    this.paginatedCustomerData = this.customers.slice(
      this.startIndex,
      this.endIndex
    );
  }

  private updateCustomer(staff: any, data: any) {}

  private removeCustomer() {}
}
