import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbTabsetModule,
  NgbAccordionModule,
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';
import {
  NgbModalModule,
  NgbPaginationModule,
  NgbTypeaheadModule
} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ServiceRoutingModule } from './service-routing.module';
import { ListServiceComponent } from './list-service/list-service.component';
import { ConfirmModalComponent } from './list-service/component/confirm-modal/confirm-modal.component';
import { ServiceModalComponent } from './list-service/component/service-modal/service-modal.component';
// tslint:disable-next-line:max-line-length
import { ListServiceCategoryModalComponent } from './list-service/component/list-service-category-modal/list-service-category-modal.component';
import { ServiceCategoryModalComponent } from './list-service/component/service-category-modal/service-category-modal.component';

@NgModule({
  declarations: [
    ListServiceComponent,
    ConfirmModalComponent,
    ServiceModalComponent,
    ListServiceCategoryModalComponent,
    ServiceCategoryModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    NgbTabsetModule,
    NgbAccordionModule,
    NgbDatepickerModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    ServiceRoutingModule,
    Ng2SearchPipeModule
  ],
  entryComponents: [
    ConfirmModalComponent,
    ServiceModalComponent,
    ListServiceCategoryModalComponent,
    ServiceCategoryModalComponent
  ]
})
export class ServiceModule {}
