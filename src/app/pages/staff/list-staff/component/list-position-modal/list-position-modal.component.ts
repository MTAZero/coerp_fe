import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { positionData } from '../../data';
import { Position } from '../../list-staff.model';
import { PositionModalComponent } from '../position-modal/position-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-position-modal',
  templateUrl: './list-position-modal.component.html',
  styleUrls: ['./list-position-modal.component.scss']
})
export class ListPositionModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  positions: Position[];
  selectedPosition: Position;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.loadPositionData();
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }

  openClickChoose() {
    this.passEvent.emit({ event: false });
  }

  onClickPosition(position: Position) {
    if (isNullOrUndefined(this.selectedPosition)) {
      this.selectedPosition = position;
    } else {
      if (this.selectedPosition.position_id !== position.position_id) {
        this.selectedPosition = position;
      } else {
        this.selectedPosition = null;
      }
    }
  }

  openPositionModal() {
    const modalRef = this.modalService.open(PositionModalComponent, {
      centered: true
    });
    if (this.selectedPosition) {
      modalRef.componentInstance.position = this.selectedPosition;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (this.selectedPosition) {
          this.updatePosition(this.selectedPosition, res.form);
        } else {
          this.createPosition(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa chức vụ';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa chức vụ đã chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removePosition(this.selectedPosition);
      }
      modalRef.close();
    });
  }

  private loadPositionData() {
    this.positions = positionData;
  }

  private createPosition(data: any) {}

  private updatePosition(positionId: any, data: any) {}

  private removePosition(position: Position) {}
}
