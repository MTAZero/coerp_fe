import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../../../core/services/api/transaction.service';
import { CustomerService } from '../../../core/services/api/customer.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-transaction-service-detail',
  templateUrl: './list-transaction-service-detail.component.html',
  styleUrls: ['./list-transaction-service-detail.component.scss'],
})
export class ListTransactionServiceDetailComponent implements OnInit, OnDestroy {
  tra_id = null;
  private destroyed$ = new Subject();
  submitted = false;
  errorField = null;
  isView = true;

  types: any;
  priorities: any;
  statuses: any;
  rates: any;
  customers: any;
  listView = [true];
  form: FormGroup;

  searchCustomer = '';
  selectedCustomer = null;
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
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private transactionService: TransactionService,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.tra_id = this.route.snapshot.paramMap.get('tra_id');
    if (this.tra_id === '') this.isView = false;

    this.initializeForm();
    this._fetchFilter();

    if (this.tra_id) this._fetchTransaction(this.tra_id);
    this.currentStaff = localStorage.getItem('userName');
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onChangeToMain() {
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
          this.router.navigate(['/customer/list-transaction-service']);
        }
      });
    } else {
      this.router.navigate(['/customer/list-transaction-service']);
    }
  }
  switchViewType(index: number) {
    this.listView[index] = !this.listView[index];
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;
    if (this.selectedCustomer === null) return this._notify(false, 'Chưa chọn khách hàng chăm sóc');
    if (this.form.value.tra_title.trim() === '') {
      return this.form.controls['tra_title'].setErrors({ required: true });
    }
    if (this.form.value.tra_content.trim() === '') {
      return this.form.controls['tra_content'].setErrors({ required: true });
    }
    if (this.form.value.tra_result.trim() === '') {
      return this.form.controls['tra_result'].setErrors({ required: true });
    }

    let data = {
      customer: this.selectedCustomer,
      ...this.form.value,
    };
    console.log(data);
    if (this.tra_id)
      this._updateTransaction({
        ...data,
        tra_id: this.tra_id,
      });
    else this._createTransaction(data);
  }

  changeDatalistCustomer(e: any) {
    if (e.target.value === '') {
      this.selectedCustomer = null;
    } else {
      this._fetchCustomer(e.target.value);
    }
  }

  //#region  Private
  private initializeForm() {
    this.form = this.formBuilder.group({
      tra_title: ['', [Validators.required]],
      tra_type: ['', [Validators.required]],
      tra_priority: ['', [Validators.required]],
      tra_content: ['', [Validators.required]],
      tra_rate: ['', [Validators.required]],
      tra_result: ['', [Validators.required]],
      tra_status: ['', [Validators.required]],
    });
  }

  private _fetchTransaction(tra_id: any) {
    const info$ = this.transactionService
      .loadTransactionInfo({ tra_id })
      .pipe(takeUntil(this.destroyed$));
    info$.subscribe((res: any) => {
      if (res && res.Data) {
        this._patchTransaction(res.Data);
      }
    });
  }

  private _patchTransaction(data: any) {
    this.searchCustomer = data.customer ? data.customer.cu_id : '';
    this.selectedCustomer = data.customer;

    this.form.patchValue({
      tra_title: data.tra_title,
      tra_type: data.tra_type,
      tra_priority: data.tra_priority,
      tra_content: data.tra_content,
      tra_rate: data.tra_rate,
      tra_result: data.tra_result,
      tra_status: data.tra_status,
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
      .searchCustomer(this.filterCustomer)
      .pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      this.customers = res.Data.Results;
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

  private _createTransaction(data: any) {
    const createTransaction$ = this.transactionService
      .createTransaction(data)
      .pipe(takeUntil(this.destroyed$));
    createTransaction$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/customer/list-transaction-service']);
        } else {
          this._notify(false, res.Message);
          this.errorField = res.Error;
        }
      },
      (e) => {
        this._notify(false, e.Message);
        this.errorField = e.Error;
      }
    );
  }

  private _updateTransaction(updated: any) {
    const updateTransaction$ = this.transactionService
      .updateTransaction(updated)
      .pipe(takeUntil(this.destroyed$));
    updateTransaction$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/customer/list-transaction-service']);
        } else {
          this._notify(false, res.Message);
          this.errorField = res.Error;
        }
      },
      (e) => {
        this._notify(false, e.Message);
        this.errorField = e.Error;
      }
    );
  }

  private _notify(isSuccess: boolean, message: string) {
    return Swal.fire({
      toast: true,
      position: 'top-end',
      type: isSuccess ? 'success' : 'error',
      title: message,
      showConfirmButton: false,
      timer: 2000,
    });
  }
  //#endregion
}
