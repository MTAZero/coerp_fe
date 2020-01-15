import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSourceModalComponent } from './list-source-modal.component';

describe('ListSourceModalComponent', () => {
  let component: ListSourceModalComponent;
  let fixture: ComponentFixture<ListSourceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSourceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSourceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
