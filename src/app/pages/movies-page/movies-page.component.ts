import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  currentPage = 1
  movies!: IMovie[] ;
  constructor (private MovieService: MoviesService){}
  loadDataMovies(){
  this.MovieService.getMoreDataMovies(this.currentPage).subscribe(data => {
      this.movies = data.docs;
    })
  }
   ngOnInit(): void {
       this.loadDataMovies()
   }
  loadMore(){
    this.currentPage++
    this.loadDataMovies()
  }
}
