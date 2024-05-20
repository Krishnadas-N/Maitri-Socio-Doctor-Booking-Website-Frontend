import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { OtpServiceService } from '../../shared/Services/otp.service';
import { AuthService } from '../../core/Doctor/Services/auth-service/auth.service'; 
import * as DoctorActions from './doctor.action';
import { DoctorService } from '../../core/Doctor/Services/doctor-services/doctor.service'; 
@Injectable()
export class doctorEffects {

    constructor(
        private doctorAuthService :AuthService,
        private actions$:Actions,
        private router: Router,
        private otpService:OtpServiceService,
        private doctorService:DoctorService
        ){}


  registerBasicInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DoctorActions.registerBasicRequest),
      delay(5000),
      switchMap(({ doctorData }) =>
        this.doctorAuthService.registerBasic(doctorData).pipe(
          map((res) => {
          this.router.navigate(['/doctor/verify'],{queryParams:{authToken:encodeURIComponent(res.data.token)}})
          return DoctorActions.registerBasicSuccess()
          }),
          catchError(error => of(DoctorActions.registerBasicFailure({ error })))
        )
      )
    )
  );


    loginDoctor$ = createEffect(() =>
    this.actions$.pipe(
        ofType(DoctorActions.loginDoctorRequest),
        delay(5000),
        switchMap(({ email,password }) =>
        this.doctorAuthService.login(email,password).pipe(
          tap((data)=>console.log("dat from doctor Login",data)),
            map((res:any) => {
              localStorage.setItem('AuthToken', res.data.token);
              console.log(res.data.doctor.isVerified, res.data.doctor.isProfileComplete); // Corrected access to isProfileComplete
              if (res.data.doctor.isVerified === true && res.data.doctor.isProfileComplete === true) {
                this.router.navigate(['/doctor']);
              } else {
                console.log("redirect to complete ");
                this.router.navigate(['/doctor/complete-verification']);
              }
              return DoctorActions.loginDoctorSuccess({ token: res.data.token, doctor: res.data.doctor });
            }),
            catchError(error => {
              tap(error=>console.log(error))
             return of(DoctorActions.loginDoctorFailure({ error }))
            })
        )
        )
    )
    );

    registerProfessionalInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DoctorActions.registerProfessionalRequest),
      tap(()=>console.log("log from  professional")),
      switchMap(({ formData }) =>
        this.doctorAuthService.registerProfessional(formData).pipe(
          tap(data=>console.log("log from  registerProfessional info succces",data)),
          map((res) => DoctorActions.registerProfessionalSuccess(res.data)),
          catchError(error => of(DoctorActions.registerProfessionalFailure({ error })))
        )
      )
    )
  );   
  
  registerAdditionalInfo$ = createEffect(() =>
  this.actions$.pipe(
    ofType(DoctorActions.registerAdditionalRequest),
    switchMap(({ doctorData }) =>
      this.doctorAuthService.registerAdditional(doctorData).pipe(
        tap(data=>console.log("log from additional info succces",data)),
        map((res) => DoctorActions.registerAdditionalSuccess(res.data)),
        catchError(error => of(DoctorActions.registerAdditionalFailure({ error })))
      )
    )
    )
    );

    
  loadDoctor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DoctorActions.loadDoctor),
      switchMap(() =>
        this.doctorService.getDoctor().pipe(
          map((res:any) => DoctorActions.loadDoctorSuccess({ doctor:res.data })),
          catchError((error) => of(DoctorActions.loadDoctorFailure({ error })))
        )
      )
    )
  );

  AdminloadDoctors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DoctorActions.AdminloadDoctors),
      switchMap(({ page, pageSize, searchQuery }) =>
        this.doctorService.getDoctors(page, pageSize, searchQuery).pipe(
          map((res:any) => DoctorActions.loadDoctorsSuccess({ doctors:res.data.doctors, totalPages:res.data.totalPages })),
          catchError((error) => of(DoctorActions.loadDoctorsFailure({ error })))
        )
      )
    )
  );


  VerifyProfileDoctor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DoctorActions.VerifyProfileDoctor),
      switchMap(({ id }) =>
        this.doctorService.verifyProfileDoctor(id).pipe(
          map((res:any) => DoctorActions.VerifyProfileDoctorSuccess({ doctor:res.data })),
          catchError((error) => of(DoctorActions.VerifyProfileDoctorFailure({ error })))
        )
      )
    )
  );

  loadDoctorById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DoctorActions.loadDoctorById),
      switchMap(({ id }) =>
        this.doctorService.getDoctorById(id).pipe(
          tap(data=>console.log('Data from Get doctor',data)),
          map((res:any) => DoctorActions.loadDoctorByIdSuccess({ doctor:res.data.doctor })),
          catchError((error) => of(DoctorActions.loadDoctorByIdFailure({ error })))
        )
      )
    )
  );

}
