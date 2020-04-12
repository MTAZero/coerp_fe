import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-identity-card-tab',
  templateUrl: './identity-card-tab.component.html',
  styleUrls: ['./identity-card-tab.component.scss'],
})
export class IdentityCardTabComponent implements OnInit {
  @Input() identity_card: any;
  @Input() identity_card_date: any;
  @Input() identity_card_date_end: any;
  @Input() identity_card_location: any;
  constructor() {}

  ngOnInit() {}
}
