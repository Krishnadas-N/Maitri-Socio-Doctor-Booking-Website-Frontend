import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as UserActions from '../../../../store/User/user.action';

@Injectable({
  providedIn: 'root'
})
export class UserExceptionService {

  constructor(
    private actions$: Actions,
    private snackBar: MatSnackBar
  ) {}

  handleErrors(): Observable<never> {
    return this.actions$.pipe(
      ofType(
        UserActions.loginUserFailure,
        UserActions.registerUserFailure,
        UserActions.loadUserFailure,
        UserActions.blockUserFailure,
        UserActions.loadUsersFailure,
        UserActions.updateUserProfileFailure,
        UserActions.loadUserByIdFailure,

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
