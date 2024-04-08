import { Injectable, inject } from '@angular/core';
import { 
  Router,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { AuthService } from './auth.service';
import { jwtDecode } from "jwt-decode";
import { TokenService } from '../TokenAuthService/Token.service';

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

export const RoleGuardService = () => {
  const auth = inject(AuthService);
  const router =inject(Router);
  const tokenService = inject(TokenService)
  const activatedRoute = inject(ActivatedRoute);
  const routeSnapshot =activatedRoute.snapshot;
  const expectedRole = routeSnapshot.data['expectedRole'];
  const token = tokenService.getToken();
    if (!token) {
      router.navigate(['login']);
      return false;
    }
    const tokenPayload =jwtDecode(token) as JwtPayload;
    const hasExpectedRole = tokenPayload?.roles.some(role => role.roleName === expectedRole);
    console.log(tokenPayload,hasExpectedRole)
    if (!auth.isAuthenticated() || !hasExpectedRole) {
      router.navigate(['login']);
      return false;
    }
    return true;
}
