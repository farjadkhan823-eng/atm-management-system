import { Component, inject, OnInit, signal } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { ATM } from '../../../shared/models/atm.model';
import { AdminService } from '../../../core/services/admin.service';
import { AtmService } from '../../../core/services/atm.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registartion-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-registartion-form.html',
  styleUrl: './user-registartion-form.css',
})
export class UserRegistartionForm implements OnInit {

  private fb = inject(FormBuilder);
  private adminService = inject(AdminService);
  private atmService = inject(AtmService);

  availableAtms = signal<ATM[]>([]);

  ngOnInit(): void {
    this.availableAtms.set(this.atmService.atmData());
  }

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
      assignedAtmIds: value.assignAtmIds!,
    }

    this.adminService.addAdmin(newUser);
    this.userForm.reset({ role: 'AREA_ADMIN' });

  }

}
