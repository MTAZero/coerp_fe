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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FullCalendarModule } from '@fullcalendar/angular';

import { ServiceRoutingModule } from './service-routing.module';
import { ListServiceComponent } from './list-service/list-service.component';
import { ConfirmModalComponent as ListServiceConfirm } from './list-service/component/confirm-modal/confirm-modal.component';
import { ServiceModalComponent } from './list-service/component/service-modal/service-modal.component';
// tslint:disable-next-line:max-line-length
import { ListServiceCategoryModalComponent } from './list-service/component/list-service-category-modal/list-service-category-modal.component';
import { ServiceCategoryModalComponent } from './list-service/component/service-category-modal/service-category-modal.component';
import { OrderServiceComponent } from './order-service/order-service.component';
import { OrderServiceModalComponent } from './order-service/component/order-service-modal/order-service-modal.component';
import { ConfirmModalComponent as OrderServiceConfirm } from './order-service/component/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    ListServiceComponent,
    ListServiceConfirm,
    ServiceModalComponent,
    ListServiceCategoryModalComponent,
    ServiceCategoryModalComponent,
    OrderServiceComponent,
    OrderServiceModalComponent,
    OrderServiceConfirm
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
    NgbTypeaheadModule,
    ServiceRoutingModule,
    Ng2SearchPipeModule,
    FullCalendarModule
  ],
  entryComponents: [
    ListServiceConfirm,
    ServiceModalComponent,
    ListServiceCategoryModalComponent,
    ServiceCategoryModalComponent,
    OrderServiceConfirm,
    OrderServiceModalComponent
  ]
})
export class ServiceModule {}
