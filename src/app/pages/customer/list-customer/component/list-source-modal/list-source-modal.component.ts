import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { sourceData } from '../../data';
import { Source } from '../../list-customer.model';
import { SourceModalComponent } from '../source-modal/source-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-list-source-modal',
  templateUrl: './list-source-modal.component.html',
  styleUrls: ['./list-source-modal.component.scss']
})
export class ListSourceModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  sources: Source[];
  selectedSource: Source;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.loadSourceData();
  }

  onClickCancel() {
    this.passEvent.emit({ event: false });
  }

  onClickChoose() {
    this.passEvent.emit({ event: false });
  }

  onClickSource(source: Source) {
    if (isNullOrUndefined(this.selectedSource)) {
      this.selectedSource = source;
    } else {
      if (this.selectedSource.source_id !== source.source_id) {
        this.selectedSource = source;
      } else {
        this.selectedSource = null;
      }
    }
  }

  openSourceModal() {
    const modalRef = this.modalService.open(SourceModalComponent, {
      centered: true
    });
    if (this.selectedSource) {
      modalRef.componentInstance.source = this.selectedSource;
    }
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res.event) {
        if (this.selectedSource) {
          this.updateSource(this.selectedSource, res.form);
        } else {
          this.createSource(res.form);
        }
      }
      modalRef.close();
    });
  }

  openConfirmModal() {
    const modalRef = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    modalRef.componentInstance.title = 'Xác nhận xóa nguồn';
    modalRef.componentInstance.message =
      'Bạn có chắc chắn muốn xóa nguồn đã chọn không?';
    modalRef.componentInstance.passEvent.subscribe(res => {
      if (res) {
        this.removeSource(this.selectedSource);
      }
      modalRef.close();
    });
  }

  private loadSourceData() {
    this.sources = sourceData;
  }

  private createSource(data: any) {}

  private updateSource(sourceId: any, data: any) {}

  private removeSource(source: Source) {}
}
