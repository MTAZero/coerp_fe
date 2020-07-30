import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RelativeModalComponent } from '../relative-modal/relative-modal.component';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-device-tab',
  templateUrl: './device-tab.component.html',
  styleUrls: ['./device-tab.component.scss']
})
export class DeviceTabComponent implements OnInit {
  @Input() listDevice: any[];
  @Input() staffId: any;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  selectedRelative = null;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.staffId) this.selectedRelative = null;
    if (this.selectedRelative)
      this.selectedRelative = this.listDevice.filter(
        (item) => item.rels_id === this.selectedRelative.rels_id
      )[0];
  }

  onClickRelative(relative: any) {
    if (isNullOrUndefined(this.selectedRelative)) {
      this.selectedRelative = relative;
    } else {
      if (this.selectedRelative.rels_id !== relative.rels_id) {
        this.selectedRelative = relative;
      } else {
        this.selectedRelative = null;
      }
    }
  }

  openRelativeModal(relative?: any) {
    const modalRef = this.modalService.open(RelativeModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.staffId = this.staffId;
    modalRef.componentInstance.listDevice = this.listDevice;
    if (relative) {
      modalRef.componentInstance.relative = relative;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (relative) {
          this._updateRelative(res.data);
        } else {
          this._createRelative(res.data);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(relative?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa quan hệ gia đình đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeRelative(relative);
      }
    });
  }

  private _createRelative(data: any) {
    const updatedList = this.listDevice.concat(data);
    this.formSubmit.emit(updatedList);
  }

  private _updateRelative(updated: any) {
    const updatedList = this.listDevice.map((item) => {
      if (item.rels_id !== updated.rels_id) return item;
      return updated;
    });
    this.formSubmit.emit(updatedList);
  }

  private _removeRelative(relative: any) {
    const updatedList = this.listDevice.filter((item) => item.rels_id !== relative.rels_id);
    this.formSubmit.emit(updatedList);
  }
}

