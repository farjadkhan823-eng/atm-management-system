import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserRegistartionForm } from './features/components/user-registartion-form/user-registartion-form';
import { ThemeButton } from './shared/components/theme-button/theme-button';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { Header } from './shared/components/header/header';
import { UserRegistartionTable } from './features/components/user-registartion-table/user-registartion-table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserRegistartionForm, ThemeButton, Sidebar, Header, UserRegistartionTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atm-management-system');
}
