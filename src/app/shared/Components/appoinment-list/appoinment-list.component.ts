import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { WebSocketService } from '../../Services/web-socketService/webSocket.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../../core/User/Services/user.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { Appointment } from '../../Models/appoinment.model';
import { MatDialog } from '@angular/material/dialog';
import { RatingReviewDialogComponent } from '../../../core/User/Components/rating-review-dialog/rating-review-dialog.component';
@Component({
  selector: 'app-appoinment-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ConfirmDialogModule,
    FormsModule,
    DialogModule,
    ToastModule,
    RouterLink,
  ],
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css'],
  providers: [ConfirmationService, MessageService],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      state(
        '*',
        style({
          opacity: 1,
        })
      ),
      transition('void => *', animate('500ms')),
      transition('* => void', animate('500ms')),
    ]),
  ],
})
export class AppoinmentListComponent implements OnInit, OnDestroy {
  @Input({ required: true }) appoinmentDetails!: any;
  cancellationReason: string = '';
  consultationLink: string | null = null;
  currentUserId: string | null = null;
  private consultationLinkSubscription!: Subscription;
  displayConfirmationDialog: boolean = false;
  @Input({ required: true }) userType!: 'doctor' | 'user';
  @Output() viewprofile = new EventEmitter<string>();
  @Output() editUserStatus: EventEmitter<{
    id: string;
    reason: string;
    status: string;
  }> = new EventEmitter<{ id: string; reason: string; status: string }>();
  position: string = 'center';
  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private webSocketService: WebSocketService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    console.log(this.appoinmentDetails);
    if (this.userType === 'user') {
      this.getCurrentUser();
      this.consultationLinkSubscription = this.webSocketService
        .receiveConsultationLink()
        .subscribe((data) => {
          // Check if the consultation link is for this user
          if (this.currentUserId && data.userId === this.currentUserId) {
            this.consultationLink = data.consultationLink;
          }
        });
    }
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: (res) => {
        console.log('current user', res);
        this.currentUserId = res.data._id;
      },
      error: (err) =>
        console.error('Error in getting current user details', err),
    });
  }

  viewUserProfile() {
    this.viewprofile.emit(this.appoinmentDetails?._id);
  }

  calculateTimeRemaining(date: string, slot: string): string {
    console.log(date, slot);
    const now = new Date();
    const startTime = new Date(date);

    // Parse slot time to get the hour
    const slotHour = parseInt(slot.split(' ')[0]);

    // Adjust the start time to match the slot hour
    startTime.setHours(slotHour);
    startTime.setMinutes(0); // Assuming slots are always on the hour
    const differenceMs = startTime.getTime() - now.getTime();
    if (differenceMs < 0) {
      return 'Session has already started or Ended';
    }

    const hours = Math.floor(differenceMs / (1000 * 60 * 60));
    const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((differenceMs % (1000 * 60)) / 1000);

    return `${hours} hours ${minutes} minutes ${seconds} seconds`;
  }

  isSessionEnded(date: string, slot: string): boolean {
    const now = new Date();
    const startTime = new Date(date);

    // Parse slot time to get the hour
    const slotHour = parseInt(slot.split(' ')[0]);

    // Adjust the start time to match the slot hour
    startTime.setHours(slotHour);
    startTime.setMinutes(0); // Assuming slots are always on the hour
    const differenceMs = startTime.getTime() - now.getTime();
    if (differenceMs < 0) {
      return true;
    }
    return false;
  }

  isOneHourOrLessDifference(date: string, slot: string): boolean {
    const now = new Date();
    const startTime = new Date(date);
    const slotHour = parseInt(slot.split(' ')[0]);
    startTime.setHours(slotHour);
    startTime.setMinutes(0); // Assuming slots are always on the hour
    const differenceMs = startTime.getTime() - now.getTime();
    const oneHourInMs = 60 * 60 * 1000; // 1 hour in milliseconds
    const absDifferenceMs = Math.abs(differenceMs);
    if (absDifferenceMs <= oneHourInMs) {
      return true;
    }

    return false;
  }

  openConfirmationDialog() {
    this.displayConfirmationDialog = true;
  }

  onRejectCancellation() {
    this.displayConfirmationDialog = false;
    this.messageService.add({
      severity: 'error',
      summary: 'Rejected',
      detail: 'Process incomplete',
      life: 3000,
    });
  }

  onConfirmCancellation() {
    this.displayConfirmationDialog = false;
    this.messageService.add({
      severity: 'info',
      summary: 'Confirmed',
      detail: 'Request submitted',
    });
    this.editUserStatus.emit({
      id: this.appoinmentDetails._id,
      reason: this.cancellationReason,
      status: 'Cancelled',
    });
  }
  ngOnDestroy() {
    if (this.consultationLinkSubscription) {
      this.consultationLinkSubscription.unsubscribe();
    }
  }

  navigateToChat() {
    if (this.appoinmentDetails && this.appoinmentDetails.consultationLink) {
      const queryParams = { appoinmentId: this.appoinmentDetails._id };
      this.router.navigate([this.appoinmentDetails.consultationLink], {
        queryParams: queryParams,
      });
    }
  }
  openRatingDialog() {
    const dialogRef = this.dialog.open(RatingReviewDialogComponent, {
      width: '50%',
      data: { appoinmentId: this.appoinmentDetails._id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
      this.appoinmentDetails.reviews.push(result);
    });
  }
}
