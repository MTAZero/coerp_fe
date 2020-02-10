import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-sms-template-modal',
  templateUrl: './sms-template-modal.component.html',
  styleUrls: ['./sms-template-modal.component.scss']
})
export class SmsTemplateModalComponent implements OnInit {
  @Input() template: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  contentValue = '';
  listField = [
    {
      name: 'Tên khách hàng',
      value: 'ten_khach_hang'
    },
    {
      name: 'Ghi chú khách hàng',
      value: 'ghi_chu_khach_hang'
    },
    {
      name: 'Người liên hệ',
      value: 'nguoi_lien_he'
    },
    {
      name: 'Chức vụ liên hệ',
      value: 'chuc_vu_lien_he'
    }
  ];
  constructor(public formBuilder: FormBuilder, private modalService: NgbModal) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.template) {
      this.patchData();
    }
  }

  onClickSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      this.passEvent.emit({ event: true, form: this.form.value });
    }
  }

  onClickCancel() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Thông báo';
    modalRef.componentInstance.message =
      'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.passEvent.emit({ event: false });
      }
      modalRef.close();
    });
  }

  onClickField(field) {
    this.contentValue += `[${field.value}]`;
  }

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {}

  private patchData() {}
}
