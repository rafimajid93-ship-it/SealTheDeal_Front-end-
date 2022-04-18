import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseAssistantComponent } from './house-assistant.component';

describe('HouseAssistantComponent', () => {
  let component: HouseAssistantComponent;
  let fixture: ComponentFixture<HouseAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
