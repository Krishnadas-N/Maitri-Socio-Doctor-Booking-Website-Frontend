import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AdminModel } from '../../../../store/Admin/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:3000/api/admin'; // Replace 'your_api_url' with your actual API URL

  constructor(private http: HttpClient) {}

  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);
    return throwError('Something went wrong, please try again later.');
  }

  getAdmins(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admins`).pipe(
      catchError(this.handleError)
    );
  }

  addAdmin(admin: AdminModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admins`, admin).pipe(
      catchError(this.handleError)
    );
  }

  login(email: string, password: string): Observable<any> {
    console.log( email, password);
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
  }
}
