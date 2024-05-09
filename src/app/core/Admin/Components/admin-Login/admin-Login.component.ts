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

@Component({
  selector: 'app-admin-Login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  AdminloginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private adminService:AdminService,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
    this.AdminloginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get formControls() {
    return this.AdminloginForm.controls;
  }

  onSubmit() {
    if (this.AdminloginForm.invalid) {
      return;
    }
    console.log(this.AdminloginForm.value);
   this.adminService.login(this.AdminloginForm.value.email,this.AdminloginForm.value.password).subscribe(
    (res)=>{
      this.router.navigate(['/admin'])
    },
    (err)=>{
      this.toastr.error(err)
    }
   )
  }
}
