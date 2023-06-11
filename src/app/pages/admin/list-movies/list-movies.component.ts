import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  
  movies : IMovie[] = [];
  constructor (private MoviesService: MoviesService){}
  ngOnInit(): void {
    this.MoviesService.getAllMovies().subscribe(data => {
      this.movies = data.docs;
      console.log(this.movies);
    })
  }
  removeItem(id: any) {
    this.MoviesService.deleteMovies(id).subscribe(() => {
      Swal.fire('Thành công', 'Xóa movies thành công!', 'success');
    })
  }

}
