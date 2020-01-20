import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductComponent } from './list-product/list-product.component';
import { ListVendorComponent } from './list-vendor/list-vendor.component';

const routes: Routes = [
  {
    path: 'list-product',
    component: ListProductComponent
  },
  {
    path: 'list-vendor',
    component: ListVendorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
