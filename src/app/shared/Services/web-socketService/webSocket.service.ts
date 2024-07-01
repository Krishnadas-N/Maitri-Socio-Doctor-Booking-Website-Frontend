import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private readonly URL = environment.SOCKET_URL;
  private webSocket!: Socket;
  private token: string | null = null;

  constructor() {}

  public setToken(token: string): void {
    this.token = token;
    this.connect();
  }

  private connect(): void {
    if (this.token) {
      this.webSocket = new Socket({
        url: `${this.URL}/chats`,
        options: {
          transports: ['polling', 'websocket', 'webtransport'], // Optional: specify transports
          extraHeaders: {
            Authorization: `Bearer ${this.token}`, // Adjust based on storage method
          },
        },
      });

      this.webSocket.on('connect_error', (error: any) => {
        console.error('Error connecting to Socket.IO server:', error);
        throw new Error('Connection failed'); // Throw an error for handling
      });
    } else {
      console.error('Missing JWT token for Socket.IO connection');
    }
  }

  on(eventName: string, callback: Function): void {
    if (this.webSocket) {
      this.webSocket.on(eventName, callback);
    }
  }

  sendMessage(
    eventName: string,
    senderId: string,
    recipientId: string,
    conversationId: string,
    message: string,
    userType: string
  ) {
    const messageData = {
      senderId,
      recipientId,
      conversationId,
      message,
      userType,
    };
    console.log('messageData', eventName, messageData);
    if (this.webSocket) {
      this.webSocket.emit(eventName, messageData);
    } else {
      console.error('WebSocket not connected, cannot send message');
    }
  }

  emitGetMessages(convid: string): Observable<any> {
    return this.webSocket.emit('getMessages', convid);
  }

  getChats(eventName: string): Observable<any> {
    return this.webSocket.fromEvent(eventName);
  }

  getnewMessages() {
    return new Observable((observer) => {
      this.webSocket.on('new message', (message: any) => {
        observer.next(message);
      });
    });
  }

  getMessages() {
    let observable = new Observable<any[]>((observer) => {
      this.webSocket.on('get-messages', (data: any) => {
        console.log('get-messages', data);
        observer.next(data);
      });
      return () => {
        this.webSocket.disconnect();
      };
    });
    return observable;
  }

  addUser(userId: string): void {
    console.log('Current user added to scoker', userId);
    this.webSocket.emit('add users', userId);
  }

  getError(): Observable<any> {
    return new Observable((observer) => {
      this.webSocket.on('error', (error: any) => {
        observer.next(error);
      });
    });
  }

  sendConsultationLink(userId: string, consultationLink: string) {
    this.webSocket.emit('consultation-link', { userId, consultationLink });
  }

  receiveConsultationLink() {
    return this.webSocket.fromEvent<any>('consultation-link');
  }

  emitOpenRatingModal(appointmentId: string, userId: string) {
    this.webSocket.emit('open_rating_modal', { appointmentId, userId });
  }

  getRatingModalOpen(): Observable<any> {
    return this.webSocket.fromEvent('open_rating_modal');
  }

  emitCloseConversation(
    appointmentId: string,
    userId: string,
    status: boolean
  ) {
    this.webSocket.emit('toggle consultation', {
      appointmentId,
      userId,
      status,
    });
  }
  getCloseConversation(): Observable<any> {
    return this.webSocket.fromEvent('toggle consultation');
  }
  disconnectSocket() {
    if (this.webSocket) {
      this.webSocket.disconnect();
    }
  }
}

// return this.webSocket.fromEvent<any[]>('getMessages',convId)
//       .pipe(
//         tap((data) => console.log(`Received getMessages: ${JSON.stringify(data)}`)),
//         catchError(error => throwError(error)) // Handle errors in the observable
//       );
//   }
