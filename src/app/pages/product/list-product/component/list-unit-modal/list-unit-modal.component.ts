import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { unitData } from '../../data';
import { Unit } from '../../list-product.model';
import { UnitModalComponent } from '../unit-modal/unit-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-unit-modal',
  templateUrl: './list-unit-modal.component.html',
  styleUrls: ['./list-unit-modal.component.scss']
})
export class ListUnitModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  units: Unit[];
  selectedUnit: Unit;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.loadUnitData();
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }

  onClickChoose() {
    this.passEvent.emit({ event: false });
  }

  onClickUnit(unit: Unit) {
    if (isNullOrUndefined(this.selectedUnit)) {
      this.selectedUnit = unit;
    } else {
      if (this.selectedUnit.unit_id !== unit.unit_id) {
        this.selectedUnit = unit;
      } else {
        this.selectedUnit = null;
      }
    }
  }

  openUnitModal() {
    const modalRef = this.modalService.open(UnitModalComponent, {
      centered: true
    });
    if (this.selectedUnit) {
      modalRef.componentInstance.unit = this.selectedUnit;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (this.selectedUnit) {
          this.updateUnit(this.selectedUnit, res.form);
        } else {
          this.createUnit(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa đơn vị';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa đơn vị đã chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeUnit(this.selectedUnit);
      }
      modalRef.close();
    });
  }

  private loadUnitData() {
    this.units = unitData;
  }

  private createUnit(data: any) {}

  private updateUnit(unitId: any, data: any) {}

  private removeUnit(unit: Unit) {}
}
