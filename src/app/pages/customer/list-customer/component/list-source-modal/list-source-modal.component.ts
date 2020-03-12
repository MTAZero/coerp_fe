import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SourceModalComponent } from '../source-modal/source-modal.component';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-source-modal',
  templateUrl: './list-source-modal.component.html',
  styleUrls: ['./list-source-modal.component.scss']
})
export class ListSourceModalComponent implements OnInit {
  @Output() passEvent: EventEmitter<any> = new EventEmitter();
  sources: any[];
  selectedSource: any;
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

  onClickSource(source: any) {
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

  private loadSourceData() {
    this.sources = [];
  }

  private createSource(data: any) {}

  private updateSource(sourceId: any, data: any) {}

  private removeSource(source: any) {}
}
