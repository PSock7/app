import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss'],
})
export class RankComponent implements OnInit {
  type = '';
  id = '';
  url = '';
  ranks: any;
  rank: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/champions-ranking.json';
    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/ranks.json';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-champions.json';
    }

    this.getMovie();
  }

  getMovie() {
    this.http.get(this.url).subscribe((ranks) => {
      this.ranks = ranks;
      let index = this.ranks.findIndex(
        (rank: { id: string }) => rank.id == this.id
      );
      if (index > -1) {
        this.rank = this.ranks[index];
      }
    });
  }
}
