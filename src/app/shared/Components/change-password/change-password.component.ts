import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../../../core/User/Services/user-service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../../Services/AuthService/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePassword!:FormGroup;
  isLoading:boolean=false;
  token:string='' ;
  constructor(private fb:FormBuilder,
    private UserService:UserServiceService,
    private route:ActivatedRoute ,
    private rotuer:Router,
    private AuthService:AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.initForm();
    this.getTokenFromParams()
  }
  initForm(){
   this.changePassword=this.fb.group({
    password: ['', [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/), Validators.maxLength(25)]],
    confirmPassword: ['', Validators.required],
   },{ validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  getTokenFromParams(){
    this.route.params.subscribe(params=>{
      console.log("token", params['token']);
      this.token=params['token'];
    })
  }

  get f(){
    return this.changePassword.controls;
  }

  onSubmit(){
    console.log("Submitted");
    if(this.changePassword.valid){
      this.isLoading=true
       this.UserService.saveNewPassword(this.token,this.changePassword.value.password,this.changePassword.value.confirmPassword).subscribe(
        (res)=>{
          this.toastr.success('Password Reset SuccessFully')
          this.isLoading=false
          if(this.AuthService.isAuthenticated()){
            this.rotuer.navigate(['/'])
          }else{
            this.rotuer.navigate(['/login'])
          }
        },
        (err=>{
          this.isLoading=false
          this.toastr.error(err)
        })
       )
      }else{
        this.changePassword.markAllAsTouched();
      }
    }
}
