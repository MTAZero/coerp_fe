import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portlet',
  templateUrl: './portlet.component.html',
  styleUrls: ['./portlet.component.scss']
})
export class PortletComponent implements OnInit {
  @Input() title: string;
  @Input() color: string;
  @Input() text: string;
  @Input() headerClass: string;
  @Input() isLoading: boolean;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onContentRefresh: EventEmitter<any> = new EventEmitter();

  //isLoading: boolean;
  isVisible: boolean;
  isCollapsed: boolean;

  constructor() {}

  ngOnInit() {
    // set the value
    this.isCollapsed = false;
    this.isVisible = true;
  }

  /**
   * Refreshes the content
   */
  refreshContent() {
    this.onContentRefresh.emit();
  }

  remove() {
    this.isVisible = false;
  }
}
