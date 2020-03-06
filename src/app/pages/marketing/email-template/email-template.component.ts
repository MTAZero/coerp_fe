import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Template } from './list-template.model';
import { templateData } from './data';
import { EmailTemplateModalComponent } from './component/email-template-modal/email-template-modal.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss']
})
export class EmailTemplateComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  submitted: boolean;
  term: any;
  page = 1;
  pageSize = 10;
  editorValue = '';

  // start and end index
  startIndex = 1;
  endIndex = 10;
  totalSize = 0;

  paginatedTemplateData: Array<Template>;
  templates: Array<Template>;

  viewChanged = false;
  selectedTemplate: Template;

  constructor(private modalService: NgbModal, public formBuilder: FormBuilder) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Marketing', path: '/' },
      { label: 'Mẫu Email', path: '/', active: true }
    ];
    this._fetchData();
  }

  openTemplateModal(template?: Template) {
    const modalRef = this.modalService.open(EmailTemplateModalComponent, {
      centered: true,
      size: 'xl'
    });
    if (template) {
      modalRef.componentInstance.template = template;
    }
    modalRef.componentInstance.passEvent.subscribe(() => {
      modalRef.close();
    });
  }

  openConfirmModal() {
    Swal.fire({
      title: 'Chắc chắn muốn xóa mẫu Email đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(result => {
      if (result.value) {
        this.removeTemplate();
      }
    });
  }

  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    this.paginatedTemplateData = this.templates.slice(this.startIndex, this.endIndex);
  }

  onChangeView(template: any, isBack: any) {
    if (!template && !isBack) {
      this.viewChanged = true;
    }

    if (!template && isBack) {
      this.viewChanged = false;
    }

    if (template && !isBack) {
      this.viewChanged = true;
    }
  }

  onClickField(value: string) {
    this.editorValue += `{{${value}}}`;
  }

  private _fetchData() {
    this.templates = templateData;
    // apply pagination
    this.startIndex = 0;
    this.endIndex = this.pageSize;

    this.paginatedTemplateData = this.templates.slice(this.startIndex, this.endIndex);
    this.totalSize = this.templates.length;
  }

  private removeTemplate() {}
}
