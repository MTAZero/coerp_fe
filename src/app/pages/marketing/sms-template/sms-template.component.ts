import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { SmsTemplateModalComponent } from './component/sms-template-modal/sms-template-modal.component';
import { ViewSmsTemplateModalComponent } from './component/view-sms-template-modal/view-sms-template-modal.component';
import { templateData } from './data';

@Component({
  selector: 'app-sms-template',
  templateUrl: './sms-template.component.html',
  styleUrls: ['./sms-template.component.scss']
})
export class SmsTemplateComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  submitted: boolean;
  term: any;

  page = 0;
  pageSize = 10;
  totalSize = 0;

  templates: any;

  constructor(private modalService: NgbModal) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Marketing', path: '/' },
      { label: 'Mẫu SMS', path: '/', active: true }
    ];
    this._fetchData();
  }

  openViewTemplateModal(template?: any) {
    const modalRef = this.modalService.open(ViewSmsTemplateModalComponent, {
      centered: true,
      size: 'lg'
    });
    if (template) {
      modalRef.componentInstance.template = template;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  openTemplateModal(template?: any) {
    const modalRef = this.modalService.open(SmsTemplateModalComponent, {
      centered: true,
      size: 'lg'
    });
    if (template) {
      modalRef.componentInstance.template = template;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (template) {
          this.updateTemplate(template, res.form);
        } else {
          this.createTemplate();
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa mẫu SMS';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa mẫu SMS đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeTemplate();
      }
      modalRef.close();
    });
  }

  onPageChange(page: number): void {}

  private _fetchData() {
    this.templates = templateData;
  }

  private createTemplate() {}

  private updateTemplate(current: any, updated: any) {}

  private removeTemplate() {}
}
