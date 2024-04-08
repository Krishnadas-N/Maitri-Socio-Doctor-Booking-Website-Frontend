import { createSelector } from '@ngrx/store';
import { UserState } from './user.state';
import { AppState } from '../GlobalStore/app.state';


export const selectUserState =  (state: AppState) => state.user;

export const selectUserError = createSelector(
    selectUserState,
    (state: UserState) => state.error
  );

export const selectUserLoading = createSelector(
    selectUserState,
    (state: UserState) => state.loading
);

export const GetCurrentUser = createSelector(
    selectUserState, 
    (userState: UserState) => userState.user
    );
    
    export const selectUsersByTab = (tab: string) => createSelector(
      selectUserState,
      (userState: UserState) => {
        console.log("selctor",userState.users);
        switch (tab) {
          case 'all':
            return userState.users;
          case 'blocked':
            return userState.users.filter(u => u.isBlocked);
          case 'verified':
            return userState.users.filter(u => u.isVerified);
          case 'not-verified':
            return userState.users.filter(u => !u.isVerified);
          default:
            return userState.users;
        }
      }
  );
    

  export const GetPagesSize = createSelector(
    selectUserState,
    (userState: UserState) => userState.totalPages
  )