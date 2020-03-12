import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { simplePieChart } from './data';
import { ChartType } from './opportunities.model';
import { CustomerGroupModalComponent } from './component/customer-group-modal/customer-group-modal.component';
import { ListCustomerModalComponent } from './component/list-customer-modal/list-customer-modal.component';
import { CustomerGroupService } from '../../../core/services/api/customer-group.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-group',
  templateUrl: './customer-group.component.html',
  styleUrls: ['./customer-group.component.scss']
})
export class CustomerGroupComponent implements OnInit {
  private destroyed$ = new Subject();
  breadCrumbItems: Array<{}>;

  submitted: boolean;

  textSearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  groups: any;

  simplePieChart: ChartType;

  constructor(private modalService: NgbModal, private customerGroupService: CustomerGroupService) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Khách hàng', path: '/' },
      { label: 'Nhóm khách hàng', path: '/', active: true }
    ];

    this._fetchData();
  }

  openCustomerGroupModal(customerGroup?: any) {
    const modalRef = this.modalService.open(CustomerGroupModalComponent, {
      centered: true,
      size: 'lg'
    });
    if (customerGroup) {
      modalRef.componentInstance.customerGroup = customerGroup;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (customerGroup) {
          this._updateCustomerGroup(res.form);
        } else {
          this._createCustomerGroup(res.form);
        }
      }
      modalRef.close();
    });
  }

  openListCustomerModal() {
    const modalRef = this.modalService.open(ListCustomerModalComponent, {
      centered: true,
      size: 'lg'
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
      cancelButtonColor: '#d33'
    }).then(result => {
      if (result.value) {
        this._removeCustomerGroup(customerGroup);
      }
    });
  }

  onChangeFilter() {
    this._fetchData();
  }

  private _fetchData() {
    this.simplePieChart = simplePieChart;

    const customerGroup$ = this.customerGroupService
      .loadCustomerGroup({
        pageNumber: this.page,
        pageSize: this.pageSize,
        cg_id: '',
        name: this.textSearch
      })
      .pipe(takeUntil(this.destroyed$));
    customerGroup$.subscribe((res: any) => {
      if (res && res.Data) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.groups = res.Data.Results;
      }
    });

    const chart$ = this.customerGroupService.loadChart().pipe(takeUntil(this.destroyed$));
    chart$.subscribe((res: any) => {
      if (res && res.Data) {
        console.log(res.Data);
        let series = [];
        let labels = [];
        res.Data.map((e: any) => {
          series.push(e.number);
          labels.push(e.cg_name);
        });
        this.simplePieChart.series = series;
        this.simplePieChart.labels = labels;
      }
    });
  }

  private _createCustomerGroup(data: any) {
    const createCustomerGroup$ = this.customerGroupService
      .createCustomerGroup(data)
      .pipe(takeUntil(this.destroyed$));
    createCustomerGroup$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Thêm nhóm khách hàng thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this._fetchData();
          this.modalService.dismissAll();
        } else {
          Swal.fire({
            position: 'top-end',
            type: 'error',
            title: 'Thêm nhóm khách hàng thất bại',
            showConfirmButton: false,
            timer: 2000
          });
          this.modalService.dismissAll();
        }
      },
      () => {}
    );
  }

  private _updateCustomerGroup(updated: any) {
    const updateCustomerGroup$ = this.customerGroupService
      .updateCustomerGroup(updated)
      .pipe(takeUntil(this.destroyed$));
    updateCustomerGroup$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Cập nhật nhóm khách hàng thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this._fetchData();
          this.modalService.dismissAll();
        } else {
          Swal.fire({
            position: 'top-end',
            type: 'error',
            title: 'Cập nhật nhóm khách hàng thất bại',
            showConfirmButton: false,
            timer: 2000
          });
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Cập nhật nhóm khách hàng thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }

  private _removeCustomerGroup(customerGroup: any) {
    const removeCustomerGroup$ = this.customerGroupService
      .removeCustomerGroup({ cg_id: customerGroup.cg_id })
      .pipe(takeUntil(this.destroyed$));
    removeCustomerGroup$.subscribe(
      (res: any) => {
        if (res.Code === 200) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Xóa khách nhóm hàng thành công',
            showConfirmButton: false,
            timer: 2000
          });
          this._fetchData();
          this.modalService.dismissAll();
        } else {
          Swal.fire({
            position: 'top-end',
            type: 'error',
            title: 'Xóa khách nhóm hàng thất bại',
            showConfirmButton: false,
            timer: 2000
          });
          this.modalService.dismissAll();
        }
      },
      () => {
        Swal.fire({
          position: 'top-end',
          type: 'error',
          title: 'Xóa khách nhóm hàng thất bại',
          showConfirmButton: false,
          timer: 2000
        });
        this.modalService.dismissAll();
      }
    );
  }
}
