import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHouseAssistantComponent } from './view-house-assistant.component';

describe('ViewHouseAssistantComponent', () => {
  let component: ViewHouseAssistantComponent;
  let fixture: ComponentFixture<ViewHouseAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHouseAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHouseAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
