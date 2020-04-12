import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPermanentTabComponent } from './address-permanent-tab.component';

describe('AddressPermanentTabComponent', () => {
  let component: AddressPermanentTabComponent;
  let fixture: ComponentFixture<AddressPermanentTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressPermanentTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressPermanentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
