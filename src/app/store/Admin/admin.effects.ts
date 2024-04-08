import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AdminActions from './admin.action';
import { AdminService } from '../../core/Admin/Services/Admin-Services/auth.service';
import { TokenService } from '../../shared/Services/TokenAuthService/Token.service';

@Injectable()
export class AdminEffects {
  loadAdmins$ = createEffect(() => this.actions$.pipe(
    ofType(AdminActions.loadAdmins),
    switchMap(() => this.adminService.getAdmins()
      .pipe(
        map(admins => AdminActions.adminsLoaded({ admins })),
        catchError(error => of(AdminActions.adminsError({ error })))
      ))
    )
  );

  addAdmin$ = createEffect(() => this.actions$.pipe(
    ofType(AdminActions.addAdmin),
    switchMap(({ admin }) => this.adminService.addAdmin(admin)
      .pipe(
        map(admin => AdminActions.addAdminSuccess({ admin })),
        catchError(error => of(AdminActions.addAdminFailure({ error })))
      ))
    )
  );

  adminLogin$ = createEffect(() => this.actions$.pipe(
    ofType(AdminActions.adminLogin),
    switchMap(({ email, password }) => this.adminService.login(email, password)
      .pipe(
        tap((response:any) => {
            const token = response.data.token;
            this.TokenService.setToken(token);
          }),
        map((res:any) => AdminActions.adminLoginSuccess({ admin: res.data.admin })),
        catchError(error => of(AdminActions.adminLoginFailure({ error })))
      ))
    )
  );

  constructor(
    private TokenService: TokenService,
    private actions$: Actions,
    private adminService: AdminService
  ){}
}
