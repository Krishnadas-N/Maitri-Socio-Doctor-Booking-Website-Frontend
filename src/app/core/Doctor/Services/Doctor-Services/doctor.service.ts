import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Doctor } from '../../../../store/Doctor/doctor.model'; 

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:3000/api/doctors';

  constructor(private http: HttpClient) {}

  getDoctors(page: number=1, pageSize: number=10, searchQuery: string=''): Observable<any> {
    let url = `${this.apiUrl}/get-doctors`;
    if (page && pageSize) {
      url += `?page=${page}&pageSize=${pageSize}`;
      if (searchQuery) {
        url += `&search=${searchQuery}`;
      }
    }
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  getDoctorById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  blockDoctor(id: string): Observable<any> {
    const url = `${this.apiUrl}/change-status/${id}`;
    return this.http.put<any>(url, null).pipe(catchError(this.handleError));
  }

  verifyProfileDoctor(id: string): Observable<any> {
    const url = `${this.apiUrl}/verify-profile/${id}`;
    return this.http.put<any>(url, null).pipe(catchError(this.handleError));
  }

  getDoctor(): Observable<any> {
    const url = `${this.apiUrl}/`;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
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
    
    return throwError(errorMessage);
  }
}