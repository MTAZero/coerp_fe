import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListCustomerModalComponent } from '../list-customer-modal/list-customer-modal.component';
import { ListSmsModalComponent } from '../list-sms-modal/list-sms-modal.component';
import { CustomerGroupService } from '../../../../../core/services/api/customer-group.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sms-campaign-modal',
  templateUrl: './sms-campaign-modal.component.html',
  styleUrls: ['./sms-campaign-modal.component.scss']
})
export class SmsCampaignModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() strategy: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();

  customerGroups = [];
  selectedCustomerGroups = [];
  selectedSms = null;
  strategyTitle = '';

  constructor(
    public formBuilder: FormBuilder,
    private modalService: NgbModal,
    private customerGroupService: CustomerGroupService
  ) {}

  ngOnInit() {
    this._fetchData();
  }

  onClickSubmit() {
    if (!this.selectedSms || this.selectedCustomerGroups.length === 0 || this.strategyTitle === '')
      return;

    const data = {
      customer_group_id: this.selectedCustomerGroups,
      smss_title: this.strategyTitle,
      sms_template_id: this.selectedSms.smt_id
    };
    this.passEvent.emit({ event: true, form: data });
  }

  openCustomerModal() {
    const modalRef = this.modalService.open(ListCustomerModalComponent, {
      centered: true,
      size: 'xl'
    });
    modalRef.componentInstance.passEvent.subscribe(() => {
      modalRef.close();
    });
  }

  openSmsModal() {
    const modalRef = this.modalService.open(ListSmsModalComponent, {
      centered: true,
      size: 'xl'
    });
    modalRef.componentInstance.selected = this.selectedSms;
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        this.selectedSms = res.data;
      }
      modalRef.close();
    });
  }

  onClickCancel() {
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

  private _fetchData() {
    const template$ = this.customerGroupService
      .loadCustomerGroup({
        pageNumber: 0,
        pageSize: 100,
        cg_id: '',
        name: ''
      })
      .pipe(takeUntil(this.destroyed$));
    template$.subscribe((res: any) => {
      if (res && res.Data) {
        this.customerGroups = res.Data.Results;
      }
    });
  }
}
