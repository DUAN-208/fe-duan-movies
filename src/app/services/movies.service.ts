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
  getMoreDataMovies(page:number):Observable<any>{
    const url= `http://localhost:8080/api/movies?_page=${page}`
    return this.http.get(url) 
  }
  getAllMovies():Observable<any>{
    return this.http.get('http://localhost:8080/api/movies')
  }
  getMovieNew():Observable<any>{
    return this.http.get('http://localhost:8080/api/movies?_limit=10')
  }
}
