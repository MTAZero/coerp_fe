import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description-tab',
  templateUrl: './description-tab.component.html',
  styleUrls: ['./description-tab.component.scss']
})
export class DescriptionTabComponent implements OnInit {
  @Input() product: any;
  constructor() {}

  ngOnInit() {}
}
