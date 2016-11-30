import { Component, OnInit } from '@angular/core';
import { Movie } from './shared/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie;

  ngOnInit() {
    this.movie = this.getMovie();
  }
  
  getMovie(): Movie {
    let movie = new Movie();
    movie.Title = "Titanic";
    movie.Year = "1997"
    movie.Rated = "PG-13"
    movie.Released = "19 Dec 1997"
    movie.Runtime = "194 min"
    movie.Genre = "Drama Romance";
    movie.Director = "James Cameron";
    movie.Writer = "James Cameron";
    movie.Actors = "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates";
    movie.Plot = "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.";
    movie.Language = "English";
    movie.Country = "USA";
    movie.Awards = "Won 11 Oscars. Another 110 wins & 73 nominations.";
    movie.Poster = "https://images-na.ssl-images-amazon.com/images/M/MV5BZDNiMjE0NDgtZWRhNC00YTlhLTk2ZjItZTQzNTU2NjAzNWNkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg";
    movie.Metascore = "74";
    movie.ImdbRating = "7.7";
    movie.ImdbVotes = "806,925";
    movie.ImdbID = "tt0120338";
    movie.Type = "movie";
    return movie;
  }

  getGenre(value: string): string[] {
    return value.split(' ');
  }

  getActors(value: string): string[] {
    return value.split(',');
  }
}
