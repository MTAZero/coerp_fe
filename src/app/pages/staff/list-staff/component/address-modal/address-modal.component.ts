import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AddressService } from '../../../../../core/services/api/address.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss'],
})
export class AddressModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() address: any;
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

    if (this.form.valid) {
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
      unl_id: ['temp_0', null],
      unl_province: ['', [Validators.required]],
      unl_district: ['', [Validators.required]],
      unl_ward: ['', [Validators.required]],
      unl_detail: ['', null],
      unl_note: ['', null],
    });
  }

  private patchData(address: any) {
    this.form.patchValue({
      unl_id: address.unl_id,
      unl_province: address.unl_province,
      unl_district: address.unl_district,
      unl_ward: address.unl_ward,
      unl_detail: address.unl_detail,
      unl_note: address.unl_note,
    });
  }

  private _loadProvince() {
    const province$ = this.addressService.loadProvince().pipe(takeUntil(this.destroyed$));
    province$.subscribe((res: any) => {
      if (res && res.Data) {
        this.provinces = res.Data;

        if (this.address) {
          this.form.patchValue({ unl_province: this.address.unl_province });
          const provinceId = this.provinces.find((item) => item.name === this.address.unl_province)
            .id;
          this._loadDistrict(provinceId, true);
        } else {
          this.form.patchValue({ unl_province: res.Data[0].name });
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
          this.form.patchValue({ unl_district: this.address.unl_district });
          const districtId = this.districts.find((item) => item.name === this.address.unl_district)
            .id;
          this._loadWard(districtId, true);
        } else {
          this.form.patchValue({ unl_district: res.Data[0].name });
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
          this.form.patchValue({ unl_ward: this.address.unl_ward });
        } else {
          this.form.patchValue({ unl_ward: res.Data[0].name });
        }
      }
    });
  }
}
