import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileMainComponent } from './userProfile-Main/userProfile-Main.component';
import {  RouterModule } from '@angular/router';
import { profileRoutes } from './profile.routing';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfilePictureComponent } from '../../../../shared/Components/Profile-Picture/Profile-Picture.component';
import { AppoinmentListComponent } from '../../../../shared/Components/appoinmentList/appoinmentList.component';
import { UserSideAppoinmentListingComponent } from './User-Side-AppoinmentListing/User-Side-AppoinmentListing.component';
import { UserPaginationComponent } from '../../../../shared/Components/user-Pagination/user-Pagination.component';
import { InterestedDoctorsComponent } from './interestedDoctors/interestedDoctors.component';



@NgModule({
  declarations: [UserSideAppoinmentListingComponent,UserProfileMainComponent,HomeProfileComponent,InterestedDoctorsComponent],
  imports: [
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
