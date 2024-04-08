export interface RegistrationFormModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender: 'male' | 'female' | 'others'; 
    dateOfBirth: Date;
    phone: string;
  }
  
export interface Education {
    degree: string;
    institution: string;
    year: string;
}
export interface Address {
  street: string;
  city: string;
  zipcode: string;
  country: string;
}

export interface ProfessionalRegistrationFormModel {
    address: Address;
    specialization: string;
    education: Education[];
    experience: string;
    certifications: File[];
    languages: string[];
  }


  export interface Availability {
    dayOfWeek: string;
    startTime: string;
    endTime: string;
  }
  
  export interface ConsultationRegistrationFormModel {
    consultationFee: number;
    availability: Availability[];
    profilePic: File;
    bio: string;
    typesOfConsultation: boolean[];
    maxPatientsPerDay: number;
  }