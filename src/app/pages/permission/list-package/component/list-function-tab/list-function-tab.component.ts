import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-function-tab',
  templateUrl: './list-function-tab.component.html',
  styleUrls: ['./list-function-tab.component.scss'],
})
export class ListFunctionTabComponent implements OnInit {
  @Input() listFunction: any[];
  constructor() {}

  ngOnInit() {}
}
