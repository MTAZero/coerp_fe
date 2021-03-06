import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { opportunityData, simplePieChart } from './data';

import { Opportunities, ChartType } from './opportunities.model';

@Component({
  selector: 'app-list-vendor',
  templateUrl: './list-vendor.component.html',
  styleUrls: ['./list-vendor.component.scss']
})
export class ListVendorComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  opportunityData: Opportunities[];
  simplePieChart: ChartType;
  term: any;
  submitted: boolean;

  // validation form
  validationform: FormGroup;

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Nhà cung cấp', path: '/' },
      { label: 'Thông tin nhà cung cấp', path: '/', active: true }
    ];

    /**
     * form validation
     */
    this.validationform = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      category: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
        ]
      ]
    });
    /**
     * fetches data
     */
    this._fetchData();
  }
  /**
   * Returns form
   */
  get form() {
    return this.validationform.controls;
  }
  /**
   * Modal Open
   * @param content modal content
   */
  openModal(content: string) {
    this.modalService.open(content, { centered: true });
  }

  /**
   * save the Opportunities data
   */
  saveData() {
    const name = this.validationform.get('name').value;
    const phone = this.validationform.get('phone').value;
    const category = this.validationform.get('category').value;
    const email = this.validationform.get('email').value;

    if (this.validationform.valid) {
      this.opportunityData.push({
        company: 'assets/images/companies/amazon.png',
        name,
        phone,
        location: 'California',
        category,
        email,
        status: 'Won'
      });
      this.validationform = this.formBuilder.group({
        name: '',
        phone: '',
        location: '',
        email: ''
      });
      this.modalService.dismissAll();
    }
    this.submitted = true;
  }
  /**
   * fetches the opportunities value
   */
  private _fetchData() {
    this.opportunityData = opportunityData;

    this.simplePieChart = simplePieChart;
  }
}
