import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-customer-modal',
  templateUrl: './list-customer-modal.component.html',
  styleUrls: ['./list-customer-modal.component.scss']
})
export class ListCustomerModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();

  customerData = [
    {
      name: 'Hà Thị Quyết',
      email: 'quyet.ha@boot.ai',
      type: 'Bán lẻ',
      group: 'Khách hàng mới',
      source: 'BNI'
    },
    {
      name: 'Hà Thị Quyết',
      email: 'quyet.ha@boot.ai',
      type: 'Bán lẻ',
      group: 'Khách hàng mới',
      source: 'BNI'
    },
    {
      name: 'Hà Thị Quyết',
      email: 'quyet.ha@boot.ai',
      type: 'Bán lẻ',
      group: 'Khách hàng mới',
      source: 'BNI'
    },
    {
      name: 'Hà Thị Quyết',
      email: 'quyet.ha@boot.ai',
      type: 'Bán lẻ',
      group: 'Khách hàng mới',
      source: 'BNI'
    }
  ];

  constructor() {}

  ngOnInit() {}

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }
}
