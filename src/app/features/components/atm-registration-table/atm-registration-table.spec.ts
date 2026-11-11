import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmRegistrationTable } from './atm-registration-table';

describe('AtmRegistrationTable', () => {
  let component: AtmRegistrationTable;
  let fixture: ComponentFixture<AtmRegistrationTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtmRegistrationTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmRegistrationTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
