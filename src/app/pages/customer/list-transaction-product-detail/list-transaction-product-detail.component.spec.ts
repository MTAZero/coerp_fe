import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransactionProductDetailComponent } from './list-transaction-product-detail.component';

describe('ListTransactionProductDetailComponent', () => {
  let component: ListTransactionProductDetailComponent;
  let fixture: ComponentFixture<ListTransactionProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTransactionProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransactionProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
