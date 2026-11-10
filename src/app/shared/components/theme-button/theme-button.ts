import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-button',
  imports: [CommonModule],
  templateUrl: './theme-button.html',
  styleUrl: './theme-button.css',
})
export class ThemeButton implements OnInit {

  private renderer = inject(Renderer2);
  currentTheme: 'light' | 'dark' = 'light';

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('atm_theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.currentTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');
    this.applyTheme(this.currentTheme);
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.currentTheme);
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    this.renderer.setAttribute(document.documentElement, 'data-theme', theme);
    localStorage.setItem('atm_theme', theme);
  }
}
