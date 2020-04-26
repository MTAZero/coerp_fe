import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransactionProductComponent } from './list-transaction-product.component';

describe('ListTransactionProductComponent', () => {
  let component: ListTransactionProductComponent;
  let fixture: ComponentFixture<ListTransactionProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTransactionProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransactionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
