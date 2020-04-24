import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutorModalComponent } from './executor-modal.component';

describe('ExecutorModalComponent', () => {
  let component: ExecutorModalComponent;
  let fixture: ComponentFixture<ExecutorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
