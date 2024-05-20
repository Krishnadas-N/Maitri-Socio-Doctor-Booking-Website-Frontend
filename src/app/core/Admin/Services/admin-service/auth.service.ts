import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = environment.AdminServiceUrl; 

  constructor(private http: HttpClient) {}



  getAdmins(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admins`)
  }

  addAdmin(admin: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admins`, admin)
  }

  login(email: string, password: string): Observable<any> {
    console.log( email, password);
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  getDoctors(page: number=1, pageSize: number=10, searchQuery: string=''): Observable<any>{
    let url = `${this.apiUrl}/get-doctors`;
    if (page && pageSize) {
      url += `?page=${page}&pageSize=${pageSize}`;
      if (searchQuery) {
        url += `&search=${searchQuery}`;
      }
    }
    return this.http.get(url)
  }

  blockDoctor(id: string): Observable<any> {
    const url = `${this.apiUrl}/change-status/${id}`;
    return this.http.put<any>(url, null);
  }
  getAllUsers(
    page: number = 1,
    pageSize: number = 10,
    searchQuery: string = ''
  ): Observable<any> {
    const queryParams = `page=${page}&pageSize=${pageSize}&searchQuery=${searchQuery}`;
    return this.http.get<any>(`${this.apiUrl}/get-Users?${queryParams}`);
  }
  
  blockUser(id: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/change-status/${id}`, {});
  }

  getSpecializedDoctors(specId:string,searchQuery?:string): Observable<any> {
        return this.http.get(`${this.apiUrl}/get-specialized-doctors/${specId}?search=${searchQuery}`)
  }

  getDashboardDetails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-admin-dashboard`)
  }
  
  getUsersAndDoctorsDashBoardDetails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dashboard-users-doctors-summary`)
  }
  
  getAppoinmentDetails(currentPage:number=1,pageSize:number=5,searchQuery:string=''): Observable<any>{
    const queryParams = `page=${currentPage}&pageSize=${pageSize}&searchQuery=${searchQuery}`;
    return this.http.get(`${this.apiUrl}/get-appointment-details?${queryParams}`);
  }
  

  getAdminTransactionDetails():Observable<any>{
    return this.http.get(`${this.apiUrl}/get-transaction-graphdetails`)
  }


  getAdminWalletDetails(page: number, pageSize: number):Observable<any>{
    return this.http.get(`${this.apiUrl}/get-admin-wallet?page=${page}&pageSize=${pageSize}`)
  }
  
  getAppoinmentDetailOfanyAppointment(appointMentId:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/get-appointment/${appointMentId}`)
  }

  getReviews(currentPage:number,pageSize:number,searchQuery:string):Observable<any>{
    const queryParams = `page=${currentPage}&pageSize=${pageSize}&searchQuery=${searchQuery}`;
    return this.http.get(`${this.apiUrl}/get-reviews?${queryParams}`)
  }

  deleteReview(revId:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete-review/${revId}`)
  }

  getNotification() :Observable<any>{
      return this.http.get(`${this.apiUrl}/get-notifications`)
    }
  
}
