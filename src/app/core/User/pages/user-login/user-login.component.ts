import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SpinnerComponent } from '../../../../shared/Components/spinner/spinner.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { Store } from '@ngrx/store';
import { loginUser } from '../../../../store/User/user.action';
import { selectUserLoading } from '../../../../store/User/user.selector';
import { environment } from '../../../../../environments/environment.development';
import { UserService } from '../../Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../../../shared/Services/token-auth-service/Token.service';
import { GoogleCredentials } from '../../models/authentication.model';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@firebase/auth';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SpinnerComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
  providers: [AngularFireAuth],
})
export class UserLoginComponent implements OnInit {
  clientId = environment.Google_Client_Id;
  loginForm!: FormGroup;
  show: boolean = false;
  passwordError: boolean = false;
  emailError: boolean = false;
  isLoading: boolean = false;
  dummyUserCredentials={
    email:'testuser@email.com',
    password:'Testuser@123'
  }
  constructor(
    private fb: FormBuilder,
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private tokenService: TokenService,
    private store: Store<AppState>,
    private toastr: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.store.select(selectUserLoading).subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
    this.loginForm = this.fb.group({
      email: [this.dummyUserCredentials.email, [Validators.required, Validators.email]],
      password: [
        this.dummyUserCredentials.password,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/
          ),
        ],
      ],
    });
  }

  showPassword() {
    this.show = !this.show;
  }

  loginSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    let UserData = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    console.log('User Data : ', UserData);
    this.store.dispatch(loginUser(UserData));
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
}
