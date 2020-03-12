import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-unit-modal',
  templateUrl: './unit-modal.component.html',
  styleUrls: ['./unit-modal.component.scss']
})
export class UnitModalComponent implements OnInit {
  @Input() unit: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.unit) {
      this.patchData(this.unit);
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
      unit_name: ['', [Validators.required]]
    });
  }

  private patchData(unit: any) {
    this.form.patchValue({
      unit_name: unit.unit_name
    });
  }
}
