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
    return this.http.post<User>(`${this.baseUrl}/login`, loginData)
      .pipe(
        map((user) => user),
        catchError(this.handleError) 
      );
  }

  register(user:User,password:string,confirmPassword:string):Observable<any> {
    const userData ={...user, password, confirmPassword};
    return this.http.post<any>(`${this.baseUrl}/register`, userData).pipe(catchError(this.handleError));
  }

  getCurrentUser(token?: string): Observable<User | null> {
    return this.http.post<any>(`${this.baseUrl}/register`, token).pipe(catchError(this.handleError));
    }  

    

  
  getAllUsers(page: number = 1, pageSize: number = 10, searchQuery: string = ''): Observable<any> {
    const queryParams = `page=${page}&pageSize=${pageSize}&searchQuery=${searchQuery}`;
    return this.http.get<any>(`${this.baseUrl}/get-Users?${queryParams}`).pipe(catchError(this.handleError));
  }

  blockUser(id:string):Observable<any>{
    return this.http.patch(`${this.baseUrl}/change-status/${id}`,{}).pipe(catchError(this.handleError));
  }

  getUserById(id:string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/get-byId/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.log(error);
    let errorMessage = '';
  
    if (error.error && error.error.error && error.error.error.message) {
      errorMessage = `Error: ${error.status}\t ${error.error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    
    return throwError(errorMessage);
  }
}
