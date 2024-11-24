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
  grid: string[] = [
    'INTJ=5',
    'ENTP=1',
    'INFJ=-5',
    'ENFJ=0',
    'ISTJ=6',
    'ISFJ=16',
    'INFP=-1',
    'ESTJ=3',
    'ESFJ=-10',
  ];
  constructor(private http: HttpClient, private cf: ChangeDetectorRef) {}

  ngOnInit() {
    this.getData().subscribe((data: { id: number; number: number }) => {
      const index = this.grid.indexOf(this.typeAnswer + '=-1');
      this.grid[index] = `${this.typeAnswer}=${data.number}`;
      this.cf.detectChanges();
    });
  }

  getData(): Observable<{ id: number; number: number }> {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http
      .post<{ id: number; number: number }>(url, {
        number: 9,
      })
      .pipe(delay(15 * 1000));
  }
}
