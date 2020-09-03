import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTabsetModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';

import { CurrencyPipe, DecimalPipe } from '@angular/common';

import { UIModule } from '../../shared/ui/ui.module';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgSelectModule } from '@ng-select/ng-select';
import { ServiceRoutingModule } from './service-routing.module';
import { ListServiceComponent } from './list-service/list-service.component';
import { OrderServiceCalendarComponent } from './order-service-calendar/order-service-calendar.component';
import { ReceiveWorkComponent } from './receive-work/receive-work.component';
import { ListOrderServiceComponent } from './list-order-service/list-order-service.component';
import { OrderServiceMainComponent } from './list-order-service/component/order-service-main/order-service-main.component';
import { OrderServiceDetailComponent } from './list-order-service/component/order-service-detail/order-service-detail.component';
import { ListOrderServiceDetailComponent } from './list-order-service-detail/list-order-service-detail.component';
import { CustomerModule } from '../customer/customer.module';
import { ExecutorModalComponent } from './list-order-service-detail/component/executor-modal/executor-modal.component';
import { ListServiceDetailComponent } from './list-service-detail/list-service-detail.component';
import { UsdOnlyDirective } from './list-service-detail/usd-only.directive';
@NgModule({
  declarations: [
    ListServiceComponent,
    OrderServiceCalendarComponent,
    ReceiveWorkComponent,
    ListOrderServiceComponent,
    OrderServiceMainComponent,
    OrderServiceDetailComponent,
    ListOrderServiceDetailComponent,
    ExecutorModalComponent,
    ListServiceDetailComponent,
    UsdOnlyDirective,
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
    FullCalendarModule,
    NgApexchartsModule,
    NgSelectModule,
    CustomerModule,
  ],
  entryComponents: [ExecutorModalComponent],
  providers: [ CurrencyPipe, DecimalPipe ],
})
export class ServiceModule {}
