import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CustomerService } from '../../../../../core/services/api/customer.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
        name: ''
      })
      .pipe(takeUntil(this.destroyed$));
    customer$.subscribe((res: any) => {
      if (res && res.Data) {
        this.customers = res.Data.Results;
      }
    });
  }
}
