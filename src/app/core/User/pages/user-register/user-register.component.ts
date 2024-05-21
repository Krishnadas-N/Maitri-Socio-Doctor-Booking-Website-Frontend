import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { markAllFormControlsAsTouched } from '../../../../shared/Validators/markFormGroupTouched'; 
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { Store } from '@ngrx/store';
import { registerUser, } from '../../../../store/User/user.action';
import { selectUserLoading } from '../../../../store/User/user.selector';
import { FormValidator } from '../../../../shared/Validators/formValidators'; 
import { environment } from '../../../../../environments/environment.development';
import { GoogleLoginButtonComponent } from '../../../../shared/Components/google-login-button/google-login-button.directive';
import { UserService } from '../../Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TokenService } from '../../../../shared/Services/token-auth-service/Token.service';


@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ReactiveFormsModule,ToastModule,CommonModule,RouterLink,GoogleLoginButtonComponent],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
  providers: [MessageService]
})
export class UserRegisterComponent implements OnInit {
  signUpWithGoogle: boolean = false;
  registrationForm!: FormGroup;
  GoogleRegistrationForm!:FormGroup;
  isLoading:boolean = false;
  clientId = environment.Google_Client_Id;
  constructor(private formBuilder: FormBuilder,
    private userService:UserService,
    private messageService: MessageService,
    private router:Router,
    private tokenService:TokenService,
    private toastr:ToastrService,
    private store:Store<AppState>){}
  ngOnInit() {
    this.store.select(selectUserLoading).subscribe((isLoading) =>{
      this.isLoading = isLoading
    })
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
  SignupUsingGoogle = (credential: any) => {
    this.initiateGoogleSignupForm()
    this.signUpWithGoogle = true;
    console.log("Crenditail get from register",credential);
    this.GoogleRegistrationForm.patchValue({
      firstName:credential.given_name,
      lastName:credential.family_name,
      email:credential.email,
      profilePic:credential.picture
    });
    this.showLifeDefault()
}

SignupWithGoogle(){
  alert("Golfe")
  this.isLoading  =true
    this.userService.registerWithGoogle(this.GoogleRegistrationForm.value).subscribe({
      next:(res)=>{
        this.tokenService.setToken(res.data.token);
        this.isLoading= false;
                      this.tokenService.setAccessToken(res.data.revokeAcessToken)
                        this.router.navigate(['/'])
      },
      error:(err)=>{
        this.isLoading= false;
        this.toastr.error(err)
      }
    })
}

initiateGoogleSignupForm() {
  this.GoogleRegistrationForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(25)]],
    username: ['', [Validators.required, Validators.maxLength(25), Validators.pattern(/^[a-z0-9_]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', Validators.required],
    dateOfBirth: ['', [Validators.required, FormValidator.checkSixYaersBefore]],
    profilePic:['']
  });
}


showLifeDefault() {
  this.messageService.add({ severity: 'info', summary: 'Provide more Details', detail: 'Please Fill the Addiional Details' });
}
}
// {
//   "clientId": "447977348117-hdalhj00m1mv9el3av0b9ehcvo1t595i.apps.googleusercontent.com",
//   "client_id": "447977348117-hdalhj00m1mv9el3av0b9ehcvo1t595i.apps.googleusercontent.com",
//   "credential": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImEzYjc2MmY4NzFjZGIzYmFlMDA0NGM2NDk2MjJmYzEzOTZlZGEzZTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0NDc5NzczNDgxMTctaGRhbGhqMDBtMW12OWVsM2F2MGI5ZWhjdm8xdDU5NWkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0NDc5NzczNDgxMTctaGRhbGhqMDBtMW12OWVsM2F2MGI5ZWhjdm8xdDU5NWkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTcyNTM0NDY1MTk0ODI5MzQxNDkiLCJlbWFpbCI6Im1rLmtkLjAwOEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzE1MzUzNjc1LCJuYW1lIjoia3Jpc2huYWRhcyBOIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0wxTC1peHlfMFF5VDhlaTZIRUVZeF9OSXU2cm5WMkFjbExham5BQkg1d2VlRTR1UT1zOTYtYyIsImdpdmVuX25hbWUiOiJrcmlzaG5hZGFzIiwiZmFtaWx5X25hbWUiOiJOIiwiaWF0IjoxNzE1MzUzOTc1LCJleHAiOjE3MTUzNTc1NzUsImp0aSI6IjhkMjNjNTY2MDdmZGI5MWJlZjhhNjg2ZTc4MTRiM2M4MjJmYWI3MWUifQ.NsqCLfUyywjVJ4cEIJeoM7hxyxweis_LQWLqsy-O7uhH0E8rHrvhKRmph_Sp3TgiDBr0-hcvoAF-4jSyw9aSWm39xyUenUCjOBScjGWu0M_oWFCtqc6pvkBuef_xEvvpCcMYcjqyIyuV6a-yegnGKPGmWHdoMPHzZ57fo9MRHoZBr_XCnhnU0LQoXP7ZK-hiU5oZlsL-djJR7O6fFdwLzJn-q0alCiGNszz6pvq8IpZJEmw12gCzYFWDrR3X0agEQ3UiO0rxlixPmz-NF0iVNjPhYEOUgKGaNSuxpZq-CQ_iBedxalxZUwCsg-mS_koTWQK6Et-QKEiwEoDnxnz1cg",
//   "select_by": "btn_confirm"
// }{
//   "iss": "https://accounts.google.com",
//   "azp": "447977348117-hdalhj00m1mv9el3av0b9ehcvo1t595i.apps.googleusercontent.com",
//   "aud": "447977348117-hdalhj00m1mv9el3av0b9ehcvo1t595i.apps.googleusercontent.com",
//   "sub": "117253446519482934149",
//   "email": "mk.kd.008@gmail.com",
//   "email_verified": true,
//   "nbf": 1716139664,
//   "name": "krishnadas N",
//   "picture": "https://lh3.googleusercontent.com/a/ACg8ocL1L-ixy_0QyT8ei6HEEYx_NIu6rnV2AclLajnABH5weeE4uQ=s96-c",
//   "given_name": "krishnadas",
//   "family_name": "N",
//   "iat": 1716139964,
//   "exp": 1716143564,
//   "jti": "6bb9cf898ce906c24e316103a781fc28a31a9cf3"
// }