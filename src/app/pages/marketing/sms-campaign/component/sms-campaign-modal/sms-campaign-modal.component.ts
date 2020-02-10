import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ListCustomerModalComponent } from '../list-customer-modal/list-customer-modal.component';
import { ListSmsModalComponent } from '../list-sms-modal/list-sms-modal.component';

@Component({
  selector: 'app-sms-campaign-modal',
  templateUrl: './sms-campaign-modal.component.html',
  styleUrls: ['./sms-campaign-modal.component.scss']
})
export class SmsCampaignModalComponent implements OnInit {
  @Input() sms: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();

  constructor(
    public formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}

  onClickSubmit() {
    this.passEvent.emit({ event: true, form: null });
  }

  openCustomerModal() {
    const modalRef = this.modalService.open(ListCustomerModalComponent, {
      centered: true,
      size: 'xl'
    });
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  openSmsModal() {
    const modalRef = this.modalService.open(ListSmsModalComponent, {
      centered: true,
      size: 'xl'
    });
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
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
}
