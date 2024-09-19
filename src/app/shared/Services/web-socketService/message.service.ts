import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Observer } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { SuccessResponse } from '../../Models/api-request-response.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private apiUrl = environment.ChatService;
  constructor(private http: HttpClient) {}

  getConversationId(userId: string, appoinmentId: string): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(
      `${this.apiUrl}/get-conversationId/${userId}/${appoinmentId}`
    );
  }

  getConversationDetails(convId: string): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(`${this.apiUrl}/get-conversation/${convId}`);
  }

  getChatsOfUser(): Observable<SuccessResponse> {
    return this.http.get<SuccessResponse>(`${this.apiUrl}/chats`);
  }

  toggleConsultation(conversationId: string): Observable<SuccessResponse> {
    return this.http.put<SuccessResponse>(
      `${this.apiUrl}/toggle-conversation/${conversationId}`,
      {}
    );
  }
}
