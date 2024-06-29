import { Injectable, inject } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { TokenService } from '../token-auth-service/Token.service';
import { jwtDecode } from 'jwt-decode';

export interface JwtPayload {
  id: string;
  roles: {
    roleId: string;
    roleName: string;
    permissions: string[];
  }[];
  iat: number;
  exp: number;
}

function redirectToLogin(expectedRole: string): void {
  const router = inject(Router);
  switch (expectedRole) {
    case 'Admin':
      router.navigate(['/admin']);
      break;
    case 'Doctor':
      router.navigate(['/doctor']);
      break;
    default:
      router.navigate(['/']);
  }
}

export const CheckLoggedInService: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const auth = inject(AuthService);
  const tokenService = inject(TokenService);

  const token = tokenService.getToken();
  if (!token || !auth.isAuthenticated()) {
    return true;
  } else {
    const tokenPayload = jwtDecode(token) as JwtPayload;
    const hasExpectedRole = tokenPayload?.roles[0].roleName;
    redirectToLogin(hasExpectedRole);
    return false;
  }
};
