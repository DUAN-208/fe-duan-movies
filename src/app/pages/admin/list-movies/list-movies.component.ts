import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  
  movies : IMovie[] = [];
  constructor (private MovieService: MoviesService){}
  ngOnInit(): void {
    this.MovieService.getAllMovies().subscribe(data => {
      this.movies = data.docs;
      console.log(this.movies);
    })
  }

}
