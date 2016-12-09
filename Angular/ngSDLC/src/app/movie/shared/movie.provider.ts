import { Movie } from './movie.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieProvider {

    private searchedMovies: Map<string, Movie> = new Map<string, Movie>();



    getSearchedMovies(): Iterable<Movie> {

        return this.searchedMovies.values();
    }

    addMovie(movie: Movie) {
        if (movie.Title) {
            this.searchedMovies.set(movie.Title, movie);
        }
    }

    removeMovie(movie: Movie) {
        this.searchedMovies.delete(movie.Title);
    }
}