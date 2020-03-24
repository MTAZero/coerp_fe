import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListStaffComponent } from './list-staff/list-staff.component';
import { AssignedWorkComponent } from './assigned-work/assigned-work.component';

const routes: Routes = [
  {
    path: 'list-staff',
    component: ListStaffComponent
  },
  {
    path: 'assigned-work',
    component: AssignedWorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule {}
