import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { SmsCampaignModalComponent } from './component/sms-campaign-modal/sms-campaign-modal.component';
import { SmsService } from '../../../core/services/api/sms.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sms-campaign',
  templateUrl: './sms-campaign.component.html',
  styleUrls: ['./sms-campaign.component.scss']
})
export class SmsCampaignComponent implements OnInit {
  private destroyed$ = new Subject();
  breadCrumbItems: Array<{}>;

  textSearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  strategies: any;

  constructor(private modalService: NgbModal, private smsService: SmsService) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Marketing', path: '/' },
      { label: 'Chiến dịch SMS', path: '/', active: true }
    ];
    this._fetchData();
  }

  openSmsCampaignModal(strategy?: any) {
    const modalRef = this.modalService.open(SmsCampaignModalComponent, {
      centered: true,
      size: 'lg'
    });
    if (strategy) {
      modalRef.componentInstance.strategy = strategy;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  openConfirmModal(strategy) {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa chiến dịch SMS';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa chiến dịch SMS đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this._removeStrategy(strategy);
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

  private _fetchData() {
    const strategy$ = this.smsService
      .loadSmsStrategy({
        pageNumber: this.page,
        pageSize: this.pageSize,
        search_name: this.textSearch
      })
      .pipe(takeUntil(this.destroyed$));
    strategy$.subscribe((res: any) => {
      if (res) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.strategies = res.Data.Results;
      }
    });
  }

  private _createStrategy(data: any) {
    const createStrategy$ = this.smsService
      .createSmsStrategy(data)
      .pipe(takeUntil(this.destroyed$));
    createStrategy$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _removeStrategy(strategy: any) {
    const removeStrategy$ = this.smsService
      .removeSmsStrategy({ sms_strategyId: strategy.smss_id })
      .pipe(takeUntil(this.destroyed$));
    removeStrategy$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }
}
