import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private readonly URL = 'http://localhost:3000';
  private webSocket: Socket;
  constructor() {
    this.webSocket = new Socket({
      url: `${this.URL}/chat`,
      options: {},
     });  
  }

  on(eventName: string, callback: Function): void {
    if (this.webSocket) {
      this.webSocket.on(eventName, callback);
    }
  }

  sendMessage(eventName: string, senderId: string, recipientId: string, conversationId: string, message: string) {
    const messageData = {
      senderId: senderId,
      recipientId: recipientId,
      conversationId: conversationId,
      message: message
    };
    this.webSocket.emit(eventName, messageData);
  }

  emtiGetchat(eventName:string):Observable<any>{
    return  this.webSocket.emit(eventName)
        
  }
  getChats(eventName:string):Observable<any>{
    return  this.webSocket.fromEvent(eventName)
                         .pipe(tap((data)=> console.log(`Received ${eventName}: ${JSON.stringify(data)}`)));
  }


  disconnectSocket() {
    this.webSocket.disconnect();
   }
}
