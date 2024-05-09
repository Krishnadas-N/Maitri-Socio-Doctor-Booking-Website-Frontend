import { Doctor } from "../../store/Doctor/doctor.model";
import { User } from "../../store/User/user.model";

interface IReadBy {
    reader: string;
    readAt: Date;
}

export interface INotification {
    _id: string;
    sender: string; 
    senderModel: 'User' | 'Doctor';
    receivers: string[];
    title:string;
    message: string;
    readBy: IReadBy[];
    createdAt: Date;
}

export interface AppointmentNotificationDTO {
    _id: string;
    sender: Doctor|User;
    senderModel: string;
    receivers: {
      receiverId: any ;
      receiverModel: string;
      _id: string;
    }[];
    title: string;
    message: string;
    readBy: any[]; 
    createdAt: Date;
    __v: number;
  }
  