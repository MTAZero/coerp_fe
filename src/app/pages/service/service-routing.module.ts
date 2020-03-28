import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListServiceComponent } from './list-service/list-service.component';
import { OrderServiceComponent } from './order-service/order-service.component';
import { ReceiveWorkComponent } from './receive-work/receive-work.component';
import { ListOrderServiceComponent } from './list-order-service/list-order-service.component';

const routes: Routes = [
  {
    path: 'list-service',
    component: ListServiceComponent
  },
  {
    path: 'order-service',
    component: OrderServiceComponent
  },
  {
    path: 'receive-work',
    component: ReceiveWorkComponent
  },
  {
    path: 'list-order-service',
    component: ListOrderServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule {}
