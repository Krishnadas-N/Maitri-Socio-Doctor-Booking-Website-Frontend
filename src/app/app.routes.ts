import { Routes } from '@angular/router';
import { UserMainComponentComponent } from './core/User/Components/user-main-component/user-main-component.component';
import { WildCardComponent } from './shared/Components/wild-card/wild-card.component';
import { LandingCOmponentComponent } from './core/User/Components/User-Section/landing-component/landing-component.component';
import { DoctorMainComponent } from './core/Doctor/doctor-main/doctor-main.component';
import { ThreeStepRegisterComponent } from './core/Doctor/Components/three-step-register/three-step-register.component';

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
                path:'login',
                loadComponent: () => import('./core/User/Components/user-login/user-login.component').then(m=>m.UserLoginComponent)
            },
            {
                path:'register',
                loadComponent:()=>import('./core/User/Components/user-register/user-register.component').then(m=>m.UserRegisterComponent)
            }
        ]
    },
    {
        path:'doctor',
        component:DoctorMainComponent,
        children:[
            {
                path:'login',
                loadComponent:()=>import( './core/Doctor/Components/doctor-login/doctor-login.component').then(m=>m.DoctorLoginComponent)
            },
            {
                path:'verify',
                loadComponent:()=>import('./shared/Components/otp-component/otp-component.component').then(m=>m.OtpComponentComponent)
            },
           {
                path:'register-basic',
                loadComponent:()=>import('./core/Doctor/Components/doctor-register/doctor-register.component').then(m=>m.DoctorRegisterComponent)
           },
           {
            path:'complete-verification',  //Wild card route parameter
            component:ThreeStepRegisterComponent
           }

        ],
    },
    {
        path:'**',
        component:WildCardComponent
    }
];
