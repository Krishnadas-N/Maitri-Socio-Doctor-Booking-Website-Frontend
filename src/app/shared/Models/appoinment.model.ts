import { Doctor } from "../../store/Doctor/doctor.model";
import { User } from "../../store/User/user.model";

export interface Review {
    _id: string;
    appoinmentId: string;
    doctor: string;
    patientName: string;
    rating: number;
    comment: string;
    createdAt: Date;
}

export interface Appointment {
    _id: string;
    patient: string;
    doctor: string;
    typeOfAppointment: string;
    date: Date;
    slot: string;
    amount: number;
    duration: number;
    status: string;
    paymentStatus: string;
    payment: {
        amount: number;
        method: string;
        transactionId: string;
        status: string;
    };
    createdAt: Date;
    updatedAt: Date;
    consultationLink: string;
    reviews: Review[];
    doctorInfo: Doctor[];
    doctorSpecialization: {
        _id: string;
        name: string;
        description: string;
        isBlocked: boolean;
        __v: number;
    }[];
    user:User[];
}