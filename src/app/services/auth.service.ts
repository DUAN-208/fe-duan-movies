import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { ISignin, ISignup } from '../interfaces/Auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  signup (user:ISignup):Observable<any>{
    return this.http.post('http://localhost:8080/api/signup',user)
  }
  login(user:any):Observable<any>{
    return this.http.post('http://localhost:8080/api/signin',user)

  }
}
