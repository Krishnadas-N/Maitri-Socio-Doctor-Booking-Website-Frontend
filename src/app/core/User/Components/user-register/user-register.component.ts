import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { dateLessThanFourYearsValidator } from '../../../../shared/validators/date-less-than-four-years.validator';
import { markAllFormControlsAsTouched } from '../../../../shared/validators/MarkFromGroupTouched';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { Store, select } from '@ngrx/store';
import { registerUser, registerUserSuccess } from '../../../../store/User/user.action';
import { selectUserLoading } from '../../../../store/User/user.selector';
import { FormValidator } from '../../../../shared/validators/FromValidators';

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


}
