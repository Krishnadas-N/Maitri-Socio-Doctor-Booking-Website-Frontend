import { Injectable } from '@angular/core';
import { AuthService } from '../../../shared/Services/auth-service/auth.service';
import { DoctorService } from './doctor-services/doctor.service';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckIsAuthenticatedService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ =this.isAuthenticatedSubject.asObservable()
  private isProfileComplete = false;
  constructor(private authService:AuthService,private doctoService:DoctorService) {}

  getDoctorStatus(){
    this.doctoService.getDoctor().pipe(
      tap(res=>{
        this.isProfileComplete = res.data.isProfileComplete;
        this.isAuthenticatedSubject.next(this.authService.isAuthenticated() && this.isProfileComplete)
      }),
      catchError(() => {
        this.isAuthenticatedSubject.next(false);
        return of(null);
      })
    ).subscribe();
  }
  checkAuthentication() {
    return this.authService.isAuthenticated() && this.isProfileComplete;
  }
}
