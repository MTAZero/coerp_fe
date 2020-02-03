import { Component, OnInit } from '@angular/core';
import { Projects } from './projects.model';
import { projectData } from './data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  projectData: Projects[];
  constructor() {}

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Doanh nghiệp', path: '/' },
      { label: 'Dự án', path: '/', active: true }
    ];

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * fetches project value
   */
  private _fetchData() {
    this.projectData = projectData;
  }
}
