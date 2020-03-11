import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { TransactionService } from '../../../../../core/services/api/transaction.service';
import { CustomerService } from '../../../../../core/services/api/customer.service';
import { StaffService } from '../../../../../core/services/api/staff.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-customer-care-modal',
  templateUrl: './customer-care-modal.component.html',
  styleUrls: ['./customer-care-modal.component.scss']
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
  customers: any;
  staffs: any;
  searchCustomer = '';
  selectedCustomer: any;

  filterCustomer = {
    pageNumber: 0,
    pageSize: 100,
    source_id: '',
    cu_type: '',
    customer_group_id: '',
    name: ''
  };

  filterStaff = {
    pageNumber: 0,
    pageSize: 100,
    status: '',
    name: ''
  };

  constructor(
    public formBuilder: FormBuilder,
    private modalService: NgbModal,
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
  }

  onClickSubmit() {
    this.submitted = true;

    this.passEvent.emit({ event: true });
  }

  onClickCancel() {
    if (1) {
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

  changeDatalistCustomer(e: any) {
    if (e.target.value === '') {
      this.selectedCustomer = null;
    } else {
      this._fetchCustomer(e.target.value);
    }
  }

  changeDatalistAssigner(e: any) {}

  changeDatalistAssignee(e: any) {}

  private initializeForm() {
    this.form = this.formBuilder.group({
      tra_title: ['', null],
      tra_type: ['', null],
      tra_priority: ['', null],
      tra_content: ['', null],
      tra_rate: ['', null],
      tra_result: ['', null],
      tra_status: ['', null],
      staff_id: ['', null]
    });
  }

  private _fetchData(data: any) {
    console.log(data);
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
      staff_id: data.staff_id
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

    const customer$ = this.customerService
      .loadCustomer(this.filterCustomer)
      .pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      this.customers = res.Data.Results;
    });

    const staff$ = this.staffService.searchStaff(this.filterStaff).pipe(takeUntil(this.destroyed$));
    staff$.subscribe((res: any) => {
      this.staffs = res.Data.Results;
    });
  }

  private _fetchCustomer(cu_id: any) {
    const customer$ = this.transactionService
      .loadCustomer({ cu_id })
      .pipe(takeUntil(this.destroyed$));

    customer$.subscribe((res: any) => {
      this.selectedCustomer = res.Data;
      console.log(this.selectedCustomer);
    });
  }
}
