import { Injectable, signal, computed } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private userStorageKey = 'area_admins_list';

  adminsData = signal<User[]>(this.loadFromStorage());

  constructor() { };

  private loadFromStorage(): User[] {
    const data = localStorage.getItem(this.userStorageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage(user: User[]) {
    localStorage.setItem(this.userStorageKey, JSON.stringify(user))
  }

  getAllAdmins(): User[] {
    return this.adminsData();
  }

  addAdmin(newUser: User) {
    // id Generated
    const userNextNumber = this.adminsData().length + 1;
    const userId = "U-" + new Date().getFullYear() + userNextNumber
    console.log(userId)
    newUser.id = userId;


    const currentList = this.adminsData();
    const updated = [...currentList, newUser];
    this.adminsData.set(updated);
    this.saveToStorage(updated);
  }

  updateAdminAccess(adminId: string, newAtmIds: string[]) {
    const currentAdmins = this.adminsData();

    const updated = currentAdmins.map(admin => {
      if (admin.id === adminId) {
        return { ...admin, assignedAtmIds: newAtmIds };
      }
      return admin;
    });

    this.adminsData.set(updated);
    this.saveToStorage(updated);
  }

  delete(id: string) {
    const currentList = this.adminsData();
    const updated = currentList.filter(admin => admin.id !== id);
    this.adminsData.set(updated);
    this.saveToStorage(updated);
  }


}
