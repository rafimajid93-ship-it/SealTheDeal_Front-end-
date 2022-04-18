import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHouseAssitantComponent } from './service-house-assitant.component';

describe('ServiceHouseAssitantComponent', () => {
  let component: ServiceHouseAssitantComponent;
  let fixture: ComponentFixture<ServiceHouseAssitantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceHouseAssitantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHouseAssitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
