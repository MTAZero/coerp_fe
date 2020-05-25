import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttachmentModalComponent } from '../attachment-modal/attachment-modal.component';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attachment-tab',
  templateUrl: './attachment-tab.component.html',
  styleUrls: ['./attachment-tab.component.scss'],
})
export class AttachmentTabComponent implements OnInit {
  @Input() listAttachment: any[];
  @Input() staffId: any;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  selectedAttachment = null;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.staffId) this.selectedAttachment = null;
    if (this.selectedAttachment)
      this.selectedAttachment = this.listAttachment.filter(
        (item) => item.ast_id === this.selectedAttachment.ast_id
      )[0];
  }

  onClickAttachment(attachment: any) {
    if (isNullOrUndefined(this.selectedAttachment)) {
      this.selectedAttachment = attachment;
    } else {
      if (this.selectedAttachment.ast_id !== attachment.ast_id) {
        this.selectedAttachment = attachment;
      } else {
        this.selectedAttachment = null;
      }
    }
  }

  onClickLink(attachment: any) {
    this.onClickAttachment(attachment);
    window.open('http://27.72.147.222:1230/' + attachment.ast_link);
  }

  openAttachmentModal(attachment?: any) {
    const modalRef = this.modalService.open(AttachmentModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.staffId = this.staffId;
    if (attachment) {
      modalRef.componentInstance.attachment = attachment;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (attachment) {
          this._updateAttachment(res.data);
        } else {
          this._createAttachment(res.data);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(attachment?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa khóa file đính kèm đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeAttachment(attachment);
      }
    });
  }

  private _createAttachment(data: any) {
    const updatedList = this.listAttachment.concat(data);
    this.formSubmit.emit(updatedList);
  }

  private _updateAttachment(updated: any) {
    const updatedList = this.listAttachment.map((item) => {
      if (item.ast_id !== updated.ast_id) return item;
      return updated;
    });
    this.formSubmit.emit(updatedList);
  }

  private _removeAttachment(attachment: any) {
    const updatedList = this.listAttachment.filter((item) => item.ast_id !== attachment.ast_id);
    this.formSubmit.emit(updatedList);
  }
}
