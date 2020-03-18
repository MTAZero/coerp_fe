import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTabsetModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FullCalendarModule } from '@fullcalendar/angular';

import { ServiceRoutingModule } from './service-routing.module';
import { ListServiceComponent } from './list-service/list-service.component';
import { ServiceModalComponent } from './list-service/component/service-modal/service-modal.component';
import { ListServiceCategoryModalComponent } from './list-service/component/list-service-category-modal/list-service-category-modal.component';
import { ServiceCategoryModalComponent } from './list-service/component/service-category-modal/service-category-modal.component';
import { OrderServiceComponent } from './order-service/order-service.component';
import { OrderServiceModalComponent } from './order-service/component/order-service-modal/order-service-modal.component';

@NgModule({
  declarations: [
    ListServiceComponent,
    ServiceModalComponent,
    ListServiceCategoryModalComponent,
    ServiceCategoryModalComponent,
    OrderServiceComponent,
    OrderServiceModalComponent
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
    ServiceRoutingModule,
    Ng2SearchPipeModule,
    FullCalendarModule
  ],
  entryComponents: [
    ServiceModalComponent,
    ListServiceCategoryModalComponent,
    ServiceCategoryModalComponent,
    OrderServiceModalComponent
  ]
})
export class ServiceModule {}
