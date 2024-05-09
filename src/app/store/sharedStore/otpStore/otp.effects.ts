import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as OtpActions from './otp.action';
import { OtpServiceService } from '../../../shared/Services/otp.service';
import { Router } from '@angular/router';
@Injectable()
export class OtpEffects {

  constructor(
    private actions$: Actions,
    private otpService: OtpServiceService,
    private router:Router
  ) {}

  verifyOTP$ = createEffect(() =>
  this.actions$.pipe(
    ofType(OtpActions.verifyOTP),
    switchMap(({ otp, section }) =>
      this.otpService.verifyOtp(otp, section).pipe(
        tap((data) => console.log('Data', data)),
        map((res) =>{
          console.log(res)
          switch (section) {
            case 'admin':
              break;
            case 'doctor':
              this.router.navigate(['/doctor/login']);
              break;
            default:
              this.router.navigate(['/login']);
          }
          return OtpActions.verifyOTPSuccess();
        }),
        catchError(error => of(OtpActions.verifyOTPFailure({ error })))
      )
    )
    )
 );


  resendOtp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OtpActions.resendOtpRequest),
      delay(5000),
      switchMap(({ token }) =>
        this.otpService.resendOtp(token).pipe(
          map(() => OtpActions.resendOtpSuccess()),
          catchError(error => of(OtpActions.resendOtpFailure({ error })))
        )
      )
    )
  );

}