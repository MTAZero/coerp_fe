import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseHistoryTabComponent } from './purchase-history-tab.component';

describe('PurchaseHistoryTabComponent', () => {
  let component: PurchaseHistoryTabComponent;
  let fixture: ComponentFixture<PurchaseHistoryTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseHistoryTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseHistoryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
