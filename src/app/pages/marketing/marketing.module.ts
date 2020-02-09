import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModule } from '../../shared/ui/ui.module';
import {
  NgbModalModule,
  NgbPaginationModule
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

@NgModule({
  declarations: [
    EmailTemplateComponent,
    EmailTemplateConfirm,
    EmailTemplateModalComponent,
    SmsTemplateComponent,
    SmsTemplateModalComponent,
    SmsTemplateConfirm,
    ViewSmsTemplateModalComponent
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
    NgxEditorModule
  ],
  entryComponents: [
    EmailTemplateConfirm,
    EmailTemplateModalComponent,
    SmsTemplateModalComponent,
    SmsTemplateConfirm,
    ViewSmsTemplateModalComponent
  ]
})
export class MarketingModule {}
