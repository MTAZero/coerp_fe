import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vendor } from './list-vendor.model';
import { vendorData } from './data';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { VendorModalComponent } from './component/vendor-modal/vendor-modal.component';

@Component({
  selector: 'app-list-vendor',
  templateUrl: './list-vendor.component.html',
  styleUrls: ['./list-vendor.component.scss']
})
export class ListVendorComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  submitted: boolean;
  term: any;
  page = 1;
  pageSize = 10;

  // start and end index
  startIndex = 1;
  endIndex = 10;
  totalSize = 0;

  paginatedVendorData: Array<Vendor>;
  selectVendor: Vendor;
  vendors: Array<Vendor>;

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Sản phẩm', path: '/' },
      { label: 'Nhà cung cấp', path: '/', active: true }
    ];
    this._fetchData();
  }

  openVendorModal(vendor?: Vendor) {
    const modalRef = this.modalService.open(VendorModalComponent, {
      centered: true,
      size: 'lg'
    });
    if (vendor) {
      modalRef.componentInstance.vendor = vendor;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (vendor) {
          this.updateVendor(vendor, res.form);
        } else {
          this.createVendor(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa nhà cung cấp';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa nhà cung cấp đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeVendor();
      }
      modalRef.close();
    });
  }

  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    this.paginatedVendorData = this.vendors.slice(
      this.startIndex,
      this.endIndex
    );
  }

  private _fetchData() {
    this.vendors = vendorData;
    // apply pagination
    this.startIndex = 0;
    this.endIndex = this.pageSize;

    this.paginatedVendorData = this.vendors.slice(
      this.startIndex,
      this.endIndex
    );
    this.totalSize = this.vendors.length;
  }

  private createVendor(data: any) {
    this.submitted = true;
    this.totalSize = this.vendors.length + 1;
    this.paginatedVendorData = this.vendors.slice(
      this.startIndex,
      this.endIndex
    );
  }

  private updateVendor(vendor: any, data: any) {}

  private removeVendor() {}
}
