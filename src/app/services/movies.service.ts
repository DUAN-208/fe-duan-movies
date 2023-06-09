import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { IMovie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
  addProduct(movie:IMovie):Observable<any> {
    return this.http.post('http://localhost:8080/api/movies',movie)
   }
}
