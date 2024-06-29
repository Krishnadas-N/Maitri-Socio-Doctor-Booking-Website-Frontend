import { Component, OnInit } from '@angular/core';
import { HeaderComponentComponent } from '../../Components/header-component/header-component.component';
import { FooterComponentComponent } from '../../Components/footer-component/footer-component.component';
import { RouterOutlet } from '@angular/router';
import { UserSidebarComponent } from '../../Components/user-sidebar/user-sidebar.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../shared/Services/auth-service/auth.service';
import { NotificationService } from '../../../../shared/Services/notification-service/notification.service';
import { TokenService } from '../../../../shared/Services/token-auth-service/Token.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { loadUser } from '../../../../store/User/user.action';
import { User } from '../../../../store/User/user.model';
import { GetCurrentUser } from '../../../../store/User/user.selector';
import { INotification } from '../../../../shared/Models/notification.models';
import { NotificationPopupComponent } from '../../../../shared/Components/notification-popup/notification-popup.component';

@Component({
  selector: 'app-user-main-component',
  standalone: true,
  imports: [
    HeaderComponentComponent,
    NotificationPopupComponent,
    FooterComponentComponent,
    RouterOutlet,
    UserSidebarComponent,
    CommonModule,
  ],
  templateUrl: './user-main-component.component.html',
  styleUrl: './user-main-component.component.css',
})
export class UserMainComponentComponent implements OnInit {
  currentUser: User | null = null;
  notifications: INotification[] = [];
  showNotification: boolean = false;
  notificationTitle: string = '';
  notificationMessage: string = '';

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private tokenService: TokenService,
    private store: Store<AppState>
  ) {}
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  ngOnInit(): void {
    if (this.isAuthenticated()) {
      this.store.dispatch(loadUser());
      this.loadCurrentUser();
      const token = this.tokenService.getToken();
      this.notificationService.setToken(token as string);
    }
  }

  addUserOnline() {
    if (this.currentUser) {
      console.log('this.currentUser._id', this.currentUser);
      this.notificationService.addUsers(this.currentUser._id as string);
      this.getNotifications();
    }
  }
  loadCurrentUser() {
    this.store.select(GetCurrentUser).subscribe((res) => {
      this.currentUser = res;
      this.addUserOnline();
    });
  }
  getNotifications() {
    this.notificationService.listenForNotifications().subscribe((data) => {
      console.log('Received notification:', data);
      this.notifications.push(data.notification);
      this.showNotificationPopup(
        data.notification.title,
        data.notification.message
      );
    });
  }

  showNotificationPopup(title: string, message: string): void {
    console.log('title,message', title, message);
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
}
