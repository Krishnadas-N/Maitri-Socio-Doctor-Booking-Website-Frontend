import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Doctor, Specialization } from '../../../../store/Doctor/doctor.model';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../../Services/user-service.service';
import { RouterLink } from '@angular/router';
import { UserPaginationComponent } from '../../../../shared/Components/user-Pagination/user-Pagination.component';
import { FormsModule } from '@angular/forms';
import { SpecializationService } from '../../../Doctor/Services/specialization.service';

@Component({
  selector: 'app-doctor-listing',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, UserPaginationComponent],
  templateUrl: './doctor-listing.component.html',
  styleUrls: ['./doctor-listing.component.css'],
})
export class DoctorListingComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 0;
  totalCount: number = 0;
  pageSize: number = 6;
  doctors!: Doctor[];
  InterestedDoctors!: any;

  filterCategories = [
    {
      id: 'gender',
      name: 'Gender',
      options: [
        { id: 'male', label: 'Male', value: 'male' },
        { id: 'female', label: 'Female', value: 'female' },
        { id: 'others', label: 'Others', value: 'others' },
      ],
    },
    {
      id: 'availability',
      name: 'Availability',
      options: [
        { id: 'morning', label: 'Morning', value: 'morning' },
        { id: 'afternoon', label: 'Afternoon', value: 'afternoon' },
        { id: 'evening', label: 'Evening', value: 'evening' },
      ],
    },
    {
      id: 'speciality',
      name: 'Speciality',
      options: [],
    },
    {
      id: 'experience',
      name: 'Experience',
      options: [
        { id: '0-5', label: '0-5 years', value: '0-5' },
        { id: '5-10', label: '5-10 years', value: '5-10' },
        { id: '10+', label: '10+ years', value: '10+' },
      ],
    },
    {
      id: 'consultation',
      name: 'Consultation',
      options: [
        { id: 'video', label: 'Video', value: 'video' },
        { id: 'chat', label: 'Chat', value: 'chat' },
        { id: 'clinic', label: 'Clinic', value: 'clinic' },
        // Add more consultation types as needed
      ],
    },
    {
      id: 'rating',
      name: 'Rating',
      options: [
        { id: '5', label: '5 Stars', value: '5' },
        { id: '4', label: '4 Stars', value: '4' },
        { id: '3', label: '3 Stars', value: '3' },
        { id: '2', label: '2 Stars', value: '2' },
        { id: '1', label: '1 Stars', value: '1' },
        // Add more rating options as needed
      ],
    },
    {
      id: 'languages',
      name: 'Languages',
      options: [
        { id: 'english', label: 'English', value: 'English' },
        { id: 'spanish', label: 'Spanish', value: 'Spanish' },
        { id: 'french', label: 'French', value: 'French' },
        { id: 'malayalam', label: 'Malayalam', value: 'Malayalam' },
        { id: 'hindi', label: 'Hindi', value: 'Hindi' },
        { id: 'tamil', label: 'Tamil', value: 'Tamil' },
        // Add more languages as needed
      ],
    },
  ];

  selectedFilters: any = {};
  isMenuOpen: boolean = false;

  menuOptions = [
    { label: 'Most Popular', selected: false },
    { label: 'Best Rating', selected: false },
    { label: 'Newest', selected: false },
    { label: 'Price: Low to High', selected: false },
    { label: 'Price: High to Low', selected: false },
  ];

  searchOption: string = '';

  constructor(
    private specializationService: SpecializationService,
    private toastr: ToastrService,
    private userService: UserServiceService
  ) {}

  ngOnInit() {
    this.totalPages = Math.ceil(this.totalCount / this.pageSize);
    this.filterCategories.forEach((category) => {
      this.openSections[category.id] = false;
    });
    this.getDoctors();
    this.loadDoctorCategories();
    this.getInterestedDoctors();
  }

  selectOption(option: any) {
    this.menuOptions.forEach((item) => (item.selected = false));
    option.selected = true;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openSections: { [id: string]: boolean } = {};

  toggleFilterSection(id: string): void {
    this.openSections[id] = !this.openSections[id];
  }

  getInterestedDoctors() {
    this.userService.getInterestedDoctors().subscribe(
      (res) => {
        console.log('interested doctors', res.data);
        this.InterestedDoctors = res.data;
      },
      (err) => {
        this.toastr.error(err.message, 'Error');
      }
    );
  }

  isInterestedDoctor(doctor: Doctor): boolean {
    if (doctor._id) {
      return this.InterestedDoctors['doctorIds'].find(
        (x: any) => x.doctorId.toString() === doctor._id!.toString()
      )
        ? true
        : false;
    } else {
      return false;
    }
  }

  isFilterSectionOpen(id: string): boolean {
    return this.openSections[id];
  }

  applyFilters(): void {
    this.filterCategories.forEach((category) => {
      const selectedOptions = category.options.filter((option) => {
        const checkbox = document.getElementById(option.id) as HTMLInputElement;
        return checkbox.checked;
      });
      this.selectedFilters[category.id] = selectedOptions.map(
        (option) => option.value
      );
    });
    this.getDoctors();
    console.log(this.selectedFilters);
  }

  resetFilters(): void {
    this.filterCategories.forEach((category) => {
      category.options.forEach((option) => {
        const checkbox = document.getElementById(option.id) as HTMLInputElement;
        checkbox.checked = false;
      });
    });
    this.getDoctors();
  }

  getCurrentDayOfWeek(): string {
    const currentDate = new Date();
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const currentDayOfWeekNumber = currentDate.getDay();
    return daysOfWeek[currentDayOfWeekNumber];
  }

  isTodayAvailable(doctor: Doctor): boolean {
    const currentDayOfWeek = this.getCurrentDayOfWeek();
    console.log(currentDayOfWeek, doctor.availability);
    const todayAvailability = doctor.availability.find(
      (day) => day.dayOfWeek === currentDayOfWeek
    );
    return todayAvailability ? todayAvailability.isAvailable : false;
  }

  //
  getDoctors() {
    console.log('called docottos');
    const request = {
      searchQuery: this.searchOption || '',
      currentPage: this.currentPage || 1,
      pageSize: this.pageSize || 6,
      sortOption:
        this.menuOptions.find((x) => x.selected === true)?.label || '',
      filters: this.selectedFilters,
    };
    console.log(request);
    this.userService.getAvailableDoctors(request).subscribe(
      (res: any) => {
        console.log('response from server', res);
        this.doctors = res.data.doctors;
        this.currentPage = res.data.currentPage;
        this.pageSize = res.data.pageSize;
        this.totalCount = res.data.totalCount;
        this.totalPages = res.data.totalPages;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addToInterestDoctor(doctor: Doctor) {
    if (doctor && doctor._id) {
      this.userService.addInterestedDoctor(doctor._id).subscribe(
        (res: any) => {
          console.log(res.data);
          this.InterestedDoctors.doctorIds = res.data.doctorIds;
        },
        (err) => {
          this.toastr.error(err);
        }
      );
    }
  }

  getSpecializationName(specialization: Specialization): string {
    if (typeof specialization === 'object' && specialization !== null) {
      return specialization.name;
    }
    return specialization || 'Not available';
  }

  removeInterestDoctor(doctor: Doctor) {
    if (doctor && doctor._id) {
      this.userService.removeFromInterestedDoctors(doctor._id).subscribe(
        (res: any) => {
          console.log(this.InterestedDoctors['doctorIds']);
          const index = this.InterestedDoctors['doctorIds'].findIndex(
            (item: any) => item.doctorId === doctor._id?.toString()
          );
          if (index !== -1) {
            this.InterestedDoctors['doctorIds'].splice(index, 1);
            console.log('Doctor removed successfully');
            console.log(res.data); // Log any response data
          } else {
            console.log('Doctor not found in interested doctors list');
          }
        },
        (err) => {
          this.toastr.error(err); // Display error message
        }
      );
    }
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getDoctors();
    }
  }
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.getDoctors();
  }
  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getDoctors();
    }
  }

  loadDoctorCategories(): void {
    this.specializationService
      .getAllDoctorCategories()
      .subscribe((res: any) => {
        console.log(res.data);
        const specialityOptions = res.data.map((category: any) => ({
          id: category._id,
          label: category.name,
          value: category.name.toLowerCase(),
        }));

        const specialityFilter = this.filterCategories.find(
          (filter) => filter.id === 'speciality'
        );
        if (specialityFilter) {
          specialityFilter.options = specialityOptions;
        } else {
          this.filterCategories.push({
            id: 'speciality',
            name: 'Speciality',
            options: specialityOptions,
          });
        }
      });
  }
}
