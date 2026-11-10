import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistartionTable } from './user-registartion-table';

describe('UserRegistartionTable', () => {
  let component: UserRegistartionTable;
  let fixture: ComponentFixture<UserRegistartionTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegistartionTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistartionTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
