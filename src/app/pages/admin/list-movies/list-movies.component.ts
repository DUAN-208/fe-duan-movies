import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

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
  removeItem(id: any) {
    this.MovieService.deleteMovies(id).subscribe(() => {
      Swal.fire('Thành công', 'Thêm movies thành công!', 'success');
    })
  }

}
