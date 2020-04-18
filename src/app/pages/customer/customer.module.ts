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
import { PurchaseHistoryTabComponent } from './list-customer/component/purchase-history-tab/purchase-history-tab.component';
import { CareHistoryTabComponent } from './list-customer/component/care-history-tab/care-history-tab.component';
import { AddressTabComponent } from './list-customer/component/address-tab/address-tab.component';
import { AddresModalComponent } from './list-customer/component/addres-modal/addres-modal.component';
import { CustomerGroupComponent } from './customer-group/customer-group.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { CustomerCareModalComponent } from './customer-care/component/customer-care-modal/customer-care-modal.component';
import { ListCustomerModalComponent } from './customer-group/component/list-customer-modal/list-customer-modal.component';
import { CustomerGroupModalComponent } from './customer-group/component/customer-group-modal/customer-group-modal.component';
import { MobileTabComponent } from './list-customer/component/mobile-tab/mobile-tab.component';
import { ListCustomerDetailComponent } from './list-customer-detail/list-customer-detail.component';
import { MobileModalComponent } from './list-customer/component/mobile-modal/mobile-modal.component';

@NgModule({
  declarations: [
    ListCustomerComponent,
    PurchaseHistoryTabComponent,
    CareHistoryTabComponent,
    AddressTabComponent,
    AddresModalComponent,
    CustomerGroupComponent,
    CustomerCareComponent,
    CustomerCareModalComponent,
    ListCustomerModalComponent,
    MobileTabComponent,
    CustomerGroupModalComponent,
    ListCustomerDetailComponent,
    MobileModalComponent,
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
    NgApexchartsModule,
  ],
  entryComponents: [
    CustomerGroupModalComponent,
    AddresModalComponent,
    CustomerCareModalComponent,
    CustomerGroupModalComponent,
    ListCustomerModalComponent,
    CustomerGroupModalComponent,
    MobileModalComponent,
  ],
})
export class CustomerModule {}
