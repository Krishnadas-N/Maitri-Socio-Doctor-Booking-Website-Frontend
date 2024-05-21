import { Routes, RouterModule } from '@angular/router';
import { UserMainComponentComponent } from './pages/user-main-component/user-main-component.component'; 
import { LandingComponent } from './pages/landing-page/landing-page.component'; 
import { CheckLoggedInService } from '../../shared/Services/auth-service/check-isloggedIn.service';
import { RoleGuardService } from '../../shared/Services/auth-service/role-guard.service';

export const userRoutes: Routes = [
  {
    path: '',
    component: UserMainComponentComponent,
    data: { expectedRole: 'User' },
    children: [
      {
        path: 'home',
        data: { expectedRole: 'User' },
        component: LandingComponent,
      },
      {
        path: 'register',
        data: { expectedRole: 'User' },
        canActivate:[CheckLoggedInService],
        loadComponent: () =>
          import(
            './pages/user-register/user-register.component'
          ).then((m) => m.UserRegisterComponent),
      },
      {
        path: 'verify',
        data: { expectedRole: 'User',section:'user' },
        canActivate:[CheckLoggedInService],
        loadComponent: () =>
          import(
            '../../shared/Components/otp-component/otp.component'
          ).then((m) => m.OtpComponent),
      },
      {
        path: 'login',
        canActivate:[CheckLoggedInService],
        data: { expectedRole: 'User' },
        loadComponent: () =>
          import('./pages/user-login/user-login.component').then(
            (m) => m.UserLoginComponent
          ),
      },
      {
        path:'survey',
        canActivate:[RoleGuardService],
        data: { expectedRole: 'User' },
        loadComponent: () =>
          import('./Components/survery-component/survey.component').then(
            (m) => m.SurveyComponent
          ),
      },
      
      {
        path: '',
        canActivate:[RoleGuardService],
        data: { expectedRole: 'User' },
        loadComponent: () =>
          import('./pages/user-home/user-home.component').then(
            (m) => m.UserHomeComponent
          ),
      },
      
      {
        path: 'profile',
        canActivate:[RoleGuardService],
        data: { expectedRole: 'User' },
        loadChildren: () =>
          import('./Modules/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path:'find-doctors',
        canActivate:[RoleGuardService],
        data: { expectedRole: 'User' },
        loadComponent: ()=>
          import('./pages/doctor-listing/doctor-listing.component').then(m=>m.DoctorListingComponent)
      },
      {
        path:'get-doctor/:id',
        canActivate:[RoleGuardService],
        data: { expectedRole: 'User' },
        loadComponent: ()=>
          import('./pages/doctor-profile-page/doctor-profile-page.component').then(m=>m.DoctorProfilePageComponent)
      },
      {
        path:'book-appoinment/:id',
        canActivate:[RoleGuardService],
        data: { expectedRole: 'User' },
        loadComponent :()=>
          import('./pages/appoinment-slot-booking/appoinment-slot-booking.component').then(m=>m.AppoinmentSlotBookingComponent)
      },

      {
        path:'checkout/:appoinmentId',
        canActivate:[RoleGuardService],
        data: { expectedRole: 'User' },
        loadComponent: ()=>
          import('./pages/booking-checkout-page/booking-checkout-page.component').then(m=>m.BookingCheckoutPageComponent)

      },
      {
        path:'booking-confirmation/:id',
        canActivate:[RoleGuardService],
        data: { expectedRole: 'User' },
        loadComponent:()=>
          import('./pages/payment-confirmation/payment-confirmation.component').then(m=>m.PaymentConfirmationComponent)
      },
      {
        path:'chats',
        canActivate:[RoleGuardService],
        data: { expectedRole: 'User' },
        loadComponent:()=>
          import('../../shared/Components/chat-component/chat.component').then(m=>m.ChatComponent),
        children:[
          {
            path:':id',
            data: { expectedRole: 'User' },
            loadComponent:()=>import('../../shared/Components/chat-room/chat-room.component').then(mod=>mod.ChatRoomComponent),
          }
        ]
      },
      {
      path:'video-consult',
      canActivate:[RoleGuardService],
      canActivateChild:[RoleGuardService],
      data: { expectedRole: 'User' },
      loadChildren:()=>import( '../../shared/Modules/videoCall-module/video-call.module').then(m=>m.VideoCallModule)
      },
      
    ],
  },
];

