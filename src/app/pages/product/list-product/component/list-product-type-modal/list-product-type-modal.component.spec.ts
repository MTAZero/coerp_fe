import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductTypeModalComponent } from './list-product-type-modal.component';

describe('ListProductTypeModalComponent', () => {
  let component: ListProductTypeModalComponent;
  let fixture: ComponentFixture<ListProductTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
