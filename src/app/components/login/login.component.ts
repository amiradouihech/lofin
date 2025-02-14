import { Component } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.loginForm=this.createFormGroup();
  }
  createFormGroup():FormGroup{
    return new FormGroup({
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.minLength(7)]),
    })
  }
  login(){
   this.authService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe();
  }
}
