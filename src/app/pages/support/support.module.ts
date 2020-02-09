import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';
import { UIModule } from '../../shared/ui/ui.module';
import { FormsModule } from '@angular/forms';
import {
  NgbTypeaheadModule,
  NgbPaginationModule,
  NgbTooltipModule,
  NgbModalModule,
  NgbDatepickerModule,
  NgbTabsetModule,
  NgbProgressbarModule
} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TicketSortableDirective } from './ticket/ticket-sortable.directive';
import { SupportRoutingModule } from './support-routing.module';
import { DownloadComponent } from './download/download.component';
import { PricingComponent } from './pricing/pricing.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    TicketComponent,
    TicketSortableDirective,
    DownloadComponent,
    PricingComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    UIModule,
    CommonModule,
    UIModule,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbTooltipModule,
    NgbModalModule,
    NgbDatepickerModule,
    NgbTabsetModule,
    NgbProgressbarModule,
    NgApexchartsModule,
    ChartsModule,
    NgbPaginationModule
  ]
})
export class SupportModule {}
