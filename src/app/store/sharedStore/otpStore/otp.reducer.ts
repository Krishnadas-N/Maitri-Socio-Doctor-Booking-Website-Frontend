import {createReducer,on} from '@ngrx/store';
import * as OtpActions from './otp.action'
import { initialOtpState } from './otp.state';

const _otpReducerHelper = createReducer(
    initialOtpState,
    on(OtpActions.verifyOTP, state => ({
        ...state,
        loading: true,
        error: null
      })),
      on(OtpActions.verifyOTPSuccess, state => ({
        ...state,
        loading: false,
        error: null
      })),
      on(OtpActions.verifyOTPFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
      })),
    on(OtpActions.resendOtpRequest, state => ({
        ...state,
        loading: true,
        error: null
      })),
      on(OtpActions.resendOtpSuccess, state => ({
        ...state,
        loading: false,
        error: null
      })),
      on(OtpActions.resendOtpFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
      }))
)

export const otpReducer = (state: any, action: any) => {
    return _otpReducerHelper(state, action);
};