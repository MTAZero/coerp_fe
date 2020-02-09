import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailTemplateComponent } from './email-template/email-template.component';
import { SmsTemplateComponent } from './sms-template/sms-template.component';
import { EmailCampaignComponent } from './email-campaign/email-campaign.component';

const routes: Routes = [
  {
    path: 'email-template',
    component: EmailTemplateComponent
  },
  {
    path: 'sms-template',
    component: SmsTemplateComponent
  },
  {
    path: 'email-campaign',
    component: EmailCampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule {}
