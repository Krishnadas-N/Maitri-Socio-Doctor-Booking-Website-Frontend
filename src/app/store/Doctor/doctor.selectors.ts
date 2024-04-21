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
        console.log("selctor",'fhg',tab);
        switch (tab) {
          case 'all':
            return doctorState.doctors;
          case 'blocked':
            return doctorState.doctors.filter(u => u.isBlocked);
          case 'verified-profiles':
            return doctorState.doctors.filter(u => u.isProfileComplete);
          case 'not-verified-profiles':
            return doctorState.doctors.filter(u => !u.isProfileComplete);
          default:
            return doctorState.doctors;
        }
      }
  );
   
  
  export const GetPagesSize = createSelector(
    selectdoctorState,
    (userState: DoctorState) => userState.totalPages
  )