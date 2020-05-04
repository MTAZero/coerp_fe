import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from '../../../core/services/api/product.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { menu } from './data';
import { isUndefined } from 'util';

@Component({
  selector: 'app-list-product-detail',
  templateUrl: './list-product-detail.component.html',
  styleUrls: ['./list-product-detail.component.scss'],
})
export class ListProductDetailComponent implements OnInit, OnDestroy {
  pu_id = null;
  private destroyed$ = new Subject();
  menu: any[];
  selectedMenuItem = 0;
  submitted = false;
  errorField = null;
  isChange = false;

  categories: any;
  units: any;
  suppliers: any;

  listView = [true, true];

  formProduct: FormGroup;
  formDes: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.pu_id = this.route.snapshot.paramMap.get('pu_id');
    if (this.pu_id === '') this.listView = [false, false];

    this.menu = menu;

    this._initializeForm();
    this._fetchFilter();

    if (this.pu_id) {
      this._fetchProduct(this.pu_id);
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onClickMenuItem(index: any) {
    this.selectedMenuItem = index;
    const el = document.getElementById(index);
    const content = document.getElementById('content');
    content.scroll({ top: el.offsetTop - 50, behavior: 'smooth' });
  }

  onClearDate() {
    this.formProduct.patchValue({
      pu_expired_date: null,
    });
    this.isChange = true;
  }

  switchViewType(index: number) {
    this.listView[index] = !this.listView[index];
  }

  onChangeToMain() {
    if (this.formProduct.dirty || this.formDes.dirty) {
      Swal.fire({
        title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Có',
        cancelButtonText: 'Không',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['/product/list-product']);
        }
      });
    } else {
      this.router.navigate(['/product/list-product']);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.formProduct.invalid || this.formDes.invalid) return;
    if (this.formProduct.value.pu_name.trim() === '') {
      return this.formProduct.controls['pu_name'].setErrors({ required: true });
    }

    const productForm = this.formProduct.value;
    productForm.pu_expired_date = this._convertNgbDateToDate(productForm.pu_expired_date);

    const data = {
      ...productForm,
      ...this.formDes.value,
    };
    console.log(data);
    if (this.pu_id)
      this._updateProduct({
        ...data,
        pu_id: this.pu_id,
      });
    else this._createProduct(data);
  }

  //#region Private
  private _initializeForm() {
    this.formProduct = this.formBuilder.group({
      pu_name: ['', [Validators.required]],
      pu_unit: ['', [Validators.required]],
      pu_quantity: ['', [Validators.required]],
      product_category_id: [null, [Validators.required]],
      pu_buy_price: ['', [Validators.required]],
      provider_id: ['', [Validators.required]],
      pu_sale_price: ['', [Validators.required]],
      pu_expired_date: [null, null],
      pu_tax: ['', [Validators.required]],
      pu_weight: ['', null],
      pu_saleoff: ['', null],
    });

    this.formDes = this.formBuilder.group({
      pu_short_description: ['', null],
      pu_description: ['', null],
    });
  }

  private _fetchFilter() {
    const category$ = this.productService.loadCategory().pipe(takeUntil(this.destroyed$));
    category$.subscribe((res: any) => {
      this.categories = res.Data;
    });

    const supplier$ = this.productService.loadSupplier().pipe(takeUntil(this.destroyed$));
    supplier$.subscribe((res: any) => {
      this.suppliers = res.Data;
    });

    const unit$ = this.productService.loadUnit().pipe(takeUntil(this.destroyed$));
    unit$.subscribe((res: any) => {
      this.units = res.Data;
    });
  }

  private _fetchProduct(pu_id: any) {
    const info$ = this.productService.loadProductInfo({ pu_id }).pipe(takeUntil(this.destroyed$));
    info$.subscribe((res: any) => {
      if (res && res.Data) {
        this._patchProduct(res.Data);
      }
    });
  }

  private _patchProduct(product: any) {
    this.formProduct.patchValue({
      pu_name: product.pu_name,
      pu_quantity: product.pu_quantity,
      pu_buy_price: product.pu_buy_price,
      pu_sale_price: product.pu_sale_price,
      pu_saleoff: product.pu_saleoff,
      pu_unit: product.pu_unit,
      product_category_id: product.product_category_id,
      provider_id: product.provider_id,
      pu_tax: product.pu_tax,
      pu_expired_date: this._convertDateToNgbDate(product.pu_expired_date),
      pu_weight: product.pu_weight,
    });

    this.formDes.patchValue({
      pu_short_description: product.pu_short_description,
      pu_description: product.pu_description,
    });
  }

  private _createProduct(data: any) {
    const createProduct$ = this.productService.createProduct(data).pipe(takeUntil(this.destroyed$));
    createProduct$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/product/list-product']);
        } else {
          this._notify(false, res.Message);
          this.errorField = res.Error;
        }
      },
      (e) => {
        this._notify(false, e.Message);
        this.errorField = e.Error;
      }
    );
  }

  private _updateProduct(updated: any) {
    const updateProduct$ = this.productService
      .updateProduct(updated)
      .pipe(takeUntil(this.destroyed$));
    updateProduct$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this.router.navigate(['/product/list-product']);
        } else {
          this._notify(false, res.Message);
          this.errorField = res.Error;
        }
      },
      (e) => {
        this._notify(false, e.Message);
        this.errorField = e.Error;
      }
    );
  }

  private _convertNgbDateToDate(ngbDate: any) {
    if (!ngbDate) {
      return '';
    }
    if (isUndefined(ngbDate.year)) return ngbDate;
    const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    return moment(newDate).format();
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

  private _notify(isSuccess: boolean, message: string) {
    return Swal.fire({
      toast: true,
      position: 'top-end',
      type: isSuccess ? 'success' : 'error',
      title: message,
      showConfirmButton: false,
      timer: 2000,
    });
  }
  //#endregion
}
