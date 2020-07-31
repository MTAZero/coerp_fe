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
import { ListTrainingModalComponent } from './list-staff-detail/component/list-training-modal/list-training-modal.component';
import { BankTabComponent } from './list-staff/component/bank-tab/bank-tab.component';
import { BankModalComponent } from './list-staff/component/bank-modal/bank-modal.component';
import { RelativeTabComponent } from './list-staff/component/relative-tab/relative-tab.component';
import { RelativeModalComponent } from './list-staff/component/relative-modal/relative-modal.component';
import { BonusModalComponent } from './list-staff/component/bonus-modal/bonus-modal.component';
import { BonusTabComponent } from './list-staff/component/bonus-tab/bonus-tab.component';
import { AttachmentModalComponent } from './list-staff/component/attachment-modal/attachment-modal.component';
import { AttachmentTabComponent } from './list-staff/component/attachment-tab/attachment-tab.component';
import { CourseStaffComponent } from './course-staff/course-staff.component';
import { CourseStaffDetailComponent } from './course-staff-detail/course-staff-detail.component';
import { ListDeviceComponent } from './list-device/list-device.component';
import { ListDeviceDetailComponent } from './list-device-detail/list-device-detail.component';
import { DeviceTabComponent } from './list-staff/component/device-tab/device-tab.component';
import { DeviceModalComponent } from './list-staff/component/device-modal/device-modal.component';

@NgModule({
  declarations: [
    ListStaffComponent,
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
    ListTrainingModalComponent,
    BankTabComponent,
    BankModalComponent,
    RelativeTabComponent,
    RelativeModalComponent,
    BonusModalComponent,
    BonusTabComponent,
    AttachmentModalComponent,
    AttachmentTabComponent,
    CourseStaffComponent,
    CourseStaffDetailComponent,
    ListDeviceComponent,
    ListDeviceDetailComponent,
    DeviceTabComponent,
    DeviceModalComponent,
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
  entryComponents: [
    AddressModalComponent,
    TrainingModalComponent,
    ListTrainingModalComponent,
    BankModalComponent,
    RelativeModalComponent,
    BonusModalComponent,
    DeviceModalComponent,
    AttachmentModalComponent,
  ],
})
export class StaffModule {}
