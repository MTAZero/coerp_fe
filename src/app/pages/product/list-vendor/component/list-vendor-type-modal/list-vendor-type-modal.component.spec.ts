import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVendorTypeModalComponent } from './list-vendor-type-modal.component';

describe('ListVendorTypeModalComponent', () => {
  let component: ListVendorTypeModalComponent;
  let fixture: ComponentFixture<ListVendorTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVendorTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVendorTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
