import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCareModalComponent } from './customer-care-modal.component';

describe('CustomerCareModalComponent', () => {
  let component: CustomerCareModalComponent;
  let fixture: ComponentFixture<CustomerCareModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCareModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
