import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../list-product.model';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ListUnitModalComponent } from '../list-unit-modal/list-unit-modal.component';
import { ListProductTypeModalComponent } from '../list-product-type-modal/list-product-type-modal.component';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  @Input() product: Product;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder, private modalService: NgbModal) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.product) {
      this.patchData(this.product);
    }
  }

  openUnitModal() {
    const modalRef = this.modalService.open(ListUnitModalComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  openProductTypeModal() {
    const modalRef = this.modalService.open(ListProductTypeModalComponent, {
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
      product_name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      in_price: ['', [Validators.required]],
      out_price: ['', [Validators.required]],
      tax: ['', [Validators.required]],
      promotion: ['', null],
      unit: ['', [Validators.required]],
      product_type: [null, [Validators.required]],
      vendor: ['', [Validators.required]],
      expired_date: [null, null],
      weight: ['', null],
      short_description: ['', null],
      full_description: ['', null]
    });
  }

  private patchData(product: Product) {
    this.form.patchValue({
      product_name: product.product_name,
      quantity: product.quantity,
      in_price: product.in_price,
      out_price: product.out_price,
      tax: product.tax,
      promotion: product.promotion,
      unit: product.unit,
      product_type: product.product_type,
      vendor: product.vendor,
      expired_date: product.expired_date,
      weight: product.weight,
      short_description: product.short_description,
      full_description: product.full_description
    });
  }
}
