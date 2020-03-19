import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListServiceCategoryModalComponent } from '../list-service-category-modal/list-service-category-modal.component';
import { ServiceService } from '../../../../../core/services/api/service.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.scss']
})
export class ServiceModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() service: any;
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  types: any;
  categories: any;

  constructor(
    public formBuilder: FormBuilder,
    private modalService: NgbModal,
    private serviceService: ServiceService
  ) {
    this.initializeForm();
    this._fetchFilter();
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
      se_id: ['', null],
      se_name: ['', [Validators.required]],
      se_description: ['', null],
      service_category_id: ['', [Validators.required]],
      se_price: ['', [Validators.required]],
      se_saleoff: ['', [Validators.required]],
      se_type: ['', [Validators.required]]
    });
  }

  private patchData(service: any) {
    this.form.patchValue({
      se_id: service.se_id,
      se_name: service.se_name,
      se_description: service.se_description,
      service_category_id: service.service_category_id,
      se_price: service.se_price,
      se_saleoff: service.se_saleoff,
      se_type: service.se_type
    });
  }

  private _fetchFilter() {
    const type$ = this.serviceService.getType().pipe(takeUntil(this.destroyed$));
    type$.subscribe((res: any) => {
      this.types = res.Data;
    });

    const category$ = this.serviceService.getCategory().pipe(takeUntil(this.destroyed$));
    category$.subscribe((res: any) => {
      this.categories = res.Data;
    });
  }
}
