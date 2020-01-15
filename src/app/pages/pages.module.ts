import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { StaffModule } from './staff/staff.module';
import { CustomerModule } from './customer/customer.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbDropdownModule,
    StaffModule,
    CustomerModule,
    PagesRoutingModule
  ]
})
export class PagesModule {}
