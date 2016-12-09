import { Component, NgModule, Input } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { MovieProvider } from '../shared/movie.provider';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  @Input() title: string;
  @Input() year: string;
  plot: string = 'full';
  progress: number = 0;

  constructor(private movieService: MovieService, private movieProvider: MovieProvider) {
    this.title = '';
    this.year = '';
  }

  getSingle() {

    this.movieService.Get(this.title, this.year, this.plot)
      .then(x => this.movieProvider.addMovie(x));
  }

}
