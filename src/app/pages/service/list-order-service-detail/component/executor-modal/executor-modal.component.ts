import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ServiceService } from '../../../../../core/services/api/service.service';

@Component({
  selector: 'app-executor-modal',
  templateUrl: './executor-modal.component.html',
  styleUrls: ['./executor-modal.component.scss'],
})
export class ExecutorModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() exe: any;
  @Input() listSameDay: any;
  @Input() customerOrderId: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  staffs = [];

  constructor(public formBuilder: FormBuilder, private serviceService: ServiceService) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.exe) {
      this.patchData(this.exe);
      this._loadStaff();
    }

    if (this.listSameDay) {
      console.log(this.listSameDay);
    }
  }

  onChangeStaff(event: any) {
    const item = this.staffs.find((item) => item.id === parseInt(event.target.value));
    this.form.patchValue({
      staff_name: item.name,
    });
  }

  onClickSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      const data = this.form.value;
      data.exe_status = parseInt(data.exe_status);
      this.passEvent.emit({ event: true, data });
    }
  }

  onClickCancel() {
    if (this.form.dirty) {
      Swal.fire({
        title: 'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Có',
        cancelButtonText: 'Không',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.value) {
          this.passEvent.emit({ event: false });
        }
      });
    } else {
      this.passEvent.emit({ event: false });
    }
  }

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      exe_id: ['', null],
      staff_id: ['', [Validators.required]],
      work_time: ['', [Validators.required]],
      start_time: ['', [Validators.required]],
      end_time: ['', [Validators.required]],
      exe_flag_overtime: [0, [Validators.required]],
      exe_time_overtime: ['', null],
      exe_status: [2, [Validators.required]],
      exe_evaluate: ['', null],
      exe_note: ['', null],
      staff_name: ['', null],
    });
  }

  private patchData(exe: any) {
    this.form.patchValue({
      exe_id: exe.exe_id,
      staff_id: exe.staff_id,
      work_time: exe.work_time.substr(0, 10),
      start_time: exe.start_time,
      end_time: exe.end_time,
      exe_flag_overtime: exe.exe_flag_overtime ? exe.exe_flag_overtime : 0,
      exe_time_overtime: exe.exe_time_overtime ? exe.exe_time_overtime : '',
      exe_status: exe.exe_status ? exe.exe_status : 2,
      exe_evaluate: exe.exe_evaluate ? exe.exe_evaluate : '',
      exe_note: exe.exe_note ? exe.exe_note : '',
      staff_name: exe.staff_name ? exe.staff_name : '',
    });
  }

  private _loadStaff() {
    let list_staff_id = [];
    this.listSameDay.forEach((item) => {
      if (item.staff_id) list_staff_id.push(parseInt(item.staff_id));
    });
    const body = {
      work_time: this.exe.work_time,
      start_time: this.exe.start_time + ':00',
      end_time: this.exe.end_time + ':00',
      list_staff_id,
      customer_order_id: this.customerOrderId ? parseInt(this.customerOrderId) : null,
    };
    const staff$ = this.serviceService
      .getFreeStaff({ fullName: '' }, body)
      .pipe(takeUntil(this.destroyed$));
    staff$.subscribe((res: any) => {
      if (res && res.Data) {
        this.staffs = res.Data;

        if (this.exe.staff_id && this.exe.staff_name)
          this.staffs.push({
            id: parseInt(this.exe.staff_id),
            name: this.exe.staff_name,
          });
      }
    });
  }
}
