import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeviceDetailComponent } from './list-device-detail.component';

describe('ListDeviceDetailComponent', () => {
  let component: ListDeviceDetailComponent;
  let fixture: ComponentFixture<ListDeviceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDeviceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeviceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
