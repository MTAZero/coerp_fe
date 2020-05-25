import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeModalComponent } from './relative-modal.component';

describe('RelativeModalComponent', () => {
  let component: RelativeModalComponent;
  let fixture: ComponentFixture<RelativeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
