import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderServiceCalendarComponent } from './order-service-calendar.component';

describe('OrderServiceComponent', () => {
  let component: OrderServiceCalendarComponent;
  let fixture: ComponentFixture<OrderServiceCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderServiceCalendarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderServiceCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
