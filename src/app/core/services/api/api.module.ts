import { NgModule } from '@angular/core';

import { ApiService } from './api-service';
import { StaffService } from './staff.service';
import { CustomerService } from './customer.service';
import { ProductService } from './product.service';
import { ServiceService } from './service.service';
import { OrderService } from './order.service';
import { AddressService } from './address.service';
import { TransactionService } from './transaction.service';
import { SmsService } from './sms.service';
import { StatisticService } from './statistic.service';
import { CustomerGroupService } from './customer-group.service';
import { AuthService } from './auth.service';
import { ProfileService } from './profile.service';
import { PermissionService } from './permission.service';
import { CourseService } from './course.service';
import { DeviceService } from './device.service';
const providers = [
  ApiService,
  StaffService,
  CustomerService,
  ProductService,
  ServiceService,
  OrderService,
  AddressService,
  TransactionService,
  SmsService,
  StatisticService,
  CustomerGroupService,
  AuthService,
  ProfileService,
  PermissionService,
  CourseService,
  DeviceService,
];

@NgModule({
  providers,
})
export class ApiModule {}
