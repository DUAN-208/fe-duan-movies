import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';
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
    })
  }
  removeItem(id: any) {
    this.MoviesService.deleteMovies(id).subscribe((data) => {
      if(data == 1){
      Swal.fire('Thất bại', 'Xóa movies thất bại!', 'info');
      }else{
        this.movies = this.movies.filter(item=> item._id !==id)
        Swal.fire('Thành công', 'Xóa movies thành công!', 'success');
      }
      
      
    })
  }

}
