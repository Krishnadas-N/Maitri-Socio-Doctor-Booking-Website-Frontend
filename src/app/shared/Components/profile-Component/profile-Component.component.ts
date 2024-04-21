import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/GlobalStore/app.state';
import {  blockUser, loadUserById } from '../../../store/User/user.action';
import { Doctor } from '../../../store/Doctor/doctor.model';
import { User } from '../../../store/User/user.model';
import { GetCurrentUser } from '../../../store/User/user.selector';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { VerifyProfileDoctor, blockDoctor, loadDoctorById } from '../../../store/Doctor/doctor.action';
import { GetCurrentdoctor } from '../../../store/Doctor/doctor.selectors';
@Component({
  selector: 'app-profile-Component',
  standalone:true,
  imports:[CommonModule,ToastModule,ConfirmDialogModule],
  templateUrl: './profile-Component.component.html',
  styleUrls: ['./profile-Component.component.css'],
  providers:[ConfirmationService,MessageService]
})
export class ProfileComponent implements OnInit {
  userType!: string;
  position: string = 'center';
  constructor(private route:ActivatedRoute,private store:Store<AppState>,private confirmationService: ConfirmationService, private messageService: MessageService) { }
  userDetails: User | null=null;
  DoctorDetails: Doctor | null = null;
  showFullDetailsToggle:boolean =false;
  doctorSpecialization!:any;
  showCertifications: boolean = false;
  ngOnInit() {
    this.route.url.subscribe(urlSegments => {
      if(urlSegments.length > 1){
        console.log('User Type is : ', urlSegments)
        const segment =urlSegments[0].path;
        const paramId = urlSegments[1].path
        if (segment === 'doctors') {
          this.userType = 'doctor';
          this.loadDoctorDetails(paramId);
          this.loadDoctor();
        } else if (segment === 'users') {
          this.userType = 'user';
          // Call a function to fetch user details
          this.loadUserDetails(paramId);
          this.loadUser()
        }
      }
    });

  }
  loadUser(){
    this.store.select(GetCurrentUser).subscribe((user) => {
      this.userDetails = user;
      console.log(this.userDetails,"log from user details in profile");
    });
  }

  loadDoctor(){
    this.store.select(GetCurrentdoctor).subscribe((doctorData)=>{
      this.DoctorDetails = doctorData;
      this.doctorSpecialization = doctorData?.specialization;
    })
  }

  loadUserDetails(userId: string) {
    this.store.dispatch(loadUserById({ id: userId }));
   
  }

  loadDoctorDetails(doctorId: string) {
    this.store.dispatch(loadDoctorById({ id: doctorId }));
    // this.store.dispatch(loadDoctorById({ id: doctorId }));
    // this.store.select('doctor').subscribe((doctor: Doctor) => {
    //   this.DoctorDetails = doctor;
    // });
  }

  toggleBlockStatus(){
    console.log(this.userDetails?._id,this.userType);
    if (this.userType === 'user' && this.userDetails && this.userDetails?._id ) {
      console.log(this.userDetails._id);
      this.store.dispatch(blockUser({ id: this.userDetails._id }));
      this.loadUser()
    }
    else if(this.userType === 'doctor' && this.DoctorDetails && this.DoctorDetails._id ){
      this.store.dispatch(blockDoctor({ id: this.DoctorDetails._id }));
      this.loadDoctor()
      // let doctor= this.DoctorDetails as Doctor;
      // doctor.isAvailable = !doctor.isAvailable;
      // this.store.dispatch(addDoctor({data: doctor})); 
    }
  }

  toggleBlock() {
    console.log("cliked block");
    const isBlocked: string = (this.DoctorDetails ? (this.DoctorDetails.isBlocked ? 'Unblock' : 'Block') : (this.userDetails ? (this.userDetails.isBlocked ? 'Unblock' : 'Block') : 'Block'));
    this.confirmationService.confirm({
      message: `Are you sure you want to ${isBlocked} the User?`,
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted' });
          this.toggleBlockStatus();

      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Process incomplete', life: 3000 });
      },
      key: 'positionDialog'
  });
  }

  verifyProfile(){
    this.confirmationService.confirm({
      message: `Are you sure you want to To Verify the Doctor?`,
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted' });
          this.verifyDoctorProfile();

      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Process incomplete', life: 3000 });
      },
      key: 'positionDialog'
  });
  }

  verifyDoctorProfile(){
    if(this.DoctorDetails?._id){
    this.store.dispatch(VerifyProfileDoctor({id:this.DoctorDetails?._id}));
    }
  }
}
