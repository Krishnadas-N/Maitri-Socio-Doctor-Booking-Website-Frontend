import { DoctorState } from '../Doctor/doctor.state';
import { UserState } from '../User/user.state';
import { PostsState } from '../sharedStore/Feed-Store/post.state';
import { OtpState } from '../sharedStore/otpStore/otp.state';

export interface AppState {
  user: UserState;
  doctor: DoctorState;
  otp:OtpState;
  posts:PostsState;
}
