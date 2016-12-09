import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Movie } from './movie.model';

@Injectable()
export class MovieService {

    protected _actionUrl: string;

    constructor(protected _http: Http) {

        this._actionUrl = 'http://www.omdbapi.com/';
    }

    public Get(title: string, year: string, plot: string): Promise<Movie> {

        return this._http.get(`${this._actionUrl}?t=${title}&y=${year}&plot=${plot}&r=json`)
            .toPromise()
            .then(response => response.json())
            .catch((error) => {
                console.error(
                    'An error occurred: ' + error
                );
            });
    }
}
