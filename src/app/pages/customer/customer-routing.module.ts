import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ListCustomerDetailComponent } from './list-customer-detail/list-customer-detail.component';
import { CustomerGroupComponent } from './customer-group/customer-group.component';
import { CustomerGroupDetailComponent } from './customer-group-detail/customer-group-detail.component';
import { ListTransactionProductComponent } from './list-transaction-product/list-transaction-product.component';
import { ListTransactionProductDetailComponent } from './list-transaction-product-detail/list-transaction-product-detail.component';
import { ListTransactionServiceComponent } from './list-transaction-service/list-transaction-service.component';
import { ListTransactionServiceDetailComponent } from './list-transaction-service-detail/list-transaction-service-detail.component';

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
    path: 'customer-group-detail/:cg_id',
    component: CustomerGroupDetailComponent,
  },
  {
    path: 'list-transaction-product',
    component: ListTransactionProductComponent,
  },
  {
    path: 'list-transaction-product-detail/:tra_id',
    component: ListTransactionProductDetailComponent,
  },
  {
    path: 'list-transaction-service',
    component: ListTransactionServiceComponent,
  },
  {
    path: 'list-transaction-service-detail/:tra_id',
    component: ListTransactionServiceDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
