import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { UserService } from '../../core/User/Services/user.service';
import { TokenService } from '../Services/token-auth-service/Token.service';

export const refreshTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const userService = inject(UserService);
  const tokenService = inject(TokenService);
  const accessToken = tokenService.accessRevokeToken();

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && accessToken) {
        return userService.revokeRefreshToken(accessToken).pipe(
          switchMap((res) => {
            const token = res.data;
            if (token) {
              tokenService.setToken(token);
              const updatedReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${token}`,
                },
              });
              return next(updatedReq);
            } else {
              tokenService.logout();
              return throwError(
                () => new Error('Failed to refresh access token')
              );
            }
          })
        );
      } else {
        return throwError(() => error);
      }
    })
  );
};
