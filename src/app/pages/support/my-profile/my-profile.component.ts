import { Component, OnInit } from '@angular/core';
import { Inbox } from './my-profile.model';
import Swal from 'sweetalert2';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { StaffService } from '../../../core/services/api/staff.service';
import { ProfileService } from '../../../core/services/api/profile.service';
import { StatisticService } from '../../../core/services/api/statistic.service';
import { projectData, widget, projectionBarChart, salesMixedChart, orderData } from './data';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  private destroyed$ = new Subject();
  thumbnail: any;
  user: any;
  form: FormGroup;

  textSearchOrder = '';
  pageOrder = 0;
  pageSizeOrder = 4;
  totalSizeOrder = 0;
  orders: any;
  orderMode = 'month';

  projectData: any;
  widget: any;
  projectionBarChart: any;
  salesMixedChart: any;
  orderData: any;
  page = 1;
  pageSize = 10;
  totalSize = 0;
  inboxData: Inbox[];
  constructor(
    private staffService: StaffService,
    private statisticService: StatisticService,
    private profileService: ProfileService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.thumbnail = 'http://27.72.88.15:83' + localStorage.getItem('thumbnail');
    this._fetchData();
    this._fetchProfile();
    this._fetchOrder();
    this.initializeForm();
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
              timer: 2000,
            });
            this.thumbnail = 'http://27.72.88.15:83' + res.Data;
            localStorage.setItem('thumbnail', res.Data);
          } else {
            Swal.fire({
              position: 'top-end',
              type: 'error',
              title: 'Cập nhật ảnh đại diện thất bại',
              showConfirmButton: false,
              timer: 2000,
            });
          }
        },
        () => {
          Swal.fire({
            position: 'top-end',
            type: 'error',
            title: 'Cập nhật ảnh đại diện thất bại',
            showConfirmButton: false,
            timer: 2000,
          });
        }
      );
      // const reader = new FileReader();
      // reader.onload = e => (this.thumbnail = reader.result);

      // reader.readAsDataURL(file);
    }
  }

  onPageOrderChange(page: number): void {
    this.pageOrder = page;
    this._fetchOrder();
  }

  onChangeOrderFilter() {
    this._fetchOrder();
  }

  onClickUpdateProfile() {
    this._updateProfile(this.form.value);
  }

  private _fetchData() {
    this.projectData = projectData;
    this.widget = widget;
    this.projectionBarChart = projectionBarChart;
    this.salesMixedChart = salesMixedChart;
    this.orderData = orderData;
    this.totalSize = this.orderData.length;
  }

  private _fetchProfile() {
    const profile$ = this.profileService.loadProfile().pipe(takeUntil(this.destroyed$));
    profile$.subscribe((res: any) => {
      if (res && res.Data) {
        this.user = res.Data;
        this.patchProfile(res.Data);
        const { statistic } = this.user;
        this.widget[0].value = statistic.totalRevenue ? statistic.totalRevenue : 0;
        this.widget[1].value = statistic.totalRevenueByMonth ? statistic.totalRevenueByMonth : 0;
        this.widget[2].value = statistic.totalRevenueByWeek ? statistic.totalRevenueByWeek : 0;
        this.widget[3].value = statistic.totalRevenueByDay ? statistic.totalRevenueByDay : 0;
      }
    });
  }

  private _fetchOrder() {
    const order$ = this.statisticService
      .loadOrder({
        pageNumber: this.pageOrder - 1,
        pageSize: this.pageSizeOrder,
        month: this.orderMode === 'month',
        week: this.orderMode === 'week',
        day: this.orderMode === 'day',
        search_name: this.textSearchOrder,
      })
      .pipe(takeUntil(this.destroyed$));
    order$.subscribe((res: any) => {
      if (res) {
        this.totalSizeOrder = res.Data.TotalNumberOfRecords;
        this.orders = res.Data.Results;
      }
    });
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      sta_fullname: ['', null],
      sta_email: ['', null],
      sta_aboutme: ['', null],
      sta_mobile: ['', null],
      sta_address: ['', null],
    });
  }

  private patchProfile(profile: any) {
    this.form.patchValue({
      sta_fullname: profile.sta_fullname,
      sta_email: profile.sta_email,
      sta_aboutme: profile.sta_aboutme,
      sta_mobile: profile.sta_mobile,
      sta_address: profile.sta_address,
    });
  }

  private _updateProfile(updated: any) {
    const updateProfile$ = this.profileService
      .updateProfile(updated)
      .pipe(takeUntil(this.destroyed$));
    updateProfile$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this._fetchProfile();
        } else this._notify(false, res.Message);
      },
      (e) => this._notify(false, e.Message)
    );
  }

  private _notify(isSuccess: boolean, message: string) {
    return Swal.fire({
      toast: true,
      position: 'top-end',
      type: isSuccess ? 'success' : 'error',
      title: message,
      showConfirmButton: false,
      timer: 2000,
    });
  }
}
