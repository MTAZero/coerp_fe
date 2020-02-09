import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-sms-template-modal',
  templateUrl: './view-sms-template-modal.component.html',
  styleUrls: ['./view-sms-template-modal.component.scss']
})
export class ViewSmsTemplateModalComponent implements OnInit {
  @Input() template: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }
}
