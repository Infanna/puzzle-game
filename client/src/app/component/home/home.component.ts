import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'puzzle game';

  constructor(private readonly router: Router) {}

  navigatePage(page: string) {
    this.router.navigate([page]);
  }
}
