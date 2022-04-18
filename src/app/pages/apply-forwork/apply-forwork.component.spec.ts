import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForworkComponent } from './apply-forwork.component';

describe('ApplyForworkComponent', () => {
  let component: ApplyForworkComponent;
  let fixture: ComponentFixture<ApplyForworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyForworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
