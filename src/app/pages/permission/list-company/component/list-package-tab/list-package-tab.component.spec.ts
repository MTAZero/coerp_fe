import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPackageTabComponent } from './list-package-tab.component';

describe('ListPackageTabComponent', () => {
  let component: ListPackageTabComponent;
  let fixture: ComponentFixture<ListPackageTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPackageTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPackageTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
