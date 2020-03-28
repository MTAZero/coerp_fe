import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-list-order-service',
  templateUrl: './list-order-service.component.html',
  styleUrls: ['./list-order-service.component.scss']
})
export class ListOrderServiceComponent implements OnInit {
  isDetail = false;
  constructor(private location: LocationStrategy) {
    if (this.isDetail) {
      history.pushState(null, null, window.location.href);
      this.location.onPopState(() => {
        history.pushState(null, null, window.location.href);
      });
    }
  }
  ngOnInit() {}

  onDetail(event: any) {
    if (event) {
      this.isDetail = true;
    }
  }

  onMain(event: any) {
    if (event) {
      this.isDetail = false;
    }
  }
}
