import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbTabsetModule,
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';
import {
  NgbModalModule,
  NgbPaginationModule,
  NgbProgressbarModule
} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductModalComponent } from './list-product/component/product-modal/product-modal.component';
import { ConfirmModalComponent as ProductComfirm } from './list-product/component/confirm-modal/confirm-modal.component';
import { ListUnitModalComponent } from './list-product/component/list-unit-modal/list-unit-modal.component';
import { UnitModalComponent } from './list-product/component/unit-modal/unit-modal.component';
import { ListProductTypeModalComponent } from './list-product/component/list-product-type-modal/list-product-type-modal.component';
import { ProductTypeModalComponent } from './list-product/component/product-type-modal/product-type-modal.component';
import { DescriptionTabComponent } from './list-product/component/description-tab/description-tab.component';
import { PurchaseHistoryTabComponent } from './list-product/component/purchase-history-tab/purchase-history-tab.component';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { ConfirmModalComponent as VendorConfirm } from './list-vendor/component/confirm-modal/confirm-modal.component';
import { ListVendorTypeModalComponent } from './list-vendor/component/list-vendor-type-modal/list-vendor-type-modal.component';
import { VendorTypeModalComponent } from './list-vendor/component/vendor-type-modal/vendor-type-modal.component';
import { VendorModalComponent } from './list-vendor/component/vendor-modal/vendor-modal.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { ConfirmModalComponent as OrderConfirm } from './list-order/component/confirm-modal/confirm-modal.component';
import { OrderModalComponent } from './list-order/component/order-modal/order-modal.component';

@NgModule({
  declarations: [
    ListProductComponent,
    ProductModalComponent,
    ProductComfirm,
    ListUnitModalComponent,
    UnitModalComponent,
    ListProductTypeModalComponent,
    ProductTypeModalComponent,
    DescriptionTabComponent,
    PurchaseHistoryTabComponent,
    ListVendorComponent,
    VendorConfirm,
    ListVendorTypeModalComponent,
    VendorTypeModalComponent,
    VendorModalComponent,
    ListOrderComponent,
    OrderConfirm,
    OrderModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    NgbTabsetModule,
    NgbDatepickerModule,
    NgbModalModule,
    NgbPaginationModule,
    ProductRoutingModule,
    Ng2SearchPipeModule,
    NgbProgressbarModule
  ],
  entryComponents: [
    ProductModalComponent,
    ProductComfirm,
    ListUnitModalComponent,
    UnitModalComponent,
    ListProductTypeModalComponent,
    ProductTypeModalComponent,
    VendorConfirm,
    ListVendorTypeModalComponent,
    VendorTypeModalComponent,
    VendorModalComponent,
    OrderConfirm,
    OrderModalComponent
  ]
})
export class ProductModule {}
