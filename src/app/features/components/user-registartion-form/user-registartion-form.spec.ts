import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistartionForm } from './user-registartion-form';

describe('UserRegistartionForm', () => {
  let component: UserRegistartionForm;
  let fixture: ComponentFixture<UserRegistartionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegistartionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistartionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
