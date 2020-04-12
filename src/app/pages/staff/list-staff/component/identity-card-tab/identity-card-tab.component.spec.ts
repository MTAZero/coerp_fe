import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityCardTabComponent } from './identity-card-tab.component';

describe('IdentityCardTabComponent', () => {
  let component: IdentityCardTabComponent;
  let fixture: ComponentFixture<IdentityCardTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityCardTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityCardTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
