import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompanyDetailComponent } from './list-company-detail.component';

describe('ListCompanyDetailComponent', () => {
  let component: ListCompanyDetailComponent;
  let fixture: ComponentFixture<ListCompanyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCompanyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompanyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
