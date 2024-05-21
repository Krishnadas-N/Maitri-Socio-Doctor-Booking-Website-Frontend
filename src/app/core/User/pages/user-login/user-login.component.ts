import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpinnerComponent } from '../../../../shared/Components/spinner/spinner.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { Store } from '@ngrx/store';
import { loginUser } from '../../../../store/User/user.action';
import { selectUserLoading } from '../../../../store/User/user.selector';
import { GoogleLoginButtonComponent } from '../../../../shared/Components/google-login-button/google-login-button.directive';
import { environment } from '../../../../../environments/environment.development';
import { UserService } from '../../Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../../../shared/Services/token-auth-service/Token.service';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,SpinnerComponent,RouterOutlet,RouterLink,GoogleLoginButtonComponent],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit{
  clientId = environment.Google_Client_Id;
  loginForm!: FormGroup;
  show:boolean=false;
  passwordError:boolean=false;
  emailError:boolean = false;
  isLoading:boolean=false;
  constructor(private fb: FormBuilder,
    private router:Router,
    private tokenService:TokenService,
    private store:Store<AppState>,private toastr:ToastrService,private userService:UserService) {}

  ngOnInit() {
    this.store.select(selectUserLoading).subscribe((isLoading) =>{
      this.isLoading = isLoading
    })
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)]] ,
    });
  }
  showPassword(){
    this.show=!this.show
  }
  loginSubmit(){
    if (this.loginForm.invalid){
        return;
    }
    let UserData = {
      email:this.loginForm.get('email')?.value,
      password:this.loginForm.get('password')?.value
    }
    console.log("User Data : ",UserData);
    this.store.dispatch(loginUser(UserData));
  }
    loginWithGoogle = (credential: any) => {
        console.log("Crenditail",credential);
        this.userService.loginWithGoogle(credential).subscribe({
          next:(res)=>{
            this.tokenService.setToken(res.data.token);
        this.isLoading= false;
                      this.tokenService.setAccessToken(res.data.revokeAcessToken)
                        this.router.navigate(['/'])
          },
          error:(err)=>{
              this.toastr.error(err)
          }
        });
    }
}
