import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-type-modal',
  templateUrl: './product-type-modal.component.html',
  styleUrls: ['./product-type-modal.component.scss']
})
export class ProductTypeModalComponent implements OnInit {
  @Input() productType: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.productType) {
      this.patchData(this.productType);
    }
  }

  onClickSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      this.passEvent.emit({ event: true, form: this.form.value });
    }
  }

  onClickCancel() {
    if (this.form.dirty) {
    } else {
      this.passEvent.emit({ event: false });
    }
  }

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      product_type_name: ['', [Validators.required]],
      product_type_status: ['', [Validators.required]],
      product_type_description: ['', null]
    });
  }

  private patchData(productType: any) {
    this.form.patchValue({
      product_type_name: productType.product_type_name,
      product_type_status: productType.product_type_status,
      product_type_description: productType.product_type_description
    });
  }
}
