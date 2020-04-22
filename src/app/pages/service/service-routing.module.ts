import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListServiceComponent } from './list-service/list-service.component';
import { OrderServiceCalendarComponent } from './order-service-calendar/order-service-calendar.component';
import { ReceiveWorkComponent } from './receive-work/receive-work.component';
import { ListOrderServiceComponent } from './list-order-service/list-order-service.component';
import { ListOrderServiceDetailComponent } from './list-order-service-detail/list-order-service-detail.component';

const routes: Routes = [
  {
    path: 'list-service',
    component: ListServiceComponent,
  },
  {
    path: 'order-service-calendar',
    component: OrderServiceCalendarComponent,
  },
  {
    path: 'receive-work',
    component: ReceiveWorkComponent,
  },
  {
    path: 'list-order-service',
    component: ListOrderServiceComponent,
  },
  {
    path: 'list-order-service-detail/:cuo_id',
    component: ListOrderServiceDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {}
