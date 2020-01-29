import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClickButton(status: boolean) {
    this.passEvent.emit(status);
  }
}
