import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './shared/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  @Input() movie: Movie;

  getGenre(value: string): string[] {
    return value.split(' ');
  }

  getActors(value: string): string[] {
    return value.split(',');
  }
}
