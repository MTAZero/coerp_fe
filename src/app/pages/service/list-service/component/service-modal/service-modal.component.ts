import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Service } from '../../list-service.model';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ListServiceCategoryModalComponent } from '../list-service-category-modal/list-service-category-modal.component';

@Component({
  selector: 'app-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.scss']
})
export class ServiceModalComponent implements OnInit {
  @Input() service: Service;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  constructor(public formBuilder: FormBuilder, private modalService: NgbModal) {
    this.initializeForm();
  }

  ngOnInit() {
    if (this.service) {
      this.patchData(this.service);
    }
  }

  openServiceCategoryModal() {
    const modalRef = this.modalService.open(ListServiceCategoryModalComponent, {
      centered: true,
      size: 'lg'
    });
    modalRef.componentInstance.passEvent.subscribe(res => {
      modalRef.close();
    });
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
      service_type: ['', [Validators.required]],
      service_name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      service_category: ['', null],
      service_price: ['', null]
    });
  }

  private patchData(service: Service) {
    this.form.patchValue({
      service_type: service.service_type,
      service_name: service.service_name,
      description: service.description,
      service_category: service.service_category,
      service_price: service.service_price
    });
  }
}
