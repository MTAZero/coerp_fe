import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransactionServiceComponent } from './list-transaction-service.component';

describe('ListTransactionServiceComponent', () => {
  let component: ListTransactionServiceComponent;
  let fixture: ComponentFixture<ListTransactionServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTransactionServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransactionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
