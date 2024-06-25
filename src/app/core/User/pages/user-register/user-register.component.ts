import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { markAllFormControlsAsTouched } from '../../../../shared/validators/markFormGroupTouched';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { Store } from '@ngrx/store';
import { registerUser, } from '../../../../store/User/user.action';
import { selectUserLoading } from '../../../../store/User/user.selector';
import { FormValidator } from '../../../../shared/validators/formValidators';
import { environment } from '../../../../../environments/environment.development';
import { GoogleLoginButtonComponent } from '../../../../shared/Components/google-login-button/google-login-button.directive';
import { UserService } from '../../Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TokenService } from '../../../../shared/Services/token-auth-service/Token.service';
import { GoogleCredentials } from '../../models/authentication.model';
import { GoogleAuthProvider } from '@firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ReactiveFormsModule,ToastModule,CommonModule,RouterLink,GoogleLoginButtonComponent],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
  providers: [MessageService,AngularFireAuth]
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
    private angularFireAuth: AngularFireAuth,
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
  async loginWithGoogle() {
    const creds = await this.angularFireAuth.signInWithPopup(
      new GoogleAuthProvider()
    );
    console.log('credentials from firbaser', creds.user);
    if (creds.user) {
      this.userService
        .loginWithGoogle(creds.user as unknown as GoogleCredentials)
        .subscribe({
          next: (res) => {

            this.tokenService.setToken(res.data.token);
            this.isLoading = false;
            this.tokenService.setAccessToken(res.data.revokeAccessToken);
            this.router.navigate(['/']);
          },
          error: (err) => {
            this.toastr.error(err);
          },
        });
    }
  }


showLifeDefault() {
  this.messageService.add({ severity: 'info', summary: 'Provide more Details', detail: 'Please Fill the Addiional Details' });
}
}
