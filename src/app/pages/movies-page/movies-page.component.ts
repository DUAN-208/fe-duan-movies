import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/services.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  movies : IMovie[] = [];
  constructor (private MovieService: MovieService){}
  ngOnInit(): void {
    this.MovieService.getMovies().subscribe(res => {
      this.movies = res.docs;
      console.log(this.movies);
    })
  }
}
