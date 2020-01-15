import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGroupModalComponent } from './customer-group-modal.component';

describe('CustomerGroupModalComponent', () => {
  let component: CustomerGroupModalComponent;
  let fixture: ComponentFixture<CustomerGroupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerGroupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGroupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
