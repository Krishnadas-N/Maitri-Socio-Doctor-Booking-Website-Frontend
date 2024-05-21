declare var google:any;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { User } from '../../../store/User/user.model';
import { FindDoctorsRequest } from '../../../shared/Models/userSide.model';
import { environment } from '../../../../environments/environment.development';

interface UserSocialRegister{
  firstName:string,
  lastName:string,
  username:string,
  email:string,
  gender:string,
  dateOfBirth:string,
  profilePic?:string
}
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
  loginWithGoogle(credential: string):Observable<any>  {
    const url = `${this.baseUrl}/social-login`;
    const body = { credential };
    const headers = new HttpHeaders({ 'X-Social-Login': 'google' });

   return this.http.post(url, body, { headers })
  }

  register(
    user: User,
    password: string,
    confirmPassword: string
  ): Observable<any> {
    const userData = { ...user, password, confirmPassword };
    return this.http.post<any>(`${this.baseUrl}/register`, userData);
  }

  registerWithGoogle(user:UserSocialRegister): Observable<any> {
      return this.http.post(`${this.baseUrl}/social-register`,user)
  }
  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/profile`);
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
  makePayment(paymentMethod: string, appoinmentId: string,token?:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/make-payment/${appoinmentId}`, {
      paymentMethod,
      token:token?token:null
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

  requestTochangeAppoinmentStatus(id: string,reason:string,status: string): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}/cancel-appoinment/${id}`,
      { reason }
    );
  }

  getBookedSlots(doctorId:string,date:Date) :Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/get-booked-slots/${doctorId}?date=${date}`);
  }

  getAvailableDoctors(params: any): Observable<any> {
    console.log("request sent to server to get data ", params);
    return this.http.get<any>(`${this.baseUrl}/get-doctors`, { params: params });
  }
  
  getWalletOfUser(page: number, pageSize: number): Observable<any>{
   return this.http.get<any>(`${this.baseUrl}/get-wallet?page=${page}&pageSize=${pageSize}`)
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

   deleteMedicalRecord(medicalrecordId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete-medical-record/${medicalrecordId}`);
  }

  getPrescritpionsOfUser():Observable<any>{
    return this.http.get(`${this.baseUrl}/get-userPrescriptions`)
  }

   signOut(){
    google.accounts.id.disableAutoSelect();
   }
   
   submitSurvey(surveyData:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/submit-survey`,surveyData)
  }
  
  getWalletBalance():Observable<any>{
    return this.http.get(`${this.baseUrl}/get-wallet-balance`)
  }

  getDoctorsByCategory():Observable<any>{
    return this.http.get(`${this.baseUrl}/get-category-doctors`)
  }
}
