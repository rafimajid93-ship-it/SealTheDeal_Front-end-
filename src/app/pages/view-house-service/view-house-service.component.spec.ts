import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHouseServiceComponent } from './view-house-service.component';

describe('ViewHouseServiceComponent', () => {
  let component: ViewHouseServiceComponent;
  let fixture: ComponentFixture<ViewHouseServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHouseServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHouseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
