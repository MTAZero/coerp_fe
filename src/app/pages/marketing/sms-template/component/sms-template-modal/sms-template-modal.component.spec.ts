import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTemplateModalComponent } from './sms-template-modal.component';

describe('SmsTemplateModalComponent', () => {
  let component: SmsTemplateModalComponent;
  let fixture: ComponentFixture<SmsTemplateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsTemplateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
