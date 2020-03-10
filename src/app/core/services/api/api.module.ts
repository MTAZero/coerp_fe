import { NgModule } from '@angular/core';

import { ApiService } from './api-service';
import { StaffService } from './staff.service';
import { DepartmentService } from './department.service';
import { CustomerService } from './customer.service';
import { ProductService } from './product.service';
import { PositionService } from './position.service';
import { ServiceService } from './service.service';
import { OrderService } from './order.service';
import { AddressService } from './address.service';
import { TransactionService } from './transaction.service';
import { SmsService } from './sms.service';
import { StatisticService } from './statistic.service';

const providers = [
  ApiService,
  StaffService,
  DepartmentService,
  CustomerService,
  ProductService,
  PositionService,
  ServiceService,
  OrderService,
  AddressService,
  TransactionService,
  SmsService,
  StatisticService
];

@NgModule({
  providers
})
export class ApiModule {}
