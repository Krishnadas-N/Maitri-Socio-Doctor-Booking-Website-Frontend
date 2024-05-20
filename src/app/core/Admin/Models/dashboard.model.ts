export interface MonthlyStats {
    year: number;
    month: number;
    stats: {
      [key: string]: number;
    };
  }
  
 export  interface MonthlyRevenue {
    year: number;
    month: number;
    monthlyRevenue: number;
  }
  
  export interface AdminDashboardDetails {
    doctorsCount: number;
    patientsCount: number;
    totalCompleted: number;
    monthlyStats: MonthlyStats[];
    totalRevenue: number;
    monthlyRevenue:  MonthlyRevenue[]
  }
  

  export interface UserDetails {
    _id: string;
    fullName: string;
    profilePic: string;
    lastAppointmentDate: Date;
    totalPaid: number;
  }
  
 export interface DoctorDetails {
    _id: string;
    fullName: string;
    profilePic: string;
    totalEarnings: number;
    averageRating: number;
    specialization:string
  }
  
 export interface AdminDashboardUserandDoctorDetails {
    patients: UserDetails[];
    doctors: DoctorDetails[];
  }

  export interface appoinmentTableDetails{
    _id:string;
    doctorName: string;
      doctorProfilePic: string;
      speciality: string;
      patientName: string;
      patientProfilePic: string;
      appointmentTime: string;
      status: string;
      paymentStatus: string;
      amount: number;
  }

  export interface AppointmentListResponse {
    appointments: appoinmentTableDetails[];
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
  }