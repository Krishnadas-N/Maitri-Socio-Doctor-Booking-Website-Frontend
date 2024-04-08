import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonEventService } from '../../Services/button-event.service';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent implements OnInit {
  isSidebarOpen: boolean = false;
  isSearchBoxOpen: boolean = false;
  isNotificationOpen: boolean = false;
  isServicesOpen: boolean = false;
  isOptionsOpen: boolean = false;
  isAvatarOpen: boolean = false;

  constructor(public toggleSidebaService:ButtonEventService ) {
  
  }
  ngOnInit() {
    this.toggleSidebaService.isSidebarOpen$.subscribe((isOpen: boolean) => {
      this.isSidebarOpen = isOpen;
    });
  }

  toggleSidebarMenu() {
    this.toggleSidebaService.toggleSidebarMenu();
  }

  toggleSearchBox() {
    this.isSearchBoxOpen = !this.isSearchBoxOpen;
  }
  closeSearchBox() {
    this.isSearchBoxOpen = false;
  }
  toggleNotification() {
    this.isNotificationOpen = !this.isNotificationOpen;
  }

  toggleServices() {
    this.isServicesOpen = !this.isServicesOpen;
  }

  toggleOptions() {
    this.isOptionsOpen = !this.isOptionsOpen;
  }

  toggleAvatar() {
    this.isAvatarOpen = !this.isAvatarOpen;
  }

}
