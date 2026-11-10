import { Component } from '@angular/core';
import { ThemeButton } from '../theme-button/theme-button';

@Component({
  selector: 'app-header',
  imports: [ThemeButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
