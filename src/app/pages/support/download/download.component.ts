import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  // bread crumb data
  breadCrumbItems: Array<{}>;
  constructor() {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Hỗ trợ', path: '/' },
      { label: 'Tải về', path: '/', active: true }
    ];
  }
}
