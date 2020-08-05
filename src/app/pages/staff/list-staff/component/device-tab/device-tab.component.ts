import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RelativeModalComponent } from '../relative-modal/relative-modal.component';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';
import { DeviceService } from 'src/app/core/services/api/device.service';
import { DeviceModalComponent } from '../device-modal/device-modal.component';

@Component({
  selector: 'app-device-tab',
  templateUrl: './device-tab.component.html',
  styleUrls: ['./device-tab.component.scss']
})
export class DeviceTabComponent implements OnInit {
  @Input() listDevice: any[];
  @Input() deviceId: any;
  @Input() staffId: any;
  
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  selectedDevice = null;

  constructor(
    private modalService: NgbModal,
    private deviceService: DeviceService) {}

  ngOnInit() {
    
  }

  ngOnChanges() {
    if (this.staffId) this.selectedDevice = null;
    if (this.selectedDevice)
      this.selectedDevice = this.listDevice.filter(
        (item) => item.device_id === this.selectedDevice.device_id
      )[0];
  }

  onClickDevice(device: any) {
    if (isNullOrUndefined(this.selectedDevice)) {
      this.selectedDevice = device;
    } else {
      if (this.selectedDevice.device_id !== device.device_id
        
       ) {
        this.selectedDevice = device;
      } else {
        this.selectedDevice = null;
      }
    }
  }

  openDeviceModal(device?: any) {
    const modalRef = this.modalService.open(DeviceModalComponent, {
      centered: true,
    });
  
    modalRef.componentInstance.listDevice = this.listDevice;
    if (device) {
      modalRef.componentInstance.device = device;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (device) {
          this._updateDevice(res.data);
        } else {
          this._createDevice(res.data);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(device?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa vật tư đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeDevice(device);
      }
    });
  }

  private _createDevice(data: any) {
    const updatedList = this.listDevice.concat(data);
    this.formSubmit.emit(updatedList);
  }

  private _updateDevice(updated: any) {
    const updatedList = this.listDevice.map((item) => {
      if (item.device_id !== updated.device_id) return item;
      return updated;
    });
    this.formSubmit.emit(updatedList);
  }

  private _removeDevice(device: any) {
    const updatedList = this.listDevice.filter((item) => item.device_id !== device.device_id);
    this.formSubmit.emit(updatedList);
  }
}

