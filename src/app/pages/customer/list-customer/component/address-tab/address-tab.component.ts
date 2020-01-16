import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddresModalComponent } from '../addres-modal/addres-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-address-tab',
  templateUrl: './address-tab.component.html',
  styleUrls: ['./address-tab.component.scss']
})
export class AddressTabComponent implements OnInit {
  addresses = [
    {
      address_id: 'ADD01',
      address: '1 Phạm Văn Đồng, Cầu Giấy, Hà Nội',
      phone: '0922111403',
      note: ''
    },
    {
      address_id: 'ADD02',
      address: '210 Hoàng Quốc Việt, Cầu Giấy, Hà Nội',
      phone: '0123890222',
      note: ''
    },
    {
      address_id: 'ADD03',
      address: '14 Cầu Giấy, Cầu Giấy, Hà Nội',
      phone: '0922111403',
      note: ''
    }
  ];
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openAddressModal(address?: any) {
    const modalRef = this.modalService.open(AddresModalComponent, {
      centered: true
    });
    if (address) {
      modalRef.componentInstance.address = address;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (address) {
          this.updateAddress(address, res.form);
        } else {
          this.createAddress(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa địa chỉ';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa địa chỉ đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeAddress();
      }
      modalRef.close();
    });
  }

  private createAddress(data: any) {}

  private updateAddress(address: any, data: any) {}

  private removeAddress() {}
}
