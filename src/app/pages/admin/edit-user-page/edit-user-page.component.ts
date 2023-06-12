import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.css']
})
export class EditUserPageComponent {
  user!:IUser
  formUser = this.formBuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    password:[''],
    role:['',[Validators.required]]
  })

  constructor(
    private routeAc:ActivatedRoute,
    private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router
    ){
      this.routeAc.paramMap.subscribe(param=>{
        const id = param.get('id')

        this.userService.getByIdUser(id).subscribe(({user})=>{

          this.user=user
          this.formUser.patchValue({
            name:user.name,
            email:user.email,
            password:user.password,
            role:user.role
          })

        })
      })

  }
  onHandleUpadte(){
    if(this.formUser.valid){
      const newUser:IUser = {
        _id:this.user._id || 0,
        name:this.formUser.value.name || "",
        email:this.formUser.value.email || "",
        password:this.formUser.value.password || "",
        role:this.formUser.value.role || "",
      }
      this.userService.updateUser(newUser).subscribe(()=>{
        Swal.fire('Thành công', 'Xóa user thành công!', 'success');
        this.router.navigate(['admin/list-user'])
      })

    }


  }
}
