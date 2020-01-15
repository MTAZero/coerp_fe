import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTypeModalComponent } from './customer-type-modal.component';

describe('CustomerTypeModalComponent', () => {
  let component: CustomerTypeModalComponent;
  let fixture: ComponentFixture<CustomerTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
