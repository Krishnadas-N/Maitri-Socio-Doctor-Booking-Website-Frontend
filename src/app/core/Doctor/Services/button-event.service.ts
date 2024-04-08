import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonEventService {
  loading = true;
  private isSidebarOpenSubject  = new BehaviorSubject<boolean>(false);
  isSidebarOpen$ = this.isSidebarOpenSubject.asObservable();
  isSettingsPanelOpen = false;
  isSearchBoxOpen = false;

  constructor() {
    
   }
  toggleSidebarMenu() {
    const currentValue = this.isSidebarOpenSubject.getValue();
    this.isSidebarOpenSubject.next(!currentValue);
  }
}
