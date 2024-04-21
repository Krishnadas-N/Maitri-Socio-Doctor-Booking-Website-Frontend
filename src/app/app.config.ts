import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withHttpTransferCacheOptions,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { reducers } from './store/GlobalStore';
import { authInterceptor } from './core/User/Interceptors/Auth/auth.interceptor';
import { UserEffects } from './store/User/user.effects';
import { doctorEffects } from './store/Doctor/doctor.effects';
import { OtpEffects } from './store/sharedStore/otpStore/otp.effects';
import { postEffects } from './store/sharedStore/Feed-Store/post.effects';
import { AdminEffects } from './store/Admin/admin.effects';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { responseTimerInterceptor } from './shared/Interceptors/response-timer.interceptor';
import { errorHandlerInterceptor } from './shared/Interceptors/error-handler.interceptor';
import { TOASTR_TOKEN, Toastr } from './shared/Models/toastr';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
];

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        authInterceptor,
        responseTimerInterceptor,
        errorHandlerInterceptor,
      ])
    ),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true,
      })
    ),
    provideAnimations(), // required animations providers
    provideToastr({
      positionClass: 'toast-top-right',
      tapToDismiss: true,
      progressBar: true, // Show progress bar
      closeButton: true,
      timeOut: 3000, // Duration of the toast message (in milliseconds)
      enableHtml: true,
      titleClass: 'd-none', // Hide title
      messageClass: 'text-white', // Custom class for message
      disableTimeOut: false, // Disable the timeout
      extendedTimeOut: 1000,
      preventDuplicates: true,
    }),
    provideAnimationsAsync(),
    provideStore(reducers),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideEffects([
      UserEffects,
      doctorEffects,
      OtpEffects,
      postEffects,
      AdminEffects,
    ]),
  ],
};
