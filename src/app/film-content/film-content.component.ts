import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-film',
  templateUrl: './film-content.component.html',
  styleUrls: ['./film-content.component.css']
})
export class FilmContentComponent implements OnInit {

  id:number;
  film;
  safeURL;
  constructor(private route: ActivatedRoute,private filmService: FilmService, private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/szby7ZHLnkA");
    this.route.params
    .subscribe( params => this.id = params.id)
   }
  ngOnInit() {
    this.getFilmByName(this.id);
  }
  getFilmByName(id){
    this.filmService.getFilmByName(id)
    .subscribe(data => {
      console.log(data);
     this.film = data;
    });
  }
}
