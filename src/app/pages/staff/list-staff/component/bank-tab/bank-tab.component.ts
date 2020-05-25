import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BankModalComponent } from '../bank-modal/bank-modal.component';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bank-tab',
  templateUrl: './bank-tab.component.html',
  styleUrls: ['./bank-tab.component.scss'],
})
export class BankTabComponent implements OnInit {
  @Input() listBank: any[];
  @Input() staffId: any;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  selectedBank = null;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  ngOnChanges() {
    if (!this.staffId) this.selectedBank = null;
    if (this.selectedBank)
      this.selectedBank = this.listBank.filter(
        (item) => item.stb_id === this.selectedBank.stb_id
      )[0];
  }

  onClickBank(bank: any) {
    if (isNullOrUndefined(this.selectedBank)) {
      this.selectedBank = bank;
    } else {
      if (this.selectedBank.stb_id !== bank.stb_id) {
        this.selectedBank = bank;
      } else {
        this.selectedBank = null;
      }
    }
  }

  openBankModal(bank?: any) {
    const modalRef = this.modalService.open(BankModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.staffId = this.staffId;
    if (bank) {
      modalRef.componentInstance.bank = bank;
    }
    modalRef.componentInstance.passEvent.subscribe((res) => {
      if (res.event) {
        if (bank) {
          this._updateBank(res.data);
        } else {
          this._createBank(res.data);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal(bank?: any) {
    Swal.fire({
      title: 'Chắc chắn muốn xóa khóa tài khoản ngân hàng đang chọn?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this._removeBank(bank);
      }
    });
  }

  private _createBank(data: any) {
    const updatedList = this.listBank.concat(data);
    this.formSubmit.emit(updatedList);
  }

  private _updateBank(updated: any) {
    const updatedList = this.listBank.map((item) => {
      if (item.stb_id !== updated.stb_id) return item;
      return updated;
    });
    this.formSubmit.emit(updatedList);
  }

  private _removeBank(bank: any) {
    const updatedList = this.listBank.filter((item) => item.stb_id !== bank.stb_id);
    this.formSubmit.emit(updatedList);
  }
}
