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
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { reducers } from './store/GlobalStore';
import { authInterceptor } from './core/User/Interceptors/Auth/auth.interceptor';
import { UserEffects } from './store/User/user.effects';
import { doctorEffects } from './store/Doctor/doctor.effects';
import { OtpEffects } from './store/sharedStore/otpStore/otp.effects';
import { postEffects } from './store/sharedStore/Feed-Store/post.effects';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { responseTimerInterceptor } from './shared/Interceptors/response-timer.interceptor';
import { errorHandlerInterceptor } from './shared/Interceptors/error-handler.interceptor';
import { MatNativeDateModule } from '@angular/material/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

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
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-top-right',
      tapToDismiss: true,
      progressBar: true,
      closeButton: true,
      timeOut: 3000,
      enableHtml: true,
      titleClass: 'd-none',
      messageClass: 'text-white',
      disableTimeOut: false,
      extendedTimeOut: 1000,
      preventDuplicates: true,
    }),
    importProvidersFrom(MatNativeDateModule),
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
    ]),
  ],
};
