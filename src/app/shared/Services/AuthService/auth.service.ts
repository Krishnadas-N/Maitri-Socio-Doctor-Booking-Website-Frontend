import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from '../TokenAuthService/Token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(public jwtHelper: JwtHelperService,private tokenService:TokenService) {}
  public isAuthenticated(): boolean {
    const token = this.tokenService.getToken()
    return !this.jwtHelper.isTokenExpired(token);
  }
}
