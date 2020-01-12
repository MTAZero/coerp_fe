import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Staffs } from './list-staff.model';

import { contactData } from './data';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss']
})

/**
 * Contacts component - handling the contacts with navbar and content
 */
export class ListStaffComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  submitted: boolean;
  term: any;
  // page number
  page = 1;
  // default page size
  pageSize = 10;

  // start and end index
  startIndex = 1;
  endIndex = 10;
  totalSize = 0;

  paginatedContactData: Array<Staffs>;
  contacts: Array<Staffs>;
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
      { label: 'Nhân viên', path: '/' },
      { label: 'Danh sách nhân viên', path: '/', active: true }
    ];
    this.validationform = this.formBuilder.group({
      name: ['', [Validators.required]],
      user_name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
        ]
      ],
      position: ['', [Validators.required]],
      CMND: ['', [Validators.required]],
      date: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });

    /**
     * Fetches Data
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
   * save the contacts data
   */
  saveData() {
    const name = this.validationform.get('name').value;
    const userName = this.validationform.get('user_name').value;
    const phone = this.validationform.get('phone').value;
    const email = this.validationform.get('email').value;
    const position = this.validationform.get('position').value;
    const CMND = this.validationform.get('CMND').value;
    const status = this.validationform.get('status').value;
    const currentDate = new Date();
    if (this.validationform.valid) {
      this.contacts.push({
        staff_id: 'NV01',
        name,
        user_name: userName,
        phone,
        email,
        position,
        CMND,
        status,
        date:
          currentDate.getDate() +
          '/' +
          currentDate.getMonth() +
          '/' +
          currentDate.getFullYear()
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
    this.totalSize = this.contacts.length + 1;
    this.paginatedContactData = this.contacts.slice(
      this.startIndex,
      this.endIndex
    );
  }

  /**
   * Pagination onpage change
   * @param page show the page
   */
  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    this.paginatedContactData = this.contacts.slice(
      this.startIndex,
      this.endIndex
    );
  }

  private _fetchData() {
    this.contacts = contactData;
    // apply pagination
    this.startIndex = 0;
    this.endIndex = this.pageSize;

    this.paginatedContactData = this.contacts.slice(
      this.startIndex,
      this.endIndex
    );
    this.totalSize = this.contacts.length;
  }
}
