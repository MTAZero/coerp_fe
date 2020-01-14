import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepartmentModalComponent } from './list-department-modal.component';

describe('ListDepartmentModalComponent', () => {
  let component: ListDepartmentModalComponent;
  let fixture: ComponentFixture<ListDepartmentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDepartmentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepartmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
