import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderServiceMainComponent } from './order-service-main.component';

describe('OrderServiceMainComponent', () => {
  let component: OrderServiceMainComponent;
  let fixture: ComponentFixture<OrderServiceMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderServiceMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderServiceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
