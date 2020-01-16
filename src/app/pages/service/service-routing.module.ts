import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListServiceComponent } from './list-service/list-service.component';

const routes: Routes = [
  {
    path: 'list-service',
    component: ListServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule {}
