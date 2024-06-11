import { User } from "../../../store/User/user.model";

interface Doctor {
    _id: string;
    profilePic:string;
    fullName: string;
    specialty: string;
    rating?: number;
}

export interface CategorizedDoctorsResult {
    category: string;
    doctors: Doctor[];
}


export type UserData = Required<User>;

export interface surveyResponse {
  recommendedCategories: string[]
  npsScore: number
}



export type CategoryOfDoctors = category[]

export interface category {
  doctors: DoctorData[]
  category: string
}

export interface DoctorData {
  _id: string
  profilePic: string
  fullName: string
  specialty: string
  rating?: number
}

