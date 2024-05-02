import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebSocketService } from '../../Services/webSocketService/webSocket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../Services/webSocketService/message.service';
import { UserServiceService } from '../../../core/User/Services/user-service.service';
import { DoctorService } from '../../../core/Doctor/Services/Doctor-Services/doctor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-messageChat',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './chatRoom.component.html',
  styleUrls: ['./chatRoom.component.css']
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  conversationId!:string;
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
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.userType = data['userType'];
     console.log('User Type:', this.userType);
     // Now you can use the userType variable in your component
   });
    this.route.params.subscribe(
      params=>{
        if(params['id']){
          this.conversationId = params['id']
          console.log("id is ", this.conversationId);
          if ( this.conversationId === "inbox") {
            this.isDisplayDummy=true
            console.log("Display default screen for inbox");
          } else {
            // Fetch chats from backend using the MongoDB ID;
            this.fetchCurrentUser()
            this.fetchChatsFromBackend(this.conversationId);
            
          }
  
        }
      }
    )
    
  }

  sendMessage(message: string): void {
    if (message.trim() === '') {
      return; // Don't send empty messages
    }
    
    // Call WebSocket service to send the message
    this.webSocketService.sendMessage('send message', 
       this.senderId,
      this.recipientId,
       this.conversationId,
      message
    );
}

  fetchChatsFromBackend(conversationId: string) {
    this.messageService.getConversationDetails(conversationId).subscribe(
      res=>{
        console.log(res)
        this.conversationalData = res.data;
      
        const recipientData = this.conversationalData.members.find((member:any) => member.member._id.toString() !== this.senderId);
        this.recipientId = recipientData.member._id;
        console.log(recipientData);
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
          this.conversationalData = res.data
          console.log(" this.conversationalData",this.conversationalData);
          this.senderId = this.conversationalData._id
        },
        (err:any)=>{
           this.toastr.error(err);
           this.router.navigate(['/doctor/chats/inbox'])
        }
      )
     }else if(this.userType==='user'){
        this.userService.getCurrentUser().subscribe(
          (res:any)=>{
            this.conversationalData = res.data
            this.senderId = this.conversationalData._id
            console.log(" this.conversationalData",this.conversationalData);
          },
          (err:any)=>{
             this.toastr.error(err)
          }
        )
     }  
     console.log(" this.conversationalData",this.conversationalData);
  }
  
  ngOnDestroy() {
    // Unsubscribe from any subscriptions to prevent memory leaks
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }
}
