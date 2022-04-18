import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerrFormComponent } from './employerr-form.component';

describe('EmployerrFormComponent', () => {
  let component: EmployerrFormComponent;
  let fixture: ComponentFixture<EmployerrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerrFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
