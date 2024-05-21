import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DoctorService } from '../doctor-services/doctor.service';
import { catchError, map, of, tap } from 'rxjs';
import { TokenService } from '../../../../shared/Services/token-auth-service/Token.service';

export const checkProfileIsCompleteGuard: CanActivateFn = (route, state) => {
  const doctorService = inject(DoctorService);
  const router =  inject(Router);
  const tokenService = inject(TokenService)
  return doctorService.getDoctor().pipe(
    tap((res:any) => {
      console.log("Doctor data check for isVerifiec",res.data)
      if (!res.data.isVerified || !res.data.isProfileComplete) {
        router.navigate(['doctor/complete-verification']);
      }
    }),
    map(res => res.data.isVerified && res.data.isProfileComplete),
    catchError(() => {
      tokenService.logout()
      router.navigate(['/doctor/login']);
      return of(false);
    })
  );
};
