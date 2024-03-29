import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { dateLessThanFourYearsValidator } from '../../../../shared/validators/date-less-than-four-years.validator';
import { markAllFormControlsAsTouched } from '../../../../shared/validators/MarkFromGroupTouched';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstname: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(25)]],
      username: ['', [Validators.required, Validators.maxLength(25),Validators.pattern(/^[a-z0-9_]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/), Validators.maxLength(25)]],
      gender: ['', Validators.required],
      dateOfBirth: ['',Validators.required,dateLessThanFourYearsValidator]
    });
  }
  onSubmit(){
    if(this.registrationForm.valid){
      const formData = this.registrationForm.value;
      console.log(formData)
    }else{
      markAllFormControlsAsTouched(this.registrationForm)
    }
  }


}
