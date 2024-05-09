import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileMainComponent } from './user-profile-main-page/user-profile-main-page.component'; 
import {  RouterModule } from '@angular/router';
import { profileRoutes } from './profile.routing';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfilePictureComponent } from '../../../../shared/Components/profile-picture/profile-picture.component';
import { AppoinmentListComponent } from '../../../../shared/Components/appoinment-list/appoinment-list.component'; 
import { UserSideAppoinmentListingComponent } from './user-side-appoinment-listing/user-side-appoinment-listing.component'; 
import { UserPaginationComponent } from '../../../../shared/Components/user-pagination/user-pagination.component';
import { InterestedDoctorsComponent } from './interested-doctors/interested-doctors.component'; 
import { WalletComponent } from '../../../../shared/Components/wallet/wallet.component';
import { MedicalRecordComponent } from './medical-record/medical-record.component';
import { MediaModalComponent } from '../../../../shared/Components/media-modal/media-modal.component';



@NgModule({
  declarations: [UserSideAppoinmentListingComponent,UserProfileMainComponent,HomeProfileComponent,InterestedDoctorsComponent,MedicalRecordComponent],
  imports: [
    MediaModalComponent,
    WalletComponent,
    UserPaginationComponent,
    AppoinmentListComponent,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfilePictureComponent,
    ReactiveFormsModule,
    RouterModule.forChild(profileRoutes)
  ]
})
export class UserProfileModule { }
