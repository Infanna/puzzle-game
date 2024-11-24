import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { FirstGameComponent } from './component/first-game/first-game.component';
import { AppRoutingModule } from './app-routes.module';
import { SecondGameComponent } from './component/second-game/second-game.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FirstGameComponent, SecondGameComponent],
  imports: [CommonModule, BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
