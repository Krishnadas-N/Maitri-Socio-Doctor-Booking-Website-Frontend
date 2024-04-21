import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from '../../../store/User/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl = "http://localhost:3000/api/users";
  constructor(private http:HttpClient) { }

  login(email:string,password:string):Observable<any>{
    const loginData = { email, password }; 
    return this.http.post<User>(`${this.baseUrl}/login`, loginData);
  }

  register(user:User,password:string,confirmPassword:string):Observable<any> {
    const userData ={...user, password, confirmPassword};
    return this.http.post<any>(`${this.baseUrl}/register`, userData);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/profile`);
    }  

    

  
  getAllUsers(page: number = 1, pageSize: number = 10, searchQuery: string = ''): Observable<any> {
    const queryParams = `page=${page}&pageSize=${pageSize}&searchQuery=${searchQuery}`;
    return this.http.get<any>(`${this.baseUrl}/get-Users?${queryParams}`);
  }

  blockUser(id:string):Observable<any>{
    return this.http.patch(`${this.baseUrl}/change-status/${id}`,{});
  }

  getUserById(id:string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/get-byId/${id}`);
  }

  editUserProfile(userProfile: Partial<User>): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/edit-profile`, userProfile)
  }

  changeProfilePic(formData: FormData): Observable<any> {
    console.log(formData.get('profilePic'));
    return this.http.patch<any>(`${this.baseUrl}/change-profilePic`, formData);
  }

  changePassword(){
    return this.http.get<any>(`${this.baseUrl}/change-password`,{});
  }

  saveNewPassword(token:string,password:string,confirmPassword:string){
    return this.http.post<any>(`${this.baseUrl}/reset-password/${token}`,{newPassword:password,confirmNewPassword:confirmPassword});
  }
}
