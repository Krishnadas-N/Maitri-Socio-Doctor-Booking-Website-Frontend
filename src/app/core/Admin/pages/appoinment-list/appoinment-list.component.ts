import { Component, OnInit } from '@angular/core';
import { AppoinmentTableComponent } from '../../Components/appoinment-table/appoinment-table.component';
import { AdminService } from '../../Services/admin-service/auth.service';
import { AppointmentListResponse, appoinmentTableDetails } from '../../Models/dashboard.model';
import { AdminPaginationComponent } from '../../Components/admin-pagination/admin-pagination.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css'],
  standalone:true,
  imports:[AppoinmentTableComponent,AdminPaginationComponent,FormsModule],
})
export class AppoinmentListComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 0;
  totalCount: number = 0; 
  pageSize: number = 6;
  searchQuery: string = '';
  searchSubject: Subject<string> = new Subject<string>();
  appoinmentDetails!:appoinmentTableDetails[];
    tableHeaders = [
      { text: 'Doctor Name', key: 'doctorName' },
      { text: 'Speciality', key: 'speciality' },
      { text: 'Patient Name', key: 'patientName' },
      { text: 'Appointment Time', key: 'appointmentTime' },
      { text: 'Status', key: 'status' },
      { text: 'Amount', key: 'amount' }
    ];

    config = {
      showViewButton: true,
      showDeleteButton: false
    };

  constructor(private adminService:AdminService,
    private router:Router,
  ) { 
    this.searchSubject.pipe(
      debounceTime(300)
    ).subscribe(query => {
      this.searchQuery = query;
      this.getAppoinmentDetails();
    });
  }

  ngOnInit() {
    this.getAppoinmentDetails()
  }

  getAppoinmentDetails(){
    this.adminService.getAppoinmentDetails(this.currentPage,this.pageSize,this.searchQuery).subscribe({
      next:(res)=>{
        console.log("response from appoinmentListing",res);
        this.appoinmentDetails = res.data.appointments;
        this.currentPage = res.data.currentPage;
        this.pageSize = res.data.pageSize;
        this.totalCount = res.data.totalCount;
        this.totalPages = res.data.totalPages;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
     this.getAppoinmentDetails();
    }
  }
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
     this.getAppoinmentDetails();
  }
  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
     this.getAppoinmentDetails();
    }
  }
 
  onSearchChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchSubject.next(inputElement.value);
  }
  viewAppoinment(event:any){
   this.router.navigate(['/admin/appointments',event])
  }
}
