import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { selectionTime } from '../../data';
@Component({
  selector: 'app-order-service-modal',
  templateUrl: './order-service-modal.component.html',
  styleUrls: ['./order-service-modal.component.scss']
})
export class OrderServiceModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  selectionTime: any[];
  constructor(
    public formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.selectionTime = selectionTime;
  }

  get formUI() {
    return this.form.controls;
  }

  onClickSubmit() {
    this.passEvent.emit({ event: true });
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
