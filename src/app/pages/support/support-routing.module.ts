import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketComponent } from './ticket/ticket.component';
import { DownloadComponent } from './download/download.component';

const routes: Routes = [
  {
    path: 'ticket',
    component: TicketComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule {}
