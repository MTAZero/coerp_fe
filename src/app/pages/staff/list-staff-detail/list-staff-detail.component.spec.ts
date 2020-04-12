import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStaffDetailComponent } from './list-staff-detail.component';

describe('ListStaffDetailComponent', () => {
  let component: ListStaffDetailComponent;
  let fixture: ComponentFixture<ListStaffDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStaffDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStaffDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
