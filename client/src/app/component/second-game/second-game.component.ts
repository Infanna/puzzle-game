import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { delay, Observable } from 'rxjs';
@Component({
  selector: 'app-second-game',
  templateUrl: './second-game.component.html',
  styleUrl: './second-game.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondGameComponent implements OnInit {
  typeAnswer = 'INFP';
  answer = 9;
  grid: string[] = [
    'INTJ=5',
    'ENTP=1',
    'INFJ=-5',
    'ENFJ=0',
    'INFP=-1',
    'ISTJ=6',
    'ISFJ=16',
    'ESTJ=3',
    'ESFJ=-10',
  ];
  constructor(private http: HttpClient, private cf: ChangeDetectorRef) {}

  ngOnInit() {
    for (let i = 0; i < this.grid.length; i++) {
      const data = this.grid[i].split('=');
      this.getData(data[0], data[1] === '-1' ? '9' : data[1]).subscribe(
        (data: { id: number; typeInfo: string; number: number }) => {
          if (data.number === -1) {
            const index = this.grid.indexOf(this.typeAnswer + '=-1');
            this.grid[index] = `${this.typeAnswer}=${this.answer}`;
            this.cf.detectChanges();
          }
        }
      );
    }
    setTimeout(() => {
      const index = this.grid.indexOf(this.typeAnswer + '=-1');
      this.grid[index] = `${this.typeAnswer}=${this.answer}`;
      this.cf.detectChanges();
    }, 15 * 1000);
  }

  getData(
    typeInfo: string,
    input: string
  ): Observable<{ id: number; typeInfo: string; number: number }> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const inputNumber = Number(input);
    return this.http
      .post<{ id: number; typeInfo: string; number: number }>(url, {
        type: typeInfo,
        number: inputNumber,
        describe:
          typeInfo === this.typeAnswer
            ? `${this.typeAnswer} data is currently in high demand. Please wait a moment.`
            : 'Success',
      })
      .pipe(delay(inputNumber === -1 ? 15 * 1000 : 0));
  }
}
