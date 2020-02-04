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
import { ConfirmModalComponent } from './email-template/component/confirm-modal/confirm-modal.component';
import { EmailTemplateModalComponent } from './email-template/component/email-template-modal/email-template-modal.component';

@NgModule({
  declarations: [
    EmailTemplateComponent,
    ConfirmModalComponent,
    EmailTemplateModalComponent
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
  entryComponents: [ConfirmModalComponent, EmailTemplateModalComponent]
})
export class MarketingModule {}
