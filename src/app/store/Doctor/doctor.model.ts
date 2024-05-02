

export type Specialization = string | { name: string, _id: string };
export interface Doctor {
    _id?: string;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    email: string;
    phone: number;
    address: {
      state?: string;
      city?: string;
      zipcode?: number;
      country?: string;
    };
    specialization: Specialization;
    education: { degree: string; institution: string; year: string }[];
    experience: string;
    certifications?: string[];
    languages: string[];
    availability: { dayOfWeek: string; startTime: string; endTime: string ,isAvailable:boolean}[];
    profilePic: string;
    bio: string;
    registrationStepsCompleted:number,
    consultationFee:[{
      type:"video"|"chat"|"clinic";
      fee:number;
    }],
    selectedSlots?: { date: Date; slots: string[]; }[];
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
  
 