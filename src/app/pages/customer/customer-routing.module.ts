import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ListCustomerDetailComponent } from './list-customer-detail/list-customer-detail.component';
import { CustomerGroupComponent } from './customer-group/customer-group.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';

const routes: Routes = [
  {
    path: 'list-customer',
    component: ListCustomerComponent,
  },
  {
    path: 'list-customer-detail/:cu_id',
    component: ListCustomerDetailComponent,
  },
  {
    path: 'customer-group',
    component: CustomerGroupComponent,
  },
  {
    path: 'customer-care',
    component: CustomerCareComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
