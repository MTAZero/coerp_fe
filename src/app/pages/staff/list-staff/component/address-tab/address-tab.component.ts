import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressModalComponent } from '../address-modal/address-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { StaffService } from '../../../../../core/services/api/staff.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-address-tab',
  templateUrl: './address-tab.component.html',
  styleUrls: ['./address-tab.component.scss']
})
export class AddressTabComponent implements OnInit, OnChanges {
  @Input() staffId: any;
  private destroyed$ = new Subject();

  addresses: any;
  constructor(private modalService: NgbModal, private staffService: StaffService) {}

  ngOnInit() {
    this._fetchData();
  }

  ngOnChanges() {
    this._fetchData();
  }

  openAddressModal(address?: any) {
    const modalRef = this.modalService.open(AddressModalComponent, {
      centered: true
    });
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
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa địa chỉ';
    modalRef.componentInstance.message = 'Bạn có chắc chắn muốn xóa địa chỉ đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this._removeAddress(address);
      }
      modalRef.close();
    });
  }

  private _fetchData() {
    const address$ = this.staffService
      .loadStaffInfo({
        id: this.staffId
      })
      .pipe(takeUntil(this.destroyed$));
    address$.subscribe((res: any) => {
      if (res) {
        this.addresses = res.Data.list_address;
        console.log(this.addresses);
      }
    });
  }
  private _createAddress(data: any) {
    const createAddress$ = this.staffService.createStaff(data).pipe(takeUntil(this.destroyed$));
    createAddress$.subscribe((res: any) => {
      if (res.Code === 200) {
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _updateAddress(updated: any) {
    const updateAddress$ = this.staffService
      .updateUndertakenLocation(updated)
      .pipe(takeUntil(this.destroyed$));
    updateAddress$.subscribe((res: any) => {
      if (res.Code === 200) {
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _removeAddress(address: any) {
    const removeAddress$ = this.staffService
      .removeUndertakenLocation({ undertakenlocationId: address.unl_id })
      .pipe(takeUntil(this.destroyed$));
    removeAddress$.subscribe((res: any) => {
      if (res.Code === 200) {
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }
}
