import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { DeviceService } from 'src/app/core/services/api/device.service';
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
 
    if (this.form.value.dev_name.trim() === '')
      return this.form.controls['dev_name'].setErrors({ required: true });

    // if (this.form.value.rels_relatives.trim() === '')
    //   return this.form.controls['rels_relatives'].setErrors({ required: true });

    if (this.form.value.dev_number.trim() === '')
      return this.form.controls['dev_number'].setErrors({ required: true });

    // if (this.form.value.rels_address.trim() === '')
    //   return this.form.controls['rels_address'].setErrors({ required: true });

    // if (!/^\d+$/.test(this.form.value.rels_phone.trim()))
    //   return this.form.controls['rels_phone'].setErrors({ pattern: true });

    let isConflict = false;
    this.listDevice.forEach((item) => {
      if (
        item.dev_name.trim() === this.form.value.dev_name.trim() &&
        item.dev_number.trim() === this.form.value.dev_number.trim() &&
        item.dev_note.trim() === this.form.value.dev_note.trim()
      )
        isConflict = true;
    });
    if (isConflict) return this._notify(false, 'Vật tư đã tồn tại');

    if (this.form.valid && !isConflict) {
      const data = this.form.value;
      // data.dev_name = data.dev_name.trim();
      // data.dev_unit = data.dev_unit.trim();
      // data.dev_number = data.dev_number.trim();
      // data.rels_address = data.rels_address.trim();
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
  // onChangeCategory(e) {
  //   const bankId = e.id;
  //   this._loadDevice(bankId);
  // }
  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      dev_id: ['temp_0', null],
      dev_name: ['', [Validators.required]],
      dev_number: ['', [Validators.required]],
      rels_note: ['', [Validators.required]],
      // rels_address: ['', [Validators.required]],
    });
  }

  private patchData(device: any) {
    this.form.patchValue({
      dev_id: device.dev_id,
      dev_name: device.dev_name,
      dev_number: device.dev_number,
      dev_note: device.dev_note,
      // rels_address: device.rels_address,
    });
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
