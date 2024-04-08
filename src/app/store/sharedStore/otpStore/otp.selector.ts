import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../GlobalStore/app.state';
import { OtpState } from './otp.state';

export const selectOtpState = (selectOtpState:AppState)=>(selectOtpState.otp)

export const selectOtpLoading = createSelector(
  selectOtpState,
  (state: OtpState) => state.loading
);

export const selectOtpError = createSelector(
  selectOtpState,
  (state: OtpState) => state.error
);
