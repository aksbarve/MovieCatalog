import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie/movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  goBack(): void {
    this.location.back();
}

getMovie(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.movieService.getMovie(id)
    .subscribe(movie => this.movie = movie);
}
}

