import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-template-modal',
  templateUrl: './email-template-modal.component.html',
  styleUrls: ['./email-template-modal.component.scss']
})
export class EmailTemplateModalComponent implements OnInit {
  @Input() template: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }
}
