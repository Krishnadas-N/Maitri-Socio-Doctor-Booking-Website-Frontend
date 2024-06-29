import { Doctor } from "../../../store/Doctor/doctor.model";
import { User } from "../../../store/User/user.model";
import { Appointment } from "../Modules/user-profile/Models/appointments.model";

interface DoctorCategoryData {
    _id: string;
    profilePic:string;
    fullName: string;
    specialty: string;
    rating?: number;
}

export interface CategorizedDoctorsResult {
    category: string;
    doctors: DoctorCategoryData[];
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

export interface InterestedDoctors {
  _id: string;
  userId: string;
  doctorIds: {
    doctorId: string;
    dateAdded: Date;
    _id: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}


export interface ListInterestedDoctors {
  _id: string
  userId: string
  doctorIds: DoctorId[]
  createdAt: string
  updatedAt: string
  __v: number
  doctorsInfo: Doctor[]
}

export interface DoctorId {
  doctorId: string
  dateAdded: string
  _id: string
}


export interface AppointMentList {
  appointments: Appointment[]
  page: number
  pageSize: number
  totalCount: number
  totalPages: number
}


export interface WalletDetails {
  wallet: Wallet
  page: number
  pageSize: number
  totalCount: number
  totalPages: number
}

export interface Wallet {
  _id: string
  owner: string
  balance: number
  transactions: any[]
  __v: number
}


export interface MedicalRecordModel {
  userId: string
  fileUrl: string
  title: string
  description: string
  _id: string
  mId: string
  createdAt: string
  updatedAt: string
  __v: number
}




export interface doctorsResponseModel{
  doctors: Doctor[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}


export interface CancelAppointmentResponse{
  appointment:Appointment,
  notificationId:string
}
