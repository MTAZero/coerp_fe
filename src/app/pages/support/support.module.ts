import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';
import { UIModule } from '../../shared/ui/ui.module';
import { FormsModule } from '@angular/forms';
import {
  NgbTypeaheadModule,
  NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';
import { TicketSortableDirective } from './ticket/ticket-sortable.directive';
import { SupportRoutingModule } from './support-routing.module';
import { DownloadComponent } from './download/download.component';
@NgModule({
  declarations: [TicketComponent, TicketSortableDirective, DownloadComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    UIModule,
    CommonModule,
    UIModule,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule
  ]
})
export class SupportModule {}
