import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from '../../../store/User/user.model';
import { FindDoctorsRequest } from '../../../shared/Models/userSide.model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private baseUrl = 'http://localhost:3000/api/users';
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

  getAvailableDoctors(request:FindDoctorsRequest): Observable<any> {
    console.log("request sent to server to get data ",request)
    const params = this.constructQueryParams(request);
    return this.http.get<any>(`${this.baseUrl}/get-doctors`,{params});
  }

  private constructQueryParams(request: FindDoctorsRequest): any {
    const queryParams: any = {
      searchQuery: request.searchQuery,
      currentPage: request.currentPage.toString(),
      pageSize: request.pageSize.toString(),
      sortOption: request.sortOption
    };
    if(request.filters){
    for (const category of Object.keys(request.filters)) {
      queryParams[category] = request.filters[category].join(',');
    }
    }
    console.log("queryParams",queryParams)
    return queryParams;
  }
}
