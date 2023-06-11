import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor( private http : HttpClient) { }
  getMovies () : Observable<any>{
    return this.http.get<IMovie[]>(`http://localhost:8080/api/movies`)
  }
  
  
}
