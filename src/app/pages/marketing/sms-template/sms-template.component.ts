import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SmsTemplateModalComponent } from './component/sms-template-modal/sms-template-modal.component';
import { ViewSmsTemplateModalComponent } from './component/view-sms-template-modal/view-sms-template-modal.component';
import { SmsService } from '../../../core/services/api/sms.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-sms-template',
  templateUrl: './sms-template.component.html',
  styleUrls: ['./sms-template.component.scss']
})
export class SmsTemplateComponent implements OnInit {
  private destroyed$ = new Subject();

  textSearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  templates: any;
  selectedTemplate = null;

  constructor(private modalService: NgbModal, private smsService: SmsService) {}
  ngOnInit() {
    this._fetchData();
  }

  onClickTemplate(template: any) {
    if (isNullOrUndefined(this.selectedTemplate)) {
      this.selectedTemplate = template;
    } else {
      if (this.selectedTemplate.smt_id !== template.smt_id) {
        this.selectedTemplate = template;
      } else {
        this.selectedTemplate = null;
      }
    }
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
    Swal.fire({
      title: 'Chắc chắn muốn xóa mẫu SMS đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(result => {
      if (result.value) {
        this._removeTemplate(template);
      }
    });
  }

  onPageChange(page: number): void {
    this.page = page;
    this._fetchData();
  }

  onChangeFilter() {
    this._fetchData(this.selectedTemplate);
  }

  private _fetchData(selected?: any) {
    const template$ = this.smsService
      .loadSmsTemplate({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch
      })
      .pipe(takeUntil(this.destroyed$));
    template$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.templates = res.Data.Results;

        if (selected) {
          this.selectedTemplate = this.templates.find(item => item.smt_id === selected.smt_id);
        } else {
          this.selectedTemplate = this.templates[0];
        }
      }
    });
  }

  private _createTemplate(data: any) {
    const createTemplate$ = this.smsService
      .createSmsTemplate(data)
      .pipe(takeUntil(this.destroyed$));
    createTemplate$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Thêm mẫu SMS thành công',
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
          title: 'Thêm SMS thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }

  private _updateTemplate(updated: any) {
    const updateTemplate$ = this.smsService
      .updateSmsTemplate(updated)
      .pipe(takeUntil(this.destroyed$));
    updateTemplate$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Cập nhật mẫu SMS thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this._fetchData(this.selectedTemplate);
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Cập nhật mẫu SMS thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }

  private _removeTemplate(template: any) {
    const removeTemplate$ = this.smsService
      .removeSmsTemplate({ sms_templateId: template.smt_id })
      .pipe(takeUntil(this.destroyed$));
    removeTemplate$.subscribe(
      (res: any) => {
        if (res.Code == 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Xóa mẫu SMS thành công',
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
          title: 'Xóa mẫu SMS thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }
}
