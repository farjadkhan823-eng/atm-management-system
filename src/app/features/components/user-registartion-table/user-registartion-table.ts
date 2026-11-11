import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-user-registartion-table',
  imports: [CommonModule],
  templateUrl: './user-registartion-table.html',
  styleUrl: './user-registartion-table.css',
})
export class UserRegistartionTable implements OnInit {

  private adminService = inject(AdminService);

  ngOnInit(): void {
  }

  admins = signal<any[]>(this.adminService.adminsData());


  deleteAdmin(id: string) {
    this.adminService.delete(id);
    this.admins.update((list) => list.filter((admin) => admin.id !== id));
  }


}
