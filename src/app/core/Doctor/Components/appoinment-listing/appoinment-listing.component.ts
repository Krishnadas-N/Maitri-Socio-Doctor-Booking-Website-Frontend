import { Component, OnInit } from '@angular/core';
import { UserSidebardetailsListingComponent } from '../../../../shared/Components/user-sidebardetails-listing/user-sidebardetails-listing.component';
import { MatDateRangePicker, MatDatepickerModule  } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DoctorService } from '../../Services/doctor-services/doctor.service'; 
import { ToastrService } from 'ngx-toastr';
import { AppoinmentListComponent } from '../../../../shared/Components/appoinment-list/appoinment-list.component'; 
import { PatientProfileComponent } from '../patient-profile/patient-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { UserPaginationComponent } from '../../../../shared/Components/user-pagination/user-pagination.component';
@Component({
  selector: 'app-AppoinmentListing',
  standalone:true,
  imports:[MatDatepickerModule, MatFormFieldModule,
     MatInputModule,MatDateRangePicker,CommonModule,FormsModule ,
     AppoinmentListComponent,PatientProfileComponent,UserSidebardetailsListingComponent,
    UserPaginationComponent
  ],
  templateUrl: './appoinment-listing.component.html',
  styleUrls: ['./appoinment-listing.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' } // Change 'en-US' to your desired locale
  ],
})
export class AppoinmentListingComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 0;
  totalCount: number = 0; 
  pageSize: number = 6;


  userType:"doctor" | "user" = 'doctor';
  rangePicker!: MatDateRangePicker<Date>;
  doctorAppoinments!:any;
  startDate!: Date;
  endDate!: Date; 
  countsObject!: { [key: string]: number };
  constructor(
  private doctorService:DoctorService,
  public dialog: MatDialog,
  private toastr:ToastrService
) { }
  selectedOption: string = 'all'; // Default selected option

  toggleOption() {
    console.log('Selected Option:', this.selectedOption);
    console.log('Start Date:', this.rangePicker);
    console.log('End Date:', this.endDate);
  }
  ngOnInit() {
    this.getDoctorAppoinments()
  }
  getDoctorAppoinments(){
    this.doctorService.getDoctorAppoinments(this.currentPage, this.pageSize).subscribe(
      (res:any)=>{
        console.log("response",res);
        this.doctorAppoinments = res.data.appointments;
        this.countsObject =   this.doctorAppoinments.counts.counts;
        console.log( this.countsObject );
        this.currentPage = res.data.page;
        this.pageSize = res.data.pageSize;
        this.totalCount = res.data.totalCount;
        this.totalPages = res.data.totalPages;
      },
      (err)=>{
        this.toastr.error(err)
      }
    )
  }
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  viewDetail(event:any){
    const appoinments = this.doctorAppoinments.appointments.find((ele:any)=> ele._id.toString() == event);
    const dialogRef = this.dialog.open(UserSidebardetailsListingComponent, {
      data: { 
        appoinments
        // Add more data as needed
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getDoctorAppoinments()
    }
  }
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.getDoctorAppoinments()
  }
  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getDoctorAppoinments()
    }
  }

}
