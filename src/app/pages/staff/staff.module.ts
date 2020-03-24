import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTabsetModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

import { StaffRoutingModule } from './staff-routing.module';
import { ApiModule } from '../../core/services/api/api.module';

import { ListStaffComponent } from './list-staff/list-staff.component';
import { StaffModalComponent } from './list-staff/component/staff-modal/staff-modal.component';
import { ListPositionModalComponent } from './list-staff/component/list-position-modal/list-position-modal.component';
import { PositionModalComponent } from './list-staff/component/position-modal/position-modal.component';
import { ListDepartmentModalComponent } from './list-staff/component/list-department-modal/list-department-modal.component';
import { DepartmentModalComponent } from './list-staff/component/department-modal/department-modal.component';
import { AddressTabComponent } from './list-staff/component/address-tab/address-tab.component';
import { AddressModalComponent } from './list-staff/component/address-modal/address-modal.component';
import { AssignedWorkComponent } from './assigned-work/assigned-work.component';

@NgModule({
  declarations: [
    ListStaffComponent,
    StaffModalComponent,
    ListPositionModalComponent,
    PositionModalComponent,
    ListDepartmentModalComponent,
    DepartmentModalComponent,
    AddressTabComponent,
    AddressModalComponent,
    AssignedWorkComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    NgbTabsetModule,
    NgbDatepickerModule,
    NgbModalModule,
    NgbPaginationModule,
    StaffRoutingModule,
    ApiModule,
    NgApexchartsModule
  ],
  entryComponents: [
    StaffModalComponent,
    ListPositionModalComponent,
    PositionModalComponent,
    ListDepartmentModalComponent,
    DepartmentModalComponent,
    AddressModalComponent
  ]
})
export class StaffModule {}
