import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Doctor, Specialization } from '../../../../store/Doctor/doctor.model';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../Services/user.service';
import { RouterLink } from '@angular/router';
import { UserPaginationComponent } from '../../../../shared/Components/user-pagination/user-pagination.component';
import { FormsModule } from '@angular/forms';
import { SpecializationService } from '../../../../shared/Services/specialization-service/specialization.service';
import { FindDoctorsRequest } from '../../../../shared/Models/userSide.model';
import { User } from '../../../../store/User/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { loadUser } from '../../../../store/User/user.action';
import { GetCurrentUser } from '../../../../store/User/user.selector';
import { CommonService } from '../../../../shared/Services/common-services/common.service';

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
  currentUser!:User;

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
    private userService: UserService,
    private store:Store<AppState>,
    private commonService:CommonService
  ) {}

  ngOnInit() {

    this.store.dispatch(loadUser());
    this.store.select(GetCurrentUser).subscribe((res)=>{
      if(res){
      this.currentUser = res
      }
    })
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
    this.userService.getInterestedDoctors().subscribe({
      next:(res) => {
        console.log('interested doctors', res.data);
        this.InterestedDoctors = res.data;
      },
      error:(err) => {
        this.toastr.error(err.message, 'Error');
      }
  });
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
    const queryParams = this.constructQueryParams(request)
    console.log(request);
    this.userService.getAvailableDoctors(queryParams).subscribe({
      next:(res: any) => {
        console.log('response from server', res);
        this.doctors = res.data.doctors;
        this.currentPage = res.data.currentPage;
        this.pageSize = res.data.pageSize;
        this.totalCount = res.data.totalCount;
        this.totalPages = res.data.totalPages;
      },
    error: (err) => {
        console.log(err);
      }
  });
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
      this.userService.removeFromInterestedDoctors(doctor._id).subscribe({
        next:(res: any) => {
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
        error:(err) => {
          this.toastr.error(err); // Display error message
        }
    });
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
          value: category._id,
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

  private constructQueryParams(request: FindDoctorsRequest): any {
    const queryParams: any = {
      searchQuery: request.searchQuery,
      currentPage: request.currentPage.toString(),
      pageSize: request.pageSize.toString(),
      sortOption: request.sortOption
    };
    if(request.filters){
    for (const category of Object.keys(request.filters)) {
      queryParams[category] = request.filters[category].join(',');
    }
    }
    console.log("queryParams",queryParams)
    return queryParams;
  }

  toggleFollowDoctor(doctorId:string|undefined){
    if(!doctorId){
      return
    }
    this.commonService.toggleFollowDoctors(doctorId).subscribe({
      next:(res)=>{
       const doctor =  this.doctors.find((doctor)=>doctor._id?.toString() === doctorId);
       doctor!.followers=res.data
      },
      error:(err)=>{
        this.toastr.error(err)
      },
      complete:()=> {
         

      },
    })
  }

  isFollowedByUser(doctor:Doctor):boolean{
    return doctor.followers?.some(follower => follower.userId.toString() === this.currentUser._id?.toString()) || false;
  }
}
