import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailTemplateComponent } from './email-template/email-template.component';
import { SmsTemplateComponent } from './sms-template/sms-template.component';

const routes: Routes = [
  {
    path: 'email-template',
    component: EmailTemplateComponent
  },
  {
    path: 'sms-template',
    component: SmsTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule {}
