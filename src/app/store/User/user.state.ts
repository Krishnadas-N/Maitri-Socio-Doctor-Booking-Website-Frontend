import { User } from "./user.model";

export interface UserState {
    user: User | null;
    users: User[];
    loading: boolean;
    error?: string;
    totalPages: number;
  }


export const initialState: UserState = {
    user: null,
    users:[],
    loading: false,
    error: undefined,
    totalPages: 0
  };
  