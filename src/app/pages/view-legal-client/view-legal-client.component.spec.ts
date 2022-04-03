import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLegalClientComponent } from './view-legal-client.component';

describe('ViewLegalClientComponent', () => {
  let component: ViewLegalClientComponent;
  let fixture: ComponentFixture<ViewLegalClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLegalClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLegalClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
