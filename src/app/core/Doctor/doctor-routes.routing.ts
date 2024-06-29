import { Routes } from '@angular/router';
import { CheckLoggedInService } from '../../shared/Services/auth-service/check-isloggedIn.service';
import { RoleGuardService } from '../../shared/Services/auth-service/role-guard.service';
import { DoctorMainComponent } from './pages/doctor-main-page/doctor-main.component';
import { DoctorFeedMainComponent } from './pages/feed-pages/doctor-feed-main/doctor-feed-main.component';
import { checkProfileIsCompleteGuard } from './Services/Guards/check-profile-is-complete.guard';

export const doctorRoutes: Routes = [
  {
    path: 'doctor',
    data: { expectedRole: 'Doctor' },
    component: DoctorMainComponent,
    children: [
      {
        path: 'register',
        data: { expectedRole: 'Doctor' },
        canActivate: [CheckLoggedInService],
        loadComponent: () =>
          import(
            './pages/doctor-basic-register/doctor-register.component'
          ).then((m) => m.DoctorRegisterComponent),
      },
      {
        path: 'verify',
        data: { expectedRole: 'Doctor' },
        canActivate: [CheckLoggedInService],
        loadComponent: () =>
          import('../../shared/Components/otp-component/otp.component').then(
            (m) => m.OtpComponent
          ),
      },
      {
        path: 'login',
        canActivate: [CheckLoggedInService],
        data: { expectedRole: 'Doctor' },
        loadComponent: () =>
          import('./pages/doctor-login/doctor-login.component').then(
            (m) => m.DoctorLoginComponent
          ),
      },
      {
        path: 'complete-verification', //Wild card route parameter
        data: { expectedRole: 'Doctor' },
        canActivate: [RoleGuardService],
        loadComponent: () =>
          import(
            './pages/three-step-register/three-step-register.component'
          ).then((m) => m.ThreeStepRegisterComponent),
      },
      {
        path: 'feed',
        data: { expectedRole: 'Doctor' },
        canActivateChild: [RoleGuardService],
        component: DoctorFeedMainComponent,
        children: [
          {
            path: '',
            data: { expectedRole: 'Doctor' },
            loadComponent: () =>
              import(
                './pages/feed-pages/doctor-feed-home/doctor-feed-home.component'
              ).then((m) => m.DoctorFeedHomeComponent),
          },
          {
            path: 'my-feed',
            data: { expectedRole: 'Doctor' },
            loadComponent: () =>
              import(
                './pages/feed-pages/doctor-my-feed/doctor-my-feed.component'
              ).then((m) => m.DoctorMyFeedComponent),
          },
          {
            path: 'p/:id',
            data: { expectedRole: 'Doctor' },
            loadComponent: () =>
              import(
                '../../shared/Components/post-comment/post-comment.component'
              ).then((m) => m.PostCommentComponent),
          },
        ],
      },
      {
        path: '',
        data: { expectedRole: 'Doctor' },
        canActivate: [checkProfileIsCompleteGuard, RoleGuardService],
        loadComponent: () =>
          import('./pages/doctor-dashboard/doctor-dashboard.component').then(
            (m) => m.DoctorDashboardComponent
          ),
      },
      {
        path: 'schedule-timings',
        data: { expectedRole: 'Doctor' },
        canActivate: [RoleGuardService],
        loadComponent: () =>
          import('./pages/schedule-timings/schedule-timings.component').then(
            (m) => m.ScheduleTimingsComponent
          ),
      },
      {
        path: 'profile',
        data: { expectedRole: 'Doctor' },
        canActivate: [RoleGuardService],
        loadComponent: () =>
          import('./pages/doctor-settings/doctor-settings.component').then(
            (m) => m.SettingsPageComponent
          ),
      },

      {
        path: 'appointments',
        data: { expectedRole: 'Doctor' },
        canActivate: [RoleGuardService],
        loadComponent: () =>
          import(
            './pages/appoinment-listing/appoinment-listing.component'
          ).then((m) => m.AppoinmentListingComponent),
      },
      {
        path: 'notifications',
        data: { expectedRole: 'Doctor' },
        canActivate: [RoleGuardService],
        loadComponent: () =>
          import(
            '../../shared/Components/notification-component/notification.component'
          ).then((m) => m.NotificationComponent),
      },
      {
        path: 'chats',
        data: { expectedRole: 'Doctor' },
        canActivate: [RoleGuardService],
        canActivateChild: [RoleGuardService],
        loadComponent: () =>
          import('../../shared/Components/chat-component/chat.component').then(
            (m) => m.ChatComponent
          ),
        children: [
          {
            path: ':id',
            data: { expectedRole: 'Doctor' },
            loadComponent: () =>
              import(
                '../../shared/Components/chat-room/chat-room.component'
              ).then((mod) => mod.ChatRoomComponent),
          },
        ],
      },
      {
        path: 'video-consult',
        canActivate: [RoleGuardService],
        canActivateChild: [RoleGuardService],
        data: { expectedRole: 'Doctor' },
        loadChildren: () =>
          import(
            '../../shared/Modules/videoCall-module/video-call.module'
          ).then((m) => m.VideoCallModule),
      },
      {
        path: 'payments',
        data: { expectedRole: 'Doctor' },
        canActivate: [RoleGuardService],
        loadComponent: () =>
          import('./pages/payment-wallet/payment-wallet.component').then(
            (m) => m.PaymentWalletComponent
          ),
      },
    ],
  },
];
