import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-email-modal',
  templateUrl: './list-email-modal.component.html',
  styleUrls: ['./list-email-modal.component.scss'],
})
export class ListEmailModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();

  customerData = [
    {
      name: 'Test',
      create_by: 'demo',
      create_date: '31/01/2020',
      update_by: '',
      update_date: '',
    },
    {
      name: 'Test',
      create_by: 'demo',
      create_date: '31/01/2020',
      update_by: '',
      update_date: '',
    },
    {
      name: '[NHẬN NGAY ĐỒNG HỒ ĐEO TAY PHIÊN BẢN GIỚI HẠN CỦA MC WATCH]',
      create_by: 'demo',
      create_date: '31/01/2020',
      update_by: '',
      update_date: '',
    },
    {
      name: 'Test',
      create_by: 'demo',
      create_date: '31/01/2020',
      update_by: 'admin',
      update_date: '01/02/2020',
    },
  ];

  constructor() {}

  ngOnInit() {}

  onClickEmail() {
    this.passEvent.emit({ event: false });
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }
}
