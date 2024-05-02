import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DoctorService } from '../../../Doctor/Services/Doctor-Services/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { Doctor, Specialization } from '../../../../store/Doctor/doctor.model';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../Services/user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appoinment-slot-booking',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './appoinment-slot-booking.component.html',
  styleUrls: ['./appoinment-slot-booking.component.css'],
})
export class AppoinmentSlotBookingComponent implements OnInit,OnDestroy {
  private doctorSubscription: Subscription | undefined;
  private getBookedSubscription: Subscription | undefined;

  doctorId!: string;
  appointmentForm!: FormGroup;
  doctorDetails!: Doctor;
  dates: Date[] = [];
  selectedDate!: Date;
  isLoading: boolean = false;
  slotsDetails: { date: Date; slots: string[] }[] = [];
  appoinMentDetail = {
    typeofConsultaion: '',
    bookingDate: new Date(),
    slotTime: '',
  };
  bookedSlots: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService,
    private toastr: ToastrService,
    @Inject(PLATFORM_ID) public platformId: object,
    private fb: FormBuilder,
    private userService: UserServiceService
  ) {
    this.loadDates();
  }

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      typeofConsultaion: [
        this.appoinMentDetail.typeofConsultaion,
        Validators.required,
      ],
      bookingDate: [this.appoinMentDetail.bookingDate, Validators.required],
      slotTime: [this.appoinMentDetail.slotTime, Validators.required],
    });
    this.route.params.subscribe((params) => {
      console.log('Doctor Profile Page Params', params);
      if (params && params['id']) {
        this.doctorId = params['id'];
        if (isPlatformBrowser(this.platformId)) {
          this.findDoctor();
          this.getBookedSlots();
        }
      } else {
        this.router.navigate(['/find-doctors']);
      }
    });
  }

  loadDates() {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      this.dates.push(date);
    }
    this.selectedDate = this.dates[0];
  }
  selectDate(date: Date) {
    this.selectedDate = date;
    this.appoinMentDetail.bookingDate = date;
    this.appointmentForm.get('bookingDate')?.setValue(date);
    this.getBookedSlots();
  }

  findDoctor() {
    this.doctorSubscription = this.doctorService
      .getDoctorById(this.doctorId)
      .subscribe(
        (res) => {
          console.log(res.data);
          this.doctorDetails = res.data.doctor;
          if (this.doctorDetails.selectedSlots) {
            this.slotsDetails = this.doctorDetails.selectedSlots;
            console.log(this.slotsDetails);
          }
        },
        (err) => {
          this.toastr.error(err);
          this.router.navigate(['/find-doctors']);
        }
      );
  }

  getBookedSlots(){
    this.getBookedSubscription = this.userService.getBookedSlots(this.doctorId, this.selectedDate).subscribe(
      (res)=>{
        console.log("booked slots",res.data)
       this.bookedSlots = res.data;
      },
      (err)=>{
        this.toastr.error(err)
      }
    )
  }
  getSpecializationName(specialization: Specialization): string {
    if (typeof specialization === 'object' && specialization !== null) {
      return specialization.name;
    }
    return specialization || 'Not available';
  }

  getIconClass(type: string): string {
    switch (type) {
      case 'video':
        return 'fas fa-video text-blue-500 mr-2';
      case 'chat':
        return 'fas fa-comment text-blue-500 mr-2';
      case 'clinic':
        return 'fas fa-hospital text-blue-500 mr-2';
      default:
        return '';
    }
  }
  selectConsultation(type: string): void {
    this.appoinMentDetail.typeofConsultaion = type;
    this.appointmentForm.get('typeofConsultaion')?.setValue(type);
  }

  selectSlot(slot: string) {
    this.appoinMentDetail.slotTime = slot;
    this.appointmentForm.get('slotTime')?.setValue(slot);
  }

  getMorningSlots(): string[] {
    if (this.slotsDetails.length > 0) {
      const slotDetails = this.slotsDetails?.find((data) => {
        const slotDate = new Date(data.date);
        return (
          slotDate.getFullYear() === this.selectedDate.getFullYear() &&
          slotDate.getMonth() === this.selectedDate.getMonth() &&
          slotDate.getDate() === this.selectedDate.getDate()
        );
      });
      return slotDetails
        ? slotDetails.slots.filter((slot) => slot.split(' ')[1] == 'AM')
        : [];
    } else {
      return [];
    }
  }

  getAfternoonSlots(): string[] {
    if (this.slotsDetails.length > 0) {
      const slotDetails = this.slotsDetails?.find((data) => {
        const slotDate = new Date(data.date);
        return (
          slotDate.getFullYear() === this.selectedDate.getFullYear() &&
          slotDate.getMonth() === this.selectedDate.getMonth() &&
          slotDate.getDate() === this.selectedDate.getDate()
        );
      });

      return slotDetails
        ? slotDetails.slots.filter((slot) => slot.split(' ')[1] == 'PM')
        : [];
    } else {
      return [];
    }
  }

  saveAppoinmentDetails() {
    if (!this.appointmentForm.valid) {
      this.toastr.warning('Please select all details');
    } else {
      // Perform saving logic here using this.appointmentForm.value
      this.isLoading = true;
      console.log('Form values:', this.appointmentForm.value);
      this.userService
        .saveAppointment(this.appointmentForm.value, this.doctorId)
        .subscribe(
          (res) => {
            console.log('response from slotbokking user', res);
            this.isLoading = false;
            this.router.navigate(['/checkout', res.data]);
          },
          (err) => {
            this.isLoading = false;
            console.log('response from slotbokking user', err);
            this.toastr.error(err);
          }
        );
    }
  }
  isSlotBooked(slot: string): boolean {
    return this.bookedSlots.includes(slot);
}
  ngOnDestroy() {
    this.doctorSubscription?.unsubscribe();
    this.getBookedSubscription?.unsubscribe()
  }
}
