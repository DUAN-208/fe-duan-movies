import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  formSignup= this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: this.checkPasswords })
  constructor(
    private formBuilder:FormBuilder,
    private authSingup:AuthService,
    private router:Router){}
    checkPasswords(formGroup: FormGroup) {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      if (password === confirmPassword) return null;
      return { notMatch: true }
    }
  
    onHandldeSignup() {
      if (this.formSignup.valid) {
        this.authSingup.signup(this.formSignup.value).subscribe(data => {
          console.log(data);
          
          if(!data.user){
            Swal.fire('Thất bại', 'Đăng kí tài khoản thất bại!', 'info');
          }else{
            Swal.fire('Thành công', 'Đăng kí tài khoản thành công!', 'success');
          this.router.navigate(['/login'])
          }
        })
      }
        
      
    }
}
