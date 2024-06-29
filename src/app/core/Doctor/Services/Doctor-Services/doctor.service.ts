import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../../../../store/Doctor/doctor.model';
import { FindDoctorsRequest } from '../../../../shared/Models/user-side.model';
import { environment } from '../../../../../environments/environment.development';
import { SuccessResponse } from '../../../../shared/Models/api-request-response.model';
import { doctorAppoinmentsResponseModel } from '../../models/doctor.models';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private apiUrl = environment.DoctorServiceUrl;

  constructor(private http: HttpClient) {}

  getDoctors(
    page: number = 1,
    pageSize: number = 10,
    searchQuery: string = ''
  ): Observable<SuccessResponse> {
    let url = `${this.apiUrl}/get-doctors`;
    if (page && pageSize) {
      url += `?page=${page}&pageSize=${pageSize}`;
      if (searchQuery) {
        url += `&search=${searchQuery}`;
      }
    }
    return this.http.get<SuccessResponse>(url);
  }

  getDoctorById(id: string): Observable<SuccessResponse<{ doctor: Doctor }>> {
    const url = `${this.apiUrl}/get-doctor/${id}`;
    return this.http.get<SuccessResponse<{ doctor: Doctor }>>(url);
  }

  verifyProfileDoctor(id: string): Observable<SuccessResponse<Doctor>> {
    const url = `${this.apiUrl}/verify-profile/${id}`;
    return this.http.patch<SuccessResponse<Doctor>>(url, null);
  }

  getDoctor(): Observable<SuccessResponse<Doctor>> {
    const url = `${this.apiUrl}/get-currentDoctor`;
    return this.http.get<SuccessResponse<Doctor>>(url);
  }

  saveSlots(
    selectedSlots: { date: Date; slots: string[] }[]
  ): Observable<SuccessResponse<Doctor>> {
    console.log(selectedSlots);
    return this.http.post<SuccessResponse<Doctor>>(
      `${this.apiUrl}/save-slots`,
      { selectedSlots }
    );
  }

  getDoctorAppoinments(
    page: number,
    searchQuery: string,
    pageSize: number
  ): Observable<SuccessResponse<doctorAppoinmentsResponseModel>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('searchQuery', searchQuery);

    return this.http.get<SuccessResponse<doctorAppoinmentsResponseModel>>(
      `${this.apiUrl}/get-doctor-appoinments`,
      { params }
    );
  }

  changeStatus(status: string, appoinmentId: string): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/change-appoinmentStatus/${appoinmentId}`,
      { status }
    );
  }

  getNotificationsOfDoctor(): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(`${this.apiUrl}/get-notification`);
  }

  savePrescription(
    data: { title: string; prescription: File },
    appoinmentId: string
  ): Observable<SuccessResponse> {
    console.log('data', data, 'appoinmentId', appoinmentId);
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('prescription', data.prescription);
    return this.http.post<SuccessResponse>(
      `${this.apiUrl}/add-prescritption/${appoinmentId}`,
      formData
    );
  }

  changeCancellationRequests(
    appoinmentId: string,
    status: 'Accepted' | 'Rejected'
  ): Observable<SuccessResponse> {
    return this.http.put<SuccessResponse>(
      `${this.apiUrl}/change-cancel-request-status/${appoinmentId}`,
      { status }
    );
  }

  getWalletOfDoctor(
    page: number,
    pageSize: number
  ): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(
      `${this.apiUrl}/get-wallet?page=${page}&pageSize=${pageSize}`
    );
  }

  getTransactionDetails(): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(
      `${this.apiUrl}/get-transaction-graphdetails`
    );
  }

  getDashboardDetails(): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(
      `${this.apiUrl}/get-doctor-dashboarddetails`
    );
  }
  getDoctorStatus(): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(
      `${this.apiUrl}/get-doctor-cuurentStatus`
    );
  }

  changeProfilePic(imageFile: File): Observable<SuccessResponse<string>> {
    const formData = new FormData();
    formData.append('profilePic', imageFile);

    return this.http.patch<SuccessResponse<string>>(
      `${this.apiUrl}/change-profile-pic`,
      formData
    );
  }

  editDoctorDetails(doctoData: Partial<Doctor>): Observable<SuccessResponse> {
    return this.http.put<SuccessResponse>(
      `${this.apiUrl}/edit-doctor-profile`,
      doctoData
    );
  }
}
