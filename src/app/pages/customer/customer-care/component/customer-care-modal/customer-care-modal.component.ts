import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionService } from '../../../../../core/services/api/transaction.service';
import { CustomerService } from '../../../../../core/services/api/customer.service';
import { StaffService } from '../../../../../core/services/api/staff.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
  selector: 'app-customer-care-modal',
  templateUrl: './customer-care-modal.component.html',
  styleUrls: ['./customer-care-modal.component.scss'],
})
export class CustomerCareModalComponent implements OnInit {
  private destroyed$ = new Subject();

  @Input() transaction: any;
  @Input() isView: boolean;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  submitted = false;
  types: any;
  priorities: any;
  statuses: any;
  rates: any;
  customers: any;
  staffs: any;
  searchCustomer = '';
  selectedCustomer: any;

  currentStaff = '';

  filterCustomer = {
    pageNumber: 0,
    pageSize: 100,
    source_id: '',
    cu_type: '',
    customer_group_id: '',
    name: '',
    start_date: '2010-01-01',
    end_date: moment(new Date()).format('YYYY-MM-DD'),
  };

  constructor(
    public formBuilder: FormBuilder,
    private transactionService: TransactionService,
    private customerService: CustomerService,
    private staffService: StaffService
  ) {
    this.initializeForm();
    this._fetchFilter();
  }

  ngOnInit() {
    if (this.transaction) {
      this._fetchData(this.transaction);
    }
    this.currentStaff = localStorage.getItem('userName');
  }

  onClickSubmit() {
    this.submitted = true;
    let data = {
      customer: this.selectedCustomer,
      ...this.form.value,
    };

    this.passEvent.emit({ event: true, data });
  }

  onClickCancel() {
    if (this.form.dirty) {
      Swal.fire({
        title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Có',
        cancelButtonText: 'Không',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.value) {
          this.passEvent.emit({ event: false });
        }
      });
    } else {
      this.passEvent.emit({ event: false });
    }
  }

  changeDatalistCustomer(e: any) {
    if (e.target.value === '') {
      this.selectedCustomer = null;
    } else {
      this._fetchCustomer(e.target.value);
    }
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      tra_id: ['', null],
      tra_title: ['', null],
      tra_type: ['', null],
      tra_priority: ['', null],
      tra_content: ['', null],
      tra_rate: ['', null],
      tra_result: ['', null],
      tra_status: ['', null],
    });
  }

  private _fetchData(data: any) {
    this.searchCustomer = data.customer.cu_id;
    this.selectedCustomer = this.transaction.customer;
    this.form.patchValue({
      tra_title: data.tra_title,
      tra_type: data.tra_type,
      tra_priority: data.tra_priority,
      tra_content: data.tra_content,
      tra_rate: data.tra_rate,
      tra_result: data.tra_result,
      tra_status: data.tra_status,
      tra_id: data.tra_id,
    });
  }

  private _fetchFilter() {
    const type$ = this.transactionService.loadType().pipe(takeUntil(this.destroyed$));
    type$.subscribe((res: any) => {
      this.types = res.Data;
    });

    const status$ = this.transactionService.loadStatus().pipe(takeUntil(this.destroyed$));
    status$.subscribe((res: any) => {
      this.statuses = res.Data;
    });

    const priority$ = this.transactionService.loadPriority().pipe(takeUntil(this.destroyed$));
    priority$.subscribe((res: any) => {
      this.priorities = res.Data;
    });

    const rate$ = this.transactionService.loadRate().pipe(takeUntil(this.destroyed$));
    rate$.subscribe((res: any) => {
      this.rates = res.Data;
    });

    const customer$ = this.customerService
      .loadCustomer(this.filterCustomer)
      .pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      this.customers = res.Data.Results;
    });

    const staff$ = this.staffService.loadAllStaff().pipe(takeUntil(this.destroyed$));
    staff$.subscribe((res: any) => {
      this.staffs = res.Data;
    });
  }

  private _fetchCustomer(cu_id: any) {
    const customer$ = this.transactionService
      .loadCustomer({ cu_id })
      .pipe(takeUntil(this.destroyed$));

    customer$.subscribe((res: any) => {
      this.selectedCustomer = res.Data;
    });
  }
}
