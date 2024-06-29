import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  afterNextRender,
} from '@angular/core';
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
import { MatDialog } from '@angular/material/dialog';
import { UploadPrescriptionComponent } from '../../../core/Doctor/Components/upload-prescription/upload-prescription.component';
import { RatingReviewDialogComponent } from '../../../core/User/Components/rating-review-dialog/rating-review-dialog.component';
@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.css'],
})
export class VideoCallComponent implements OnInit {
  @ViewChild('root') root!: ElementRef;
  userType!: 'Doctor' | 'User';
  isLoading: boolean = false;
  roomID: string = '';
  expectedRole: string = '';
  currentUser!: Doctor | User;
  isInvalidRoomId: boolean = false;
  userDataLoaded: boolean = false;
  conversationDataLoaded: boolean = false;
  appoinmentId: string | null = null;
  constructor(
    private webSocketService: WebSocketService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService,
    private doctorService: DoctorService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.userType = this.route.snapshot.data['expectedRole'];
    this.route.queryParams.subscribe((params) => {
      this.appoinmentId = params['apppoinmentId'] || null;
      console.log('Appointment ID:', this.appoinmentId);
    });
    this.route.params.subscribe((param) => {
      this.roomID = param['roomId'];
    });
    this.isLoading = true;
    this.expectedRole = this.route.snapshot.data['expectedRole'];
    this.fetchConversation();
    this.getCurrentUserData();
  }
  // ngAfterViewInit(): void {
  //   console.log(this.currentUser,this.isInvalidRoomId,this.userDataLoaded, this.conversationDataLoaded);
  //   if (this.currentUser && !this.isInvalidRoomId && this.userDataLoaded && this.conversationDataLoaded) {
  //     // Zego Cloud function call
  //     this.callZegoCloudFunction();
  //   }
  // }
  getCurrentUserData() {
    if (this.expectedRole === 'Doctor') {
      this.doctorService.getDoctor().subscribe({
        next: (res) => {
          this.currentUser = res.data;
          this.userDataLoaded = true;
          this.callZegoCloudFunction();
        },
        error: (err: any) => {
          this.toastr.error(err);
        },
      });
    } else {
      this.userService.getCurrentUser().subscribe({
        next: (res) => {
          this.currentUser = res.data;
          this.userDataLoaded = true;
          this.callZegoCloudFunction();
        },
        error: (err: any) => {
          this.toastr.error(err);
        },
      });
    }
  }
  fetchConversation() {
    this.messageService.getConversationDetails(this.roomID).subscribe({
      next: (value) => {
        console.log(value);
        this.conversationDataLoaded = true;
      },
      error: (err) => {
        this.toastr.error(err);
        this.isLoading = false;
        this.isInvalidRoomId = true;
      },
      complete() {},
    });
  }

  callZegoCloudFunction() {
    const appID = environment.PUBLIC_ZEGO_APP_ID;
    const serverSecret = environment.PUBLIC_ZEGO_SERVER_ID;
    console.log(
      'appID, serverSecret, this.roomID, this.currentUser._id as string, `${this.currentUser.firstName} ${this.currentUser.lastName}`',
      appID,
      serverSecret,
      this.roomID,
      this.currentUser._id as string,
      `${this.currentUser.firstName} ${this.currentUser.lastName}`
    );
    this.isLoading = false;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      this.roomID,
      this.currentUser._id as string,
      `${this.currentUser.firstName} ${this.currentUser.lastName}`
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: this.root.nativeElement,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
            window.location.protocol +
            '//' +
            window.location.host +
            window.location.pathname +
            '?roomID=' +
            this.roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      lowerLeftNotification: {
        showUserJoinAndLeave: true,
        showTextChat: true,
      },
      branding: {
        logoURL: environment.Logo_Url,
      },
      showRoomTimer: true,
      onLeaveRoom: () => this.openDialogBasedOnuser(),
    });
  }

  openDialogBasedOnuser() {
    if (this.userType === 'Doctor' && this.appoinmentId) {
      this.doctorService
        .changeStatus('Completed', this.appoinmentId)
        .subscribe({
          next: (res) => {
            this.openPrescritptionModal();
          },
          error: (err) => {
            this.toastr.error(err);
          },
        });
    } else {
      this.openRatingDialog();
    }
  }

  openPrescritptionModal() {
    console.log('called by leaving', this.userType, this.appoinmentId);
    if (this.userType === 'Doctor' && this.appoinmentId) {
      console.log('called by leavingthis.appoinmentId ');
      this.dialog.open(UploadPrescriptionComponent, {
        data: { appoinmentId: this.appoinmentId },
      });
    }
  }

  openRatingDialog() {
    if (this.userType === 'User' && this.appoinmentId) {
      this.dialog.open(RatingReviewDialogComponent, {
        data: { appoinmentId: this.appoinmentId },
      });
    }
  }
  returnToHome() {
    console.log('this.expectedRole', this.expectedRole);
    if (this.expectedRole === 'Doctor') {
      this.router.navigate(['/doctor']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
