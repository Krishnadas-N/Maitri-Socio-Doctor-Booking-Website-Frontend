import { Routes, RouterModule } from '@angular/router';
import { CheckLoggedInService } from '../../shared/Services/auth-service/check-isloggedIn.service';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { RoleGuardService } from '../../shared/Services/auth-service/role-guard.service';
import { AdminPageComponentComponent } from './Components/admin-page/admin-page.component';


export const adminRoutes: Routes = [
  {
    path: 'admin/login',
    canActivate:[CheckLoggedInService],
    data: { expectedRole: 'Admin' },
    component: AdminLoginComponent,
  },
  
  {
    path: 'admin',
    canActivate:[RoleGuardService],
    canActivateChild:[RoleGuardService],
    component: AdminPageComponentComponent,
    data: { expectedRole: 'Admin' },
    children: [
      {
        path: 'users',
        data: { expectedRole: 'Admin' },
        loadComponent: () =>
          import('./Components/user-list/user-list.component').then(
            (m) => m.UserListComponent
          ),
      },
      {
        path: 'users/:userId',
        data: { expectedRole: 'Admin' },
        loadComponent: () =>
          import(
            '../../shared/Components/profile/profile.component'
          ).then((m) => m.ProfileComponent),
      },
      {
        path: 'doctors',
        data: { expectedRole: 'Admin' },
        loadComponent: () =>
          import(
            './Components/doctor-list/doctor-list.component'
          ).then((m) => m.DoctorListComponent),
      },
      {
        path: 'specializations',
        data: { expectedRole: 'Admin' },
        loadComponent: () =>
          import(
            './Components/specialization-table/specialization-table.component'
          ).then((m) => m.SpecializationTableComponent),
      },
      {
        path: 'doctors/:doctorId',
        data: { expectedRole: 'Admin' },
        loadComponent: () =>
          import(
            '../../shared/Components/profile/profile.component'
          ).then((m) => m.ProfileComponent),
      },
    ],
  },

];

