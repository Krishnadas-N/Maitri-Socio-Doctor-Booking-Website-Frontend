import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { adminLogin } from '../../../../store/Admin/admin.action';

@Component({
  selector: 'app-admin-Login',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './admin-Login.component.html',
  styleUrls: ['./admin-Login.component.css']
})
export class AdminLoginComponent implements OnInit {

  AdminloginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private store:Store<AppState>) { }

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
    this.store.dispatch(adminLogin(this.AdminloginForm.value))

  }

}
