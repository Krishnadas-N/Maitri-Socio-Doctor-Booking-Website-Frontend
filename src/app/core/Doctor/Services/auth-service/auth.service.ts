import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ConsultationRegistrationFormModel, Education, ProfessionalRegistrationFormModel, RegistrationFormModel } from '../../models/registration.model';
import { catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly doctorUrl = 'http://localhost:3000/api/doctors';
  private readonly otpUrl = 'http://localhost:3000/api/otp'
  constructor(private http:HttpClient) { }

  registerBasic(doctorData:RegistrationFormModel):Observable<any>{
    return this.http.post<any>(`${this.doctorUrl}/register/basic-info`,doctorData);
  }

  registerVerify(otp:string,id:number):Observable<any> {
  	return this.http.post<any>(`${this.otpUrl}/verify?otp=${otp}&id=${id}`,{otp});
  }

  registerProfessional(doctorData: ProfessionalRegistrationFormModel): Observable<any> {
    console.log("Logging from registerProfessional Service", doctorData);
    const formData = new FormData();
    formData.append('address[state]', doctorData.address.state);
    formData.append('address[city]', doctorData.address.city);
    formData.append('address[country]', doctorData.address.country);
    formData.append('address[zipcode]', doctorData.address.zipcode);
    formData.append('specialization', doctorData.specialization);
    formData.append('experience', doctorData.experience);
    doctorData.education.forEach((education: any, index: number) => {
      formData.append(`education[${index}][degree]`, education.degree);
      formData.append(`education[${index}][institution]`, education.institution);
      formData.append(`education[${index}][year]`, education.year);
  }); 
  if (doctorData.languages) {
    doctorData.languages.forEach((language: string) => formData.append('languages[]', language));
  }

    if( doctorData.certifications){ 
      doctorData.certifications.forEach((file:any) => formData.append('certifications', file));
    }
    
   console.log("From Data iss",formData);
    
    return this.http.post<any>(`${this.doctorUrl}/complete-professional-info`, formData);
  }
  
  

  registerAdditional(doctorData:ConsultationRegistrationFormModel):Observable<any>{
    console.log(doctorData);
    return this.http.post<any>(`${this.doctorUrl}/complete-additional-info`,doctorData);
  }

  addProfilePic(imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('profilePic', imageFile);

    return this.http.patch(`${this.doctorUrl}/change-profile-pic`, formData);
  }

  resendOtp():Observable<any>{
  	return this.http.get<any>(`${this.doctorUrl}/resend`);
  }

  login(email:string,password:string):Observable<any>{
    return this.http.post<any>(`${this.doctorUrl}/login`,{email,password});
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
  

}
