import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attachment-modal',
  templateUrl: './attachment-modal.component.html',
  styleUrls: ['./attachment-modal.component.scss'],
})
export class AttachmentModalComponent implements OnInit {
  @Input() attachment: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.attachment) {
      this.patchData(this.attachment);
    }
  }

  onClickSubmit() {
    this.submitted = true;
    if (this.form.value.ast_filename.trim() === '')
      return this.form.controls['ast_filename'].setErrors({ required: true });

    if (this.form.valid) {
      const data = this.form.value;
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
      ast_id: ['temp_0', null],
      ast_filename: ['', [Validators.required]],
      ast_description: ['', null],
      ast_note: ['', null],
    });
  }

  private patchData(attachment: any) {
    this.form.patchValue({
      ast_id: attachment.ast_id,
      ast_filename: attachment.ast_filename,
      ast_description: attachment.ast_description,
      ast_note: attachment.ast_note,
    });
  }
}
