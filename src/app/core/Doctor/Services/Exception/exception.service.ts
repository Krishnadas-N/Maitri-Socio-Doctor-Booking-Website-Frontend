import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, ofType } from '@ngrx/effects';
import { Observable, mergeMap } from 'rxjs';
import * as DoctorActions from '../../../../store/Doctor/doctor.action'
@Injectable({
  providedIn: 'root'
})
export class DoctorExceptionService {

  constructor(
    private actions$: Actions,
    private snackBar: MatSnackBar
  ) { }

  
  handleErrors(): Observable<never> {
    return this.actions$.pipe(
      ofType(
        DoctorActions.registerBasicFailure,
        DoctorActions.loginDoctorFailure,
        DoctorActions.registerProfessionalFailure,
        DoctorActions.registerAdditionalFailure,
        DoctorActions.loadDoctorFailure,
        DoctorActions.blockDoctorFailure,
        DoctorActions.VerifyProfileDoctorFailure,
        DoctorActions.loadDoctorByIdFailure
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
