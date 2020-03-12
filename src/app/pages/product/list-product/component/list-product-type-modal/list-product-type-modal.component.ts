import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductTypeModalComponent } from '../product-type-modal/product-type-modal.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-product-type-modal',
  templateUrl: './list-product-type-modal.component.html',
  styleUrls: ['./list-product-type-modal.component.scss']
})
export class ListProductTypeModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  productTypes: any[];
  selectedProductType: any;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.loadProductTypeData();
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }

  onClickChoose() {
    this.passEvent.emit({ event: false });
  }

  onClickProductType(productType: any) {
    if (isNullOrUndefined(this.selectedProductType)) {
      this.selectedProductType = productType;
    } else {
      if (this.selectedProductType.product_type_id !== productType.product_type_id) {
        this.selectedProductType = productType;
      } else {
        this.selectedProductType = null;
      }
    }
  }

  openProductTypeModal() {
    const modalRef = this.modalService.open(ProductTypeModalComponent, {
      centered: true
    });
    if (this.selectedProductType) {
      modalRef.componentInstance.productType = this.selectedProductType;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (this.selectedProductType) {
          this.updateProductType(this.selectedProductType, res.form);
        } else {
          this.createProductType(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {}

  private loadProductTypeData() {
    this.productTypes = [];
  }

  private createProductType(data: any) {}

  private updateProductType(productTypeId: any, data: any) {}

  private removeProductType(productType: any) {}
}
