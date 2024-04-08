import { createAction, props } from '@ngrx/store';



export const verifyOTP = createAction(
    '[OTP] Verify OTP',
     props<{ otp: string,section:string }>()
     );

export const verifyOTPSuccess = createAction(
    '[OTP] Verify OTP Success'
    );

export const verifyOTPFailure = createAction(
    '[OTP] Verify OTP Failure', 
    props<{ error: any }>()
    );

export const resendOtpRequest = createAction(
  '[OTP] Resend OTP Request',
  props<{ token: string }>()
);

export const resendOtpSuccess = createAction(
  '[OTP] Resend OTP Success'
);

export const resendOtpFailure = createAction(
  '[OTP] Resend OTP Failure',
  props<{ error: any }>()
);
