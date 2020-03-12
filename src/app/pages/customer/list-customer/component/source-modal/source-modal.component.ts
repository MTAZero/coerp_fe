import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-source-modal',
  templateUrl: './source-modal.component.html',
  styleUrls: ['./source-modal.component.scss']
})
export class SourceModalComponent implements OnInit {
  @Input() source: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder, private modalService: NgbModal) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.source) {
      this.patchData(this.source);
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
    } else {
      this.passEvent.emit({ event: false });
    }
  }

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      source_name: ['', [Validators.required]],
      description: ['', null]
    });
  }

  private patchData(source: any) {
    this.form.patchValue({
      source_name: source.source_name,
      description: source.description
    });
  }
}
