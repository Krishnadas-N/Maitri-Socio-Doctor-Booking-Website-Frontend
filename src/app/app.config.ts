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
import { authInterceptor } from './shared/Interceptors/auth.interceptor';
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
import { userRoutes } from './core/User/user-routes.routing';
import { doctorRoutes } from './core/Doctor/doctor-routes.routing';
import { adminRoutes } from './core/Admin/admin-routes.routing';
import { refreshTokenInterceptor } from './shared/Interceptors/refresh-token.interceptor';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
];

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    provideRouter([...userRoutes,...doctorRoutes,...adminRoutes,...routes]),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        authInterceptor,
        responseTimerInterceptor,
        refreshTokenInterceptor,
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
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover'
      } as GalleryConfig
    },
    provideEffects([
      UserEffects,
      doctorEffects,
      OtpEffects,
      postEffects,
    ]), provideCharts(withDefaultRegisterables()),
  ],
};
