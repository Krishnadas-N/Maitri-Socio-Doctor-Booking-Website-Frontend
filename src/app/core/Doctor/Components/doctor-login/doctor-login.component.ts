import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { loginDoctorRequest } from '../../../../store/Doctor/doctor.action';
import { selectdoctorLoading } from '../../../../store/Doctor/doctor.selectors';
import { TokenService } from '../../../../shared/Services/TokenAuthService/Token.service';
@Component({
  selector: 'app-doctor-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './doctor-login.component.html',
  styleUrl: './doctor-login.component.css'
})
export class DoctorLoginComponent implements OnInit{
  loginForm!: FormGroup;
  submitted = false;
  isLoading:boolean= true
  constructor(private fb: FormBuilder,private store:Store<AppState>,private TokenService:TokenService,private route:Router) {}

  ngOnInit() {
    if(this.TokenService.isAuthenticated()){
      this.route.navigate(['/doctor'])
    }
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)]]
    });

    this.store.select(selectdoctorLoading).subscribe((isLoading)=>{
        this.isLoading = isLoading
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(loginDoctorRequest({email,password}))
  }
}
