import { Component, OnInit, ElementRef, Input, OnChanges } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class MainContainerComponent implements OnInit, OnChanges {
  @Input() hasBottom = true;
  height: number = 300;
  containerHeight = 0;
  constructor(public element: ElementRef) {
    this.element.nativeElement;
  }

  ngOnInit() {
    var el = this.element.nativeElement;
    this.containerHeight = el.children[0].clientHeight;
  }

  ngOnChanges() {
    if (!this.hasBottom) this.height = 0;
  }

  onResizeEnd(event: ResizeEvent) {
    if (event) {
      if (event.rectangle.height != null && event.rectangle.height < 500) {
        this.height = event.rectangle.height;
      }
    }
  }

  onResize(e) {
    var el = this.element.nativeElement;
    this.containerHeight = el.children[0].clientHeight;
  }

  onToggle() {
    if (this.height <= 10) this.height = 300;
    else this.height = 10;
  }
}
