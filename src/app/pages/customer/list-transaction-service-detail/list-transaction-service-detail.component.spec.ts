import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransactionServiceDetailComponent } from './list-transaction-service-detail.component';

describe('ListTransactionServiceDetailComponent', () => {
  let component: ListTransactionServiceDetailComponent;
  let fixture: ComponentFixture<ListTransactionServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTransactionServiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransactionServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
