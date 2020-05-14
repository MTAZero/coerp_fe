import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCompanyComponent } from './list-company/list-company.component';
import { ListCompanyDetailComponent } from './list-company-detail/list-company-detail.component';
import { ListPackageComponent } from './list-package/list-package.component';
import { ListPackageDetailComponent } from './list-package-detail/list-package-detail.component';

const routes: Routes = [
  {
    path: 'list-company',
    component: ListCompanyComponent,
  },
  {
    path: 'list-company-detail/:co_id',
    component: ListCompanyDetailComponent,
  },
  {
    path: 'list-package',
    component: ListPackageComponent,
  },
  {
    path: 'list-package-detail/:pac_id',
    component: ListPackageDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermissionRoutingModule {}
