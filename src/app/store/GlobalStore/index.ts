import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from '../User/user.reducer';
import { AppState } from './app.state';
import { doctorReducer } from '../Doctor/doctor.reducer';
import { otpReducer } from '../sharedStore/otpStore/otp.reducer';
import { postReducer } from '../sharedStore/Feed-Store/post.reducer';
import { AdminReducer } from '../Admin/admin.reducer';

export const reducers: ActionReducerMap<AppState> = {
    user: userReducer,
    doctor: doctorReducer,
    otp:otpReducer,
    posts:postReducer,
    admin:AdminReducer
  };