import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeTabComponent } from './relative-tab.component';

describe('RelativeTabComponent', () => {
  let component: RelativeTabComponent;
  let fixture: ComponentFixture<RelativeTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
