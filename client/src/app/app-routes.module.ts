import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FirstGameComponent } from './component/first-game/first-game.component';
import { NgModule } from '@angular/core';
import { puzzleConstants } from './model/puzzle.constant';
import { SecondGameComponent } from './component/second-game/second-game.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: puzzleConstants.GAME_1, component: FirstGameComponent },
  { path: puzzleConstants.GAME_2, component: SecondGameComponent },
  { path: puzzleConstants.GAME_3, component: FirstGameComponent },
  { path: puzzleConstants.GAME_4, component: FirstGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}