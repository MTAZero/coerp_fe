import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHistoryTabComponent } from './service-history-tab.component';

describe('ServiceHistoryTabComponent', () => {
  let component: ServiceHistoryTabComponent;
  let fixture: ComponentFixture<ServiceHistoryTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHistoryTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHistoryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
