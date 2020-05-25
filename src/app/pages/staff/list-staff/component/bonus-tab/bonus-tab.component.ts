import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BonusModalComponent } from '../bonus-modal/bonus-modal.component';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bonus-tab',
  templateUrl: './bonus-tab.component.html',
  styleUrls: ['./bonus-tab.component.scss'],
})
export class BonusTabComponent implements OnInit {
  @Input() listBonus: any[];
  @Input() staffId: any;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  selectedBonus = null;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.staffId) this.selectedBonus = null;
    if (this.selectedBonus)
      this.selectedBonus = this.listBonus.filter(
        (item) => item.bos_id === this.selectedBonus.bos_id
      )[0];
  }

  onClickBonus(bonus: any) {
    if (isNullOrUndefined(this.selectedBonus)) {
      this.selectedBonus = bonus;
    } else {
      if (this.selectedBonus.bos_id !== bonus.bos_id) {
        this.selectedBonus = bonus;
      } else {
        this.selectedBonus = null;
      }
    }
  }

  openBonusModal(bonus?: any) {
    const modalRef = this.modalService.open(BonusModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.staffId = this.staffId;
    if (bonus) {
      modalRef.componentInstance.bonus = bonus;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (bonus) {
          this._updateBonus(res.data);
        } else {
          this._createBonus(res.data);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(bonus?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa đối tượng đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeBonus(bonus);
      }
    });
  }

  private _createBonus(data: any) {
    const updatedList = this.listBonus.concat(data);
    this.formSubmit.emit(updatedList);
  }

  private _updateBonus(updated: any) {
    const updatedList = this.listBonus.map((item) => {
      if (item.bos_id !== updated.bos_id) return item;
      return updated;
    });
    this.formSubmit.emit(updatedList);
  }

  private _removeBonus(bonus: any) {
    const updatedList = this.listBonus.filter((item) => item.bos_id !== bonus.bos_id);
    this.formSubmit.emit(updatedList);
  }
}
