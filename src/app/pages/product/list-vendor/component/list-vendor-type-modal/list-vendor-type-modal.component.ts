import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { vendorTypeData } from '../../data';
import { VendorType } from '../../list-vendor.model';
import { VendorTypeModalComponent } from '../vendor-type-modal/vendor-type-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-vendor-type-modal',
  templateUrl: './list-vendor-type-modal.component.html',
  styleUrls: ['./list-vendor-type-modal.component.scss']
})
export class ListVendorTypeModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  vendorTypes: VendorType[];
  selectedVendorType: VendorType;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.loadVendorTypeData();
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }

  onClickChoose() {
    this.passEvent.emit({ event: false });
  }

  onClickVendorType(vendorType: VendorType) {
    if (isNullOrUndefined(this.selectedVendorType)) {
      this.selectedVendorType = vendorType;
    } else {
      if (
        this.selectedVendorType.vendor_type_id !== vendorType.vendor_type_id
      ) {
        this.selectedVendorType = vendorType;
      } else {
        this.selectedVendorType = null;
      }
    }
  }

  openVendorTypeModal() {
    const modalRef = this.modalService.open(VendorTypeModalComponent, {
      centered: true
    });
    if (this.selectedVendorType) {
      modalRef.componentInstance.vendorType = this.selectedVendorType;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (this.selectedVendorType) {
          this.updateVendorType(this.selectedVendorType, res.form);
        } else {
          this.createVendorType(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa loại nhà cung cấp';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa loại nhà cung cấp đã chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeVendorType(this.selectedVendorType);
      }
      modalRef.close();
    });
  }

  private loadVendorTypeData() {
    this.vendorTypes = vendorTypeData;
  }

  private createVendorType(data: any) {}

  private updateVendorType(vendorTypeId: any, data: any) {}

  private removeVendorType(vendorType: VendorType) {}
}
