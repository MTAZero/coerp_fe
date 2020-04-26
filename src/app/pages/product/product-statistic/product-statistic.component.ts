import { Component, OnInit, ElementRef } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { ProductService } from '../../../core/services/api/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-product-statistic',
  templateUrl: './product-statistic.component.html',
  styleUrls: ['./product-statistic.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class ProductStatisticComponent implements OnInit {
  height: number = 300;
  containerHeight = 0;
  private destroyed$ = new Subject();
  breadCrumbItems: Array<{}>;

  submitted: boolean;
  categories: any;

  textSearch = '';
  categorySearch = '';
  page = 0;
  pageSize = 10;
  totalSize = 0;

  selectedProduct = null;
  products: any;
  constructor(public element: ElementRef, private productService: ProductService) {
    this.element.nativeElement;
  }

  ngOnInit() {
    var el = this.element.nativeElement;
    this.containerHeight = el.children[0].clientHeight;

    this._fetchData();
    this._fetchFilter();
  }

  onResizeEnd(event: ResizeEvent) {
    if (event) {
      if (event.rectangle.height != null && event.rectangle.height < 500) {
        this.height = event.rectangle.height;
      }
    }
  }

  onResize() {
    var el = this.element.nativeElement;
    this.containerHeight = el.children[0].clientHeight;
  }

  scroll(el: HTMLElement) {
    window.scroll({ top: el.getBoundingClientRect().top - 100, behavior: 'smooth' });
  }

  onClickTest() {
    if (this.height <= 10) this.height = 300;
    else this.height = 10;
  }

  onPageChange(page: number): void {
    this.page = page - 1;
    this._fetchData();
  }

  onChangeFilter() {
    this.page--;
    this._fetchData();
  }

  private _fetchData() {
    const product$ = this.productService
      .searchProduct({
        pageNumber: this.page,
        pageSize: this.pageSize,
        search_name: this.textSearch,
        category_id: this.categorySearch,
        start_date: '2010-01-01',
        end_date: moment(new Date()).format('YYYY-MM-DD'),
      })
      .pipe(takeUntil(this.destroyed$));
    product$.subscribe((res: any) => {
      if (res) {
        this.totalSize = res.Data.TotalNumberOfRecords;
        this.products = res.Data.Results;
        this.selectedProduct = this.products[0];
      }
    });
  }

  private _fetchFilter() {
    const category$ = this.productService.loadCategory().pipe(takeUntil(this.destroyed$));

    category$.subscribe((res: any) => {
      this.categories = res.Data;
    });
  }
}
