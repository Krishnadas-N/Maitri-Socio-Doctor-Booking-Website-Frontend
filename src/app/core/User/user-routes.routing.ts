import { Routes, RouterModule } from '@angular/router';
import { UserMainComponentComponent } from './Components/user-main-component/user-main-component.component';
import { LandingComponent } from './Components/User-Section/landing-page/landing-page.component';
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
            './Components/user-register/user-register.component'
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
          import('./Components/user-login/user-login.component').then(
            (m) => m.UserLoginComponent
          ),
      },
      
      {
        path: '',
        canActivate:[RoleGuardService],
        data: { expectedRole: 'User' },
        loadComponent: () =>
          import('./Components/user-home/user-home.component').then(
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
          import('./Components/doctor-listing/doctor-listing.component').then(m=>m.DoctorListingComponent)
      },
      {
        path:'get-doctor/:id',
        canActivate:[RoleGuardService],
        data: { expectedRole: 'User' },
        loadComponent: ()=>
          import('./Components/doctor-profile-page/doctor-profile-page.component').then(m=>m.DoctorProfilePageComponent)
      },
      {
        path:'book-appoinment/:id',
        canActivate:[RoleGuardService],
        data: { expectedRole: 'User' },
        loadComponent :()=>
          import('./Components/appoinment-slot-booking/appoinment-slot-booking.component').then(m=>m.AppoinmentSlotBookingComponent)
      },

      {
        path:'checkout/:appoinmentId',
        canActivate:[RoleGuardService],
        data: { expectedRole: 'User' },
        loadComponent: ()=>
          import('./Components/booking-checkout-page/booking-checkout-page.component').then(m=>m.BookingCheckoutPageComponent)

      },
      {
        path:'booking-confirmation/:id',
        canActivate:[RoleGuardService],
        data: { expectedRole: 'User' },
        loadComponent:()=>
          import('./Components/payment-confirmation/payment-confirmation.component').then(m=>m.PaymentConfirmationComponent)
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

