import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../Doctor/Services/Doctor-Services/doctor.service';
import { Doctor } from '../../../../store/Doctor/doctor.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctor-listing',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './doctor-listing.component.html',
  styleUrls: ['./doctor-listing.component.css']
})
export class DoctorListingComponent implements OnInit {
  doctors!:Doctor[];
  filterCategories = [
    {
      id: 'gender',
      name: 'Gender',
      options: [
        { id: 'male', label: 'Male', value: 'male' },
        { id: 'female', label: 'Female', value: 'female' },
        { id: 'others', label: 'Others', value: 'others' }
      ]
    },
    {
      id: 'availability',
      name: 'Availability',
      options: [
        { id: 'morning', label: 'Morning', value: 'morning' },
        { id: 'afternoon', label: 'Afternoon', value: 'afternoon' },
        { id: 'evening', label: 'Evening', value: 'evening' }
      ]
    },
    {
      id: 'speciality',
      name: 'Speciality',
      options: [
        { id: 'morning', label: 'Morning', value: 'morning' },
        { id: 'afternoon', label: 'Afternoon', value: 'afternoon' },
        { id: 'evening', label: 'Evening', value: 'evening' }
      ]
    },
    {
      id: 'experience',
      name: 'Experience',
      options: [
        { id: 'morning', label: 'Morning', value: 'morning' },
        { id: 'afternoon', label: 'Afternoon', value: 'afternoon' },
        { id: 'evening', label: 'Evening', value: 'evening' }
      ]
    },
    { 
      id: 'consultation',
      name: 'Consultation',
      options: [
        { id: 'morning', label: 'Morning', value: 'morning' },
        { id: 'afternoon', label: 'Afternoon', value: 'afternoon' },
        { id: 'evening', label: 'Evening', value: 'evening' }
      ]
    },
    { 
      id: 'rating',
      name: 'Rating',
      options: [
        { id: 'morning', label: 'Morning', value: 'morning' },
        { id: 'afternoon', label: 'Afternoon', value: 'afternoon' },
        { id: 'evening', label: 'Evening', value: 'evening' }
      ]
    },
    { 
      id: 'languages',
      name: 'Languages',
      options: [
        { id: 'morning', label: 'Morning', value: 'morning' },
        { id: 'afternoon', label: 'Afternoon', value: 'afternoon' },
        { id: 'evening', label: 'Evening', value: 'evening' }
      ]
    }
  ];
  isMenuOpen: boolean = false;
  menuOptions = [
    { label: 'Most Popular', selected: false },
    { label: 'Best Rating', selected: false },
    { label: 'Newest', selected: false },
    { label: 'Price: Low to High', selected: false },
    { label: 'Price: High to Low', selected: false }
  ];

  selectOption(option: any) {
    this.menuOptions.forEach(item => item.selected = false);
    option.selected = true;
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openSections: { [id: string]: boolean } = {};

  constructor(
    private doctorService:DoctorService,
    private toastr:ToastrService
  ) {

   }

  ngOnInit() {
    this.filterCategories.forEach(category => {
      this.openSections[category.id] = false;
    });
    this.getDoctors()
  }
  toggleFilterSection(id: string): void {
    this.openSections[id] = !this.openSections[id];
  }

  isFilterSectionOpen(id: string): boolean {
    return this.openSections[id];
  }

  applyFilters(): void {
    const selectedFilters: any = {};
    this.filterCategories.forEach(category => {
      const selectedOptions = category.options.filter(option => {
        const checkbox = document.getElementById(option.id) as HTMLInputElement;
        return checkbox.checked;
      });
      selectedFilters[category.id] = selectedOptions.map(option => option.value);
    });
  }
  
  resetFilters(): void {
    this.filterCategories.forEach(category => {
      category.options.forEach(option => {
        const checkbox = document.getElementById(option.id) as HTMLInputElement;
        checkbox.checked = false;
      });
    });
  }
  


  getDoctors(){
    this.doctorService.getDoctors().subscribe(
      (res:any)=>{
        console.log("response from server", res);
        this.doctors = res.data.doctors;
      },
      (err)=>{
        // this.toastr.error(err)
      }
    )
  }


  addToInterestDoctor(doctor:Doctor){

  }
}
