import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTypeModalComponent } from './vendor-type-modal.component';

describe('VendorTypeModalComponent', () => {
  let component: VendorTypeModalComponent;
  let fixture: ComponentFixture<VendorTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
