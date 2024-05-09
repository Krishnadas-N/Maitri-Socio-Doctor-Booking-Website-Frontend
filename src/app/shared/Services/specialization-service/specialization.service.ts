import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorSpecialization } from '../../../core/Doctor/models/doctor-specialization';
@Injectable({
  providedIn: 'root'
})
export class SpecializationService {
  private apiUrl = 'http://localhost:3000/api/spec';
  constructor(private http: HttpClient) { }
  creeateDoctorCategory(doctorCategory: {name:string,descritption:string}): Observable<DoctorSpecialization> {
    return this.http.post<DoctorSpecialization>(this.apiUrl, doctorCategory);
  }

  getAllDoctorCategories(): Observable<DoctorSpecialization[]> {
    return this.http.get<DoctorSpecialization[]>(this.apiUrl);
  }

  updateDoctorCategory(doctorCategoryId: string, doctorCategory: DoctorSpecialization): Observable<DoctorSpecialization> {
    const url = `${this.apiUrl}/updateSpec/${doctorCategoryId}`;
    return this.http.put<DoctorSpecialization>(url, doctorCategory);
  }

  changeStatusOfCategory(doctorCategoryId: string): Observable<DoctorSpecialization> {
    return this.http.patch<DoctorSpecialization>(`${this.apiUrl}/change-status/${doctorCategoryId}`, null);
  }
  deleteDoctorCategory(doctorCategoryId: string): Observable<void> {
    const url = `${this.apiUrl}/${doctorCategoryId}`;
    return this.http.delete<void>(url);
  }
}
