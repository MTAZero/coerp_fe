import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderServiceDetailComponent } from './order-service-detail.component';

describe('OrderServiceDetailComponent', () => {
  let component: OrderServiceDetailComponent;
  let fixture: ComponentFixture<OrderServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderServiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
