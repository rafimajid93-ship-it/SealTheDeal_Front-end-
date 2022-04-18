import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAccomodation2Component } from './service-accomodation2.component';

describe('ServiceAccomodation2Component', () => {
  let component: ServiceAccomodation2Component;
  let fixture: ComponentFixture<ServiceAccomodation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAccomodation2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAccomodation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
