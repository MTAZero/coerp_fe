import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-care-history-tab',
  templateUrl: './care-history-tab.component.html',
  styleUrls: ['./care-history-tab.component.scss']
})
export class CareHistoryTabComponent implements OnInit {
  @Input() listTransaction: any[];

  constructor() {}

  ngOnInit() {}
}
