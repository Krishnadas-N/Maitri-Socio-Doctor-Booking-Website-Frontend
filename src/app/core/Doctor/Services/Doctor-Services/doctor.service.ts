import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Doctor } from '../../../../store/Doctor/doctor.model'; 
import { FindDoctorsRequest } from '../../../../shared/Models/userSide.model';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = environment.DoctorServiceUrl;

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
    const url = `${this.apiUrl}/get-currentDoctor`;
    return this.http.get<any>(url);
  }

  saveSlots(selectedSlots: { date: Date; slots: string[]; }[]): Observable<any>{
    console.log(selectedSlots);
    return this.http.post<any>(`${this.apiUrl}/save-slots`,{ selectedSlots });
  }
 
  getDoctorAppoinments(page: number, pageSize: number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/get-doctor-appoinments?page=${page}&pageSize=${pageSize}`);
  }

  changeStatus(status:string,appoinmentId:string):Observable<any>{
    return this.http.put(`${this.apiUrl}/change-appoinmentStatus/${appoinmentId}`,{status})
  }

  getNotificationsOfDoctor():Observable<any>{
    return this.http.get(`${this.apiUrl}/get-notification`)
  }

  savePrescription(data:{title:string,prescription:File},appoinmentId:string):Observable<any>{
    console.log("data",data,"appoinmentId",appoinmentId)
    const formData = new FormData();
    formData.append('title',data.title);
    formData.append('prescription',data.prescription)
    return this.http.post(`${this.apiUrl}/add-prescritption/${appoinmentId}`,formData)
  }

  changeCancellationRequests(appoinmentId:string,status:'Accepted'|'Rejected'):Observable<any>{
    return this.http.put(`${this.apiUrl}/change-cancel-request-status/${appoinmentId}`,{status})
  }

  getWalletOfDoctor(page: number, pageSize: number):Observable<any>{
    return this.http.get(`${this.apiUrl}/get-wallet?page=${page}&pageSize=${pageSize}`)
  }

  getTransactionDetails():Observable<any>{
    return this.http.get(`${this.apiUrl}/get-transaction-graphdetails`)
  }

  getDashboardDetails():Observable<any>{
    return this.http.get(`${this.apiUrl}/get-doctor-dashboarddetails`)
  }
}