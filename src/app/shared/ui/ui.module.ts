import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbTimepickerModule,
  NgbDropdownModule
} from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { ResizableModule } from 'angular-resizable-element';

import { SlimscrollDirective } from './slimscroll.directive';
import { CountToDirective } from './count-to.directive';
import { PreloaderComponent } from './preloader/preloader.component';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { PortletComponent } from './portlet/portlet.component';
import { EmaillistComponent } from './emaillist/emaillist.component';
import { WidgetComponent } from './widget/widget.component';
import { MainContainerComponent } from './main-container/main-container.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    SlimscrollDirective,
    CountToDirective,
    PreloaderComponent,
    PagetitleComponent,
    PortletComponent,
    EmaillistComponent,
    WidgetComponent,
    MainContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClickOutsideModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    ResizableModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [
    SlimscrollDirective,
    CountToDirective,
    PreloaderComponent,
    PagetitleComponent,
    PortletComponent,
    EmaillistComponent,
    WidgetComponent,
    MainContainerComponent
  ]
})
export class UIModule {}
