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

import { SlimscrollDirective } from './slimscroll.directive';
import { CountToDirective } from './count-to.directive';
import { PreloaderComponent } from './preloader/preloader.component';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { PortletComponent } from './portlet/portlet.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    SlimscrollDirective,
    CountToDirective,
    PreloaderComponent,
    PagetitleComponent,
    PortletComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClickOutsideModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [
    SlimscrollDirective,
    CountToDirective,
    PreloaderComponent,
    PagetitleComponent,
    PortletComponent
  ]
})
export class UIModule {}
