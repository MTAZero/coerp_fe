import { NgModule } from '@angular/core';

import { ApiService } from './api-service';
import { StaffService } from './staff.service';

const providers = [ApiService, StaffService];

@NgModule({
  providers
})
export class ApiModule {}
