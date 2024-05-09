import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from '../../../store/User/user.model';
import { FindDoctorsRequest } from '../../../shared/Models/userSide.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.UserServiceUrl;
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<User>(`${this.baseUrl}/login`, loginData);
  }

  register(
    user: User,
    password: string,
    confirmPassword: string
  ): Observable<any> {
    const userData = { ...user, password, confirmPassword };
    return this.http.post<any>(`${this.baseUrl}/register`, userData);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/profile`);
  }

  getAllUsers(
    page: number = 1,
    pageSize: number = 10,
    searchQuery: string = ''
  ): Observable<any> {
    const queryParams = `page=${page}&pageSize=${pageSize}&searchQuery=${searchQuery}`;
    return this.http.get<any>(`${this.baseUrl}/get-Users?${queryParams}`);
  }

  blockUser(id: string): Observable<any> {
    return this.http.patch(`${this.baseUrl}/change-status/${id}`, {});
  }

  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-byId/${id}`);
  }

  editUserProfile(userProfile: Partial<User>): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/edit-profile`, userProfile);
  }

  changeProfilePic(formData: FormData): Observable<any> {
    console.log(formData.get('profilePic'));
    return this.http.patch<any>(`${this.baseUrl}/change-profilePic`, formData);
  }

  changePassword() {
    return this.http.get<any>(`${this.baseUrl}/change-password`, {});
  }

  saveNewPassword(token: string, password: string, confirmPassword: string) {
    return this.http.post<any>(`${this.baseUrl}/reset-password/${token}`, {
      newPassword: password,
      confirmNewPassword: confirmPassword,
    });
  }

  addInterestedDoctor(doctorId: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addToInterest/${doctorId}`, {});
  }

  getInterestedDoctors(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-doctor-interests`);
  }
  removeFromInterestedDoctors(doctorId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/removeInterest/${doctorId}`);
  }
  saveAppointment(appointmentDetails: any, doctorId: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/make-appointment/${doctorId}`, {
      appoinmentData: appointmentDetails,
    });
  }

  GetAppointmentDetails(appoinmentId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-appoinment/${appoinmentId}`);
  }
  makePayment(paymentMethod: string, appoinmentId: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/make-payment/${appoinmentId}`, {
      paymentMethod,
    });
  }

  verifyPayment(
    orderId: string,
    paymentId: string,
    signature: string,
    appoinmentId: string
  ): Observable<any> {
    const data = {
      orderId,
      paymentId,
      razorpaySignature: signature,
    };
    return this.http.post<any>(
      `${this.baseUrl}/verify-payment/${appoinmentId}`,
      data
    );
  }

  getUserAppoinments(page: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-appoinments?page=${page}&pageSize=${pageSize}`);
  }

  changeAppoinmentStatus(id: string, status: string): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}/change-appoinment-status/${id}`,
      { status }
    );
  }

  getBookedSlots(doctorId:string,date:Date) :Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/get-booked-slots/${doctorId}?date=${date}`);
  }

  getAvailableDoctors(params: any): Observable<any> {
    console.log("request sent to server to get data ", params);
    return this.http.get<any>(`${this.baseUrl}/get-doctors`, { params: params });
  }
  
  getWalletOfUser(): Observable<any>{
   return this.http.get<any>(`${this.baseUrl}/get-wallet`)
  }

  uploadMedicalRecords(file: File,title:string,description: string):Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);
    return this.http.post<any>(`${this.baseUrl}/medical-records`,formData)
   }

   getMedicalRecords():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/medical-records`)
   }

   revokeRefreshToken(token:string):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/refresh-token`,{refreshToken:token})
   }

   getNotifications():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/get-notifications`)
   }
}
