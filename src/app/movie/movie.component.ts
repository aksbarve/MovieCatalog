import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from '../mock-datamovie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
    selectedMovie: Movie;
    movies: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
  getMovies(): void {
      this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
    }

}
