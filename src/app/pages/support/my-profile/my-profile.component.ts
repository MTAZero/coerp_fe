import { Component, OnInit } from '@angular/core';
import { Inbox } from './my-profile.model';
import Swal from 'sweetalert2';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { StaffService } from '../../../core/services/api/staff.service';
import { projectData, widget, projectionBarChart, salesMixedChart, orderData } from './data';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  private destroyed$ = new Subject();
  breadCrumbItems: Array<{}>;
  thumbnail: any;

  // Projects table
  projectData: any;
  widget: any;
  projectionBarChart: any;
  salesMixedChart: any;
  orderData: any;
  page = 1;
  pageSize = 10;
  totalSize = 0;
  inboxData: Inbox[];
  constructor(private staffService: StaffService) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Trang tin', path: '/' }
    ];

    this.thumbnail = 'http://27.72.147.222:1230' + localStorage.getItem('thumbnail');
    this._fetchData();
  }

  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const import$ = this.staffService.updateAvatar(file).pipe(takeUntil(this.destroyed$));
      import$.subscribe(
        (res: any) => {
          if (res.Code === 200) {
            Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Cập nhật ảnh đại diện thành công',
              showConfirmButton: false,
              timer: 2000
            });
            this.thumbnail = 'http://27.72.147.222:1230' + res.Data;
            localStorage.setItem('thumbnail', res.Data);
          } else {
            Swal.fire({
              position: 'top-end',
              type: 'error',
              title: 'Cập nhật ảnh đại diện thất bại',
              showConfirmButton: false,
              timer: 2000
            });
          }
        },
        () => {
          Swal.fire({
            position: 'top-end',
            type: 'error',
            title: 'Cập nhật ảnh đại diện thất bại',
            showConfirmButton: false,
            timer: 2000
          });
        }
      );
      // const reader = new FileReader();
      // reader.onload = e => (this.thumbnail = reader.result);

      // reader.readAsDataURL(file);
    }
  }

  private _fetchData() {
    this.projectData = projectData;
    this.widget = widget;
    this.projectionBarChart = projectionBarChart;
    this.salesMixedChart = salesMixedChart;
    this.orderData = orderData;
    this.totalSize = this.orderData.length;
  }
}
