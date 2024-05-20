import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/admin-service/auth.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AdminAppointmentDetails } from '../../Models/appoinments.model';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-appoinment-details',
  templateUrl: './appoinment-details.component.html',
  styleUrls: ['./appoinment-details.component.css'],
  standalone:true,
  imports:[CommonModule,RouterLink,ImageModule]
})
export class AppoinmentDetailsComponent implements OnInit {
  openTab:'Prescription'|'MedicalRecord'='Prescription'
  appointmentId!:string;
  constructor(private adminService:AdminService,private route:ActivatedRoute) { }
  appoinmentDetails!:AdminAppointmentDetails;
  ngOnInit() {
    this.appointmentId = this.route.snapshot.params['appointmentId'];
    console.log("appointmentId", this.appointmentId);
    this.fetchAppoinmentDetails()
  }

  fetchAppoinmentDetails(){
    this.adminService.getAppoinmentDetailOfanyAppointment(this.appointmentId).subscribe({
      next:(res)=>{
        console.log("Detial appoinment Data",res);
        this.appoinmentDetails = res.data
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  displayRatingStars(rating: number): string {
    const roundedRating = Math.round(rating * 2) / 2;
    const numberOfFullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;

    let stars = '';
    for (let i = 0; i < numberOfFullStars; i++) {
        stars += '★'; 
    }
    if (hasHalfStar) {
        stars += '½'; 
    }
    const remainingEmptyStars = 5 - Math.ceil(roundedRating);
    for (let i = 0; i < remainingEmptyStars; i++) {
        stars += '☆'; 
    }
    return stars;
}
}
