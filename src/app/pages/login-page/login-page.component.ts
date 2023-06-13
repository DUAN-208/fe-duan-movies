import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  formLogin= this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
  constructor(
    private formBuilder:FormBuilder,
    private authSingin:AuthService,
    private router:Router){}
    
  
    onHandleLogin() {
      if (this.formLogin.valid) {
        this.authSingin.login(this.formLogin.value).subscribe(data => {
          
          localStorage.setItem('token',JSON.stringify(data.accessToken))
          
          if(!data.user){
            Swal.fire('Thất bại', 'Tài khoản hoặc mật khẩu không đúng!', 'info');
            
          }else{
            Swal.fire('Thành công', 'Đăng nhập thành công!', 'success');
            
          }
          if(data.user.role == 'admin'){
            this.router.navigate(['admin'])
          }else{
            this.router.navigate([''])

          }
        })
      }
    }
}
