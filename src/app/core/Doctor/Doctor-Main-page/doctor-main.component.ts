import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../Components/header-component/header-component.component';
import { DoctorLoginComponent } from '../Components/doctor-login/doctor-login.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoctorFeedMainComponent } from '../Components/Doctor-Feed/doctor-feed-main/doctor-feed-main.component';
import { SidebarComponent } from '../../../shared/Components/sidebar-component/sidebar-component.component';

@Component({
  selector: 'app-doctor-main',
  standalone: true,
  imports: [HeaderComponentComponent,
            DoctorFeedMainComponent,
            DoctorLoginComponent,
            CommonModule,RouterOutlet,
            SidebarComponent,],
  templateUrl: './doctor-main.component.html',
  styleUrl: './doctor-main.component.css'
})
export class DoctorMainComponent {
  backgroundColor: string = 'bg-blue-700';
  showTooltip = false;
  tooltipTop = 0;
  tooltipLeft = 0;
  tooltipText = '';
  profileImage: string = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80';
  navItems: { iconClasses: string, backgroundColor: string, tooltip?: string,link?:string }[] = [
    { iconClasses: 'fas fa-tachometer-alt fa-sm  text-white', backgroundColor: 'bg-blue-400', tooltip: 'DashBoard',link:'/doctor/dashboard' },
    { iconClasses: "fab fa-instagram fa-sm text-white", backgroundColor: 'bg-pink-400', tooltip: 'Feed', link:'/doctor/feed'},
    { iconClasses: 'fas fa-calendar-alt fa-sm text-white', backgroundColor: 'bg-yellow-400', tooltip: 'Appoinments',link:'/doctor/appoinments' }
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

}
