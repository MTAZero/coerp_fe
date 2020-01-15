import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareHistoryTabComponent } from './care-history-tab.component';

describe('CareHistoryTabComponent', () => {
  let component: CareHistoryTabComponent;
  let fixture: ComponentFixture<CareHistoryTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareHistoryTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareHistoryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
