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
    path: 'support',
    loadChildren: () =>
      import('./support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'enterprise',
    loadChildren: () =>
      import('./enterprise/enterprise.module').then(m => m.EnterpriseModule)
  },
  {
    path: 'vendor',
    loadChildren: () =>
      import('./vendor/vendor.module').then(m => m.VendorModule)
  },
  {
    path: 'mail',
    loadChildren: () => import('./mail/mail.module').then(m => m.MailModule)
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
