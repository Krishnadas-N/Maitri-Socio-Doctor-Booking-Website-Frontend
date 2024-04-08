import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { Store } from '@ngrx/store';
import { registerBasicRequest } from '../../../../store/Doctor/doctor.action';
import { selectdoctorLoading } from '../../../../store/Doctor/doctor.selectors';
import { FormValidator } from '../../../../shared/validators/FromValidators';
@Component({
  selector: 'app-doctor-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './doctor-register.component.html',
  styleUrl: './doctor-register.component.css'
})
export class DoctorRegisterComponent implements OnInit {
  isLoading:boolean= true;
  registrationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private store:Store<AppState>,
    private router:Router) { }
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)]],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required,FormValidator.checkSixYaersBefore],
      phone: ['', [Validators.required, FormValidator.phoneNumberValidator]]
    });
    this.store.select(selectdoctorLoading).subscribe((isLoading)=>{
      this.isLoading = isLoading
  })
  }
  get f() { return this.registrationForm.controls; }
 
  onSubmit() {
    this.registrationForm.markAllAsTouched();

    if (this.registrationForm.invalid) {
      return;
    }
    console.log('Form submitted successfully!');
    console.log('Form data:', this.registrationForm.value);
    this.store.dispatch(registerBasicRequest({doctorData:this.registrationForm.value}))
  }

}
