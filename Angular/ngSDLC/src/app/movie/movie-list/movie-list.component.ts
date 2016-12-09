import { Component } from '@angular/core';
import { Movie } from '../shared/movie.model';
import { MovieProvider } from '../shared/movie.provider';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  private movies: Movie[] = [];

  constructor(private movieProvider: MovieProvider) { }

  getMovies() {
    this.movies = Array.from(this.movieProvider.getSearchedMovies()).reverse();
    return this.movies;
  }

  onRemove(movie: Movie) {
    this.movieProvider.removeMovie(movie);
  }


}
