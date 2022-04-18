import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWaterComponent } from './service-water.component';

describe('ServiceWaterComponent', () => {
  let component: ServiceWaterComponent;
  let fixture: ComponentFixture<ServiceWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceWaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
