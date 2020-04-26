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
import { ListCustomerModalComponent } from './customer-group/component/list-customer-modal/list-customer-modal.component';
import { CustomerGroupModalComponent } from './customer-group/component/customer-group-modal/customer-group-modal.component';
import { MobileTabComponent } from './list-customer/component/mobile-tab/mobile-tab.component';
import { ListCustomerDetailComponent } from './list-customer-detail/list-customer-detail.component';
import { MobileModalComponent } from './list-customer/component/mobile-modal/mobile-modal.component';
import { ServiceHistoryTabComponent } from './list-customer/component/service-history-tab/service-history-tab.component';
import { ListTransactionProductComponent } from './list-transaction-product/list-transaction-product.component';
import { ListTransactionProductDetailComponent } from './list-transaction-product-detail/list-transaction-product-detail.component';
import { ListTransactionServiceComponent } from './list-transaction-service/list-transaction-service.component';
import { ListTransactionServiceDetailComponent } from './list-transaction-service-detail/list-transaction-service-detail.component';
import { CustomerGroupDetailComponent } from './customer-group-detail/customer-group-detail.component';

@NgModule({
  declarations: [
    ListCustomerComponent,
    PurchaseHistoryTabComponent,
    CareHistoryTabComponent,
    AddressTabComponent,
    AddresModalComponent,
    CustomerGroupComponent,
    ListCustomerModalComponent,
    MobileTabComponent,
    CustomerGroupModalComponent,
    ListCustomerDetailComponent,
    MobileModalComponent,
    ServiceHistoryTabComponent,
    ListTransactionProductComponent,
    ListTransactionProductDetailComponent,
    ListTransactionServiceComponent,
    ListTransactionServiceDetailComponent,
    CustomerGroupDetailComponent,
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
    CustomerGroupModalComponent,
    ListCustomerModalComponent,
    CustomerGroupModalComponent,
    MobileModalComponent,
  ],
})
export class CustomerModule {}
