import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from '../../shared/ui/ui.module';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { ProjectComponent } from './project/project.component';
import { EnterpriseRoutingModule } from './enterprise-routing.module';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    EnterpriseRoutingModule,
    UIModule,
    NgbProgressbarModule
  ]
})
export class EnterpriseModule {}
