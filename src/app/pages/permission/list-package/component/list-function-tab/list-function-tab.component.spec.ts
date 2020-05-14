import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFunctionTabComponent } from './list-function-tab.component';

describe('ListFunctionTabComponent', () => {
  let component: ListFunctionTabComponent;
  let fixture: ComponentFixture<ListFunctionTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFunctionTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFunctionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
