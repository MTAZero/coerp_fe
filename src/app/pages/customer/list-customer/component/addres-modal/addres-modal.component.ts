import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AddressService } from '../../../../../core/services/api/address.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addres-modal',
  templateUrl: './addres-modal.component.html',
  styleUrls: ['./addres-modal.component.scss'],
})
export class AddresModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() address: any;
  @Input() listAddress: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  provinces: any;
  districts: any;
  wards: any;

  constructor(public formBuilder: FormBuilder, private addressService: AddressService) {
    this.initializeForm();
    this._loadProvince();
  }

  ngOnInit() {
    if (this.address) {
      this.patchData(this.address);
    }
  }

  onClickSubmit() {
    this.submitted = true;

    let isConflict = false;
    this.listAddress.forEach((item) => {
      if (
        item.sha_province === this.form.value.sha_province &&
        item.sha_district === this.form.value.sha_district &&
        item.sha_ward === this.form.value.sha_ward &&
        item.sha_detail.trim() === this.form.value.sha_detail.trim()
      )
        isConflict = true;
    });
    if (isConflict) this._notify(false, 'Địa chỉ nhận hàng đã tồn tại');

    if (this.form.valid && !isConflict) {
      this.passEvent.emit({ event: true, form: this.form.value });
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

  onChangeProvince(e) {
    const districtId = this.provinces.find((item) => item.name === e.target.value).id;
    this._loadDistrict(districtId);
  }

  onChangeDistrict(e) {
    const wardId = this.districts.find((item) => item.name === e.target.value).id;
    this._loadWard(wardId);
  }

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      sha_id: ['temp_0', null],
      sha_province: ['', [Validators.required]],
      sha_district: ['', [Validators.required]],
      sha_ward: ['', [Validators.required]],
      sha_detail: ['', null],
      sha_note: ['', null],
    });
  }

  private patchData(address: any) {
    this.form.patchValue({
      sha_id: address.sha_id,
      sha_province: address.sha_province,
      sha_district: address.sha_district,
      sha_ward: address.sha_ward,
      sha_detail: address.sha_detail,
      sha_note: address.sha_note,
    });
  }

  private _loadProvince() {
    const province$ = this.addressService.loadProvince().pipe(takeUntil(this.destroyed$));
    province$.subscribe((res: any) => {
      if (res && res.Data) {
        this.provinces = res.Data;

        if (this.address) {
          this.form.patchValue({ sha_province: this.address.sha_province });
          const provinceId = this.provinces.find((item) => item.name === this.address.sha_province)
            .id;
          this._loadDistrict(provinceId, true);
        } else {
          this.form.patchValue({ sha_province: res.Data[0].name });
          this._loadDistrict(res.Data[0].id);
        }
      }
    });
  }

  private _loadDistrict(provinceId: any, isFirst = false) {
    const district$ = this.addressService
      .loadDistrict({ province_id: provinceId })
      .pipe(takeUntil(this.destroyed$));
    district$.subscribe((res: any) => {
      if (res && res.Data) {
        this.districts = res.Data;

        if (this.address && isFirst) {
          this.form.patchValue({ sha_district: this.address.sha_district });
          const districtId = this.districts.find((item) => item.name === this.address.sha_district)
            .id;
          this._loadWard(districtId, true);
        } else {
          this.form.patchValue({ sha_district: res.Data[0].name });
          this._loadWard(res.Data[0].id);
        }
      }
    });
  }

  private _loadWard(districtId: any, isFirst = false) {
    const ward$ = this.addressService
      .loadWard({ district_id: districtId })
      .pipe(takeUntil(this.destroyed$));
    ward$.subscribe((res: any) => {
      if (res && res.Data) {
        this.wards = res.Data;

        if (this.address && isFirst) {
          this.form.patchValue({ sha_ward: this.address.sha_ward });
        } else {
          this.form.patchValue({ sha_ward: res.Data[0].name });
        }
      }
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
