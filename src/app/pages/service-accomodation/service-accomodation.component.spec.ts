import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAccomodationComponent } from './service-accomodation.component';

describe('ServiceAccomodationComponent', () => {
  let component: ServiceAccomodationComponent;
  let fixture: ComponentFixture<ServiceAccomodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAccomodationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
