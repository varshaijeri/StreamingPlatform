import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmCardsComponent } from './film-cards/film-cards.component';
import { SeriesCardComponent } from './series-cards/series-cards.component';
import { FilmContentComponent } from './film-content/film-content.component';
import { SeriesContentComponent } from './series-content/series-content.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'films', component:FilmCardsComponent},
  {path:'series', component:SeriesCardComponent},
  {path:'filmContent/:id', component:FilmContentComponent},
  {path:'seriesContent/:id', component:SeriesContentComponent},
  {path:'search/:find', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
