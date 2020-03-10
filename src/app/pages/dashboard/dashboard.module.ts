import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIModule } from '../../shared/ui/ui.module';
import { NgbProgressbarModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    UIModule,
    NgbProgressbarModule,
    NgApexchartsModule,
    NgbPaginationModule
  ]
})
export class DashboardModule {}
