// import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // const authService = inject(AuthenticationService);
  // const router = inject(Router);

  // return authService.checkLogin().pipe(
  //   map(() => true),
  //   catchError(() => {
  //     return router.createUrlTree(['route-to-fallback-page']);
  //   })
  // );

  const authToken = localStorage.getItem('authToken')
    return authToken?true:false;
};
