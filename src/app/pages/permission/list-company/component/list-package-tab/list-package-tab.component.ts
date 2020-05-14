import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-package-tab',
  templateUrl: './list-package-tab.component.html',
  styleUrls: ['./list-package-tab.component.scss'],
})
export class ListPackageTabComponent implements OnInit {
  @Input() listPackage: any[];
  constructor() {}

  ngOnInit() {}
}
