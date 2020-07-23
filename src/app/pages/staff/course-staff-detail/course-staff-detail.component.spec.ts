import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStaffDetailComponent } from './course-staff-detail.component';

describe('CourseStaffDetailComponent', () => {
  let component: CourseStaffDetailComponent;
  let fixture: ComponentFixture<CourseStaffDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseStaffDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStaffDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
