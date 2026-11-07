import { Injectable, signal, computed } from '@angular/core';
import { ATM } from '../../shared/models/atm.model'

@Injectable({
  providedIn: 'root',
})
export class AtmService {


  // ATM Storage Key
  private atmStorageKey = 'my_atms_list';


  // all data signal
  atmData = signal<ATM[]>(this.loadFromStorage());

  searchQuery = signal<string>('');

  //filtered atm function
  filteredAtms = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const allAtms = this.atmData();

    if (!query) {
      return allAtms;
    }

    return allAtms.filter(atm =>
      atm.atmName.toLocaleLowerCase().includes(query) ||
      atm.area.toLocaleLowerCase().includes(query) ||
      atm.address.toLocaleLowerCase().includes(query) ||
      atm.code.toLocaleLowerCase().includes(query)
    )
  });

  constructor() { };

  // get data from storage
  private loadFromStorage(): ATM[] {
    const data = localStorage.getItem(this.atmStorageKey);
    return data ? JSON.parse(data) : [];
  }

  // push data in storage
  private saveToStorage(atms: ATM[]) {
    localStorage.setItem(this.atmStorageKey, JSON.stringify(atms));
  }

  // CRUD FUnction

  addAtm(newAtm: ATM) {
    // id generated
    const atmNextNumber = this.atmData().length + 1;
    const atmId = 'ATM-00' + atmNextNumber;
    newAtm.id = atmId;

    const currentList = this.atmData();
    const updatedList = [...currentList, newAtm];
    this.atmData.set(updatedList);
    this.saveToStorage(updatedList);
  }

  deleteAtm(id: string) {
    const currentList = this.atmData();
    const updatedList = currentList.filter(atm => atm.id !== id);
    this.atmData.set(updatedList);
    this.saveToStorage(updatedList);
  }

  setSearchQuery(query: string) {
    this.searchQuery.set(query);
  }

}
