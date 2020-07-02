import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { StaffService } from '../../../../../core/services/api/staff.service';

@Component({
  selector: 'app-attachment-modal',
  templateUrl: './attachment-modal.component.html',
  styleUrls: ['./attachment-modal.component.scss'],
})
export class AttachmentModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() attachment: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  files = null;
  file_link = '';
  isChange = false;

  constructor(public formBuilder: FormBuilder, private staffService: StaffService) {
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

    if (!this.file_link && this.files === null)
      return this._notify(false, 'Chưa chọn file đính kèm');

    if (this.form.valid) {
      if (this.files) {
        const upload$ = this.staffService
          .uploadAttachment(this.files[0])
          .pipe(takeUntil(this.destroyed$));
        upload$.subscribe(
          (res: any) => {
            if (res && res.Code == 200) {
              const data = this.form.value;
              data.ast_link = res.Data;
              this.passEvent.emit({ event: true, data });
            } else this._notify(false, res.Message);
          },
          (e) => this._notify(false, e.Message)
        );
      } else {
        const data = this.form.value;
        data.ast_link = this.file_link;
        this.passEvent.emit({ event: true, data });
      }
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

  setFile(event) {
    let files = event.srcElement.files;
    if (!files) {
      return;
    }
    this.files = files;
    this.isChange = true;
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
    console.log(attachment.ast_link);
    this.file_link = attachment.ast_link;
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
