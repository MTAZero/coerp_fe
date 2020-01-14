import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPositionModalComponent } from './list-position-modal.component';

describe('ListPositionModalComponent', () => {
  let component: ListPositionModalComponent;
  let fixture: ComponentFixture<ListPositionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPositionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPositionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
