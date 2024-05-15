import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Observer } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = environment.ChatService;
  constructor(private http:HttpClient){}

  getConversationId(userId:string,appoinmentId:string):Observable<any>{
   return this.http.get<any>(`${this.apiUrl}/get-conversationId/${userId}/${appoinmentId}`)
  }

  getConversationDetails(convId:string):Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/get-conversation/${convId}`);
   }

  getChatsOfUSer():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/chats`);
 }

 toggleConsultation(conversationId:string):Observable<any>{
   return this.http.put(`${this.apiUrl}/toggle-conversation/${conversationId}`,{})
 }
}
