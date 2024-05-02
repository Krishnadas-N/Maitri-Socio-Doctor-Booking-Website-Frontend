import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:3000/api/chat'
  constructor(private http:HttpClient){}

  getConversationId(userId:string):Observable<any>{
   return this.http.get<any>(`${this.apiUrl}/get-conversationId/${userId}`)
  }

  getConversationDetails(convId:string):Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/get-conversation/${convId}`);
   }
}
