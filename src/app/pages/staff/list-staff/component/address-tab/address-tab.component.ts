import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressModalComponent } from '../address-modal/address-modal.component';
import { StaffService } from '../../../../../core/services/api/staff.service';
import { takeUntil } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-address-tab',
  templateUrl: './address-tab.component.html',
  styleUrls: ['./address-tab.component.scss']
})
export class AddressTabComponent implements OnInit, OnChanges {
  @Input() listAddress: [];
  @Input() staffId: any;
  @Output() formSubmit: any = new EventEmitter();
  private destroyed$ = new Subject();
  selectedAddress = null;

  constructor(private modalService: NgbModal, private staffService: StaffService) {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.staffId) this.selectedAddress = null;
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
      centered: true
    });
    modalRef.componentInstance.staffId = this.staffId;
    if (address) {
      modalRef.componentInstance.address = address;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
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
      cancelButtonColor: '#d33'
    }).then(result => {
      if (result.value) {
        this._removeAddress(address);
      }
    });
  }

  private _createAddress(data: any) {
    const createAddress$ = this.staffService
      .createUndertakenLocation(data)
      .pipe(takeUntil(this.destroyed$));
    createAddress$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.formSubmit.emit({ reload: true });
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      e => this._notify(false, e.Message)
    );
  }

  private _updateAddress(updated: any) {
    const updateAddress$ = this.staffService
      .updateUndertakenLocation(updated)
      .pipe(takeUntil(this.destroyed$));
    updateAddress$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.formSubmit.emit({ reload: true });
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      e => this._notify(false, e.Message)
    );
  }

  private _removeAddress(address: any) {
    const removeAddress$ = this.staffService
      .removeUndertakenLocation({ undertakenlocationId: address.unl_id })
      .pipe(takeUntil(this.destroyed$));
    removeAddress$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.formSubmit.emit({ reload: true });
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      e => this._notify(false, e.Message)
    );
  }

  private _notify(isSuccess: boolean, message: string) {
    return Swal.fire({
      position: 'top-end',
      type: isSuccess ? 'success' : 'error',
      title: message,
      showConfirmButton: false,
      timer: 2000
    });
  }
}
