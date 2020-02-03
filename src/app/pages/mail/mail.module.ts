import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbDropdownModule,
  NgbPaginationModule,
  NgbCollapseModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgxEditorModule } from 'ngx-editor';
import { UIModule } from '../../shared/ui/ui.module';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { MailRoutingModule } from './mail-routing.module';

@NgModule({
  declarations: [MailInboxComponent],
  imports: [
    CommonModule,
    MailRoutingModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbCollapseModule,
    UIModule,
    NgxEditorModule
  ]
})
export class MailModule {}
