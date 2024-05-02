import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebSocketService } from '../../Services/webSocketService/webSocket.service';
import { MessageService } from '../../Services/webSocketService/message.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chat-Component',
  standalone:true,
  imports:[FormsModule,RouterOutlet],
  templateUrl: './chat-Component.component.html',
  styleUrls: ['./chat-Component.component.css']
})
export class ChatComponentComponent implements OnInit ,OnDestroy {
  userType!:string;
  messages: any[] = [];
  messageSubscription!: Subscription;
  messageInput:string=''
  newMessage: string = '';
  constructor(private webSocketService: WebSocketService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
       this.userType = data['userType'];
      console.log('User Type:', this.userType);
      // Now you can use the userType variable in your component
    });
    this.webSocketService.emtiGetchat("getChats") 
    this.messageSubscription = this.webSocketService.getChats("chats")
      .subscribe((data) => {
        console.log(data);
        this.messages.push(data);
      });
  }
  
  sendMessage(message: string): void {
    if (message.trim() === '') {
      return; // Don't send empty messages
    }
    // Call WebSocket service to send the message
    this.webSocketService.sendMessage('chat message', message);
  }
  ngOnDestroy(): void {
    // Unsubscribe from messages to prevent memory leaks
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    this.webSocketService.disconnectSocket();
  }
}
