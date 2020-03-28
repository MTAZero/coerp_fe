import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderServiceComponent } from './list-order-service.component';

describe('ListOrderServiceComponent', () => {
  let component: ListOrderServiceComponent;
  let fixture: ComponentFixture<ListOrderServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrderServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
