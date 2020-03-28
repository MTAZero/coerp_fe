import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timePeriod, menu } from './data';

@Component({
  selector: 'app-order-service-detail',
  templateUrl: './order-service-detail.component.html',
  styleUrls: ['./order-service-detail.component.scss']
})
export class OrderServiceDetailComponent implements OnInit {
  @Output() onMain: EventEmitter<any> = new EventEmitter();
  timePeriod: any;
  menu: any[];
  selectedMenuItem = 0;
  constructor() {}

  ngOnInit() {
    this.timePeriod = timePeriod;
    this.menu = menu;
  }

  onClickMenuItem(index: any) {
    this.selectedMenuItem = index;
    const el = document.getElementById(index);
    const content = document.getElementById('content');
    content.scroll({ top: el.offsetTop - 100, behavior: 'smooth' });
  }

  onChangeToMain() {
    this.onMain.emit(true);
  }
}
