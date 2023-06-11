
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private http : HttpClient) { }
  getUser () : Observable<any>{
    return this.http.get<any[]>(`http://localhost:8080/api/getall-user`)
  }
}
