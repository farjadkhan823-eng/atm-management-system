import { Routes } from '@angular/router';
import { UserRegistartionForm } from './features/components/user-registartion-form/user-registartion-form';
import { UserRegistartionTable } from './features/components/user-registartion-table/user-registartion-table';


export const routes: Routes = [
    { path: 'userform', component: UserRegistartionForm },
    { path: 'userlist', component: UserRegistartionTable }
];
