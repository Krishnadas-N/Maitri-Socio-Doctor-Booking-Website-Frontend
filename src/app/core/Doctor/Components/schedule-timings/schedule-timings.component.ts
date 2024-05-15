import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID, afterNextRender } from '@angular/core';
import { DoctorService } from '../../Services/doctor-services/doctor.service'; 
import { Doctor } from '../../../../store/Doctor/doctor.model';
import { AppState } from '../../../../store/GlobalStore/app.state';
import { Store } from '@ngrx/store';
import { loadDoctor } from '../../../../store/Doctor/doctor.action';
import { GetCurrentdoctor } from '../../../../store/Doctor/doctor.selectors';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-schedule-timings',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './schedule-timings.component.html',
  styleUrls: ['./schedule-timings.component.css']
})
export class ScheduleTimingsComponent implements OnInit,OnDestroy {
  days: any[] = [];
  selectedDate!: Date;
  availableSlots: string[] =[]; 
  selectedSlots: { date: Date, slots: string[] }[] = [];
  currentDateIndex: number = 0; // Index of the currently selected date
  currentDate: any;
  isSmallScreen: boolean = false;
  fetchDoctorSubscritpion!:Subscription;
  isEdit:boolean=false;
  isLoading:boolean=false;
  currentDoctorDetails!:Doctor;
  constructor(private doctorService:DoctorService,private store:Store<AppState>,
    private toastr:ToastrService,
    @Inject(PLATFORM_ID) public  platformId: Object
  ) {
   
  
   }
  

  ngOnInit() {
      this.store.dispatch(loadDoctor());
   
    this.fetchDoctorSubscritpion = this.store.select(GetCurrentdoctor).subscribe(
      (res:any)=>{
        console.log(res);
        this.currentDoctorDetails = res;
        this.selectedSlots = res.selectedSlots;
        console.log(this.selectedSlots);
      }
    )
    this.fetchAvailableSlots();
    this.selectedDate = new Date();
    this.generateDays();
  

   
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth <= 640; // Define your breakpoint here
  }
  

  generateDays(): void {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      this.days.push({
        fullDate:date,
        name: this.getDayName(date.getDay()),
        date: date.getDate(),
        day: this.getDayOfWeek(date),
        year: date.getFullYear()
      });
    }
    this.currentDate = this.days[0];
  }


  fetchAvailableSlots(): void {
     this.availableSlots = ['6 AM','7 AM','8 AM','9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM','6 PM','7 PM','8 PM','9 PM','10 PM','11 PM'];
    // Implement logic to fetch available slots for the selected date from the backend
    // Assign the fetched slots to the availableSlots array
    // For demo purposes, initialize availableSlots with dummy data
   
  }

  // selectSlot(slot: string): void {
  //   const selectedDateSlots = this.currentDoctorDetails.selectedSlots?.find(slotItem => new Date(slotItem.date).toDateString() === new Date(this.currentDate.date).toDateString());

  //   if (selectedDateSlots && selectedDateSlots.slots.includes(slot)) {
  //     this.selectedSlots.slots= this.selectedSlots.slots.filter(item => item !== slot);
  //   } else {
  //     this.selectedSlots= { date: this.currentDate, slots: [slot] }
  //   }
  // }

  getDayName(day: number): string {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[day];
  }

  getDayOfWeek(date: Date): string {
    const options = { weekday: 'short' } as Intl.DateTimeFormatOptions;
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  prevDate(): void {
    if(!this.isEdit){
    if (this.currentDateIndex > 0) {
      this.currentDateIndex--;
      this.currentDate = this.days[this.currentDateIndex];
    }
  }else{
    this.toastr.warning('Please ensure to save the selected day\'s slots before proceeding.')
  }
  }
  nextDate(): void {
    if(!this.isEdit){
    if (this.currentDateIndex < this.days.length - 1) {
      this.currentDateIndex++;
      this.currentDate = this.days[this.currentDateIndex];
    }
  }else{
    this.toastr.warning('Please ensure to save the selected day\'s slots before proceeding.')
  }
  }

  saveSlots(): void {
   
    console.log('Selected Slots:', this.selectedSlots);
    this.isLoading=true
    this.doctorService.saveSlots(this.selectedSlots).subscribe(
      (response:any) => {
        console.log('Slots saved successfully:', response);
        this.isEdit=false;
        this.isLoading=false
        console.log("response",response);
        // Reset selectedSlots array after saving to backend
        this.selectedSlots = response.data.selectedSlots;
      },
      error => {
        this.isLoading=false
        this.isEdit=false;
        console.error('Error saving slots:', error);
      }
    );
  }

  selectDate(day: any): void {
    if(!this.isEdit){
    this.currentDate = day;
   }else{
    this.toastr.warning('Please ensure to save the selected day\'s slots before proceeding.')
  }
  }
  toggleIsEdit(){
    this.isEdit = true
  }

  isSlotSelected(slot: string): boolean {
    const selectedDateSlots = this.selectedSlots?.find(slotItem => {
      return new Date(slotItem.date).toDateString() === new Date(this.currentDate.fullDate).toDateString();
    });
    console.log("selectedDateSlots",selectedDateSlots);
    return selectedDateSlots ? selectedDateSlots.slots.includes(slot) : false;
  }
  toggleSlotSelection(slot: string): void {
      console.log(slot ,"clicket to add new");
    if (!Array.isArray(this.selectedSlots)) {
        console.error('Error: this.selectedSlots is not an array!');
        return;
    }
    const selectedDate = new Date(this.currentDate.fullDate);
    console.log('Selected slots:',this.selectedSlots);

    const existingDateIndex = this.selectedSlots.findIndex(item => new Date(item.date).getTime() === selectedDate.getTime());
    console.log('Existing date index:', existingDateIndex);

    try {
        if (existingDateIndex !== -1) {
          const selectedSlotsArray = existingDateIndex !== -1 ? this.selectedSlots[existingDateIndex].slots : [];

            const slotIndex = selectedSlotsArray.indexOf(slot);
            console.log("selectedSlotsArray,slotIndex",selectedSlotsArray,slotIndex);
            if (slotIndex === -1) {
                selectedSlotsArray.push(slot);
            } else {
                selectedSlotsArray.splice(slotIndex, 1);
            }
        } else {
          const newEntry = { date: selectedDate, slots: [slot] };
         const updatedSelectedSlots = [...this.selectedSlots, newEntry];
        this.selectedSlots = updatedSelectedSlots;
        }

    } catch (error) {
        console.error('Error occurred during slot selection:', error);
    }
}


  
  
  ngOnDestroy(): void {
      if(this.fetchDoctorSubscritpion){
        this.fetchDoctorSubscritpion.unsubscribe();
      }
  }
}
