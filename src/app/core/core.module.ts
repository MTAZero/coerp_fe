import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from './services/api/api.module';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from './helpers/dateformat';

@NgModule({
  declarations: [],
  imports: [CommonModule, ApiModule],
  providers: [
    {
      provide: NgbDateParserFormatter,
      useClass: NgbDateCustomParserFormatter,
    },
  ],
})
export class CoreModule {}
