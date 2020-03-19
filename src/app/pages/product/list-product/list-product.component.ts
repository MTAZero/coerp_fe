import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from './component/product-modal/product-modal.component';
import { isNullOrUndefined } from 'util';
import { ProductService } from '../../../core/services/api/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  private destroyed$ = new Subject();

  submitted: boolean;
  categories: any;

  textSearch = '';
  categorySearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  selectedProduct = null;
  products: any;

  constructor(private modalService: NgbModal, private productService: ProductService) {}
  ngOnInit() {
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
    this.onClickProduct(product);
    Swal.fire({
      title: 'Chắc chắn muốn xóa sản phẩm đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(result => {
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
            this.modalService.dismissAll();
          } else this._notify(false, res.Message);
        },
        e => this._notify(false, e.Message)
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
        category_id: this.categorySearch
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
      .loadProduct({
        pageNumber: this.page - 1,
        pageSize: this.pageSize,
        search_name: this.textSearch,
        category_id: this.categorySearch
      })
      .pipe(takeUntil(this.destroyed$));
    product$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.products = res.Data.Results;

        if (selected) {
          this.selectedProduct = this.products.find(item => item.pu_id === selected.pu_id);
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

  private _createProduct(data: any) {
    const createProduct$ = this.productService.createProduct(data).pipe(takeUntil(this.destroyed$));
    createProduct$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this._fetchData();
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      e => this._notify(false, e.Message)
    );
  }

  private _updateProduct(updated: any) {
    const updateProduct$ = this.productService
      .updateProduct(updated)
      .pipe(takeUntil(this.destroyed$));
    updateProduct$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._notify(true, res.Message);
          this._fetchData();
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      e => this._notify(false, e.Message)
    );
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
          this.modalService.dismissAll();
        } else this._notify(false, res.Message);
      },
      e => this._notify(false, e.Message)
    );
  }

  private _notify(isSuccess: boolean, message: string) {
    return Swal.fire({
      toast: true,
      position: 'top-end',
      type: isSuccess ? 'success' : 'error',
      title: message,
      showConfirmButton: false,
      timer: 2000
    });
  }
}
