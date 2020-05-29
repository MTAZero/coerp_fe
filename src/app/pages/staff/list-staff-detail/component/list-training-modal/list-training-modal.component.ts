import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StaffService } from '../../../../../core/services/api/staff.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TrainingModalComponent } from '../../../list-staff/component/training-modal/training-modal.component';

@Component({
  selector: 'app-list-training-modal',
  templateUrl: './list-training-modal.component.html',
  styleUrls: ['./list-training-modal.component.scss'],
})
export class ListTrainingModalComponent implements OnInit {
  private destroyed$ = new Subject();
  @Input() listTraining: any[];
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  trainings: any;
  selectedTraining = [];

  constructor(private staffService: StaffService, private modalService: NgbModal) {}

  ngOnInit() {
    this._fetchData();

    if (this.listTraining) {
      this.selectedTraining = this.listTraining.map((e) => {
        return e;
      });
    }
  }

  onClickTraining(training: any) {
    const index = this.selectedTraining.findIndex((item) => item.tn_id === training.tn_id);
    if (index === -1) this.selectedTraining.push(training);
    else
      this.selectedTraining = this.selectedTraining.filter((item) => item.tn_id !== training.tn_id);
  }

  onClickSubmit() {
    this.passEvent.emit({ event: true, data: this.selectedTraining });
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }

  isSelected(training: any) {
    const index = this.selectedTraining.findIndex((item) => item.tn_id === training.tn_id);
    if (index === -1) return false;
    return true;
  }

  checkAll() {
    if (this.selectedTraining.length === this.trainings.length) this.selectedTraining = [];
    else this.selectedTraining = this.trainings;
  }

  openTrainingModal(training?: any) {
    this.onClickTraining(training);
    const modalRef = this.modalService.open(TrainingModalComponent, {
      centered: true,
    });
    if (training) {
      modalRef.componentInstance.training = training;
      modalRef.componentInstance.fromList = true;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (training) {
          this._updateTraing(res.data);
        }
      }
      modalRef.close();
    });
  }

  openRemoveTraining(training) {
    this.onClickTraining(training);
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

  private _fetchData(update = false) {
    const trainings$ = this.staffService
      .searchTraining({
        pageNumber: 0,
        pageSize: 100,
        search_name: '',
      })
      .pipe(takeUntil(this.destroyed$));
    trainings$.subscribe((res: any) => {
      if (res && res.Data) {
        this.trainings = res.Data.Results;

        if (update) {
          this.selectedTraining.forEach((item, i) => {
            const index = this.trainings.findIndex((e) => e.tn_id === item.tn_id);
            if (index === -1) this.selectedTraining.splice(i, 1);
            else this.selectedTraining[i] = this.trainings[index];
          });
        }
      }
    });
  }

  private _updateTraing(updated: any) {
    const updateTraining$ = this.staffService
      .updateTraining(updated)
      .pipe(takeUntil(this.destroyed$));
    updateTraining$.subscribe(
      (res: any) => {
        if (res && res.Code === 200) {
          this._fetchData(true);
          this._notify(true, res.Message);
        } else this._notify(false, res.Message);
      },
      (e) => this._notify(false, e.Message)
    );
  }

  private _removeTraining(training: any) {
    const removeTraining$ = this.staffService
      .removeTraining({ tn_id: training.tn_id })
      .pipe(takeUntil(this.destroyed$));
    removeTraining$.subscribe(
      (res: any) => {
        if (res && res.Code == 200) {
          this._fetchData(true);
          this._notify(true, res.Message);
        } else this._notify(false, res.Message);
      },
      (e) => this._notify(false, e.Message)
    );
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
