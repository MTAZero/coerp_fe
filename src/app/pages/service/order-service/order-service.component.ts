import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { EventInput, compareByFieldSpec } from '@fullcalendar/core';
import { Event } from './event.model';
import { category, calendarEvents, selectionTime } from './data';
import { ConfirmModalComponent } from './component/confirm-modal/confirm-modal.component';
import { OrderServiceModalComponent } from './component/order-service-modal/order-service-modal.component';

@Component({
  selector: 'app-order-service',
  templateUrl: './order-service.component.html',
  styleUrls: ['./order-service.component.scss']
})
export class OrderServiceComponent implements OnInit {
  // Bread crumb tems
  breadCrumbItems: Array<{}>;

  // event form
  formData: FormGroup;
  formEditData: FormGroup;

  // Form submition value
  submitted: boolean;

  // Form category data
  category: Event[];

  // Date added in event
  newEventDate: Date;

  // Edit event
  editEvent: EventInput;

  // Delete event
  deleteEvent: EventInput;

  // calendar plugin
  calendarPlugins = [
    dayGridPlugin,
    bootstrapPlugin,
    timeGrigPlugin,
    interactionPlugin
  ];
  calendarWeekends: any;
  // show events
  calendarEvents: EventInput[];

  // Set selections of time
  selectionTime: any[];

  // Set repeat
  repeat = '';

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Dịch vụ', path: '/' },
      { label: 'Đặt dịch vụ', path: '/', active: true }
    ];

    this.selectionTime = selectionTime;
    /**
     * Event Model validation
     */
    this.formData = this.formBuilder.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });

    /**
     * Edit Event Model Data
     */
    this.formEditData = this.formBuilder.group({
      editTitle: []
    });

    /**
     * Fetches Data
     */
    this._fetchData();
  }

  openServiceModal() {
    const modalRef = this.modalService.open(OrderServiceModalComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa lịch đặt dịch vụ';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa lịch đặt dịch vụ đang chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
  }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  onChangeRepeatCheckbox(e) {
    if (e.target.checked) {
      this.repeat = 'day';
    } else {
      this.repeat = '';
    }
  }

  onChangeRepeatSelect(e) {
    this.repeat = e.target.value;
  }

  /**
   * Open Event Modal
   * @param content modal content
   * @param event calendar event
   */
  openModal(content: any, event: any) {
    this.newEventDate = event.date;
    this.modalService.open(content);
  }

  /**
   * Open Event Modal For Edit
   * @param editcontent modal content
   * @param event calendar event
   */
  openEditModal(editcontent: any, event: any) {
    this.formEditData = this.formBuilder.group({
      editTitle: event.event.title
    });
    // tslint:disable-next-line: max-line-length
    this.editEvent = {
      id: event.event.id,
      title: event.event.title,
      start: event.event.start,
      classNames: event.event.classNames
    };
    this.modalService.open(editcontent);
  }

  /**
   * Upldated event title save in calendar
   */
  editEventSave() {
    const editTitle = this.formEditData.get('editTitle').value;
    const editId = this.calendarEvents.findIndex(
      x => x.id + '' === this.editEvent.id + ''
    );
    // tslint:disable-next-line: radix
    this.calendarEvents[editId] = {
      ...this.editEvent,
      title: editTitle,
      // tslint:disable-next-line:radix
      id: parseInt(this.editEvent.id + ''),
      className: ''
    };
    this.formEditData = this.formBuilder.group({
      editTitle: ''
    });
    this.modalService.dismissAll();
  }

  /**
   * Delete the event from calendar
   */
  deleteEventData() {
    const deleteId = this.editEvent.id;
    const deleteEvent = this.calendarEvents.findIndex(
      x => x.id + '' === deleteId + ''
    );
    this.calendarEvents[deleteEvent] = { ...this.deleteEvent, id: '' };
    delete this.calendarEvents[deleteEvent].id;
    this.modalService.dismissAll();
  }

  /**
   * Model Data save and show the event in calendar
   */
  saveEvent() {
    if (this.formData.valid) {
      const title = this.formData.get('title').value;
      // tslint:disable-next-line: no-shadowed-variable
      const category = this.formData.get('category').value;

      this.calendarEvents = this.calendarEvents.concat({
        id: this.calendarEvents.length + 1,
        title,
        className: category,
        start: this.newEventDate || new Date()
      });
      this.formData = this.formBuilder.group({
        title: '',
        category: ''
      });
      this.modalService.dismissAll();
    }
    this.submitted = true;
  }

  /**
   * Fetches the required data
   */
  private _fetchData() {
    // Event category
    this.category = category;
    // Calender Event Data
    this.calendarEvents = calendarEvents;

    // form submit
    this.submitted = false;
  }
}
