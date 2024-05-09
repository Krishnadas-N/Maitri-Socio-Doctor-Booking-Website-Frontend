import { Routes, RouterModule } from '@angular/router';
import { CheckLoggedInService } from '../../shared/Services/auth-service/check-isloggedIn.service';
import { RoleGuardService } from '../../shared/Services/auth-service/role-guard.service';
import { DoctorMainComponent } from './doctor-main-page/doctor-main.component';
import { DoctorFeedMainComponent } from './Components/Doctor-Feed/doctor-feed-main/doctor-feed-main.component';

export const doctorRoutes: Routes = [

  {
    path: 'doctor',
    data: { expectedRole: 'Doctor' },
    component: DoctorMainComponent,
    children: [
      {
        path: 'register',
        data: { expectedRole: 'Doctor' },
        canActivate:[CheckLoggedInService],
        loadComponent: () =>
          import(
            './Components/doctor-basic-register/doctor-register.component'
          ).then((m) => m.DoctorRegisterComponent),
      },
      {
        path: 'verify',
        data: { expectedRole: 'Doctor' },
        canActivate:[CheckLoggedInService],
        loadComponent: () =>
          import(
            '../../shared/Components/otp-component/otp.component'
          ).then((m) => m.OtpComponent),
      },
      {
        path: 'login',
        canActivate:[CheckLoggedInService],
        data: { expectedRole: 'Doctor' },
        loadComponent: () =>
          import(
            './Components/doctor-login/doctor-login.component'
          ).then((m) => m.DoctorLoginComponent),
      },
      {
        path: 'complete-verification', //Wild card route parameter
        data: { expectedRole: 'Doctor' },
        loadComponent: () =>
          import(
            './Components/three-step-register/three-step-register.component'
          ).then((m) => m.ThreeStepRegisterComponent),
      },
      {
        path: 'feed',
        data: { expectedRole: 'Doctor' },
        canActivateChild:[RoleGuardService],
        component: DoctorFeedMainComponent,
        children: [
          {
            path: '',
            data: { expectedRole: 'Doctor' },
            loadComponent: () =>
              import(
                './Components/Doctor-Feed/doctor-feed-home/doctor-feed-home.component'
              ).then((m) => m.DoctorFeedHomeComponent),
          },
          {
            path: 'my-feed',
            data: { expectedRole: 'Doctor' },
            loadComponent: () =>
              import(
                './Components/Doctor-Feed/doctor-my-feed/doctor-my-feed.component'
              ).then((m) => m.DoctorMyFeedComponent),
          },
          {
            path:'p/:id',
            data: { expectedRole: 'Doctor' },
            loadComponent: () =>
              import(
                '../../shared/Components/post-comment/post-comment.component'
              ).then((m) => m.PostCommentComponent),
          }
        ],
      },
      {
        path:'schedule-timings',
        data: { expectedRole: 'Doctor' },
        canActivate:[RoleGuardService],
        loadComponent :()=> import('./Components/schedule-timings/schedule-timings.component'
         ).then((m)=>m.ScheduleTimingsComponent)
      },
      {
        path:'profile',
        data: { expectedRole: 'Doctor' },
        canActivate:[RoleGuardService],
        loadComponent :()=> import('./Components/doctor-settings/doctor-settings.component'
      ).then((m)=>m.SettingsPageComponent)
      },
      {
        path:'appoinments',
        data: { expectedRole: 'Doctor' },
        canActivate:[RoleGuardService],
        loadComponent :()=> 
            import('./Components/appoinment-listing/appoinment-listing.component'
            ).then(m=>m.AppoinmentListingComponent)
      },
      {
        path:'notifications',
        data: { expectedRole: 'Doctor' },
        canActivate:[RoleGuardService],
        loadComponent:()=>import('../../shared/Components/notification-component/notification.component').then(m=>m.NotificationComponent)
      },
      {
        path:'chats',
        data: { expectedRole: 'Doctor' },
        canActivate:[RoleGuardService],
        canActivateChild:[RoleGuardService],
        loadComponent:()=>
          import('../../shared/Components/chat-component/chat.component').then(m=>m.ChatComponent),
        children:[
          {
            path:':id',
            loadComponent:()=>import('../../shared/Components/chat-room/chat-room.component').then(mod=>mod.ChatRoomComponent),
            data: { userType: 'doctor' },
          }
        ]
      },
      {
        path:'video-consult',
        canActivate:[RoleGuardService],
        canActivateChild:[RoleGuardService],
        data: { expectedRole: 'Doctor' },
        loadChildren:()=>import( '../../shared/Modules/videoCall-module/video-call.module').then(m=>m.VideoCallModule)
        },
      
    ],
  },
];

