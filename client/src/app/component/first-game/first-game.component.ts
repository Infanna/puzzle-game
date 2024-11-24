import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-game',
  templateUrl: './first-game.component.html',
  styleUrl: './first-game.component.scss',
})
export class FirstGameComponent implements OnInit {
  grid: string[] = [];

  ngOnInit() {
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        this.grid.push(this.convertAsciiToLetter(i, j));
      }
    }
  }

  convertAsciiToLetter(row: number, column: number): string {
    const base = 'A'.charCodeAt(0);
    const rowLetterCode = String.fromCharCode(base + row);
    const columnLetterCode = String.fromCharCode(base + column);
    const letter = `${rowLetterCode}${columnLetterCode}`;
    if (letter === 'TV') {
      return `${letter}=81`;
    }

    return `${letter}=${this.getRandomNumber()}`;
  }

  getRandomNumber() {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 100);
    } while (randomNumber === 81);
    return randomNumber;
  }
}
