import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTabsetModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgSelectModule } from '@ng-select/ng-select';

import { StaffRoutingModule } from './staff-routing.module';
import { ApiModule } from '../../core/services/api/api.module';

import { ListStaffComponent } from './list-staff/list-staff.component';
import { StaffModalComponent } from './list-staff/component/staff-modal/staff-modal.component';
import { AddressModalComponent } from './list-staff/component/address-modal/address-modal.component';
import { AssignedWorkComponent } from './assigned-work/assigned-work.component';
import { AssignWorkComponent } from './assign-work/assign-work.component';
import { AddressPermanentTabComponent } from './list-staff/component/address-permanent-tab/address-permanent-tab.component';
import { AddressNowTabComponent } from './list-staff/component/address-now-tab/address-now-tab.component';
import { UndertakenLocationTabComponent } from './list-staff/component/undertaken-location-tab/undertaken-location-tab.component';
import { TrainingTabComponent } from './list-staff/component/training-tab/training-tab.component';
import { IdentityCardTabComponent } from './list-staff/component/identity-card-tab/identity-card-tab.component';
import { TrainingModalComponent } from './list-staff/component/training-modal/training-modal.component';
import { ListStaffDetailComponent } from './list-staff-detail/list-staff-detail.component';

@NgModule({
  declarations: [
    ListStaffComponent,
    StaffModalComponent,
    AddressModalComponent,
    AssignedWorkComponent,
    AssignWorkComponent,
    AddressPermanentTabComponent,
    AddressNowTabComponent,
    UndertakenLocationTabComponent,
    TrainingTabComponent,
    IdentityCardTabComponent,
    TrainingModalComponent,
    ListStaffDetailComponent,
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
    NgApexchartsModule,
    NgSelectModule,
  ],
  entryComponents: [StaffModalComponent, AddressModalComponent, TrainingModalComponent],
})
export class StaffModule {}
