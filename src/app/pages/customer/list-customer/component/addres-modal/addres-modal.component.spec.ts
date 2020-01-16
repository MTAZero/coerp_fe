import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresModalComponent } from './addres-modal.component';

describe('AddresModalComponent', () => {
  let component: AddresModalComponent;
  let fixture: ComponentFixture<AddresModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
