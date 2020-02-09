import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CardData, TableData } from './ticket.model';

import { cardData, tableData } from './data';

import { TicketService } from './ticket.service';

import {
  TicketSortableDirective,
  SortEvent
} from './ticket-sortable.directive';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  providers: [TicketService, DecimalPipe]
})

/**
 * Tickets component - handling the tickets with sidebar and content
 */
export class TicketComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Card Data
  cardData: CardData[];

  // Table data
  tableData: TableData[];

  tickets$: Observable<TableData[]>;
  total$: Observable<number>;

  @ViewChildren(TicketSortableDirective) headers: QueryList<
    TicketSortableDirective
  >;

  constructor(public service: TicketService, private modalService: NgbModal) {
    this.tickets$ = service.tickets$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'ERP', path: '/' },
      { label: 'Hỗ trợ', path: '/' },
      { label: 'Tickets', path: '/', active: true }
    ];

    /**
     * Fetches Data
     */
    this._fetchData();
  }

  /**
   * Sort table data
   * @param param0 fetch the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  /**
   * Modal Open
   * @param content modal content
   */
  openModal(content: string) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  private _fetchData() {
    // Tickets Card Data
    this.cardData = cardData;
    // Tickets Table Data
    this.tableData = tableData;
  }
}
