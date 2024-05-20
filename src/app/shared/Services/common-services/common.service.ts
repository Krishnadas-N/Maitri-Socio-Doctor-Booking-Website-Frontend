import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private userUrl = environment.UserServiceUrl;
  private DoctorUrl = environment.DoctorServiceUrl;
constructor(private http:HttpClient) { }
  getSimilarProfiles(specializationId:string):Observable<any>{
      return this.http.get(`${this.DoctorUrl}/get-similar-profiles/${specializationId}`)
  }

  toggleFollowDoctors(doctorId:string):Observable<any>{
    return this.http.get(`${this.DoctorUrl}/toggle-follow/${doctorId}`)
}


    addReview(rating:number,review:string,appointMentId:string): Observable<any>{
      return this.http.post(`${this.DoctorUrl}/add-review-rating/${appointMentId}`,{rating,review})
    }

    getReviews(doctorId:string): Observable<any>{
     return this.http.get(`${this.DoctorUrl}/get-reviews-doctor/${doctorId}`)
    }

   
  
}
