import { createSelector } from '@ngrx/store';
import { AdminState } from './admin.state';
import { AppState } from '../GlobalStore/app.state';

export const selectAdminState =  (state: AppState) => state.admin;

export const selectAdmins = createSelector(
  selectAdminState,
  (state: AdminState) => state.admins
);

export const getCurrentAdmin = createSelector(
    selectAdminState,
    (state: AdminState) => state.admin
  );

export const isLoading = createSelector(
    selectAdminState,
    (state: AdminState) => state.loading
  );

  export const getErrors = createSelector(
    selectAdminState,
    (state: AdminState) => state.error
  );