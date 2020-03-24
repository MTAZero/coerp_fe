import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CustomerService } from '../../../../../core/services/api/customer.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-customer-modal',
  templateUrl: './list-customer-modal.component.html',
  styleUrls: ['./list-customer-modal.component.scss']
})
export class ListCustomerModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() customerGroup: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();

  page = 0;
  pageSize = 100;

  customers: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this._fetchData();
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }

  private _fetchData() {
    const customer$ = this.customerService
      .loadCustomer({
        pageNumber: this.page,
        pageSize: this.pageSize,
        source_id: '',
        cu_type: '',
        customer_group_id: this.customerGroup.cg_id,
        name: '',
        start_date: this._convertDateToNgbDate(new Date('2010-01-01')),
        end_date: this._convertDateToNgbDate(new Date())
      })
      .pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      if (res && res.Data) {
        this.customers = res.Data.Results;
      }
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
}
