import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmailModalComponent } from './list-email-modal.component';

describe('ListEmailModalComponent', () => {
  let component: ListEmailModalComponent;
  let fixture: ComponentFixture<ListEmailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
