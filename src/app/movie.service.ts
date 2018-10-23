import { Injectable } from '@angular/core';
import {Movie} from './movie/movie';
import {MOVIES} from './mock-datamovie';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private messageService: MessageService) { }

  getMovies(): Observable<Movie[]> {
    this.messageService.add('MovieService: fetched movies');
    return of(MOVIES);

}

getMovie(id: number): Observable<Movie> {
  this.messageService.add(`MovieService: fetched movie id=${id}`);
  return of(MOVIES.find(movie => movie.id === id));
}
}
