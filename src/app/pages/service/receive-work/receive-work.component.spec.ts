import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveWorkComponent } from './receive-work.component';

describe('ReceiveWorkComponent', () => {
  let component: ReceiveWorkComponent;
  let fixture: ComponentFixture<ReceiveWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
