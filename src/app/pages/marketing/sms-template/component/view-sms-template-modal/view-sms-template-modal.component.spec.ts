import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSmsTemplateModalComponent } from './view-sms-template-modal.component';

describe('ViewSmsTemplateModalComponent', () => {
  let component: ViewSmsTemplateModalComponent;
  let fixture: ComponentFixture<ViewSmsTemplateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSmsTemplateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSmsTemplateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
