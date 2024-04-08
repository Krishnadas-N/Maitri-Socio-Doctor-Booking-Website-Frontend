import { createSelector } from '@ngrx/store';
import { AppState } from '../GlobalStore/app.state';
import { DoctorState } from './doctor.state';


export const selectdoctorState =  (state: AppState) => state.doctor;

export const selectdoctorError = createSelector(
    selectdoctorState,
    (state: DoctorState) => state.error
  );

  export const selectdoctorLoading = createSelector(
    selectdoctorState,
    (state: DoctorState) => state.loading
);

export const GetCurrentdoctor = createSelector(
    selectdoctorState, 
    (doctorState: DoctorState) => doctorState.doctor
    );

    export const selectDoctorsByTab = (tab: string) => createSelector(
      selectdoctorState,
      (doctorState: DoctorState) => {
        console.log("selctor",doctorState.doctor);
        switch (tab) {
          case 'all':
            return doctorState.doctors;
          case 'blocked':
            return doctorState.doctors.filter(u => u.isBlocked);
          case 'verified':
            return doctorState.doctors.filter(u => u.isVerified);
          case 'not-verified':
            return doctorState.doctors.filter(u => !u.isVerified);
          default:
            return doctorState.doctors;
        }
      }
  );
   
  
  export const GetPagesSize = createSelector(
    selectdoctorState,
    (userState: DoctorState) => userState.totalPages
  )