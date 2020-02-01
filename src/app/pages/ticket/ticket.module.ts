import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket.component';
import { TicketRoutingModule } from './ticket-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { FormsModule } from '@angular/forms';

import {
  NgbTypeaheadModule,
  NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';
import { TicketSortableDirective } from './ticket-sortable.directive';

@NgModule({
  declarations: [TicketComponent, TicketSortableDirective],
  imports: [
    CommonModule,
    TicketRoutingModule,
    UIModule,
    CommonModule,
    UIModule,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule
  ]
})
export class TicketModule {}
