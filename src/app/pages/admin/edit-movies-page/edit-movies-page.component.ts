import { Component } from '@angular/core';
import {FormBuilder ,Validators} from '@angular/forms';
import { IMovie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';
import {  ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-movies-page',
  templateUrl: './edit-movies-page.component.html',
  styleUrls: ['./edit-movies-page.component.css']
})
export class EditMoviesPageComponent {
  movies!: IMovie;
  formMovie = this.formBuilder.group({
    name: [''],
    img: [''],
    diem: [''],
    nam: [''],
    video: [''],
    desc: [''],
  })
  constructor(
    private formBuilder: FormBuilder,
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router:Router){
      this.route.paramMap.subscribe(param => {
        const id = String(param.get('id'));
        this.moviesService.getMovieById(id).subscribe(movies => {
          this.movies = movies;
          this.formMovie.patchValue({
            name: movies.name,
            img: movies.img,
            diem: movies.diem,
            nam: movies.nam,
            video: movies.video,
            desc: movies.desc,
          }) 
        }, error => console.log(error.message))
      })
    }
  
    onHanldeEditMovie(){
      if (this.formMovie.valid) {
        const movies: IMovie = {
          _id: this.movies._id,
          name: this.formMovie.value.name || "",
          img: this.formMovie.value.img ||"",
          diem: this.formMovie.value.diem || '',
          nam: this.formMovie.value.nam || '',
          video: this.formMovie.value.video ||'',
          desc: this.formMovie.value.desc ||'',
        }
        this.moviesService.updateMovies(movies).subscribe(data => {
          if(data == 1){
            Swal.fire('Thất bại', 'Update Movies thất bại!', 'info');
            }else{
              Swal.fire(' Thành công ', ' Update Movies thành công !', 'success');
          this.router.navigate(['/admin/list-movies'])
            }
            
          
        })
      }
  
    }
  

}
