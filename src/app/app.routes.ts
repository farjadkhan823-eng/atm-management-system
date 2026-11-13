import { Routes } from '@angular/router';
import { UserRegistartionForm } from './features/components/user-registartion-form/user-registartion-form';
import { UserRegistartionTable } from './features/components/user-registartion-table/user-registartion-table';
import { Dashboard } from './features/components/dashboard/dashboard';
import { AtmRegistrationForm } from './features/components/atm-registration-form/atm-registration-form';
import { AtmRegistrationTable } from './features/components/atm-registration-table/atm-registration-table';


export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    { path: 'userform', component: UserRegistartionForm },
    { path: 'userslist', component: UserRegistartionTable },
    { path: 'atmform', component: AtmRegistrationForm },
    { path: 'atmslist', component: AtmRegistrationTable }
];
