import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../core/User/Services/user.service';
import { AppointmentNotificationDTO } from '../../Models/notification.models';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../../../core/Doctor/Services/doctor-services/doctor.service';
import { AdminService } from '../../../core/Admin/Services/admin-service/auth.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  expectedRole!: string;
  notifications: AppointmentNotificationDTO[] = [];
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private toastr: ToastrService,
    private doctorService: DoctorService,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    this.expectedRole = this.route.snapshot.data['expectedRole'];
    console.log('Expected Role:', this.expectedRole);
    this.getNotiifcations();
  }
  getNotiifcations() {
    if (this.expectedRole === 'User') {
      this.userService.getNotifications().subscribe({
        next: (res) => {
          console.log(res);
          this.notifications = res.data;

          console.log(this.notifications);
        },
        error: (err) => {},
      });
    } else if (this.expectedRole === 'Doctor') {
      this.doctorService.getNotificationsOfDoctor().subscribe({
        next: (res) => {
          console.log(res);
          this.notifications = res.data;

          console.log(this.notifications);
        },
        error: (err) => {
          this.toastr.error(err);
        },
      });
    } else if (this.expectedRole === 'Admin') {
      this.adminService.getNotification().subscribe({
        next: (res) => {
          console.log(res);
          this.notifications = res.data;

          console.log(this.notifications);
        },
        error: (err) => {
          this.toastr.error(err);
        },
      });
    }
  }

  groupNotificationsByDay(): { [key: string]: AppointmentNotificationDTO[] } {
    const groupedNotifications: {
      [key: string]: AppointmentNotificationDTO[];
    } = {};
    this.notifications.forEach((notification) => {
      const date = new Date(notification.createdAt);
      const formattedDate = date.toLocaleDateString();
      if (!groupedNotifications[formattedDate]) {
        groupedNotifications[formattedDate] = [];
      }
      groupedNotifications[formattedDate].push(notification);
    });
    return groupedNotifications;
  }
}
