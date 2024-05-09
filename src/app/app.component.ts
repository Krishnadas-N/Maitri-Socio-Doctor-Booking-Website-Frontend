import { AfterViewInit, Component, OnInit, Renderer2, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserExceptionService } from './core/User/Services/exception-service/exception.service'; 
import { SharedStoreExceptionService } from './store/sharedStore/sharedStoreServices/sharedStoreException.service';
import { DoctorExceptionService } from './core/Doctor/Services/exception-service/exception.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSnackBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Maitri-Frontend';
  constructor(
    private userExceptionService: UserExceptionService,
    private SharedStoreErrorService: SharedStoreExceptionService,
    private doctorExceptionService: DoctorExceptionService
  ) {
 
    this.userExceptionService.handleErrors().subscribe();
    this.SharedStoreErrorService.handleOtpErrors().subscribe();
    this.doctorExceptionService.handleErrors().subscribe();
    this.SharedStoreErrorService.handleFeedErrors().subscribe();
  }

  ngOnInit(): void {

  }
}
