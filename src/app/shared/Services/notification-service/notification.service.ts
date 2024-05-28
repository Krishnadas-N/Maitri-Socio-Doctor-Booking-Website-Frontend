import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { INotification } from '../../Models/notification.models';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
   constructor() { }
   private readonly URL = environment.SOCKET_URL;
   private webSocket!: Socket;
   private token: string | null =null;

   public setToken(token: string): void {
     this.token = token;
     this.connect();
   }

   private connect(): void {
     if (this.token) {
       this.webSocket = new Socket({
         url: `${this.URL}/api/notification`,
         options: {
           extraHeaders: {
                    Authorization:  `Bearer ${this.token}`
         },
         }
       });


       this.webSocket.on('connect_error', (error:any) => {
         console.error('Error connecting to Socket.IO server:', error);
         throw new Error('Connection failed');
       });
       this.webSocket.on('connect', () => {
        console.log('Connected to Socket.IO server😊🎉🌟👍🏽💡🔥🚀🎈🎊👏🏼🙌🏾👌🏻🌈🌺🌻🍀🍉🍕🍦🍹🎵🎮🎭📚🖋️📸🎥📱💻🖥️🎨🏆⚽🏀🎾🏈🎱🏓🏸🥋🏄‍♂️🚴‍♀️🎬🎤🎸🎭🎪🎡🎢🏰🏖️🏝️🌋🗻🌅🌠🌌🎇🎆🎑🌄🌆🌈🌦️🌧️🌨️🌩️🌪️🌫️🌬️🌊🏞️🏕️🏖️🏜️🏝️🏔️🗻🏘️🏰🏯');
      });
     } else {
       console.error('Missing JWT token for Socket.IO connection');
     }
   }

    addUsers(userId: string): void {
      this.webSocket.emit('add users', userId);
    }

    sendNotification(notificationId:string){
      this.webSocket.emit('notify',notificationId)
    }

    listenForNotifications(): Observable<any> {
      return this.webSocket.fromEvent<any>('notification');
    }
}
