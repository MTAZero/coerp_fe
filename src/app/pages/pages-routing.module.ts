import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule)
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'service',
    loadChildren: () =>
      import('./service/service.module').then(m => m.ServiceModule)
  },
  {
    path: 'ticket',
    loadChildren: () =>
      import('./ticket/ticket.module').then(m => m.TicketModule)
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
