import { Component, OnInit, ElementRef } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-product-statistic',
  templateUrl: './product-statistic.component.html',
  styleUrls: ['./product-statistic.component.scss']
})
export class ProductStatisticComponent implements OnInit {
  height: number = 200;
  containerHeight = 0;
  constructor(public element: ElementRef) {
    this.element.nativeElement;
  }

  ngOnInit() {
    var el = this.element.nativeElement;
    this.containerHeight = el.children[0].clientHeight;
  }

  onResizeEnd(event: ResizeEvent) {
    if (event) {
      if (event.rectangle.height != null) {
        this.height = event.rectangle.height;
      }
    }
  }

  onClickTest() {
    if (this.height <= 10) this.height = 200;
    else this.height = 10;
  }
}
