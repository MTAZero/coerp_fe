import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketComponent } from './ticket/ticket.component';
import { DownloadComponent } from './download/download.component';
import { PricingComponent } from './pricing/pricing.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {
    path: 'ticket',
    component: TicketComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'my-profile',
    component: MyProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule {}
