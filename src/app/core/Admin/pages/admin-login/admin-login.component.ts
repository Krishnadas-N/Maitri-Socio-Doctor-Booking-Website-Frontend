import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../Services/admin-service/auth.service'; 
import { TokenService } from '../../../../shared/Services/token-auth-service/Token.service'; 

@Component({
  selector: 'app-admin-Login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  AdminloginForm!: FormGroup;
  isLoading:boolean=false;
  dummyAdminLogin={
    email:'krishnadas@email.com',
    password:'Krishnadas@123'
  }
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private adminService:AdminService,
    private tokenService:TokenService,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    this.AdminloginForm = this.formBuilder.group({
      email: [this.dummyAdminLogin.email, [Validators.required, Validators.email]],
      password: [this.dummyAdminLogin.password, [Validators.required, Validators.minLength(6)]],
    });
  }

  get formControls() {
    return this.AdminloginForm.controls;
  }

  onSubmit() {
    if (this.AdminloginForm.invalid) {
      this.AdminloginForm.markAllAsTouched()
      return;
    }
    console.log(this.AdminloginForm.value);
    this.isLoading=true
    const { email, password } = this.AdminloginForm.value;
    this.adminService.login(email, password).subscribe({
     next: (res)=>{
        this.isLoading=false;
        console.log(res);
        this.tokenService.setToken(res.data.token)
        this.router.navigate(['/admin'])
      },
      error:(err)=>{
        this.isLoading=false
        this.toastr.error(err)
      }
    })
  }
}
