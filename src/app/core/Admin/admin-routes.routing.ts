import { Routes, RouterModule } from '@angular/router';
import { CheckLoggedInService } from '../../shared/Services/auth-service/check-isloggedIn.service';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { RoleGuardService } from '../../shared/Services/auth-service/role-guard.service';



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
    loadComponent: () =>
      import('./pages/admin-page/admin-page.component').then(
        (m) => m.AdminPageComponentComponent
      ),
    data: { expectedRole: 'Admin' },
    children: [
      {
        path: '',
        data: {expectedRole: 'Admin' },
        loadComponent: () =>
          import('./pages/admin-dashboard/admin-dashboard.component').then(
            (m) => m.AdminDashboardComponent
          ),
      },
      {
        path: 'users',
        data: { expectedRole: 'Admin' },
        loadComponent: () =>
          import('./pages/user-list/user-list.component').then(
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
            './pages/doctor-list/doctor-list.component'
          ).then((m) => m.DoctorListComponent),
      },
      {
        path: 'specializations',
        data: { expectedRole: 'Admin' },
        loadComponent: () =>
          import(
            './pages/specialization-table/specialization-table.component'
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
      {
        path:'specialized-doctors/:specId',
        data: { expectedRole: 'Admin' },
        loadComponent: () =>
          import(
            './pages/specialized-doctors/specialized-doctors.component'
          ).then((m) => m.SpecializedDoctorsComponent),
      },
      {
        path:'appointments',
        data: { expectedRole: 'Admin' },
        loadComponent: () =>
          import(
            './pages/appoinment-list/appoinment-list.component'
          ).then((m) => m.AppoinmentListComponent),
      },
      {
        path:'transactions',
        data: { expectedRole: 'Admin' },
        loadComponent: () =>
          import(
            './pages/admin-transaction/admin-transaction.component'
          ).then((m) => m.AdminTransactionComponent),
      },
      {
        path:'appointments/:appointmentId',
        data: { expectedRole: 'Admin' },
        loadComponent: () =>
          import(
            './pages/appoinment-details/appoinment-details.component'
          ).then((m) => m.AppoinmentDetailsComponent),
      },
      {
        path:'reviews',
        data: { expectedRole: 'Admin' },
        loadComponent: () =>
          import(
            './pages/review-listing/review-listing.component'
          ).then((m) => m.ReviewListingComponent),
      },
      {
        path:'notifications',
        data: { expectedRole: 'Admin' },
        loadComponent: () =>
          import(
            '../../shared/Components/notification-component/notification.component'
          ).then((m) => m.NotificationComponent),
      }
    ],
  },

];

