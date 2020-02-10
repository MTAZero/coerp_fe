import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSmsModalComponent } from './list-sms-modal.component';

describe('ListSmsModalComponent', () => {
  let component: ListSmsModalComponent;
  let fixture: ComponentFixture<ListSmsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSmsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSmsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
