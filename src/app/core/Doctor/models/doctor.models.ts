import { Appointment } from "../../../shared/Models/appoinment.model";

export interface DashboardData {
    [key: string]: {
        totalAppointments: number;
        completedAppointments: number;
        cancelledAppointments: number;
    };
}

    

export interface DashBoardDataResponse {
    dashboardData:DashboardData;
    totalPatients?: number; 
    typeOfAppointments: Record<string, number>;
  }
  
  export interface doctorAppoinmentsResponseModel {
    appointments:Appointment[]; 
    page:number; 
    pageSize:number; 
    totalCount:number; 
    totalPages:number; 
}
