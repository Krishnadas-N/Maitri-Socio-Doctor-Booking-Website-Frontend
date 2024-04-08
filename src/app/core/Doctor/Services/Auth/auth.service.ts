import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ConsultationRegistrationFormModel, Education, ProfessionalRegistrationFormModel, RegistrationFormModel } from '../../models/registration.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly doctorUrl = 'http://localhost:3000/api/doctors';
  private readonly otpUrl = 'http://localhost:3000/api/otp'
  constructor(private http:HttpClient) { }

  registerBasic(doctorData:RegistrationFormModel):Observable<any>{
    return this.http.post<any>(`${this.doctorUrl}/register/basic-info`,doctorData).pipe(catchError(this.handleError));
  }

  registerVerify(otp:string,id:number):Observable<any> {
  	return this.http.post<any>(`${this.otpUrl}/verify?otp=${otp}&id=${id}`,{otp}).pipe(catchError(this.handleError));
  }

  registerProfessional(doctorData: ProfessionalRegistrationFormModel): Observable<any> {
    console.log("Logging from registerProfessional Service", doctorData);
    const formData = new FormData();
    formData.append('address.street', doctorData.address.street);
    formData.append('address.city', doctorData.address.city);
    formData.append('address.zipcode', doctorData.address.zipcode);
    formData.append('address.country', doctorData.address.country);
  
    formData.append('specialization', doctorData.specialization);
    formData.append('experience', doctorData.experience);
  
    doctorData.education.forEach((education, index) => {
      formData.append(`education[${index}].degree`, education.degree);
      formData.append(`education[${index}].institution`, education.institution);
      formData.append(`education[${index}].year`, education.year);
    });
  
    doctorData.certifications.forEach((certification, index) => {
      console.log(certification);
      
      formData.append(`certifications`, certification);
    });
  
    doctorData.languages.forEach((language, index) => {
      formData.append(`languages[${index}]`, language);
    });
  
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    console.log(formData.get('certifications'));
    return this.http.post<any>(`${this.doctorUrl}/complete-professional-info`, formData).pipe(catchError(this.handleError));
  }
  
  

  registerAdditional(doctorData:ConsultationRegistrationFormModel):Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<any>(`${this.doctorUrl}/complete-additional-info`,doctorData,{headers:headers}).pipe(catchError(this.handleError));
  }

  resendOtp():Observable<any>{
  	return this.http.get<any>(`${this.doctorUrl}/resend`);
  }

  login(email:string,password:string):Observable<any>{
    return this.http.post<any>(`${this.doctorUrl}/login`,{email,password}).pipe(catchError(this.handleError));
  }
    

  setAuthToken(token: string,nameOfToken:string): void {
    localStorage.setItem(nameOfToken, token);
  }

  getAuthToken(nameOfToken:string): string | null {
    return localStorage.getItem(nameOfToken); 
  }

  logout(nameOfToken:string): void {
    localStorage.removeItem(nameOfToken); 
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
