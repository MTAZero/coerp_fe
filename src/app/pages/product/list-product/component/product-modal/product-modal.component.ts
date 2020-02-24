import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ListUnitModalComponent } from '../list-unit-modal/list-unit-modal.component';
import { ListProductTypeModalComponent } from '../list-product-type-modal/list-product-type-modal.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { ProductService } from 'src/app/core/services/api/product.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() product: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  categories: any;
  units: any;
  suppliers: any;

  constructor(
    public formBuilder: FormBuilder,
    private modalService: NgbModal,
    private productService: ProductService
  ) {
    this.initializeForm();
    this._fetchFilter();
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
      const data = this.form.value;
      data.pu_expired_date = this._convertNgbDateToDate(data.pu_expired_date);
      this.passEvent.emit({ event: true, form: data });
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
      pu_id: ['', null],
      pu_name: ['', [Validators.required]],
      pu_quantity: ['', [Validators.required]],
      pu_buy_price: ['', [Validators.required]],
      pu_sale_price: ['', [Validators.required]],
      pu_saleoff: ['', null],
      pu_short_description: ['', null],
      pu_description: ['', null],
      pu_unit: ['', [Validators.required]],
      product_category_id: [null, [Validators.required]],
      provider_id: ['', [Validators.required]],
      pu_tax: ['', [Validators.required]],
      pu_expired_date: [null, null],
      pu_weight: ['', null]
    });
  }

  private patchData(product: any) {
    console.log(product);
    this.form.patchValue({
      pu_id: product.pu_id,
      pu_name: product.pu_name,
      pu_quantity: product.pu_quantity,
      pu_buy_price: product.pu_buy_price,
      pu_sale_price: product.pu_sale_price,
      pu_saleoff: product.pu_saleoff,
      pu_short_description: product.pu_short_description,
      pu_description: product.pu_description,
      pu_unit: product.pu_unit_id,
      product_category_id: product.product_category_id,
      provider_id: product.provider_id,
      pu_tax: product.pu_tax,
      pu_expired_date: this._convertDateToNgbDate(product.pu_expired_date),
      pu_weight: product.pu_weight
    });
  }

  private _fetchFilter() {
    const category$ = this.productService
      .loadCategory()
      .pipe(takeUntil(this.destroyed$));

    category$.subscribe((res: any) => {
      this.categories = res.Data;
    });

    const supplier$ = this.productService
      .loadSupplier()
      .pipe(takeUntil(this.destroyed$));

    supplier$.subscribe((res: any) => {
      this.suppliers = res.Data;
    });

    const unit$ = this.productService
      .loadUnit()
      .pipe(takeUntil(this.destroyed$));

    unit$.subscribe((res: any) => {
      this.units = res.Data;
    });
  }

  private _convertDateToNgbDate(date: any) {
    if (!date) {
      return null;
    }
    const year = moment(date).year();
    const month = moment(date).month() + 1;
    const day = moment(date).date();
    return new NgbDate(year, month, day);
  }

  private _convertNgbDateToDate(ngbDate: any) {
    if (!ngbDate) {
      return '';
    }
    const newDate = new Date(ngbDate.year, ngbDate.month, ngbDate.day);
    return moment(newDate).format();
  }
}
