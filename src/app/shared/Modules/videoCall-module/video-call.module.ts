import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCallRoutes } from './video-call.routing'; 
import { VideoCallComponent } from './video-call.component';
import { VideoCallJoinComponent } from './video-call-join/video-call-join.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VideoCallRoutes
  ],
  declarations: [VideoCallComponent,VideoCallJoinComponent]
})
export class VideoCallModule { }
