import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private searchService: SearchService, private router: Router, private route: ActivatedRoute) { }
  logoName: String = '../../assets/hfi-logo-2014-2.png';

  onSubmit(f) {
    location.reload();
    this.router.navigate(['search/' + f.value.search])
      .then(() => {
        window.location.reload();
      });
  }
  ngOnInit() {
  }

}
