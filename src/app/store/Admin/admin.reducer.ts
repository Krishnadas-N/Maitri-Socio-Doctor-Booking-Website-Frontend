import { createReducer, on } from '@ngrx/store';
import { initialAdminState } from './admin.state';
import * as AdminActions from './admin.action';

const _adminReducerHelper = createReducer(
  initialAdminState,

  // Load Admins
  on(AdminActions.adminsLoaded, (state, { admins }) => ({
    ...state,
    admins,
    loading: false,
    error: null
  })),
  on(AdminActions.adminsError, (state, { error }) => ({
    ...state,
    admins: [],
    loading: false,
    error
  })),

  // Add Admin
  on(AdminActions.addAdminSuccess, (state, { admin }) => ({
    ...state,
    admins: [...state.admins, admin],
    loading: false,
    error: null
  })),
  on(AdminActions.addAdminFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Admin Login
  on(AdminActions.adminLoginSuccess, (state, { admin }) => ({
    ...state,
    admin,
    loading: false,
    error: null
  })),
  on(AdminActions.adminLoginFailure, (state, { error }) => ({
    ...state,
    admin: null,
    loading: false,
    error
  }))
);

export const AdminReducer = (state: any, action: any) => {
    return _adminReducerHelper(state, action);
};