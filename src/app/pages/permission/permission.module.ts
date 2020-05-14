import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionRoutingModule } from './permission-routing.module';
import { ListCompanyComponent } from './list-company/list-company.component';
import { ListPackageComponent } from './list-package/list-package.component';
import { ListCompanyDetailComponent } from './list-company-detail/list-company-detail.component';
import { ListPackageDetailComponent } from './list-package-detail/list-package-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTabsetModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ResizableModule } from 'angular-resizable-element';
import { UIModule } from '../../shared/ui/ui.module';
import {
  NgbModalModule,
  NgbPaginationModule,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListPackageTabComponent } from './list-company/component/list-package-tab/list-package-tab.component';
import { ListFunctionTabComponent } from './list-package/component/list-function-tab/list-function-tab.component';
import { FunctionModalComponent } from './list-package-detail/component/function-modal/function-modal.component';

@NgModule({
  declarations: [
    ListCompanyComponent,
    ListPackageComponent,
    ListCompanyDetailComponent,
    ListPackageDetailComponent,
    ListPackageTabComponent,
    ListFunctionTabComponent,
    FunctionModalComponent,
  ],
  imports: [
    CommonModule,
    PermissionRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    NgbTabsetModule,
    NgbDatepickerModule,
    NgbModalModule,
    NgbPaginationModule,
    Ng2SearchPipeModule,
    NgbProgressbarModule,
    ResizableModule,
    NgSelectModule,
  ],
  entryComponents: [FunctionModalComponent],
})
export class PermissionModule {}
