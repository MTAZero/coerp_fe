import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakenLocationTabComponent } from './undertaken-location-tab.component';

describe('UndertakenLocationTabComponent', () => {
  let component: UndertakenLocationTabComponent;
  let fixture: ComponentFixture<UndertakenLocationTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndertakenLocationTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndertakenLocationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
