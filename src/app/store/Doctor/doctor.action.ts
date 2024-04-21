import { createAction, props } from '@ngrx/store';
import { Doctor } from './doctor.model';
import { ConsultationRegistrationFormModel, ProfessionalRegistrationFormModel, RegistrationFormModel } from '../../core/Doctor/models/registration.model';

export const registerBasicRequest = createAction(
    '[Doctor] Register Basic Info Request',
    props<{ doctorData: RegistrationFormModel }>()
  );
  export const registerBasicSuccess = createAction(
    '[Doctor] Register Basic Info Success'
  );
  export const registerBasicFailure = createAction(
    '[Doctor] Register Basic Info Failure',
    props<{ error: Error }>()
  );


  export const loginDoctorRequest = createAction(
    '[Doctor] Login Doctor Request',
    props<{ email: string; password: string  }>()
  );
  
  export const loginDoctorSuccess = createAction(
    '[Doctor] Login Doctor Success',
    props<{ token:string,doctor: Doctor }>() 
  );
  
  export const loginDoctorFailure = createAction(
    '[Doctor] Login Doctor Failure',
    props<{ error: Error }>()
  );


  export const registerProfessionalRequest = createAction(
    '[Doctor] Register Professional Info Request',
    props<{ formData: any }>()
  );
  export const registerProfessionalSuccess = createAction(
    '[Doctor] Register Professional Info Success',
    props<{ doctor: Doctor }>()
  );
  export const registerProfessionalFailure = createAction(
    '[Doctor] Register Professional Info Failure',
    props<{ error: Error }>()
  );

  export const registerAdditionalRequest = createAction(
    '[Doctor] Register Additional Info Request',
    props<{ doctorData: ConsultationRegistrationFormModel }>()
  );
  export const registerAdditionalSuccess = createAction(
    '[Doctor] Register Additional Info Success',
     props<{ doctor: Doctor }>()
  );
  export const registerAdditionalFailure = createAction(
    '[Doctor] Register Additional Info Failure',
    props<{ error: Error }>()
  );

  export const registerDoctorSuccess = createAction(
    '[Doctor] Register Doctor Success' 
  );

export const loadDoctor = createAction('[Doctor] Load Doctor');
export const loadDoctorSuccess = createAction('[Doctor] Load Doctor Success', props<{ doctor: Doctor }>());
export const loadDoctorFailure = createAction('[Doctor] Load Doctor Failure', props<{ error: Error }>());
  

export const AdminloadDoctors = createAction('[Admin] Load Doctors', props<{ page?: number; pageSize?: number; searchQuery?: string }>());
export const loadDoctorsSuccess = createAction('[Admin] Load Doctors Success', props<{ doctors: Doctor[],totalPages:number }>());
export const loadDoctorsFailure = createAction('[Admin] Load Doctors Failure', props<{ error: Error }>());

export const blockDoctor = createAction('[Admin] Block Doctor', props<{ id:string }>());
export const blockDoctorSuccess = createAction('[Admin] Block Doctor Success', props<{ doctor: Doctor }>());
export const blockDoctorFailure = createAction('[Admin] Block Doctor Failure', props<{ error: Error }>());

export const VerifyProfileDoctor = createAction('[Admin] Verify Profile Doctor', props<{ id:string }>());
export const VerifyProfileDoctorSuccess = createAction('[Admin] Verify Profile Doctor Success', props<{ doctor: Doctor }>());
export const VerifyProfileDoctorFailure = createAction('[Admin] Verify Profile Doctor Failure', props<{ error: Error }>());


export const loadDoctorById = createAction(
  '[Admin] Load Doctor',
  props<{ id: string }>()
);

export const loadDoctorByIdSuccess = createAction(
  '[Admin] Load Doctor Success',
  props<{ doctor: Doctor }>()
);

export const loadDoctorByIdFailure = createAction(
  '[Admin] Load Doctor Failure',
  props<{ error: any }>()
);
  
