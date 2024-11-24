import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
@Component({
  selector: 'app-third-game',
  templateUrl: './third-game.component.html',
  styleUrl: './third-game.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdGameComponent implements OnInit {
  typeAnswer = 'III';
  answer = 'Loading';
  grid: string[] = [
    'iii=Loding',
    'iiI=Loding',
    'iIi=Loding',
    'iII=Loding',
    'Iii=Loding',
    'IiI=Loding',
    'IIi=Loding',
  ];
  constructor(private http: HttpClient, private cf: ChangeDetectorRef) {}

  async ngOnInit() {
    const callApiList = this.grid.map((item) =>
      firstValueFrom(this.getData(item))
    );
    callApiList.push(firstValueFrom(this.getData(this.typeAnswer)));
    await Promise.allSettled(callApiList);
    this.grid = this.grid.map((item) => {
      const type = item.split('=')[0];
      const randomValue =
        type === this.typeAnswer ? '0' : this.getRandomNumber().toString();

      return item.replace('Loding', randomValue);
    });
    this.answer = '0';

    this.cf.detectChanges();
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  getData(typeInfo: string): Observable<{ id: number; type: string }> {
    const type = typeInfo.split('=')[0];
    let url = 'https://jsonplaceholder.typicode.com/posts';
    if (type === this.typeAnswer) {
      url = 'https://jsonplacexholder.typicode.com/posts';
    }
    return this.http.post<{ id: number; type: string }>(url, {
      type: type,
    });
  }
}
