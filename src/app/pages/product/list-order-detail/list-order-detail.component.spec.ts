import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderDetailComponent } from './list-order-detail.component';

describe('ListOrderDetailComponent', () => {
  let component: ListOrderDetailComponent;
  let fixture: ComponentFixture<ListOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
