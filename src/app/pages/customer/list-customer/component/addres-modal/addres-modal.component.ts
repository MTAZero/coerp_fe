import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AddressService } from '../../../../../core/services/api/address.service';

@Component({
  selector: 'app-addres-modal',
  templateUrl: './addres-modal.component.html',
  styleUrls: ['./addres-modal.component.scss']
})
export class AddresModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() address: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  provinces: any;
  districts: any;
  wards: any;

  constructor(
    public formBuilder: FormBuilder,
    private modalService: NgbModal,
    private addressService: AddressService
  ) {
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
      const modalRef = this.modalService.open(ConfirmModalComponent, {
        centered: true
      });
      modalRef.componentInstance.title = 'Thông báo';
      modalRef.componentInstance.message =
        'Dữ liệu đã bị thay đổi, bạn có chắc chắn muốn hủy thao tác không?';
      modalRef.componentInstance.passEvent.subscribe(res => {
        if (res) {
          this.passEvent.emit({ event: false });
        }
        modalRef.close();
      });
    } else {
      this.passEvent.emit({ event: false });
    }
  }

  onChangeProvince(e) {
    this._loadDistrict(e.target.value);
  }

  onChangeDistrict(e) {
    this._loadWard(e.target.value);
  }

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      province: ['', [Validators.required]],
      district: ['', [Validators.required]],
      ward: ['', [Validators.required]],
      detail: ['', [Validators.required]],
      note: ['', null]
    });
  }

  private patchData(address: any) {
    this.form.patchValue({
      province: address.province,
      district: address.district,
      ward: address.ward,
      detail: address.detail,
      note: address.note
    });
  }

  private _loadProvince() {
    const province$ = this.addressService.loadProvince().pipe(takeUntil(this.destroyed$));
    province$.subscribe((res: any) => {
      if (res && res.Data) {
        this.provinces = res.Data;
        this.form.patchValue({ province: res.Data[0].id });
        this._loadDistrict(res.Data[0].id);
      }
    });
  }

  private _loadDistrict(provinceId: any) {
    const district$ = this.addressService
      .loadDistrict({ province_id: provinceId })
      .pipe(takeUntil(this.destroyed$));
    district$.subscribe((res: any) => {
      if (res && res.Data) {
        this.districts = res.Data;
        this.form.patchValue({ district: res.Data[0].id });
        this._loadWard(res.Data[0].id);
      }
    });
  }

  private _loadWard(districtId: any) {
    const ward$ = this.addressService
      .loadWard({ district_id: districtId })
      .pipe(takeUntil(this.destroyed$));
    ward$.subscribe((res: any) => {
      if (res && res.Data) {
        this.wards = res.Data;
        this.form.patchValue({ ward: res.Data[0].id });
      }
    });
  }
}
