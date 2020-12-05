import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FilmCardsComponent } from './film-cards/film-cards.component';
import { SeriesCardComponent } from './series-cards/series-cards.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FilmContentComponent } from './film-content/film-content.component';
import { SeriesContentComponent } from './series-content/series-content.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FilmCardsComponent,
    SeriesCardComponent,
    HomeComponent,
    SearchComponent,
    FilmContentComponent,
    SeriesContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
