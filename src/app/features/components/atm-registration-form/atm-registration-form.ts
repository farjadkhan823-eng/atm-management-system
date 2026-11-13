import { Component, inject } from '@angular/core';
import { ATM, AtmStatus } from '../../../shared/models/atm.model';
import { AtmService } from '../../../core/services/atm.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-atm-registration-form',
  imports: [ReactiveFormsModule],
  templateUrl: './atm-registration-form.html',
  styleUrl: './atm-registration-form.css',
})
export class AtmRegistrationForm {

  private fb = inject(FormBuilder);
  private atmService = inject(AtmService);

  atmForm = this.fb.group({
    atmName: ['', [Validators.required]],
    code: ['', [Validators.required]],
    area: ['', [Validators.required]],
    address: ['', [Validators.required]],
    status: ['ACTIVE' as AtmStatus, [Validators.required]]
  });

  onSubmit() {
    if (this.atmForm.invalid) {
      this.atmForm.markAllAsTouched();
      return;
    }

    const value = this.atmForm.getRawValue();

    const addNewAtm: ATM = {
      id: '',
      atmName: value.atmName!,
      code: value.code!,
      area: value.area!,
      address: value.address!,
      status: value.status!
    }

    this.atmService.addAtm(addNewAtm);
    this.atmForm.reset({ status: 'ACTIVE' });

  }
}
