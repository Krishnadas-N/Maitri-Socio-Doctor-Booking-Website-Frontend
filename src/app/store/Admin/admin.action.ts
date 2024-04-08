import { createAction, props } from '@ngrx/store';
import { AdminModel } from './admin.model';

export const loadAdmins = createAction('[Admin] Load Admins');
export const adminsLoaded = createAction('[Admin] Admins Loaded', props<{ admins: any[] }>());
export const adminsError = createAction('[Admin] Admins Error', props<{ error: any }>());

export const addAdmin = createAction('[Admin] Add Admin', props<{ admin: AdminModel }>());
export const addAdminSuccess = createAction('[Admin] Add Admin Success', props<{ admin: AdminModel }>());
export const addAdminFailure = createAction('[Admin] Add Admin Failure', props<{ error: any }>());

export const adminLogin = createAction('[Admin] Admin Login', props<{ email: string, password: string }>());
export const adminLoginSuccess = createAction('[Admin] Admin Login Success', props<{ admin: AdminModel }>());
export const adminLoginFailure = createAction('[Admin] Admin Login Failure', props<{ error: any }>());
