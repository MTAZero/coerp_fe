import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTabsetModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { StaffRoutingModule } from './staff-routing.module';
import { ApiModule } from '../../core/services/api/api.module';

import { ListStaffComponent } from './list-staff/list-staff.component';
import { ConfirmModalComponent } from './list-staff/component/confirm-modal/confirm-modal.component';
import { StaffModalComponent } from './list-staff/component/staff-modal/staff-modal.component';
import { ListPositionModalComponent } from './list-staff/component/list-position-modal/list-position-modal.component';
import { PositionModalComponent } from './list-staff/component/position-modal/position-modal.component';
import { ListDepartmentModalComponent } from './list-staff/component/list-department-modal/list-department-modal.component';
import { DepartmentModalComponent } from './list-staff/component/department-modal/department-modal.component';
import { ProfileTabComponent } from './list-staff/component/profile-tab/profile-tab.component';
import { AddressTabComponent } from './list-staff/component/address-tab/address-tab.component';
import { AddressModalComponent } from './list-staff/component/address-modal/address-modal.component';

@NgModule({
  declarations: [
    ListStaffComponent,
    ConfirmModalComponent,
    StaffModalComponent,
    ListPositionModalComponent,
    PositionModalComponent,
    ListDepartmentModalComponent,
    DepartmentModalComponent,
    ProfileTabComponent,
    AddressTabComponent,
    AddressModalComponent
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
    ApiModule
  ],
  entryComponents: [
    ConfirmModalComponent,
    StaffModalComponent,
    ListPositionModalComponent,
    PositionModalComponent,
    ListDepartmentModalComponent,
    DepartmentModalComponent,
    AddressModalComponent
  ]
})
export class StaffModule {}
