import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ChampionsRanking: any;
  TopRanks: any;
  PopularChamp: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getChampionsRanking();
    this.getTopRanks();
    this.getPopularChamp();
  }

  getChampionsRanking() {
    this.http
      .get('http://localhost:4200/assets/data/champions-ranking.json')
      .subscribe((ranks) => {
        this.ChampionsRanking = ranks;
      });
  }

  getTopRanks() {
    this.http
      .get('http://localhost:4200/assets/data/ranks.json')
      .subscribe((ranks) => {
        this.TopRanks = ranks;
      });
  }

  getPopularChamp() {
    this.http
      .get('http://localhost:4200/assets/data/popular-champions.json')
      .subscribe((ranks) => {
        this.PopularChamp = ranks;
      });
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['rank', type, id]);
  }
}
