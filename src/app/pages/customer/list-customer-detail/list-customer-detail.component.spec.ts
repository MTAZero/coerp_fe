import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerDetailComponent } from './list-customer-detail.component';

describe('ListCustomerDetailComponent', () => {
  let component: ListCustomerDetailComponent;
  let fixture: ComponentFixture<ListCustomerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCustomerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
