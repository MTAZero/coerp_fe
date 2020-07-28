import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { simplePieChart } from './data';
import { ChartType } from './opportunities.model';
import { ChartComponent } from 'ng-apexcharts';
import { ListCustomerModalComponent } from './component/list-customer-modal/list-customer-modal.component';
import { CustomerGroupService } from '../../../core/services/api/customer-group.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-group',
  templateUrl: './customer-group.component.html',
  styleUrls: ['./customer-group.component.scss'],
})
export class CustomerGroupComponent implements OnInit, OnDestroy {
  @ViewChild('chart', { static: false }) chart: ChartComponent;
  private destroyed$ = new Subject();

  submitted: boolean;

  textSearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  groups: any;

  simplePieChart: ChartType;

  constructor(
    private modalService: NgbModal,
    private customerGroupService: CustomerGroupService,
    private router: Router
  ) {}

  ngOnInit() {
    this._fetchData();
    this._fetchChart();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onRouteDetail(group?: any) {
    this.router.navigate(['/customer/customer-group-detail', group ? group.cg_id : '']);
  }

  openListCustomerModal(customerGroup?: any) {
    const modalRef = this.modalService.open(ListCustomerModalComponent, {
      centered: true,
      size: 'xl',
    });

    if (customerGroup) {
      modalRef.componentInstance.customerGroup = customerGroup;
    }
    modalRef.componentInstance.passEvent.subscribe(() => {
      modalRef.close();
    });
  }

  openConfirmModal(customerGroup?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa nhóm khách hàng đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeCustomerGroup(customerGroup);
      }
    });
  }

  onChangeFilter() {
    this._fetchData();
  }

  private _fetchData() {
    const customerGroup$ = this.customerGroupService
      .loadCustomerGroup({
        pageNumber: this.page,
        pageSize: this.pageSize,
        cg_id: '',
        name: this.textSearch,
      })
      .pipe(takeUntil(this.destroyed$));
    customerGroup$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.groups = res.Data.Results;
      }
    });
  }

  private _fetchChart() {
    this.simplePieChart = simplePieChart;

    const chart$ = this.customerGroupService.loadChart().pipe(takeUntil(this.destroyed$));
    chart$.subscribe((res: any) => {
      if (res && res.Data) {
        // this.simplePieChart.series = [];
        // this.simplePieChart.labels = [];
        res.Data.map((e: any) => {
          this.simplePieChart.series.push(e.number);
          this.simplePieChart.labels.push(e.cg_name);
        });
      }
    });
  }

  private _removeCustomerGroup(customerGroup: any) {
    const removeCustomerGroup$ = this.customerGroupService
      .removeCustomerGroup({ cg_id: customerGroup.cg_id })
      .pipe(takeUntil(this.destroyed$));
    removeCustomerGroup$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._notify(true, res.Message);
          this._fetchData();
          this._fetchChart();
          this.modalService.dismissAll();
        } else {
          this._notify(false, res.Message);
        }
      },
      (e) => {
        this._notify(false, e.Message);
      }
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
