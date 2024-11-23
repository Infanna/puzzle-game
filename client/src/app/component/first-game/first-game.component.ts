import { Component } from '@angular/core';

@Component({
  selector: 'app-first-game',
  templateUrl: './first-game.component.html',
  styleUrl: './first-game.component.scss'
})
export class FirstGameComponent {
  playerName: string = '';
  score: number | null = null;
  scores: { playerName: string; score: number }[] = [];

  saveScore() {
      if (this.playerName && this.score !== null) {
          this.scores.push({ playerName: this.playerName, score: this.score });
          this.playerName = '';
          this.score = null;
      }
  }
}
