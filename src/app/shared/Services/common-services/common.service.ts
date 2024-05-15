import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private DoctorUrl = environment.DoctorServiceUrl;
constructor(private http:HttpClient) { }
  getSimilarProfiles(specializationId:string):Observable<any>{
      return this.http.get(`${this.DoctorUrl}/get-similar-profiles/${specializationId}`)
  }

  toggleFollowDoctors(doctorId:string):Observable<any>{
    return this.http.get(`${this.DoctorUrl}/toggle-follow/${doctorId}`)
}

}
