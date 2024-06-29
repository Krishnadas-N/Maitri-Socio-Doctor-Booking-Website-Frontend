import { Injectable, inject } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  ActivatedRoute,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { jwtDecode } from 'jwt-decode';
import { TokenService } from '../token-auth-service/Token.service';

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
      router.navigate(['/admin/login']);
      break;
    case 'Doctor':
      router.navigate(['/doctor/login']);
      break;
    default:
      router.navigate(['/login']);
  }
}

export const RoleGuardService: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const auth = inject(AuthService);
  const tokenService = inject(TokenService);
  const expectedRole = route.data['expectedRole'];
  const token = tokenService.getToken();
  if (!token) {
    redirectToLogin(expectedRole);
    return false;
  }
  try {
    const tokenPayload = jwtDecode(token) as JwtPayload;
    const hasExpectedRole = tokenPayload?.roles.some(
      (role) => role.roleName === expectedRole
    );
    console.log(
      auth.isAuthenticated(),
      tokenPayload,
      expectedRole,
      hasExpectedRole
    );
    if (!auth.isAuthenticated() || !hasExpectedRole) {
      redirectToLogin(expectedRole);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Error decoding token:', error);
    redirectToLogin(expectedRole);
    return false;
  }
};
