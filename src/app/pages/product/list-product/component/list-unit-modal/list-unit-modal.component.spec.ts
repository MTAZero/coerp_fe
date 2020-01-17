import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnitModalComponent } from './list-unit-modal.component';

describe('ListUnitModalComponent', () => {
  let component: ListUnitModalComponent;
  let fixture: ComponentFixture<ListUnitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUnitModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUnitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
