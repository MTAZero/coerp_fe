import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTabsetModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UIModule } from '../../shared/ui/ui.module';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CustomerRoutingModule } from './customer-routing.module';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { CustomerModalComponent } from './list-customer/component/customer-modal/customer-modal.component';
import { PurchaseHistoryTabComponent } from './list-customer/component/purchase-history-tab/purchase-history-tab.component';
import { CareHistoryTabComponent } from './list-customer/component/care-history-tab/care-history-tab.component';
import { AddressTabComponent } from './list-customer/component/address-tab/address-tab.component';
import { ListSourceModalComponent } from './list-customer/component/list-source-modal/list-source-modal.component';
import { SourceModalComponent } from './list-customer/component/source-modal/source-modal.component';
import { ListCustomerTypeModalComponent } from './list-customer/component/list-customer-type-modal/list-customer-type-modal.component';
import { CustomerTypeModalComponent } from './list-customer/component/customer-type-modal/customer-type-modal.component';
import { CustomerGroupModalComponent } from './list-customer/component/customer-group-modal/customer-group-modal.component';
import { ListCustomerGroupModalComponent } from './list-customer/component/list-customer-group-modal/list-customer-group-modal.component';
import { AddresModalComponent } from './list-customer/component/addres-modal/addres-modal.component';
import { CustomerGroupComponent } from './customer-group/customer-group.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { ConfirmModalComponent as CustomerCareConfirm } from './customer-care/component/confirm-modal/confirm-modal.component';
import { CustomerCareModalComponent } from './customer-care/component/customer-care-modal/customer-care-modal.component';

@NgModule({
  declarations: [
    ListCustomerComponent,
    CustomerModalComponent,
    PurchaseHistoryTabComponent,
    CareHistoryTabComponent,
    AddressTabComponent,
    ListSourceModalComponent,
    SourceModalComponent,
    ListCustomerTypeModalComponent,
    CustomerTypeModalComponent,
    CustomerGroupModalComponent,
    ListCustomerGroupModalComponent,
    AddresModalComponent,
    CustomerGroupComponent,
    CustomerCareComponent,
    CustomerCareModalComponent,
    CustomerCareConfirm
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    NgbTabsetModule,
    NgbDatepickerModule,
    NgbModalModule,
    NgbPaginationModule,
    Ng2SearchPipeModule,
    NgApexchartsModule
  ],
  entryComponents: [
    CustomerModalComponent,
    ListCustomerGroupModalComponent,
    ListSourceModalComponent,
    SourceModalComponent,
    ListCustomerTypeModalComponent,
    ListCustomerGroupModalComponent,
    CustomerTypeModalComponent,
    CustomerGroupModalComponent,
    AddresModalComponent,
    CustomerCareConfirm,
    CustomerCareModalComponent
  ]
})
export class CustomerModule {}
