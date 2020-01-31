import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceCategory } from '../../list-service.model';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-service-category-modal',
  templateUrl: './service-category-modal.component.html',
  styleUrls: ['./service-category-modal.component.scss']
})
export class ServiceCategoryModalComponent implements OnInit {
  @Input() serviceCategory: ServiceCategory;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder, private modalService: NgbModal) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.serviceCategory) {
      this.patchData(this.serviceCategory);
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

  get formUI() {
    return this.form.controls;
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      service_category_name: ['', [Validators.required]],
      service_category_description: ['', null]
    });
  }

  private patchData(serviceCategory: ServiceCategory) {
    this.form.patchValue({
      service_category_name: serviceCategory.service_category_name,
      service_category_description: serviceCategory.service_category_description
    });
  }
}