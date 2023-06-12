import { Component } from '@angular/core';
import {FormBuilder ,Validators} from '@angular/forms';
import { IMovie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-movies-page',
  templateUrl: './add-movies-page.component.html',
  styleUrls: ['./add-movies-page.component.css']
})
export class AddMoviesPageComponent {
  formMovie = this.formBuilder.group({
    name: ['', [Validators.required]],
    img: ['', [Validators.required]],
    diem: ['', [Validators.required]],
    nam: ['', [Validators.required]],
    video: ['', [Validators.required]],
    desc: ['', [Validators.required]],
    
  })
  constructor(
    private formBuilder: FormBuilder,
    private moviesService: MoviesService,
    private router:Router
    ){}
    onHanldeAddMovie(){
      if (this.formMovie.valid) {
        const product: IMovie = {
          name: this.formMovie.value.name || "",
          img: this.formMovie.value.img ||"",
          diem: this.formMovie.value.diem || '',
          nam: this.formMovie.value.nam || '',
          video: this.formMovie.value.video ||'',
          desc: this.formMovie.value.desc ||'',
          
        }
        this.moviesService.AddMovies(product).subscribe(data => {
          if(data == 1){
            Swal.fire('Thất bại', 'Thêm sản phẩm thất bại!', 'info');
            }else{
              Swal.fire('Thành công', 'Thêm movies thành công!', 'success');
          this.router.navigate(['/admin/list-movies'])
            }
            
          
        })
      }
  
    }
    }

