import { Component, inject } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { AdminService } from '../../../core/services/admin.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registartion-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-registartion-form.html',
  styleUrl: './user-registartion-form.css',
})
export class UserRegistartionForm {

  private fb = inject(FormBuilder);
  private adminService = inject(AdminService);

  userForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    role: ['AREA_ADMIN' as const, [Validators.required]],
    assignAtmIds: [[] as string[]]
  });

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const value = this.userForm.getRawValue();

    const newUser: User = {
      id: '',
      name: value.name!,
      email: value.email!,
      role: value.role!,
      assignedAtmIds: [],
    }

    this.adminService.addAdmin(newUser);
    this.userForm.reset({ role: 'AREA_ADMIN' });

  }

}
