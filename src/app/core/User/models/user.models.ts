interface Doctor {
    _id: string;
    profilePic:string;
    fullName: string;
    specialty: string;
    rating?: number;
}

export interface CategorizedDoctorsResult {
    category: string;
    doctors: Doctor[];
}
