import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SurveyComponent } from '../survery-component/survey.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css',
})
export class HeaderComponentComponent implements AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    private dialog: MatDialog,
    private router: Router
  ) {}
  searchQuery: string = '';
  showSuggestions: boolean = false;
  filteredResults: { label: string; url: string }[] = [];
  data = [
    { label: 'Survey', url: '/survey' },
    { label: 'User Home', url: '' },
    { label: 'Profile', url: '/profile' },
    { label: 'Find Doctors', url: '/find-doctors' },
    { label: 'Book Appointment', url: '/find-doctors' },
    { label: 'Chats', url: '/chats' },
    { label: 'Profile Home', url: '/profile' },
    { label: 'Appointments', url: '/profile/appointments' },
    { label: 'Interests', url: '/profile/interests' },
    { label: 'Wallet', url: '/profile/wallet' },
    { label: 'Medical Records', url: '/profile/medical-records' },
    { label: 'Saved Posts', url: '/profile/saved-posts' },
    { label: 'Notifications', url: '/profile/notifications' },
  ];

  ngAfterViewInit() {
    const burger =
      this.elementRef.nativeElement.querySelectorAll('.navbar-burger');
    const menu = this.elementRef.nativeElement.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
      burger.forEach((burgerItem: any) => {
        burgerItem.addEventListener('click', () => {
          menu.forEach((menuItem: any) => {
            menuItem.classList.toggle('hidden');
          });
        });
      });
    }

    const close =
      this.elementRef.nativeElement.querySelectorAll('.navbar-close');
    const backdrop =
      this.elementRef.nativeElement.querySelectorAll('.navbar-backdrop');

    if (close.length) {
      close.forEach((closeItem: any) => {
        closeItem.addEventListener('click', () => {
          menu.forEach((menuItem: any) => {
            menuItem.classList.toggle('hidden');
          });
        });
      });
    }

    if (backdrop.length) {
      backdrop.forEach((backdropItem: any) => {
        backdropItem.addEventListener('click', () => {
          menu.forEach((menuItem: any) => {
            menuItem.classList.toggle('hidden');
          });
        });
      });
    }
  }
  onSearch() {
    this.showSuggestions = true;
    const query = this.searchQuery.toLowerCase();
    this.filteredResults = this.data.filter((item) =>
      item.label.toLowerCase().includes(query)
    );
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
    this.clearSearch();
  }

  openSurveyDialog() {
    this.dialog.open(SurveyComponent, {
      width: '60vw',
      height: '80vh',
    });
  }

  clearSearch() {
    this.searchQuery = '';
    this.filteredResults = [];
    this.showSuggestions = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.search-container')) {
      this.showSuggestions = false;
    }
  }

  hideSuggestions() {
    this.showSuggestions = false;
  }
}
