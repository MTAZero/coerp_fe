import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-customer-care-modal',
  templateUrl: './customer-care-modal.component.html',
  styleUrls: ['./customer-care-modal.component.scss']
})
export class CustomerCareModalComponent implements OnInit {
  @Input() customerCare: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  submitted = false;
  constructor(public formBuilder: FormBuilder, private modalService: NgbModal) {}

  ngOnInit() {}

  onClickSubmit() {
    this.submitted = true;

    this.passEvent.emit({ event: true });
  }

  onClickCancel() {
    if (1) {
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
    } else {
      this.passEvent.emit({ event: false });
    }
  }

  onBackClick() {}
  onNextClick() {}
  onSubmitClick() {}
  onPrintClick() {}
}
