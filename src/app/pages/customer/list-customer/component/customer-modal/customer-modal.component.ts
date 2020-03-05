import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../../../../../core/services/api/customer.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ListSourceModalComponent } from '../list-source-modal/list-source-modal.component';
import { ListCustomerTypeModalComponent } from '../list-customer-type-modal/list-customer-type-modal.component';
import { ListCustomerGroupModalComponent } from '../list-customer-group-modal/list-customer-group-modal.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.scss']
})
export class CustomerModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() customer: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  sources: any;
  types: any;
  groups: any;

  constructor(
    public formBuilder: FormBuilder,
    private modalService: NgbModal,
    private customerService: CustomerService
  ) {
    this.initializeForm();
    this._fetchFilter();
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
      const data = this.form.value;
      data.cu_birthday = this._convertNgbDateToDate(data.cu_birthday);
      this.passEvent.emit({ event: true, form: data });
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
      cu_id: ['', null],
      cu_mobile: ['', [Validators.required]],
      cu_email: ['', [Validators.required]],
      cu_fullname: ['', [Validators.required]],
      cu_type: ['', [Validators.required]],
      cu_address: ['', null],
      cu_geocoding: ['', null],
      customer_group_id: ['', [Validators.required]],
      source_id: ['', [Validators.required]],
      cu_birthday: [null, null]
    });
  }

  private patchData(customer: any) {
    this.form.patchValue({
      cu_id: customer.cu_id,
      cu_mobile: customer.cu_mobile,
      cu_email: customer.cu_email,
      cu_fullname: customer.cu_fullname,
      cu_type: customer.cu_type,
      cu_address: customer.cu_address,
      cu_geocoding: customer.cu_geocoding,
      customer_group_id: customer.customer_group_id,
      source_id: customer.source_id,
      cu_birthday: this._convertDateToNgbDate(customer.cu_birthday)
    });
  }

  private _fetchFilter() {
    const sources$ = this.customerService.loadSourceFilter().pipe(takeUntil(this.destroyed$));

    sources$.subscribe((res: any) => {
      this.sources = res.Data;
    });

    const type$ = this.customerService.loadTypeFilter().pipe(takeUntil(this.destroyed$));

    type$.subscribe((res: any) => {
      this.types = res.Data;
    });

    const group$ = this.customerService.loadGroupFilter().pipe(takeUntil(this.destroyed$));

    group$.subscribe((res: any) => {
      this.groups = res.Data;
    });
  }

  private _convertDateToNgbDate(date: any) {
    if (!date) {
      return null;
    }
    const year = moment(date).year();
    const month = moment(date).month() + 1;
    const day = moment(date).date();
    return new NgbDate(year, month, day);
  }

  private _convertNgbDateToDate(ngbDate: any) {
    if (!ngbDate) {
      return '';
    }
    const newDate = new Date(ngbDate.year, ngbDate.month, ngbDate.day);
    return moment(newDate).format();
  }
}
