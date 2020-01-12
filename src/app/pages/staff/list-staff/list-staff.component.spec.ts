import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStaffComponent } from './list-staff.component';

describe('ContactsComponent', () => {
  let component: ListStaffComponent;
  let fixture: ComponentFixture<ListStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListStaffComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
