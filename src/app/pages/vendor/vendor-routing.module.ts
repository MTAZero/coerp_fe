import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListVendorComponent } from './list-vendor/list-vendor.component';

const routes: Routes = [
  {
    path: 'list-vendor',
    component: ListVendorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule {}
