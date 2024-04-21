import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../../../shared/Components/sidebar-component/sidebar-component.component'; 
import { HeaderComponentComponent } from '../header-component/header-component.component';

@Component({
  selector: 'app-Admin-Page-Component',
  standalone:true,
  imports:[CommonModule,RouterOutlet,SidebarComponent,HeaderComponentComponent],
  templateUrl: './Admin-Page-Component.component.html',
  styleUrls: ['./Admin-Page-Component.component.css']
})
export class AdminPageComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  backgroundColor: string = 'bg-black';
  showTooltip = false;
  tooltipTop = 0;
  tooltipLeft = 0;
  tooltipText = '';
  profileImage: string = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80';
  navItems: { iconClasses: string, backgroundColor: string, tooltip?: string,link?:string }[] = [
    { iconClasses: 'fas fa-tachometer-alt fa-sm text-white', backgroundColor: 'bg-blue-400', tooltip: 'Dashboard', link: '/admin/' },
    { iconClasses: 'fas fa-users fa-sm text-white', backgroundColor: 'bg-green-400', tooltip: 'User Management', link: '/admin/users' },
    { iconClasses: 'fas fa-user-md fa-sm text-white', backgroundColor: 'bg-indigo-400', tooltip: 'Doctor Management', link: '/admin/doctors' },
    { iconClasses: 'fas fa-stethoscope fa-sm text-white', backgroundColor: 'bg-purple-400', tooltip: 'Doctor Specialization', link: '/admin/specializations' }
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
