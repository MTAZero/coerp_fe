import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-now-tab',
  templateUrl: './address-now-tab.component.html',
  styleUrls: ['./address-now-tab.component.scss'],
})
export class AddressNowTabComponent implements OnInit {
  @Input() now_ward: any;
  @Input() now_district: any;
  @Input() now_province: any;
  @Input() now_detail: any;
  constructor() {}

  ngOnInit() {}
}
