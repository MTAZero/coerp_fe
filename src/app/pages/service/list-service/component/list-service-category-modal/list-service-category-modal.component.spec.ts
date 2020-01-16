import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceCategoryModalComponent } from './list-service-category-modal.component';

describe('ListServiceCategoryModalComponent', () => {
  let component: ListServiceCategoryModalComponent;
  let fixture: ComponentFixture<ListServiceCategoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceCategoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
