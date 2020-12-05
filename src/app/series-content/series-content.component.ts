import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../serie.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-serie',
  templateUrl: './series-content.component.html',
  styleUrls: ['./series-content.component.css']
})
export class SeriesContentComponent implements OnInit {

  id:number;
  serie;
  safeURL;
  constructor(private route: ActivatedRoute,private serieService: SerieService, private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/szby7ZHLnkA");
    this.route.params
    .subscribe( params => this.id = params.id)
   }
  ngOnInit() {
    this.getFilmByName(this.id);
  }
  getFilmByName(id){
    this.serieService.getSerieByName(id)
    .subscribe(data => {
     this.serie = data;
    });
  }

}
