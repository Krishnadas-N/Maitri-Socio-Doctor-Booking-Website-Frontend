import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { dateLessThanFourYearsValidator } from '../../../../shared/Validators/date-less-than-four-years.validator'; 
import { markAllFormControlsAsTouched } from '../../../../shared/Validators/markFormGroupTouched'; 
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { Store, select } from '@ngrx/store';
import { registerUser, registerUserSuccess } from '../../../../store/User/user.action';
import { selectUserLoading } from '../../../../store/User/user.selector';
import { FormValidator } from '../../../../shared/Validators/formValidators'; 
import { environment } from '../../../../../environments/environment.development';
declare var google:any
@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  isLoading:boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private store:Store<AppState>){}
  ngOnInit() {
    this.store.select(selectUserLoading).subscribe((isLoading) =>{
      this.isLoading = isLoading
    })
    google.accounts.id.initialize({
      client_id: environment.Google_Client_Id,
      callback:(res:any)=>this.onClickHandler(res)
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"),{
      theme:"filled_blue",
      type:"standard",
      size:"large",
      alignment:"left",
      text:"continue_with",
      shape:"pill"
    });
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(25)]],
      lastName: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(25)]],
      username: ['', [Validators.required, Validators.maxLength(25),Validators.pattern(/^[a-z0-9_]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/), Validators.maxLength(25)]],
      confirmPassword: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['',Validators.required,FormValidator.checkSixYaersBefore]
    }, { validator: this.passwordMatchValidator });
    // dateLessThanFourYearsValidator
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
  onSubmit(){
    if(this.registrationForm.valid){
      const formData = this.registrationForm.value;
      const password = formData.password;
      const confirmPassword =  formData.confirmPassword;
      delete formData.password;
      delete formData.confirmPassword;
      console.log(formData,password,confirmPassword)
      this.store.dispatch(registerUser({user:formData,password,confirmPassword}))
    }else{
      markAllFormControlsAsTouched(this.registrationForm)
    }
  }

  onClickHandler(res:any){
    console.log("Sign in with Google button clicked...")
  }
}
// {
//   "clientId": "447977348117-hdalhj00m1mv9el3av0b9ehcvo1t595i.apps.googleusercontent.com",
//   "client_id": "447977348117-hdalhj00m1mv9el3av0b9ehcvo1t595i.apps.googleusercontent.com",
//   "credential": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImEzYjc2MmY4NzFjZGIzYmFlMDA0NGM2NDk2MjJmYzEzOTZlZGEzZTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0NDc5NzczNDgxMTctaGRhbGhqMDBtMW12OWVsM2F2MGI5ZWhjdm8xdDU5NWkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0NDc5NzczNDgxMTctaGRhbGhqMDBtMW12OWVsM2F2MGI5ZWhjdm8xdDU5NWkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTcyNTM0NDY1MTk0ODI5MzQxNDkiLCJlbWFpbCI6Im1rLmtkLjAwOEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzE1MzUzNjc1LCJuYW1lIjoia3Jpc2huYWRhcyBOIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0wxTC1peHlfMFF5VDhlaTZIRUVZeF9OSXU2cm5WMkFjbExham5BQkg1d2VlRTR1UT1zOTYtYyIsImdpdmVuX25hbWUiOiJrcmlzaG5hZGFzIiwiZmFtaWx5X25hbWUiOiJOIiwiaWF0IjoxNzE1MzUzOTc1LCJleHAiOjE3MTUzNTc1NzUsImp0aSI6IjhkMjNjNTY2MDdmZGI5MWJlZjhhNjg2ZTc4MTRiM2M4MjJmYWI3MWUifQ.NsqCLfUyywjVJ4cEIJeoM7hxyxweis_LQWLqsy-O7uhH0E8rHrvhKRmph_Sp3TgiDBr0-hcvoAF-4jSyw9aSWm39xyUenUCjOBScjGWu0M_oWFCtqc6pvkBuef_xEvvpCcMYcjqyIyuV6a-yegnGKPGmWHdoMPHzZ57fo9MRHoZBr_XCnhnU0LQoXP7ZK-hiU5oZlsL-djJR7O6fFdwLzJn-q0alCiGNszz6pvq8IpZJEmw12gCzYFWDrR3X0agEQ3UiO0rxlixPmz-NF0iVNjPhYEOUgKGaNSuxpZq-CQ_iBedxalxZUwCsg-mS_koTWQK6Et-QKEiwEoDnxnz1cg",
//   "select_by": "btn_confirm"
// }