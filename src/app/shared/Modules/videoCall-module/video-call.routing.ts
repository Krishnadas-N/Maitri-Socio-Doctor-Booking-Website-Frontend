import { Routes, RouterModule } from '@angular/router';
import { VideoCallComponent } from './video-call.component';
import { VideoCallJoinComponent } from './video-call-join/video-call-join.component';

const routes: Routes = [
  {  
    path:':roomId',
    component:VideoCallComponent
    
  },
  {
    path:'join-now',
    component:VideoCallJoinComponent
  },
];

export const VideoCallRoutes = RouterModule.forChild(routes);


// https://arpanghoshal3.medium.com/webrtc-basic-concepts-and-creating-a-simple-video-call-app-1460fc9ef17