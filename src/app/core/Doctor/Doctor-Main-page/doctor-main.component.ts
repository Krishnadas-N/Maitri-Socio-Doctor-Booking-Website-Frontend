import { Component, OnInit } from '@angular/core';
import { HeaderComponentComponent } from '../Components/header-component/header-component.component';
import { DoctorLoginComponent } from '../Components/doctor-login/doctor-login.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoctorFeedMainComponent } from '../Components/Doctor-Feed/doctor-feed-main/doctor-feed-main.component';
import { SidebarComponent } from '../../../shared/Components/sidebar/sidebar.component'; 
import { TokenService } from '../../../shared/Services/token-auth-service/Token.service'; 
import { AuthService } from '../../../shared/Services/auth-service/auth.service';
import { NotificationService } from '../../../shared/Services/notification-service/notification.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/GlobalStore/app.state';
import { Doctor } from '../../../store/Doctor/doctor.model';
import { loadDoctor } from '../../../store/Doctor/doctor.action';
import { GetCurrentdoctor } from '../../../store/Doctor/doctor.selectors';
import { NotificationPopupComponent } from '../../../shared/Components/notification-popup/notification-popup.component';
import { INotification } from '../../../shared/Models/notification.models';

@Component({
  selector: 'app-doctor-main',
  standalone: true,
  imports: [
    HeaderComponentComponent,
            DoctorFeedMainComponent,
            DoctorLoginComponent,
            CommonModule,RouterOutlet,
            NotificationPopupComponent,
            SidebarComponent,],
  templateUrl: './doctor-main.component.html',
  styleUrl: './doctor-main.component.css'
})
export class DoctorMainComponent  implements OnInit{

  showNotification: boolean = false;
  notificationTitle: string = '';
  notificationMessage: string = '';
  currentDoctor: Doctor | null = null;
  notifications: INotification[] = [];

  backgroundColor: string = 'bg-blue-700';
  showTooltip = false;
  tooltipTop = 0;
  tooltipLeft = 0;
  tooltipText = '';
  profileImage: string = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80';
  navItems: { iconClasses: string, backgroundColor: string, tooltip?: string,link?:string }[] = [
    { iconClasses: 'fas fa-tachometer-alt fa-sm  text-white', backgroundColor: 'bg-blue-400', tooltip: 'DashBoard',link:'/doctor/' },
    { iconClasses: "fab fa-instagram fa-sm text-white", backgroundColor: 'bg-pink-400', tooltip: 'Feed', link:'/doctor/feed'},
    { iconClasses: 'fas fa-calendar-alt fa-sm text-white', backgroundColor: 'bg-yellow-400', tooltip: 'Appoinments',link:'/doctor/appoinments' },
    { iconClasses: 'fas fa-clock fa-sm text-white', backgroundColor: 'bg-green-400', tooltip: 'Schedule Timings', link: '/doctor/schedule-timings' },
    { iconClasses: 'fas fa-comment fa-sm text-white', backgroundColor: 'bg-blue-600', tooltip: 'Chat Consultation', link: '/doctor/chats/inbox' },
    { iconClasses: 'fas fa-user fa-sm text-white', backgroundColor: 'bg-purple-400', tooltip: 'Profile', link: '/doctor/profile' },
    { iconClasses: 'fas fa-bell fa-sm text-white', backgroundColor: 'bg-orange-400', tooltip: 'Notifications', link: '/doctor/notifications' }
  ];

  handleSidebarItemClick(item: any) {
    console.log('Item Clicked:', item);
  }
  handleItemHover(event: { item: any, index: number } | null) {
    if (event && event.item.tooltip) {
      const { item, index } = event;
        this.tooltipText = item.tooltip;
        this.tooltipTop = 70 +(index*60); 
        this.tooltipLeft = 60; // Example value, adjust as needed
        this.showTooltip = true;
    } else {
        this.showTooltip = false;
    }
}
isAuthenticated(){
  return this.authService.isAuthenticated()
}

ngOnInit(): void {
  if(this.isAuthenticated()){
    this.store.dispatch(loadDoctor())
    this.loadCurrentDoctor()
   const token = this.tokenService.getToken();
   this.notificationService.setToken(token as string);
  

  }
}

constructor(
  private authService:AuthService,
  private notificationService:NotificationService,
  private tokenService:TokenService,
  private store:Store<AppState>
){}

    getNotifications(){
      this.notificationService.listenForNotifications().subscribe(data => {
        console.log('Received notification:', data);
        this.notifications.push(data.notification);
        this.showNotificationPopup(data.notification.title, data.notification.message);

      });
    }
    addUserOnline(){
      if(this.currentDoctor){
        this.notificationService.addUsers(this.currentDoctor._id as string);
        this.getNotifications()
      }
     }
  
     showNotificationPopup(title: string, message: string): void {
      console.log("title,message",title,message);
      this.notificationTitle = title;
      this.notificationMessage = message;
      this.showNotification = true;
  
      setTimeout(() => {
        this.closeNotificationPopup();
      }, 7000);
    }

    closeNotificationPopup(): void {
      this.showNotification = false;
      this.notificationTitle = '';
      this.notificationMessage = '';
    }

  loadCurrentDoctor(){
    this.store.select(GetCurrentdoctor).subscribe((res)=>{
      this.currentDoctor = res;
      this.addUserOnline();
    })
  }
}
 
 