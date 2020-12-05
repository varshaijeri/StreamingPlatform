import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-cards',
  templateUrl: './series-cards.component.html',
  styleUrls: ['./series-cards.component.css']
})
export class SeriesCardComponent implements OnInit {

  
  constructor(private serieService : SerieService) { }
  series;
  results;
  ngOnInit() {
    this.series = this.serieService.getSeries()
    .subscribe(data =>{
      this.series=data['results'];
    })
}
}
