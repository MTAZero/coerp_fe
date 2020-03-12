import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-position-modal',
  templateUrl: './position-modal.component.html',
  styleUrls: ['./position-modal.component.scss']
})
export class PositionModalComponent implements OnInit {
  @Input() position: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.position) {
      this.patchData(this.position);
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

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      position_name: ['', [Validators.required]],
      capacity: ['', null],
      ability: ['', null],
      privilege: ['', null],
      mission: ['', null],
      description: ['', null]
    });
  }

  private patchData(position: any) {
    this.form.patchValue({
      position_name: position.position_name,
      capacity: position.capacity,
      ability: position.ability,
      privilege: position.privilege,
      mission: position.mission,
      description: position.description
    });
  }
}
