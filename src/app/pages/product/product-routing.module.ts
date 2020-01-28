import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductComponent } from './list-product/list-product.component';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { ListOrderComponent } from './list-order/list-order.component';

const routes: Routes = [
  {
    path: 'list-product',
    component: ListProductComponent
  },
  {
    path: 'list-vendor',
    component: ListVendorComponent
  },
  {
    path: 'list-order',
    component: ListOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
