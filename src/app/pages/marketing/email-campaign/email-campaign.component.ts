import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Email } from './inbox.model';
import { emailData } from './data';
import { ListEmailModalComponent } from './component/list-email-modal/list-email-modal.component';
import { ListCustomerModalComponent } from './component/list-customer-modal/list-customer-modal.component';
@Component({
  selector: 'app-email-campaign',
  templateUrl: './email-campaign.component.html',
  styleUrls: ['./email-campaign.component.scss']
})
export class EmailCampaignComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // paginated email data
  emailData: Array<Email>;

  // page number
  page = 1;
  // default page size
  pageSize = 15;
  // total number of records
  totalRecords = 0;

  // start and end index
  startIndex = 1;
  endIndex = 15;
  isCompose = false;
  listItemChecked = [];

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Marketing', path: '/' },
      { label: 'Chiến dịch Email', path: '/', active: true }
    ];

    // gets the data
    this._fetchData();
  }

  openCustomerModal() {
    const modalRef = this.modalService.open(ListCustomerModalComponent, {
      centered: true,
      size: 'xl'
    });
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  openEmailModal() {
    const modalRef = this.modalService.open(ListEmailModalComponent, {
      centered: true,
      size: 'xl'
    });
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  /**
   * Handle on page click event
   */
  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize + 1;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }
    this.emailData = emailData.slice(this.startIndex - 1, this.endIndex - 1);
    this.listItemChecked = [];
  }

  onCheckboxChange(event: any, index: number) {
    const check = event.target.checked;
    if (check) {
      this.listItemChecked.push(index);
    } else {
      this.listItemChecked.splice(this.listItemChecked.indexOf(index), 1);
    }
  }

  onCheckboxAllChange(event: any) {
    const check = event.target.checked;
    if (check) {
      for (let i = 0; i <= this.endIndex - this.startIndex; i++) {
        this.listItemChecked.push(i);
      }
    } else {
      this.listItemChecked = [];
    }
  }
  /**
   * Gets the email data
   * Note: In real application - you might want to call some api to get the email records
   */
  private _fetchData() {
    this.emailData = emailData;
    this.totalRecords = emailData.length;
  }
}
