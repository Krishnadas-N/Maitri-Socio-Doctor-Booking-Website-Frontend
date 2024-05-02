import { Routes } from '@angular/router';
import { UserMainComponentComponent } from './core/User/Components/user-main-component/user-main-component.component';
import { WildCardComponent } from './shared/Components/wild-card/wild-card.component';
import { LandingCOmponentComponent } from './core/User/Components/User-Section/landing-component/landing-component.component';
import { DoctorMainComponent } from './core/Doctor/Doctor-Main-page/doctor-main.component';
import { authGuard } from './core/User/Guards/Auth/auth.guard';
import { AdminPageComponentComponent } from './core/Admin/Components/Admin-Page-Component/Admin-Page-Component.component';
import { AdminLoginComponent } from './core/Admin/Components/admin-Login/admin-Login.component';
import { RoleGuardService } from './shared/Services/AuthService/role-guard.service';
import { UserHomeComponent } from './core/User/Components/User-Home/User-Home.component';
import { DoctorFeedMainComponent } from './core/Doctor/Components/Doctor-Feed/doctor-feed-main/doctor-feed-main.component';
import { EditPostComponent } from './core/Doctor/Components/Doctor-Feed/edit-post/edit-post.component';
import { VideoCallComponent } from './shared/Components/video-call/video-call.component';




export const routes: Routes = [
  {
    path: '',
    component: UserMainComponentComponent,
    children: [
      {
        path: 'home',
        component: LandingCOmponentComponent,
      },
      {
        path: 'register',
        loadComponent: () =>
          import(
            './core/User/Components/user-register/user-register.component'
          ).then((m) => m.UserRegisterComponent),
      },
      {
        path: 'verify',
        loadComponent: () =>
          import(
            './shared/Components/otp-component/otp-component.component'
          ).then((m) => m.OtpComponentComponent),
        data: { section: 'user' },
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./core/User/Components/user-login/user-login.component').then(
            (m) => m.UserLoginComponent
          ),
      },
      {
        path: '',
        component: UserHomeComponent,
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./core/User/Modules/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path:'find-doctors',
        loadComponent: ()=>
          import('./core/User/Components/doctor-listing/doctor-listing.component').then(m=>m.DoctorListingComponent)
      },
      {
        path:'get-doctor/:id',
        loadComponent: ()=>
          import('./core/User/Components/doctor-profile-page/doctor-profile-page.component').then(m=>m.DoctorProfilePageComponent)
      },
      {
        path:'book-appoinment/:id',
        loadComponent :()=>
          import('./core/User/Components/appoinment-slot-booking/appoinment-slot-booking.component').then(m=>m.AppoinmentSlotBookingComponent)
      },

      {
        path:'checkout/:appoinmentId',
        loadComponent: ()=>
          import('./core/User/Components/booking-checkout-page/booking-checkout-page.component').then(m=>m.BookingCheckoutPageComponent)

      },
      {
        path:'booking-confirmation/:id',
        loadComponent:()=>
          import('./core/User/Components/payment-confirmation/payment-confirmation.component').then(m=>m.PaymentConfirmationComponent)
      },
      {
        path:'chats',
        loadComponent:()=>
          import('./shared/Components/chat-Component/chat-Component.component').then(m=>m.ChatComponentComponent),
        data: { userType: 'user' },
        children:[
          {
            path:':id',
            loadComponent:()=>import('./shared/Components/chatRoom/chatRoom.component').then(mod=>mod.ChatRoomComponent),
            data: { userType: 'user' },
          }
        ]
      },
      
      {
      path:'video-consult',
      component:VideoCallComponent
      },
      
    ],
  },
  {
    path: 'reset-password/:token',
    loadComponent: () =>
      import(
        './shared/Components/change-password/change-password.component'
      ).then((m) => m.ChangePasswordComponent),
  },

  {
    path: 'doctor',
    component: DoctorMainComponent,
    children: [
      {
        path: 'register',
        loadComponent: () =>
          import(
            './core/Doctor/Components/doctor-register/doctor-register.component'
          ).then((m) => m.DoctorRegisterComponent),
      },
      {
        path: 'verify',
        loadComponent: () =>
          import(
            './shared/Components/otp-component/otp-component.component'
          ).then((m) => m.OtpComponentComponent),
        data: { section: 'doctor' },
      },
      {
        path: 'login',
        loadComponent: () =>
          import(
            './core/Doctor/Components/doctor-login/doctor-login.component'
          ).then((m) => m.DoctorLoginComponent),
      },
      {
        path: 'feed',
        component: DoctorFeedMainComponent,
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './core/Doctor/Components/Doctor-Feed/DoctorFeedHome/DoctorFeedHome.component'
              ).then((m) => m.DoctorFeedHomeComponent),
          },
          {
            path: 'my-feed',
            loadComponent: () =>
              import(
                './core/Doctor/Components/Doctor-Feed/doctor-my-feed/doctor-my-feed.component'
              ).then((m) => m.DoctorMyFeedComponent),
          },
          {
            path:'p/:id',
            loadComponent: () =>
              import(
                './shared/Components/postComment/postComment.component'
              ).then((m) => m.PostCommentComponent),
          }
        ],
      },
      {
        path:'schedule-timings',
        loadComponent :()=> import('./core/Doctor/Components/schedule-timings/schedule-timings.component'
         ).then((m)=>m.ScheduleTimingsComponent)
      },
      {
        path:'profile',
        loadComponent :()=> import('./core/Doctor/Components/settingsPage/settingsPage.component'
      ).then((m)=>m.SettingsPageComponent)
      },
      {
        path:'appoinments',
        loadComponent :()=> 
            import('./core/Doctor/Components/AppoinmentListing/AppoinmentListing.component').then(m=>m.AppoinmentListingComponent)
      },
      {
        path:'chats',
        loadComponent:()=>
          import('./shared/Components/chat-Component/chat-Component.component').then(m=>m.ChatComponentComponent),
        data: { userType: 'doctor' },
        children:[
          {
            path:':id',
            loadComponent:()=>import('./shared/Components/chatRoom/chatRoom.component').then(mod=>mod.ChatRoomComponent),
            data: { userType: 'doctor' },
          }
        ]
      }
      
    ],
  },
  {
    path: 'doctor/complete-verification', //Wild card route parameter
    loadComponent: () =>
      import(
        './core/Doctor/Components/three-step-register/three-step-register.component'
      ).then((m) => m.ThreeStepRegisterComponent),
  },
  {
    path: 'admin',
    component: AdminPageComponentComponent,
    data: { expectedRole: 'admin' },
    // canActivate:[RoleGuardService],
    children: [
      {
        path: 'users',
        loadComponent: () =>
          import('./core/Admin/Components/user-list/user-list.component').then(
            (m) => m.UserListComponent
          ),
      },
      {
        path: 'users/:userId',
        loadComponent: () =>
          import(
            './shared/Components/profile-Component/profile-Component.component'
          ).then((m) => m.ProfileComponent),
      },
      {
        path: 'doctors',
        loadComponent: () =>
          import(
            './core/Admin/Components/doctor-list/doctor-list.component'
          ).then((m) => m.DoctorListComponent),
      },
      {
        path: 'specializations',
        loadComponent: () =>
          import(
            './core/Admin/Components/specializationTable/specializationTable.component'
          ).then((m) => m.SpecializationTableComponent),
      },
      {
        path: 'doctors/:doctorId',
        loadComponent: () =>
          import(
            './shared/Components/profile-Component/profile-Component.component'
          ).then((m) => m.ProfileComponent),
      },
    ],
  },
  {
    path: 'admin/login',
    component: AdminLoginComponent,
  },
  {
    path: 'Not-found',
    component: WildCardComponent,
  },
  {
    path: '**',
    component: WildCardComponent,
  },
];
