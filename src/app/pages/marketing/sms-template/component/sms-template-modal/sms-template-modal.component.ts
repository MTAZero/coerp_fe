import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SmsService } from '../../../../../core/services/api/sms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sms-template-modal',
  templateUrl: './sms-template-modal.component.html',
  styleUrls: ['./sms-template-modal.component.scss']
})
export class SmsTemplateModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() template: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  fields: any;
  constructor(
    public formBuilder: FormBuilder,
    private modalService: NgbModal,
    private smsService: SmsService
  ) {
    this.initializeForm();
    this._fetchData();
  }

  ngOnInit() {
    if (this.template) {
      this.patchData(this.template);
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

  onClickField(field: any) {
    this.form.patchValue({
      smt_content: this.form.value['smt_content'] + `{{${field.fie_name}}}`
    });
  }

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      smt_id: ['', null],
      smt_title: ['', [Validators.required]],
      smt_content: ['', [Validators.required]],
      staff_id: 1,
      smt_created_date: new Date().toDateString()
    });
  }

  private patchData(template: any) {
    this.form.patchValue({
      smt_id: template.smt_id,
      smt_title: template.smt_title,
      smt_content: template.smt_content,
      staff_id: template.staff_id,
      smt_created_date: template.smt_created_date
    });
  }

  private _fetchData() {
    const field$ = this.smsService
      .loadField({ pageNumber: 0, pageSize: 100 })
      .pipe(takeUntil(this.destroyed$));
    field$.subscribe((res: any) => {
      if (res && res.Data) {
        this.fields = res.Data.Results;
      }
    });
  }
}
