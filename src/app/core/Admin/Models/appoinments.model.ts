export interface AdminAppointmentDetails {
    typeOfAppointment: string;
    date: Date;
    slot: string;
    amount: number;
    duration: number;
    status: string;
    paymentStatus: string;
    prescription: {
      file: string;
      title: string;
    } | null;
    cancellationRequests: {
      status: string;
      reason: string;
      createdAt: Date;
    } | null; 
    doctorDetails: {
        _id:string;
      firstName: string;
      lastName: string;
      email: string;
      phone: number;
      profilePic: string;
    };
    patientDetails: {
      firstName: string;
      lastName: string;
      email: string;
      gender: string;
      profilePic: string;
    };
    medicalRecords: {
      title: string;
      fileUrl: string;
    }[];
    doctorReviews: number; 
    }
    