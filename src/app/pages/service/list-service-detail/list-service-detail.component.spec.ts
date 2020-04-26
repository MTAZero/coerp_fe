import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceDetailComponent } from './list-service-detail.component';

describe('ListServiceDetailComponent', () => {
  let component: ListServiceDetailComponent;
  let fixture: ComponentFixture<ListServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
