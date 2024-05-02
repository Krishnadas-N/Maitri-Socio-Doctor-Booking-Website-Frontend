import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DoctorService } from '../../../core/Doctor/Services/Doctor-Services/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from '../../Services/webSocketService/message.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-sidebardetails-listing',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './user-sidebardetails-listing.component.html',
  styleUrls: ['./user-sidebardetails-listing.component.css']
})
export class UserSidebardetailsListingComponent implements OnInit {
  constructor(
    private messageService:MessageService,
    private router:Router,
    @Inject(MAT_DIALOG_DATA,
   
  ) public data: any,
  private dialogRef: MatDialogRef<UserSidebardetailsListingComponent>,
  private doctorService:DoctorService,
  private toastr:ToastrService
) { }

  ngOnInit() {
    console.log(this.data);
  }
  closeDialog(){
    this.dialogRef.close();
  }
  changeAppoinmentStatus(status:string){
    this.doctorService.changeStatus(status,this.data.appoinments._id).subscribe(
      (res:any)=>{
        this.data.appoinments.status=res.data.status;
      },
      (err)=>{
        this.toastr.error(err)
      }
    )
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
  
  startConsultation() {
    const userId = this.data.appoinments.user[0]._id
    switch (this.data.appoinments.typeOfAppointment) {
      case 'video':
        // Logic to start video consultation
        break;
      case 'chat':
        this.messageService.getConversationId(userId).subscribe(
          (res:any)=>{
            this.closeDialog()
            this.router.navigate(['/doctor/chats/', res.data])
          },
          err=>{
            this.toastr.error(err)
          } )
        break;
      default:
        // this.router.navigate(['/pages/dashboard']);
    }
  }
  
}
