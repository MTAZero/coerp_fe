import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Staff } from './list-staff.model';

import { contactData } from './data';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss']
})

/**
 * Staffs component
 */
export class ListStaffComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  submitted: boolean;
  term: any;
  page = 1;
  pageSize = 10;

  // start and end index
  startIndex = 1;
  endIndex = 10;
  totalSize = 0;

  paginatedStaffData: Array<Staff>;
  selectStaff: Staff;
  staffs: Array<Staff>;
  modalRef: any;
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
      position: ['', [Validators.required]],
      user_name: ['', [Validators.required]],
      status: ['', [Validators.required]],
      password: ['', [Validators.required]],
      gender: ['', null],
      department: ['', [Validators.required]],
      dob: ['', null],
      phone: ['', [Validators.required]],
      CMND: ['', null],
      email: [
        '',
        [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]
      ],
      doi: ['', null], // date of issue of certification
      address: ['', null]
    });

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
  openLargeModal(content: string, staff?: Staff) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  openModal(content: string, staff?: Staff) {
    this.selectStaff = staff;
    this.modalRef = this.modalService.open(content, { centered: true });
    this.modalRef.result.then(res => {
      console.log(res);
    });
  }

  confirmModal() {
    // console.log('ok');
    this.modalRef.close('Ok ok');
  }

  cancelModal() {
    // console.log('ok');
    this.modalRef.close('Ok ok');
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
      this.staffs.push({
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
    this.totalSize = this.staffs.length + 1;
    this.paginatedStaffData = this.staffs.slice(this.startIndex, this.endIndex);
  }

  /**
   * Pagination onpage change
   * @param page show the page
   */
  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    this.paginatedStaffData = this.staffs.slice(this.startIndex, this.endIndex);
  }

  private _fetchData() {
    this.staffs = contactData;
    // apply pagination
    this.startIndex = 0;
    this.endIndex = this.pageSize;

    this.paginatedStaffData = this.staffs.slice(this.startIndex, this.endIndex);
    this.totalSize = this.staffs.length;
  }
}
