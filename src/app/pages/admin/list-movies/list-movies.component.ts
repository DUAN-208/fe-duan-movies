import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/services.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  
  movies : IMovie[] = [];
  constructor (private MovieService: MovieService){}
  ngOnInit(): void {
    this.MovieService.getMovies().subscribe(res => {
      this.movies = res.docs;
      console.log(this.movies);
    })
  }

}
