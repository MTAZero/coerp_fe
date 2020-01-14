import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbTabsetModule,
  NgbAccordionModule,
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';
import {
  NgbModalModule,
  NgbPaginationModule,
  NgbTypeaheadModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { StaffRoutingModule } from './staff-routing.module';

import { ListStaffComponent } from './list-staff/list-staff.component';
import { ConfirmModalComponent } from './list-staff/component/confirm-modal/confirm-modal.component';
import { StaffModalComponent } from './list-staff/component/staff-modal/staff-modal.component';
import { ListPositionModalComponent } from './list-staff/component/list-position-modal/list-position-modal.component';
import { PositionModalComponent } from './list-staff/component/position-modal/position-modal.component';
import { ListDepartmentModalComponent } from './list-staff/component/list-department-modal/list-department-modal.component';
import { DepartmentModalComponent } from './list-staff/component/department-modal/department-modal.component';

@NgModule({
  declarations: [
    ListStaffComponent,
    ConfirmModalComponent,
    StaffModalComponent,
    ListPositionModalComponent,
    PositionModalComponent,
    ListDepartmentModalComponent,
    DepartmentModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    NgbTabsetModule,
    NgbAccordionModule,
    NgbDatepickerModule,
    NgbModalModule,
    NgbPaginationModule,
    NgApexchartsModule,
    NgbTypeaheadModule,
    StaffRoutingModule,
    Ng2SearchPipeModule
  ],
  entryComponents: [
    ConfirmModalComponent,
    StaffModalComponent,
    ListPositionModalComponent,
    PositionModalComponent,
    ListDepartmentModalComponent,
    DepartmentModalComponent
  ]
})
export class StaffModule {}
