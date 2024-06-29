import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SuccessResponse } from '../../Models/api-request-response.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private userUrl = environment.UserServiceUrl;
  private DoctorUrl = environment.DoctorServiceUrl;
  constructor(private http: HttpClient) {}
  getSimilarProfiles(specializationId: string): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(
      `${this.DoctorUrl}/get-similar-profiles/${specializationId}`
    );
  }

  toggleFollowDoctors(doctorId: string): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(`${this.DoctorUrl}/toggle-follow/${doctorId}`);
  }

  addReview(
    rating: number,
    review: string,
    appointMentId: string
  ): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>(
      `${this.DoctorUrl}/add-review-rating/${appointMentId}`,
      { rating, review }
    );
  }

  getReviews(doctorId: string): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(`${this.DoctorUrl}/get-reviews-doctor/${doctorId}`);
  }
}

