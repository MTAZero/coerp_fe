import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TrainingModalComponent } from '../training-modal/training-modal.component';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-training-tab',
  templateUrl: './training-tab.component.html',
  styleUrls: ['./training-tab.component.scss'],
})
export class TrainingTabComponent implements OnInit {
  @Input() listTraining: any[];
  @Input() staffId: any;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  selectedTraining = null;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.staffId) this.selectedTraining = null;
  }

  onClickTraining(training: any) {
    if (isNullOrUndefined(this.selectedTraining)) {
      this.selectedTraining = training;
    } else {
      if (this.selectedTraining.tn_id !== training.tn_id) {
        this.selectedTraining = training;
      } else {
        this.selectedTraining = null;
      }
    }
  }

  openTrainingModal(training?: any) {
    const modalRef = this.modalService.open(TrainingModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.staffId = this.staffId;
    if (training) {
      modalRef.componentInstance.training = training;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (training) {
          this._updateTraining(res.data);
        } else {
          this._createTraining(res.data);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(training?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa khóa đào tạo đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeTraining(training);
      }
    });
  }

  private _createTraining(data: any) {
    const updatedList = this.listTraining.concat(data);
    this.formSubmit.emit(updatedList);
  }

  private _updateTraining(updated: any) {
    const updatedList = this.listTraining.map((item) => {
      if (item.tn_id !== updated.tn_id) return item;
      return updated;
    });
    this.formSubmit.emit(updatedList);
  }

  private _removeTraining(training: any) {
    const updatedList = this.listTraining.filter((item) => item.tn_id !== training.tn_id);
    this.formSubmit.emit(updatedList);
  }
}
