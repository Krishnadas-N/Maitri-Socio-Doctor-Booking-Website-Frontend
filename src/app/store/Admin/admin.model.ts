
export interface RoleDetails {
    roleId: string;
    roleName: string;
    permissions: string[];
}
export interface AdminModel {
    _id?: string ;
    username: string;
    password: string;
    roles: string[] | RoleDetails[];
    createdAt?: Date;
    updatedAt?: Date;
    email:string;
}