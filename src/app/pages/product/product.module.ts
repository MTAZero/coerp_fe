import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTabsetModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ResizableModule } from 'angular-resizable-element';
import { UIModule } from '../../shared/ui/ui.module';
import {
  NgbModalModule,
  NgbPaginationModule,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductModalComponent } from './list-product/component/product-modal/product-modal.component';
import { ListUnitModalComponent } from './list-product/component/list-unit-modal/list-unit-modal.component';
import { UnitModalComponent } from './list-product/component/unit-modal/unit-modal.component';
import { ListProductTypeModalComponent } from './list-product/component/list-product-type-modal/list-product-type-modal.component';
import { ProductTypeModalComponent } from './list-product/component/product-type-modal/product-type-modal.component';
import { DescriptionTabComponent } from './list-product/component/description-tab/description-tab.component';
import { PurchaseHistoryTabComponent } from './list-product/component/purchase-history-tab/purchase-history-tab.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { OrderModalComponent } from './list-order/component/order-modal/order-modal.component';
import { ProductStatisticComponent } from './product-statistic/product-statistic.component';
import { ListProductDetailComponent } from './list-product-detail/list-product-detail.component';
import { ListOrderDetailComponent } from './list-order-detail/list-order-detail.component';
import { CustomerModule } from '../customer/customer.module';

@NgModule({
  declarations: [
    ListProductComponent,
    ProductModalComponent,
    ListUnitModalComponent,
    UnitModalComponent,
    ListProductTypeModalComponent,
    ProductTypeModalComponent,
    DescriptionTabComponent,
    PurchaseHistoryTabComponent,
    ListOrderComponent,
    OrderModalComponent,
    ProductStatisticComponent,
    ListProductDetailComponent,
    ListOrderDetailComponent,
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
    NgbProgressbarModule,
    ResizableModule,
    NgSelectModule,
    CustomerModule,
  ],
  entryComponents: [
    ProductModalComponent,
    ListUnitModalComponent,
    UnitModalComponent,
    ListProductTypeModalComponent,
    ProductTypeModalComponent,
    OrderModalComponent,
  ],
})
export class ProductModule {}
