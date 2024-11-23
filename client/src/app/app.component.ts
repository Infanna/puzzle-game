import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { puzzleConstants } from './model/puzzle.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
  activePage = '';
  firstGamePage = puzzleConstants.GAME_1;
  secondGamePage = puzzleConstants.GAME_2;
  thirdGamePage = puzzleConstants.GAME_3;
  fourthGamePage = puzzleConstants.GAME_4;

  constructor(private readonly router: Router) {}

  navigatePage(page: string) {
    this.activePage = page;
    this.router.navigate([page]);
  }
}
