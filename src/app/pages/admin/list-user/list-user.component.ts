import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  
  users : IUser[] = [];
  constructor (private userService: UserService){}
  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }
  onHandleRemove(id:any){
    this.userService.deleteUser(id).subscribe((data)=>{
      if(data == 1){
        Swal.fire('Thất bại', 'Xóa user thất bại!', 'info');
        }else{
          this.users = this.users.filter(item=>item._id!==id)
      Swal.fire('Thành công', 'Xóa user thành công!', 'success');
        }
        
     

    })
    
    
  }
}
