import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    this.page = page - 1;
    this._fetchData();
  }

  onChangeFilter() {
    this.page--;
    this._fetchData();
  }

  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const import$ = this.productService
        .updateImage(file, this.selectedProduct.pu_id)
        .pipe(takeUntil(this.destroyed$));
      import$.subscribe(
        (res: any) => {
          if (res.Code === 200) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Cập nhật ảnh sản phẩm thành công',
              showConfirmButton: false,
              timer: 2000
            });
            this.page--;
            this._fetchData();
          } else {
            Swal.fire({
              position: 'top-end',
              type: 'error',
              title: 'Cập nhật ảnh sản phẩm thất bại',
              showConfirmButton: false,
              timer: 2000
            });
          }
        },
        () => {
          Swal.fire({
            position: 'top-end',
            type: 'error',
            title: 'Cập nhật ảnh sản phẩm thất bại',
            showConfirmButton: false,
            timer: 2000
          });
        }
      );
      // const reader = new FileReader();
      // reader.onload = e => (this.thumbnail = reader.result);

      // reader.readAsDataURL(file);
    }
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
    createProduct$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Thêm sản phẩm thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this.page--;
          this._fetchData();
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Thêm sản phẩm thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }

  private _updateProduct(updated: any) {
    const updateProduct$ = this.productService
      .updateProduct(updated)
      .pipe(takeUntil(this.destroyed$));
    updateProduct$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Cập nhật sản phẩm thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this.page--;
          this._fetchData();
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Cập nhật sản phẩm thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }

  private _removeProduct(product: any) {
    const removeProduct$ = this.productService
      .removeProduct({ productId: product.pu_id })
      .pipe(takeUntil(this.destroyed$));
    removeProduct$.subscribe(
      (res: any) => {
        if (res.Code == 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Xóa sản phẩm thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this.page--;
          this._fetchData();
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Xóa sản phẩm thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }
}
