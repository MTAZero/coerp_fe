import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-group-modal',
  templateUrl: './customer-group-modal.component.html',
  styleUrls: ['./customer-group-modal.component.scss']
})
export class CustomerGroupModalComponent implements OnInit {
  @Input() customerGroup: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  thumbnail = null;
  constructor(public formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.customerGroup) {
      this.patchData(this.customerGroup);
    }
  }

  onClickSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      const data = this.form.value;
      this.passEvent.emit({ event: true, form: data });
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
        cancelButtonColor: '#d33'
      }).then(result => {
        if (result.value) {
          this.passEvent.emit({ event: false });
        }
      });
    } else {
      this.passEvent.emit({ event: false });
    }
  }

  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.form.patchValue({
        cg_thumbnail: file
      });
      const reader = new FileReader();
      reader.onload = e => (this.thumbnail = reader.result);
      reader.readAsDataURL(file);
    }
  }

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      cg_id: ['', null],
      cg_name: ['', [Validators.required]],
      cg_thumbnail: ['', null],
      cg_description: ['', [Validators.required]]
    });
  }

  private patchData(customerGroup: any) {
    this.form.patchValue({
      cg_id: customerGroup.cg_id,
      cg_name: customerGroup.cg_name,
      cg_thumbnail: customerGroup.cg_thumbnail,
      cg_description: customerGroup.cg_description
    });
    this.thumbnail = 'http://27.72.147.222:1230' + customerGroup.cg_thumbnail;
  }
}
