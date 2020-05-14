import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPackageDetailComponent } from './list-package-detail.component';

describe('ListPackageDetailComponent', () => {
  let component: ListPackageDetailComponent;
  let fixture: ComponentFixture<ListPackageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPackageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPackageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
