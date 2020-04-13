import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrainingModalComponent } from './list-training-modal.component';

describe('ListTrainingModalComponent', () => {
  let component: ListTrainingModalComponent;
  let fixture: ComponentFixture<ListTrainingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTrainingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrainingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
