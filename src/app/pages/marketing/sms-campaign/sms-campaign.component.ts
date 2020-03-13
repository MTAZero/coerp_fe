import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SmsCampaignModalComponent } from './component/sms-campaign-modal/sms-campaign-modal.component';
import { SmsService } from '../../../core/services/api/sms.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-sms-campaign',
  templateUrl: './sms-campaign.component.html',
  styleUrls: ['./sms-campaign.component.scss']
})
export class SmsCampaignComponent implements OnInit {
  private destroyed$ = new Subject();

  textSearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  strategies: any;
  selectedStrategy = null;

  constructor(private modalService: NgbModal, private smsService: SmsService) {}
  ngOnInit() {
    this._fetchData();
  }

  onClickStrategy(strategy: any) {
    if (isNullOrUndefined(this.selectedStrategy)) {
      this.selectedStrategy = strategy;
    } else {
      if (this.selectedStrategy.smss_id !== strategy.smss_id) {
        this.selectedStrategy = strategy;
      } else {
        this.selectedStrategy = null;
      }
    }
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

  openConfirmModal(strategy?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa chiến dịch SMS đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(result => {
      if (result.value) {
        this._removeStrategy(strategy);
      }
    });
  }

  onPageChange(page: number): void {
    this.page = page;
    this._fetchData();
  }

  onChangeFilter() {
    this._fetchData(this.selectedStrategy);
  }

  private _fetchData(selected?: any) {
    const strategy$ = this.smsService
      .loadSmsStrategy({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch
      })
      .pipe(takeUntil(this.destroyed$));
    strategy$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.strategies = res.Data.Results;

        if (selected) {
          this.selectedStrategy = this.strategies.find(item => item.smss_id === selected.smss_id);
        } else {
          this.selectedStrategy = this.strategies[0];
        }
      }
    });
  }

  private _createStrategy(data: any) {
    const createStrategy$ = this.smsService
      .createSmsStrategy(data)
      .pipe(takeUntil(this.destroyed$));
    createStrategy$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Thêm chiến dịch SMS thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this._fetchData();
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Thêm chiến dịch SMS thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }

  private _removeStrategy(strategy: any) {
    const removeStrategy$ = this.smsService
      .removeSmsStrategy({ sms_strategyId: strategy.smss_id })
      .pipe(takeUntil(this.destroyed$));
    removeStrategy$.subscribe(
      (res: any) => {
        if (res.Code == 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Xóa chiến dịch SMS thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this._fetchData();
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Xóa chiến dịch SMS thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }
}
