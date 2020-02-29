import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddresModalComponent } from '../addres-modal/addres-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { CustomerService } from '../../../../../core/services/api/customer.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-address-tab',
  templateUrl: './address-tab.component.html',
  styleUrls: ['./address-tab.component.scss']
})
export class AddressTabComponent implements OnInit {
  @Input() listAddress: any;
  @Input() customerId: any;
  @Output() formSubmit: any = new EventEmitter();
  private destroyed$ = new Subject();
  constructor(private modalService: NgbModal, private customerService: CustomerService) {}

  ngOnInit() {}

  openAddressModal(address?: any) {
    const modalRef = this.modalService.open(AddresModalComponent, {
      centered: true
    });
    modalRef.componentInstance.customerId = this.customerId;
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

  private _createAddress(data: any) {
    const createAddress$ = this.customerService
      .createShipAddress(data)
      .pipe(takeUntil(this.destroyed$));
    createAddress$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.formSubmit.emit({ reload: true });
        this.modalService.dismissAll();
      }
    });
  }

  private _updateAddress(updated: any) {
    const updateAddress$ = this.customerService
      .updateShipAddress(updated)
      .pipe(takeUntil(this.destroyed$));
    updateAddress$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.formSubmit.emit({ reload: true });
        this.modalService.dismissAll();
      }
    });
  }

  private _removeAddress(address: any) {
    const removeAddress$ = this.customerService
      .removeShipAddress({ shipaddressId: address.sha_id })
      .pipe(takeUntil(this.destroyed$));
    removeAddress$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.formSubmit.emit({ reload: true });
        this.modalService.dismissAll();
      }
    });
  }
}
