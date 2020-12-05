import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-cards',
  templateUrl: './film-cards.component.html',
  styleUrls: ['./film-cards.component.css']
})
export class FilmCardsComponent implements OnInit {

  constructor(private filmService : FilmService) { }
  films;
  results;
  ngOnInit() {
    this.films = this.filmService.getFilm()
    .subscribe(data =>{
      this.films=data['results'];
      console.log(data['results']);
    })
  }

}
