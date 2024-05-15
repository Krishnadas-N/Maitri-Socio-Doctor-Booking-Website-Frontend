import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OtpServiceService {
  private apiUrl = environment.OtpService;
  constructor(private http: HttpClient) { };
  
  verifyOtp(otp: string,section:string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/verify`, { otp ,section}).pipe(catchError(this.handleError));
  }

  resendOtp(token:string): Observable<any>{

    return this.http.post<any>(`${this.apiUrl}/resend`,{authToken:token}).pipe(catchError(this.handleError));
  }
  private handleError(error: any): Observable<never> {
    console.log(error);
    let errorMessage = '';
  
    if (error.error && error.error.error && error.error.error.message) {
      errorMessage = `Error: ${error.status}\t ${error.error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    
    return throwError(()=>new Error(errorMessage));
  }
}
