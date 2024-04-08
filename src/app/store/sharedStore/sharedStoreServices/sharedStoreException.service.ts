import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, ofType } from '@ngrx/effects';
import { Observable, mergeMap } from 'rxjs';
import * as otpActions from '../otpStore/otp.action'
@Injectable({
  providedIn: 'root'
})
export class SharedStoreExceptionService {

  constructor(
    private actions$: Actions,
    private snackBar: MatSnackBar
  ) {}

  handleOtpErrors(): Observable<never> {
    return this.actions$.pipe(
      ofType(
        otpActions.resendOtpFailure,
        otpActions.verifyOTPFailure
      ),
      mergeMap(action => {
        console.log("action",action,action.error,);
        const errorMessage = action.error as string || 'An error occurred';
        this.snackBar.open(errorMessage, 'Close', {
          duration: 5000, // Adjust duration as needed
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['mat-toolbar',  'mat-warn']
        });
        return [];
      })
    );
  }
}
