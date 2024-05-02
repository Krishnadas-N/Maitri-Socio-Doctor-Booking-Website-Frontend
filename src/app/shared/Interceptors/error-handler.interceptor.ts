import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { PLATFORM_ID, inject  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  console.log('Request URL: ' + req.url);
  

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log("Error from interceptor",error);
      let errorMessage = '';
      if (isPlatformBrowser(platformId)) {
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = `Error: ${error.error.message}`;
      } 
     } else {
        // Server-side error
        if (error.error && error.error.error && error.error.error.message) {
          errorMessage = `Error: ${error.status}\t ${error.error.error.message}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    })
  );
};
