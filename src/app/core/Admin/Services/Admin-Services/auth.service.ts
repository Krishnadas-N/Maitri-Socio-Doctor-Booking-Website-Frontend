import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:3000/api/admin'; // Replace 'your_api_url' with your actual API URL

  constructor(private http: HttpClient) {}



  getAdmins(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admins`)
  }

  addAdmin(admin: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admins`, admin)
  }

  login(email: string, password: string): Observable<any> {
    console.log( email, password);
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
  }
}
