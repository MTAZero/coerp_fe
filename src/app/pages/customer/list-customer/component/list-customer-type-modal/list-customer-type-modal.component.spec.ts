import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerTypeModalComponent } from './list-customer-type-modal.component';

describe('ListCustomerTypeModalComponent', () => {
  let component: ListCustomerTypeModalComponent;
  let fixture: ComponentFixture<ListCustomerTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCustomerTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
