import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModule } from '../../shared/ui/ui.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { VendorRoutingModule } from './vendor-routing.module';

@NgModule({
  declarations: [ListVendorComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    NgApexchartsModule,
    Ng2SearchPipeModule
  ]
})
export class VendorModule {}
