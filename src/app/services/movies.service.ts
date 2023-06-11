import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { IMovie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
  AddMovies(movie:IMovie):Observable<any> {
    return this.http.post('http://localhost:8080/api/movies',movie)
   }
   getProductById (id :any):Observable<any> {
    return this.http.get(`http://localhost:8080/api/movies/${id}`)
  }
  updateMovies(movie: IMovie): Observable<IMovie> {
    return this.http.patch<any>(`http://localhost:8080/api/products/${movie._id}`, movie);
  }
}
