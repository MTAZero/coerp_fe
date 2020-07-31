import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { DeviceService } from 'src/app/core/services/api/device.service';
import { StaffService } from 'src/app/core/services/api/staff.service';
import { isUndefined } from 'util';
@Component({
  selector: 'app-device-modal',
  templateUrl: './device-modal.component.html',
  styleUrls: ['./device-modal.component.scss']
})
export class DeviceModalComponent implements OnInit {
  @Input() device: any;
  @Input() listDevice: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  listView = [true];
  units: any;

  constructor(
    public formBuilder: FormBuilder,
    private staffService: StaffService,
    private deviceService: DeviceService) {
    this.initializeForm();
    // this._loadCategory();
  }

  ngOnInit() {
    if (this.device) {
      this.patchData(this.device);
    }
  }

  onClickSubmit() {
    this.submitted = true;
 
    if (this.form.value.device_name.trim() === '')
      return this.form.controls['device_name'].setErrors({ required: true });

    // if (this.form.value.rels_relatives.trim() === '')
    //   return this.form.controls['rels_relatives'].setErrors({ required: true });

    if (this.form.value.des_quantity.trim() === '')
      return this.form.controls['des_quantity'].setErrors({ required: true });

    if (this.form.valid) {
      const data = this.form.value;
      data.des_date = this._convertNgbDateToDate(data.des_date);
      this.passEvent.emit({ event: true, data });
    }
  }
  onChangeEvaluate(event) {
    console.log(event.target.value);
    const evaluate = event.target.value;

    if (evaluate === 1 || evaluate === '1')
      this.form.patchValue({
        dev_unit_name: 'Bộ ',
      });

    if (evaluate === 2 || evaluate === '2')
      this.form.patchValue({
        dev_unit_name: 'Chiếc',
      });

    if (evaluate === 3 || evaluate === '3')
      this.form.patchValue({
        dev_unit_name: 'Cái',
      });

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
  // onChangeCategory(e) {
  //   const bankId = e.id;
  //   this._loadDevice(bankId);
  // }
  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      device_id: ['temp_0', null],
      device_name: ['', [Validators.required]],
      des_quantity: ['', [Validators.required]],
      des_note: ['', [Validators.required]],
      des_unit: ['', [Validators.required]],
      des_date: [this._convertDateToNgbDate(new Date()), [Validators.required]],
      // rels_address: ['', [Validators.required]],
    });
  }

  private patchData(device: any) {
    this.form.patchValue({
      device_id: device.device_id,
      device_name: device.device_name,
      des_quantity: device.des_quantity,
      des_note: device.des_note,
      des_unit: device.des_unit,
      des_date: this._convertDateToNgbDate(device.des_date),
      // rels_address: device.rels_address,
    });
  }
  private _convertDateToNgbDate(date: any) {
    if (!date) {
      return null;
    }
    const year = moment(date).year();
    const month = moment(date).month() + 1;
    const day = moment(date).date();
    return new NgbDate(year, month, day);
  }

  private _convertNgbDateToDate(ngbDate: any) {
    if (!ngbDate) {
      return '';
    }
    if (isUndefined(ngbDate.year)) return ngbDate;
    const newDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    return moment(newDate).format();
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
