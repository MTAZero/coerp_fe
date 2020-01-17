import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from './list-product.model';
import { productData } from './data';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { ProductModalComponent } from './component/product-modal/product-modal.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
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

  paginatedProductData: Array<Product>;
  selectProduct: Product;
  products: Array<Product>;

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Sản phẩm', path: '/' },
      { label: 'Thông tin sản phẩm', path: '/', active: true }
    ];
    this._fetchData();
  }

  openProductModal(product?: Product) {
    const modalRef = this.modalService.open(ProductModalComponent, {
      centered: true,
      size: 'lg'
    });
    if (product) {
      modalRef.componentInstance.product = product;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (product) {
          this.updateProduct(product, res.form);
        } else {
          this.createProduct(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa sản phẩm';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa sản phẩm đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeProduct();
      }
      modalRef.close();
    });
  }

  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    this.paginatedProductData = this.products.slice(
      this.startIndex,
      this.endIndex
    );
  }

  private _fetchData() {
    this.products = productData;
    // apply pagination
    this.startIndex = 0;
    this.endIndex = this.pageSize;

    this.paginatedProductData = this.products.slice(
      this.startIndex,
      this.endIndex
    );
    this.totalSize = this.products.length;
  }

  private createProduct(data: any) {
    this.submitted = true;
    this.totalSize = this.products.length + 1;
    this.paginatedProductData = this.products.slice(
      this.startIndex,
      this.endIndex
    );
  }

  private updateProduct(product: any, data: any) {}

  private removeProduct() {}
}
