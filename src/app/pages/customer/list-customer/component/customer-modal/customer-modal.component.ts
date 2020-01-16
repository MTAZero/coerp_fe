import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from '../../list-customer.model';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ListSourceModalComponent } from '../list-source-modal/list-source-modal.component';
import { ListCustomerTypeModalComponent } from '../list-customer-type-modal/list-customer-type-modal.component';
import { ListCustomerGroupModalComponent } from '../list-customer-group-modal/list-customer-group-modal.component';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.scss']
})
export class CustomerModalComponent implements OnInit {
  @Input() customer: Customer;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder, private modalService: NgbModal) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.customer) {
      this.patchData(this.customer);
    }
  }

  openSourceModal() {
    const modalRef = this.modalService.open(ListSourceModalComponent, {
      centered: true
    });
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  openCustomerTypeModal() {
    const modalRef = this.modalService.open(ListCustomerTypeModalComponent, {
      centered: true
    });
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  openCustomerGroupModal() {
    const modalRef = this.modalService.open(ListCustomerGroupModalComponent, {
      centered: true
    });
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  onClickSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      this.passEvent.emit({ event: true, form: this.form.value });
    }
  }

  onClickCancel() {
    if (this.form.dirty) {
      const modalRef = this.modalService.open(ConfirmModalComponent, {
        centered: true
      });
      modalRef.componentInstance.title = 'Thông báo';
      modalRef.componentInstance.message =
        'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?';
      modalRef.componentInstance.passEvent.subscribe(res => {
        if (res) {
          this.passEvent.emit({ event: false });
        }
        modalRef.close();
      });
    } else {
      this.passEvent.emit({ event: false });
    }
  }

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      customer_name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      customer_type: ['', [Validators.required]],
      customer_group: ['', [Validators.required]],
      source: ['', null],
      dob: [null, null],
      address: ['', null],
      position: ['', null]
    });
  }

  private patchData(customer: Customer) {
    this.form.patchValue({
      customer_name: customer.customer_name,
      phone: customer.phone,
      email: customer.email,
      customer_type: customer.customer_type,
      customer_group: customer.customer_group,
      source: customer.source,
      dob: customer.dob,
      address: customer.address,
      position: customer.position
    });
  }
}
