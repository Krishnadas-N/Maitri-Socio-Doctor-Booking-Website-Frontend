import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DoctorService } from '../../../core/Doctor/Services/doctor-services/doctor.service'; 
import { ToastrService } from 'ngx-toastr';
import { MessageService } from '../../Services/web-socketService/message.service'; 
import { NavigationExtras, Route, Router } from '@angular/router';
import { WebSocketService } from '../../Services/web-socketService/webSocket.service'; 
import { TokenService } from '../../Services/token-auth-service/Token.service';
import { NotificationService } from '../../Services/notification-service/notification.service';
import { error } from 'console';

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
  private toastr:ToastrService,
  private webSocket:WebSocketService,
  private tokenService:TokenService,
  private notification:NotificationService,
) { }

  ngOnInit() {
    console.log(this.data);

  }
  closeDialog(){
    this.dialogRef.close();
  }
  changeAppoinmentStatus(status:string){
    this.doctorService.changeStatus(status,this.data.appoinments._id).subscribe({
      next:(res:any)=>{
        this.data.appoinments.status=res.data.appointment.status;
        console.log("notificationSending   ....",res.data.notificationId)
        this.notification.sendNotification(res.data.notificationId)
      },
      error:(err)=>{
        this.toastr.error(err)
      }
  })
  }
  changeCancellationRequests(status:"Accepted"|"Rejected"){
    if(status){
      this.doctorService.changeCancellationRequests(this.data.appoinments._id,status).subscribe({
        next:(res:any)=>{
          this.data.appoinments.status=res.data.appointment.status;
          this.data.cancellationRequests = res.data.appointment.cancellationRequests
          console.log("notificationSending   ....",res.data.notificationId)
          this.notification.sendNotification(res.data.adminNotificationId);
          this.notification.sendNotification(res.data.userNotificationId);
          
        },
        error:(err)=>{
          this.toastr.error(err)
        }
    })
    }
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
        this.messageService.getConversationId(userId,this.data.appoinments._id).subscribe({
          next: (res:any)=>{
             console.log("Response form the sidebar of Docotr",res);
             const token = this.tokenService.getToken();
             if(token){
             this.webSocket.setToken(token)
             this.webSocket.sendConsultationLink(userId,res.data.consultationLink)
             }
             this.closeDialog()
             const queryParams: NavigationExtras = {
              queryParams: {
                apppoinmentId: this.data.appoinments._id,
              }
            };
             this.router.navigate(['/doctor/video-consult/', res.data.convId],queryParams)
           },
          error: (err)=>{
             this.toastr.error(err)
           } 
         })
         break;
        break;
      case 'chat':
        this.messageService.getConversationId(userId,this.data.appoinments._id).subscribe({
         next: (res:any)=>{
            console.log("Response form the sidebar of Docotr",res);
            const token = this.tokenService.getToken();
            if(token && res.data.consultationLink){
            this.webSocket.setToken(token)
            this.webSocket.sendConsultationLink(userId,res.data.consultationLink)
            }
            this.closeDialog()
            const queryParams: NavigationExtras = {
              queryParams: {
                apppoinmentId: this.data.appoinments._id,
              }
            };
            this.router.navigate(['/doctor/chats/', res.data.convId],queryParams)
          },
         error: (err)=>{
            this.toastr.error(err)
          } 
        })
        break;
      default:
        // this.router.navigate(['/pages/dashboard']);
    }
  }
  
}
// {appointment:Appointment,notificationId:string}