import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { ProductModalComponent } from './component/product-modal/product-modal.component';
import { isNullOrUndefined } from 'util';
import { ProductService } from '../../../core/services/api/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  private destroyed$ = new Subject();
  breadCrumbItems: Array<{}>;

  submitted: boolean;
  categories: any;

  textSearch = '';
  categorySearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  selectedProduct = null;
  products: any;

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder,
    private productService: ProductService
  ) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Sản phẩm', path: '/' },
      { label: 'Thông tin sản phẩm', path: '/', active: true }
    ];
    this._fetchData();
    this._fetchFilter();
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

  openProductModal(product?: any) {
    const modalRef = this.modalService.open(ProductModalComponent, {
      centered: true,
      size: 'lg'
    });
    if (product) {
      this.onClickProduct(product);
      modalRef.componentInstance.product = product;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (product) {
          this._updateProduct(res.form);
        } else {
          this._createProduct(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(product?: any) {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    this.onClickProduct(product);
    modalRef.componentInstance.title = 'Xác nhận xóa sản phẩm';
    modalRef.componentInstance.message = 'Bạn có chắc chắn muốn xóa sản phẩm đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this._removeProduct(product);
      }
      modalRef.close();
    });
  }

  onPageChange(page: number): void {
    this.page = page - 1;
    this._fetchData();
  }

  onChangeFilter() {
    this.page--;
    this._fetchData();
  }

  private _fetchData() {
    const product$ = this.productService
      .loadProduct({
        pageNumber: this.page,
        pageSize: this.pageSize,
        search_name: this.textSearch,
        category_id: this.categorySearch
      })
      .pipe(takeUntil(this.destroyed$));
    product$.subscribe((res: any) => {
      if (res) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.products = res.Data.Results;
      }
    });
  }

  private _fetchFilter() {
    const category$ = this.productService.loadCategory().pipe(takeUntil(this.destroyed$));

    category$.subscribe((res: any) => {
      this.categories = res.Data;
    });
  }

  private _createProduct(data: any) {
    const createProduct$ = this.productService.createProduct(data).pipe(takeUntil(this.destroyed$));
    createProduct$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _updateProduct(updated: any) {
    const updateProduct$ = this.productService
      .updateProduct(updated)
      .pipe(takeUntil(this.destroyed$));
    updateProduct$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }

  private _removeProduct(product: any) {
    const removeProduct$ = this.productService
      .removeProduct({ productId: product.pu_id })
      .pipe(takeUntil(this.destroyed$));
    removeProduct$.subscribe((res: any) => {
      if (res.Code === 200) {
        this.page--;
        this._fetchData();
        this.modalService.dismissAll();
      }
    });
  }
}
