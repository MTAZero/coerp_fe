import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { departmentData } from '../../data';
import { DepartmentModalComponent } from '../department-modal/department-modal.component';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-department-modal',
  templateUrl: './list-department-modal.component.html',
  styleUrls: ['./list-department-modal.component.scss']
})
export class ListDepartmentModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  departments: any[];
  selectedDepartment: any;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.loadDepartmentData();
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }

  onClickChoose() {
    this.passEvent.emit({ event: false });
  }

  onClickDepartment(department: any) {
    if (isNullOrUndefined(this.selectedDepartment)) {
      this.selectedDepartment = department;
    } else {
      if (this.selectedDepartment.department_id !== department.department_id) {
        this.selectedDepartment = department;
      } else {
        this.selectedDepartment = null;
      }
    }
  }

  openDepartmentModal() {
    const modalRef = this.modalService.open(DepartmentModalComponent, {
      centered: true
    });
    if (this.selectedDepartment) {
      modalRef.componentInstance.department = this.selectedDepartment;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (this.selectedDepartment) {
          this.updateDepartment(this.selectedDepartment, res.form);
        } else {
          this.createDepartment(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    Swal.fire({
      title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Có',
      cancelButtonText: 'Không',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then(result => {
      if (result.value) {
        this.passEvent.emit({ event: false });
      }
    });
  }

  private loadDepartmentData() {
    this.departments = departmentData;
  }

  private createDepartment(data: any) {}

  private updateDepartment(departmentId: any, data: any) {}

  private removeDepartment(department: any) {}
}
