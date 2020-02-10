import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { SmsCampaignModalComponent } from './component/sms-campaign-modal/sms-campaign-modal.component';
import { smsData } from './data';

@Component({
  selector: 'app-sms-campaign',
  templateUrl: './sms-campaign.component.html',
  styleUrls: ['./sms-campaign.component.scss']
})
export class SmsCampaignComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  submitted: boolean;
  term: any;

  page = 0;
  pageSize = 10;
  totalSize = 0;

  smsData: any;

  constructor(private modalService: NgbModal) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Marketing', path: '/' },
      { label: 'Chiến dịch SMS', path: '/', active: true }
    ];
    this._fetchData();
  }

  openSmsCampaignModal(sms?: any) {
    const modalRef = this.modalService.open(SmsCampaignModalComponent, {
      centered: true,
      size: 'lg'
    });
    if (sms) {
      modalRef.componentInstance.sms = sms;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa chiến dịch SMS';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa chiến dịch SMS đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeTemplate();
      }
      modalRef.close();
    });
  }

  onPageChange(page: number): void {}

  private _fetchData() {
    this.smsData = smsData;
    this.totalSize = smsData.length;
  }

  private createTemplate() {}

  private updateTemplate(current: any, updated: any) {}

  private removeTemplate() {}
}
