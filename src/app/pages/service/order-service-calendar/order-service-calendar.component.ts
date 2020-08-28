import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { widgetData } from './data';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ServiceService } from '../../../core/services/api/service.service';
// import { someEvent } from './order-s';
@Component({
  selector: 'app-order-service-calendar',
  templateUrl: './order-service-calendar.component.html',
  styleUrls: ['./order-service-calendar.component.scss'],
})
export class OrderServiceCalendarComponent implements OnInit {
  private destroyed$ = new Subject();
  // calendar plugin
  calendarPlugins = [dayGridPlugin, bootstrapPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends: any;
  // show events
  calendarEvents = [];
  textSearch = '';
  staff = '';
  widgetData: any[];
  constructor(private serviceService: ServiceService) {}
  ngOnInit() {
    this._fetchData();
  }

  onDateClick(e) {
    //console.log(e);
  }

  onEventClick(e) {
    console.log(e);
    Swal.fire({
      title: e.event.title,
      type: 'info',
      
      html:
        '<p>Nhân viên: ' +
        e.event.id +
        '<p>Khách hàng: ' +
        e.event.groupId +
        '<p>SĐT Khách hàng: ' +
        e.event.classNames +
        '<p>Bắt đầu: ' +
        moment(e.event.start).format('HH:mm / DD-MM-YYYY').toString() +
        '<p>Kết thúc: ' +
        moment(e.event.end).format('HH:mm / DD-MM-YYYY').toString(),
    });
  }

  onHoverEvent(e) {
    // console.log(e);
    // Swal.fire({
    //   title: e.tooltip.title,
    //   type: 'info',
      
    //   html:
    //     '<p>Nhân viên: ' +
    //     e.tooltip.id +
    //     '<p>Khách hàng: ' +
    //     e.tooltip.groupId +
    //     '<p>SĐT Khách hàng: ' +
    //     e.tooltip.classNames +
    //     '<p>Bắt đầu: ' +
    //     moment(e.tooltip.start).format('HH:mm / DD-MM-YYYY').toString() +
    //     '<p>Kết thúc: ' +
    //     moment(e.tooltip.end).format('HH:mm / DD-MM-YYYY').toString(),
    // });
  }

  datesRender(event: any) {
    const { activeStart, activeEnd} = event.view;
    this._fetchCalendar(activeStart, activeEnd);
  }

  private _fetchData() {
    this.widgetData = widgetData;
  }

  private _fetchCalendar(start: Date, end: Date) {

    const calendar$ = this.serviceService
      .getCalendar({
        start_date: moment(start).format('YYYY-MM-DD'),
        to_date: moment(end).format('YYYY-MM-DD'),
        
      })
      .pipe(takeUntil(this.destroyed$));
      
    calendar$.subscribe((res: any) => {
      this.calendarEvents = [];

      res.Data.forEach((day) => {
    
        const { work_time, list_service, staff_name, customer_name, cu_phone_number } = day;
        const work_day = work_time.substr(0, 11);
        
        list_service.forEach((time) => {
        
          const { start_time, end_time, service_name } = time;
          this.calendarEvents.push({
            title: service_name,
            id: staff_name,
            groupId: customer_name,
            classNames: cu_phone_number,
            start: work_day.concat(start_time),
            end: work_day.concat(end_time),
          },
          );
        });
      });
    });
  }
}
