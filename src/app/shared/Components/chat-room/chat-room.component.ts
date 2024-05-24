import { afterNextRender, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebSocketService } from '../../Services/web-socketService/webSocket.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../Services/web-socketService/message.service';
import { UserService } from '../../../core/User/Services/user.service';
import { DoctorService } from '../../../core/Doctor/Services/doctor-services/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../Services/token-auth-service/Token.service';
import { Doctor } from '../../../store/Doctor/doctor.model';
import { User } from '../../../store/User/user.model';
import { MessageDTO } from '../../Models/message.models';
import { TimeDiffPipe } from '../../pipes/time-diff.pipe';
import { TimeFormatPipe } from '../../pipes/timeFormat.pipe';
import { UploadPrescriptionComponent } from '../../../core/Doctor/Components/upload-prescription/upload-prescription.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RatingReviewDialogComponent } from '../../../core/User/Components/rating-review-dialog/rating-review-dialog.component';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [CommonModule, FormsModule,TimeDiffPipe,TimeFormatPipe,RouterLink],
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('chatContainer') chatContainer: any;
  conversationId!: string;
  message: string = '';
  userType!: 'User' | 'Doctor';
  isDisplayDummy: boolean = false;
  currentUserData!: Doctor | User;
  senderId!: string;
  recipientId!: string;
  conversationalData: any;
  messages: MessageDTO[] = [];
  messageSubscription!: Subscription;
  isOptionsModalOpen:boolean=false
  appointmentId:string|null=null;
  messageInput: string = '';
  newMessage: string = '';
  constructor(
    private webSocketService: WebSocketService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private userService: UserService,
    private doctorService: DoctorService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private renderer: Renderer2,
    public dialog: MatDialog
  ) {
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }
  ngOnInit() {
    this.userType = this.route.snapshot.data['expectedRole'];
    this.route.queryParams.subscribe(params => {
      this.appointmentId = params['apppoinmentId'] || null;
      console.log('Appointment ID:', this.appointmentId);
    });
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.conversationId = params['id'];
        console.log('id is ', this.conversationId);

        if (this.conversationId === 'inbox') {
          this.isDisplayDummy = true;
          console.log('Display default screen for inbox');
        } else {
          this.isDisplayDummy = false;
          this.fetchCurrentUser();


          const token = this.tokenService.getToken();
          if (token) {
            this.webSocketService.setToken(token);
            this.webSocketService.emitGetMessages(this.conversationId);
            this.subscribeToMessages();
            this.webSocketService.getnewMessages().subscribe((message: any) => {
              console.log(message)
              this.messages.push(message);
              this.scrollToBottom();
            });
          }
        }
      }
    });

    if(this.userType==='User'){
      this.subCloseConverstation()
      this.subOpeningRatingModal()

    }
  }

  subCloseConverstation(){
    this.webSocketService.getCloseConversation().subscribe((data: any) => {
      console.log('Received open_rating_modal event with data:', data);
      this.conversationalData.isClosed = data.status;
    });
  }
  subOpeningRatingModal(){
    this.webSocketService.getRatingModalOpen().subscribe((data: any) => {
      console.log('Received open_rating_modal event with data:', data);
      this.openRatingDialog(data);
    });
  }
  private scrollToBottom() {
    if (this.chatContainer) {
      console.log(this.chatContainer);
      this.chatContainer.nativeElement.scrollTop =
        this.chatContainer.nativeElement.scrollHeight;
    }
  }

  private subscribeToMessages(): void {
    this.messageSubscription = this.webSocketService
      .getMessages()
      .subscribe((messages: any[]) => {
        this.messages = messages;
        this.isDisplayDummy = false;
        console.log('Messgaess already have', this.messages);
        this.scrollToBottom();
      });
  }

  sendMessage(message: string): void {
    console.log(message);
    if (message.trim() === '') {
      return;
    }

    console.log(  'send message', this.senderId,this.recipientId,this.conversationId,
      message,
      this.userType
    );
    this.webSocketService.sendMessage('send message', this.senderId,this.recipientId,
      this.conversationId,
      message,
      this.userType
    );
    this.message = '';
  }

  fetchConversationDetails(conversationId: string) {
    this.messageService.getConversationDetails(conversationId).subscribe({
      next: (res) => {
        console.log("converstaion Date",res);
        this.conversationalData = res.data;
        const recipientData = this.conversationalData.members.find(
          (member: any) => member.member._id.toString()!== this.senderId
        );
        this.recipientId = recipientData.member._id;
        console.log(
          recipientData,
          'this.conversationalData',
          this.conversationalData
        );
        console.log(
          'Recipient and sender IDs:',
          this.recipientId,
          this.senderId
        );
      },
      error: (err) => {
        if (this.userType === 'Doctor') {
          this.router.navigate(['/doctor/chats/inbox']);
        }
      },
    });
  }

  fetchCurrentUser(): void {
    if (this.userType === 'Doctor') {
      this.doctorService.getDoctor().subscribe({
        next:(res: any) => {
          this.currentUserData = res.data;
          if (this.currentUserData && this.currentUserData._id) {
            this.senderId = this.currentUserData._id;
            this.webSocketService.addUser(this.currentUserData._id);
            this.fetchConversationDetails(this.conversationId);
            console.log('currentUserData', this.currentUserData);
          }
        },
        error:(err: any) => {
          this.toastr.error(err);
          this.router.navigate(['/doctor/chats/inbox']);
        }
    });
    } else if (this.userType === 'User') {
      this.userService.getCurrentUser().subscribe({
        next:(res) => {
          this.currentUserData = res.data;
          if (this.currentUserData && this.currentUserData._id) {
            this.senderId = this.currentUserData._id;
            this.webSocketService.addUser(this.currentUserData._id);
            this.fetchConversationDetails(this.conversationId);
            console.log('currentUserData', this.currentUserData);
          }
        },
        error:(err) => {
          this.toastr.error(err);
        }
    });
    }
  }

  isCurrentLoggedUser(userId: string): boolean {
    if (this.currentUserData && this.currentUserData._id) {
      return this.currentUserData?._id.toString() === userId;
    } else {
      return false;
    }
  }

  getUserDetails(userId: string): any {
    if(this.conversationalData){

    return this.conversationalData.members.find(
      (x: any) => x.member._id.toString() === userId
    ).member;
  }
  }

  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }

  toggleConsultation() {
    if (this.userType === 'Doctor' && this.appointmentId) {
        this.doctorService.changeStatus('Completed', this.appointmentId)
            .subscribe({
                next: (res) => {
                    this.messageService.toggleConsultation(this.conversationId)
                        .subscribe({
                            next: (res) => {
                                this.conversationalData.isClosed = !this.conversationalData.isClosed;
                                this.webSocketService.emitCloseConversation(this.appointmentId!,this.recipientId,this.conversationalData.isClosed)
                                if (this.conversationalData.isClosed && this.appointmentId) {

                                    this.webSocketService.emitOpenRatingModal(this.appointmentId,this.recipientId);
                                    this.openUploadPrescription();
                                }
                            },
                            error: (err) => {
                                this.toastr.error('Error toggling consultation: ' + err);
                            }
                        });
                },
                error: (err) => {
                    this.toastr.error('Error changing appointment status: ' + err);
                }
            });
    }
   }


  navigateDoctorPage(){
    const doctor = this.conversationalData.members.find(
      (member: any) => member.memberType ==='Doctor'
    )
    console.log(doctor);
    this.router.navigate(['/get-doctor',doctor.member._id])
  }

  openUploadPrescription(){
    this.dialog.open(UploadPrescriptionComponent,{
      data: {appoinmentId:this.appointmentId }
    });
  }

  openRatingDialog(appoinmentId:string){

      console.log(appoinmentId);
    console.log(appoinmentId);
    this.dialog.open(RatingReviewDialogComponent,{
      width: '50%',
      data: {appoinmentId:appoinmentId}
    });

  }
}
