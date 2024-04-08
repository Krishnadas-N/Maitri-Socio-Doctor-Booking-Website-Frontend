import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserExceptionService } from './core/User/Services/Exception/exception.service';
import { SharedStoreExceptionService } from './store/sharedStore/sharedStoreServices/sharedStoreException.service';
import { DoctorExceptionService } from './core/Doctor/Services/Exception/exception.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatSnackBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Maitri-Frontend';
  constructor(
    private userExceptionService:UserExceptionService,
    private SharedStoreErrorService:SharedStoreExceptionService,
    private doctorExceptionService:DoctorExceptionService
    
  ){
    this.userExceptionService.handleErrors().subscribe();
    this.SharedStoreErrorService.handleOtpErrors().subscribe();
    this.doctorExceptionService.handleErrors().subscribe()
  }
}
