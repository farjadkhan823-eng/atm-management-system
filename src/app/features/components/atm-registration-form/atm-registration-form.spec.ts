import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmRegistrationForm } from './atm-registration-form';

describe('AtmRegistrationForm', () => {
  let component: AtmRegistrationForm;
  let fixture: ComponentFixture<AtmRegistrationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtmRegistrationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmRegistrationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
