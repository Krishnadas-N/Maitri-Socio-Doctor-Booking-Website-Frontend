declare var google: any;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { User } from '../../../store/User/user.model';
import { FindDoctorsRequest } from '../../../shared/Models/user-side.model';
import { environment } from '../../../../environments/environment.development';
import {
  GoogleCredentials,
  LoginData,
  registerData,
} from '../models/authentication.model';
import { SuccessResponse } from '../../../shared/Models/api-request-response.model';
import {
  CategoryOfDoctors,
  MedicalRecordModel,
  WalletDetails,
  UserData,
  AppointMentList,
  surveyResponse,
  InterestedDoctors,
  ListInterestedDoctors,
  doctorsResponseModel,
  CancelAppointmentResponse,
} from '../models/user.models';
import { AppointmentNotificationDTO } from '../../../shared/Models/notification.models';

interface UserSocialRegister {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  profilePic?: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.UserServiceUrl;
  constructor(private http: HttpClient) {}

  login(
    email: string,
    password: string
  ): Observable<SuccessResponse<LoginData>> {
    const loginData = { email, password };
    return this.http.post<SuccessResponse<LoginData>>(
      `${this.baseUrl}/login`,
      loginData
    );
  }
  loginWithGoogle(
    credential: GoogleCredentials
  ): Observable<SuccessResponse<LoginData>> {
    const headers = new HttpHeaders({ 'X-Social-Login': 'google' });
    return this.http.post<SuccessResponse<LoginData>>(
      `${this.baseUrl}/social-login`,
      credential,
      { headers }
    );
  }

  register(
    user: User,
    password: string,
    confirmPassword: string
  ): Observable<SuccessResponse<registerData>> {
    const userData = { ...user, password, confirmPassword };
    return this.http.post<SuccessResponse<registerData>>(
      `${this.baseUrl}/register`,
      userData
    );
  }

  getCurrentUser(): Observable<SuccessResponse<UserData>> {
    return this.http.get<SuccessResponse<UserData>>(`${this.baseUrl}/profile`);
  }

  blockUser(id: string): Observable<SuccessResponse<User>> {
    return this.http.patch<SuccessResponse<User>>(
      `${this.baseUrl}/change-status/${id}`,
      {}
    );
  }

  getUserById(id: string): Observable<SuccessResponse<UserData>> {
    return this.http.get<SuccessResponse<UserData>>(
      `${this.baseUrl}/get-byId/${id}`
    );
  }

  editUserProfile(
    userProfile: Partial<User>
  ): Observable<SuccessResponse<UserData>> {
    return this.http.put<SuccessResponse<UserData>>(
      `${this.baseUrl}/edit-profile`,
      userProfile
    );
  }

  changeProfilePic(formData: FormData): Observable<SuccessResponse<string>> {
    console.log(formData.get('profilePic'));
    return this.http.patch<SuccessResponse<string>>(
      `${this.baseUrl}/change-profilePic`,
      formData
    );
  }

  changePassword(): Observable<SuccessResponse<void>> {
    return this.http.get<SuccessResponse<void>>(
      `${this.baseUrl}/change-password`,
      {}
    );
  }

  saveNewPassword(token: string, password: string, confirmPassword: string) {
    return this.http.post<any>(`${this.baseUrl}/reset-password/${token}`, {
      newPassword: password,
      confirmNewPassword: confirmPassword,
    });
  }

  addInterestedDoctor(
    doctorId: string
  ): Observable<SuccessResponse<InterestedDoctors>> {
    return this.http.post<SuccessResponse<InterestedDoctors>>(
      `${this.baseUrl}/addToInterest/${doctorId}`,
      {}
    );
  }

  getInterestedDoctors(): Observable<SuccessResponse<ListInterestedDoctors>> {
    return this.http.get<SuccessResponse<ListInterestedDoctors>>(
      `${this.baseUrl}/get-doctor-interests`
    );
  }
  removeFromInterestedDoctors(
    doctorId: string
  ): Observable<SuccessResponse<void>> {
    return this.http.delete<SuccessResponse<void>>(
      `${this.baseUrl}/removeInterest/${doctorId}`
    );
  }
  saveAppointment(
    appointmentDetails: any,
    doctorId: string
  ): Observable<SuccessResponse<string>> {
    return this.http.post<SuccessResponse<string>>(
      `${this.baseUrl}/make-appointment/${doctorId}`,
      {
        appoinmentData: appointmentDetails,
      }
    );
  }

  GetAppointmentDetails(appoinmentId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-appoinment/${appoinmentId}`);
  }
  makePayment(
    paymentMethod: string,
    appoinmentId: string,
    token?: any
  ): Observable<
    SuccessResponse<{ responseId: string; keyId: string; amount: number }>
  > {
    return this.http.post<
      SuccessResponse<{ responseId: string; keyId: string; amount: number }>
    >(`${this.baseUrl}/make-payment/${appoinmentId}`, {
      paymentMethod,
      token: token ? token : null,
    });
  }

  verifyPayment(
    orderId: string,
    paymentId: string,
    signature: string,
    appoinmentId: string
  ): Observable<SuccessResponse<any>> {
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

  getUserAppoinments(
    page: number,
    pageSize: number
  ): Observable<SuccessResponse<AppointMentList>> {
    return this.http.get<SuccessResponse<AppointMentList>>(
      `${this.baseUrl}/get-appoinments?page=${page}&pageSize=${pageSize}`
    );
  }

  requestTochangeAppoinmentStatus(
    id: string,
    reason: string,
    status: string
  ): Observable<SuccessResponse<CancelAppointmentResponse>> {
    return this.http.put<SuccessResponse<CancelAppointmentResponse>>(
      `${this.baseUrl}/cancel-appoinment/${id}`,
      { reason }
    );
  }

  getBookedSlots(
    doctorId: string,
    date: Date
  ): Observable<SuccessResponse<string[]>> {
    return this.http.get<SuccessResponse<string[]>>(
      `${this.baseUrl}/get-booked-slots/${doctorId}?date=${date}`
    );
  }

  getAvailableDoctors(
    params: any
  ): Observable<SuccessResponse<doctorsResponseModel>> {
    console.log('request sent to server to get data ', params);
    return this.http.get<SuccessResponse<doctorsResponseModel>>(
      `${this.baseUrl}/get-doctors`,
      { params: params }
    );
  }

  getWalletOfUser(
    page: number,
    pageSize: number
  ): Observable<SuccessResponse<WalletDetails>> {
    return this.http.get<SuccessResponse<WalletDetails>>(
      `${this.baseUrl}/get-wallet?page=${page}&pageSize=${pageSize}`
    );
  }

  uploadMedicalRecords(
    file: File,
    title: string,
    description: string
  ): Observable<SuccessResponse<MedicalRecordModel>> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);
    return this.http.post<SuccessResponse<MedicalRecordModel>>(
      `${this.baseUrl}/medical-records`,
      formData
    );
  }

  getMedicalRecords(): Observable<SuccessResponse<MedicalRecordModel[]>> {
    return this.http.get<SuccessResponse<MedicalRecordModel[]>>(
      `${this.baseUrl}/medical-records`
    );
  }

  revokeRefreshToken(token: string): Observable<SuccessResponse<string>> {
    return this.http.post<SuccessResponse<string>>(
      `${this.baseUrl}/refresh-token`,
      { refreshToken: token }
    );
  }

  getNotifications(): Observable<
    SuccessResponse<AppointmentNotificationDTO[]>
  > {
    return this.http
      .get<SuccessResponse<AppointmentNotificationDTO[]>>(
        `${this.baseUrl}/get-notifications`
      )
      .pipe(tap((data) => console.log('Hello test type', data)));
  }

  deleteMedicalRecord(medicalrecordId: string): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}/delete-medical-record/${medicalrecordId}`
    );
  }

  getPrescritpionsOfUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-userPrescriptions`);
  }

  signOut() {
    google.accounts.id.disableAutoSelect();
  }

  submitSurvey(surveyData: any): Observable<SuccessResponse<surveyResponse>> {
    return this.http
      .post<SuccessResponse<surveyResponse>>(
        `${this.baseUrl}/submit-survey`,
        surveyData
      )
      .pipe(tap((data) => console.log('Data from submit surevy', data)));
  }

  getWalletBalance(): Observable<SuccessResponse<number>> {
    return this.http.get<SuccessResponse<number>>(
      `${this.baseUrl}/get-wallet-balance`
    );
  }

  getDoctorsByCategory(): Observable<SuccessResponse<CategoryOfDoctors>> {
    return this.http.get<SuccessResponse<CategoryOfDoctors>>(
      `${this.baseUrl}/get-category-doctors`
    );
  }
}
