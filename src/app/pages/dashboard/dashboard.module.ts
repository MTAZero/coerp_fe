import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../shared/ui/ui.module';

// tslint:disable-next-line: max-line-length
import {
  NgbProgressbarModule,
  NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UIModule,
    NgbProgressbarModule,
    NgApexchartsModule,
    ChartsModule,
    NgbPaginationModule
  ]
})
export class DashboardModule {}
