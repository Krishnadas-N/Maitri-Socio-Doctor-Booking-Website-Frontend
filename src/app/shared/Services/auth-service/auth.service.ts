import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from '../token-auth-service/Token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(public jwtHelper: JwtHelperService,private tokenService:TokenService) {}
  public isAuthenticated(): boolean {
    const token = this.tokenService.getToken()
    return !this.jwtHelper.isTokenExpired(token);
  }
  
  public hasRole(role: string): boolean {
    const token = this.tokenService.getToken();
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      if (decodedToken && decodedToken.roles) {
        return decodedToken.roles.includes(role);
      }
    }
    return false;
  }

  
}
