import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-permanent-tab',
  templateUrl: './address-permanent-tab.component.html',
  styleUrls: ['./address-permanent-tab.component.scss'],
})
export class AddressPermanentTabComponent implements OnInit {
  @Input() permanent_ward: any;
  @Input() permanent_district: any;
  @Input() permanent_province: any;
  @Input() permanent_detail: any;
  constructor() {}

  ngOnInit() {}
}
