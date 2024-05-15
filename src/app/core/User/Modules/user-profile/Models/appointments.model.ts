import { Doctor } from "../../../../../store/Doctor/doctor.model";

interface Prescription {
    file: string;
    title: string;
}

export interface AppointmentPrescriptionModel {
    _id: string;
    doctor: Doctor;
    date: Date;
    prescription: Prescription | null;
}
