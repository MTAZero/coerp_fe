import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PositionModalComponent } from '../position-modal/position-modal.component';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-position-modal',
  templateUrl: './list-position-modal.component.html',
  styleUrls: ['./list-position-modal.component.scss']
})
export class ListPositionModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  positions: any[];
  selectedPosition: any;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.loadPositionData();
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }

  onClickChoose() {
    this.passEvent.emit({ event: false });
  }

  onClickPosition(position: any) {
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
  }

  private loadPositionData() {
    this.positions = [];
  }

  private createPosition(data: any) {}

  private updatePosition(positionId: any, data: any) {}

  private removePosition(position: any) {}
}
