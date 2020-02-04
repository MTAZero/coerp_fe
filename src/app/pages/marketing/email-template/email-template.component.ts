import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Template } from './list-template.model';
import { templateData } from './data';
// import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
// import { TemplateModalComponent } from './component/template-modal/template-modal.component';

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

  // start and end index
  startIndex = 1;
  endIndex = 10;
  totalSize = 0;

  paginatedTemplateData: Array<Template>;
  selectTemplate: Template;
  templates: Array<Template>;

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Marketing', path: '/' },
      { label: 'Mẫu Email', path: '/', active: true }
    ];
    this._fetchData();
  }

  openTemplateModal(template?: Template) {
    //   const modalRef = this.modalService.open(TemplateModalComponent, {
    //     centered: true,
    //     size: 'xl'
    //   });
    //   if (template) {
    //     modalRef.componentInstance.template = template;
    //   }
    //   modalRef.componentInstance.passEvent.subscribe(res => {
    //     if (res.event) {
    //       if (template) {
    //         this.updateTemplate(template, res.form);
    //       } else {
    //         this.createTemplate(res.form);
    //       }
    //     }
    //     modalRef.close();
    //   });
  }

  openConfirmModal() {
    //   const modalRef = this.modalService.open(ConfirmModalComponent, {
    //     centered: true
    //   });
    //   modalRef.componentInstance.title = 'Xác nhận xóa nhà đơn hàng';
    //   modalRef.componentInstance.message =
    //     'Bạn có chắc chắn muốn xóa đơn hàng đang chọn không?';
    //   modalRef.componentInstance.passEvent.subscribe(res => {
    //     if (res) {
    //       this.removeTemplate();
    //     }
    //     modalRef.close();
    //   });
  }

  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    this.paginatedTemplateData = this.templates.slice(
      this.startIndex,
      this.endIndex
    );
  }

  private _fetchData() {
    this.templates = templateData;
    // apply pagination
    this.startIndex = 0;
    this.endIndex = this.pageSize;

    this.paginatedTemplateData = this.templates.slice(
      this.startIndex,
      this.endIndex
    );
    this.totalSize = this.templates.length;
  }

  private createTemplate(data: any) {
    this.submitted = true;
    this.totalSize = this.templates.length + 1;
    this.paginatedTemplateData = this.templates.slice(
      this.startIndex,
      this.endIndex
    );
  }

  private updateTemplate(template: any, data: any) {}

  private removeTemplate() {}
}
