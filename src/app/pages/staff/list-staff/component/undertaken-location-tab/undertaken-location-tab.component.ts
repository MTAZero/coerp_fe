import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressModalComponent } from '../address-modal/address-modal.component';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-undertaken-location-tab',
  templateUrl: './undertaken-location-tab.component.html',
  styleUrls: ['./undertaken-location-tab.component.scss'],
})
export class UndertakenLocationTabComponent implements OnInit, OnChanges {
  @Input() listAddress: any[];
  @Input() staffId: any;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  selectedAddress = null;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.staffId) this.selectedAddress = null;
    if (this.selectedAddress)
      this.selectedAddress = this.listAddress.filter(
        (item) => item.unl_id === this.selectedAddress.unl_id
      )[0];
  }

  onClickAddress(address: any) {
    if (isNullOrUndefined(this.selectedAddress)) {
      this.selectedAddress = address;
    } else {
      if (this.selectedAddress.unl_id !== address.unl_id) {
        this.selectedAddress = address;
      } else {
        this.selectedAddress = null;
      }
    }
  }

  openAddressModal(address?: any) {
    const modalRef = this.modalService.open(AddressModalComponent, {
      centered: true,
    });
    if (address) {
      modalRef.componentInstance.address = address;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (address) {
          this._updateAddress(res.form);
        } else {
          this._createAddress(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(address?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa địa chỉ đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeAddress(address);
      }
    });
  }

  private _createAddress(data: any) {
    const updatedList = this.listAddress.concat(data);
    this.formSubmit.emit(updatedList);
  }

  private _updateAddress(updated: any) {
    const updatedList = this.listAddress.map((item) => {
      if (item.unl_id !== updated.unl_id) return item;
      return updated;
    });
    this.formSubmit.emit(updatedList);
  }

  private _removeAddress(address: any) {
    const updatedList = this.listAddress.filter((item) => item.unl_id !== address.unl_id);
    this.formSubmit.emit(updatedList);
  }
}
