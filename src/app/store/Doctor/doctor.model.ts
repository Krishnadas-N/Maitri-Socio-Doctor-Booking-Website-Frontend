export interface Doctor {
    _id?: string;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    email: string;
    phone: number;
    address: {
      street?: string;
      city?: string;
      zipcode?: number;
      country?: string;
    };
    specialization: string; // Assuming you have a separate model for specialization
    education: { degree: string; institution: string; year: string }[];
    experience: string;
    certifications?: string[];
    languages: string[];
    availability: { dayOfWeek: string; startTime: string; endTime: string }[];
    profilePic: string;
    bio: string;
    registrationStepsCompleted:number,
    consultationFee:[{
      type:"video"|"chat"|"clinic";
      fee:number;
    }],
    createdAt?: Date;
    updatedAt?: Date;
    followers?: string[];
    isVerified?: boolean;
    typesOfConsultation?: string[];
    maxPatientsPerDay?: number;
    rating?: number;
    isProfileComplete?: boolean;
    isBlocked?:boolean
  }
  