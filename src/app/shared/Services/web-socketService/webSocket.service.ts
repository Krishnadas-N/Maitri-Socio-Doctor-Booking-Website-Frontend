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
        url: this.URL as string,
        options: {
          transports: ['polling', 'websocket', 'webtransport'],
          extraHeaders: {
            Authorization: `Bearer ${this.token}`,
          },
        },
      });

      this.webSocket.on('connect_error', (error: any) => {
        console.error('Error connecting to Socket.IO server:', error);
        throw new Error('Connection failed');
      });

      this.webSocket.on('connect', () => {
        console.log('Connected to Socket.IO server 🎉');
      });
    } else {
      console.error('Missing JWT token for Socket.IO connection');
    }
  }

  public on(eventName: string, callback: Function): void {
    if (this.webSocket) {
      this.webSocket.on(eventName, callback);
    }
  }

  public sendMessage(
    eventName: string,
    senderId: string,
    recipientId: string,
    conversationId: string,
    message: string,
    userType: string
  ): void {
    const messageData = { senderId, recipientId, conversationId, message, userType };
    if (this.webSocket) {
      this.webSocket.emit(eventName, messageData);
    } else {
      console.error('WebSocket not connected, cannot send message');
    }
  }

  public emitGetMessages(conversationId: string): void {
    this.webSocket.emit('getMessages', conversationId);
  }

  public getChats(eventName: string): Observable<any> {
    return this.webSocket.fromEvent(eventName);
  }

  public getNewMessages(): Observable<any> {
    return new Observable((observer) => {
      this.webSocket.on('new message', (message: any) => {
        observer.next(message);
      });
    });
  }

  public getMessages(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      this.webSocket.on('get-messages', (data: any) => {
        observer.next(data);
      });
      return () => {
        this.webSocket.disconnect();
      };
    });
  }

  public addUser(userId: string): void {
    this.webSocket.emit('add user', userId);
  }

  public getError(): Observable<any> {
    return new Observable((observer) => {
      this.webSocket.on('error', (error: any) => {
        observer.next(error);
      });
    });
  }

  public sendConsultationLink(userId: string, consultationLink: string): void {
    this.webSocket.emit('consultation-link', { userId, consultationLink });
  }

  public receiveConsultationLink(): Observable<any> {
    return this.webSocket.fromEvent<any>('consultation-link');
  }

  public emitOpenRatingModal(appointmentId: string, userId: string): void {
    this.webSocket.emit('open_rating_modal', { appointmentId, userId });
  }

  public getRatingModalOpen(): Observable<any> {
    return this.webSocket.fromEvent('open_rating_modal');
  }

  public emitCloseConversation(appointmentId: string, userId: string, status: boolean): void {
    this.webSocket.emit('toggle consultation', { appointmentId, userId, status });
  }

  public getCloseConversation(): Observable<any> {
    return this.webSocket.fromEvent('toggle consultation');
  }

  public sendNotification(notificationId: string): void {
    this.webSocket.emit('notify', notificationId);
  }

  public listenForNotifications(): Observable<any> {
    return this.webSocket.fromEvent<any>('notification');
  }

  public disconnectSocket(): void {
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
