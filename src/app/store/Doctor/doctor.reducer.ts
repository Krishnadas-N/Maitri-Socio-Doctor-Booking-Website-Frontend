import { createReducer, on } from '@ngrx/store';
import { initialState } from './doctor.state';
import * as DoctorActions from './doctor.action';

 const _doctorReducerHelper = createReducer(
  initialState,
  on(DoctorActions.registerBasicRequest, state => ({ ...state, loading: true, error: null })),

  on(DoctorActions.registerBasicSuccess, state => ({ ...state, loading: false })),

  on(DoctorActions.registerBasicFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(DoctorActions.loginDoctorRequest, state => ({ ...state, loading: true, error: null })),

  on(DoctorActions.loginDoctorSuccess, (state, { doctor }) => ({ ...state, doctor, loading: false })),

  on(DoctorActions.loginDoctorFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(DoctorActions.registerProfessionalRequest, state => ({ ...state, loading: true, error: null })),

  on(DoctorActions.registerProfessionalSuccess, (state, { doctor })=> ({ ...state, doctor,loading: false })),

  on(DoctorActions.registerProfessionalFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(DoctorActions.registerAdditionalRequest, state => ({ ...state, loading: true, error: null })),

  on(DoctorActions.registerAdditionalSuccess,  (state, { doctor }) => ({ ...state,doctor, loading: false })),

  on(DoctorActions.registerAdditionalFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(DoctorActions.registerDoctorSuccess, state => ({ ...state, loading: false })),

  on(DoctorActions.loadDoctor, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(DoctorActions.loadDoctorSuccess, (state, { doctor }) => ({
    ...state,
    doctor,
    loading: false,
    error: null
  })),
  on(DoctorActions.loadDoctorFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

on(DoctorActions.AdminloadDoctors, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(DoctorActions.loadDoctorsSuccess, (state, { doctors, totalPages }) => ({
    ...state,
    doctors,
    totalPages,
    loading: false,
    error: null
  })),
  on(DoctorActions.loadDoctorsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(DoctorActions.blockDoctor, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(DoctorActions.blockDoctorSuccess, (state, { doctor }) => ({
    ...state,
    doctor,
    loading: false,
    error: null
  })),
  on(DoctorActions.blockDoctorFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(DoctorActions.VerifyProfileDoctor, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(DoctorActions.VerifyProfileDoctorSuccess, (state, { doctor }) => ({
    ...state,
    doctor,
    loading: false,
    error: null
  })),
  on(DoctorActions.VerifyProfileDoctorFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(DoctorActions.loadDoctorById, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(DoctorActions.loadDoctorByIdSuccess, (state, { doctor }) => ({
    ...state,
    doctor: doctor,
    loading: false,
    error: null
  })),
  on(DoctorActions.loadDoctorByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))


)

export const doctorReducer = (state: any, action: any) => {
    return _doctorReducerHelper(state, action);
};