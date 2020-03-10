import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStatisticComponent } from './product-statistic.component';

describe('ProductStatisticComponent', () => {
  let component: ProductStatisticComponent;
  let fixture: ComponentFixture<ProductStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
