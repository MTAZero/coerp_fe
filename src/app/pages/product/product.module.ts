import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbTabsetModule,
  NgbAccordionModule,
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';
import {
  NgbModalModule,
  NgbPaginationModule,
  NgbTypeaheadModule
} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductModalComponent } from './list-product/component/product-modal/product-modal.component';
import { ConfirmModalComponent } from './list-product/component/confirm-modal/confirm-modal.component';
import { ListUnitModalComponent } from './list-product/component/list-unit-modal/list-unit-modal.component';
import { UnitModalComponent } from './list-product/component/unit-modal/unit-modal.component';
import { ListProductTypeModalComponent } from './list-product/component/list-product-type-modal/list-product-type-modal.component';
import { ProductTypeModalComponent } from './list-product/component/product-type-modal/product-type-modal.component';
import { DescriptionTabComponent } from './list-product/component/description-tab/description-tab.component';
import { PurchaseHistoryTabComponent } from './list-product/component/purchase-history-tab/purchase-history-tab.component';

@NgModule({
  declarations: [
    ListProductComponent,
    ProductModalComponent,
    ConfirmModalComponent,
    ListUnitModalComponent,
    UnitModalComponent,
    ListProductTypeModalComponent,
    ProductTypeModalComponent,
    DescriptionTabComponent,
    PurchaseHistoryTabComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    NgbTabsetModule,
    NgbAccordionModule,
    NgbDatepickerModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    ProductRoutingModule,
    Ng2SearchPipeModule
  ],
  entryComponents: [
    ProductModalComponent,
    ConfirmModalComponent,
    ListUnitModalComponent,
    UnitModalComponent,
    ListProductTypeModalComponent,
    ProductTypeModalComponent
  ]
})
export class ProductModule {}
