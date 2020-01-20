import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vendor } from '../../list-vendor.model';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ListVendorTypeModalComponent } from '../list-vendor-type-modal/list-vendor-type-modal.component';

@Component({
  selector: 'app-vendor-modal',
  templateUrl: './vendor-modal.component.html',
  styleUrls: ['./vendor-modal.component.scss']
})
export class VendorModalComponent implements OnInit {
  @Input() vendor: Vendor;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder, private modalService: NgbModal) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.vendor) {
      this.patchData(this.vendor);
    }
  }

  openVendorTypeModal() {
    const modalRef = this.modalService.open(ListVendorTypeModalComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  onClickSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      this.passEvent.emit({ event: true, form: this.form.value });
    }
  }

  onClickCancel() {
    if (this.form.dirty) {
      const modalRef = this.modalService.open(ConfirmModalComponent, {
        centered: true
      });
      modalRef.componentInstance.title = 'Thông báo';
      modalRef.componentInstance.message =
        'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?';
      modalRef.componentInstance.passEvent.subscribe(res => {
        if (res) {
          this.passEvent.emit({ event: false });
        }
        modalRef.close();
      });
    } else {
      this.passEvent.emit({ event: false });
    }
  }

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      vendor_name: ['', [Validators.required]],
      vendor_address: ['', [Validators.required]],
      vendor_phone: ['', [Validators.required]],
      vendor_contact_name: ['', [Validators.required]],
      vendor_contact_phone: ['', [Validators.required]],
      vendor_type: ['', [Validators.required]]
    });
  }

  private patchData(vendor: Vendor) {
    this.form.patchValue({
      vendor_name: vendor.vendor_name,
      vendor_address: vendor.vendor_address,
      vendor_phone: vendor.vendor_phone,
      vendor_contact_name: vendor.vendor_contact_name,
      vendor_contact_phone: vendor.vendor_contact_phone,
      vendor_type: vendor.vendor_type
    });
  }
}
