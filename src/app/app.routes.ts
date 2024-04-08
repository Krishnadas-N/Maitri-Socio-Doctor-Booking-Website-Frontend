import { Routes } from '@angular/router';
import { UserMainComponentComponent } from './core/User/Components/user-main-component/user-main-component.component';
import { WildCardComponent } from './shared/Components/wild-card/wild-card.component';
import { LandingCOmponentComponent } from './core/User/Components/User-Section/landing-component/landing-component.component';
import { DoctorMainComponent } from './core/Doctor/Doctor-Main-page/doctor-main.component'; 
import { authGuard } from './core/User/Guards/Auth/auth.guard';
import { AdminPageComponentComponent } from './core/Admin/Components/Admin-Page-Component/Admin-Page-Component.component';
import { AdminLoginComponent } from './core/Admin/Components/admin-Login/admin-Login.component';
import { RoleGuardService } from './shared/Services/AuthService/role-guard.service';




export const routes: Routes = [
    {
        path:'',
        component:UserMainComponentComponent,
        children:[
            {
                path:'home',
                component:LandingCOmponentComponent
            },
            {
                path:'register',
                loadComponent:()=>import('./core/User/Components/user-register/user-register.component').then(m=>m.UserRegisterComponent)
            },
            
            {
                path:'verify',
                loadComponent:()=>import('./shared/Components/otp-component/otp-component.component').then(m=>m.OtpComponentComponent),
                data:{ section: 'user'}
            },
            {
                path:'login',
                loadComponent: () => import('./core/User/Components/user-login/user-login.component').then(m=>m.UserLoginComponent)
            },
            {
            path: '',  // Catch-all route. This must be the last item in the list of routes.
            redirectTo: '/home',   // Redirect to home page if no other match is found
            pathMatch: 'full'     // Specifies that a full match should be looked for at the start of the URL against the child routes
            }
        ]
    },
    {
        path:'doctor',
        component:DoctorMainComponent,
        children:[ 
            {
                path:'register',
                loadComponent:()=>import('./core/Doctor/Components/doctor-register/doctor-register.component').then(m=>m.DoctorRegisterComponent)
            },
            {
                path:'verify',
                loadComponent:()=>import('./shared/Components/otp-component/otp-component.component').then(m=>m.OtpComponentComponent),
                data:{ section: 'doctor'}
            },
            {
                path:'login',
                loadComponent:()=>import( './core/Doctor/Components/doctor-login/doctor-login.component').then(m=>m.DoctorLoginComponent)
            },
           {
            path:'feed',
            loadComponent:()=>import('./core/Doctor/Components/Doctor-Feed/doctor-feed-main/doctor-feed-main.component').then(m=>m.DoctorFeedMainComponent)
           }

        ],
    },
    {
        path:'doctor/complete-verification',  //Wild card route parameter
        loadComponent:()=>import('./core/Doctor/Components/three-step-register/three-step-register.component').then(m=>m.ThreeStepRegisterComponent)
     },
    {
        path:'admin',
        component:AdminPageComponentComponent,
        data: { expectedRole: 'admin' },
        // canActivate:[RoleGuardService],
        children:[
            {
                path:'users',
                loadComponent:()=>import('./core/Admin/Components/user-list/user-list.component').then(m=>m.UserListComponent)
            },
            {
                path:'users/:userId',
                loadComponent:()=>import('./shared/Components/profile-Component/profile-Component.component').then(m=>m.ProfileComponent)
            },{
                path:'doctors',
                loadComponent:()=>import('./core/Admin/Components/doctor-list/doctor-list.component').then(m=>m.DoctorListComponent)
            },
            {
                path:'specializations',
                loadComponent:()=>import('./core/Admin/Components/specializationTable/specializationTable.component').then(m=>m.SpecializationTableComponent)
            }
            // ,{
            //     path:'doctors/:doctorId',
            //     loadComponent:()=>import('./shared/Components/profile-Component/profile-Component.component').then(m=>m.ProfileComponent)
            // },
        ]
    },
    {
        path:'admin/login',
        component:AdminLoginComponent
    },
    {
        path: 'Not-found',
        component:WildCardComponent
    },
    {
        path:'**',
        component:WildCardComponent
    }
];
