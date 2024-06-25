import { User } from "../../../store/User/user.model";


export interface LoginData {
  user: User;
  token: string;
  revokeAccessToken: string;
}


export interface registerData{
token:string
}


export interface GoogleCredentials {
  uid: string
  email: string
  emailVerified: boolean
  displayName: string
  isAnonymous: boolean
  photoURL: string
  providerData: ProviderDaum[]
  stsTokenManager: StsTokenManager
  createdAt: string
  lastLoginAt: string
  apiKey: string
  appName: string
}

export interface ProviderDaum {
  providerId: string
  uid: string
  displayName: string
  email: string
  phoneNumber: any
  photoURL: string
}

export interface StsTokenManager {
  refreshToken: string
  accessToken: string
  expirationTime: number
}


export  type AuthResponseData = {
  token: string;
  refreshToken: string;
};
