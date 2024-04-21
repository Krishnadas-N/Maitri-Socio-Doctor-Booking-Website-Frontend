import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileMainComponent } from './userProfile-Main/userProfile-Main.component';
import { Router, RouterModule } from '@angular/router';
import { profileRoutes } from './profile.routing';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfilePictureComponent } from '../../../../shared/Components/Profile-Picture/Profile-Picture.component';



@NgModule({
  declarations: [UserProfileMainComponent,HomeProfileComponent],
  imports: [
    CommonModule,
    ProfilePictureComponent,
    ReactiveFormsModule,
    RouterModule.forChild(profileRoutes)
  ]
})
export class UserProfileModule { }
