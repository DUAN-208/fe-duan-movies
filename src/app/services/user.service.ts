
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
  deleteUser(id:any):Observable<any>{
    const token = JSON.parse(localStorage.getItem('token')!)
    return this.http.delete(`http://localhost:8080/api/delete-user/${id}`,{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  }
  getByIdUser(id:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/getOne-user/${id}`)
  }
  updateUser(user:any):Observable<any>{
    const token = JSON.parse(localStorage.getItem('token')!)
    return this.http.patch(`http://localhost:8080/api/update-user/${user._id}`,user,{
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  }
}
