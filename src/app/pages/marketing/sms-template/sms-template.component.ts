import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { SmsTemplateModalComponent } from './component/sms-template-modal/sms-template-modal.component';
import { ViewSmsTemplateModalComponent } from './component/view-sms-template-modal/view-sms-template-modal.component';
import { SmsService } from '../../../core/services/api/sms.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sms-template',
  templateUrl: './sms-template.component.html',
  styleUrls: ['./sms-template.component.scss']
})
export class SmsTemplateComponent implements OnInit {
  private destroyed$ = new Subject();
  breadCrumbItems: Array<{}>;

  textSearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  templates: any;

  constructor(private modalService: NgbModal, private smsService: SmsService) {}
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
    modalRef.componentInstance.passEvent.subscribe(() => {
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
          this._updateTemplate(res.form);
        } else {
          this._createTemplate(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(template?: any) {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa mẫu SMS';
    modalRef.componentInstance.message = 'Bạn có chắc chắn muốn xóa mẫu SMS đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this._removeTemplate(template);
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
    const template$ = this.smsService
      .loadSmsTemplate({
        pageNumber: this.page,
        pageSize: this.pageSize,
        search_name: this.textSearch
      })
      .pipe(takeUntil(this.destroyed$));
    template$.subscribe((res: any) => {
      if (res) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.templates = res.Data.Results;
      }
    });
  }

  private _createTemplate(data: any) {
    const createTemplate$ = this.smsService
      .createSmsTemplate(data)
      .pipe(takeUntil(this.destroyed$));
    createTemplate$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _updateTemplate(updated: any) {
    const updateTemplate$ = this.smsService
      .updateSmsTemplate(updated)
      .pipe(takeUntil(this.destroyed$));
    updateTemplate$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _removeTemplate(template: any) {
    const removeTemplate$ = this.smsService
      .removeSmsTemplate({ sms_templateId: template.smt_id })
      .pipe(takeUntil(this.destroyed$));
    removeTemplate$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }
}
