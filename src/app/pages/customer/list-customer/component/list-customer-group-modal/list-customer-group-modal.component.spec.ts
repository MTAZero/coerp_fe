import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerGroupModalComponent } from './list-customer-group-modal.component';

describe('ListCustomerGroupModalComponent', () => {
  let component: ListCustomerGroupModalComponent;
  let fixture: ComponentFixture<ListCustomerGroupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCustomerGroupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerGroupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
