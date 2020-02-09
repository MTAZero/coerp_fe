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
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import { TicketSortableDirective } from './ticket/ticket-sortable.directive';
import { SupportRoutingModule } from './support-routing.module';
import { DownloadComponent } from './download/download.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [
    TicketComponent,
    TicketSortableDirective,
    DownloadComponent,
    PricingComponent
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
    NgbDatepickerModule
  ]
})
export class SupportModule {}
