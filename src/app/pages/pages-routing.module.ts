import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'marketing',
    loadChildren: () => import('./marketing/marketing.module').then(m => m.MarketingModule)
  },
  {
    path: 'vendor',
    loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then(m => m.ServiceModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'mail',
    loadChildren: () => import('./mail/mail.module').then(m => m.MailModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'enterprise',
    loadChildren: () => import('./enterprise/enterprise.module').then(m => m.EnterpriseModule),
    canActivate: [AdminGuard]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
