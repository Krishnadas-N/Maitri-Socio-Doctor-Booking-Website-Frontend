import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../../core/User/Services/user.service';
import { blockUser, blockUserFailure, blockUserSuccess, editUserProfile, editUserProfileFailure, editUserProfileSuccess, loadUser, loadUserById, loadUserByIdFailure, loadUserByIdSuccess, loadUserFailure, loadUserSuccess, loadUsers, loadUsersFailure, loadUsersSuccess, loginUser, loginUserFailure, loginUserSuccess, registerUser, registerUserFailure, registerUserSuccess } from './user.action';
import { Router } from '@angular/router';
import { TokenService } from '../../shared/Services/token-auth-service/Token.service';

@Injectable()
export class UserEffects {

    constructor(private userService :UserService,
        private actions$:Actions,
        private router: Router,
        private tokenService:TokenService
        ){}

    loginUser$ = createEffect(() =>
                this.actions$.pipe(
                ofType(loginUser),
                delay(5000),
                switchMap(({ email, password }) =>
                this.userService.login(email, password).pipe(
                    tap((data) => console.log('Login Data', data)),
                    map((response: any) => {
                      this.tokenService.setToken(response.data.token);
                      this.tokenService.setAccessToken(response.data.revokeAcessToken)
                        this.router.navigate(['/'])
                        return loginUserSuccess({ user:response.data.user, token:response.data.token });
                    }),
                    catchError((error) =>{
                      console.log("Log from effecrts",error);
                      return  of(loginUserFailure({ error:error }))
                    }
                  )
                )
                )
        )
    );

    registerUser$ = createEffect(() =>
    this.actions$.pipe(
        ofType(registerUser),
        delay(5000),
        switchMap(({ user,password,confirmPassword }) => 
            this.userService.register(user,password,confirmPassword).pipe(
                map((response: any) => {
                    console.log(response)
                    this.router.navigate(['/verify'],{queryParams:{authToken: response.data.token}});
                    return registerUserSuccess();
                }),
                catchError((error) => of(registerUserFailure({ error })))
            )
            )
        )
    );



    
  blockUser$ = createEffect(() => this.actions$.pipe(
    ofType(blockUser),
    switchMap(({ id }) =>
      this.userService.blockUser(id).pipe(
        tap(data=>console.log("change status of user", data)),
        map((res:any) =>
          blockUserSuccess({ user:{...res.data,id:res.data._id}})
        ),
        catchError(error =>
          of(blockUserFailure({ error }))
        )
      )
    )
  ));

  loadUserById$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserById),
    switchMap(({ id }) =>
      this.userService.getUserById(id).pipe(
        tap((data)=>console.log("data form user Id",data)),
        map((res:any) => loadUserByIdSuccess({ user:res.data })),
        catchError(error => of(loadUserByIdFailure({ error })))
      )
    )
  ));

  getCurrentUser$ = createEffect(()=>this.actions$.pipe(
    ofType(loadUser),
    switchMap(()=>{
     return this.userService.getCurrentUser().pipe(
      tap((data)=>console.log("data form getting current user",data)),
      map((res:any) => loadUserSuccess({ user:res.data })),
        catchError(error => of(loadUserFailure({ error })))
      )
    })
  ));

  editUserProfile$ = createEffect(() => this.actions$.pipe(
    ofType(editUserProfile),
    switchMap(({ user }) =>
      this.userService.editUserProfile(user).pipe(
        map((res:any) => editUserProfileSuccess({ user: res.data })),
        catchError(error => of(editUserProfileFailure({ error })))
      )
    )
  ));

}
