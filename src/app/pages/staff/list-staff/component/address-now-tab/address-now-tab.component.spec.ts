import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressNowTabComponent } from './address-now-tab.component';

describe('AddressNowTabComponent', () => {
  let component: AddressNowTabComponent;
  let fixture: ComponentFixture<AddressNowTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressNowTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressNowTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
