import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  const storage = isPlatformBrowser(platformId) ? localStorage : {
    getItem: (key: string) => null,
    setItem: (key: string, value: string) => null,
    removeItem: (key: string) => null,
    clear: () => null,
    length: 0,
    key: (index: number) => null,
  };
  const token = storage.getItem('AuthToken');
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
