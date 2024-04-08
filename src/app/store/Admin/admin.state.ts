import { AdminModel } from './admin.model';

export interface AdminState {
  admin: AdminModel | null; 
  admins: AdminModel[];
  loading: boolean;
  error: any;
}

export const initialAdminState: AdminState = {
  admin: null,
  admins: [],
  loading: false,
  error: null
};
