import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { isNullOrUndefined, isUndefined } from 'util';
import { ProductService } from '../../../core/services/api/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();

  submitted: boolean;
  categories: any;

  textSearch = '';
  categorySearch = '';
  fromDate = this._convertDateToNgbDate(new Date('2010-01-01'));
  toDate = this._convertDateToNgbDate(new Date());
  page = 1;
  pageSize = 10;
  totalSize = 0;

  selectedProduct = null;
  products: any;

  constructor(private productService: ProductService, private router: Router) {}
  ngOnInit() {
    this._fetchData();
    this._fetchFilter();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onClickProduct(product: any) {
    if (isNullOrUndefined(this.selectedProduct)) {
      this.selectedProduct = product;
    } else {
      if (this.selectedProduct.pu_id !== product.pu_id) {
        this.selectedProduct = product;
      } else {
        this.selectedProduct = null;
      }
    }
  }

  onRouteDetail(product?: any) {
    this.router.navigate(['/product/list-product-detail', product ? product.pu_id : '']);
  }

  openConfirmModal(product?: any) {
    this.onClickProduct(product);
    Swal.fire({
      title: 'Chắc chắn muốn xóa sản phẩm đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeProduct(product);
      }
    });
  }

  onPageChange(page: number): void {
    this.page = page;
    this._fetchData();
  }

  onChangeFilter() {
    this._fetchData(this.selectedProduct);
  }

  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const import$ = this.productService
        .updateImage(file, this.selectedProduct.pu_id)
        .pipe(takeUntil(this.destroyed$));
      import$.subscribe(
        (res: any) => {
          if (res && res.Code == 200) {
            this._notify(true, res.Message);
            this._fetchData();
          } else this._notify(false, res.Message);
        },
        (e) => this._notify(false, e.Message)
      );
      // const reader = new FileReader();
      // reader.onload = e => (this.thumbnail = reader.result);

      // reader.readAsDataURL(file);
    }
  }

  exportProduct() {
    const export$ = this.productService
      .exportProduct({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch,
        category_id: this.categorySearch,
        start_date: this._convertNgbDateToDate(this.fromDate),
        end_date: this._convertNgbDateToDate(this.toDate),
      })
      .pipe(takeUntil(this.destroyed$));
    export$.subscribe((res: any) => {
      if (res && res.Data) {
        const link = 'http://27.72.147.222:1230/' + res.Data;
        window.open(link);
      }
    });
  }

  private _fetchData(selected?: any) {
    const product$ = this.productService
      .searchProduct({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch,
        category_id: this.categorySearch,
        start_date: this._convertNgbDateToDate(this.fromDate),
        end_date: this._convertNgbDateToDate(this.toDate),
      })
      .pipe(takeUntil(this.destroyed$));
    product$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.products = res.Data.Results;

        if (selected) {
          this.selectedProduct = this.products.find((item) => item.pu_id === selected.pu_id);
        } else {
          this.selectedProduct = this.products[0];
        }
      }
    });
  }

  private _fetchFilter() {
    const category$ = this.productService.loadCategory().pipe(takeUntil(this.destroyed$));
    category$.subscribe((res: any) => {
      this.categories = res.Data;
    });
  }

  private _removeProduct(product: any) {
    const removeProduct$ = this.productService
      .removeProduct({ productId: product.pu_id })
      .pipe(takeUntil(this.destroyed$));
    removeProduct$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this._fetchData();
        } else this._notify(false, res.Message);
      },
      (e) => this._notify(false, e.Message)
    );
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
    if (isUndefined(ngbDate.year)) return ngbDate;
    const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    return moment(newDate).format('YYYY-MM-DD');
  }
}
