import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MobileModalComponent } from '../mobile-modal/mobile-modal.component';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mobile-tab',
  templateUrl: './mobile-tab.component.html',
  styleUrls: ['./mobile-tab.component.scss'],
})
export class MobileTabComponent implements OnInit {
  @Input() listMobile: any[];
  @Input() customerId: any;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  selectedMobile = null;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.customerId) this.selectedMobile = null;
    if (this.selectedMobile)
      this.selectedMobile = this.listMobile.filter(
        (item) => item.cp_id === this.selectedMobile.cp_id
      )[0];
  }

  onClickMobile(mobile: any) {
    if (isNullOrUndefined(this.selectedMobile)) {
      this.selectedMobile = mobile;
    } else {
      if (this.selectedMobile.cp_id !== mobile.cp_id) {
        this.selectedMobile = mobile;
      } else {
        this.selectedMobile = null;
      }
    }
  }

  openMobileModal(mobile?: any) {
    const modalRef = this.modalService.open(MobileModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.listMobile = this.listMobile;
    if (mobile) {
      modalRef.componentInstance.mobile = mobile;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (mobile) {
          this._updateMobile(res.data);
        } else {
          this._createMobile(res.data);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(mobile?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa số điện thoại đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeMobile(mobile);
      }
    });
  }

  private _createMobile(data: any) {
    const updatedList = this.listMobile.concat(data);
    this.formSubmit.emit(updatedList);
  }

  private _updateMobile(updated: any) {
    const updatedList = this.listMobile.map((item) => {
      if (item.cp_id !== updated.cp_id) return item;
      return updated;
    });
    this.formSubmit.emit(updatedList);
  }

  private _removeMobile(mobile: any) {
    const updatedList = this.listMobile.filter((item) => item.cp_id !== mobile.cp_id);
    this.formSubmit.emit(updatedList);
  }
}
