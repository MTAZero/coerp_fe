import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
    path: 'service',
    loadChildren: () =>
      import('./service/service.module').then(m => m.ServiceModule)
  },
  { path: '', redirectTo: '/staff/list-staff', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
