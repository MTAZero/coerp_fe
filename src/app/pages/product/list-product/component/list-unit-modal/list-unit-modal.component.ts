import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UnitModalComponent } from '../unit-modal/unit-modal.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-unit-modal',
  templateUrl: './list-unit-modal.component.html',
  styleUrls: ['./list-unit-modal.component.scss']
})
export class ListUnitModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  units: any[];
  selectedUnit: any;
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

  onClickUnit(unit: any) {
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

  openConfirmModal() {}

  private loadUnitData() {
    this.units = [];
  }

  private createUnit(data: any) {}

  private updateUnit(unitId: any, data: any) {}

  private removeUnit(unit: any) {}
}
