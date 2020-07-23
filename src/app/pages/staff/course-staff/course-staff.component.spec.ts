import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStaffComponent } from './course-staff.component';

describe('CourseStaffComponent', () => {
  let component: CourseStaffComponent;
  let fixture: ComponentFixture<CourseStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
