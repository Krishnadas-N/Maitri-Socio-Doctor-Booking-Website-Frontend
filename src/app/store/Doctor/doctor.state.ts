import { Doctor } from "./doctor.model";

export interface DoctorState {
    doctor: Doctor | null;
    doctors:Doctor[],
    loading: boolean;
    error: Error | null;
    totalPages:number
  }

  export const initialState: DoctorState = {
    doctor: null,
    doctors: [],
    loading: false,
    error: null,
    totalPages: 0
  };