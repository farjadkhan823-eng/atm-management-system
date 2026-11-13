import { Component, inject, signal, Signal } from '@angular/core';
import { AtmService } from '../../../core/services/atm.service';
import { ATM, ATM_STATUS_OPTIONS } from '../../../shared/models/atm.model';


@Component({
  selector: 'app-atm-registration-table',
  imports: [],
  templateUrl: './atm-registration-table.html',
  styleUrl: './atm-registration-table.css',
})
export class AtmRegistrationTable {

  private atmService = inject(AtmService);

  atms = signal<any[]>(this.atmService.atmData());

  deleteAtm(id: string) {
    this.atmService.deleteAtm(id);
    this.atms.update((list) => list.filter((atm) => atm.id !== id));
  }
}
