import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderServiceDetailComponent } from './list-order-service-detail.component';

describe('ListOrderServiceDetailComponent', () => {
  let component: ListOrderServiceDetailComponent;
  let fixture: ComponentFixture<ListOrderServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrderServiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
