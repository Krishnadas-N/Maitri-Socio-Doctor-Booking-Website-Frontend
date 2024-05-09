import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebSocketService } from '../../Services/web-socketService/webSocket.service'; 
import { MessageService } from '../../Services/web-socketService/message.service'; 
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CheckPlatformService } from '../../Services/check-platform-service/checkPlatform.service'; 
import { TokenService } from '../../Services/token-auth-service/Token.service'; 
import { UserService } from '../../../core/User/Services/user.service';
import { DoctorService } from '../../../core/Doctor/Services/doctor-services/doctor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-component',
  standalone:true,
  imports:[FormsModule,RouterOutlet,CommonModule,RouterLink],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit ,OnDestroy {
  userType!:string;
  conversations:any[]=[];
  messages: any[] = [];
  messageSubscription!: Subscription;
  messageInput:string=''
  newMessage: string = '';
  currentUser:any;
  constructor(
    private webSocketService: WebSocketService,private route: ActivatedRoute,
    private platformService:CheckPlatformService,
    private tokenService:TokenService,
    private messagService:MessageService,
    private userService:UserService,
    private doctorService:DoctorService,
    private router:Router

  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
       this.userType = data['userType'];
      console.log('User Type:', this.userType);
      // Now you can use the userType variable in your component
    });
    this.fetchCurrentUser()
    this.messagService.getChatsOfUSer().subscribe(
      (res:any)=>{
        this.conversations = res.data
        console.log(" this.consversations", this.conversations);
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }
  

  fetchCurrentUser():void{
    if(this.userType==='doctor'){
      this.doctorService.getDoctor().subscribe(
        (res:any)=>{
          this.currentUser = res.data
          this.webSocketService.addUser(this.currentUser._id);
          console.log("currentUser",this.currentUser);
        },
        (err:any)=>{
        }
      )
     }else if(this.userType==='user'){
        this.userService.getCurrentUser().subscribe(
          (res:any)=>{
            this.currentUser = res.data
            this.webSocketService.addUser(this.currentUser._id);
            console.log("currentUser",this.currentUser);
          },
          (err:any)=>{
          }
        )
     }  
  }
  ngOnDestroy(): void {
    // Unsubscribe from messages to prevent memory leaks
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    this.webSocketService.disconnectSocket();
  }

  getOtherMember(conversation: any): any {
    const currentUser = this.currentUser; // Assuming currentUser holds the details of the current user
    const otherMember = conversation.members.find((member:any) => member._id.toString() !== currentUser._id);
    return otherMember.member;
  }

  navigateChat(id:string){
    if(this.userType==='doctor'){
    this.router.navigate(['/doctor/chats',id])
    }else{
      this.router.navigate(['/chats/',id])
    }
  }
  
}
