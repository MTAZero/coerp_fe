import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { departmentData } from '../../data';
import { Department } from '../../list-staff.model';
import { DepartmentModalComponent } from '../department-modal/department-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-department-modal',
  templateUrl: './list-department-modal.component.html',
  styleUrls: ['./list-department-modal.component.scss']
})
export class ListDepartmentModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  departments: Department[];
  selectedDepartment: Department;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.loadDepartmentData();
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }

  openClickChoose() {
    this.passEvent.emit({ event: false });
  }

  onClickDepartment(department: Department) {
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
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa phòng ban';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa phòng ban đã chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeDepartment(this.selectedDepartment);
      }
      modalRef.close();
    });
  }

  private loadDepartmentData() {
    this.departments = departmentData;
  }

  private createDepartment(data: any) {}

  private updateDepartment(departmentId: any, data: any) {}

  private removeDepartment(department: Department) {}
}
