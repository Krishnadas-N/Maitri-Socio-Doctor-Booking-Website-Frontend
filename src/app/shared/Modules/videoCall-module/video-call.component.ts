import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, afterNextRender } from '@angular/core';
import { WebSocketService } from '../../Services/web-socketService/webSocket.service'; 
import { SignalService } from '../../Services/web-socketService/signal.service'; 
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment.development';
import { MessageService } from '../../Services/web-socketService/message.service';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from '../../../store/Doctor/doctor.model';
import { User } from '../../../store/User/user.model';
import { UserService } from '../../../core/User/Services/user.service';
import { DoctorService } from '../../../core/Doctor/Services/doctor-services/doctor.service';
@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.css']
})
export class VideoCallComponent implements OnInit,AfterViewInit {
  @ViewChild('root') root!: ElementRef;
  roomID:string='';
  expectedRole: string = '';
  currentUser!:Doctor|User;
  isInvalidRoomId:boolean=true;
  userDataLoaded: boolean = false;
  conversationDataLoaded: boolean = false;

  constructor(private webSocketService: WebSocketService,
    private messageService:MessageService,
    private route:ActivatedRoute,
    private toastr:ToastrService,
    private router:Router,
    private userService:UserService,
    private doctorService:DoctorService
    ) { }

   ngOnInit() {
    alert("jer")
    this.route.params.subscribe(param=>{
      this.roomID = param['roomId'] 
    })
    this.expectedRole = this.route.snapshot.data['expectedRole'];
    this.fetchConversation();
    this.getCurrentUserData();
  
  
  }
  ngAfterViewInit(): void {
    console.log(this.currentUser,this.isInvalidRoomId,this.userDataLoaded, this.conversationDataLoaded);
    if (this.currentUser && !this.isInvalidRoomId && this.userDataLoaded && this.conversationDataLoaded) {
      // Zego Cloud function call
      this.callZegoCloudFunction();
    }
  }
  getCurrentUserData(){
    if(this.expectedRole==='Doctor'){
      this.doctorService.getDoctor().subscribe({
        next:(res)=>{
          this.currentUser = res.data
          this.userDataLoaded = true;
          this.callZegoCloudFunction();
        },
        error:(err:any)=>{
          this.toastr.error(err)
        }

      })
    }else{
        this.userService.getCurrentUser().subscribe({
          next:(res)=>{
            this.currentUser = res.data;
            this.userDataLoaded = true;
            this.callZegoCloudFunction();
          },
          error:(err:any)=>{
            this.toastr.error(err)
          }
        })
    }
  }
  fetchConversation(){
    this.messageService.getConversationDetails(this.roomID).subscribe({
      next:(value)=>{
          console.log(value);
          this.conversationDataLoaded = true;
      },
      error:(err)=>{
       this.toastr.error(err);
       this.isInvalidRoomId = true
      },
        complete() {
            
        },
    })
  }

  
  callZegoCloudFunction() {
    const appID = environment.PUBLIC_ZEGO_APP_ID;
    const serverSecret = environment.PUBLIC_ZEGO_SERVER_ID;
    console.log("appID, serverSecret, this.roomID, this.currentUser._id as string, `${this.currentUser.firstName} ${this.currentUser.lastName}`",appID, serverSecret, this.roomID, this.currentUser._id as string, `${this.currentUser.firstName} ${this.currentUser.lastName}`);
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, this.roomID, this.currentUser._id as string, `${this.currentUser.firstName} ${this.currentUser.lastName}`);
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: this.root.nativeElement,
      sharedLinks: [{
        name: 'Personal link',
        url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + this.roomID,
      }],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  }
  returnToHome(){
    console.log("this.expectedRole",this.expectedRole);
    if(this.expectedRole==='Doctor'){
      
      this.router.navigate(['/doctor'])
    }else{
      this.router.navigate(['/'])
    }
  }
}
