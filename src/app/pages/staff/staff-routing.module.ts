import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from '../../core/guards/admin.guard';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { ListStaffDetailComponent } from './list-staff-detail/list-staff-detail.component';
import { AssignedWorkComponent } from './assigned-work/assigned-work.component';
import { AssignWorkComponent } from './assign-work/assign-work.component';

const routes: Routes = [
  {
    path: 'list-staff',
    component: ListStaffComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'list-staff-detail/:sta_id',
    component: ListStaffDetailComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'assigned-work',
    component: AssignedWorkComponent,
  },
  {
    path: 'assign-work',
    component: AssignWorkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
