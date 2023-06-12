import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  
  users : User[] = [];
  constructor (private MovieService: UserService){}
  ngOnInit(): void {
    this.MovieService.getUser().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }
  
}
