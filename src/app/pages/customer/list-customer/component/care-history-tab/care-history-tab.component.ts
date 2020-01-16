import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-care-history-tab',
  templateUrl: './care-history-tab.component.html',
  styleUrls: ['./care-history-tab.component.scss']
})
export class CareHistoryTabComponent implements OnInit {
  careHistory = [
    {
      care_id: 'CA01',
      care_time: '12/01/2020',
      care_by: 'Gọi điện',
      note: 'Khách hàng không nghe máy',
      care_staff: 'Nguyễn Văn A'
    },
    {
      care_id: 'CA02',
      care_time: '12/01/2020',
      care_by: 'Gọi điện',
      note: 'Khách hàng không nghe máy',
      care_staff: 'Nguyễn Văn A'
    },
    {
      care_id: 'CA03',
      care_time: '12/01/2020',
      care_by: 'Gọi điện',
      note: 'Khách hàng không nghe máy',
      care_staff: 'Nguyễn Văn A'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
