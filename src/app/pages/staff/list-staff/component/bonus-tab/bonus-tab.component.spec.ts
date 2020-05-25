import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusTabComponent } from './bonus-tab.component';

describe('BonusTabComponent', () => {
  let component: BonusTabComponent;
  let fixture: ComponentFixture<BonusTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
