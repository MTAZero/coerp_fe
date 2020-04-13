import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StaffService } from '../../../../../core/services/api/staff.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { isString } from 'util';

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

  constructor(private staffService: StaffService) {}

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

  private _fetchData() {
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
      }
    });
  }
}
