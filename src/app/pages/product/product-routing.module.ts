import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductComponent } from './list-product/list-product.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { ProductStatisticComponent } from './product-statistic/product-statistic.component';

const routes: Routes = [
  {
    path: 'list-product',
    component: ListProductComponent
  },
  {
    path: 'list-order',
    component: ListOrderComponent
  },
  {
    path: 'product-statistic',
    component: ProductStatisticComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
