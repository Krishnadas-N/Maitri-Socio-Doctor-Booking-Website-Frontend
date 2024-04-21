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
    return this.http.get<any>(url);
  }

  getDoctorById(id: string): Observable<any> {
    const url = `${this.apiUrl}/get-doctor/${id}`;
    return this.http.get<any>(url);
  }

  blockDoctor(id: string): Observable<any> {
    const url = `${this.apiUrl}/change-status/${id}`;
    return this.http.put<any>(url, null);
  }

  verifyProfileDoctor(id: string): Observable<any> {
    const url = `${this.apiUrl}/verify-profile/${id}`;
    return this.http.patch<any>(url, null);
  }

  getDoctor(): Observable<any> {
    const url = `${this.apiUrl}/get-currentDocotor`;
    return this.http.get<any>(url);
  }
 
}