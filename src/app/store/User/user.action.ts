import { createAction, props } from '@ngrx/store';
import { User } from './user.model';



export const loginUser = createAction('[User] Login User', props<{ email: string; password: string }>());
export const loginUserSuccess = createAction(
  '[User] Login User Success',
  props<{ user: User,token:string }>()
);
export const loginUserFailure = createAction(
  '[User] Login User Fail',
  props<{ error: string }>()
);
export const registerUser = createAction('[User] Register User', 
props<{ user: User; password: string; confirmPassword: string }>());
export const registerUserSuccess = createAction(
  '[User] User Register Success',
);

export const registerUserFailure = createAction(
  '[User Register Fails] User Register Fails',
  props<{ error: string }>()
);


export const loadUser = createAction('[User] Load User');
export const loadUserSuccess = createAction('[User] Load User Success', props<{ user: User }>());
export const loadUserFailure = createAction('[User] Load User Failure', props<{ error: string }>());


export const updateUserProfile = createAction(
    '[User] Update User Profile',
    props<{ user: User }>()
  );
  export const updateUserProfileSuccess = createAction(
    '[User] Update User Profile Success',
    props<{ user: User }>()
  );
  export const updateUserProfileFailure = createAction(
    '[User] Update User Profile Failure',
    props<{ error: string }>()
  );
  
 
export const loadUsers = createAction('[Admin] Load Users', props<{ page?: number; pageSize?: number; searchQuery?: string }>());
export const loadUsersSuccess = createAction('[Admin] Load Users Success', props<{ users: User[],totalPages:number }>());
export const loadUsersFailure = createAction('[Admin] Load Users Failure', props<{ error: string }>());

export const blockUser = createAction('[Admin] Block User', props<{ id:string }>());
export const blockUserSuccess = createAction('[Admin] Block User Success', props<{ user: User }>());
export const blockUserFailure = createAction('[Admin] Block User Failure', props<{ error: string }>());


 
export const loadUserById = createAction(
  '[Admin] Load User',
  props<{ id: string }>()
);

export const loadUserByIdSuccess = createAction(
  '[Admin] Load User Success',
  props<{ user: User }>()
);

export const loadUserByIdFailure = createAction(
  '[Admin] Load User Failure',
  props<{ error: any }>()
);

export const logout = createAction('[User] Logout');