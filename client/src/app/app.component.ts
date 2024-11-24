import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { puzzleConstants } from './model/puzzle.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'client';
  activePage = '';
  firstGamePage = puzzleConstants.GAME_1;
  secondGamePage = puzzleConstants.GAME_2;
  thirdGamePage = puzzleConstants.GAME_3;
  pages = ['', this.firstGamePage, this.secondGamePage, this.thirdGamePage];

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.activePage = sessionStorage.getItem('activePage') || '';
    this.navigatePage(this.activePage);
  }

  navigatePage(page: string) {
    this.activePage = page;
    sessionStorage.setItem('activePage', page);
    this.router.navigate([page]);
  }

  displayGameTitle(page: string) {
    if (page === '') {
      return 'Home';
    }
    if (page === this.firstGamePage) {
      return 'Find me';
    }
    if (page === this.secondGamePage) {
      return 'Can you see me?';
    }
    if (page === this.thirdGamePage) {
      return 'Where am i?';
    }
    return 'Game';
  }
}
