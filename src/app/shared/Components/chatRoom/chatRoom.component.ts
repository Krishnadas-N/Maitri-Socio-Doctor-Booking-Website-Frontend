import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebSocketService } from '../../Services/webSocketService/webSocket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../Services/webSocketService/message.service';
import { UserServiceService } from '../../../core/User/Services/user-service.service';
import { DoctorService } from '../../../core/Doctor/Services/Doctor-Services/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { CheckPlatformService } from '../../Services/checkPlatformService/checkPlatform.service';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../Services/TokenAuthService/Token.service';

@Component({
  selector: 'app-messageChat',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './chatRoom.component.html',
  styleUrls: ['./chatRoom.component.css']
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  conversationId!:string;
  message: string = '';
  userType!:'user'|'doctor';
  isDisplayDummy:boolean=false;
  currentUserData:any={};
  senderId!:string;
  recipientId!:string;
  conversationalData:any;
  messages: any[] = [];
  messageSubscription!: Subscription;

  messageInput:string=''
  newMessage: string = '';
  constructor(
    private webSocketService: WebSocketService,
    private router:Router,
    private route: ActivatedRoute,
    private messageService:MessageService,
    private userService:UserServiceService,
    private doctorService:DoctorService,
    private toastr:ToastrService,
    private platformService:CheckPlatformService,
    private tokenService:TokenService
  ) { }
  ngOnInit() {

    this.route.data.subscribe(data => {
      this.userType = data['userType'];
      console.log('User Type:', this.userType);
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.conversationId = params['id'];
        console.log("id is ", this.conversationId);

        if (this.conversationId === "inbox") {
          this.isDisplayDummy = true;
          console.log("Display default screen for inbox");
        } else {
          this.fetchCurrentUser();
          this.fetchConversationDetails(this.conversationId);
         
          if (this.platformService.isBrowser()) {
          
            const token = this.tokenService.getToken();
            if (token) {
              this.webSocketService.setToken(token);
              this.webSocketService.emitGetMessages(this.conversationId)
              this.subscribeToMessages();
              this.webSocketService.getnewMessages().subscribe((message: any) => {
                this.messages.push(message);
              });
          
            } else {
              console.error('Missing JWT token for Socket.IO connection');
              // Handle missing token scenario (e.g., redirect to login)
            }
          }
        }
      }
    });

    
  }

  private subscribeToMessages(): void {
    this.messageSubscription = this.webSocketService.getMessages().subscribe((messages: any[]) => {
      this.messages = messages;
      console.log("Messgaess already have",this.messages);
      // this.scrollToBottom();
    });
   
  }

  sendMessage(message: string): void {
    console.log(message);
    if (message.trim() === '') {
      return; // Don't send empty messages
    }
    
    // Call WebSocket service to send the message
    this.webSocketService.sendMessage('send message', this.senderId,this.recipientId,this.conversationId,
      message,
      this.userType
    );
    this.message = '';
}

fetchConversationDetails(conversationId: string) {
    this.messageService.getConversationDetails(conversationId).subscribe(
      res=>{
        console.log(res)
        this.conversationalData = res.data;
        console.log(this.conversationalData)
        const recipientData = this.conversationalData.members.find((member:any) => member.member._id.toString() !== this.senderId);
        this.recipientId = recipientData.member._id;
        console.log(recipientData,"this.conversationalData",this.conversationalData);
        console.log("Recipient and sender IDs:", this.recipientId, this.senderId);
      },
      (err)=>{
         if(this.userType==='doctor'){
          this.router.navigate(['/doctor/chats/inbox'])
         }
      })
  }

  fetchCurrentUser():void{
    if(this.userType==='doctor'){
      this.doctorService.getDoctor().subscribe(
        (res:any)=>{
          this.currentUserData = res.data
          this.senderId = this.currentUserData._id
          console.log("currentUserData",this.currentUserData);
          this.webSocketService.addUser(this.currentUserData._id)
        },
        (err:any)=>{
           this.toastr.error(err);
           this.router.navigate(['/doctor/chats/inbox'])
        }
      )
     }else if(this.userType==='user'){
        this.userService.getCurrentUser().subscribe(
          (res:any)=>{
            this.currentUserData = res.data
            this.senderId = this.currentUserData._id
            console.log("currentUserData",this.currentUserData);
            this.webSocketService.addUser(this.currentUserData._id)
          },
          (err:any)=>{
             this.toastr.error(err)
          }
        )
     }  
  }
  
  isCurrentLoggedUser(userId:string):boolean{
    return this.currentUserData._id.toString()===userId;
  }

   getUserDetails(userId: string): any {
    return this.conversationalData.members.find((x: any) => x.member._id.toString() === userId).member;
  }
  
  ngOnDestroy() {
    // Unsubscribe from any subscriptions to prevent memory leaks
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }
}
