import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpinnerComponent } from '../../../../shared/Components/spinner/spinner.component';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,SpinnerComponent,RouterOutlet,RouterLink ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit{
  loginForm!: FormGroup;
  show:boolean=false;
  passwordError:boolean=false;
  emailError:boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
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
    
  }
}
