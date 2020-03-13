import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SmsService } from '../../../../../core/services/api/sms.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-sms-modal',
  templateUrl: './list-sms-modal.component.html',
  styleUrls: ['./list-sms-modal.component.scss']
})
export class ListSmsModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() selected: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  templates: any;
  selectedTemplate = null;

  constructor(private smsService: SmsService) {}

  ngOnInit() {
    this._fetchData();
    if (this.selected) this.selectedTemplate = this.selected;
  }

  onClickEmail(template: any) {
    this.selectedTemplate = template;
  }

  onClickSubmit() {
    this.passEvent.emit({ event: true, data: this.selectedTemplate });
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }

  private _fetchData() {
    const template$ = this.smsService
      .loadSmsTemplate({
        pageNumber: 0,
        pageSize: 100,
        search_name: ''
      })
      .pipe(takeUntil(this.destroyed$));
    template$.subscribe((res: any) => {
      if (res && res.Data) {
        this.templates = res.Data.Results;
      }
    });
  }
}
