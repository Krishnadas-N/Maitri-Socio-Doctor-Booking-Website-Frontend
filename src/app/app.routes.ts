import { Routes } from '@angular/router';
import { WildCardComponent } from './shared/Components/wild-card/wild-card.component';

export const routes: Routes = [
  {
    path: 'reset-password/:token',
    loadComponent: () =>
      import(
        './shared/Components/change-password/change-password.component'
      ).then((m) => m.ChangePasswordComponent),
  },
    {
      path: 'reset-password',
      loadComponent: () =>
        import(
          './shared/Components/change-password/change-password.component'
        ).then((m) => m.ChangePasswordComponent),
    }

  {
    path: 'Not-found',
    component: WildCardComponent,
  },
  {
    path: '**',
    component: WildCardComponent,
  },
];
