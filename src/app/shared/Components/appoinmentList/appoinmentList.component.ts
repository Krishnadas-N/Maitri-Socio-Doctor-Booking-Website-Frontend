import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@Component({
  selector: 'app-appoinmentList',
  standalone: true,
  imports: [CommonModule, RouterLink,ConfirmDialogModule,ToastModule],
  templateUrl: './appoinmentList.component.html',
  styleUrls: ['./appoinmentList.component.css'],
  providers:[ConfirmationService,MessageService]
})
export class AppoinmentListComponent implements OnInit {
  @Input() appoinmentDetails: any;
  @Input() userType!: 'doctor' | 'user';
  @Output() viewprofile = new EventEmitter<string>();
  @Output() editUserStatus: EventEmitter<{ id: string; status: string }> =
    new EventEmitter<{ id: string; status: string }>();
    position: string = 'center';
  constructor( private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit() {}
  viewUserProfile() {
    this.viewprofile.emit(this.appoinmentDetails?._id);
  }

  changeStatus() {
    this.confirmationService.confirm({
      message:`Please note that cancelling the appointment at <br> \nthis stage will result in a refund of 70% of the total amount paid.`,
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted' });
          this.editUserStatus.emit({ id: this.appoinmentDetails._id,status:'Cancelled'});
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Process incomplete', life: 3000 });
      },
      key: 'positionDialog'
  });
   
  }
  calculateTimeRemaining(date: string, slot: string): string {
    console.log(date,slot)
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

  isSessionEnded(date: string, slot: string):boolean{
    console.log(date,slot)
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
  
    const hours = Math.floor(differenceMs / (1000 * 60 * 60));
    const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((differenceMs % (1000 * 60)) / 1000);
  
    return false;
  }
}
