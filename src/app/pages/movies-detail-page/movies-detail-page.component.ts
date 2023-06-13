import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/interfaces/movie';
@Component({
  selector: 'app-movies-detail-page',
  templateUrl: './movies-detail-page.component.html',
  styleUrls: ['./movies-detail-page.component.css']
})
export class MoviesDetailPageComponent {
  movie!:IMovie
  constructor(
    private moviesService:MoviesService,
    private router:ActivatedRoute
    ){
    this.router.paramMap.subscribe(param => {
      const id = param.get('id');
      this.moviesService.getMovieById(id).subscribe(data=>{
        this.movie = data
        
      })

    })

  }

}
