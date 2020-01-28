import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderServiceModalComponent } from './order-service-modal.component';

describe('OrderServiceModalComponent', () => {
  let component: OrderServiceModalComponent;
  let fixture: ComponentFixture<OrderServiceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderServiceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderServiceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
