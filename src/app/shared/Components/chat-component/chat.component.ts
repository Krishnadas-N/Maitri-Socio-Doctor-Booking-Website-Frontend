import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebSocketService } from '../../Services/web-socketService/webSocket.service';
import { MessageService } from '../../Services/web-socketService/message.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { TokenService } from '../../Services/token-auth-service/Token.service';
import { UserService } from '../../../core/User/Services/user.service';
import { DoctorService } from '../../../core/Doctor/Services/doctor-services/doctor.service';
import { CommonModule } from '@angular/common';
import { Conversation } from '../../Models/chat.model';
import { Doctor } from '../../../store/Doctor/doctor.model';
import { User } from '../../../store/User/user.model';

@Component({
  selector: 'app-chat-component',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule, RouterLink],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  userType!: 'User' | 'Doctor';
  conversations: Conversation[] = [];
  messageSubscription!: Subscription;
  currentUser!: User | Doctor;
  constructor(
    private webSocketService: WebSocketService,
    private route: ActivatedRoute,
    private messagService: MessageService,
    private userService: UserService,
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userType = this.route.snapshot.data['expectedRole'];
    this.fetchCurrentUser();
  }

  loadChatsOfUser() {
    this.messagService.getChatsOfUser().subscribe({
      next: (res) => {
        this.conversations = res.data;
        console.log(' this.consversations', this.conversations);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  fetchCurrentUser(): void {
    if (this.userType === 'Doctor') {
      this.doctorService.getDoctor().subscribe({
        next: (res) => {
          this.currentUser = res.data;
          this.webSocketService.addUser(this.currentUser._id as string);
          console.log('currentUser', this.currentUser);
          this.loadChatsOfUser();
        },
        error: (err) => {},
      });
    } else if (this.userType === 'User') {
      this.userService.getCurrentUser().subscribe({
        next: (res: any) => {
          this.currentUser = res.data;
          this.webSocketService.addUser(this.currentUser._id as string);
          console.log('currentUser', this.currentUser);
          this.loadChatsOfUser();
        },
        error: (err: any) => {},
      });
    }
  }
  ngOnDestroy(): void {
    // Unsubscribe from messages to prevent memory leaks
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    this.webSocketService.disconnectSocket();
  }

  getOtherMember(conversation: any){
    if(conversation && conversation.members && this.currentUser && this.currentUser._id){
      const otherMember = conversation.members.find(
        (member: any) =>
          member.member._id.toString() !== this.currentUser?._id!.toString()
      );
      return otherMember.member;
    }
   
  }

  navigateChat(id: string) {
    if (this.userType === 'Doctor') {
      this.router.navigate(['/doctor/chats', id]);
    } else {
      this.router.navigate(['/chats/', id]);
    }
  }
}
