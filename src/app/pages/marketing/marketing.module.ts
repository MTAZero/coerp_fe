import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModule } from '../../shared/ui/ui.module';
import {
  NgbModalModule,
  NgbPaginationModule,
  NgbDropdownModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgxEditorModule } from 'ngx-editor';
import { MarketingRoutingModule } from './marketing-routing.module';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { ConfirmModalComponent as EmailTemplateConfirm } from './email-template/component/confirm-modal/confirm-modal.component';
import { EmailTemplateModalComponent } from './email-template/component/email-template-modal/email-template-modal.component';
import { SmsTemplateComponent } from './sms-template/sms-template.component';
import { SmsTemplateModalComponent } from './sms-template/component/sms-template-modal/sms-template-modal.component';
import { ConfirmModalComponent as SmsTemplateConfirm } from './sms-template/component/confirm-modal/confirm-modal.component';
import { ViewSmsTemplateModalComponent } from './sms-template/component/view-sms-template-modal/view-sms-template-modal.component';
import { EmailCampaignComponent } from './email-campaign/email-campaign.component';
import { ListCustomerModalComponent as EmailCustomer } from './email-campaign/component/list-customer-modal/list-customer-modal.component';
import { ListEmailModalComponent } from './email-campaign/component/list-email-modal/list-email-modal.component';
import { SmsCampaignComponent } from './sms-campaign/sms-campaign.component';
import { ListSmsModalComponent } from './sms-campaign/component/list-sms-modal/list-sms-modal.component';
import { ListCustomerModalComponent as SmsCustomer } from './sms-campaign/component/list-customer-modal/list-customer-modal.component';
import { ConfirmModalComponent as SmsCampaignConfirm } from './sms-campaign/component/confirm-modal/confirm-modal.component';
import { SmsCampaignModalComponent } from './sms-campaign/component/sms-campaign-modal/sms-campaign-modal.component';

@NgModule({
  declarations: [
    EmailTemplateComponent,
    EmailTemplateConfirm,
    EmailTemplateModalComponent,
    SmsTemplateComponent,
    SmsTemplateModalComponent,
    SmsTemplateConfirm,
    ViewSmsTemplateModalComponent,
    EmailCampaignComponent,
    EmailCustomer,
    ListEmailModalComponent,
    SmsCampaignComponent,
    ListSmsModalComponent,
    SmsCustomer,
    SmsCampaignConfirm,
    SmsCampaignModalComponent
  ],
  imports: [
    CommonModule,
    MarketingRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    NgbModalModule,
    NgbPaginationModule,
    NgxEditorModule,
    NgbDropdownModule
  ],
  entryComponents: [
    EmailTemplateConfirm,
    EmailTemplateModalComponent,
    SmsTemplateModalComponent,
    SmsTemplateConfirm,
    ViewSmsTemplateModalComponent,
    EmailCustomer,
    ListEmailModalComponent,
    SmsCustomer,
    SmsCampaignConfirm,
    SmsCampaignModalComponent,
    ListSmsModalComponent
  ]
})
export class MarketingModule {}
