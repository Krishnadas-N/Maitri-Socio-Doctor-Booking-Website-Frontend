import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TokenService } from '../Services/token-auth-service/Token.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const token = tokenService.getToken()
  if (!req.headers.has('Authorization')) {
    if(token){
      console.log("token Sended",token)
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      })
      return next(req);
    } else {
      console.warn('No token found for request.');
      return next(req);
    }
  } else {
    return next(req);
  }
};
