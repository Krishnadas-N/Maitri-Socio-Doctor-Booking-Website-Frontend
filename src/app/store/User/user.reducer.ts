import { createReducer, on } from '@ngrx/store';

import { initialState } from './user.state';
import * as userActions from './user.action';

const _userReducerHelper = createReducer(
    initialState,
    on(userActions.loginUser, (state) => ({ ...state, loading: true, error: undefined })),
    on(userActions.loginUserSuccess, (state, { user }) => ({ ...state, user, loading: false })),
    on(userActions.loginUserFailure, (state, { error }) => ({ ...state, loading: false, error })),
  
    on(userActions.registerUser, (state) => ({ ...state, loading: true, error: undefined })),
    on(userActions.registerUserSuccess, (state, {  }) => ({ ...state, loading: false })),
    on(userActions.registerUserFailure, (state, { error }) => ({ ...state, loading: false, error })),

    on(userActions.loadUser, (state) => ({ ...state, loading: true, error: undefined })),
    on(userActions.loadUserSuccess, (state, { user }) => ({ ...state, user, loading: false })),
    on(userActions.loadUserFailure, (state, { error }) => ({ ...state, loading: false, error })),
  
    on(userActions.updateUserProfile, (state, { user }) => ({ ...state, loading: true, error: undefined })),
    on(userActions.updateUserProfileSuccess, (state, { user }) => ({ ...state, user, loading: false })),
    on(userActions.updateUserProfileFailure, (state, { error }) => ({ ...state, loading: false, error })),

    on(userActions.loadUsers,(state)=>({...state,loading:true, error: undefined})),
    on(userActions.loadUsersSuccess, (state, { users,totalPages }) => ({
      ...state,
      users: users,
      loading: false,
      totalPages:totalPages
   })),
    on(userActions.loadUsersFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error: error,
    })),
    on(userActions.blockUser, state => ({
      ...state,
      loading: true,
      error: undefined
    })),
    on(userActions.blockUserSuccess, (state, { user }) => ({
      ...state,
      users: state.users.map(u =>{
        console.log(u,u._id,user._id);
      return u._id?.toString() === user._id?.toString() ? user : u }),
      loading: false,
      error: undefined
    })),
    on(userActions.blockUserFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error: error
    })),
    on(userActions.loadUserById, state => ({
      ...state,
      loading: true,
      error: undefined
    })),
    on(userActions.loadUserByIdSuccess, (state, { user }) => ({
      ...state,
      user,
      loading: false,
      error: undefined
    })),
    on(userActions.loadUserByIdFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error
    })),

    on(userActions.logout, (state) => initialState)
  );

export const userReducer = (state: any, action: any) => {
    return _userReducerHelper(state, action);
};