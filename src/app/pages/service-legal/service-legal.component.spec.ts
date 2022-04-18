import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLegalComponent } from './service-legal.component';

describe('ServiceLegalComponent', () => {
  let component: ServiceLegalComponent;
  let fixture: ComponentFixture<ServiceLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceLegalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
