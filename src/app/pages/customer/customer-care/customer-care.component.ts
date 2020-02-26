import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { CustomerCareModalComponent } from './component/customer-care-modal/customer-care-modal.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-customer-care',
  templateUrl: './customer-care.component.html',
  styleUrls: ['./customer-care.component.scss']
})
export class CustomerCareComponent implements OnInit {
  private destroyed$ = new Subject();
  breadCrumbItems: Array<{}>;

  submitted: boolean;

  textSearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  customerCares = [
    {
      title: 'Lam viec voi chi Ha',
      content: 'Gioi thieu san pham moi',
      rate: 'Dat ket qua cao',
      type: 'Goi dien truc tiep',
      result: 'Tiep tuc su dung san pham',
      priority: 'Cao nhat',
      assignee: 'Tran Van Ba',
      customer: 'Ba Van Dao',
      status: 'Da hoan thanh'
    },
    {
      title: 'Lam viec voi chi Ha',
      content: 'Gioi thieu san pham moi',
      rate: 'Dat ket qua cao',
      type: 'Goi dien truc tiep',
      result: 'Tiep tuc su dung san pham',
      priority: 'Cao nhat',
      assignee: 'Tran Van Ba',
      customer: 'Ba Van Dao',
      status: 'Da hoan thanh'
    },
    {
      title: 'Lam viec voi chi Ha',
      content: 'Gioi thieu san pham moi',
      rate: 'Dat ket qua cao',
      type: 'Goi dien truc tiep',
      result: 'Tiep tuc su dung san pham',
      priority: 'Cao nhat',
      assignee: 'Tran Van Ba',
      customer: 'Ba Van Dao',
      status: 'Da hoan thanh'
    },
    {
      title: 'Lam viec voi chi Ha',
      content: 'Gioi thieu san pham moi',
      rate: 'Dat ket qua cao',
      type: 'Goi dien truc tiep',
      result: 'Tiep tuc su dung san pham',
      priority: 'Cao nhat',
      assignee: 'Tran Van Ba',
      customer: 'Ba Van Dao',
      status: 'Da hoan thanh'
    }
  ];

  constructor(private modalService: NgbModal, public formBuilder: FormBuilder) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Khách hàng', path: '/' },
      { label: 'Giao dịch khách hàng', path: '/', active: true }
    ];
    this._fetchData();
  }

  openCustomerCareModal(customerCare?: any) {
    const modalRef = this.modalService.open(CustomerCareModalComponent, {
      centered: true,
      size: 'xl'
    });
    if (customerCare) {
      modalRef.componentInstance.customerCare = customerCare;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (customerCare) {
          this._updateCustomerCare(res.form);
        } else {
          this._createCustomerCare(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(customerCare?: any) {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa giao dịch khách hàng';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa giao dịch khách hàng đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this._removeCustomerCare(customerCare);
      }
      modalRef.close();
    });
  }

  onPageChange(page: number): void {
    this.page = page - 1;
    this._fetchData();
  }

  onChangeFilter() {
    this.page--;
    this._fetchData();
  }

  private _fetchData() {}

  private _createCustomerCare(data: any) {}

  private _updateCustomerCare(updated: any) {}

  private _removeCustomerCare(customerCare: any) {}
}
