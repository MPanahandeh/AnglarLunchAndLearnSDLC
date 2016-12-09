import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { StarComponent } from './star/star.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieSearchComponent } from './movie/movie-search/movie-search.component';
import { MovieProvider } from './movie/shared/movie.provider';
import { MovieService } from './movie/shared/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    StarComponent,
    MovieListComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MovieProvider, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
