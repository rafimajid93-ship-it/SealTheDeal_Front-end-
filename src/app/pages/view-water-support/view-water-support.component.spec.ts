import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWaterSupportComponent } from './view-water-support.component';

describe('ViewWaterSupportComponent', () => {
  let component: ViewWaterSupportComponent;
  let fixture: ComponentFixture<ViewWaterSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWaterSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWaterSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
